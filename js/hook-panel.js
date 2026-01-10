/**
 * Hook Panel Controller
 * Handles UI interactions for the Quest Hook generator panel
 */

const HookPanel = {
    currentResult: null,
    editingHookId: null,

    init() {
        this.populateBiomeSelect();
        this.populateMonsterSelect();
        this.populateThemeSelect();
        this.loadLibrary();
    },

    /**
     * Populate the biome dropdown
     */
    populateBiomeSelect() {
        const select = document.getElementById('hookBiome');
        if (!select) return;

        select.innerHTML = '<option value="random">Random</option>';

        const biomes = HookGenerator.getBiomes();
        biomes.forEach(biome => {
            const option = document.createElement('option');
            option.value = biome.id;
            option.textContent = biome.name;
            option.title = biome.description;
            select.appendChild(option);
        });
    },

    /**
     * Populate the monster type dropdown
     */
    populateMonsterSelect() {
        const select = document.getElementById('hookMonsterType');
        if (!select) return;

        select.innerHTML = '<option value="random">Random</option>';

        const types = HookGenerator.getMonsterTypes();
        types.forEach(type => {
            const option = document.createElement('option');
            option.value = type.id;
            option.textContent = type.name;
            select.appendChild(option);
        });
    },

    /**
     * Populate the theme dropdown
     */
    populateThemeSelect() {
        const select = document.getElementById('hookTheme');
        if (!select) return;

        select.innerHTML = '<option value="random">Random</option>';

        const themes = HookGenerator.getThemes();
        themes.forEach(theme => {
            const option = document.createElement('option');
            option.value = theme.id;
            option.textContent = `${theme.name}`;
            option.title = theme.description;
            select.appendChild(option);
        });
    },

    /**
     * Generate new hooks
     */
    generate() {
        const biomeSelect = document.getElementById('hookBiome');
        const monsterSelect = document.getElementById('hookMonsterType');
        const themeSelect = document.getElementById('hookTheme');
        const quantityInput = document.getElementById('hookQuantity');

        const biome = biomeSelect?.value || 'random';
        const monsterType = monsterSelect?.value || 'random';
        const theme = themeSelect?.value || 'random';
        const quantity = parseInt(quantityInput?.value) || 5;

        this.currentResult = HookGenerator.generate({
            biome,
            monsterType,
            theme,
            quantity
        });

        if (this.currentResult) {
            this.renderHooks();
        }
    },

    /**
     * Render the current hooks to the output area
     */
    renderHooks() {
        const output = document.getElementById('hookOutput');
        if (!output || !this.currentResult) return;

        const showEnvironment = document.getElementById('hookShowEnvironment')?.checked !== false;
        const showLoot = document.getElementById('hookShowLoot')?.checked !== false;
        const showMoral = document.getElementById('hookShowMoral')?.checked !== false;

        output.innerHTML = HookCardRenderer.renderBatch(this.currentResult, {
            showEnvironment,
            showLoot,
            showMoral,
            editingHookId: this.editingHookId
        });
    },

    /**
     * Toggle edit mode for a hook
     */
    toggleEdit(hookId) {
        if (this.editingHookId === hookId) {
            this.editingHookId = null;
        } else {
            this.editingHookId = hookId;
        }
        this.renderHooks();
    },

    /**
     * Save edits from edit mode
     */
    saveEdits(hookId) {
        if (!this.currentResult || !this.currentResult.hooks) return;

        const hookIndex = this.currentResult.hooks.findIndex(h => h.id === hookId);
        if (hookIndex === -1) return;

        const card = document.querySelector(`.hook-card[data-hook-id="${hookId}"]`);
        if (!card) return;

        const edits = HookCardRenderer.collectEdits(card);
        const hook = this.currentResult.hooks[hookIndex];

        // Apply edits to the hook
        if (edits.title) hook.title = edits.title;

        if (edits.biome) {
            if (edits.biome.atmosphere) hook.biome.atmosphere = edits.biome.atmosphere;
            if (edits.biome.landmark) hook.biome.landmark = edits.biome.landmark;
        }

        if (edits.monsterType) {
            if (edits.monsterType.angle) hook.monsterType.angle = edits.monsterType.angle;
        }

        if (edits.catalyst) {
            if (edits.catalyst.text) hook.catalyst.text = edits.catalyst.text;
        }

        if (edits.theme) {
            if (edits.theme.objective) hook.theme.objective = edits.theme.objective;
        }

        if (edits.complication) {
            if (edits.complication.text) hook.complication.text = edits.complication.text;
        }

        if (edits.stake) {
            if (edits.stake.text) hook.stake.text = edits.stake.text;
        }

        if (edits.environmentalHazard && hook.environmentalHazard) {
            if (edits.environmentalHazard.name) hook.environmentalHazard.name = edits.environmentalHazard.name;
            if (edits.environmentalHazard.effect) hook.environmentalHazard.effect = edits.environmentalHazard.effect;
        }

        if (edits.lootTeaser !== undefined) {
            hook.lootTeaser = edits.lootTeaser;
        }

        if (edits.moralDilemma && hook.moralDilemma) {
            if (edits.moralDilemma.situation) hook.moralDilemma.situation = edits.moralDilemma.situation;
            if (edits.moralDilemma.choice) hook.moralDilemma.choice = edits.moralDilemma.choice;
            if (edits.moralDilemma.consequence) hook.moralDilemma.consequence = edits.moralDilemma.consequence;
        }

        // Mark as modified
        hook.modifiedAt = new Date().toISOString();

        this.editingHookId = null;
        this.renderHooks();
        this.showNotification('Hook changes saved', 'success');
    },

    /**
     * Cancel edits and return to view mode
     */
    cancelEdits() {
        this.editingHookId = null;
        this.renderHooks();
    },

    /**
     * Save all hooks to the library
     */
    saveAll() {
        if (!this.currentResult || !this.currentResult.hooks) {
            this.showNotification('No hooks to save', 'error');
            return;
        }

        const saved = this.getStoredHooks();
        let newCount = 0;

        this.currentResult.hooks.forEach(hook => {
            if (!saved.some(h => h.id === hook.id)) {
                saved.unshift(hook);
                newCount++;
            }
        });

        if (newCount === 0) {
            this.showNotification('All hooks already saved', 'info');
            return;
        }

        try {
            localStorage.setItem('dmtk_hooks', JSON.stringify(saved));
            this.loadLibrary();
            this.showNotification(`Saved ${newCount} hook${newCount > 1 ? 's' : ''} to library`, 'success');
        } catch (e) {
            this.showNotification('Failed to save hooks', 'error');
        }
    },

    /**
     * Save a single hook to the library
     */
    saveHook(hookId) {
        if (!this.currentResult || !this.currentResult.hooks) return;

        const hook = this.currentResult.hooks.find(h => h.id === hookId);
        if (!hook) return;

        const saved = this.getStoredHooks();

        if (saved.some(h => h.id === hookId)) {
            this.showNotification('Hook already saved', 'info');
            return;
        }

        saved.unshift(hook);

        try {
            localStorage.setItem('dmtk_hooks', JSON.stringify(saved));
            this.loadLibrary();
            this.showNotification('Hook saved to library', 'success');
        } catch (e) {
            this.showNotification('Failed to save hook', 'error');
        }
    },

    /**
     * Copy all hooks to clipboard
     */
    async copyAll() {
        if (!this.currentResult) {
            this.showNotification('No hooks to copy', 'error');
            return;
        }

        const text = HookCardRenderer.batchToText(this.currentResult);

        try {
            await navigator.clipboard.writeText(text);
            this.showNotification('Copied all hooks to clipboard', 'success');
        } catch (e) {
            this.fallbackCopy(text);
        }
    },

    /**
     * Copy a single hook to clipboard
     */
    async copyHook(hookId) {
        if (!this.currentResult || !this.currentResult.hooks) return;

        const hook = this.currentResult.hooks.find(h => h.id === hookId);
        if (!hook) return;

        const text = HookCardRenderer.toText(hook);

        try {
            await navigator.clipboard.writeText(text);
            this.showNotification('Hook copied to clipboard', 'success');
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
     * Send a hook to the campaign canvas
     */
    sendToCanvas(hookId) {
        if (!this.currentResult || !this.currentResult.hooks) {
            this.showNotification('No hook to send', 'error');
            return;
        }

        const hook = this.currentResult.hooks.find(h => h.id === hookId);
        if (!hook) return;

        if (typeof CanvasCards !== 'undefined') {
            CanvasCards.addCard('hook', hook);

            // Switch to campaign panel
            if (typeof SidebarController !== 'undefined') {
                SidebarController.switchPanel('campaign');
            }
        } else {
            this.showNotification('Campaign canvas not available', 'error');
        }
    },

    /**
     * Get stored hooks from localStorage
     */
    getStoredHooks() {
        try {
            return JSON.parse(localStorage.getItem('dmtk_hooks')) || [];
        } catch (e) {
            return [];
        }
    },

    /**
     * Load and display the hook library
     */
    loadLibrary() {
        const container = document.getElementById('hookLibraryList');
        if (!container) return;

        const hooks = this.getStoredHooks();

        if (hooks.length === 0) {
            container.innerHTML = `
                <div class="hook-library-empty">
                    No saved hooks yet
                </div>
            `;
            return;
        }

        container.innerHTML = hooks.map(hook =>
            HookCardRenderer.renderCompact(hook)
        ).join('');
    },

    /**
     * Load a saved hook for viewing
     */
    loadHook(hookId) {
        const hooks = this.getStoredHooks();
        const hook = hooks.find(h => h.id === hookId);

        if (hook) {
            // Create a single-hook result for rendering
            this.currentResult = {
                id: 'single_' + hookId,
                timestamp: new Date().toISOString(),
                settings: {
                    biome: hook.biome.id,
                    monsterType: hook.monsterType.id,
                    theme: hook.theme.id,
                    quantity: 1
                },
                hooks: [hook]
            };
            this.renderHooks();
        }
    },

    /**
     * Delete a hook from the library
     */
    deleteHook(hookId) {
        if (!confirm('Delete this hook from your library?')) return;

        let hooks = this.getStoredHooks();
        hooks = hooks.filter(h => h.id !== hookId);

        try {
            localStorage.setItem('dmtk_hooks', JSON.stringify(hooks));
            this.loadLibrary();
            this.showNotification('Hook deleted', 'success');
        } catch (e) {
            this.showNotification('Failed to delete hook', 'error');
        }
    },

    /**
     * Re-render with updated display options
     */
    updateOptions() {
        if (this.currentResult) {
            this.renderHooks();
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
    setTimeout(() => HookPanel.init(), 100);
});
