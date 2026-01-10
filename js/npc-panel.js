/**
 * NPC Panel Controller
 * Handles UI interactions for the NPC generator panel
 */

const NPCPanel = {
    currentNPC: null,
    isEditing: false,

    init() {
        this.populateGenderSelect();
        this.populateRaceSelect();
        this.populateWealthSelect();
        this.populateVocationTypeSelect();
        this.updateVocationSelect();
        this.loadLibrary();

        // Add event listener for vocation type changes
        const vocationTypeSelect = document.getElementById('npcVocationType');
        if (vocationTypeSelect) {
            vocationTypeSelect.addEventListener('change', () => this.updateVocationSelect());
        }
    },

    /**
     * Populate the gender dropdown
     */
    populateGenderSelect() {
        const select = document.getElementById('npcGender');
        if (!select) return;

        select.innerHTML = '<option value="random">Random</option>';
        const genders = NPCGenerator.getGenders();
        genders.forEach(gender => {
            const option = document.createElement('option');
            option.value = gender.id;
            option.textContent = gender.displayName;
            select.appendChild(option);
        });
    },

    /**
     * Populate the race dropdown
     */
    populateRaceSelect() {
        const select = document.getElementById('npcRaceSelect');
        if (!select) return;

        select.innerHTML = '<option value="random">Random</option>';
        const races = NPCGenerator.getRaces();
        races.forEach(race => {
            const option = document.createElement('option');
            option.value = race.id;
            option.textContent = race.displayName;
            select.appendChild(option);
        });
    },

    /**
     * Populate the wealth dropdown
     */
    populateWealthSelect() {
        const select = document.getElementById('npcWealth');
        if (!select) return;

        select.innerHTML = '<option value="random">Random</option>';
        const levels = NPCGenerator.getWealthLevels();
        levels.forEach(level => {
            const option = document.createElement('option');
            option.value = level.id;
            option.textContent = level.displayName;
            option.title = level.description;
            select.appendChild(option);
        });
    },

    /**
     * Populate the vocation type dropdown
     */
    populateVocationTypeSelect() {
        const select = document.getElementById('npcVocationType');
        if (!select) return;

        select.innerHTML = '<option value="random">Random</option>';
        const types = NPCGenerator.getVocationTypes();
        types.forEach(type => {
            const option = document.createElement('option');
            option.value = type.id;
            option.textContent = type.displayName;
            select.appendChild(option);
        });
    },

    /**
     * Update the vocation dropdown based on vocation type
     */
    updateVocationSelect() {
        const typeSelect = document.getElementById('npcVocationType');
        const vocationSelect = document.getElementById('npcVocation');
        if (!typeSelect || !vocationSelect) return;

        const vocationType = typeSelect.value;

        // Clear and set default option
        vocationSelect.innerHTML = '<option value="random">Random</option>';

        if (vocationType === 'random') {
            // Show nothing specific when random
            vocationSelect.disabled = true;
            return;
        }

        vocationSelect.disabled = false;

        if (vocationType === 'adventurer') {
            // Show adventurer classes
            const classes = NPCGenerator.getAdventurerClasses();
            classes.forEach(cls => {
                const option = document.createElement('option');
                option.value = cls.id;
                option.textContent = cls.displayName;
                vocationSelect.appendChild(option);
            });
        } else if (vocationType === 'civilian') {
            // Show civilian occupations grouped by category
            const occupations = NPCGenerator.getCivilianOccupations();
            for (const [categoryId, category] of Object.entries(occupations)) {
                if (category.occupations.length === 0) continue;

                const optgroup = document.createElement('optgroup');
                optgroup.label = category.displayName;

                category.occupations.forEach(occ => {
                    const option = document.createElement('option');
                    option.value = occ.id;
                    option.textContent = occ.displayName;
                    optgroup.appendChild(option);
                });

                vocationSelect.appendChild(optgroup);
            }
        }
    },

    /**
     * Generate a new NPC
     */
    generate() {
        const gender = document.getElementById('npcGender')?.value || 'random';
        const race = document.getElementById('npcRaceSelect')?.value || 'random';
        const wealth = document.getElementById('npcWealth')?.value || 'random';
        const vocationType = document.getElementById('npcVocationType')?.value || 'random';
        const vocation = document.getElementById('npcVocation')?.value || 'random';

        this.currentNPC = NPCGenerator.generate({
            gender,
            race,
            wealth,
            vocationType,
            vocation
        });

        if (this.currentNPC) {
            this.isEditing = false;
            this.renderNPC();
        }
    },

    /**
     * Generate with Surprise Me mode (all random)
     */
    generateSurpriseMe() {
        this.currentNPC = NPCGenerator.generate({
            gender: 'random',
            race: 'random',
            wealth: 'random',
            vocationType: 'random',
            vocation: 'random'
        });

        if (this.currentNPC) {
            this.isEditing = false;
            this.renderNPC();
        }
    },

    /**
     * Render the current NPC to the output area
     */
    renderNPC() {
        const output = document.getElementById('npcOutput');
        if (!output || !this.currentNPC) return;

        output.innerHTML = NPCCardRenderer.render(this.currentNPC, {
            editable: this.isEditing,
            expanded: true
        });
    },

    /**
     * Toggle edit mode
     */
    toggleEdit() {
        if (!this.currentNPC) return;

        this.isEditing = !this.isEditing;
        this.renderNPC();
    },

    /**
     * Save edits from edit mode
     */
    saveEdits() {
        if (!this.currentNPC) return;

        const card = document.querySelector('.npc-card');
        if (!card) return;

        const edits = NPCCardRenderer.collectEdits(card);

        // Apply edits to current NPC
        Object.assign(this.currentNPC, edits);

        // Mark as modified
        this.currentNPC.modifiedAt = new Date().toISOString();

        this.isEditing = false;
        this.renderNPC();
        this.showNotification('Changes saved', 'success');
    },

    /**
     * Cancel edits and return to view mode
     */
    cancelEdits() {
        this.isEditing = false;
        this.renderNPC();
    },

    /**
     * Save the current NPC to the library
     */
    saveNPC() {
        if (!this.currentNPC) {
            this.showNotification('No NPC to save', 'error');
            return;
        }

        const npcs = this.getStoredNPCs();

        // Check if already saved (update if exists)
        const existingIndex = npcs.findIndex(npc => npc.id === this.currentNPC.id);
        if (existingIndex >= 0) {
            npcs[existingIndex] = this.currentNPC;
            this.showNotification('NPC updated in library', 'success');
        } else {
            npcs.unshift(this.currentNPC);
            this.showNotification('NPC saved to library', 'success');
        }

        try {
            localStorage.setItem('dmtk_npcs', JSON.stringify(npcs));
            this.loadLibrary();
        } catch (e) {
            this.showNotification('Failed to save NPC', 'error');
        }
    },

    /**
     * Get stored NPCs from localStorage
     */
    getStoredNPCs() {
        try {
            return JSON.parse(localStorage.getItem('dmtk_npcs')) || [];
        } catch (e) {
            return [];
        }
    },

    /**
     * Load and display the NPC library
     */
    loadLibrary() {
        const container = document.getElementById('npcLibraryList');
        if (!container) return;

        const npcs = this.getStoredNPCs();

        if (npcs.length === 0) {
            container.innerHTML = `
                <div class="npc-library-empty">
                    No saved NPCs yet
                </div>
            `;
            return;
        }

        container.innerHTML = npcs.map(npc =>
            NPCCardRenderer.renderCompact(npc)
        ).join('');
    },

    /**
     * Load a saved NPC from the library
     */
    loadNPC(id) {
        const npcs = this.getStoredNPCs();
        const npc = npcs.find(n => n.id === id);

        if (npc) {
            this.currentNPC = npc;
            this.isEditing = false;
            this.renderNPC();
        }
    },

    /**
     * Delete an NPC from the library
     */
    deleteNPC(id) {
        if (!confirm('Delete this NPC from your library?')) return;

        let npcs = this.getStoredNPCs();
        npcs = npcs.filter(n => n.id !== id);

        try {
            localStorage.setItem('dmtk_npcs', JSON.stringify(npcs));
            this.loadLibrary();
            this.showNotification('NPC deleted', 'success');
        } catch (e) {
            this.showNotification('Failed to delete NPC', 'error');
        }
    },

    /**
     * Export the current NPC as PNG
     */
    async exportNPC() {
        if (!this.currentNPC) {
            this.showNotification('No NPC to export', 'error');
            return;
        }

        const card = document.querySelector('.npc-card');
        if (!card || typeof html2canvas === 'undefined') {
            this.showNotification('Export not available', 'error');
            return;
        }

        try {
            const canvas = await html2canvas(card, {
                backgroundColor: '#1a1a1a',
                scale: 2
            });

            const link = document.createElement('a');
            link.download = `npc-${this.currentNPC.name.toLowerCase().replace(/\s+/g, '-')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();

            this.showNotification('NPC exported', 'success');
        } catch (e) {
            this.showNotification('Export failed', 'error');
        }
    },

    /**
     * Copy NPC details to clipboard
     */
    async copyNPC() {
        if (!this.currentNPC) {
            this.showNotification('No NPC to copy', 'error');
            return;
        }

        const text = NPCCardRenderer.toText(this.currentNPC);

        try {
            await navigator.clipboard.writeText(text);
            this.showNotification('Copied to clipboard', 'success');
        } catch (e) {
            // Fallback for older browsers
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
     * Send current NPC to campaign canvas
     */
    sendToCanvas() {
        if (!this.currentNPC) {
            this.showNotification('No NPC to send', 'error');
            return;
        }

        if (typeof CanvasCards !== 'undefined') {
            CanvasCards.addCard('npc', this.currentNPC);

            // Switch to campaign panel
            if (typeof SidebarController !== 'undefined') {
                SidebarController.switchPanel('campaign');
            }
        } else {
            this.showNotification('Campaign canvas not available', 'error');
        }
    },

    /**
     * Show a notification message
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
    setTimeout(() => NPCPanel.init(), 100);
});
