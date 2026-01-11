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

    // Type icons for library cards
    typeIcons: {
        monsters: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L9 7H4l3 5-3 5h5l3 5 3-5h5l-3-5 3-5h-5L12 2z"></path></svg>',
        npcs: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
        loot: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>',
        hooks: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>',
        locations: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
        items: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'
    },

    // Type colors for library cards
    typeColors: {
        monsters: '#8B0000',
        npcs: '#9E2A2B',
        loot: '#DAA520',
        hooks: '#D35400',
        locations: '#27AE60',
        items: '#8E44AD'
    },

    renderItem(item) {
        // Monsters use wrapper format {id, name, type, cr, data}
        const monsterData = this.currentType === 'monsters' ? (item.data || item) : item;
        const name = monsterData.name || item.name || item.hoardName || 'Unnamed';
        let meta = '';
        let subtitle = '';

        switch (this.currentType) {
            case 'monsters':
                const cr = monsterData.challengeRating || monsterData.cr || item.cr || '?';
                const size = monsterData.size || 'Medium';
                const type = monsterData.type || item.type || 'creature';
                subtitle = `${size} ${type}`;
                meta = `CR ${cr}`;
                break;
            case 'npcs':
                const race = item.raceName || item.race?.displayName || item.race || 'Unknown';
                const vocation = item.vocation?.name || item.profession || '';
                subtitle = race;
                meta = vocation;
                break;
            case 'loot':
                const level = item.partyLevel || '?';
                const value = item.totalValue ? Math.round(item.totalValue) + ' gp' : '';
                subtitle = `Party Level ${level}`;
                meta = value;
                break;
            case 'hooks':
                const biome = item.biome?.name || item.environment || '';
                const theme = item.theme?.name || item.type || '';
                subtitle = biome;
                meta = theme;
                break;
            case 'locations':
                const locType = item.locationType || item.type || '';
                const locBiome = item.biome || item.environment || '';
                subtitle = locType;
                meta = locBiome;
                break;
            case 'items':
                const rarity = item.rarityData?.name || item.rarity || '';
                const itemType = item.subtype?.name || item.type || '';
                subtitle = itemType;
                meta = rarity;
                break;
        }

        const icon = this.typeIcons[this.currentType] || '';
        const color = this.typeColors[this.currentType] || '#666';

        return `
            <div class="library-card" onclick="LibraryPanel.viewItem('${item.id}')">
                <div class="library-card-icon" style="background: ${color}">
                    ${icon}
                </div>
                <div class="library-card-content">
                    <div class="library-card-name">${this.escapeHtml(name)}</div>
                    <div class="library-card-subtitle">${this.escapeHtml(subtitle)}</div>
                    <div class="library-card-meta">${this.escapeHtml(meta)}</div>
                </div>
                <div class="library-card-actions">
                    <button class="library-card-btn" onclick="event.stopPropagation(); LibraryPanel.sendToCanvas('${item.id}')" title="Send to Canvas">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                    </button>
                    <button class="library-card-btn danger" onclick="event.stopPropagation(); LibraryPanel.deleteItem('${item.id}')" title="Delete">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
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
                    // Use the App's loadFromLibrary method
                    if (typeof Sidebar !== 'undefined') {
                        Sidebar.switchPanel('monster');
                    }
                    // Load the monster using App's method
                    if (typeof App !== 'undefined' && App.loadFromLibrary) {
                        App.loadFromLibrary(id);
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
