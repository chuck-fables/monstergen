/**
 * Loot Generator
 * Generates treasure hoards based on party level, size, and hoard type
 */

const LootGenerator = {
    // Hoard type configurations
    hoardTypes: {
        mundane: {
            name: "Mundane Trinkets",
            description: "Non-magical curiosities and flavor items",
            goldMultiplier: 0.1,
            magicChance: 0,          // No magic items
            consumableChance: 0,      // No consumables
            gemChance: 0.1,           // Rarely includes cheap gems
            artChance: 0.1,           // Rarely includes cheap art
            mundaneItems: { min: 3, max: 6 },
            rarityWeights: {},        // Not applicable
            permanentRatio: 0,        // Not applicable
            tags: ["Flavor", "Improv hook", "Curiosity", "Story seed"]
        },
        lowMagic: {
            name: "Low-Magic Scraps",
            description: "Mostly mundane with occasional minor magic",
            goldMultiplier: 0.3,
            magicChance: 0.3,         // 30% chance of any magic
            consumableChance: 0.8,    // If magic, 80% consumables
            gemChance: 0.3,
            artChance: 0.2,
            mundaneItems: { min: 1, max: 3 },
            rarityWeights: { common: 70, uncommon: 30 },
            permanentRatio: 0.2,      // 20% permanent items
            tags: ["Minor", "Practical", "Salvaged"]
        },
        standard: {
            name: "Standard Adventurer Hoard",
            description: "Balanced mix appropriate for the party level",
            goldMultiplier: 0.5,
            magicChance: 0.6,
            consumableChance: 0.5,
            gemChance: 0.5,
            artChance: 0.4,
            mundaneItems: { min: 0, max: 2 },
            rarityWeights: { common: 30, uncommon: 50, rare: 20 },
            permanentRatio: 0.4,
            tags: ["Adventurer's gear", "Useful", "Balanced"]
        },
        monster: {
            name: "Monster Hoard",
            description: "Accumulated treasure from a creature's lair",
            goldMultiplier: 0.7,
            magicChance: 0.5,
            consumableChance: 0.4,
            gemChance: 0.6,
            artChance: 0.5,
            mundaneItems: { min: 1, max: 3 },
            rarityWeights: { common: 20, uncommon: 50, rare: 25, veryRare: 5 },
            permanentRatio: 0.5,
            tags: ["Lair treasure", "Accumulated", "Varied origins"]
        },
        boss: {
            name: "Boss Hoard",
            description: "Significant treasure from a major enemy",
            goldMultiplier: 1.0,
            magicChance: 0.85,
            consumableChance: 0.4,
            gemChance: 0.7,
            artChance: 0.6,
            mundaneItems: { min: 0, max: 1 },
            rarityWeights: { uncommon: 30, rare: 45, veryRare: 20, legendary: 5 },
            permanentRatio: 0.6,
            tags: ["Prized possession", "Signature item", "Hard-won reward"]
        },
        legendary: {
            name: "Legendary Hoard",
            description: "Dragon's hoard or ancient vault treasures",
            goldMultiplier: 2.0,
            magicChance: 1.0,         // Always magic
            consumableChance: 0.3,
            gemChance: 0.9,
            artChance: 0.8,
            mundaneItems: { min: 0, max: 1 },
            rarityWeights: { rare: 25, veryRare: 45, legendary: 30 },
            permanentRatio: 0.7,
            tags: ["Legendary", "Ancient", "World-changing", "Storied artifact"]
        }
    },

    /**
     * Generate a loot hoard
     * @param {Object} options - Generation options
     * @returns {Object} Generated loot
     */
    generate(options = {}) {
        const partyLevel = Math.max(1, Math.min(20, options.partyLevel || 5));
        const partySize = Math.max(1, Math.min(10, options.partySize || 4));
        const hoardType = options.hoardType || 'standard';

        const config = this.hoardTypes[hoardType];
        if (!config) {
            console.error(`Unknown hoard type: ${hoardType}`);
            return null;
        }

        const loot = {
            id: this.generateId(),
            hoardType: hoardType,
            hoardName: config.name,
            hoardDescription: config.description,
            partyLevel: partyLevel,
            partySize: partySize,
            gold: this.generateGold(partyLevel, partySize, config),
            gems: [],
            artObjects: [],
            mundaneItems: [],
            consumables: [],
            magicItems: [],
            createdAt: new Date().toISOString()
        };

        // Generate gems
        if (Math.random() < config.gemChance) {
            loot.gems = this.generateGems(partyLevel, config);
        }

        // Generate art objects
        if (Math.random() < config.artChance) {
            loot.artObjects = this.generateArtObjects(partyLevel, config);
        }

        // Generate mundane items (always for mundane hoard, chance for others)
        if (hoardType === 'mundane' || config.mundaneItems.max > 0) {
            loot.mundaneItems = this.generateMundaneItems(config);
        }

        // Generate magic items (not for mundane hoards)
        if (hoardType !== 'mundane' && Math.random() < config.magicChance) {
            const numMagicItems = this.getNumMagicItems(partyLevel, hoardType);

            for (let i = 0; i < numMagicItems; i++) {
                const isConsumable = Math.random() < config.consumableChance;
                const isPermanent = !isConsumable && Math.random() < config.permanentRatio;

                if (isConsumable) {
                    const consumable = this.generateConsumable(partyLevel, config);
                    if (consumable) loot.consumables.push(consumable);
                } else {
                    const item = this.generateMagicItem(partyLevel, config, isPermanent);
                    if (item) loot.magicItems.push(item);
                }
            }
        }

        // Calculate total value
        loot.totalValue = this.calculateTotalValue(loot);

        return loot;
    },

    /**
     * Generate gold amount
     */
    generateGold(level, partySize, config) {
        const baseGold = TreasureTables.goldByLevel[level] || TreasureTables.goldByLevel[1];
        const min = Math.floor(baseGold.min * partySize * config.goldMultiplier);
        const max = Math.floor(baseGold.max * partySize * config.goldMultiplier);
        const amount = this.randomInt(min, max);

        // Add flavor description
        const description = this.pick(TreasureTables.coinageDescriptions);

        // Break into coin types for higher levels
        let coins = { gp: amount };
        if (amount > 100) {
            const pp = Math.floor(amount * 0.1 / 10);
            const gp = amount - (pp * 10);
            const sp = this.randomInt(0, 50);
            const cp = this.randomInt(0, 100);
            coins = { pp: pp, gp: gp, sp: sp, cp: cp };
        }

        return {
            total: amount,
            coins: coins,
            description: description
        };
    },

    /**
     * Generate gems
     */
    generateGems(level, config) {
        const gems = [];
        const numGems = this.randomInt(1, 3);

        // Determine gem tier based on level
        const gemTiers = Object.keys(TreasureTables.gems).map(Number).sort((a, b) => a - b);
        let maxTier = 10;
        if (level >= 5) maxTier = 50;
        if (level >= 9) maxTier = 100;
        if (level >= 13) maxTier = 500;
        if (level >= 17) maxTier = 1000;
        if (config.goldMultiplier >= 1.5) maxTier = 5000;

        const availableTiers = gemTiers.filter(t => t <= maxTier);

        for (let i = 0; i < numGems; i++) {
            const tier = this.pick(availableTiers);
            const gemList = TreasureTables.gems[tier];
            const gem = this.pick(gemList);

            gems.push({
                name: gem.name,
                description: gem.desc,
                value: tier
            });
        }

        return gems;
    },

    /**
     * Generate art objects
     */
    generateArtObjects(level, config) {
        const objects = [];
        const numObjects = this.randomInt(1, 2);

        // Determine art tier based on level
        const artTiers = [25, 250, 750, 2500, 7500];
        let maxTier = 25;
        if (level >= 5) maxTier = 250;
        if (level >= 11) maxTier = 750;
        if (level >= 15) maxTier = 2500;
        if (level >= 19 || config.goldMultiplier >= 1.5) maxTier = 7500;

        const availableTiers = artTiers.filter(t => t <= maxTier);

        for (let i = 0; i < numObjects; i++) {
            const tier = this.pick(availableTiers);
            const artList = TreasureTables.artObjects[tier];
            const art = this.pick(artList);

            objects.push({
                name: art,
                value: tier
            });
        }

        return objects;
    },

    /**
     * Generate mundane items
     */
    generateMundaneItems(config) {
        const items = [];
        const num = this.randomInt(config.mundaneItems.min, config.mundaneItems.max);

        const categories = [
            { source: MundaneItems.trinkets, weight: 3 },
            { source: MundaneItems.curios, weight: 2 },
            { source: MundaneItems.documents, weight: 1 },
            { source: MundaneItems.personalEffects, weight: 2 },
            { source: MundaneItems.creatureParts, weight: 1 },
            { source: MundaneItems.mundaneGear, weight: 1 }
        ];

        for (let i = 0; i < num; i++) {
            // Weighted random category selection
            const totalWeight = categories.reduce((sum, c) => sum + c.weight, 0);
            let roll = Math.random() * totalWeight;
            let selectedSource = categories[0].source;

            for (const cat of categories) {
                roll -= cat.weight;
                if (roll <= 0) {
                    selectedSource = cat.source;
                    break;
                }
            }

            const item = this.pick(selectedSource);
            const hook = this.pick(MundaneItems.improvHooks);

            items.push({
                name: item.item,
                hook: item.hook || hook,
                tag: this.pick(config.tags)
            });
        }

        return items;
    },

    /**
     * Get number of magic items based on level and hoard type
     */
    getNumMagicItems(level, hoardType) {
        const base = {
            mundane: 0,
            lowMagic: 1,
            standard: Math.ceil(level / 5),
            monster: Math.ceil(level / 4),
            boss: Math.ceil(level / 3) + 1,
            legendary: Math.ceil(level / 2) + 2
        };

        return base[hoardType] || 1;
    },

    /**
     * Generate a consumable item
     */
    generateConsumable(level, config) {
        // Decide between potion, scroll, or other
        const type = this.weightedRandom({
            potion: 45,
            scroll: 35,
            other: 20
        });

        if (type === 'potion') {
            return this.generatePotion(level, config);
        } else if (type === 'scroll') {
            return this.generateScroll(level, config);
        } else {
            return this.generateOtherConsumable(level, config);
        }
    },

    /**
     * Generate a potion
     */
    generatePotion(level, config) {
        const rarity = this.getRarityForLevel(level, config);
        const potionList = ConsumablesData.potions[rarity];

        if (!potionList || potionList.length === 0) {
            // Fallback to common
            const common = ConsumablesData.potions.common;
            const potion = this.pick(common);
            return {
                name: potion.name,
                type: "Potion",
                rarity: "common",
                description: potion.desc,
                value: potion.value,
                tag: this.pick(config.tags),
                consumable: true
            };
        }

        const potion = this.pick(potionList);
        return {
            name: potion.name,
            type: "Potion",
            rarity: rarity,
            description: potion.desc,
            value: potion.value,
            tag: this.pick(config.tags),
            consumable: true
        };
    },

    /**
     * Generate a scroll
     */
    generateScroll(level, config) {
        // Determine max spell level based on party level
        let maxSpellLevel = Math.min(9, Math.ceil(level / 2));

        // Adjust for hoard type
        if (config.goldMultiplier < 0.5) maxSpellLevel = Math.min(maxSpellLevel, 3);
        if (config.goldMultiplier >= 1.5) maxSpellLevel = Math.min(9, maxSpellLevel + 2);

        // Random spell level weighted toward lower
        const weights = {};
        for (let i = 0; i <= maxSpellLevel; i++) {
            const key = i === 0 ? 'cantrip' : i.toString();
            weights[key] = Math.max(1, 10 - i * 1.5);
        }

        const spellLevelKey = this.weightedRandom(weights);
        const scrollData = ConsumablesData.scrolls[spellLevelKey];

        if (!scrollData) return null;

        const spell = this.pick(scrollData.spells);
        const spellLevel = spellLevelKey === 'cantrip' ? 'Cantrip' : `${spellLevelKey}${this.ordinalSuffix(parseInt(spellLevelKey))} level`;

        return {
            name: `Spell Scroll (${spell})`,
            type: "Scroll",
            rarity: this.getScrollRarity(spellLevelKey),
            description: `${spellLevel} spell`,
            value: scrollData.value,
            tag: this.pick(config.tags),
            consumable: true
        };
    },

    /**
     * Generate other consumable
     */
    generateOtherConsumable(level, config) {
        const rarity = this.getRarityForLevel(level, config);
        const list = ConsumablesData.otherConsumables[rarity];

        if (!list || list.length === 0) {
            // Fallback
            const common = ConsumablesData.otherConsumables.common;
            if (!common || common.length === 0) return null;
            const item = this.pick(common);
            return {
                name: item.name,
                type: "Consumable",
                rarity: "common",
                description: item.desc,
                value: item.value,
                tag: this.pick(config.tags),
                consumable: true
            };
        }

        const item = this.pick(list);
        return {
            name: item.name,
            type: "Consumable",
            rarity: rarity,
            description: item.desc,
            value: item.value,
            tag: this.pick(config.tags),
            consumable: true
        };
    },

    /**
     * Generate a permanent magic item
     */
    generateMagicItem(level, config, forceGood) {
        let rarity = this.getRarityForLevel(level, config);

        // If forcing good item for boss/legendary, bump rarity
        if (forceGood && ['common', 'uncommon'].includes(rarity)) {
            rarity = this.weightedRandom({ uncommon: 40, rare: 50, veryRare: 10 });
        }

        const list = MagicItemsLoot[rarity];
        if (!list || list.length === 0) {
            return null;
        }

        const item = this.pick(list);

        return {
            name: item.name,
            type: item.type,
            rarity: rarity,
            description: item.desc,
            attunement: item.attunement,
            tag: this.pick(config.tags),
            consumable: false
        };
    },

    /**
     * Get appropriate rarity for level
     */
    getRarityForLevel(level, config) {
        const weights = config.rarityWeights || { common: 50, uncommon: 40, rare: 10 };

        // Adjust weights based on level
        const adjusted = { ...weights };

        if (level >= 5 && adjusted.uncommon) adjusted.uncommon += 10;
        if (level >= 9 && adjusted.rare) adjusted.rare += 10;
        if (level >= 13 && adjusted.veryRare) adjusted.veryRare = (adjusted.veryRare || 0) + 10;
        if (level >= 17 && adjusted.legendary) adjusted.legendary = (adjusted.legendary || 0) + 5;

        return this.weightedRandom(adjusted);
    },

    /**
     * Get scroll rarity from spell level
     */
    getScrollRarity(spellLevel) {
        if (spellLevel === 'cantrip' || spellLevel === '1') return 'common';
        if (spellLevel === '2' || spellLevel === '3') return 'uncommon';
        if (spellLevel === '4' || spellLevel === '5') return 'rare';
        if (spellLevel === '6' || spellLevel === '7' || spellLevel === '8') return 'veryRare';
        return 'legendary';
    },

    /**
     * Calculate total value of loot
     */
    calculateTotalValue(loot) {
        let total = loot.gold.total;

        loot.gems.forEach(g => total += g.value);
        loot.artObjects.forEach(a => total += a.value);
        loot.consumables.forEach(c => total += c.value || 0);

        // Estimate magic item values
        const itemValues = {
            common: 75,
            uncommon: 300,
            rare: 2500,
            veryRare: 15000,
            legendary: 50000
        };

        loot.magicItems.forEach(i => {
            total += itemValues[i.rarity] || 100;
        });

        return total;
    },

    /**
     * Weighted random selection
     */
    weightedRandom(weights) {
        const entries = Object.entries(weights);
        const total = entries.reduce((sum, [, w]) => sum + w, 0);
        let roll = Math.random() * total;

        for (const [key, weight] of entries) {
            roll -= weight;
            if (roll <= 0) return key;
        }

        return entries[0][0];
    },

    /**
     * Get list of hoard types for UI
     */
    getHoardTypes() {
        return Object.entries(this.hoardTypes).map(([key, config]) => ({
            id: key,
            name: config.name,
            description: config.description
        }));
    },

    // Utility functions
    pick(arr) {
        if (!arr || arr.length === 0) return null;
        return arr[Math.floor(Math.random() * arr.length)];
    },

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    ordinalSuffix(n) {
        const s = ['th', 'st', 'nd', 'rd'];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    },

    generateId() {
        return 'loot_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 9);
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LootGenerator;
}
