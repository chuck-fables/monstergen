/**
 * Magic Item Types Data
 * Defines all item categories with base properties
 */

const ItemTypes = {
    // Weapon categories
    weapons: {
        id: 'weapon',
        name: 'Weapon',
        subtypes: {
            // Simple Melee
            club: { id: 'club', name: 'Club', category: 'simple', melee: true, damage: '1d4', damageType: 'bludgeoning', properties: ['light'] },
            dagger: { id: 'dagger', name: 'Dagger', category: 'simple', melee: true, damage: '1d4', damageType: 'piercing', properties: ['finesse', 'light', 'thrown'] },
            greatclub: { id: 'greatclub', name: 'Greatclub', category: 'simple', melee: true, damage: '1d8', damageType: 'bludgeoning', properties: ['two-handed'] },
            handaxe: { id: 'handaxe', name: 'Handaxe', category: 'simple', melee: true, damage: '1d6', damageType: 'slashing', properties: ['light', 'thrown'] },
            javelin: { id: 'javelin', name: 'Javelin', category: 'simple', melee: true, damage: '1d6', damageType: 'piercing', properties: ['thrown'] },
            lightHammer: { id: 'lightHammer', name: 'Light Hammer', category: 'simple', melee: true, damage: '1d4', damageType: 'bludgeoning', properties: ['light', 'thrown'] },
            mace: { id: 'mace', name: 'Mace', category: 'simple', melee: true, damage: '1d6', damageType: 'bludgeoning', properties: [] },
            quarterstaff: { id: 'quarterstaff', name: 'Quarterstaff', category: 'simple', melee: true, damage: '1d6', damageType: 'bludgeoning', properties: ['versatile'] },
            sickle: { id: 'sickle', name: 'Sickle', category: 'simple', melee: true, damage: '1d4', damageType: 'slashing', properties: ['light'] },
            spear: { id: 'spear', name: 'Spear', category: 'simple', melee: true, damage: '1d6', damageType: 'piercing', properties: ['thrown', 'versatile'] },

            // Simple Ranged
            lightCrossbow: { id: 'lightCrossbow', name: 'Light Crossbow', category: 'simple', melee: false, damage: '1d8', damageType: 'piercing', properties: ['ammunition', 'loading', 'two-handed'] },
            dart: { id: 'dart', name: 'Dart', category: 'simple', melee: false, damage: '1d4', damageType: 'piercing', properties: ['finesse', 'thrown'] },
            shortbow: { id: 'shortbow', name: 'Shortbow', category: 'simple', melee: false, damage: '1d6', damageType: 'piercing', properties: ['ammunition', 'two-handed'] },
            sling: { id: 'sling', name: 'Sling', category: 'simple', melee: false, damage: '1d4', damageType: 'bludgeoning', properties: ['ammunition'] },

            // Martial Melee
            battleaxe: { id: 'battleaxe', name: 'Battleaxe', category: 'martial', melee: true, damage: '1d8', damageType: 'slashing', properties: ['versatile'] },
            flail: { id: 'flail', name: 'Flail', category: 'martial', melee: true, damage: '1d8', damageType: 'bludgeoning', properties: [] },
            glaive: { id: 'glaive', name: 'Glaive', category: 'martial', melee: true, damage: '1d10', damageType: 'slashing', properties: ['heavy', 'reach', 'two-handed'] },
            greataxe: { id: 'greataxe', name: 'Greataxe', category: 'martial', melee: true, damage: '1d12', damageType: 'slashing', properties: ['heavy', 'two-handed'] },
            greatsword: { id: 'greatsword', name: 'Greatsword', category: 'martial', melee: true, damage: '2d6', damageType: 'slashing', properties: ['heavy', 'two-handed'] },
            halberd: { id: 'halberd', name: 'Halberd', category: 'martial', melee: true, damage: '1d10', damageType: 'slashing', properties: ['heavy', 'reach', 'two-handed'] },
            lance: { id: 'lance', name: 'Lance', category: 'martial', melee: true, damage: '1d12', damageType: 'piercing', properties: ['reach', 'special'] },
            longsword: { id: 'longsword', name: 'Longsword', category: 'martial', melee: true, damage: '1d8', damageType: 'slashing', properties: ['versatile'] },
            maul: { id: 'maul', name: 'Maul', category: 'martial', melee: true, damage: '2d6', damageType: 'bludgeoning', properties: ['heavy', 'two-handed'] },
            morningstar: { id: 'morningstar', name: 'Morningstar', category: 'martial', melee: true, damage: '1d8', damageType: 'piercing', properties: [] },
            pike: { id: 'pike', name: 'Pike', category: 'martial', melee: true, damage: '1d10', damageType: 'piercing', properties: ['heavy', 'reach', 'two-handed'] },
            rapier: { id: 'rapier', name: 'Rapier', category: 'martial', melee: true, damage: '1d8', damageType: 'piercing', properties: ['finesse'] },
            scimitar: { id: 'scimitar', name: 'Scimitar', category: 'martial', melee: true, damage: '1d6', damageType: 'slashing', properties: ['finesse', 'light'] },
            shortsword: { id: 'shortsword', name: 'Shortsword', category: 'martial', melee: true, damage: '1d6', damageType: 'piercing', properties: ['finesse', 'light'] },
            trident: { id: 'trident', name: 'Trident', category: 'martial', melee: true, damage: '1d6', damageType: 'piercing', properties: ['thrown', 'versatile'] },
            warPick: { id: 'warPick', name: 'War Pick', category: 'martial', melee: true, damage: '1d8', damageType: 'piercing', properties: [] },
            warhammer: { id: 'warhammer', name: 'Warhammer', category: 'martial', melee: true, damage: '1d8', damageType: 'bludgeoning', properties: ['versatile'] },
            whip: { id: 'whip', name: 'Whip', category: 'martial', melee: true, damage: '1d4', damageType: 'slashing', properties: ['finesse', 'reach'] },

            // Martial Ranged
            blowgun: { id: 'blowgun', name: 'Blowgun', category: 'martial', melee: false, damage: '1', damageType: 'piercing', properties: ['ammunition', 'loading'] },
            handCrossbow: { id: 'handCrossbow', name: 'Hand Crossbow', category: 'martial', melee: false, damage: '1d6', damageType: 'piercing', properties: ['ammunition', 'light', 'loading'] },
            heavyCrossbow: { id: 'heavyCrossbow', name: 'Heavy Crossbow', category: 'martial', melee: false, damage: '1d10', damageType: 'piercing', properties: ['ammunition', 'heavy', 'loading', 'two-handed'] },
            longbow: { id: 'longbow', name: 'Longbow', category: 'martial', melee: false, damage: '1d8', damageType: 'piercing', properties: ['ammunition', 'heavy', 'two-handed'] },
            net: { id: 'net', name: 'Net', category: 'martial', melee: false, damage: '0', damageType: 'none', properties: ['special', 'thrown'] }
        }
    },

    // Armor categories
    armor: {
        id: 'armor',
        name: 'Armor',
        subtypes: {
            // Light Armor
            padded: { id: 'padded', name: 'Padded Armor', category: 'light', baseAC: 11, dexMod: true, maxDex: null, stealthDisadvantage: true, strengthReq: null },
            leather: { id: 'leather', name: 'Leather Armor', category: 'light', baseAC: 11, dexMod: true, maxDex: null, stealthDisadvantage: false, strengthReq: null },
            studdedLeather: { id: 'studdedLeather', name: 'Studded Leather', category: 'light', baseAC: 12, dexMod: true, maxDex: null, stealthDisadvantage: false, strengthReq: null },

            // Medium Armor
            hide: { id: 'hide', name: 'Hide Armor', category: 'medium', baseAC: 12, dexMod: true, maxDex: 2, stealthDisadvantage: false, strengthReq: null },
            chainShirt: { id: 'chainShirt', name: 'Chain Shirt', category: 'medium', baseAC: 13, dexMod: true, maxDex: 2, stealthDisadvantage: false, strengthReq: null },
            scaleMail: { id: 'scaleMail', name: 'Scale Mail', category: 'medium', baseAC: 14, dexMod: true, maxDex: 2, stealthDisadvantage: true, strengthReq: null },
            breastplate: { id: 'breastplate', name: 'Breastplate', category: 'medium', baseAC: 14, dexMod: true, maxDex: 2, stealthDisadvantage: false, strengthReq: null },
            halfPlate: { id: 'halfPlate', name: 'Half Plate', category: 'medium', baseAC: 15, dexMod: true, maxDex: 2, stealthDisadvantage: true, strengthReq: null },

            // Heavy Armor
            ringMail: { id: 'ringMail', name: 'Ring Mail', category: 'heavy', baseAC: 14, dexMod: false, maxDex: 0, stealthDisadvantage: true, strengthReq: null },
            chainMail: { id: 'chainMail', name: 'Chain Mail', category: 'heavy', baseAC: 16, dexMod: false, maxDex: 0, stealthDisadvantage: true, strengthReq: 13 },
            splint: { id: 'splint', name: 'Splint Armor', category: 'heavy', baseAC: 17, dexMod: false, maxDex: 0, stealthDisadvantage: true, strengthReq: 15 },
            plate: { id: 'plate', name: 'Plate Armor', category: 'heavy', baseAC: 18, dexMod: false, maxDex: 0, stealthDisadvantage: true, strengthReq: 15 },

            // Shields
            shield: { id: 'shield', name: 'Shield', category: 'shield', baseAC: 2, dexMod: false, maxDex: 0, stealthDisadvantage: false, strengthReq: null }
        }
    },

    // Footwear
    footwear: {
        id: 'footwear',
        name: 'Footwear',
        subtypes: {
            boots: { id: 'boots', name: 'Boots', slot: 'feet', description: 'Sturdy footwear reaching to mid-calf or higher' },
            sandals: { id: 'sandals', name: 'Sandals', slot: 'feet', description: 'Open-toed footwear with straps' },
            shoes: { id: 'shoes', name: 'Shoes', slot: 'feet', description: 'Closed footwear covering the foot' },
            greaves: { id: 'greaves', name: 'Greaves', slot: 'feet', description: 'Armored shin guards often with attached sabatons' },
            slippers: { id: 'slippers', name: 'Slippers', slot: 'feet', description: 'Soft, lightweight footwear' }
        }
    },

    // Gloves/Bracers
    handwear: {
        id: 'handwear',
        name: 'Gloves & Bracers',
        subtypes: {
            gloves: { id: 'gloves', name: 'Gloves', slot: 'hands', description: 'Fitted hand coverings with individual fingers' },
            gauntlets: { id: 'gauntlets', name: 'Gauntlets', slot: 'hands', description: 'Armored gloves of metal or hardened material' },
            bracers: { id: 'bracers', name: 'Bracers', slot: 'wrists', description: 'Protective bands worn on the forearms' },
            vambraces: { id: 'vambraces', name: 'Vambraces', slot: 'wrists', description: 'Armored forearm guards' },
            wraps: { id: 'wraps', name: 'Hand Wraps', slot: 'hands', description: 'Cloth or leather strips wound around hands and wrists' }
        }
    },

    // Headwear
    headwear: {
        id: 'headwear',
        name: 'Headwear',
        subtypes: {
            helm: { id: 'helm', name: 'Helm', slot: 'head', description: 'Full protective head covering' },
            circlet: { id: 'circlet', name: 'Circlet', slot: 'head', description: 'Decorative band worn around the forehead' },
            crown: { id: 'crown', name: 'Crown', slot: 'head', description: 'Regal headpiece denoting authority' },
            hood: { id: 'hood', name: 'Hood', slot: 'head', description: 'Cloth covering for head and neck' },
            mask: { id: 'mask', name: 'Mask', slot: 'face', description: 'Face covering of various materials' },
            hat: { id: 'hat', name: 'Hat', slot: 'head', description: 'Various styles of decorative or practical headwear' },
            headband: { id: 'headband', name: 'Headband', slot: 'head', description: 'Simple band worn across the forehead' },
            goggles: { id: 'goggles', name: 'Goggles', slot: 'eyes', description: 'Protective eyewear with lenses' }
        }
    },

    // Rings and Amulets
    jewelry: {
        id: 'jewelry',
        name: 'Rings & Amulets',
        subtypes: {
            ring: { id: 'ring', name: 'Ring', slot: 'finger', description: 'Band worn on a finger' },
            amulet: { id: 'amulet', name: 'Amulet', slot: 'neck', description: 'Pendant worn on a chain around the neck' },
            necklace: { id: 'necklace', name: 'Necklace', slot: 'neck', description: 'Decorative chain or cord worn around the neck' },
            brooch: { id: 'brooch', name: 'Brooch', slot: 'chest', description: 'Ornamental clasp pinned to clothing' },
            pendant: { id: 'pendant', name: 'Pendant', slot: 'neck', description: 'Hanging ornament on a chain' },
            torc: { id: 'torc', name: 'Torc', slot: 'neck', description: 'Rigid ring worn around the neck' },
            earring: { id: 'earring', name: 'Earring', slot: 'ear', description: 'Ornament worn on the ear' }
        }
    },

    // Wondrous Items
    wondrous: {
        id: 'wondrous',
        name: 'Wondrous Item',
        subtypes: {
            cloak: { id: 'cloak', name: 'Cloak', slot: 'shoulders', description: 'Long outer garment worn over the shoulders' },
            cape: { id: 'cape', name: 'Cape', slot: 'shoulders', description: 'Shorter outer garment attached at the neck' },
            belt: { id: 'belt', name: 'Belt', slot: 'waist', description: 'Band worn around the waist' },
            sash: { id: 'sash', name: 'Sash', slot: 'waist', description: 'Decorative cloth band worn around the waist or chest' },
            robe: { id: 'robe', name: 'Robe', slot: 'body', description: 'Long, loose outer garment' },
            vest: { id: 'vest', name: 'Vest', slot: 'chest', description: 'Sleeveless garment worn over a shirt' },
            orb: { id: 'orb', name: 'Orb', slot: 'held', description: 'Spherical object often used as an arcane focus' },
            staff: { id: 'staff', name: 'Staff', slot: 'held', description: 'Long rod used as a walking stick or arcane focus' },
            wand: { id: 'wand', name: 'Wand', slot: 'held', description: 'Short rod used as an arcane focus' },
            rod: { id: 'rod', name: 'Rod', slot: 'held', description: 'Scepter-like implement of magical power' },
            tome: { id: 'tome', name: 'Tome', slot: 'held', description: 'Magical book containing arcane knowledge' },
            lantern: { id: 'lantern', name: 'Lantern', slot: 'held', description: 'Portable light source' },
            horn: { id: 'horn', name: 'Horn', slot: 'held', description: 'Musical instrument or signaling device' },
            bag: { id: 'bag', name: 'Bag', slot: 'carried', description: 'Container for holding items' },
            quiver: { id: 'quiver', name: 'Quiver', slot: 'back', description: 'Container for arrows or bolts' },
            instrument: { id: 'instrument', name: 'Instrument', slot: 'held', description: 'Musical device of various types' },
            figurine: { id: 'figurine', name: 'Figurine', slot: 'carried', description: 'Small carved statuette' },
            gem: { id: 'gem', name: 'Gem', slot: 'carried', description: 'Precious stone imbued with magic' },
            mirror: { id: 'mirror', name: 'Mirror', slot: 'held', description: 'Reflective surface for scrying or other magic' },
            candle: { id: 'candle', name: 'Candle', slot: 'held', description: 'Wax light source with magical properties' },
            deck: { id: 'deck', name: 'Deck of Cards', slot: 'carried', description: 'Set of magical cards' },
            eye: { id: 'eye', name: 'Eye', slot: 'special', description: 'Magical prosthetic or arcane eye' },
            tattoo: { id: 'tattoo', name: 'Tattoo', slot: 'body', description: 'Magical marking applied to the skin' }
        }
    },

    // Rarity definitions with balance guidelines
    rarities: {
        common: {
            id: 'common',
            name: 'Common',
            color: '#9e9e9e',
            bonusRange: [0, 0],
            chargesRange: [1, 3],
            description: 'Minor magic items with subtle effects',
            priceRange: [50, 100],
            attunementChance: 0.1
        },
        uncommon: {
            id: 'uncommon',
            name: 'Uncommon',
            color: '#4caf50',
            bonusRange: [0, 1],
            chargesRange: [3, 5],
            description: 'Useful magic items with noticeable benefits',
            priceRange: [101, 500],
            attunementChance: 0.4
        },
        rare: {
            id: 'rare',
            name: 'Rare',
            color: '#2196f3',
            bonusRange: [1, 2],
            chargesRange: [5, 7],
            description: 'Powerful items sought by adventurers',
            priceRange: [501, 5000],
            attunementChance: 0.6
        },
        veryRare: {
            id: 'veryRare',
            name: 'Very Rare',
            color: '#9c27b0',
            bonusRange: [2, 3],
            chargesRange: [7, 10],
            description: 'Exceptionally powerful items of great value',
            priceRange: [5001, 50000],
            attunementChance: 0.8
        },
        legendary: {
            id: 'legendary',
            name: 'Legendary',
            color: '#ff9800',
            bonusRange: [3, 3],
            chargesRange: [10, 15],
            description: 'Items of myth whose power shapes history',
            priceRange: [50001, 200000],
            attunementChance: 0.95
        },
        artifact: {
            id: 'artifact',
            name: 'Artifact',
            color: '#f44336',
            bonusRange: [3, 4],
            chargesRange: [0, 0], // Usually unlimited or special
            description: 'Unique items of godlike power with their own wills',
            priceRange: [null, null], // Priceless
            attunementChance: 1.0
        }
    },

    // Attunement requirements
    attunementTypes: [
        { id: 'none', name: 'No attunement required', weight: 30 },
        { id: 'any', name: 'Requires attunement', weight: 40 },
        { id: 'spellcaster', name: 'Requires attunement by a spellcaster', weight: 10 },
        { id: 'class', name: 'Requires attunement by a {class}', weight: 10, classes: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'] },
        { id: 'alignment', name: 'Requires attunement by a creature of {alignment} alignment', weight: 5, alignments: ['good', 'evil', 'lawful', 'chaotic', 'neutral'] },
        { id: 'race', name: 'Requires attunement by a {race}', weight: 5, races: ['Elf', 'Dwarf', 'Human', 'Halfling', 'Gnome', 'Dragonborn', 'Tiefling', 'Half-Orc'] }
    ]
};
