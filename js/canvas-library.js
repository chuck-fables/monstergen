/**
 * Canvas Library Module
 * Provides a drawer to browse and add saved items to the canvas
 */

const CanvasLibrary = {
    // Current state
    isOpen: false,
    currentType: 'monster',
    searchQuery: '',

    // Storage keys for each type
    storageKeys: {
        monster: 'monsterLibrary',  // Uses same key as MonsterStorage
        npc: 'dmtk_npcs',
        loot: 'dmtk_loot',
        hook: 'dmtk_hooks',
        location: 'dmtk_locations',
        item: 'dmtk_items'
    },

    // Type configurations (colors match CanvasCards)
    typeConfig: {
        monster: {
            color: '#8B0000',
            label: 'Monsters',
            icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L9 7H4l3 5-3 5h5l3 5 3-5h5l-3-5 3-5h-5L12 2z"></path></svg>',
            getName: (item) => (item.data && item.data.name) || item.name || 'Monster',
            getMeta: (item) => {
                const data = item.data || item;
                return `CR ${data.challengeRating || data.cr || item.cr || '?'} ${data.type || item.type || ''}`;
            }
        },
        npc: {
            color: '#9E2A2B',
            label: 'NPCs',
            icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
            getName: (item) => item.name || 'NPC',
            getMeta: (item) => `${item.raceName || ''} ${item.vocation?.name || ''}`
        },
        loot: {
            color: '#DAA520',
            label: 'Loot',
            icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>',
            getName: (item) => item.hoardName || 'Treasure Hoard',
            getMeta: (item) => `${item.totalValue || 0} gp total`
        },
        hook: {
            color: '#D35400',
            label: 'Hooks',
            icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>',
            getName: (item) => item.title || 'Adventure Hook',
            getMeta: (item) => item.theme || item.biome?.name || ''
        },
        location: {
            color: '#27AE60',
            label: 'Locations',
            icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
            getName: (item) => item.name || 'Location',
            getMeta: (item) => item.type || item.scale || ''
        },
        item: {
            color: '#8E44AD',
            label: 'Items',
            icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
            getName: (item) => item.name || 'Magic Item',
            getMeta: (item) => `${item.rarity || ''} ${item.type || ''}`
        }
    },

    /**
     * Toggle the library drawer
     */
    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    },

    /**
     * Open the library drawer
     */
    open() {
        const drawer = document.getElementById('canvas-library-drawer');
        if (!drawer) return;

        drawer.classList.add('open');
        this.isOpen = true;
        this.refresh();
    },

    /**
     * Close the library drawer
     */
    close() {
        const drawer = document.getElementById('canvas-library-drawer');
        if (!drawer) return;

        drawer.classList.remove('open');
        this.isOpen = false;
    },

    /**
     * Switch to a different item type tab
     */
    switchTab(type) {
        this.currentType = type;

        // Update tab buttons
        document.querySelectorAll('.canvas-library-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.type === type);
        });

        // Clear search
        const searchInput = document.getElementById('canvas-library-search');
        if (searchInput) {
            searchInput.value = '';
            this.searchQuery = '';
        }

        this.refresh();
    },

    /**
     * Filter items by search query
     */
    filter(query) {
        this.searchQuery = query.toLowerCase();
        this.refresh();
    },

    /**
     * Refresh the library content
     */
    refresh() {
        const content = document.getElementById('canvas-library-content');
        if (!content) return;

        const items = this.getItems(this.currentType);
        const config = this.typeConfig[this.currentType];

        if (!items || items.length === 0) {
            content.innerHTML = `
                <div class="canvas-library-empty">
                    ${config.icon}
                    <p>No saved ${config.label.toLowerCase()} yet</p>
                </div>
            `;
            return;
        }

        // Filter by search query
        let filteredItems = items;
        if (this.searchQuery) {
            filteredItems = items.filter(item => {
                const name = config.getName(item).toLowerCase();
                const meta = config.getMeta(item).toLowerCase();
                return name.includes(this.searchQuery) || meta.includes(this.searchQuery);
            });
        }

        if (filteredItems.length === 0) {
            content.innerHTML = `
                <div class="canvas-library-empty">
                    <p>No matching items found</p>
                </div>
            `;
            return;
        }

        content.innerHTML = filteredItems.map(item => this.renderItem(item, this.currentType)).join('');
    },

    /**
     * Get items from localStorage for a type
     */
    getItems(type) {
        const key = this.storageKeys[type];
        if (!key) return [];

        try {
            return JSON.parse(localStorage.getItem(key)) || [];
        } catch (e) {
            console.error(`Failed to load ${type} library:`, e);
            return [];
        }
    },

    /**
     * Render a single library item
     */
    renderItem(item, type) {
        const config = this.typeConfig[type];
        const name = config.getName(item);
        const meta = config.getMeta(item);

        return `
            <div class="canvas-library-item" onclick="CanvasLibrary.addToCanvas('${type}', '${item.id}')">
                <div class="canvas-library-item-icon" style="background: ${config.color}">
                    ${config.icon}
                </div>
                <div class="canvas-library-item-info">
                    <div class="canvas-library-item-name">${this.escapeHtml(name)}</div>
                    <div class="canvas-library-item-meta">${this.escapeHtml(meta)}</div>
                </div>
                <button class="canvas-library-item-add" onclick="event.stopPropagation(); CanvasLibrary.addToCanvas('${type}', '${item.id}')" title="Add to canvas">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
            </div>
        `;
    },

    /**
     * Add an item to the canvas
     */
    addToCanvas(type, itemId) {
        const items = this.getItems(type);
        const item = items.find(i => i.id === itemId);

        if (!item) {
            console.error(`Item not found: ${itemId}`);
            return;
        }

        // For monsters, unwrap the data from the wrapper
        const dataToAdd = type === 'monster' ? (item.data || item) : item;

        // Add to canvas
        CanvasCards.addCard(type, dataToAdd);

        // Show feedback
        const config = this.typeConfig[type];
        if (typeof showNotification === 'function') {
            showNotification(`Added ${config.getName(item)} to canvas`, 'success');
        }
    },

    /**
     * Escape HTML special characters
     */
    escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
};
