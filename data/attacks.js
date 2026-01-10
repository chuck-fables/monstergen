/**
 * D&D 5e Monster Attacks Data
 * Contains attack templates for different monster types and CRs
 */

const AttackData = {
    /**
     * Melee natural weapon attacks by creature type
     */
    meleeNatural: {
        aberration: [
            { name: 'Tentacle', damage: 'bludgeoning', reach: 10, properties: ['grapple'] },
            { name: 'Bite', damage: 'piercing', reach: 5, properties: ['psychic bonus'] },
            { name: 'Claw', damage: 'slashing', reach: 5, properties: [] },
            { name: 'Mind Lash', damage: 'psychic', reach: 5, properties: ['stun'] },
            { name: 'Tendril', damage: 'bludgeoning', reach: 15, properties: ['pull'] },
            { name: 'Beak', damage: 'piercing', reach: 5, properties: [] },
            { name: 'Pseudopod', damage: 'bludgeoning', reach: 10, properties: ['grapple'] }
        ],
        beast: [
            { name: 'Bite', damage: 'piercing', reach: 5, properties: [] },
            { name: 'Claw', damage: 'slashing', reach: 5, properties: [] },
            { name: 'Talons', damage: 'slashing', reach: 5, properties: [] },
            { name: 'Gore', damage: 'piercing', reach: 5, properties: ['charge bonus'] },
            { name: 'Hooves', damage: 'bludgeoning', reach: 5, properties: [] },
            { name: 'Tail', damage: 'bludgeoning', reach: 10, properties: ['knockdown'] },
            { name: 'Tusk', damage: 'slashing', reach: 5, properties: [] },
            { name: 'Slam', damage: 'bludgeoning', reach: 5, properties: [] },
            { name: 'Constrict', damage: 'bludgeoning', reach: 5, properties: ['grapple', 'restrain'] },
            { name: 'Sting', damage: 'piercing', reach: 5, properties: ['poison'] }
        ],
        celestial: [
            { name: 'Divine Strike', damage: 'radiant', reach: 5, properties: [] },
            { name: 'Blessed Touch', damage: 'radiant', reach: 5, properties: ['heal ally'] },
            { name: 'Slam', damage: 'bludgeoning', reach: 10, properties: ['radiant bonus'] },
            { name: 'Wing Buffet', damage: 'bludgeoning', reach: 10, properties: ['knockdown'] }
        ],
        construct: [
            { name: 'Slam', damage: 'bludgeoning', reach: 5, properties: [] },
            { name: 'Fist', damage: 'bludgeoning', reach: 10, properties: [] },
            { name: 'Blade', damage: 'slashing', reach: 5, properties: [] },
            { name: 'Grinding Gears', damage: 'slashing', reach: 5, properties: ['grapple'] },
            { name: 'Stomp', damage: 'bludgeoning', reach: 5, properties: ['knockdown'] }
        ],
        dragon: [
            { name: 'Bite', damage: 'piercing', reach: 10, properties: ['elemental bonus'] },
            { name: 'Claw', damage: 'slashing', reach: 5, properties: [] },
            { name: 'Tail', damage: 'bludgeoning', reach: 15, properties: ['knockdown'] },
            { name: 'Wing Attack', damage: 'bludgeoning', reach: 10, properties: ['knockdown', 'aoe'] },
            { name: 'Crush', damage: 'bludgeoning', reach: 5, properties: ['grapple', 'restrain'] }
        ],
        elemental: [
            { name: 'Slam', damage: 'bludgeoning', reach: 5, properties: ['elemental bonus'] },
            { name: 'Touch', damage: 'elemental', reach: 5, properties: ['ignite/freeze'] },
            { name: 'Fist', damage: 'bludgeoning', reach: 10, properties: ['elemental bonus'] },
            { name: 'Engulf', damage: 'elemental', reach: 5, properties: ['grapple', 'restrain'] }
        ],
        fey: [
            { name: 'Claws', damage: 'slashing', reach: 5, properties: [] },
            { name: 'Thorns', damage: 'piercing', reach: 5, properties: ['poison'] },
            { name: 'Touch', damage: 'psychic', reach: 5, properties: ['charm'] },
            { name: 'Vine Whip', damage: 'bludgeoning', reach: 10, properties: ['grapple'] }
        ],
        fiend: [
            { name: 'Bite', damage: 'piercing', reach: 5, properties: ['fire bonus'] },
            { name: 'Claw', damage: 'slashing', reach: 5, properties: [] },
            { name: 'Tail', damage: 'bludgeoning', reach: 10, properties: [] },
            { name: 'Gore', damage: 'piercing', reach: 5, properties: [] },
            { name: 'Longsword', damage: 'slashing', reach: 5, properties: ['fire bonus'] },
            { name: 'Mace', damage: 'bludgeoning', reach: 5, properties: [] },
            { name: 'Sting', damage: 'piercing', reach: 10, properties: ['poison'] }
        ],
        giant: [
            { name: 'Greatclub', damage: 'bludgeoning', reach: 10, properties: [] },
            { name: 'Greataxe', damage: 'slashing', reach: 10, properties: [] },
            { name: 'Fist', damage: 'bludgeoning', reach: 10, properties: [] },
            { name: 'Slam', damage: 'bludgeoning', reach: 10, properties: [] },
            { name: 'Morningstar', damage: 'piercing', reach: 10, properties: [] }
        ],
        humanoid: [
            { name: 'Longsword', damage: 'slashing', reach: 5, properties: ['versatile'] },
            { name: 'Shortsword', damage: 'piercing', reach: 5, properties: ['finesse'] },
            { name: 'Dagger', damage: 'piercing', reach: 5, properties: ['finesse', 'light'] },
            { name: 'Greataxe', damage: 'slashing', reach: 5, properties: ['heavy'] },
            { name: 'Greatsword', damage: 'slashing', reach: 5, properties: ['heavy'] },
            { name: 'Mace', damage: 'bludgeoning', reach: 5, properties: [] },
            { name: 'Quarterstaff', damage: 'bludgeoning', reach: 5, properties: ['versatile'] },
            { name: 'Rapier', damage: 'piercing', reach: 5, properties: ['finesse'] },
            { name: 'Scimitar', damage: 'slashing', reach: 5, properties: ['finesse', 'light'] },
            { name: 'Warhammer', damage: 'bludgeoning', reach: 5, properties: ['versatile'] },
            { name: 'Battleaxe', damage: 'slashing', reach: 5, properties: ['versatile'] },
            { name: 'Spear', damage: 'piercing', reach: 5, properties: ['versatile', 'thrown'] },
            { name: 'Unarmed Strike', damage: 'bludgeoning', reach: 5, properties: [] }
        ],
        monstrosity: [
            { name: 'Bite', damage: 'piercing', reach: 5, properties: [] },
            { name: 'Claw', damage: 'slashing', reach: 5, properties: [] },
            { name: 'Tail', damage: 'bludgeoning', reach: 10, properties: [] },
            { name: 'Gore', damage: 'piercing', reach: 5, properties: [] },
            { name: 'Talons', damage: 'slashing', reach: 5, properties: [] },
            { name: 'Constrict', damage: 'bludgeoning', reach: 10, properties: ['grapple', 'restrain'] },
            { name: 'Tentacle', damage: 'bludgeoning', reach: 10, properties: ['grapple'] },
            { name: 'Stinger', damage: 'piercing', reach: 10, properties: ['poison'] },
            { name: 'Snakes', damage: 'piercing', reach: 5, properties: ['poison'] }
        ],
        ooze: [
            { name: 'Pseudopod', damage: 'bludgeoning', reach: 5, properties: ['acid bonus'] },
            { name: 'Engulf', damage: 'acid', reach: 5, properties: ['grapple', 'restrain', 'blind'] },
            { name: 'Slam', damage: 'bludgeoning', reach: 5, properties: ['acid bonus'] }
        ],
        plant: [
            { name: 'Slam', damage: 'bludgeoning', reach: 5, properties: [] },
            { name: 'Vine', damage: 'bludgeoning', reach: 15, properties: ['grapple', 'pull'] },
            { name: 'Thorns', damage: 'piercing', reach: 5, properties: ['poison'] },
            { name: 'Tendril', damage: 'bludgeoning', reach: 10, properties: ['grapple'] },
            { name: 'Branch', damage: 'bludgeoning', reach: 10, properties: [] },
            { name: 'Bite', damage: 'piercing', reach: 5, properties: ['acid bonus'] }
        ],
        undead: [
            { name: 'Slam', damage: 'bludgeoning', reach: 5, properties: [] },
            { name: 'Claw', damage: 'slashing', reach: 5, properties: ['paralysis'] },
            { name: 'Bite', damage: 'piercing', reach: 5, properties: ['necrotic bonus'] },
            { name: 'Life Drain', damage: 'necrotic', reach: 5, properties: ['hp max reduction'] },
            { name: 'Touch', damage: 'necrotic', reach: 5, properties: [] },
            { name: 'Longsword', damage: 'slashing', reach: 5, properties: ['necrotic bonus'] },
            { name: 'Withering Touch', damage: 'necrotic', reach: 5, properties: ['ability drain'] }
        ]
    },

    /**
     * Ranged attacks by creature type
     */
    ranged: {
        aberration: [
            { name: 'Mind Blast', damage: 'psychic', range: '60 ft. cone', properties: ['stun', 'save'] },
            { name: 'Eye Ray', damage: 'varies', range: '120 ft.', properties: ['random effect'] },
            { name: 'Psychic Lance', damage: 'psychic', range: '60 ft.', properties: [] }
        ],
        beast: [
            { name: 'Spit', damage: 'acid', range: '30/60 ft.', properties: [] },
            { name: 'Quills', damage: 'piercing', range: '30/60 ft.', properties: [] },
            { name: 'Web', damage: 'none', range: '30/60 ft.', properties: ['restrain'] }
        ],
        celestial: [
            { name: 'Radiant Bolt', damage: 'radiant', range: '120 ft.', properties: [] },
            { name: 'Longbow', damage: 'piercing', range: '150/600 ft.', properties: ['radiant bonus'] }
        ],
        construct: [
            { name: 'Dart', damage: 'piercing', range: '30/60 ft.', properties: [] },
            { name: 'Javelin', damage: 'piercing', range: '30/120 ft.', properties: [] },
            { name: 'Rock', damage: 'bludgeoning', range: '60/240 ft.', properties: [] }
        ],
        dragon: [
            { name: 'Breath Weapon', damage: 'elemental', range: 'varies', properties: ['recharge', 'save'] }
        ],
        elemental: [
            { name: 'Rock', damage: 'bludgeoning', range: '60/180 ft.', properties: [] },
            { name: 'Fire Bolt', damage: 'fire', range: '60 ft.', properties: ['ignite'] },
            { name: 'Ice Shard', damage: 'cold', range: '60 ft.', properties: [] },
            { name: 'Lightning Arc', damage: 'lightning', range: '60 ft.', properties: [] }
        ],
        fey: [
            { name: 'Shortbow', damage: 'piercing', range: '80/320 ft.', properties: [] },
            { name: 'Faerie Fire Bolt', damage: 'radiant', range: '60 ft.', properties: ['reveal'] },
            { name: 'Sleep Arrow', damage: 'piercing', range: '80/320 ft.', properties: ['sleep'] }
        ],
        fiend: [
            { name: 'Fire Ray', damage: 'fire', range: '120 ft.', properties: [] },
            { name: 'Hellfire Orb', damage: 'fire', range: '60 ft.', properties: ['aoe'] },
            { name: 'Longbow', damage: 'piercing', range: '150/600 ft.', properties: ['poison'] }
        ],
        giant: [
            { name: 'Rock', damage: 'bludgeoning', range: '60/240 ft.', properties: [] },
            { name: 'Boulder', damage: 'bludgeoning', range: '90/360 ft.', properties: ['knockdown'] },
            { name: 'Javelin', damage: 'piercing', range: '30/120 ft.', properties: [] }
        ],
        humanoid: [
            { name: 'Longbow', damage: 'piercing', range: '150/600 ft.', properties: [] },
            { name: 'Shortbow', damage: 'piercing', range: '80/320 ft.', properties: [] },
            { name: 'Light Crossbow', damage: 'piercing', range: '80/320 ft.', properties: [] },
            { name: 'Heavy Crossbow', damage: 'piercing', range: '100/400 ft.', properties: ['heavy'] },
            { name: 'Hand Crossbow', damage: 'piercing', range: '30/120 ft.', properties: ['light'] },
            { name: 'Javelin', damage: 'piercing', range: '30/120 ft.', properties: ['thrown'] },
            { name: 'Dagger', damage: 'piercing', range: '20/60 ft.', properties: ['thrown', 'finesse'] },
            { name: 'Dart', damage: 'piercing', range: '20/60 ft.', properties: ['thrown', 'finesse'] },
            { name: 'Sling', damage: 'bludgeoning', range: '30/120 ft.', properties: [] }
        ],
        monstrosity: [
            { name: 'Spit', damage: 'acid', range: '30/60 ft.', properties: [] },
            { name: 'Spine', damage: 'piercing', range: '30/60 ft.', properties: ['poison'] },
            { name: 'Web', damage: 'none', range: '30/60 ft.', properties: ['restrain'] },
            { name: 'Petrifying Gaze', damage: 'none', range: '30 ft.', properties: ['petrify'] }
        ],
        ooze: [],
        plant: [
            { name: 'Thorn', damage: 'piercing', range: '30/60 ft.', properties: ['poison'] },
            { name: 'Spore Cloud', damage: 'poison', range: '15 ft. radius', properties: ['poison', 'aoe'] },
            { name: 'Seed Pod', damage: 'bludgeoning', range: '30/60 ft.', properties: [] }
        ],
        undead: [
            { name: 'Necrotic Bolt', damage: 'necrotic', range: '60 ft.', properties: [] },
            { name: 'Withering Gaze', damage: 'necrotic', range: '30 ft.', properties: ['fear'] },
            { name: 'Grave Bolt', damage: 'necrotic', range: '120 ft.', properties: [] },
            { name: 'Shortbow', damage: 'piercing', range: '80/320 ft.', properties: [] }
        ]
    },

    /**
     * Breath weapons by damage type
     */
    breathWeapons: {
        fire: {
            name: 'Fire Breath',
            shapes: ['15 ft. cone', '30 ft. cone', '60 ft. cone', '90 ft. cone', '30 ft. line', '60 ft. line'],
            saveType: 'dex',
            effects: ['ignite']
        },
        cold: {
            name: 'Cold Breath',
            shapes: ['15 ft. cone', '30 ft. cone', '60 ft. cone', '90 ft. cone'],
            saveType: 'con',
            effects: ['slow']
        },
        lightning: {
            name: 'Lightning Breath',
            shapes: ['30 ft. line', '60 ft. line', '90 ft. line', '120 ft. line'],
            saveType: 'dex',
            effects: []
        },
        acid: {
            name: 'Acid Breath',
            shapes: ['15 ft. line', '30 ft. line', '60 ft. line'],
            saveType: 'dex',
            effects: ['corrode armor']
        },
        poison: {
            name: 'Poison Breath',
            shapes: ['15 ft. cone', '30 ft. cone', '60 ft. cone'],
            saveType: 'con',
            effects: ['poisoned condition']
        },
        necrotic: {
            name: 'Necrotic Breath',
            shapes: ['30 ft. cone', '60 ft. cone'],
            saveType: 'con',
            effects: ['hp max reduction']
        },
        radiant: {
            name: 'Radiant Breath',
            shapes: ['30 ft. cone', '60 ft. cone'],
            saveType: 'dex',
            effects: ['blinded']
        },
        thunder: {
            name: 'Thunder Breath',
            shapes: ['15 ft. cone', '30 ft. cone'],
            saveType: 'con',
            effects: ['deafened', 'knockback']
        },
        force: {
            name: 'Force Breath',
            shapes: ['60 ft. line', '90 ft. line'],
            saveType: 'dex',
            effects: ['knockback']
        },
        psychic: {
            name: 'Psychic Scream',
            shapes: ['30 ft. cone', '60 ft. cone'],
            saveType: 'int',
            effects: ['stunned']
        }
    },

    /**
     * Gaze attacks
     */
    gazeAttacks: [
        {
            name: 'Petrifying Gaze',
            effect: 'petrified',
            saveType: 'con',
            range: 30,
            description: 'creature must succeed on a DC {dc} Constitution saving throw or be restrained. On a failed save by 5 or more, the creature is instantly petrified.'
        },
        {
            name: 'Death Gaze',
            effect: 'necrotic damage',
            saveType: 'wis',
            range: 30,
            description: 'creature must succeed on a DC {dc} Wisdom saving throw or take {damage} necrotic damage.'
        },
        {
            name: 'Fear Gaze',
            effect: 'frightened',
            saveType: 'wis',
            range: 30,
            description: 'creature must succeed on a DC {dc} Wisdom saving throw or become frightened for 1 minute.'
        },
        {
            name: 'Charm Gaze',
            effect: 'charmed',
            saveType: 'wis',
            range: 30,
            description: 'creature must succeed on a DC {dc} Wisdom saving throw or be charmed for 1 hour.'
        },
        {
            name: 'Hypnotic Gaze',
            effect: 'incapacitated',
            saveType: 'wis',
            range: 30,
            description: 'creature must succeed on a DC {dc} Wisdom saving throw or be incapacitated and have its speed reduced to 0.'
        },
        {
            name: 'Rotting Gaze',
            effect: 'necrotic damage + disease',
            saveType: 'con',
            range: 30,
            description: 'creature must succeed on a DC {dc} Constitution saving throw or take {damage} necrotic damage and contract a rotting disease.'
        },
        {
            name: 'Disintegration Ray',
            effect: 'force damage',
            saveType: 'dex',
            range: 60,
            description: 'creature must succeed on a DC {dc} Dexterity saving throw or take {damage} force damage. If reduced to 0 HP, the creature is disintegrated.'
        },
        {
            name: 'Sleep Gaze',
            effect: 'unconscious',
            saveType: 'wis',
            range: 30,
            description: 'creature must succeed on a DC {dc} Wisdom saving throw or fall unconscious for 10 minutes.'
        }
    ],

    /**
     * Aura effects
     */
    auraEffects: [
        {
            name: 'Frightful Presence',
            effect: 'frightened',
            radius: 30,
            saveType: 'wis',
            description: 'Each creature of the monster\'s choice within {radius} feet must succeed on a DC {dc} Wisdom saving throw or become frightened for 1 minute.'
        },
        {
            name: 'Stench',
            effect: 'poisoned',
            radius: 10,
            saveType: 'con',
            description: 'Any creature that starts its turn within {radius} feet must succeed on a DC {dc} Constitution saving throw or be poisoned until the start of its next turn.'
        },
        {
            name: 'Heat Aura',
            effect: 'fire damage',
            radius: 10,
            saveType: 'con',
            description: 'Any creature that starts its turn within {radius} feet takes {damage} fire damage.'
        },
        {
            name: 'Cold Aura',
            effect: 'cold damage',
            radius: 10,
            saveType: 'con',
            description: 'Any creature that starts its turn within {radius} feet takes {damage} cold damage.'
        },
        {
            name: 'Lightning Aura',
            effect: 'lightning damage',
            radius: 10,
            saveType: 'dex',
            description: 'Any creature that starts its turn within {radius} feet must succeed on a DC {dc} Dexterity saving throw or take {damage} lightning damage.'
        },
        {
            name: 'Corrosive Aura',
            effect: 'acid damage',
            radius: 10,
            saveType: 'con',
            description: 'Any creature that starts its turn within {radius} feet takes {damage} acid damage as corrosive vapors eat away at flesh and metal.'
        },
        {
            name: 'Earthen Tremor',
            effect: 'difficult terrain',
            radius: 15,
            saveType: 'dex',
            description: 'The ground within {radius} feet trembles and shifts. Any creature that starts its turn in this area must succeed on a DC {dc} Dexterity saving throw or fall prone. The area is difficult terrain.'
        },
        {
            name: 'Buffeting Winds',
            effect: 'movement',
            radius: 15,
            saveType: 'str',
            description: 'Swirling winds surround the creature. Any creature that starts its turn within {radius} feet must succeed on a DC {dc} Strength saving throw or be pushed 10 feet away and take {damage} bludgeoning damage.'
        },
        {
            name: 'Necrotic Aura',
            effect: 'necrotic damage',
            radius: 15,
            saveType: 'con',
            description: 'Any creature that starts its turn within {radius} feet takes {damage} necrotic damage.'
        },
        {
            name: 'Aura of Despair',
            effect: 'disadvantage',
            radius: 30,
            saveType: 'wis',
            description: 'Creatures within {radius} feet have disadvantage on saving throws against being frightened.'
        },
        {
            name: 'Aura of Protection',
            effect: 'AC bonus',
            radius: 10,
            saveType: null,
            description: 'Allies within {radius} feet gain a +2 bonus to AC.'
        },
        {
            name: 'Leadership Aura',
            effect: 'attack bonus',
            radius: 30,
            saveType: null,
            description: 'Allies within {radius} feet gain a +{bonus} bonus to attack rolls.'
        },
        {
            name: 'Psychic Disruption',
            effect: 'psychic damage',
            radius: 20,
            saveType: 'int',
            description: 'Any creature that starts its turn within {radius} feet must succeed on a DC {dc} Intelligence saving throw or take {damage} psychic damage.'
        },
        {
            name: 'Radiant Aura',
            effect: 'radiant damage to undead',
            radius: 30,
            saveType: 'con',
            description: 'Undead creatures within {radius} feet take {damage} radiant damage at the start of their turn.'
        }
    ],

    /**
     * Get damage dice based on CR
     */
    getDamageDice(cr, attackType = 'primary') {
        const baseDamage = {
            0: { primary: '1d4', secondary: '1d4' },
            0.125: { primary: '1d6', secondary: '1d4' },
            0.25: { primary: '1d6', secondary: '1d4' },
            0.5: { primary: '1d8', secondary: '1d6' },
            1: { primary: '1d8', secondary: '1d6' },
            2: { primary: '1d10', secondary: '1d6' },
            3: { primary: '2d6', secondary: '1d8' },
            4: { primary: '2d6', secondary: '1d8' },
            5: { primary: '2d8', secondary: '1d10' },
            6: { primary: '2d8', secondary: '1d10' },
            7: { primary: '2d10', secondary: '2d6' },
            8: { primary: '2d10', secondary: '2d6' },
            9: { primary: '3d8', secondary: '2d6' },
            10: { primary: '3d8', secondary: '2d8' },
            11: { primary: '3d10', secondary: '2d8' },
            12: { primary: '3d10', secondary: '2d8' },
            13: { primary: '4d8', secondary: '2d10' },
            14: { primary: '4d8', secondary: '2d10' },
            15: { primary: '4d10', secondary: '3d8' },
            16: { primary: '4d10', secondary: '3d8' },
            17: { primary: '5d8', secondary: '3d8' },
            18: { primary: '5d10', secondary: '3d10' },
            19: { primary: '5d10', secondary: '3d10' },
            20: { primary: '6d8', secondary: '4d8' },
            21: { primary: '6d10', secondary: '4d8' },
            22: { primary: '6d10', secondary: '4d10' },
            23: { primary: '7d8', secondary: '4d10' },
            24: { primary: '7d10', secondary: '5d8' },
            25: { primary: '8d8', secondary: '5d8' },
            26: { primary: '8d10', secondary: '5d10' },
            27: { primary: '9d8', secondary: '6d8' },
            28: { primary: '9d10', secondary: '6d8' },
            29: { primary: '10d8', secondary: '6d10' },
            30: { primary: '10d10', secondary: '7d8' }
        };

        const crKey = cr <= 0.5 ? cr : Math.floor(cr);
        return baseDamage[crKey]?.[attackType] || baseDamage[1][attackType];
    },

    /**
     * Get breath weapon size based on CR
     */
    getBreathWeaponSize(cr) {
        if (cr < 3) return 0; // 15 ft. cone or 30 ft. line
        if (cr < 7) return 1; // 30 ft. cone or 60 ft. line
        if (cr < 12) return 2; // 60 ft. cone or 90 ft. line
        return 3; // 90 ft. cone or 120 ft. line
    },

    /**
     * Get breath weapon recharge
     */
    getBreathRecharge(cr) {
        if (cr < 5) return '5-6';
        if (cr < 10) return '5-6';
        if (cr < 17) return '5-6';
        return '5-6';
    },

    /**
     * Get breath weapon damage dice
     */
    getBreathDamageDice(cr) {
        if (cr < 1) return '2d6';
        if (cr < 2) return '3d6';
        if (cr < 4) return '4d6';
        if (cr < 6) return '6d6';
        if (cr < 8) return '8d6';
        if (cr < 10) return '10d6';
        if (cr < 12) return '12d6';
        if (cr < 14) return '14d6';
        if (cr < 16) return '16d6';
        if (cr < 18) return '18d8';
        if (cr < 20) return '20d8';
        if (cr < 24) return '22d8';
        return '26d8';
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AttackData;
}
