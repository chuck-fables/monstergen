/**
 * Magic Item Name Generation Data
 * Components for generating evocative item names
 */

const ItemNames = {
    // Prefixes by biome
    biomePrefixes: {
        tundra: ['Frost', 'Ice', 'Glacial', 'Frozen', 'Winter\'s', 'Polar', 'Aurora', 'Blizzard', 'Permafrost', 'Rimefrost'],
        taiga: ['Pine', 'Wolf', 'Bear', 'Boreal', 'Evergreen', 'Northern', 'Timber', 'Hunter\'s', 'Stalker\'s', 'Forest'],
        temperateForest: ['Fey', 'Oak', 'Sylvan', 'Dryad\'s', 'Moonlit', 'Verdant', 'Elder', 'Woodland', 'Grove', 'Thornwood'],
        rainforest: ['Viper\'s', 'Jungle', 'Orchid', 'Emerald', 'Serpent\'s', 'Monsoon', 'Primal', 'Venomous', 'Canopy', 'Savage'],
        grasslands: ['Wind', 'Storm', 'Thunder', 'Prairie', 'Horizon', 'Nomad\'s', 'Swift', 'Rider\'s', 'Stampede', 'Gale'],
        desert: ['Sun', 'Sand', 'Scorching', 'Dune', 'Mirage', 'Pharaoh\'s', 'Oasis', 'Scarab', 'Solar', 'Burning'],
        savanna: ['Lion\'s', 'Primal', 'Hunting', 'Pack', 'Stalking', 'Sun-baked', 'Tribal', 'Golden', 'Pride', 'Apex'],
        swamp: ['Bog', 'Marsh', 'Murk', 'Venom', 'Rotting', 'Hag\'s', 'Fetid', 'Mire', 'Plague', 'Withering'],
        mountain: ['Stone', 'Peak', 'Giant\'s', 'Forge', 'Iron', 'Granite', 'Thunder', 'Dwarf', 'Titan\'s', 'Adamant'],
        coastal: ['Tide', 'Salt', 'Storm', 'Coral', 'Wave', 'Sailor\'s', 'Kraken', 'Tempest', 'Seafoam', 'Siren\'s'],
        underwater: ['Abyssal', 'Deep', 'Pressure', 'Brine', 'Leviathan\'s', 'Coral', 'Pearl', 'Nautical', 'Sunken', 'Depths\''],
        underdark: ['Shadow', 'Dark', 'Drow', 'Spider', 'Void', 'Lightless', 'Deep', 'Gloom', 'Umbral', 'Silent'],
        abyssal: ['Demon', 'Chaos', 'Blood', 'Corrupted', 'Wrath', 'Tormented', 'Screaming', 'Damned', 'Unholy', 'Ruinous'],
        infernal: ['Hellfire', 'Devil\'s', 'Infernal', 'Brimstone', 'Contract', 'Tyrant\'s', 'Burning', 'Pit', 'Archon\'s', 'Soul'],
        celestial: ['Divine', 'Radiant', 'Angel\'s', 'Holy', 'Sacred', 'Heaven\'s', 'Blessed', 'Seraphic', 'Glorious', 'Light'],
        astral: ['Void', 'Star', 'Silver', 'Thought', 'Mind', 'Ethereal', 'Planar', 'Cosmic', 'Astral', 'Dreamwalker\'s'],
        urban: ['Guild', 'Thieves\'', 'Noble\'s', 'Merchant\'s', 'Street', 'City', 'Crown', 'Coin', 'Shadow', 'Market']
    },

    // Suffixes by item quality/effect
    suffixes: {
        power: ['of Power', 'of Might', 'of Strength', 'of the Titan', 'of Giants'],
        protection: ['of Protection', 'of Warding', 'of the Guardian', 'of Shielding', 'of Defense'],
        speed: ['of Speed', 'of Swiftness', 'of the Wind', 'of Haste', 'of Alacrity'],
        stealth: ['of Shadows', 'of Stealth', 'of the Unseen', 'of Silence', 'of Darkness'],
        magic: ['of the Mage', 'of Sorcery', 'of the Arcane', 'of Spellweaving', 'of Enchantment'],
        fire: ['of Flames', 'of Burning', 'of the Inferno', 'of Cinders', 'of the Phoenix'],
        cold: ['of Frost', 'of Winter', 'of the Glacier', 'of Freezing', 'of the North'],
        lightning: ['of Thunder', 'of Storms', 'of Lightning', 'of the Tempest', 'of Shocking'],
        poison: ['of Venom', 'of Toxins', 'of the Serpent', 'of Poison', 'of Blight'],
        radiant: ['of Light', 'of Radiance', 'of the Sun', 'of Dawn', 'of Glory'],
        necrotic: ['of Death', 'of Souls', 'of the Grave', 'of Withering', 'of Decay'],
        psychic: ['of Minds', 'of Thought', 'of the Psyche', 'of Madness', 'of Dreams'],
        healing: ['of Restoration', 'of Healing', 'of Vitality', 'of the Healer', 'of Life'],
        luck: ['of Fortune', 'of Luck', 'of Chance', 'of the Gambler', 'of Fate']
    },

    // Legendary name patterns
    legendaryPatterns: [
        'The {adj} {noun}',
        '{name}\'s {item}',
        '{item} of the {title}',
        'The {noun}-{verb}',
        '{adj} {item} of {place}'
    ],

    legendaryAdjectives: [
        'Eternal', 'Primordial', 'Legendary', 'Ancient', 'Mythic',
        'Forbidden', 'Lost', 'Cursed', 'Blessed', 'Awakened',
        'Shattered', 'Reforged', 'Boundless', 'Infinite', 'Final'
    ],

    legendaryNouns: [
        'Doom', 'Destiny', 'Reckoning', 'Judgment', 'Vengeance',
        'Salvation', 'Redemption', 'Annihilation', 'Creation', 'Ending',
        'Dawn', 'Dusk', 'Eclipse', 'Eternity', 'Oblivion'
    ],

    legendaryTitles: [
        'First King', 'Last Emperor', 'Dragon Slayer', 'World Breaker',
        'God Killer', 'Plane Walker', 'Soul Reaver', 'Time Weaver',
        'Death Dealer', 'Life Bringer', 'Storm Lord', 'Shadow Master',
        'Sun Prince', 'Moon Queen', 'Star Child'
    ],

    legendaryNames: [
        'Azrath', 'Xolotl', 'Thrain', 'Morrigan', 'Asmodeus',
        'Celestia', 'Vortigern', 'Sythara', 'Kel\'thuzad', 'Arthas',
        'Morgana', 'Elendil', 'Durlag', 'Zephyros', 'Chronos',
        'Nyx', 'Helios', 'Selene', 'Typhon', 'Prometheus'
    ],

    legendaryPlaces: [
        'the Eternal Void', 'the Shattered Realm', 'the First Dawn',
        'the Last Night', 'the Burning Hells', 'the Silver Heaven',
        'the Endless Abyss', 'the Forgotten Age', 'the World\'s End',
        'the Infinite Stars', 'the Deep Shadow', 'the Final War'
    ],

    // Artifact name patterns
    artifactPatterns: [
        'The {title} of {deity}',
        '{deity}\'s {aspect}',
        'The {number} {aspect}',
        '{title}, the {epithet}'
    ],

    artifactDeities: [
        'Pelor', 'Moradin', 'Corellon', 'Gruumsh', 'Lolth',
        'Bahamut', 'Tiamat', 'Vecna', 'Nerull', 'Erythnul',
        'Helm', 'Tyr', 'Tempus', 'Bane', 'Mystra',
        'Asmodeus', 'Orcus', 'Demogorgon', 'Tharizdun', 'Ao'
    ],

    artifactAspects: [
        'Eye', 'Hand', 'Heart', 'Crown', 'Throne',
        'Scepter', 'Orb', 'Blade', 'Shield', 'Armor',
        'Book', 'Key', 'Chain', 'Ring', 'Staff'
    ],

    artifactEpithets: [
        'World Ender', 'God Slayer', 'Fate Weaver', 'Soul Drinker',
        'Reality Breaker', 'Time Stopper', 'Mind Shatterer', 'Death\'s Bane',
        'Life\'s End', 'Chaos Bringer', 'Order\'s Fist', 'Balance Keeper'
    ],

    // Flavor text templates
    flavorTemplates: {
        common: [
            'Crafted by {creator} during the {era}.',
            'A simple enchantment placed on an otherwise ordinary {item}.',
            'Found in the ruins of {place}.',
            'Said to have belonged to a {profession} of little note.',
            'Mass-produced by the mages of {organization}.'
        ],
        uncommon: [
            'Forged by {creator}, a renowned {profession}.',
            'Lost for centuries in the {place}.',
            'Said to be one of several made for {organization}.',
            'Recovered from the hoard of {creature}.',
            'Blessed by the priests of {deity}.'
        ],
        rare: [
            'Once wielded by {hero}, hero of {place}.',
            'Forged in the fires of {place} by {creator}.',
            'Stolen from the vault of {villain}.',
            'The last creation of {creator} before their mysterious death.',
            'Said to contain the essence of {creature}.'
        ],
        veryRare: [
            'Legendary weapon of {hero}, thought lost during the {war}.',
            'Crafted by {creator} using techniques now forgotten.',
            'One of the {number} artifacts of {organization}.',
            'Touched by the divine power of {deity}.',
            'Forged from the remains of {creature}.'
        ],
        legendary: [
            'Wielded by {hero} in the final battle of the {war}.',
            '{creator}\'s masterwork, sought by kings and emperors.',
            'Said to have been crafted by the gods themselves.',
            'The centerpiece of countless myths and legends.',
            'Its creation marked the end of the {era}.'
        ],
        artifact: [
            'Crafted at the dawn of creation by {deity}.',
            'This item exists outside the normal flow of time.',
            'Its true origin is unknown, even to the gods.',
            'Countless civilizations have risen and fallen seeking this power.',
            'The mere existence of this artifact shapes reality around it.'
        ]
    },

    // Placeholder replacements
    placeholders: {
        creator: ['a forgotten master smith', 'the Archmage Tenser', 'dwarven artificers', 'elven bladesmiths', 'a mad wizard', 'the monks of the Silver Order', 'cloud giant crafters', 'gnomish inventors'],
        era: ['Age of Myths', 'First Kingdom', 'Dragon Wars', 'Time of Troubles', 'Golden Age', 'Dark Century', 'Era of Magic', 'Age of Heroes'],
        place: ['Undermountain', 'the Spine of the World', 'Neverwinter', 'Waterdeep', 'the Underdark', 'the Feywild', 'a forgotten tomb', 'the Astral Sea'],
        profession: ['blacksmith', 'wizard', 'warrior', 'merchant', 'adventurer', 'king', 'priest', 'assassin'],
        organization: ['the Harpers', 'the Zhentarim', 'the Lords\' Alliance', 'the Emerald Enclave', 'the Order of the Gauntlet', 'a secret cabal', 'a thieves\' guild', 'an ancient order'],
        creature: ['an ancient dragon', 'a powerful demon', 'a celestial being', 'a primordial entity', 'a mind flayer elder brain', 'a beholder', 'a lich', 'a titan'],
        hero: ['Sir Aldric the Bold', 'Elara Moonshadow', 'Thrain Ironforge', 'Zara the Wanderer', 'Kael Stormwind', 'Moira Darkbane', 'Gareth the Valiant', 'Seraphina Lightbringer'],
        villain: ['the Lich King', 'Lord Darkmoore', 'the Shadow Queen', 'Zariel', 'Acererak', 'Strahd', 'Vecna', 'the Mad Mage'],
        deity: ['Pelor', 'Moradin', 'Corellon', 'Tyr', 'Bahamut', 'Mystra', 'Selune', 'Helm'],
        war: ['Dragon War', 'Planar Conflict', 'War of the Gods', 'Demon Incursion', 'Giant Uprising', 'Undead Plague', 'Mage Wars', 'Final Battle'],
        number: ['Seven', 'Nine', 'Thirteen', 'Three', 'Five', 'Twelve', 'Four', 'Eight']
    },

    // Item-type specific name components
    typeNames: {
        weapon: {
            sword: ['Blade', 'Edge', 'Saber', 'Cutter', 'Cleaver'],
            axe: ['Axe', 'Chopper', 'Hacker', 'Cleaver', 'Splitter'],
            hammer: ['Hammer', 'Maul', 'Crusher', 'Smasher', 'Pounder'],
            bow: ['Bow', 'Longbow', 'Arc', 'String', 'Recurve'],
            dagger: ['Dagger', 'Knife', 'Shiv', 'Stiletto', 'Fang'],
            spear: ['Spear', 'Pike', 'Lance', 'Javelin', 'Glaive'],
            staff: ['Staff', 'Rod', 'Stave', 'Pole', 'Cane']
        },
        armor: {
            light: ['Vest', 'Jerkin', 'Leathers', 'Hide', 'Padding'],
            medium: ['Mail', 'Scale', 'Breastplate', 'Coat', 'Cuirass'],
            heavy: ['Plate', 'Full Plate', 'Armor', 'Harness', 'Carapace'],
            shield: ['Shield', 'Buckler', 'Aegis', 'Ward', 'Bulwark']
        },
        accessory: {
            footwear: ['Boots', 'Sandals', 'Treads', 'Greaves', 'Slippers'],
            handwear: ['Gauntlets', 'Gloves', 'Bracers', 'Grips', 'Vambraces'],
            headwear: ['Helm', 'Crown', 'Circlet', 'Mask', 'Hood'],
            jewelry: ['Ring', 'Amulet', 'Pendant', 'Torc', 'Brooch']
        }
    },

    /**
     * Generate a name for an item
     */
    generateName(itemType, subtype, biome, rarity) {
        const prefix = this.getRandomElement(this.biomePrefixes[biome] || this.biomePrefixes.urban);

        // Get item-appropriate noun
        let itemNoun = subtype.name;

        // For legendary+ items, use special patterns
        if (rarity === 'legendary') {
            return this.generateLegendaryName(itemNoun, biome);
        }
        if (rarity === 'artifact') {
            return this.generateArtifactName(itemNoun);
        }

        // Choose naming pattern based on rarity
        const patterns = {
            common: ['{prefix} {item}', '{item} of {suffix}'],
            uncommon: ['{prefix} {item}', 'The {prefix} {item}', '{item} of {suffix}'],
            rare: ['The {prefix} {item}', '{item} of the {suffix}', '{prefix} {item} of {suffix}'],
            veryRare: ['The {prefix} {item} of {suffix}', '{prefix}\'s {item}', 'The {adj} {item}']
        };

        const availablePatterns = patterns[rarity] || patterns.uncommon;
        const pattern = this.getRandomElement(availablePatterns);

        // Get a thematic suffix
        const suffixCategory = this.getRandomElement(Object.keys(this.suffixes));
        const suffix = this.getRandomElement(this.suffixes[suffixCategory]);

        return pattern
            .replace('{prefix}', prefix)
            .replace('{item}', itemNoun)
            .replace('{suffix}', suffix.replace('of ', '').replace('of the ', ''))
            .replace('{adj}', this.getRandomElement(this.legendaryAdjectives));
    },

    /**
     * Generate a legendary item name
     */
    generateLegendaryName(itemNoun, biome) {
        const patterns = [
            `The ${this.getRandomElement(this.legendaryAdjectives)} ${itemNoun}`,
            `${this.getRandomElement(this.legendaryNames)}'s ${itemNoun}`,
            `${itemNoun} of ${this.getRandomElement(this.legendaryPlaces)}`,
            `The ${itemNoun} of ${this.getRandomElement(this.legendaryNouns)}`,
            `${this.getRandomElement(this.legendaryNames)}'s ${this.getRandomElement(this.legendaryAdjectives)} ${itemNoun}`
        ];
        return this.getRandomElement(patterns);
    },

    /**
     * Generate an artifact name
     */
    generateArtifactName(itemNoun) {
        const patterns = [
            `The ${this.getRandomElement(this.artifactAspects)} of ${this.getRandomElement(this.artifactDeities)}`,
            `${this.getRandomElement(this.artifactDeities)}'s ${this.getRandomElement(this.artifactAspects)}`,
            `The ${this.getRandomElement(this.legendaryAdjectives)} ${this.getRandomElement(this.artifactAspects)}`,
            `${this.getRandomElement(this.legendaryNames)}, the ${this.getRandomElement(this.artifactEpithets)}`
        ];
        return this.getRandomElement(patterns);
    },

    /**
     * Generate flavor text
     */
    generateFlavorText(rarity) {
        const templates = this.flavorTemplates[rarity] || this.flavorTemplates.uncommon;
        let text = this.getRandomElement(templates);

        // Replace placeholders
        Object.entries(this.placeholders).forEach(([key, values]) => {
            const regex = new RegExp(`\\{${key}\\}`, 'g');
            text = text.replace(regex, this.getRandomElement(values));
        });

        return text;
    },

    /**
     * Get random element from array
     */
    getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
};
