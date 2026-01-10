/**
 * Quest Hook Generator
 * Generates detailed, unique quest hooks combining biomes, monster types, and themes
 */

const HookGenerator = {
    /**
     * Generate a batch of quest hooks
     * @param {Object} options - Generation options
     * @param {string} options.biome - Biome ID or 'random'
     * @param {string} options.monsterType - Monster type ID or 'random'
     * @param {string} options.theme - Encounter theme ID or 'random'
     * @param {number} options.quantity - Number of hooks to generate (1-15)
     * @returns {Object} Generation result with hooks array
     */
    generate(options = {}) {
        const quantity = Math.min(Math.max(options.quantity || 5, 1), 15);
        const hooks = [];
        const usedTitles = new Set();
        const usedCatalysts = new Set();

        for (let i = 0; i < quantity; i++) {
            // Determine if this hook should have a moral dilemma (1 in 5)
            const includeMoralDilemma = (i % 5 === 4);

            const hook = this.generateSingleHook({
                biome: options.biome,
                monsterType: options.monsterType,
                theme: options.theme,
                includeMoralDilemma,
                usedTitles,
                usedCatalysts
            });

            hooks.push(hook);
            usedTitles.add(hook.title);
            usedCatalysts.add(hook.catalyst.text);
        }

        return {
            id: this.generateId(),
            timestamp: new Date().toISOString(),
            settings: {
                biome: options.biome || 'random',
                monsterType: options.monsterType || 'random',
                theme: options.theme || 'random',
                quantity
            },
            hooks
        };
    },

    /**
     * Generate a single quest hook
     */
    generateSingleHook(options = {}) {
        // Get biome
        const biome = options.biome && options.biome !== 'random'
            ? HookBiomes.getById(options.biome)
            : HookBiomes.getRandom();

        // Get monster type
        const monsterType = options.monsterType && options.monsterType !== 'random'
            ? HookThemes.getMonsterType(options.monsterType)
            : HookThemes.getRandomMonsterType();

        // Get theme
        const theme = options.theme && options.theme !== 'random'
            ? HookThemes.getTheme(options.theme)
            : HookThemes.getRandomTheme();

        // Generate unique title
        let title = this.generateTitle(biome, monsterType, theme);
        let attempts = 0;
        while (options.usedTitles && options.usedTitles.has(title) && attempts < 10) {
            title = this.generateTitle(biome, monsterType, theme);
            attempts++;
        }

        // Generate catalyst (ensure uniqueness)
        let catalyst = HookComponents.getRandomCatalyst();
        attempts = 0;
        while (options.usedCatalysts && options.usedCatalysts.has(catalyst.text) && attempts < 10) {
            catalyst = HookComponents.getRandomCatalyst();
            attempts++;
        }

        // Generate complication
        const complication = this.generateComplication(theme, monsterType);

        // Generate stake
        const stake = HookComponents.getRandomStake();

        // Get environmental hazard specific to biome
        const hazard = this.randomElement(biome.environmentalHazards);

        // Generate loot teaser
        const lootTeaser = this.generateLootTeaser(monsterType);

        // Get monster-specific hook angle
        const hookAngle = this.randomElement(monsterType.hookAngles);

        // Build the hook object
        const hook = {
            id: this.generateId(),
            title,
            biome: {
                id: biome.id,
                name: biome.name,
                atmosphere: this.randomElement(biome.atmosphere),
                landmark: this.randomElement(biome.landmarks)
            },
            monsterType: {
                id: monsterType.id,
                name: monsterType.name,
                angle: hookAngle
            },
            theme: {
                id: theme.id,
                name: theme.name,
                objective: this.processTemplate(this.randomElement(theme.objectives), { biome, monsterType })
            },
            catalyst: {
                type: catalyst.type,
                text: catalyst.text
            },
            complication: {
                type: complication.type,
                text: complication.text
            },
            stake: {
                type: stake.type,
                text: stake.text
            },
            environmentalHazard: {
                name: hazard.name,
                effect: hazard.effect
            },
            lootTeaser,
            moralDilemma: null
        };

        // Add moral dilemma if flagged (1 in 5 hooks)
        if (options.includeMoralDilemma) {
            hook.moralDilemma = HookComponents.getRandomMoralDilemma();
        }

        return hook;
    },

    /**
     * Generate a contextual title
     */
    generateTitle(biome, monsterType, theme) {
        // Mix of generated and contextual titles
        const titleStyles = [
            () => HookComponents.generateTitle(),
            () => this.contextualTitle(biome, monsterType, theme),
            () => this.thematicTitle(theme),
            () => this.monsterTitle(monsterType),
            () => this.biomeTitle(biome)
        ];

        return this.randomElement(titleStyles)();
    },

    contextualTitle(biome, monsterType, theme) {
        const templates = [
            `The ${this.randomElement(['Curse', 'Terror', 'Secret', 'Horror', 'Mystery', 'Shadow'])} of ${biome.name}`,
            `${monsterType.name}\'s ${this.randomElement(['Gambit', 'Revenge', 'Bargain', 'Legacy', 'Hunger'])}`,
            `${theme.name} in the ${this.randomElement(biome.landmarks).split(' ').slice(-1)[0]}`,
            `When ${this.randomElement(['Darkness', 'Death', 'Chaos', 'Madness'])} Came to ${this.randomElement(HookComponents.titleWords.place)}`,
            `The ${this.randomElement(['Last', 'First', 'Only', 'Final'])} ${this.randomElement(['Stand', 'Hope', 'Chance', 'Warning'])}`,
            `Blood on ${this.randomElement(['Snow', 'Sand', 'Stone', 'Water', 'the Wind'])}`
        ];
        return this.randomElement(templates);
    },

    thematicTitle(theme) {
        const themeTemplates = {
            mystery: ['Whispers in the Dark', 'The Unseen Hand', 'What the Dead Know', 'Secrets Best Buried', 'The Missing Piece'],
            hunt: ['Predator and Prey', 'The Trail of Blood', 'No Quarter Given', 'The Killing Ground', 'Last Hunt'],
            survival: ['Against All Odds', 'The Long Night', 'No Way Out', 'Endurance', 'Breaking Point'],
            diplomacy: ['Words Like Daggers', 'The Peace That Wasn\'t', 'Enemies at the Table', 'The Price of Alliance', 'Dangerous Negotiations'],
            heist: ['The Perfect Score', 'Thieves\' Honor', 'Inside Job', 'The Vault', 'Clean Getaway'],
            siege: ['Hold the Line', 'The Walls Will Fall', 'Last Defense', 'Breach and Clear', 'No Surrender'],
            dungeonCrawl: ['Into the Depths', 'What Lies Below', 'The Deep Dark', 'Forgotten Halls', 'Descent'],
            escort: ['Safe Passage', 'The Long Road', 'Precious Cargo', 'Guardian\'s Oath', 'Through Enemy Lines']
        };
        return this.randomElement(themeTemplates[theme.id] || ['The Quest']);
    },

    monsterTitle(monsterType) {
        const monsterTemplates = {
            aberration: ['Mind Over Matter', 'Beyond the Veil', 'Alien Thoughts', 'The Thing From Beyond'],
            beast: ['Nature\'s Wrath', 'The Alpha', 'Primal Fear', 'Wild Hunt'],
            celestial: ['Divine Intervention', 'Heaven\'s Mandate', 'The Fallen Star', 'Holy Dread'],
            construct: ['Heart of Stone', 'The Machine Wakes', 'Programmed to Kill', 'Ancient Automation'],
            dragon: ['Fire and Scale', 'The Dragon\'s Due', 'Wyrm\'s Gambit', 'Hoard of Horrors'],
            elemental: ['Primal Fury', 'Elemental Chaos', 'Force of Nature', 'Unbound'],
            fey: ['Faerie Bargain', 'The Trickster\'s Game', 'Midsummer Nightmare', 'Twilight Court'],
            fiend: ['Devil\'s Due', 'Infernal Contract', 'Soul Market', 'Damnation'],
            giant: ['Fee Fi Fo Fum', 'Colossus', 'The Ordning Breaks', 'Giant Problems'],
            humanoid: ['The Enemy Within', 'Mortal Coil', 'Brother Against Brother', 'The Conspiracy'],
            monstrosity: ['Unnatural Selection', 'The Experiment', 'Chimeric Horror', 'Monster Maker'],
            ooze: ['Dissolution', 'The Consuming Dark', 'Nothing Remains', 'Slow Digestion'],
            plant: ['Root and Branch', 'The Bloom', 'Green Hell', 'Photosynthetic Horror'],
            undead: ['The Restless Dead', 'Beyond the Grave', 'Death\'s Dominion', 'Unquiet Spirits']
        };
        return this.randomElement(monsterTemplates[monsterType.id] || ['The Monster']);
    },

    biomeTitle(biome) {
        const biomeTemplates = {
            tundra: ['Frozen Wastes', 'Ice and Death', 'The Cold Embrace', 'Whiteout'],
            taiga: ['Among the Pines', 'Wolves at the Door', 'The Long Winter', 'Forest of Shadows'],
            temperateForest: ['Into the Woods', 'The Green Dark', 'Ancient Groves', 'Leaf and Shadow'],
            rainforest: ['Jungle Fever', 'The Emerald Hell', 'Canopy of Horrors', 'Green Inferno'],
            grasslands: ['Sea of Grass', 'Thunder on the Plains', 'No Place to Hide', 'Horizon\'s Edge'],
            desert: ['Sands of Time', 'Mirage', 'The Scorching', 'Bones in the Sand'],
            savanna: ['Pride Lands', 'The Great Hunt', 'Circle of Life and Death', 'Dry Season'],
            swamp: ['The Drowned Land', 'Mire and Muck', 'Swamp Thing', 'The Rotting'],
            mountain: ['The High Places', 'Peak of Madness', 'Thin Air', 'The Ascent'],
            coastal: ['Salt and Sorrow', 'The Wrecker\'s Coast', 'Tide of Doom', 'Siren\'s Call'],
            underwater: ['The Deep', 'Pressure', 'Sunken Secrets', 'The Abyss'],
            underdark: ['Lightless', 'The World Below', 'Deep Dark', 'Caverns of Dread'],
            extraplanar: ['Beyond Reality', 'Planar Chaos', 'The Outer Reaches', 'Between Worlds']
        };
        return this.randomElement(biomeTemplates[biome.id] || ['The Quest']);
    },

    /**
     * Generate a complication that fits the theme and monster
     */
    generateComplication(theme, monsterType) {
        // Sometimes use theme-specific complications
        if (Math.random() < 0.4) {
            const themeComplications = {
                mystery: ['The evidence points to someone the party trusts', 'Multiple parties have motives, and all are lying'],
                hunt: ['The creature has already laid eggs throughout the region', 'It\'s not one creature—it\'s a mated pair'],
                survival: ['One of the survivors is secretly responsible for their predicament', 'Rescue is coming, but to the wrong location'],
                diplomacy: ['Both sides have already hired assassins targeting the other', 'The peace depends on a marriage neither party wants'],
                heist: ['The original owner has returned and wants their property back—legally', 'The vault has already been emptied by someone else'],
                siege: ['The walls are mined and could be collapsed intentionally', 'The siege is a distraction from the real attack'],
                dungeonCrawl: ['The dungeon is a living creature and they\'re inside it', 'The exit sealed behind them the moment they entered'],
                escort: ['The cargo is conscious and disagrees with the destination', 'Another escort team was already dispatched—and failed']
            };

            const specific = themeComplications[theme.id];
            if (specific) {
                return { type: 'thematic', text: this.randomElement(specific) };
            }
        }

        // Sometimes use monster-specific complications
        if (Math.random() < 0.3) {
            const monsterComplications = {
                aberration: ['Its death will shatter the minds of everyone who\'s seen it', 'It exists in multiple places simultaneously'],
                beast: ['Killing it will end a species forever', 'It\'s pregnant with a litter that will orphan into killers'],
                celestial: ['Harming it is a sin that affects divine spellcasters', 'Its death will be blamed on the party by its worshippers'],
                construct: ['Destroying it activates its failsafe—a worse construct', 'It can be reprogrammed, but someone else is trying first'],
                dragon: ['It has hostages it actually cares about', 'Its death triggers a draconic blood feud against the party'],
                elemental: ['Banishing it will cause the natural disaster it was preventing', 'It\'s bound to a party member\'s soul'],
                fey: ['The party unknowingly already made a deal', 'Time moves differently—what feels like hours has been years'],
                fiend: ['The contract has fine print that damns someone innocent', 'The fiend is the lesser evil compared to what replaces it'],
                giant: ['The giant holds hostages in unreachable places', 'Other giants will avenge this one\'s death'],
                humanoid: ['The target has information the party desperately needs', 'They\'re a parent whose children watch the confrontation'],
                monstrosity: ['Creating it required sacrifices—killing it frees trapped souls into undead', 'The creator needs it alive or they die too'],
                ooze: ['It\'s absorbed someone important who might still be alive inside', 'Splitting it creates more problems'],
                plant: ['The plant network is the only thing filtering poison from the water supply', 'A druid is bonded to it and will die with it'],
                undead: ['The undead are the only witnesses to an important historical truth', 'Destroying them releases a plague they\'ve been containing']
            };

            const specific = monsterComplications[monsterType.id];
            if (specific) {
                return { type: 'monster', text: this.randomElement(specific) };
            }
        }

        // Default to general complications
        return HookComponents.getRandomComplication();
    },

    /**
     * Generate loot teaser appropriate to monster type
     */
    generateLootTeaser(monsterType) {
        // Sometimes use monster-specific loot
        if (Math.random() < 0.5 && monsterType.lootTypes) {
            const lootType = this.randomElement(monsterType.lootTypes);
            const descriptors = ['ancient', 'corrupted', 'pristine', 'legendary', 'cursed', 'blessed', 'unique'];
            const origins = ['once belonged to a hero', 'was crafted by gods', 'contains trapped souls', 'pulses with power', 'whispers secrets'];
            return `A ${this.randomElement(descriptors)} ${lootType} that ${this.randomElement(origins)}`;
        }

        // Use general loot teasers
        return HookComponents.getRandomLootTeaser();
    },

    /**
     * Process template strings with context
     */
    processTemplate(template, context) {
        return template
            .replace(/\{biome\}/g, context.biome?.name || 'this region')
            .replace(/\{location\}/g, context.biome ? this.randomElement(context.biome.landmarks) : 'the ruins')
            .replace(/\{creature\}/g, context.monsterType?.name || 'monster')
            .replace(/\{number\}/g, String(Math.floor(Math.random() * 5) + 3))
            .replace(/\{victim\}/g, this.randomElement(['the merchant', 'the priest', 'the noble', 'the scholar', 'the captain']))
            .replace(/\{accused\}/g, this.randomElement(['an innocent farmer', 'a wrongly imprisoned soldier', 'a falsely accused noble']))
            .replace(/\{target\}/g, this.randomElement(['the stranger', 'the hermit', 'the merchant', 'the noble']))
            .replace(/\{artifact\}/g, this.randomElement(['the crown', 'the tome', 'the amulet', 'the blade', 'the orb']))
            .replace(/\{organization\}/g, this.randomElement(['the guild', 'the order', 'the cult', 'the council']))
            .replace(/\{hazard\}/g, context.biome ? this.randomElement(context.biome.environmentalHazards).name : 'deadly terrain')
            .replace(/\{disaster\}/g, this.randomElement(['wildfire', 'flood', 'earthquake', 'magical storm']))
            .replace(/\{weather\}/g, this.randomElement(['blizzard', 'sandstorm', 'hurricane', 'ash fall']))
            .replace(/\{faction1\}/g, this.randomElement(['the crown', 'the guild', 'the temple', 'the tribe']))
            .replace(/\{faction2\}/g, this.randomElement(['the rebels', 'the merchants', 'the mages', 'the exiles']))
            .replace(/\{faction\}/g, this.randomElement(['the alliance', 'the kingdom', 'the council', 'the tribes']))
            .replace(/\{threat\}/g, this.randomElement(['the invasion', 'the plague', 'the ritual', 'the prophecy']))
            .replace(/\{object\}/g, this.randomElement(['the artifact', 'the territory', 'the treaty', 'the prisoner']))
            .replace(/\{territory\}/g, context.biome?.name || 'hostile lands')
            .replace(/\{groups\}/g, this.randomElement(['clans', 'houses', 'tribes', 'factions']))
            .replace(/\{leader\}/g, this.randomElement(['the warlord', 'the king', 'the archmage', 'the high priest']))
            .replace(/\{vault\}/g, this.randomElement(['the treasury', 'the archive', 'the armory', 'the reliquary']))
            .replace(/\{prison\}/g, this.randomElement(['the fortress', 'the dungeon', 'the tower', 'the mine']))
            .replace(/\{city\}/g, this.randomElement(['the capital', 'the port city', 'the border fortress', 'the holy city']))
            .replace(/\{dungeon\}/g, context.biome ? this.randomElement(context.biome.landmarks) : 'the ancient complex')
            .replace(/\{vip\}/g, this.randomElement(['the heir', 'the witness', 'the defector', 'the prophet', 'the prisoner']))
            .replace(/\{cargo\}/g, this.randomElement(['the artifact', 'the tribute', 'the cure', 'the evidence', 'the creature']))
            .replace(/\{destination\}/g, this.randomElement(['the capital', 'the sanctuary', 'the allied territory', 'the court']))
            .replace(/\{holy site\}/g, this.randomElement(['the sacred grove', 'the temple mount', 'the blessed spring', 'the shrine']));
    },

    /**
     * Utility: Get random element from array
     */
    randomElement(arr) {
        if (!arr || arr.length === 0) return '';
        return arr[Math.floor(Math.random() * arr.length)];
    },

    /**
     * Generate unique ID
     */
    generateId() {
        return 'hook_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    },

    /**
     * Get available biomes for UI
     */
    getBiomes() {
        return HookBiomes.getAll().map(b => ({ id: b.id, name: b.name, description: b.description }));
    },

    /**
     * Get available monster types for UI
     */
    getMonsterTypes() {
        return HookThemes.getAllMonsterTypes().map(m => ({ id: m.id, name: m.name, icon: m.icon }));
    },

    /**
     * Get available themes for UI
     */
    getThemes() {
        return HookThemes.getAllThemes().map(t => ({ id: t.id, name: t.name, icon: t.icon, description: t.description }));
    }
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HookGenerator;
}
