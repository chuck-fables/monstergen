/**
 * Magic Item Generator
 * Generates D&D 5e magic items based on type, rarity, and biome
 */

const ItemGenerator = {
    /**
     * Generate magic items based on options
     * @param {Object} options - Generation options
     * @returns {Object} Generated items result
     */
    generate(options = {}) {
        const {
            itemType = 'random',
            subtype = 'random',
            rarity = 'random',
            biome = 'random',
            quantity = 1,
            mode = 'normal' // normal, includeAll, surpriseMe
        } = options;

        const items = [];
        for (let i = 0; i < quantity; i++) {
            const item = this.generateSingle({
                itemType: mode === 'surpriseMe' ? 'random' : itemType,
                subtype: mode === 'surpriseMe' ? 'random' : subtype,
                rarity: mode === 'surpriseMe' ? 'random' : rarity,
                biome: mode === 'includeAll' || mode === 'surpriseMe' ? 'random' : biome
            });
            items.push(item);
        }

        return {
            id: 'items_' + Date.now(),
            timestamp: new Date().toISOString(),
            settings: { itemType, subtype, rarity, biome, quantity, mode },
            items
        };
    },

    /**
     * Generate a single magic item
     */
    generateSingle(options) {
        // Resolve random values
        const resolvedType = options.itemType === 'random' ? this.getRandomItemType() : options.itemType;
        const resolvedRarity = options.rarity === 'random' ? this.getRandomRarity() : options.rarity;
        const resolvedBiome = options.biome === 'random' ? this.getRandomBiome() : options.biome;

        // Get the type category and subtype
        const typeCategory = ItemTypes[resolvedType] || ItemTypes.weapons;
        const subtypes = Object.values(typeCategory.subtypes || {});
        let resolvedSubtype;

        if (options.subtype === 'random' || !typeCategory.subtypes[options.subtype]) {
            resolvedSubtype = subtypes[Math.floor(Math.random() * subtypes.length)];
        } else {
            resolvedSubtype = typeCategory.subtypes[options.subtype];
        }

        // Get biome data
        const biomeData = ItemBiomes.biomes[resolvedBiome] || ItemBiomes.biomes.urban;

        // Generate the item
        const item = {
            id: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            type: resolvedType,
            typeCategory: typeCategory.name,
            subtype: resolvedSubtype,
            rarity: resolvedRarity,
            rarityData: ItemTypes.rarities[resolvedRarity],
            biome: resolvedBiome,
            biomeData: biomeData
        };

        // Generate name
        item.name = ItemNames.generateName(resolvedType, resolvedSubtype, resolvedBiome, resolvedRarity);

        // Generate appearance
        item.appearance = this.generateAppearance(item, biomeData);

        // Generate mechanics
        item.mechanics = this.generateMechanics(item, biomeData);

        // Generate flavor text
        item.flavorText = ItemNames.generateFlavorText(resolvedRarity);

        // Generate attunement
        item.attunement = this.generateAttunement(item);

        // For artifacts, add special properties
        if (resolvedRarity === 'artifact') {
            item.artifactProperties = this.generateArtifactProperties();
        }

        return item;
    },

    /**
     * Generate appearance description
     */
    generateAppearance(item, biomeData) {
        const primaryMaterial = this.getRandomElement(biomeData.primaryMaterials);
        const secondaryMaterial = this.getRandomElement(biomeData.secondaryMaterials);
        const aesthetic = this.getRandomElement(biomeData.aesthetics);

        const templates = [
            `Crafted from ${primaryMaterial.name} and adorned with ${secondaryMaterial.name}. ${aesthetic}.`,
            `This ${item.subtype.name.toLowerCase()} is made of ${primaryMaterial.name}. ${primaryMaterial.desc} ${aesthetic}.`,
            `Forged from ${primaryMaterial.name} and bound with ${secondaryMaterial.name}. ${aesthetic}.`,
            `${aesthetic}. The ${item.subtype.name.toLowerCase()} is constructed from ${primaryMaterial.name}, with accents of ${secondaryMaterial.name}.`
        ];

        return this.getRandomElement(templates);
    },

    /**
     * Generate mechanics based on item type and rarity
     */
    generateMechanics(item, biomeData) {
        const mechanics = [];

        // Get base effects for item type
        const baseEffects = this.getBaseEffects(item);
        if (baseEffects) {
            const effect = this.getRandomElement(baseEffects);
            mechanics.push({
                type: 'base',
                name: effect.name,
                description: effect.desc
            });
        }

        // Add biome-themed effect
        const biomeEffects = ItemEffects.biomeEffects[item.biome] || [];
        const appropriateEffects = biomeEffects.filter(e =>
            this.rarityToNumber(e.rarity) <= this.rarityToNumber(item.rarity)
        );
        if (appropriateEffects.length > 0) {
            const biomeEffect = this.getRandomElement(appropriateEffects);
            mechanics.push({
                type: 'biome',
                name: `${item.biomeData.name} Attunement`,
                description: biomeEffect.desc
            });
        }

        // For higher rarities, add bonus effect
        if (['rare', 'veryRare', 'legendary', 'artifact'].includes(item.rarity)) {
            const bonusEffect = this.generateBonusEffect(item);
            if (bonusEffect) {
                mechanics.push(bonusEffect);
            }
        }

        // Handle cursed benefits for Abyssal/Infernal
        if ((item.biome === 'abyssal' || item.biome === 'infernal') && Math.random() < 0.4) {
            const cursedBenefits = biomeData.cursedBenefits || [];
            if (cursedBenefits.length > 0) {
                mechanics.push({
                    type: 'curse',
                    name: 'Corrupted Power',
                    description: this.getRandomElement(cursedBenefits)
                });
            }
        }

        return mechanics;
    },

    /**
     * Get base effects for item type
     */
    getBaseEffects(item) {
        const rarity = item.rarity;

        switch (item.type) {
            case 'weapons':
                return ItemEffects.weaponEffects[rarity] || ItemEffects.weaponEffects.common;
            case 'armor':
                return ItemEffects.armorEffects[rarity] || ItemEffects.armorEffects.common;
            case 'footwear':
            case 'handwear':
            case 'headwear':
                return ItemEffects.accessoryEffects[rarity] || ItemEffects.accessoryEffects.common;
            case 'jewelry':
                return ItemEffects.jewelryEffects[rarity] || ItemEffects.jewelryEffects.common;
            case 'wondrous':
                return ItemEffects.wondrousEffects[rarity] || ItemEffects.wondrousEffects.common;
            default:
                return ItemEffects.accessoryEffects[rarity] || ItemEffects.accessoryEffects.common;
        }
    },

    /**
     * Generate bonus effect for higher rarity items
     */
    generateBonusEffect(item) {
        const bonusTypes = [
            { name: 'Charges', desc: `This item has ${this.getCharges(item.rarity)} charges. It regains 1d4 charges at dawn.` },
            { name: 'Activated Ability', desc: this.generateActivatedAbility(item) },
            { name: 'Passive Bonus', desc: this.generatePassiveBonus(item) }
        ];

        const bonus = this.getRandomElement(bonusTypes);
        return {
            type: 'bonus',
            name: bonus.name,
            description: bonus.desc
        };
    },

    /**
     * Get charges based on rarity
     */
    getCharges(rarity) {
        const chargeRanges = {
            common: [1, 3],
            uncommon: [3, 5],
            rare: [5, 7],
            veryRare: [7, 10],
            legendary: [10, 15],
            artifact: [15, 20]
        };
        const range = chargeRanges[rarity] || [3, 5];
        return Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
    },

    /**
     * Generate activated ability description
     */
    generateActivatedAbility(item) {
        const abilities = [
            'As an action, you can activate this item to cast a spell without using a spell slot.',
            'Once per long rest, you can use a bonus action to gain advantage on your next attack roll.',
            'You can use an action to create a magical effect lasting for 1 minute.',
            'Once per day, you can speak a command word to unleash the item\'s power.',
            'As a reaction, you can activate this item when you take damage.'
        ];
        return this.getRandomElement(abilities);
    },

    /**
     * Generate passive bonus description
     */
    generatePassiveBonus(item) {
        const bonuses = [
            'While attuned, you gain a +1 bonus to saving throws.',
            'You have advantage on checks against a specific condition.',
            'Your movement speed increases by 5 feet.',
            'You can see in dim light as if it were bright light.',
            'You have resistance to a specific damage type.'
        ];
        return this.getRandomElement(bonuses);
    },

    /**
     * Generate attunement requirements
     */
    generateAttunement(item) {
        const rarityData = ItemTypes.rarities[item.rarity];
        const attunementChance = rarityData ? rarityData.attunementChance : 0.5;

        if (Math.random() > attunementChance) {
            return { required: false, requirement: 'No attunement required' };
        }

        const attunementType = this.getWeightedRandom(ItemTypes.attunementTypes);

        let requirement = attunementType.name;

        // Fill in class/alignment/race if needed
        if (attunementType.classes) {
            const cls = this.getRandomElement(attunementType.classes);
            requirement = requirement.replace('{class}', cls);
        }
        if (attunementType.alignments) {
            const alignment = this.getRandomElement(attunementType.alignments);
            requirement = requirement.replace('{alignment}', alignment);
        }
        if (attunementType.races) {
            const race = this.getRandomElement(attunementType.races);
            requirement = requirement.replace('{race}', race);
        }

        return {
            required: attunementType.id !== 'none',
            requirement
        };
    },

    /**
     * Generate artifact properties
     */
    generateArtifactProperties() {
        const minorBeneficial = [];
        const majorBeneficial = [];
        const detrimental = [];

        // 1-2 minor beneficial
        const minorCount = Math.floor(Math.random() * 2) + 1;
        const shuffledMinor = [...ItemEffects.artifactProperties.minorBeneficial].sort(() => Math.random() - 0.5);
        for (let i = 0; i < minorCount; i++) {
            minorBeneficial.push(shuffledMinor[i]);
        }

        // 1 major beneficial
        const shuffledMajor = [...ItemEffects.artifactProperties.majorBeneficial].sort(() => Math.random() - 0.5);
        majorBeneficial.push(shuffledMajor[0]);

        // 1 detrimental
        const shuffledDetrimental = [...ItemEffects.artifactProperties.detrimentalProperties].sort(() => Math.random() - 0.5);
        detrimental.push(shuffledDetrimental[0]);

        return {
            minorBeneficial,
            majorBeneficial,
            detrimental
        };
    },

    /**
     * Get random item type
     */
    getRandomItemType() {
        const types = ['weapons', 'armor', 'footwear', 'handwear', 'headwear', 'jewelry', 'wondrous'];
        return types[Math.floor(Math.random() * types.length)];
    },

    /**
     * Get random rarity with weighted distribution
     */
    getRandomRarity() {
        const weights = [
            { id: 'common', weight: 30 },
            { id: 'uncommon', weight: 30 },
            { id: 'rare', weight: 20 },
            { id: 'veryRare', weight: 12 },
            { id: 'legendary', weight: 6 },
            { id: 'artifact', weight: 2 }
        ];
        return this.getWeightedRandom(weights).id;
    },

    /**
     * Get random biome
     */
    getRandomBiome() {
        const biomes = Object.keys(ItemBiomes.biomes);
        return biomes[Math.floor(Math.random() * biomes.length)];
    },

    /**
     * Convert rarity to number for comparison
     */
    rarityToNumber(rarity) {
        const map = { common: 1, uncommon: 2, rare: 3, veryRare: 4, legendary: 5, artifact: 6 };
        return map[rarity] || 2;
    },

    /**
     * Weighted random selection
     */
    getWeightedRandom(items) {
        const totalWeight = items.reduce((sum, item) => sum + (item.weight || 1), 0);
        let random = Math.random() * totalWeight;

        for (const item of items) {
            random -= (item.weight || 1);
            if (random <= 0) return item;
        }
        return items[0];
    },

    /**
     * Get random element from array
     */
    getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    // API methods for UI
    getItemTypes() {
        return [
            { id: 'random', name: 'Random' },
            { id: 'weapons', name: 'Weapon' },
            { id: 'armor', name: 'Armor' },
            { id: 'footwear', name: 'Footwear' },
            { id: 'handwear', name: 'Gloves & Bracers' },
            { id: 'headwear', name: 'Headwear' },
            { id: 'jewelry', name: 'Rings & Amulets' },
            { id: 'wondrous', name: 'Wondrous Item' }
        ];
    },

    getSubtypes(itemType) {
        if (itemType === 'random') return [{ id: 'random', name: 'Random' }];

        const category = ItemTypes[itemType];
        if (!category || !category.subtypes) return [{ id: 'random', name: 'Random' }];

        const subtypes = [{ id: 'random', name: 'Random' }];
        Object.values(category.subtypes).forEach(sub => {
            subtypes.push({ id: sub.id, name: sub.name });
        });
        return subtypes;
    },

    getRarities() {
        return [
            { id: 'random', name: 'Random', color: '#666' },
            { id: 'common', name: 'Common', color: ItemTypes.rarities.common.color },
            { id: 'uncommon', name: 'Uncommon', color: ItemTypes.rarities.uncommon.color },
            { id: 'rare', name: 'Rare', color: ItemTypes.rarities.rare.color },
            { id: 'veryRare', name: 'Very Rare', color: ItemTypes.rarities.veryRare.color },
            { id: 'legendary', name: 'Legendary', color: ItemTypes.rarities.legendary.color },
            { id: 'artifact', name: 'Artifact', color: ItemTypes.rarities.artifact.color }
        ];
    },

    getBiomes() {
        const biomes = [{ id: 'random', name: 'Random' }];
        Object.values(ItemBiomes.biomes).forEach(biome => {
            biomes.push({ id: biome.id, name: biome.name });
        });
        return biomes;
    }
};
