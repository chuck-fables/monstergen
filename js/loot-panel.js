/**
 * Loot Panel Controller
 * Handles UI interactions for the Loot generator panel
 */

const LootPanel = {
    currentLoot: null,
    isEditing: false,

    init() {
        this.populateHoardTypeSelect();
        this.loadLibrary();
    },

    /**
     * Populate the hoard type dropdown
     */
    populateHoardTypeSelect() {
        const select = document.getElementById('lootHoardType');
        if (!select) return;

        // Clear existing options
        select.innerHTML = '';

        // Add all hoard types
        const types = LootGenerator.getHoardTypes();
        types.forEach(type => {
            const option = document.createElement('option');
            option.value = type.id;
            option.textContent = type.name;
            option.title = type.description;
            select.appendChild(option);
        });

        // Default to standard
        select.value = 'standard';
    },

    /**
     * Generate new loot
     */
    generate() {
        const levelInput = document.getElementById('lootPartyLevel');
        const sizeInput = document.getElementById('lootPartySize');
        const typeSelect = document.getElementById('lootHoardType');

        const partyLevel = parseInt(levelInput?.value) || 5;
        const partySize = parseInt(sizeInput?.value) || 4;
        const hoardType = typeSelect?.value || 'standard';

        this.currentLoot = LootGenerator.generate({
            partyLevel,
            partySize,
            hoardType
        });

        if (this.currentLoot) {
            this.renderLoot();
        }
    },

    /**
     * Render the current loot to the output area
     */
    renderLoot() {
        const output = document.getElementById('lootOutput');
        if (!output || !this.currentLoot) return;

        const showTags = document.getElementById('lootShowTags')?.checked !== false;
        const showValues = document.getElementById('lootShowValues')?.checked !== false;

        output.innerHTML = LootCardRenderer.render(this.currentLoot, {
            showTags,
            showValues,
            editable: this.isEditing
        });
    },

    /**
     * Toggle edit mode
     */
    toggleEdit() {
        if (!this.currentLoot) return;
        this.isEditing = !this.isEditing;
        this.renderLoot();
    },

    /**
     * Save edits from edit mode
     */
    saveEdits() {
        if (!this.currentLoot) return;

        const card = document.querySelector('.loot-card');
        if (!card) return;

        const edits = LootCardRenderer.collectEdits(card);

        // Apply simple field edits
        if (edits.hoardName) this.currentLoot.hoardName = edits.hoardName;
        if (edits.hoardDescription) this.currentLoot.hoardDescription = edits.hoardDescription;

        // Apply gold edits
        if (edits.gold) {
            if (edits.gold.coins) {
                if (edits.gold.coins.pp !== undefined) this.currentLoot.gold.coins.pp = edits.gold.coins.pp;
                if (edits.gold.coins.gp !== undefined) this.currentLoot.gold.coins.gp = edits.gold.coins.gp;
                if (edits.gold.coins.sp !== undefined) this.currentLoot.gold.coins.sp = edits.gold.coins.sp;
                if (edits.gold.coins.cp !== undefined) this.currentLoot.gold.coins.cp = edits.gold.coins.cp;
                // Recalculate total
                const c = this.currentLoot.gold.coins;
                this.currentLoot.gold.total = (c.pp || 0) * 10 + (c.gp || 0) + (c.sp || 0) / 10 + (c.cp || 0) / 100;
            }
            if (edits.gold.description) this.currentLoot.gold.description = edits.gold.description;
        }

        // Apply gems edits
        if (edits.gems && this.currentLoot.gems) {
            edits.gems.forEach((gemEdit, index) => {
                if (this.currentLoot.gems[index]) {
                    if (gemEdit.name) this.currentLoot.gems[index].name = gemEdit.name;
                    if (gemEdit.description) this.currentLoot.gems[index].description = gemEdit.description;
                    if (gemEdit.value !== undefined) this.currentLoot.gems[index].value = gemEdit.value;
                }
            });
        }

        // Apply art objects edits
        if (edits.artObjects && this.currentLoot.artObjects) {
            edits.artObjects.forEach((artEdit, index) => {
                if (this.currentLoot.artObjects[index]) {
                    if (artEdit.name) this.currentLoot.artObjects[index].name = artEdit.name;
                    if (artEdit.value !== undefined) this.currentLoot.artObjects[index].value = artEdit.value;
                }
            });
        }

        // Apply mundane items edits
        if (edits.mundaneItems && this.currentLoot.mundaneItems) {
            edits.mundaneItems.forEach((itemEdit, index) => {
                if (this.currentLoot.mundaneItems[index]) {
                    if (itemEdit.name) this.currentLoot.mundaneItems[index].name = itemEdit.name;
                    if (itemEdit.hook !== undefined) this.currentLoot.mundaneItems[index].hook = itemEdit.hook;
                }
            });
        }

        // Apply magic items edits
        if (edits.magicItems && this.currentLoot.magicItems) {
            edits.magicItems.forEach((itemEdit, index) => {
                if (this.currentLoot.magicItems[index]) {
                    if (itemEdit.name) this.currentLoot.magicItems[index].name = itemEdit.name;
                    if (itemEdit.type) this.currentLoot.magicItems[index].type = itemEdit.type;
                    if (itemEdit.rarity) this.currentLoot.magicItems[index].rarity = itemEdit.rarity;
                    if (itemEdit.description) this.currentLoot.magicItems[index].description = itemEdit.description;
                }
            });
        }

        // Apply consumables edits
        if (edits.consumables && this.currentLoot.consumables) {
            edits.consumables.forEach((itemEdit, index) => {
                if (this.currentLoot.consumables[index]) {
                    if (itemEdit.name) this.currentLoot.consumables[index].name = itemEdit.name;
                    if (itemEdit.type) this.currentLoot.consumables[index].type = itemEdit.type;
                    if (itemEdit.rarity) this.currentLoot.consumables[index].rarity = itemEdit.rarity;
                    if (itemEdit.description) this.currentLoot.consumables[index].description = itemEdit.description;
                }
            });
        }

        // Recalculate total value
        this.recalculateTotalValue();

        // Mark as modified
        this.currentLoot.modifiedAt = new Date().toISOString();

        this.isEditing = false;
        this.renderLoot();
        this.showNotification('Loot changes saved', 'success');
    },

    /**
     * Recalculate total value after edits
     */
    recalculateTotalValue() {
        if (!this.currentLoot) return;

        let total = 0;

        // Gold
        if (this.currentLoot.gold) {
            total += this.currentLoot.gold.total || 0;
        }

        // Gems
        if (this.currentLoot.gems) {
            this.currentLoot.gems.forEach(gem => {
                total += gem.value || 0;
            });
        }

        // Art objects
        if (this.currentLoot.artObjects) {
            this.currentLoot.artObjects.forEach(art => {
                total += art.value || 0;
            });
        }

        this.currentLoot.totalValue = total;
    },

    /**
     * Cancel edits and return to view mode
     */
    cancelEdits() {
        this.isEditing = false;
        this.renderLoot();
    },

    /**
     * Save the current loot to the library
     */
    saveLoot() {
        if (!this.currentLoot) {
            this.showNotification('No loot to save', 'error');
            return;
        }

        const lootItems = this.getStoredLoot();

        if (lootItems.some(item => item.id === this.currentLoot.id)) {
            this.showNotification('Loot already saved', 'info');
            return;
        }

        lootItems.unshift(this.currentLoot);

        try {
            localStorage.setItem('dmtk_loot', JSON.stringify(lootItems));
            this.loadLibrary();
            this.showNotification('Loot saved to library', 'success');
        } catch (e) {
            this.showNotification('Failed to save loot', 'error');
        }
    },

    /**
     * Get stored loot from localStorage
     */
    getStoredLoot() {
        try {
            return JSON.parse(localStorage.getItem('dmtk_loot')) || [];
        } catch (e) {
            return [];
        }
    },

    /**
     * Load and display the loot library
     */
    loadLibrary() {
        const container = document.getElementById('lootLibraryList');
        if (!container) return;

        const lootItems = this.getStoredLoot();

        if (lootItems.length === 0) {
            container.innerHTML = `
                <div class="loot-library-empty">
                    No saved loot yet
                </div>
            `;
            return;
        }

        container.innerHTML = lootItems.map(loot =>
            LootCardRenderer.renderCompact(loot)
        ).join('');
    },

    /**
     * Load saved loot from library
     */
    loadLoot(id) {
        const lootItems = this.getStoredLoot();
        const loot = lootItems.find(l => l.id === id);

        if (loot) {
            this.currentLoot = loot;
            this.renderLoot();
        }
    },

    /**
     * Delete loot from library
     */
    deleteLoot(id) {
        if (!confirm('Delete this loot from your library?')) return;

        let lootItems = this.getStoredLoot();
        lootItems = lootItems.filter(l => l.id !== id);

        try {
            localStorage.setItem('dmtk_loot', JSON.stringify(lootItems));
            this.loadLibrary();
            this.showNotification('Loot deleted', 'success');
        } catch (e) {
            this.showNotification('Failed to delete loot', 'error');
        }
    },

    /**
     * Copy loot to clipboard
     */
    async copyLoot() {
        if (!this.currentLoot) {
            this.showNotification('No loot to copy', 'error');
            return;
        }

        const text = LootCardRenderer.toText(this.currentLoot);

        try {
            await navigator.clipboard.writeText(text);
            this.showNotification('Copied to clipboard', 'success');
        } catch (e) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            this.showNotification('Copied to clipboard', 'success');
        }
    },

    /**
     * Re-render with updated options
     */
    updateOptions() {
        if (this.currentLoot) {
            this.renderLoot();
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
    setTimeout(() => LootPanel.init(), 100);
});
