/**
 * D&D 5e Monster Stat Block Generator - Main Application
 * Wires together all components and handles UI interactions
 */

const App = {
    // Current generated monster data
    currentMonster: null,

    // DOM element references
    elements: {},

    /**
     * Initialize the application
     */
    init() {
        this.cacheElements();
        this.bindEvents();
        this.updateHumanoidVisibility();
    },

    /**
     * Cache DOM element references
     */
    cacheElements() {
        this.elements = {
            // Panel toggle
            panelToggle: document.getElementById('panel-toggle'),
            panelContent: document.getElementById('panel-content'),

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

            // Buttons
            autoNameBtn: document.getElementById('auto-name-btn'),
            randomizeBtn: document.getElementById('randomize-btn'),
            generateBtn: document.getElementById('generate-btn'),
            downloadBtn: document.getElementById('download-btn'),

            // Statblock container
            statblock: document.getElementById('statblock')
        };
    },

    /**
     * Bind event listeners
     */
    bindEvents() {
        // Panel toggle for mobile
        this.elements.panelToggle.addEventListener('click', () => {
            this.togglePanel();
        });

        // Monster type change - show/hide humanoid options
        this.elements.monsterType.addEventListener('change', () => {
            this.updateHumanoidVisibility();
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
    },

    /**
     * Toggle the control panel (for mobile)
     */
    togglePanel() {
        this.elements.panelToggle.classList.toggle('collapsed');
        this.elements.panelContent.classList.toggle('collapsed');
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
        // Random monster type
        const types = ['aberration', 'beast', 'celestial', 'construct', 'dragon', 'elemental',
            'fey', 'fiend', 'giant', 'humanoid', 'monstrosity', 'ooze', 'plant', 'undead'];
        const randomType = types[Math.floor(Math.random() * types.length)];
        this.elements.monsterType.value = randomType;
        this.updateHumanoidVisibility();

        // Random CR (weighted towards lower CRs)
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
        const randomCR = crWeighted[Math.floor(Math.random() * crWeighted.length)];
        this.elements.challengeRating.value = randomCR;

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

            // Enable download button
            this.elements.downloadBtn.disabled = false;

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
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
