/**
 * D&D 5e Monster Types Data
 * Contains all 14 monster types with their typical characteristics
 */

const MonsterTypes = {
    aberration: {
        name: 'Aberration',
        description: 'Utterly alien beings from beyond the planes or the Far Realm',
        typicalSizes: ['medium', 'large', 'huge'],
        typicalAlignments: ['lawful evil', 'neutral evil', 'chaotic evil', 'chaotic neutral'],
        abilityPriorities: ['int', 'con', 'wis', 'cha', 'str', 'dex'],
        typicalAbilityRanges: {
            str: { min: 8, max: 20 },
            dex: { min: 8, max: 16 },
            con: { min: 12, max: 22 },
            int: { min: 14, max: 24 },
            wis: { min: 12, max: 20 },
            cha: { min: 10, max: 20 }
        },
        commonDamageResistances: ['psychic'],
        commonDamageImmunities: [],
        commonConditionImmunities: ['charmed', 'frightened'],
        typicalSenses: {
            darkvision: 120,
            blindsight: 30,
            telepathy: 120
        },
        typicalLanguages: ['Deep Speech', 'telepathy'],
        commonTraits: ['Magic Resistance', 'Telepathy', 'Innate Spellcasting'],
        preferredAttackTypes: ['melee', 'spells', 'gaze'],
        armorTypes: ['natural armor'],
        typicalSpeeds: { walk: 30, fly: 0, swim: 0, climb: 0, burrow: 0 }
    },

    beast: {
        name: 'Beast',
        description: 'Nonhumanoid creatures that are part of the natural world',
        typicalSizes: ['tiny', 'small', 'medium', 'large', 'huge'],
        typicalAlignments: ['unaligned'],
        abilityPriorities: ['str', 'dex', 'con', 'wis', 'int', 'cha'],
        typicalAbilityRanges: {
            str: { min: 3, max: 24 },
            dex: { min: 8, max: 18 },
            con: { min: 10, max: 20 },
            int: { min: 1, max: 4 },
            wis: { min: 10, max: 14 },
            cha: { min: 3, max: 8 }
        },
        commonDamageResistances: [],
        commonDamageImmunities: [],
        commonConditionImmunities: [],
        typicalSenses: {
            darkvision: 60
        },
        typicalLanguages: [],
        commonTraits: ['Keen Senses', 'Pack Tactics', 'Pounce', 'Charge'],
        preferredAttackTypes: ['melee'],
        armorTypes: ['natural armor', 'none'],
        typicalSpeeds: { walk: 40, fly: 0, swim: 30, climb: 30, burrow: 0 }
    },

    celestial: {
        name: 'Celestial',
        description: 'Creatures native to the Upper Planes, often servants of good deities',
        typicalSizes: ['medium', 'large', 'huge'],
        typicalAlignments: ['lawful good', 'neutral good', 'chaotic good'],
        abilityPriorities: ['cha', 'wis', 'str', 'con', 'dex', 'int'],
        typicalAbilityRanges: {
            str: { min: 14, max: 26 },
            dex: { min: 12, max: 20 },
            con: { min: 14, max: 24 },
            int: { min: 14, max: 22 },
            wis: { min: 16, max: 25 },
            cha: { min: 18, max: 30 }
        },
        commonDamageResistances: ['radiant', 'bludgeoning, piercing, and slashing from nonmagical attacks'],
        commonDamageImmunities: ['necrotic', 'poison'],
        commonConditionImmunities: ['charmed', 'exhaustion', 'frightened', 'poisoned'],
        typicalSenses: {
            darkvision: 120,
            truesight: 120
        },
        typicalLanguages: ['all', 'Celestial', 'telepathy'],
        commonTraits: ['Magic Resistance', 'Divine Awareness', 'Innate Spellcasting', 'Angelic Weapons'],
        preferredAttackTypes: ['melee', 'spells', 'ranged'],
        armorTypes: ['natural armor', 'divine protection'],
        typicalSpeeds: { walk: 30, fly: 90, swim: 0, climb: 0, burrow: 0 }
    },

    construct: {
        name: 'Construct',
        description: 'Made creatures, animated by magic or other means',
        typicalSizes: ['small', 'medium', 'large', 'huge'],
        typicalAlignments: ['unaligned', 'lawful neutral'],
        abilityPriorities: ['str', 'con', 'dex', 'wis', 'int', 'cha'],
        typicalAbilityRanges: {
            str: { min: 14, max: 26 },
            dex: { min: 8, max: 14 },
            con: { min: 16, max: 24 },
            int: { min: 1, max: 10 },
            wis: { min: 8, max: 12 },
            cha: { min: 1, max: 6 }
        },
        commonDamageResistances: ['bludgeoning, piercing, and slashing from nonmagical attacks'],
        commonDamageImmunities: ['poison', 'psychic'],
        commonConditionImmunities: ['charmed', 'exhaustion', 'frightened', 'paralyzed', 'petrified', 'poisoned'],
        typicalSenses: {
            darkvision: 60,
            blindsight: 10
        },
        typicalLanguages: ['understands creator\'s language'],
        commonTraits: ['Immutable Form', 'Magic Resistance', 'Magic Weapons', 'Siege Monster'],
        preferredAttackTypes: ['melee'],
        armorTypes: ['natural armor'],
        typicalSpeeds: { walk: 30, fly: 0, swim: 0, climb: 0, burrow: 0 }
    },

    dragon: {
        name: 'Dragon',
        description: 'Large reptilian creatures of ancient origin and tremendous power',
        typicalSizes: ['medium', 'large', 'huge', 'gargantuan'],
        typicalAlignments: ['lawful good', 'lawful evil', 'chaotic good', 'chaotic evil'],
        abilityPriorities: ['str', 'cha', 'con', 'wis', 'int', 'dex'],
        typicalAbilityRanges: {
            str: { min: 16, max: 30 },
            dex: { min: 10, max: 16 },
            con: { min: 16, max: 28 },
            int: { min: 10, max: 22 },
            wis: { min: 12, max: 18 },
            cha: { min: 14, max: 26 }
        },
        commonDamageResistances: [],
        commonDamageImmunities: ['fire', 'cold', 'lightning', 'acid', 'poison'],
        commonConditionImmunities: ['frightened', 'paralyzed', 'charmed'],
        typicalSenses: {
            darkvision: 120,
            blindsight: 60
        },
        typicalLanguages: ['Common', 'Draconic'],
        commonTraits: ['Legendary Resistance', 'Frightful Presence', 'Wing Attack'],
        preferredAttackTypes: ['melee', 'breath'],
        armorTypes: ['natural armor'],
        typicalSpeeds: { walk: 40, fly: 80, swim: 40, climb: 40, burrow: 0 }
    },

    elemental: {
        name: 'Elemental',
        description: 'Creatures composed of elemental essence from the Inner Planes',
        typicalSizes: ['medium', 'large', 'huge'],
        typicalAlignments: ['true neutral', 'chaotic neutral'],
        abilityPriorities: ['con', 'str', 'dex', 'wis', 'int', 'cha'],
        typicalAbilityRanges: {
            str: { min: 14, max: 24 },
            dex: { min: 12, max: 20 },
            con: { min: 16, max: 24 },
            int: { min: 4, max: 10 },
            wis: { min: 10, max: 14 },
            cha: { min: 6, max: 12 }
        },
        commonDamageResistances: ['bludgeoning, piercing, and slashing from nonmagical attacks'],
        commonDamageImmunities: ['poison'],
        commonConditionImmunities: ['exhaustion', 'paralyzed', 'petrified', 'poisoned', 'unconscious'],
        typicalSenses: {
            darkvision: 60
        },
        typicalLanguages: ['Primordial'],
        commonTraits: ['Elemental Nature', 'Elemental Form'],
        preferredAttackTypes: ['melee', 'aura'],
        armorTypes: ['natural armor', 'none'],
        typicalSpeeds: { walk: 30, fly: 60, swim: 90, climb: 0, burrow: 30 }
    },

    fey: {
        name: 'Fey',
        description: 'Magical creatures closely tied to the forces of nature',
        typicalSizes: ['tiny', 'small', 'medium'],
        typicalAlignments: ['chaotic good', 'chaotic neutral', 'chaotic evil', 'neutral good'],
        abilityPriorities: ['cha', 'dex', 'wis', 'int', 'con', 'str'],
        typicalAbilityRanges: {
            str: { min: 6, max: 14 },
            dex: { min: 14, max: 22 },
            con: { min: 10, max: 16 },
            int: { min: 12, max: 18 },
            wis: { min: 12, max: 18 },
            cha: { min: 16, max: 24 }
        },
        commonDamageResistances: ['bludgeoning, piercing, and slashing from nonmagical attacks'],
        commonDamageImmunities: [],
        commonConditionImmunities: ['charmed'],
        typicalSenses: {
            darkvision: 60
        },
        typicalLanguages: ['Common', 'Elvish', 'Sylvan'],
        commonTraits: ['Magic Resistance', 'Innate Spellcasting', 'Fey Ancestry'],
        preferredAttackTypes: ['spells', 'melee'],
        armorTypes: ['natural armor', 'none'],
        typicalSpeeds: { walk: 30, fly: 40, swim: 0, climb: 0, burrow: 0 }
    },

    fiend: {
        name: 'Fiend',
        description: 'Wicked creatures native to the Lower Planes',
        typicalSizes: ['medium', 'large', 'huge'],
        typicalAlignments: ['lawful evil', 'neutral evil', 'chaotic evil'],
        abilityPriorities: ['str', 'cha', 'con', 'wis', 'int', 'dex'],
        typicalAbilityRanges: {
            str: { min: 14, max: 28 },
            dex: { min: 12, max: 18 },
            con: { min: 14, max: 26 },
            int: { min: 10, max: 22 },
            wis: { min: 12, max: 18 },
            cha: { min: 14, max: 26 }
        },
        commonDamageResistances: ['cold', 'bludgeoning, piercing, and slashing from nonmagical attacks'],
        commonDamageImmunities: ['fire', 'poison'],
        commonConditionImmunities: ['poisoned'],
        typicalSenses: {
            darkvision: 120,
            truesight: 60
        },
        typicalLanguages: ['Abyssal', 'Infernal', 'telepathy'],
        commonTraits: ['Magic Resistance', 'Devil\'s Sight', 'Innate Spellcasting'],
        preferredAttackTypes: ['melee', 'spells'],
        armorTypes: ['natural armor'],
        typicalSpeeds: { walk: 30, fly: 60, swim: 0, climb: 0, burrow: 0 }
    },

    giant: {
        name: 'Giant',
        description: 'Human-like creatures of great size and strength',
        typicalSizes: ['large', 'huge', 'gargantuan'],
        typicalAlignments: ['lawful good', 'neutral good', 'true neutral', 'neutral evil', 'chaotic evil'],
        abilityPriorities: ['str', 'con', 'wis', 'dex', 'int', 'cha'],
        typicalAbilityRanges: {
            str: { min: 18, max: 29 },
            dex: { min: 8, max: 14 },
            con: { min: 16, max: 26 },
            int: { min: 8, max: 16 },
            wis: { min: 10, max: 18 },
            cha: { min: 10, max: 18 }
        },
        commonDamageResistances: [],
        commonDamageImmunities: [],
        commonConditionImmunities: [],
        typicalSenses: {},
        typicalLanguages: ['Giant'],
        commonTraits: ['Rock Throwing', 'Rock Catching'],
        preferredAttackTypes: ['melee', 'ranged'],
        armorTypes: ['natural armor', 'hide armor', 'chain mail'],
        typicalSpeeds: { walk: 40, fly: 0, swim: 0, climb: 0, burrow: 0 }
    },

    humanoid: {
        name: 'Humanoid',
        description: 'Bipedal peoples with culture and society',
        typicalSizes: ['small', 'medium'],
        typicalAlignments: ['any'],
        abilityPriorities: ['variable'],
        typicalAbilityRanges: {
            str: { min: 8, max: 18 },
            dex: { min: 8, max: 18 },
            con: { min: 8, max: 18 },
            int: { min: 8, max: 18 },
            wis: { min: 8, max: 18 },
            cha: { min: 8, max: 18 }
        },
        commonDamageResistances: [],
        commonDamageImmunities: [],
        commonConditionImmunities: [],
        typicalSenses: {},
        typicalLanguages: ['Common', 'racial language'],
        commonTraits: [],
        preferredAttackTypes: ['melee', 'ranged', 'spells'],
        armorTypes: ['light armor', 'medium armor', 'heavy armor', 'none'],
        typicalSpeeds: { walk: 30, fly: 0, swim: 0, climb: 0, burrow: 0 }
    },

    monstrosity: {
        name: 'Monstrosity',
        description: 'Frightening creatures not wholly natural',
        typicalSizes: ['small', 'medium', 'large', 'huge', 'gargantuan'],
        typicalAlignments: ['unaligned', 'chaotic evil', 'neutral evil', 'true neutral'],
        abilityPriorities: ['str', 'con', 'dex', 'wis', 'int', 'cha'],
        typicalAbilityRanges: {
            str: { min: 12, max: 26 },
            dex: { min: 10, max: 18 },
            con: { min: 12, max: 22 },
            int: { min: 2, max: 12 },
            wis: { min: 10, max: 16 },
            cha: { min: 6, max: 14 }
        },
        commonDamageResistances: [],
        commonDamageImmunities: [],
        commonConditionImmunities: [],
        typicalSenses: {
            darkvision: 60
        },
        typicalLanguages: [],
        commonTraits: ['Keen Senses', 'Pack Tactics', 'Pounce', 'Petrifying Gaze'],
        preferredAttackTypes: ['melee', 'gaze', 'breath'],
        armorTypes: ['natural armor'],
        typicalSpeeds: { walk: 40, fly: 60, swim: 40, climb: 30, burrow: 20 }
    },

    ooze: {
        name: 'Ooze',
        description: 'Gelatinous creatures that can seep through cracks',
        typicalSizes: ['medium', 'large', 'huge'],
        typicalAlignments: ['unaligned'],
        abilityPriorities: ['con', 'str', 'dex', 'wis', 'int', 'cha'],
        typicalAbilityRanges: {
            str: { min: 12, max: 20 },
            dex: { min: 3, max: 8 },
            con: { min: 14, max: 22 },
            int: { min: 1, max: 2 },
            wis: { min: 6, max: 8 },
            cha: { min: 1, max: 2 }
        },
        commonDamageResistances: ['acid'],
        commonDamageImmunities: ['acid'],
        commonConditionImmunities: ['blinded', 'charmed', 'deafened', 'exhaustion', 'frightened', 'prone'],
        typicalSenses: {
            blindsight: 60
        },
        typicalLanguages: [],
        commonTraits: ['Amorphous', 'Corrosive Form', 'Split'],
        preferredAttackTypes: ['melee', 'aura'],
        armorTypes: ['none'],
        typicalSpeeds: { walk: 20, fly: 0, swim: 20, climb: 20, burrow: 0 }
    },

    plant: {
        name: 'Plant',
        description: 'Vegetable creatures, not ordinary flora',
        typicalSizes: ['small', 'medium', 'large', 'huge'],
        typicalAlignments: ['unaligned', 'true neutral', 'neutral evil'],
        abilityPriorities: ['con', 'str', 'wis', 'dex', 'int', 'cha'],
        typicalAbilityRanges: {
            str: { min: 12, max: 22 },
            dex: { min: 6, max: 12 },
            con: { min: 14, max: 22 },
            int: { min: 4, max: 12 },
            wis: { min: 10, max: 16 },
            cha: { min: 6, max: 12 }
        },
        commonDamageResistances: ['bludgeoning', 'piercing'],
        commonDamageImmunities: [],
        commonConditionImmunities: ['blinded', 'deafened', 'exhaustion'],
        typicalSenses: {
            blindsight: 30
        },
        typicalLanguages: [],
        commonTraits: ['False Appearance', 'Regeneration'],
        preferredAttackTypes: ['melee', 'aura'],
        armorTypes: ['natural armor', 'none'],
        typicalSpeeds: { walk: 20, fly: 0, swim: 0, climb: 20, burrow: 0 }
    },

    undead: {
        name: 'Undead',
        description: 'Once-living creatures animated by spiritual or magical forces',
        typicalSizes: ['medium', 'large'],
        typicalAlignments: ['lawful evil', 'neutral evil', 'chaotic evil'],
        abilityPriorities: ['con', 'str', 'wis', 'cha', 'dex', 'int'],
        typicalAbilityRanges: {
            str: { min: 10, max: 22 },
            dex: { min: 10, max: 18 },
            con: { min: 14, max: 22 },
            int: { min: 3, max: 18 },
            wis: { min: 8, max: 16 },
            cha: { min: 5, max: 18 }
        },
        commonDamageResistances: ['necrotic', 'bludgeoning, piercing, and slashing from nonmagical attacks'],
        commonDamageImmunities: ['poison'],
        commonConditionImmunities: ['exhaustion', 'poisoned'],
        typicalSenses: {
            darkvision: 60
        },
        typicalLanguages: ['understands languages it knew in life'],
        commonTraits: ['Undead Fortitude', 'Turn Resistance', 'Sunlight Sensitivity'],
        preferredAttackTypes: ['melee', 'spells'],
        armorTypes: ['natural armor', 'armor worn in life'],
        typicalSpeeds: { walk: 30, fly: 0, swim: 0, climb: 0, burrow: 0 }
    }
};

/**
 * CR Statistics Table (based on DMG guidelines)
 * Used for balanced stat generation
 */
const CRStats = {
    0: { profBonus: 2, ac: 13, hpMin: 1, hpMax: 6, attackBonus: 3, damage: '0-1', saveDC: 13 },
    0.125: { profBonus: 2, ac: 13, hpMin: 7, hpMax: 35, attackBonus: 3, damage: '2-3', saveDC: 13 },
    0.25: { profBonus: 2, ac: 13, hpMin: 36, hpMax: 49, attackBonus: 3, damage: '4-5', saveDC: 13 },
    0.5: { profBonus: 2, ac: 13, hpMin: 50, hpMax: 70, attackBonus: 3, damage: '6-8', saveDC: 13 },
    1: { profBonus: 2, ac: 13, hpMin: 71, hpMax: 85, attackBonus: 3, damage: '9-14', saveDC: 13 },
    2: { profBonus: 2, ac: 13, hpMin: 86, hpMax: 100, attackBonus: 3, damage: '15-20', saveDC: 13 },
    3: { profBonus: 2, ac: 13, hpMin: 101, hpMax: 115, attackBonus: 4, damage: '21-26', saveDC: 13 },
    4: { profBonus: 2, ac: 14, hpMin: 116, hpMax: 130, attackBonus: 5, damage: '27-32', saveDC: 14 },
    5: { profBonus: 3, ac: 15, hpMin: 131, hpMax: 145, attackBonus: 6, damage: '33-38', saveDC: 15 },
    6: { profBonus: 3, ac: 15, hpMin: 146, hpMax: 160, attackBonus: 6, damage: '39-44', saveDC: 15 },
    7: { profBonus: 3, ac: 15, hpMin: 161, hpMax: 175, attackBonus: 6, damage: '45-50', saveDC: 15 },
    8: { profBonus: 3, ac: 16, hpMin: 176, hpMax: 190, attackBonus: 7, damage: '51-56', saveDC: 16 },
    9: { profBonus: 4, ac: 16, hpMin: 191, hpMax: 205, attackBonus: 7, damage: '57-62', saveDC: 16 },
    10: { profBonus: 4, ac: 17, hpMin: 206, hpMax: 220, attackBonus: 7, damage: '63-68', saveDC: 16 },
    11: { profBonus: 4, ac: 17, hpMin: 221, hpMax: 235, attackBonus: 8, damage: '69-74', saveDC: 17 },
    12: { profBonus: 4, ac: 17, hpMin: 236, hpMax: 250, attackBonus: 8, damage: '75-80', saveDC: 17 },
    13: { profBonus: 5, ac: 18, hpMin: 251, hpMax: 265, attackBonus: 8, damage: '81-86', saveDC: 18 },
    14: { profBonus: 5, ac: 18, hpMin: 266, hpMax: 280, attackBonus: 8, damage: '87-92', saveDC: 18 },
    15: { profBonus: 5, ac: 18, hpMin: 281, hpMax: 295, attackBonus: 8, damage: '93-98', saveDC: 18 },
    16: { profBonus: 5, ac: 18, hpMin: 296, hpMax: 310, attackBonus: 9, damage: '99-104', saveDC: 18 },
    17: { profBonus: 6, ac: 19, hpMin: 311, hpMax: 325, attackBonus: 10, damage: '105-110', saveDC: 19 },
    18: { profBonus: 6, ac: 19, hpMin: 326, hpMax: 340, attackBonus: 10, damage: '111-116', saveDC: 19 },
    19: { profBonus: 6, ac: 19, hpMin: 341, hpMax: 355, attackBonus: 10, damage: '117-122', saveDC: 19 },
    20: { profBonus: 6, ac: 19, hpMin: 356, hpMax: 400, attackBonus: 10, damage: '123-140', saveDC: 19 },
    21: { profBonus: 7, ac: 19, hpMin: 401, hpMax: 445, attackBonus: 11, damage: '141-158', saveDC: 20 },
    22: { profBonus: 7, ac: 19, hpMin: 446, hpMax: 490, attackBonus: 11, damage: '159-176', saveDC: 20 },
    23: { profBonus: 7, ac: 19, hpMin: 491, hpMax: 535, attackBonus: 11, damage: '177-194', saveDC: 20 },
    24: { profBonus: 7, ac: 19, hpMin: 536, hpMax: 580, attackBonus: 12, damage: '195-212', saveDC: 21 },
    25: { profBonus: 8, ac: 19, hpMin: 581, hpMax: 625, attackBonus: 12, damage: '213-230', saveDC: 21 },
    26: { profBonus: 8, ac: 19, hpMin: 626, hpMax: 670, attackBonus: 12, damage: '231-248', saveDC: 21 },
    27: { profBonus: 8, ac: 19, hpMin: 671, hpMax: 715, attackBonus: 13, damage: '249-266', saveDC: 22 },
    28: { profBonus: 8, ac: 19, hpMin: 716, hpMax: 760, attackBonus: 13, damage: '267-284', saveDC: 22 },
    29: { profBonus: 9, ac: 19, hpMin: 761, hpMax: 805, attackBonus: 13, damage: '285-302', saveDC: 22 },
    30: { profBonus: 9, ac: 19, hpMin: 806, hpMax: 850, attackBonus: 14, damage: '303-320', saveDC: 23 }
};

/**
 * Size modifiers and hit dice
 */
const SizeData = {
    tiny: { hitDie: 4, space: '2.5 ft.', reachMod: -5 },
    small: { hitDie: 6, space: '5 ft.', reachMod: 0 },
    medium: { hitDie: 8, space: '5 ft.', reachMod: 0 },
    large: { hitDie: 10, space: '10 ft.', reachMod: 5 },
    huge: { hitDie: 12, space: '15 ft.', reachMod: 10 },
    gargantuan: { hitDie: 20, space: '20 ft.', reachMod: 15 }
};

/**
 * Common damage types
 */
const DamageTypes = [
    'acid', 'bludgeoning', 'cold', 'fire', 'force', 'lightning',
    'necrotic', 'piercing', 'poison', 'psychic', 'radiant', 'slashing', 'thunder'
];

/**
 * Condition types
 */
const Conditions = [
    'blinded', 'charmed', 'deafened', 'exhaustion', 'frightened',
    'grappled', 'incapacitated', 'invisible', 'paralyzed', 'petrified',
    'poisoned', 'prone', 'restrained', 'stunned', 'unconscious'
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MonsterTypes, CRStats, SizeData, Skills, DamageTypes, Conditions };
}
