/**
 * Library Panel Controller
 * Displays all saved content from localStorage
 */

const LibraryPanel = {
    currentType: 'monsters',
    searchQuery: '',

    // Storage key mapping
    storageKeys: {
        monsters: 'monsterLibrary',  // Uses same key as MonsterStorage
        npcs: 'dmtk_npcs',
        loot: 'dmtk_loot',
        hooks: 'dmtk_hooks',
        locations: 'dmtk_locations',
        items: 'dmtk_items'
    },

    init() {
        // Load default tab
        this.switchTab('monsters');
    },

    switchTab(type) {
        this.currentType = type;
        this.searchQuery = '';

        // Update tab UI
        document.querySelectorAll('.library-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.type === type);
        });

        // Clear search
        const searchInput = document.getElementById('library-search');
        if (searchInput) searchInput.value = '';

        // Load content
        this.loadContent();
    },

    search(query) {
        this.searchQuery = query.toLowerCase();
        this.loadContent();
    },

    loadContent() {
        const container = document.getElementById('library-content');
        if (!container) return;

        try {
            const key = this.storageKeys[this.currentType];
            let items = JSON.parse(localStorage.getItem(key)) || [];

            // Filter by search query
            if (this.searchQuery) {
                items = items.filter(item => {
                    const name = item.name || item.hoardName || '';
                    return name.toLowerCase().includes(this.searchQuery);
                });
            }

            if (items.length === 0) {
                container.innerHTML = `
                    <div class="library-empty">
                        <p>No saved ${this.currentType} found.</p>
                        <p>Generate some content and save it to see it here!</p>
                    </div>
                `;
                return;
            }

            container.innerHTML = `
                <div class="library-grid">
                    ${items.map(item => this.renderItem(item)).join('')}
                </div>
            `;
        } catch (e) {
            console.error('Failed to load library content:', e);
            container.innerHTML = '<div class="library-empty"><p>Failed to load content</p></div>';
        }
    },

    renderItem(item) {
        // Monsters use wrapper format {id, name, type, cr, data}
        const monsterData = this.currentType === 'monsters' ? (item.data || item) : item;
        const name = monsterData.name || item.name || item.hoardName || 'Unnamed';
        let meta = '';

        switch (this.currentType) {
            case 'monsters':
                const cr = monsterData.challengeRating || monsterData.cr || item.cr || '?';
                const size = monsterData.size || 'Medium';
                const type = monsterData.type || item.type || 'creature';
                meta = `CR ${cr} | ${size} ${type}`;
                break;
            case 'npcs':
                const race = item.race?.displayName || item.race || 'Unknown';
                const profession = item.profession || '';
                meta = `${race}${profession ? ' - ' + profession : ''}`;
                break;
            case 'loot':
                const level = item.partyLevel || '?';
                const value = item.totalValue ? Math.round(item.totalValue) + ' gp' : '';
                meta = `Level ${level}${value ? ' | ' + value : ''}`;
                break;
            case 'hooks':
                const hookType = item.type || '';
                const setting = item.environment || '';
                meta = `${hookType}${setting ? ' - ' + setting : ''}`;
                break;
            case 'locations':
                const locType = item.locationType || item.type || '';
                const biome = item.biome || item.environment || '';
                meta = `${locType}${biome ? ' - ' + biome : ''}`;
                break;
            case 'items':
                const rarity = item.rarityData?.name || item.rarity || '';
                const itemType = item.subtype?.name || item.type || '';
                meta = `${rarity}${itemType ? ' ' + itemType : ''}`;
                break;
        }

        return `
            <div class="library-item" onclick="LibraryPanel.viewItem('${item.id}')">
                <div class="library-item-header">
                    <span class="library-item-name">${this.escapeHtml(name)}</span>
                </div>
                <div class="library-item-meta">${meta}</div>
                <div class="library-item-actions">
                    <button class="library-item-btn" onclick="event.stopPropagation(); LibraryPanel.sendToCanvas('${item.id}')">
                        Send to Canvas
                    </button>
                    <button class="library-item-btn danger" onclick="event.stopPropagation(); LibraryPanel.deleteItem('${item.id}')">
                        Delete
                    </button>
                </div>
            </div>
        `;
    },

    viewItem(id) {
        const key = this.storageKeys[this.currentType];
        try {
            const items = JSON.parse(localStorage.getItem(key)) || [];
            const item = items.find(i => i.id === id);
            if (!item) return;

            // Navigate to the appropriate panel and load the item
            switch (this.currentType) {
                case 'monsters':
                    // Use the MonsterStorage-compatible load
                    if (typeof Sidebar !== 'undefined') {
                        Sidebar.switchPanel('monster');
                        // If MonsterPanel exists and has loadFromLibrary, use it
                        // Otherwise use the library modal approach
                        if (typeof loadMonsterFromLibrary === 'function') {
                            loadMonsterFromLibrary(id);
                        }
                    }
                    break;
                case 'npcs':
                    if (typeof NPCPanel !== 'undefined') {
                        Sidebar.switchPanel('npc');
                        NPCPanel.loadNPC(id);
                    }
                    break;
                case 'loot':
                    if (typeof LootPanel !== 'undefined') {
                        Sidebar.switchPanel('loot');
                        LootPanel.loadLoot(id);
                    }
                    break;
                case 'hooks':
                    if (typeof HookPanel !== 'undefined') {
                        Sidebar.switchPanel('hooks');
                        HookPanel.loadHook(id);
                    }
                    break;
                case 'locations':
                    if (typeof LocationPanel !== 'undefined') {
                        Sidebar.switchPanel('location');
                        LocationPanel.loadLocation(id);
                    }
                    break;
                case 'items':
                    if (typeof ItemPanel !== 'undefined') {
                        Sidebar.switchPanel('item');
                        ItemPanel.loadItem(id);
                    }
                    break;
            }
        } catch (e) {
            console.error('Failed to view item:', e);
        }
    },

    sendToCanvas(id) {
        const key = this.storageKeys[this.currentType];
        try {
            const items = JSON.parse(localStorage.getItem(key)) || [];
            const item = items.find(i => i.id === id);
            if (!item) return;

            // Map type to canvas card type
            const typeMap = {
                monsters: 'monster',
                npcs: 'npc',
                loot: 'loot',
                hooks: 'hook',
                locations: 'location',
                items: 'item'
            };

            // For monsters, unwrap the data from the wrapper
            const dataToSend = this.currentType === 'monsters' ? (item.data || item) : item;

            if (typeof CampaignCanvas !== 'undefined') {
                CampaignCanvas.addCard(typeMap[this.currentType], dataToSend);
                Sidebar.switchPanel('campaign');
            }
        } catch (e) {
            console.error('Failed to send to canvas:', e);
        }
    },

    deleteItem(id) {
        if (!confirm('Are you sure you want to delete this item?')) return;

        const key = this.storageKeys[this.currentType];
        try {
            let items = JSON.parse(localStorage.getItem(key)) || [];
            items = items.filter(i => i.id !== id);
            localStorage.setItem(key, JSON.stringify(items));
            this.loadContent();
        } catch (e) {
            console.error('Failed to delete item:', e);
        }
    },

    escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    LibraryPanel.init();
});
