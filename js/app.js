/**
 * D&D 5e Monster Stat Block Generator - Main Application
 * Wires together all components and handles UI interactions
 */

const App = {
    // Current generated monster data
    currentMonster: null,

    // Current monster's saved ID (if loaded from library)
    currentMonsterId: null,

    // Monster being deleted (for confirmation)
    pendingDeleteId: null,

    // Lock states for randomization
    locks: {
        type: false,
        cr: false
    },

    // DOM element references
    elements: {},

    /**
     * Initialize the application
     */
    init() {
        this.cacheElements();
        this.bindEvents();
        this.updateHumanoidVisibility();
        this.initControlsToggle();
    },

    /**
     * Initialize collapsible controls for all generator panels (mobile)
     */
    initControlsToggle() {
        const togglePairs = [
            { toggle: 'monster-panel-toggle', content: 'monster-panel-content' },
            { toggle: 'npc-panel-toggle', content: 'npc-panel-content' },
            { toggle: 'loot-panel-toggle', content: 'loot-panel-content' },
            { toggle: 'hook-panel-toggle', content: 'hook-panel-content' },
            { toggle: 'location-panel-toggle', content: 'location-panel-content' },
            { toggle: 'item-panel-toggle', content: 'item-panel-content' }
        ];

        togglePairs.forEach(({ toggle, content }) => {
            const toggleEl = document.getElementById(toggle);
            const contentEl = document.getElementById(content);

            if (toggleEl && contentEl) {
                toggleEl.addEventListener('click', () => {
                    toggleEl.classList.toggle('collapsed');
                    contentEl.classList.toggle('collapsed');
                });
            }
        });
    },

    /**
     * Cache DOM element references
     */
    cacheElements() {
        this.elements = {
            // Inputs
            monsterName: document.getElementById('monster-name'),
            monsterType: document.getElementById('monster-type'),
            challengeRating: document.getElementById('challenge-rating'),
            size: document.getElementById('size'),
            alignment: document.getElementById('alignment'),

            // Attack checkboxes
            attackMelee: document.getElementById('attack-melee'),
            attackRanged: document.getElementById('attack-ranged'),
            attackSpells: document.getElementById('attack-spells'),
            attackBreath: document.getElementById('attack-breath'),
            attackGaze: document.getElementById('attack-gaze'),
            attackAura: document.getElementById('attack-aura'),

            // Special action checkboxes
            legendaryActions: document.getElementById('legendary-actions'),
            mythicActions: document.getElementById('mythic-actions'),
            lairActions: document.getElementById('lair-actions'),

            // Humanoid options
            humanoidOptions: document.getElementById('humanoid-options'),
            humanoidRace: document.getElementById('humanoid-race'),
            humanoidClass: document.getElementById('humanoid-class'),
            generateInventory: document.getElementById('generate-inventory'),
            includeMagicItems: document.getElementById('include-magic-items'),

            // Lock buttons
            lockTypeBtn: document.getElementById('lock-type-btn'),
            lockCrBtn: document.getElementById('lock-cr-btn'),

            // Buttons
            autoNameBtn: document.getElementById('auto-name-btn'),
            randomizeBtn: document.getElementById('randomize-btn'),
            generateBtn: document.getElementById('generate-btn'),
            downloadBtn: document.getElementById('download-btn'),
            saveBtn: document.getElementById('save-btn'),
            editBtn: document.getElementById('edit-btn'),
            exportJsonBtn: document.getElementById('export-json-btn'),
            canvasBtn: document.getElementById('canvas-btn'),
            libraryBtn: document.getElementById('library-btn'),

            // Statblock container
            statblock: document.getElementById('statblock'),

            // Library Modal
            libraryModal: document.getElementById('library-modal'),
            closeLibraryBtn: document.getElementById('close-library-btn'),
            librarySearch: document.getElementById('library-search'),
            libraryFilterType: document.getElementById('library-filter-type'),
            librarySort: document.getElementById('library-sort'),
            libraryList: document.getElementById('library-list'),
            libraryCount: document.getElementById('library-count'),
            importBtn: document.getElementById('import-btn'),
            importFile: document.getElementById('import-file'),
            exportLibraryBtn: document.getElementById('export-library-btn'),

            // Edit Modal
            editModal: document.getElementById('edit-modal'),
            closeEditBtn: document.getElementById('close-edit-btn'),
            cancelEditBtn: document.getElementById('cancel-edit-btn'),
            saveEditBtn: document.getElementById('save-edit-btn'),
            addTraitBtn: document.getElementById('add-trait-btn'),
            addActionBtn: document.getElementById('add-action-btn'),
            editTraitsContainer: document.getElementById('edit-traits-container'),
            editActionsContainer: document.getElementById('edit-actions-container'),

            // Delete Modal
            deleteModal: document.getElementById('delete-modal'),
            closeDeleteBtn: document.getElementById('close-delete-btn'),
            cancelDeleteBtn: document.getElementById('cancel-delete-btn'),
            confirmDeleteBtn: document.getElementById('confirm-delete-btn'),
            deleteMonsterName: document.getElementById('delete-monster-name')
        };
    },

    /**
     * Bind event listeners
     */
    bindEvents() {
        // Monster type change - show/hide humanoid options
        this.elements.monsterType.addEventListener('change', () => {
            this.updateHumanoidVisibility();
        });

        // Lock buttons
        this.elements.lockTypeBtn.addEventListener('click', () => {
            this.toggleLock('type');
        });

        this.elements.lockCrBtn.addEventListener('click', () => {
            this.toggleLock('cr');
        });

        // Auto-generate name
        this.elements.autoNameBtn.addEventListener('click', () => {
            this.generateName();
        });

        // Randomize all options
        this.elements.randomizeBtn.addEventListener('click', () => {
            this.randomizeAll();
        });

        // Generate monster
        this.elements.generateBtn.addEventListener('click', () => {
            this.generate();
        });

        // Download PNG
        this.elements.downloadBtn.addEventListener('click', () => {
            this.downloadPNG();
        });

        // Update attack types and size when class is selected
        this.elements.humanoidClass.addEventListener('change', () => {
            this.updateClassDefaults();
        });

        // Save monster to library
        this.elements.saveBtn.addEventListener('click', () => {
            this.saveMonster();
        });

        // Edit monster
        this.elements.editBtn.addEventListener('click', () => {
            this.openEditModal();
        });

        // Export JSON
        this.elements.exportJsonBtn.addEventListener('click', () => {
            this.exportJSON();
        });

        // Send to Canvas
        this.elements.canvasBtn.addEventListener('click', () => {
            this.sendToCanvas();
        });

        // Open library modal
        this.elements.libraryBtn.addEventListener('click', () => {
            this.openLibraryModal();
        });

        // Close library modal
        this.elements.closeLibraryBtn.addEventListener('click', () => {
            this.closeLibraryModal();
        });

        // Library modal backdrop click to close
        this.elements.libraryModal.querySelector('.modal-backdrop').addEventListener('click', () => {
            this.closeLibraryModal();
        });

        // Library search/filter/sort
        this.elements.librarySearch.addEventListener('input', () => {
            this.renderLibraryList();
        });

        this.elements.libraryFilterType.addEventListener('change', () => {
            this.renderLibraryList();
        });

        this.elements.librarySort.addEventListener('change', () => {
            this.renderLibraryList();
        });

        // Import button
        this.elements.importBtn.addEventListener('click', () => {
            this.elements.importFile.click();
        });

        // Import file change
        this.elements.importFile.addEventListener('change', (e) => {
            this.importJSON(e.target.files[0]);
            e.target.value = ''; // Reset file input
        });

        // Export library button
        this.elements.exportLibraryBtn.addEventListener('click', () => {
            MonsterStorage.exportLibrary();
        });

        // Edit modal events
        this.elements.closeEditBtn.addEventListener('click', () => {
            this.closeEditModal();
        });

        this.elements.cancelEditBtn.addEventListener('click', () => {
            this.closeEditModal();
        });

        this.elements.saveEditBtn.addEventListener('click', () => {
            this.saveEdit();
        });

        this.elements.editModal.querySelector('.modal-backdrop').addEventListener('click', () => {
            this.closeEditModal();
        });

        this.elements.addTraitBtn.addEventListener('click', () => {
            this.addEditListItem('traits');
        });

        this.elements.addActionBtn.addEventListener('click', () => {
            this.addEditListItem('actions');
        });

        // Delete modal events
        this.elements.closeDeleteBtn.addEventListener('click', () => {
            this.closeDeleteModal();
        });

        this.elements.cancelDeleteBtn.addEventListener('click', () => {
            this.closeDeleteModal();
        });

        this.elements.confirmDeleteBtn.addEventListener('click', () => {
            this.confirmDelete();
        });

        this.elements.deleteModal.querySelector('.modal-backdrop').addEventListener('click', () => {
            this.closeDeleteModal();
        });
    },

    /**
     * Toggle a lock state
     */
    toggleLock(field) {
        this.locks[field] = !this.locks[field];

        // Update button visual state
        const btn = field === 'type' ? this.elements.lockTypeBtn : this.elements.lockCrBtn;
        const icon = btn.querySelector('.lock-icon');

        // SVG icons for lock states
        const lockedSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>';
        const unlockedSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>';

        if (this.locks[field]) {
            btn.classList.add('locked');
            icon.innerHTML = lockedSvg;
            btn.title = field === 'type' ? 'Unlock Monster Type' : 'Unlock Challenge Rating';
        } else {
            btn.classList.remove('locked');
            icon.innerHTML = unlockedSvg;
            btn.title = field === 'type' ? 'Lock Monster Type' : 'Lock Challenge Rating';
        }
    },

    /**
     * Show/hide humanoid-specific options
     */
    updateHumanoidVisibility() {
        const isHumanoid = this.elements.monsterType.value === 'humanoid';
        this.elements.humanoidOptions.style.display = isHumanoid ? 'block' : 'none';
    },

    /**
     * Update attack types, size, and other defaults based on selected class
     */
    updateClassDefaults() {
        const classValue = this.elements.humanoidClass.value;

        if (!classValue) return; // No class selected

        // Define class defaults for attack types
        const classDefaults = {
            // Full casters - spells only
            wizard: { melee: false, ranged: false, spells: true },
            sorcerer: { melee: false, ranged: false, spells: true },
            // Casters with some weapon use
            warlock: { melee: false, ranged: false, spells: true },
            cleric: { melee: true, ranged: false, spells: true },
            druid: { melee: false, ranged: false, spells: true },
            bard: { melee: true, ranged: false, spells: true },
            // Half-casters
            paladin: { melee: true, ranged: false, spells: true },
            ranger: { melee: true, ranged: true, spells: true },
            artificer: { melee: false, ranged: true, spells: true },
            // Martial classes - no spells
            fighter: { melee: true, ranged: true, spells: false },
            barbarian: { melee: true, ranged: false, spells: false },
            rogue: { melee: true, ranged: true, spells: false },
            monk: { melee: true, ranged: false, spells: false }
        };

        const defaults = classDefaults[classValue];
        if (defaults) {
            this.elements.attackMelee.checked = defaults.melee;
            this.elements.attackRanged.checked = defaults.ranged;
            this.elements.attackSpells.checked = defaults.spells;
        }

        // Disable breath, gaze, and aura for humanoids (usually not appropriate)
        this.elements.attackBreath.checked = false;
        this.elements.attackGaze.checked = false;
        this.elements.attackAura.checked = false;

        // Set appropriate size (most humanoids are medium, some small)
        const smallClasses = []; // Could add halfling/gnome racial preference later
        if (smallClasses.includes(classValue)) {
            this.elements.size.value = 'small';
        } else {
            this.elements.size.value = 'medium';
        }
    },

    /**
     * Generate a name based on current type/race
     */
    generateName() {
        const type = this.elements.monsterType.value;
        let name = '';

        if (type === 'humanoid' && this.elements.humanoidRace.value) {
            const race = this.elements.humanoidRace.value;
            name = HumanoidNames.generateName(race);
        } else if (type) {
            name = MonsterNames.generateName(type, Math.random() < 0.3);
        } else {
            // Random type for name generation
            const types = ['aberration', 'beast', 'celestial', 'construct', 'dragon', 'elemental',
                'fey', 'fiend', 'giant', 'monstrosity', 'ooze', 'plant', 'undead'];
            const randomType = types[Math.floor(Math.random() * types.length)];
            name = MonsterNames.generateName(randomType, Math.random() < 0.3);
        }

        this.elements.monsterName.value = name;
    },

    /**
     * Randomize all generator options
     */
    randomizeAll() {
        let randomType;

        // Random monster type (unless locked)
        if (this.locks.type && this.elements.monsterType.value) {
            randomType = this.elements.monsterType.value;
        } else {
            const types = ['aberration', 'beast', 'celestial', 'construct', 'dragon', 'elemental',
                'fey', 'fiend', 'giant', 'humanoid', 'monstrosity', 'ooze', 'plant', 'undead'];
            randomType = types[Math.floor(Math.random() * types.length)];
            this.elements.monsterType.value = randomType;
        }
        this.updateHumanoidVisibility();

        // Random CR (unless locked)
        let randomCR;
        if (this.locks.cr) {
            randomCR = this.elements.challengeRating.value;
        } else {
            const crOptions = ['0', '0.125', '0.25', '0.5', '1', '2', '3', '4', '5', '6', '7', '8',
                '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
            // Weight towards lower CRs
            const crWeighted = [];
            crOptions.forEach((cr, index) => {
                const weight = Math.max(1, 20 - index);
                for (let i = 0; i < weight; i++) {
                    crWeighted.push(cr);
                }
            });
            randomCR = crWeighted[Math.floor(Math.random() * crWeighted.length)];
            this.elements.challengeRating.value = randomCR;
        }

        // Random size based on type
        const sizes = this.getSizesForType(randomType);
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        this.elements.size.value = randomSize;

        // Random alignment based on type
        const alignments = this.getAlignmentsForType(randomType);
        const randomAlignment = alignments[Math.floor(Math.random() * alignments.length)];
        this.elements.alignment.value = randomAlignment;

        // Random attack types (at least one)
        this.elements.attackMelee.checked = Math.random() < 0.7;
        this.elements.attackRanged.checked = Math.random() < 0.3;
        this.elements.attackSpells.checked = Math.random() < 0.25;
        this.elements.attackBreath.checked = randomType === 'dragon' ? Math.random() < 0.8 : Math.random() < 0.1;
        this.elements.attackGaze.checked = Math.random() < 0.1;
        this.elements.attackAura.checked = Math.random() < 0.15;

        // Ensure at least one attack type
        if (!this.elements.attackMelee.checked && !this.elements.attackRanged.checked &&
            !this.elements.attackSpells.checked && !this.elements.attackBreath.checked) {
            this.elements.attackMelee.checked = true;
        }

        // Random special actions (based on CR)
        const cr = parseFloat(randomCR);
        this.elements.legendaryActions.checked = cr >= 10 && Math.random() < 0.3;
        this.elements.mythicActions.checked = cr >= 17 && Math.random() < 0.2;
        this.elements.lairActions.checked = cr >= 8 && Math.random() < 0.25;

        // If humanoid, randomize race and class
        if (randomType === 'humanoid') {
            const races = this.getSelectOptions(this.elements.humanoidRace);
            const randomRace = races[Math.floor(Math.random() * races.length)];
            this.elements.humanoidRace.value = randomRace;

            const classes = ['', 'barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk',
                'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard', 'artificer'];
            const randomClass = classes[Math.floor(Math.random() * classes.length)];
            this.elements.humanoidClass.value = randomClass;

            this.elements.generateInventory.checked = Math.random() < 0.7;
            this.elements.includeMagicItems.checked = cr >= 3 && Math.random() < 0.4;

            // Apply class-appropriate attack types
            if (randomClass) {
                this.updateClassDefaults();
            } else {
                // No class - basic humanoid, just melee
                this.elements.attackMelee.checked = true;
                this.elements.attackRanged.checked = Math.random() < 0.3;
                this.elements.attackSpells.checked = false;
                this.elements.attackBreath.checked = false;
                this.elements.attackGaze.checked = false;
                this.elements.attackAura.checked = false;
            }
        }

        // Generate a name
        this.generateName();

        // Auto-generate the monster
        this.generate();
    },

    /**
     * Get appropriate sizes for a monster type
     */
    getSizesForType(type) {
        const typeSizes = {
            aberration: ['small', 'medium', 'large', 'huge'],
            beast: ['tiny', 'small', 'medium', 'large', 'huge'],
            celestial: ['medium', 'large', 'huge'],
            construct: ['tiny', 'small', 'medium', 'large', 'huge'],
            dragon: ['medium', 'large', 'huge', 'gargantuan'],
            elemental: ['small', 'medium', 'large', 'huge'],
            fey: ['tiny', 'small', 'medium'],
            fiend: ['small', 'medium', 'large', 'huge'],
            giant: ['large', 'huge', 'gargantuan'],
            humanoid: ['small', 'medium'],
            monstrosity: ['small', 'medium', 'large', 'huge', 'gargantuan'],
            ooze: ['tiny', 'small', 'medium', 'large', 'huge'],
            plant: ['small', 'medium', 'large', 'huge'],
            undead: ['tiny', 'small', 'medium', 'large', 'huge']
        };
        return typeSizes[type] || ['medium'];
    },

    /**
     * Get appropriate alignments for a monster type
     */
    getAlignmentsForType(type) {
        const typeAlignments = {
            aberration: ['lawful evil', 'neutral evil', 'chaotic evil', 'chaotic neutral'],
            beast: ['unaligned'],
            celestial: ['lawful good', 'neutral good', 'chaotic good'],
            construct: ['unaligned', 'lawful neutral', 'true neutral'],
            dragon: ['lawful good', 'chaotic good', 'lawful evil', 'chaotic evil', 'true neutral'],
            elemental: ['true neutral', 'chaotic neutral', 'lawful neutral'],
            fey: ['chaotic good', 'chaotic neutral', 'chaotic evil', 'neutral good', 'true neutral'],
            fiend: ['lawful evil', 'neutral evil', 'chaotic evil'],
            giant: ['chaotic evil', 'neutral evil', 'chaotic good', 'lawful good', 'true neutral'],
            humanoid: ['any', 'lawful good', 'neutral good', 'chaotic good', 'lawful neutral',
                'true neutral', 'chaotic neutral', 'lawful evil', 'neutral evil', 'chaotic evil'],
            monstrosity: ['unaligned', 'chaotic evil', 'neutral evil', 'true neutral'],
            ooze: ['unaligned'],
            plant: ['unaligned', 'true neutral'],
            undead: ['lawful evil', 'neutral evil', 'chaotic evil']
        };
        return typeAlignments[type] || ['true neutral'];
    },

    /**
     * Get all option values from a select element
     */
    getSelectOptions(selectElement) {
        const options = [];
        for (const option of selectElement.options) {
            if (option.value) {
                options.push(option.value);
            }
        }
        return options;
    },

    /**
     * Generate a monster with current options
     */
    generate() {
        const type = this.elements.monsterType.value;

        if (!type) {
            alert('Please select a monster type.');
            return;
        }

        // Gather options
        const options = {
            name: this.elements.monsterName.value || null,
            type: type,
            cr: parseFloat(this.elements.challengeRating.value),
            size: this.elements.size.value,
            alignment: this.elements.alignment.value,
            attackTypes: {
                melee: this.elements.attackMelee.checked,
                ranged: this.elements.attackRanged.checked,
                spells: this.elements.attackSpells.checked,
                breath: this.elements.attackBreath.checked,
                gaze: this.elements.attackGaze.checked,
                aura: this.elements.attackAura.checked
            },
            hasLegendary: this.elements.legendaryActions.checked,
            hasMythic: this.elements.mythicActions.checked,
            hasLair: this.elements.lairActions.checked
        };

        // Add humanoid-specific options
        if (type === 'humanoid') {
            options.race = this.elements.humanoidRace.value || null;
            options.characterClass = this.elements.humanoidClass.value || null;
            options.generateInventory = this.elements.generateInventory.checked;
            options.includeMagicItems = this.elements.includeMagicItems.checked;
        }

        // Generate monster
        try {
            console.log('Generating monster with options:', options);
            this.currentMonster = Generator.generateMonster(options);
            console.log('Generated monster:', this.currentMonster);

            // Update name input if it was auto-generated
            if (!this.elements.monsterName.value && this.currentMonster.name) {
                this.elements.monsterName.value = this.currentMonster.name;
            }

            // Render statblock
            this.renderStatblock();

            // Enable action buttons
            this.elements.downloadBtn.disabled = false;
            this.elements.saveBtn.disabled = false;
            this.elements.editBtn.disabled = false;
            this.elements.exportJsonBtn.disabled = false;
            this.elements.canvasBtn.disabled = false;

            // Clear the saved ID since this is a new/regenerated monster
            this.currentMonsterId = null;

        } catch (error) {
            console.error('Generation failed:', error);
            console.error('Error stack:', error.stack);
            alert('Failed to generate monster: ' + error.message);
        }
    },

    /**
     * Render the current monster as a statblock
     */
    renderStatblock() {
        if (!this.currentMonster) return;

        try {
            const html = StatblockRenderer.render(this.currentMonster);
            this.elements.statblock.innerHTML = html;
            this.elements.statblock.classList.add('generated');

            // Remove previous width classes
            this.elements.statblock.classList.remove('wide', 'extra-wide');

            // Check height after rendering and apply column layout if needed
            requestAnimationFrame(() => {
                this.adjustStatblockColumns();
            });
        } catch (error) {
            console.error('Rendering failed:', error);
            console.error('Monster data:', this.currentMonster);
            alert('Failed to render statblock: ' + error.message);
        }
    },

    /**
     * Adjust statblock to use columns if content is too tall
     */
    adjustStatblockColumns() {
        const statblock = this.elements.statblock;
        const maxSingleColumnHeight = 800; // pixels before switching to 2 columns
        const maxTwoColumnHeight = 600; // height threshold per column for 3 columns

        // Reset to single column first to measure true height
        statblock.classList.remove('wide', 'extra-wide');

        // Wait for reflow then measure
        requestAnimationFrame(() => {
            const height = statblock.scrollHeight;

            if (height > maxSingleColumnHeight * 1.5) {
                // Very long content - use 3 columns
                statblock.classList.add('extra-wide');
            } else if (height > maxSingleColumnHeight) {
                // Long content - use 2 columns
                statblock.classList.add('wide');
            }
        });
    },

    /**
     * Download the statblock as PNG
     */
    async downloadPNG() {
        if (!this.currentMonster) return;

        const filename = this.currentMonster.name || 'monster';
        await StatblockExporter.exportAsPNG(this.elements.statblock, filename);
    },

    // ==========================================
    // Library Management Methods
    // ==========================================

    /**
     * Save current monster to library
     */
    saveMonster() {
        if (!this.currentMonster) return;

        const entry = MonsterStorage.saveMonster(this.currentMonster);
        if (entry) {
            this.currentMonsterId = entry.id;
            alert(`"${this.currentMonster.name}" saved to library!`);
        } else {
            alert('Failed to save monster. Please try again.');
        }
    },

    /**
     * Export current monster as JSON file
     */
    exportJSON() {
        if (!this.currentMonster) return;
        MonsterStorage.exportMonster(this.currentMonster);
    },

    /**
     * Send current monster to campaign canvas
     */
    sendToCanvas() {
        if (!this.currentMonster) return;

        // Ensure the monster has an id for referencing
        const monsterData = {
            ...this.currentMonster,
            id: this.currentMonster.id || 'monster_' + Date.now()
        };

        // Add card to canvas
        if (typeof CanvasCards !== 'undefined') {
            CanvasCards.addCard('monster', monsterData);

            // Switch to campaign panel
            if (typeof SidebarController !== 'undefined') {
                SidebarController.switchPanel('campaign');
            }
        } else {
            alert('Campaign canvas not available');
        }
    },

    /**
     * Import JSON file
     */
    async importJSON(file) {
        if (!file) return;

        try {
            const result = await MonsterStorage.importMonster(file);

            if (result.type === 'library') {
                const count = MonsterStorage.importLibrary(result.data);
                alert(`Successfully imported ${count} monster(s) to library!`);
                this.renderLibraryList();
            } else {
                // Single monster - load it directly
                this.loadMonster(result.data);
                alert(`Loaded "${result.data.name}" from file!`);
            }
        } catch (error) {
            alert('Failed to import file: ' + error.message);
        }
    },

    /**
     * Open library modal
     */
    openLibraryModal() {
        this.elements.libraryModal.classList.remove('hidden');
        this.renderLibraryList();
    },

    /**
     * Close library modal
     */
    closeLibraryModal() {
        this.elements.libraryModal.classList.add('hidden');
    },

    /**
     * Render the library list with current filters
     */
    renderLibraryList() {
        const searchQuery = this.elements.librarySearch.value.toLowerCase();
        const typeFilter = this.elements.libraryFilterType.value;
        const sortBy = this.elements.librarySort.value;

        let library = MonsterStorage.getLibrary();

        // Filter by search query
        if (searchQuery) {
            library = library.filter(entry =>
                entry.name.toLowerCase().includes(searchQuery)
            );
        }

        // Filter by type
        if (typeFilter) {
            library = library.filter(entry => entry.type === typeFilter);
        }

        // Sort
        library.sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'cr':
                    return parseFloat(a.cr) - parseFloat(b.cr);
                case 'type':
                    return a.type.localeCompare(b.type);
                case 'date':
                    return new Date(b.savedAt) - new Date(a.savedAt);
                default:
                    return 0;
            }
        });

        // Update count
        const totalCount = MonsterStorage.getLibrary().length;
        this.elements.libraryCount.textContent = `${totalCount} monster${totalCount !== 1 ? 's' : ''} saved`;

        // Render list
        if (library.length === 0) {
            if (searchQuery || typeFilter) {
                this.elements.libraryList.innerHTML = '<p class="library-empty">No monsters match your search.</p>';
            } else {
                this.elements.libraryList.innerHTML = '<p class="library-empty">No saved monsters yet. Generate and save some!</p>';
            }
            return;
        }

        const html = library.map(entry => `
            <div class="library-item" data-id="${entry.id}" data-name="${this.escapeHtml(entry.name).replace(/"/g, '&quot;')}">
                <div class="library-item-info">
                    <div class="library-item-name">${this.escapeHtml(entry.name)}</div>
                    <div class="library-item-meta">
                        <span class="library-item-type">${entry.type}</span>
                        <span class="library-item-cr">${this.formatCR(entry.cr)}</span>
                    </div>
                </div>
                <div class="library-item-actions">
                    <button class="btn btn-load" data-action="load">Load</button>
                    <button class="btn btn-delete" data-action="delete">Delete</button>
                </div>
            </div>
        `).join('');

        this.elements.libraryList.innerHTML = html;

        // Add event delegation for library item buttons
        this.elements.libraryList.querySelectorAll('.btn-load').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const item = e.target.closest('.library-item');
                if (item) this.loadFromLibrary(item.dataset.id);
            });
        });

        this.elements.libraryList.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const item = e.target.closest('.library-item');
                if (item) this.openDeleteModal(item.dataset.id, item.dataset.name);
            });
        });
    },

    /**
     * Load a monster from library by ID
     */
    loadFromLibrary(id) {
        const monster = MonsterStorage.getMonster(id);
        if (monster) {
            this.currentMonsterId = id;
            this.loadMonster(monster);
            this.closeLibraryModal();
        } else {
            alert('Monster not found in library.');
        }
    },

    /**
     * Load a monster object and display it
     */
    loadMonster(monster) {
        this.currentMonster = monster;

        // Update name input
        this.elements.monsterName.value = monster.name || '';

        // Render statblock
        this.renderStatblock();

        // Enable action buttons
        this.elements.downloadBtn.disabled = false;
        this.elements.saveBtn.disabled = false;
        this.elements.editBtn.disabled = false;
        this.elements.exportJsonBtn.disabled = false;
        this.elements.canvasBtn.disabled = false;
    },

    /**
     * Format CR for display
     */
    formatCR(cr) {
        const crNum = parseFloat(cr);
        if (crNum === 0.125) return '1/8';
        if (crNum === 0.25) return '1/4';
        if (crNum === 0.5) return '1/2';
        return cr.toString();
    },

    /**
     * Escape HTML to prevent XSS
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    // ==========================================
    // Delete Modal Methods
    // ==========================================

    /**
     * Open delete confirmation modal
     */
    openDeleteModal(id, name) {
        this.pendingDeleteId = id;
        this.elements.deleteMonsterName.textContent = name;
        this.elements.deleteModal.classList.remove('hidden');
    },

    /**
     * Close delete modal
     */
    closeDeleteModal() {
        this.elements.deleteModal.classList.add('hidden');
        this.pendingDeleteId = null;
    },

    /**
     * Confirm and execute delete
     */
    confirmDelete() {
        if (!this.pendingDeleteId) return;

        const success = MonsterStorage.deleteMonster(this.pendingDeleteId);
        if (success) {
            // If we deleted the currently loaded monster, clear its ID
            if (this.currentMonsterId === this.pendingDeleteId) {
                this.currentMonsterId = null;
            }
            this.renderLibraryList();
        } else {
            alert('Failed to delete monster.');
        }

        this.closeDeleteModal();
    },

    // ==========================================
    // Edit Modal Methods
    // ==========================================

    /**
     * Open edit modal with current monster data
     */
    openEditModal() {
        if (!this.currentMonster) return;

        const m = this.currentMonster;

        // Populate basic info
        document.getElementById('edit-name').value = m.name || '';
        document.getElementById('edit-size').value = m.size || 'medium';
        document.getElementById('edit-alignment').value = m.alignment || 'true neutral';

        // Combat stats
        document.getElementById('edit-ac').value = m.armorClass?.value || m.armorClass || 10;
        document.getElementById('edit-ac-type').value = m.armorClass?.type || '';
        document.getElementById('edit-hp-avg').value = m.hitPoints?.average || 0;
        document.getElementById('edit-hp-dice').value = m.hitPoints?.notation || '';
        document.getElementById('edit-speed').value = this.formatSpeed(m.speed);

        // Ability scores
        document.getElementById('edit-str').value = m.abilities?.str || 10;
        document.getElementById('edit-dex').value = m.abilities?.dex || 10;
        document.getElementById('edit-con').value = m.abilities?.con || 10;
        document.getElementById('edit-int').value = m.abilities?.int || 10;
        document.getElementById('edit-wis').value = m.abilities?.wis || 10;
        document.getElementById('edit-cha').value = m.abilities?.cha || 10;

        // Defenses
        document.getElementById('edit-saves').value = this.formatSaves(m.savingThrows);
        document.getElementById('edit-skills').value = this.formatSkills(m.skills);
        document.getElementById('edit-resistances').value = (m.damageResistances || []).join(', ');
        document.getElementById('edit-immunities').value = (m.damageImmunities || []).join(', ');
        document.getElementById('edit-condition-immunities').value = (m.conditionImmunities || []).join(', ');

        // Senses & Languages
        document.getElementById('edit-senses').value = this.formatSenses(m.senses);
        document.getElementById('edit-languages').value = (m.languages || []).join(', ');

        // Populate traits
        this.populateEditList('traits', m.traits || []);

        // Populate actions
        this.populateEditList('actions', m.actions || []);

        this.elements.editModal.classList.remove('hidden');
    },

    /**
     * Close edit modal
     */
    closeEditModal() {
        this.elements.editModal.classList.add('hidden');
    },

    /**
     * Populate an edit list (traits or actions)
     */
    populateEditList(type, items) {
        const container = type === 'traits' ?
            this.elements.editTraitsContainer :
            this.elements.editActionsContainer;

        container.innerHTML = items.map((item, index) => this.createEditListItemHTML(type, index, item)).join('');
    },

    /**
     * Create HTML for an edit list item
     */
    createEditListItemHTML(type, index, item = { name: '', description: '' }) {
        return `
            <div class="edit-list-item" data-type="${type}" data-index="${index}">
                <div class="edit-list-item-header">
                    <input type="text" class="edit-item-name" value="${this.escapeHtml(item.name || '')}" placeholder="Name">
                    <button type="button" class="btn btn-remove" onclick="App.removeEditListItem(this)">Remove</button>
                </div>
                <textarea class="edit-item-description" placeholder="Description">${this.escapeHtml(item.description || '')}</textarea>
            </div>
        `;
    },

    /**
     * Add a new item to an edit list
     */
    addEditListItem(type) {
        const container = type === 'traits' ?
            this.elements.editTraitsContainer :
            this.elements.editActionsContainer;

        const index = container.children.length;
        const html = this.createEditListItemHTML(type, index);

        container.insertAdjacentHTML('beforeend', html);
    },

    /**
     * Remove an item from edit list
     */
    removeEditListItem(button) {
        const item = button.closest('.edit-list-item');
        if (item) {
            item.remove();
        }
    },

    /**
     * Save edits to current monster
     */
    saveEdit() {
        if (!this.currentMonster) return;

        // Update basic info
        this.currentMonster.name = document.getElementById('edit-name').value;
        this.currentMonster.size = document.getElementById('edit-size').value;
        this.currentMonster.alignment = document.getElementById('edit-alignment').value;

        // Update combat stats
        const acValue = parseInt(document.getElementById('edit-ac').value) || 10;
        const acType = document.getElementById('edit-ac-type').value;
        this.currentMonster.armorClass = {
            value: acValue,
            type: acType
        };

        this.currentMonster.hitPoints = {
            average: parseInt(document.getElementById('edit-hp-avg').value) || 0,
            notation: document.getElementById('edit-hp-dice').value
        };

        this.currentMonster.speed = this.parseSpeed(document.getElementById('edit-speed').value);

        // Update ability scores
        this.currentMonster.abilities = {
            str: parseInt(document.getElementById('edit-str').value) || 10,
            dex: parseInt(document.getElementById('edit-dex').value) || 10,
            con: parseInt(document.getElementById('edit-con').value) || 10,
            int: parseInt(document.getElementById('edit-int').value) || 10,
            wis: parseInt(document.getElementById('edit-wis').value) || 10,
            cha: parseInt(document.getElementById('edit-cha').value) || 10
        };

        // Update defenses
        this.currentMonster.savingThrows = this.parseSaves(document.getElementById('edit-saves').value);
        this.currentMonster.skills = this.parseSkills(document.getElementById('edit-skills').value);
        this.currentMonster.damageResistances = this.parseList(document.getElementById('edit-resistances').value);
        this.currentMonster.damageImmunities = this.parseList(document.getElementById('edit-immunities').value);
        this.currentMonster.conditionImmunities = this.parseList(document.getElementById('edit-condition-immunities').value);

        // Update senses & languages
        this.currentMonster.senses = this.parseSenses(document.getElementById('edit-senses').value);
        this.currentMonster.languages = this.parseList(document.getElementById('edit-languages').value);

        // Update traits
        this.currentMonster.traits = this.collectEditListItems('traits');

        // Update actions
        this.currentMonster.actions = this.collectEditListItems('actions');

        // Update name input field
        this.elements.monsterName.value = this.currentMonster.name;

        // Re-render statblock
        this.renderStatblock();

        // If this monster is in the library, update it
        if (this.currentMonsterId) {
            MonsterStorage.updateMonster(this.currentMonsterId, this.currentMonster);
        }

        this.closeEditModal();
    },

    /**
     * Collect items from an edit list
     */
    collectEditListItems(type) {
        const container = type === 'traits' ?
            this.elements.editTraitsContainer :
            this.elements.editActionsContainer;

        const items = [];
        container.querySelectorAll('.edit-list-item').forEach(item => {
            const name = item.querySelector('.edit-item-name').value.trim();
            const description = item.querySelector('.edit-item-description').value.trim();
            if (name || description) {
                items.push({ name, description });
            }
        });
        return items;
    },

    // ==========================================
    // Formatting Helper Methods
    // ==========================================

    /**
     * Format speed object to string
     */
    formatSpeed(speed) {
        if (!speed) return '30 ft.';
        if (typeof speed === 'string') return speed;

        const parts = [];
        if (speed.walk) parts.push(`${speed.walk} ft.`);
        if (speed.fly) parts.push(`fly ${speed.fly} ft.${speed.hover ? ' (hover)' : ''}`);
        if (speed.swim) parts.push(`swim ${speed.swim} ft.`);
        if (speed.climb) parts.push(`climb ${speed.climb} ft.`);
        if (speed.burrow) parts.push(`burrow ${speed.burrow} ft.`);

        return parts.join(', ') || '30 ft.';
    },

    /**
     * Parse speed string to object
     */
    parseSpeed(speedStr) {
        const speed = {};
        const parts = speedStr.split(',').map(s => s.trim());

        parts.forEach(part => {
            const flyMatch = part.match(/fly\s+(\d+)\s*ft\.?\s*(\(hover\))?/i);
            const swimMatch = part.match(/swim\s+(\d+)\s*ft\.?/i);
            const climbMatch = part.match(/climb\s+(\d+)\s*ft\.?/i);
            const burrowMatch = part.match(/burrow\s+(\d+)\s*ft\.?/i);
            const walkMatch = part.match(/^(\d+)\s*ft\.?$/i);

            if (flyMatch) {
                speed.fly = parseInt(flyMatch[1]);
                if (flyMatch[2]) speed.hover = true;
            } else if (swimMatch) {
                speed.swim = parseInt(swimMatch[1]);
            } else if (climbMatch) {
                speed.climb = parseInt(climbMatch[1]);
            } else if (burrowMatch) {
                speed.burrow = parseInt(burrowMatch[1]);
            } else if (walkMatch) {
                speed.walk = parseInt(walkMatch[1]);
            }
        });

        if (Object.keys(speed).length === 0) {
            speed.walk = 30;
        }

        return speed;
    },

    /**
     * Format saving throws object to string
     */
    formatSaves(saves) {
        if (!saves || Object.keys(saves).length === 0) return '';
        return Object.entries(saves)
            .map(([stat, value]) => `${stat.charAt(0).toUpperCase() + stat.slice(1)} ${value >= 0 ? '+' : ''}${value}`)
            .join(', ');
    },

    /**
     * Parse saving throws string to object
     */
    parseSaves(saveStr) {
        if (!saveStr.trim()) return {};
        const saves = {};
        const parts = saveStr.split(',').map(s => s.trim());

        parts.forEach(part => {
            const match = part.match(/(\w+)\s*([+-]?\d+)/);
            if (match) {
                const stat = match[1].toLowerCase().substring(0, 3);
                saves[stat] = parseInt(match[2]);
            }
        });

        return saves;
    },

    /**
     * Format skills object to string
     */
    formatSkills(skills) {
        if (!skills || Object.keys(skills).length === 0) return '';
        return Object.entries(skills)
            .map(([skill, value]) => `${skill.charAt(0).toUpperCase() + skill.slice(1)} ${value >= 0 ? '+' : ''}${value}`)
            .join(', ');
    },

    /**
     * Parse skills string to object
     */
    parseSkills(skillStr) {
        if (!skillStr.trim()) return {};
        const skills = {};
        const parts = skillStr.split(',').map(s => s.trim());

        parts.forEach(part => {
            const match = part.match(/([A-Za-z\s]+)\s*([+-]?\d+)/);
            if (match) {
                const skill = match[1].trim().toLowerCase();
                skills[skill] = parseInt(match[2]);
            }
        });

        return skills;
    },

    /**
     * Format senses object to string
     */
    formatSenses(senses) {
        if (!senses) return 'passive Perception 10';
        if (typeof senses === 'string') return senses;

        const parts = [];
        if (senses.darkvision) parts.push(`darkvision ${senses.darkvision} ft.`);
        if (senses.blindsight) parts.push(`blindsight ${senses.blindsight} ft.`);
        if (senses.tremorsense) parts.push(`tremorsense ${senses.tremorsense} ft.`);
        if (senses.truesight) parts.push(`truesight ${senses.truesight} ft.`);
        parts.push(`passive Perception ${senses.passivePerception || 10}`);

        return parts.join(', ');
    },

    /**
     * Parse senses string to object
     */
    parseSenses(senseStr) {
        const senses = {};

        const darkvisionMatch = senseStr.match(/darkvision\s+(\d+)\s*ft/i);
        const blindsightMatch = senseStr.match(/blindsight\s+(\d+)\s*ft/i);
        const tremorsenseMatch = senseStr.match(/tremorsense\s+(\d+)\s*ft/i);
        const truesightMatch = senseStr.match(/truesight\s+(\d+)\s*ft/i);
        const passiveMatch = senseStr.match(/passive\s+Perception\s+(\d+)/i);

        if (darkvisionMatch) senses.darkvision = parseInt(darkvisionMatch[1]);
        if (blindsightMatch) senses.blindsight = parseInt(blindsightMatch[1]);
        if (tremorsenseMatch) senses.tremorsense = parseInt(tremorsenseMatch[1]);
        if (truesightMatch) senses.truesight = parseInt(truesightMatch[1]);
        senses.passivePerception = passiveMatch ? parseInt(passiveMatch[1]) : 10;

        return senses;
    },

    /**
     * Parse comma-separated list
     */
    parseList(str) {
        if (!str.trim()) return [];
        return str.split(',').map(s => s.trim()).filter(s => s);
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
