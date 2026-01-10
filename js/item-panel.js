/**
 * Item Panel Controller
 * Handles UI interactions for the Magic Item generator panel
 */

const ItemPanel = {
    currentResult: null,
    editingItemId: null,

    init() {
        this.populateTypeSelect();
        this.populateRaritySelect();
        this.populateBiomeSelect();
        this.loadLibrary();
        this.updateSubtypeSelect();
    },

    /**
     * Populate the item type dropdown
     */
    populateTypeSelect() {
        const select = document.getElementById('itemType');
        if (!select) return;

        select.innerHTML = '';
        const types = ItemGenerator.getItemTypes();
        types.forEach(type => {
            const option = document.createElement('option');
            option.value = type.id;
            option.textContent = type.name;
            select.appendChild(option);
        });

        select.addEventListener('change', () => this.updateSubtypeSelect());
    },

    /**
     * Update subtype dropdown based on selected type
     */
    updateSubtypeSelect() {
        const typeSelect = document.getElementById('itemType');
        const subtypeSelect = document.getElementById('itemSubtype');
        if (!typeSelect || !subtypeSelect) return;

        const selectedType = typeSelect.value;
        const subtypes = ItemGenerator.getSubtypes(selectedType);

        subtypeSelect.innerHTML = '';
        subtypes.forEach(subtype => {
            const option = document.createElement('option');
            option.value = subtype.id;
            option.textContent = subtype.name;
            subtypeSelect.appendChild(option);
        });
    },

    /**
     * Populate rarity dropdown
     */
    populateRaritySelect() {
        const select = document.getElementById('itemRarity');
        if (!select) return;

        select.innerHTML = '';
        const rarities = ItemGenerator.getRarities();
        rarities.forEach(rarity => {
            const option = document.createElement('option');
            option.value = rarity.id;
            option.textContent = rarity.name;
            option.style.color = rarity.color;
            select.appendChild(option);
        });
    },

    /**
     * Populate biome dropdown
     */
    populateBiomeSelect() {
        const select = document.getElementById('itemBiome');
        if (!select) return;

        select.innerHTML = '';
        const biomes = ItemGenerator.getBiomes();
        biomes.forEach(biome => {
            const option = document.createElement('option');
            option.value = biome.id;
            option.textContent = biome.name;
            select.appendChild(option);
        });
    },

    /**
     * Generate items
     */
    generate(mode = 'normal') {
        const itemType = document.getElementById('itemType')?.value || 'random';
        const subtype = document.getElementById('itemSubtype')?.value || 'random';
        const rarity = document.getElementById('itemRarity')?.value || 'random';
        const biome = document.getElementById('itemBiome')?.value || 'random';
        const quantity = parseInt(document.getElementById('itemQuantity')?.value) || 1;

        this.currentResult = ItemGenerator.generate({
            itemType,
            subtype,
            rarity,
            biome,
            quantity,
            mode
        });

        if (this.currentResult) {
            this.renderItems();
        }
    },

    /**
     * Generate with "Include All" mode (random biomes)
     */
    generateIncludeAll() {
        this.generate('includeAll');
    },

    /**
     * Generate with "Surprise Me" mode (all random)
     */
    generateSurpriseMe() {
        this.generate('surpriseMe');
    },

    /**
     * Render items to output area
     */
    renderItems() {
        const output = document.getElementById('itemOutput');
        if (!output || !this.currentResult) return;

        output.innerHTML = ItemCardRenderer.renderBatch(this.currentResult, {
            editingItemId: this.editingItemId
        });
    },

    /**
     * Toggle edit mode for an item
     */
    toggleEdit(itemId) {
        if (this.editingItemId === itemId) {
            this.editingItemId = null;
        } else {
            this.editingItemId = itemId;
        }
        this.renderItems();
    },

    /**
     * Save edits from edit mode
     */
    saveEdits(itemId) {
        if (!this.currentResult || !this.currentResult.items) return;

        const itemIndex = this.currentResult.items.findIndex(i => i.id === itemId);
        if (itemIndex === -1) return;

        const card = document.querySelector(`.item-card[data-item-id="${itemId}"]`);
        if (!card) return;

        const edits = ItemCardRenderer.collectEdits(card);

        // Apply edits to the item
        const item = this.currentResult.items[itemIndex];

        if (edits.name) item.name = edits.name;
        if (edits.appearance) item.appearance = edits.appearance;
        if (edits.flavorText !== undefined) item.flavorText = edits.flavorText;

        if (edits.mechanics) {
            edits.mechanics.forEach((mechEdit, index) => {
                if (item.mechanics && item.mechanics[index]) {
                    if (mechEdit.name) item.mechanics[index].name = mechEdit.name;
                    if (mechEdit.description) item.mechanics[index].description = mechEdit.description;
                }
            });
        }

        if (edits.artifactProperties) {
            for (const [group, props] of Object.entries(edits.artifactProperties)) {
                if (item.artifactProperties && item.artifactProperties[group]) {
                    props.forEach((propEdit, index) => {
                        if (item.artifactProperties[group][index]) {
                            if (propEdit.name) item.artifactProperties[group][index].name = propEdit.name;
                            if (propEdit.desc) item.artifactProperties[group][index].desc = propEdit.desc;
                        }
                    });
                }
            }
        }

        if (edits.attunement && item.attunement) {
            item.attunement.requirement = edits.attunement.requirement;
        }

        // Mark as modified
        item.modifiedAt = new Date().toISOString();

        this.editingItemId = null;
        this.renderItems();
        this.showNotification('Item changes saved', 'success');
    },

    /**
     * Cancel edits and return to view mode
     */
    cancelEdits() {
        this.editingItemId = null;
        this.renderItems();
    },

    /**
     * Save all items to library
     */
    saveAll() {
        if (!this.currentResult || !this.currentResult.items) {
            this.showNotification('No items to save', 'error');
            return;
        }

        const saved = this.getStoredItems();
        let newCount = 0;

        this.currentResult.items.forEach(item => {
            if (!saved.some(i => i.id === item.id)) {
                saved.unshift(item);
                newCount++;
            }
        });

        if (newCount === 0) {
            this.showNotification('All items already saved', 'info');
            return;
        }

        try {
            localStorage.setItem('dmtk_items', JSON.stringify(saved));
            this.loadLibrary();
            this.showNotification(`Saved ${newCount} item${newCount > 1 ? 's' : ''} to library`, 'success');
        } catch (e) {
            this.showNotification('Failed to save items', 'error');
        }
    },

    /**
     * Save a single item
     */
    saveItem(itemId) {
        if (!this.currentResult || !this.currentResult.items) return;

        const item = this.currentResult.items.find(i => i.id === itemId);
        if (!item) return;

        const saved = this.getStoredItems();

        if (saved.some(i => i.id === itemId)) {
            this.showNotification('Item already saved', 'info');
            return;
        }

        saved.unshift(item);

        try {
            localStorage.setItem('dmtk_items', JSON.stringify(saved));
            this.loadLibrary();
            this.showNotification('Item saved to library', 'success');
        } catch (e) {
            this.showNotification('Failed to save item', 'error');
        }
    },

    /**
     * Copy all items to clipboard
     */
    async copyAll() {
        if (!this.currentResult) {
            this.showNotification('No items to copy', 'error');
            return;
        }

        const text = ItemCardRenderer.batchToText(this.currentResult);

        try {
            await navigator.clipboard.writeText(text);
            this.showNotification('Copied all items to clipboard', 'success');
        } catch (e) {
            this.fallbackCopy(text);
        }
    },

    /**
     * Copy a single item
     */
    async copyItem(itemId) {
        if (!this.currentResult || !this.currentResult.items) return;

        const item = this.currentResult.items.find(i => i.id === itemId);
        if (!item) return;

        const text = ItemCardRenderer.toText(item);

        try {
            await navigator.clipboard.writeText(text);
            this.showNotification('Item copied to clipboard', 'success');
        } catch (e) {
            this.fallbackCopy(text);
        }
    },

    /**
     * Fallback copy method
     */
    fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        this.showNotification('Copied to clipboard', 'success');
    },

    /**
     * Get stored items from localStorage
     */
    getStoredItems() {
        try {
            return JSON.parse(localStorage.getItem('dmtk_items')) || [];
        } catch (e) {
            return [];
        }
    },

    /**
     * Load and display the item library
     */
    loadLibrary() {
        const container = document.getElementById('itemLibraryList');
        if (!container) return;

        const items = this.getStoredItems();

        if (items.length === 0) {
            container.innerHTML = `
                <div class="item-library-empty">
                    No saved items yet
                </div>
            `;
            return;
        }

        container.innerHTML = items.map(item =>
            ItemCardRenderer.renderCompact(item)
        ).join('');
    },

    /**
     * Load a saved item for viewing
     */
    loadItem(itemId) {
        const items = this.getStoredItems();
        const item = items.find(i => i.id === itemId);

        if (item) {
            this.currentResult = {
                id: 'single_' + itemId,
                timestamp: new Date().toISOString(),
                settings: {
                    itemType: item.type,
                    rarity: item.rarity,
                    biome: item.biome,
                    quantity: 1
                },
                items: [item]
            };
            this.renderItems();
        }
    },

    /**
     * Delete an item from library
     */
    deleteItem(itemId) {
        if (!confirm('Delete this item from your library?')) return;

        let items = this.getStoredItems();
        items = items.filter(i => i.id !== itemId);

        try {
            localStorage.setItem('dmtk_items', JSON.stringify(items));
            this.loadLibrary();
            this.showNotification('Item deleted', 'success');
        } catch (e) {
            this.showNotification('Failed to delete item', 'error');
        }
    },

    /**
     * Show notification
     */
    showNotification(message, type = 'info') {
        if (typeof showNotification === 'function') {
            showNotification(message, type);
            return;
        }

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 24px;
            background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
            color: white;
            border-radius: 6px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => ItemPanel.init(), 100);
});
