/**
 * D&D 5e Humanoid Races Data
 * Contains all playable and monstrous humanoid races with traits
 */

const RacesData = {
    // Common Races
    'human': {
        name: 'Human',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { /* +1 to all or +2/+1 choice */ },
        languages: ['Common'],
        traits: [
            { name: 'Versatile', description: 'Humans gain proficiency in one skill of their choice.' }
        ]
    },

    'dwarf-hill': {
        name: 'Hill Dwarf',
        size: 'medium',
        speed: { walk: 25 },
        abilityModifiers: { con: 2, wis: 1 },
        darkvision: 60,
        languages: ['Common', 'Dwarvish'],
        damageResistances: ['poison'],
        traits: [
            { name: 'Dwarven Resilience', description: 'The creature has advantage on saving throws against poison.' },
            { name: 'Stonecunning', description: 'Whenever making a History check related to stonework, the creature is considered proficient and adds double its proficiency bonus.' },
            { name: 'Dwarven Toughness', description: 'Hit point maximum increases by 1 per level.' }
        ]
    },

    'dwarf-mountain': {
        name: 'Mountain Dwarf',
        size: 'medium',
        speed: { walk: 25 },
        abilityModifiers: { con: 2, str: 2 },
        darkvision: 60,
        languages: ['Common', 'Dwarvish'],
        damageResistances: ['poison'],
        traits: [
            { name: 'Dwarven Resilience', description: 'The creature has advantage on saving throws against poison.' },
            { name: 'Stonecunning', description: 'Whenever making a History check related to stonework, the creature is considered proficient and adds double its proficiency bonus.' },
            { name: 'Dwarven Armor Training', description: 'Proficient with light and medium armor.' }
        ]
    },

    'elf-high': {
        name: 'High Elf',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { dex: 2, int: 1 },
        darkvision: 60,
        languages: ['Common', 'Elvish'],
        traits: [
            { name: 'Fey Ancestry', description: 'Advantage on saving throws against being charmed, and magic can\'t put the creature to sleep.' },
            { name: 'Trance', description: 'Elves don\'t need to sleep. Instead, they meditate deeply for 4 hours a day.' },
            { name: 'Keen Senses', description: 'Proficiency in Perception.' },
            { name: 'Cantrip', description: 'Knows one wizard cantrip of choice.' }
        ]
    },

    'elf-wood': {
        name: 'Wood Elf',
        size: 'medium',
        speed: { walk: 35 },
        abilityModifiers: { dex: 2, wis: 1 },
        darkvision: 60,
        languages: ['Common', 'Elvish'],
        traits: [
            { name: 'Fey Ancestry', description: 'Advantage on saving throws against being charmed, and magic can\'t put the creature to sleep.' },
            { name: 'Trance', description: 'Elves don\'t need to sleep. Instead, they meditate deeply for 4 hours a day.' },
            { name: 'Keen Senses', description: 'Proficiency in Perception.' },
            { name: 'Mask of the Wild', description: 'Can attempt to hide when lightly obscured by foliage, rain, snow, mist, and other natural phenomena.' }
        ]
    },

    'elf-drow': {
        name: 'Drow',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { dex: 2, cha: 1 },
        darkvision: 120,
        languages: ['Common', 'Elvish', 'Undercommon'],
        traits: [
            { name: 'Fey Ancestry', description: 'Advantage on saving throws against being charmed, and magic can\'t put the creature to sleep.' },
            { name: 'Superior Darkvision', description: 'Darkvision extends to 120 feet.' },
            { name: 'Sunlight Sensitivity', description: 'Disadvantage on attack rolls and Perception checks in direct sunlight.' },
            { name: 'Drow Magic', description: 'Knows the dancing lights cantrip. Can cast faerie fire and darkness once per day each.' }
        ]
    },

    'halfling-lightfoot': {
        name: 'Lightfoot Halfling',
        size: 'small',
        speed: { walk: 25 },
        abilityModifiers: { dex: 2, cha: 1 },
        languages: ['Common', 'Halfling'],
        traits: [
            { name: 'Lucky', description: 'When rolling a 1 on an attack roll, ability check, or saving throw, can reroll and must use the new roll.' },
            { name: 'Brave', description: 'Advantage on saving throws against being frightened.' },
            { name: 'Halfling Nimbleness', description: 'Can move through the space of any creature that is of a size larger.' },
            { name: 'Naturally Stealthy', description: 'Can attempt to hide when obscured only by a creature at least one size larger.' }
        ]
    },

    'halfling-stout': {
        name: 'Stout Halfling',
        size: 'small',
        speed: { walk: 25 },
        abilityModifiers: { dex: 2, con: 1 },
        languages: ['Common', 'Halfling'],
        damageResistances: ['poison'],
        traits: [
            { name: 'Lucky', description: 'When rolling a 1 on an attack roll, ability check, or saving throw, can reroll and must use the new roll.' },
            { name: 'Brave', description: 'Advantage on saving throws against being frightened.' },
            { name: 'Halfling Nimbleness', description: 'Can move through the space of any creature that is of a size larger.' },
            { name: 'Stout Resilience', description: 'Advantage on saving throws against poison.' }
        ]
    },

    'gnome-forest': {
        name: 'Forest Gnome',
        size: 'small',
        speed: { walk: 25 },
        abilityModifiers: { int: 2, dex: 1 },
        darkvision: 60,
        languages: ['Common', 'Gnomish'],
        traits: [
            { name: 'Gnome Cunning', description: 'Advantage on Intelligence, Wisdom, and Charisma saving throws against magic.' },
            { name: 'Natural Illusionist', description: 'Knows the minor illusion cantrip.' },
            { name: 'Speak with Small Beasts', description: 'Can communicate simple ideas with Small or smaller beasts.' }
        ]
    },

    'gnome-rock': {
        name: 'Rock Gnome',
        size: 'small',
        speed: { walk: 25 },
        abilityModifiers: { int: 2, con: 1 },
        darkvision: 60,
        languages: ['Common', 'Gnomish'],
        traits: [
            { name: 'Gnome Cunning', description: 'Advantage on Intelligence, Wisdom, and Charisma saving throws against magic.' },
            { name: 'Artificer\'s Lore', description: 'Add twice proficiency bonus to History checks related to magic items, alchemical objects, or technological devices.' },
            { name: 'Tinker', description: 'Proficiency with artisan\'s tools (tinker\'s tools). Can create small clockwork devices.' }
        ]
    },

    'half-elf': {
        name: 'Half-Elf',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { cha: 2 }, // +1 to two other abilities
        darkvision: 60,
        languages: ['Common', 'Elvish'],
        traits: [
            { name: 'Fey Ancestry', description: 'Advantage on saving throws against being charmed, and magic can\'t put the creature to sleep.' },
            { name: 'Skill Versatility', description: 'Proficiency in two skills of choice.' }
        ]
    },

    'half-orc': {
        name: 'Half-Orc',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { str: 2, con: 1 },
        darkvision: 60,
        languages: ['Common', 'Orc'],
        traits: [
            { name: 'Menacing', description: 'Proficiency in Intimidation.' },
            { name: 'Relentless Endurance', description: 'When reduced to 0 HP but not killed outright, can drop to 1 HP instead. Usable once per long rest.' },
            { name: 'Savage Attacks', description: 'When scoring a critical hit with a melee weapon, roll one additional weapon damage die.' }
        ]
    },

    'tiefling': {
        name: 'Tiefling',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { cha: 2, int: 1 },
        darkvision: 60,
        languages: ['Common', 'Infernal'],
        damageResistances: ['fire'],
        traits: [
            { name: 'Hellish Resistance', description: 'Resistance to fire damage.' },
            { name: 'Infernal Legacy', description: 'Knows the thaumaturgy cantrip. Can cast hellish rebuke (2nd level) and darkness once per day each.' }
        ]
    },

    'dragonborn': {
        name: 'Dragonborn',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { str: 2, cha: 1 },
        languages: ['Common', 'Draconic'],
        traits: [
            { name: 'Draconic Ancestry', description: 'Has draconic ancestry that determines breath weapon and damage resistance.' },
            { name: 'Breath Weapon', description: 'Can exhale destructive energy. Damage type and area based on draconic ancestry.' },
            { name: 'Damage Resistance', description: 'Resistance to the damage type associated with draconic ancestry.' }
        ]
    },

    // Uncommon Races
    'aasimar': {
        name: 'Aasimar',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { cha: 2 },
        darkvision: 60,
        languages: ['Common', 'Celestial'],
        damageResistances: ['necrotic', 'radiant'],
        traits: [
            { name: 'Celestial Resistance', description: 'Resistance to necrotic and radiant damage.' },
            { name: 'Healing Hands', description: 'Can heal a creature for HP equal to level, once per long rest.' },
            { name: 'Light Bearer', description: 'Knows the light cantrip.' }
        ]
    },

    'genasi-air': {
        name: 'Air Genasi',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { con: 2, dex: 1 },
        languages: ['Common', 'Primordial'],
        traits: [
            { name: 'Unending Breath', description: 'Can hold breath indefinitely while not incapacitated.' },
            { name: 'Mingle with the Wind', description: 'Can cast levitate once per long rest.' }
        ]
    },

    'genasi-earth': {
        name: 'Earth Genasi',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { con: 2, str: 1 },
        languages: ['Common', 'Primordial'],
        traits: [
            { name: 'Earth Walk', description: 'Can move across difficult terrain made of earth or stone without expending extra movement.' },
            { name: 'Merge with Stone', description: 'Can cast pass without trace once per long rest.' }
        ]
    },

    'genasi-fire': {
        name: 'Fire Genasi',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { con: 2, int: 1 },
        darkvision: 60,
        languages: ['Common', 'Primordial'],
        damageResistances: ['fire'],
        traits: [
            { name: 'Fire Resistance', description: 'Resistance to fire damage.' },
            { name: 'Reach to the Blaze', description: 'Knows produce flame cantrip. Can cast burning hands once per long rest.' }
        ]
    },

    'genasi-water': {
        name: 'Water Genasi',
        size: 'medium',
        speed: { walk: 30, swim: 30 },
        abilityModifiers: { con: 2, wis: 1 },
        languages: ['Common', 'Primordial'],
        damageResistances: ['acid'],
        traits: [
            { name: 'Amphibious', description: 'Can breathe air and water.' },
            { name: 'Swim', description: 'Swimming speed of 30 feet.' },
            { name: 'Call to the Wave', description: 'Knows shape water cantrip. Can cast create or destroy water once per long rest.' }
        ]
    },

    'goliath': {
        name: 'Goliath',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { str: 2, con: 1 },
        languages: ['Common', 'Giant'],
        traits: [
            { name: 'Natural Athlete', description: 'Proficiency in Athletics.' },
            { name: 'Stone\'s Endurance', description: 'Can use reaction to reduce damage by 1d12 + Con modifier once per rest.' },
            { name: 'Powerful Build', description: 'Counts as one size larger for carrying capacity and push/drag/lift.' },
            { name: 'Mountain Born', description: 'Naturally adapted to cold climates and high altitude.' }
        ]
    },

    'firbolg': {
        name: 'Firbolg',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { wis: 2, str: 1 },
        languages: ['Common', 'Elvish', 'Giant'],
        traits: [
            { name: 'Firbolg Magic', description: 'Can cast detect magic and disguise self once per rest each.' },
            { name: 'Hidden Step', description: 'Can turn invisible as a bonus action until start of next turn, once per rest.' },
            { name: 'Powerful Build', description: 'Counts as one size larger for carrying capacity and push/drag/lift.' },
            { name: 'Speech of Beast and Leaf', description: 'Can communicate in a limited manner with beasts and plants.' }
        ]
    },

    'kenku': {
        name: 'Kenku',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { dex: 2, wis: 1 },
        languages: ['Common', 'Auran'],
        traits: [
            { name: 'Expert Forgery', description: 'Can duplicate other creatures\' handwriting and craftwork.' },
            { name: 'Kenku Training', description: 'Proficiency in two of: Acrobatics, Deception, Stealth, Sleight of Hand.' },
            { name: 'Mimicry', description: 'Can mimic sounds heard, including voices. Creatures can tell with Insight vs. Deception check.' }
        ]
    },

    'lizardfolk': {
        name: 'Lizardfolk',
        size: 'medium',
        speed: { walk: 30, swim: 30 },
        abilityModifiers: { con: 2, wis: 1 },
        languages: ['Common', 'Draconic'],
        traits: [
            { name: 'Bite', description: 'Unarmed strikes can deal 1d6 + Str piercing damage.' },
            { name: 'Cunning Artisan', description: 'Can craft simple items from creature remains.' },
            { name: 'Hold Breath', description: 'Can hold breath for 15 minutes.' },
            { name: 'Natural Armor', description: 'AC equals 13 + Dex modifier when not wearing armor.' },
            { name: 'Hungry Jaws', description: 'Can make a bonus action bite attack, gaining temp HP on hit. Once per rest.' }
        ]
    },

    'tabaxi': {
        name: 'Tabaxi',
        size: 'medium',
        speed: { walk: 30, climb: 20 },
        abilityModifiers: { dex: 2, cha: 1 },
        darkvision: 60,
        languages: ['Common'],
        traits: [
            { name: 'Feline Agility', description: 'Can double speed until end of turn, then can\'t use again until moving 0 feet on a turn.' },
            { name: 'Cat\'s Claws', description: 'Unarmed strikes deal 1d4 slashing. Has climbing speed of 20 feet.' },
            { name: 'Cat\'s Talent', description: 'Proficiency in Perception and Stealth.' }
        ]
    },

    'triton': {
        name: 'Triton',
        size: 'medium',
        speed: { walk: 30, swim: 30 },
        abilityModifiers: { str: 1, con: 1, cha: 1 },
        darkvision: 60,
        languages: ['Common', 'Primordial'],
        damageResistances: ['cold'],
        traits: [
            { name: 'Amphibious', description: 'Can breathe air and water.' },
            { name: 'Control Air and Water', description: 'Can cast fog cloud, gust of wind, and wall of water once per long rest each.' },
            { name: 'Emissary of the Sea', description: 'Can communicate simple ideas with water-breathing creatures.' },
            { name: 'Guardians of the Depths', description: 'Resistance to cold damage and ignores deep water pressure.' }
        ]
    },

    'tortle': {
        name: 'Tortle',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { str: 2, wis: 1 },
        languages: ['Common', 'Aquan'],
        traits: [
            { name: 'Claws', description: 'Unarmed strikes deal 1d4 + Str slashing damage.' },
            { name: 'Hold Breath', description: 'Can hold breath for 1 hour.' },
            { name: 'Natural Armor', description: 'AC equals 17 (can\'t wear armor). Can use shield.' },
            { name: 'Shell Defense', description: 'Can withdraw into shell as action, gaining +4 AC but speed becomes 0.' }
        ]
    },

    'aarakocra': {
        name: 'Aarakocra',
        size: 'medium',
        speed: { walk: 25, fly: 50 },
        abilityModifiers: { dex: 2, wis: 1 },
        languages: ['Common', 'Aarakocra', 'Auran'],
        traits: [
            { name: 'Flight', description: 'Has flying speed of 50 feet. Can\'t fly while wearing medium or heavy armor.' },
            { name: 'Talons', description: 'Unarmed strikes deal 1d4 + Str slashing damage.' }
        ]
    },

    'warforged': {
        name: 'Warforged',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { con: 2 },
        languages: ['Common'],
        damageResistances: ['poison'],
        traits: [
            { name: 'Constructed Resilience', description: 'Advantage on saving throws against being poisoned, resistance to poison damage, immunity to disease, doesn\'t need to eat, drink, or breathe.' },
            { name: 'Sentry\'s Rest', description: 'Doesn\'t sleep. Rests in inactive but conscious state for 6 hours.' },
            { name: 'Integrated Protection', description: 'AC equals 11 + proficiency bonus + Dex modifier (light), 13 + proficiency (medium), or 16 + proficiency (heavy, requires proficiency).' }
        ]
    },

    'changeling': {
        name: 'Changeling',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { cha: 2 },
        languages: ['Common'],
        traits: [
            { name: 'Shapechanger', description: 'Can change appearance as an action. Determines specific appearance details.' },
            { name: 'Changeling Instincts', description: 'Proficiency in two of: Deception, Insight, Intimidation, Persuasion.' }
        ]
    },

    'kalashtar': {
        name: 'Kalashtar',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { wis: 2, cha: 1 },
        languages: ['Common', 'Quori'],
        damageResistances: ['psychic'],
        traits: [
            { name: 'Dual Mind', description: 'Advantage on Wisdom saving throws.' },
            { name: 'Mental Discipline', description: 'Resistance to psychic damage.' },
            { name: 'Mind Link', description: 'Can speak telepathically to any creature within 10 x level feet.' },
            { name: 'Severed from Dreams', description: 'Immune to spells and effects that require dreaming.' }
        ]
    },

    'shifter': {
        name: 'Shifter',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { dex: 1 },
        darkvision: 60,
        languages: ['Common'],
        traits: [
            { name: 'Shifting', description: 'Can shift as a bonus action, gaining temp HP and a benefit based on subrace. Lasts 1 minute, once per rest.' },
            { name: 'Darkvision', description: 'Can see in dim light within 60 feet as if bright light.' }
        ]
    },

    // Monstrous Races
    'gnoll': {
        name: 'Gnoll',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { str: 2, con: 1 },
        darkvision: 60,
        languages: ['Common', 'Gnoll'],
        traits: [
            { name: 'Rampage', description: 'When reducing a creature to 0 HP with a melee attack, can move up to half speed and make a bite attack as a bonus action.' },
            { name: 'Bite', description: 'Unarmed strikes can deal 1d4 + Str piercing damage.' }
        ]
    },

    'bugbear': {
        name: 'Bugbear',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { str: 2, dex: 1 },
        darkvision: 60,
        languages: ['Common', 'Goblin'],
        traits: [
            { name: 'Long-Limbed', description: 'Reach is 5 feet longer when making melee attacks on your turn.' },
            { name: 'Powerful Build', description: 'Counts as one size larger for carrying capacity and push/drag/lift.' },
            { name: 'Sneaky', description: 'Proficiency in Stealth.' },
            { name: 'Surprise Attack', description: 'Deals extra 2d6 damage if hitting a surprised creature.' }
        ]
    },

    'goblin': {
        name: 'Goblin',
        size: 'small',
        speed: { walk: 30 },
        abilityModifiers: { dex: 2, con: 1 },
        darkvision: 60,
        languages: ['Common', 'Goblin'],
        traits: [
            { name: 'Fury of the Small', description: 'Extra damage equal to level when hitting a larger creature, once per rest.' },
            { name: 'Nimble Escape', description: 'Can take Disengage or Hide as a bonus action each turn.' }
        ]
    },

    'hobgoblin': {
        name: 'Hobgoblin',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { con: 2, int: 1 },
        darkvision: 60,
        languages: ['Common', 'Goblin'],
        traits: [
            { name: 'Martial Training', description: 'Proficiency with two martial weapons of choice and light armor.' },
            { name: 'Saving Face', description: 'Can add bonus to failed roll equal to number of allies seen within 30 feet, once per rest.' }
        ]
    },

    'kobold': {
        name: 'Kobold',
        size: 'small',
        speed: { walk: 30 },
        abilityModifiers: { dex: 2 },
        darkvision: 60,
        languages: ['Common', 'Draconic'],
        traits: [
            { name: 'Grovel, Cower, and Beg', description: 'Can distract enemies, granting advantage to allies\' attacks against them.' },
            { name: 'Pack Tactics', description: 'Advantage on attack rolls against a creature if an ally is within 5 feet of it.' },
            { name: 'Sunlight Sensitivity', description: 'Disadvantage on attack rolls and Perception checks in direct sunlight.' }
        ]
    },

    'orc': {
        name: 'Orc',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { str: 2, con: 1 },
        darkvision: 60,
        languages: ['Common', 'Orc'],
        traits: [
            { name: 'Aggressive', description: 'Can move up to speed toward a hostile creature as a bonus action.' },
            { name: 'Menacing', description: 'Proficiency in Intimidation.' },
            { name: 'Powerful Build', description: 'Counts as one size larger for carrying capacity and push/drag/lift.' }
        ]
    },

    'yuan-ti': {
        name: 'Yuan-ti Pureblood',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { cha: 2, int: 1 },
        darkvision: 60,
        languages: ['Common', 'Abyssal', 'Draconic'],
        damageImmunities: ['poison'],
        traits: [
            { name: 'Innate Spellcasting', description: 'Knows poison spray cantrip. Can cast animal friendship (snakes only) at will. Can cast suggestion once per long rest.' },
            { name: 'Magic Resistance', description: 'Advantage on saving throws against spells and other magical effects.' },
            { name: 'Poison Immunity', description: 'Immune to poison damage and the poisoned condition.' }
        ]
    },

    'duergar': {
        name: 'Duergar',
        size: 'medium',
        speed: { walk: 25 },
        abilityModifiers: { con: 2, str: 1 },
        darkvision: 120,
        languages: ['Common', 'Dwarvish', 'Undercommon'],
        damageResistances: ['poison'],
        traits: [
            { name: 'Superior Darkvision', description: 'Darkvision extends to 120 feet.' },
            { name: 'Duergar Resilience', description: 'Advantage on saving throws against illusions and being charmed or paralyzed.' },
            { name: 'Duergar Magic', description: 'Can cast enlarge/reduce (enlarge only on self) and invisibility (self only) once per long rest each.' },
            { name: 'Sunlight Sensitivity', description: 'Disadvantage on attack rolls and Perception checks in direct sunlight.' }
        ]
    },

    'githyanki': {
        name: 'Githyanki',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { str: 2, int: 1 },
        languages: ['Common', 'Gith'],
        traits: [
            { name: 'Decadent Mastery', description: 'Proficiency in one skill or tool of choice.' },
            { name: 'Martial Prodigy', description: 'Proficiency with light and medium armor and shortswords, longswords, and greatswords.' },
            { name: 'Githyanki Psionics', description: 'Knows mage hand cantrip. Can cast jump (3rd level) at 3rd level and misty step at 5th level, once per long rest each.' }
        ]
    },

    'githzerai': {
        name: 'Githzerai',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { wis: 2, int: 1 },
        languages: ['Common', 'Gith'],
        traits: [
            { name: 'Mental Discipline', description: 'Advantage on saving throws against being charmed or frightened.' },
            { name: 'Githzerai Psionics', description: 'Knows mage hand cantrip. Can cast shield at 3rd level and detect thoughts at 5th level, once per long rest each.' }
        ]
    },

    'kuo-toa': {
        name: 'Kuo-toa',
        size: 'medium',
        speed: { walk: 30, swim: 30 },
        abilityModifiers: { con: 2, wis: 1 },
        darkvision: 120,
        languages: ['Common', 'Undercommon'],
        traits: [
            { name: 'Amphibious', description: 'Can breathe air and water.' },
            { name: 'Otherworldly Perception', description: 'Can sense the presence of invisible creatures within 30 feet.' },
            { name: 'Slippery', description: 'Advantage on ability checks and saving throws made to escape a grapple.' },
            { name: 'Sunlight Sensitivity', description: 'Disadvantage on attack rolls and Perception checks in direct sunlight.' }
        ]
    },

    'sahuagin': {
        name: 'Sahuagin',
        size: 'medium',
        speed: { walk: 30, swim: 40 },
        abilityModifiers: { str: 2, con: 1 },
        darkvision: 120,
        languages: ['Common', 'Sahuagin'],
        traits: [
            { name: 'Blood Frenzy', description: 'Advantage on melee attack rolls against creatures that don\'t have all their hit points.' },
            { name: 'Limited Amphibiousness', description: 'Can breathe air and water, but needs to be submerged at least once every 4 hours.' },
            { name: 'Shark Telepathy', description: 'Can command sharks within 120 feet using telepathy.' }
        ]
    },

    'thri-kreen': {
        name: 'Thri-kreen',
        size: 'medium',
        speed: { walk: 30 },
        abilityModifiers: { dex: 2, wis: 1 },
        darkvision: 60,
        languages: ['Common', 'Thri-kreen'],
        traits: [
            { name: 'Chameleon Carapace', description: 'Can change color to match surroundings, gaining advantage on Stealth checks.' },
            { name: 'Secondary Arms', description: 'Has two smaller secondary arms that can hold light weapons or other objects.' },
            { name: 'Sleepless', description: 'Doesn\'t require sleep and can\'t be put to sleep by magic.' },
            { name: 'Standing Leap', description: 'Long jump is 30 feet, high jump is 15 feet.' }
        ]
    },

    'bullywug': {
        name: 'Bullywug',
        size: 'medium',
        speed: { walk: 20, swim: 40 },
        abilityModifiers: { con: 2, dex: 1 },
        languages: ['Common', 'Bullywug'],
        traits: [
            { name: 'Amphibious', description: 'Can breathe air and water.' },
            { name: 'Speak with Frogs and Toads', description: 'Can communicate simple concepts to frogs and toads.' },
            { name: 'Standing Leap', description: 'Long jump is 20 feet, high jump is 10 feet.' },
            { name: 'Swamp Camouflage', description: 'Advantage on Stealth checks in swampy terrain.' }
        ]
    },

    'grung': {
        name: 'Grung',
        size: 'small',
        speed: { walk: 25, climb: 25 },
        abilityModifiers: { dex: 2, con: 1 },
        languages: ['Common', 'Grung'],
        damageImmunities: ['poison'],
        traits: [
            { name: 'Amphibious', description: 'Can breathe air and water.' },
            { name: 'Poison Immunity', description: 'Immune to poison damage and the poisoned condition.' },
            { name: 'Poisonous Skin', description: 'Creatures that touch the grung or hit with unarmed strike must make DC 12 Con save or be poisoned for 1 minute.' },
            { name: 'Standing Leap', description: 'Long jump is 25 feet, high jump is 15 feet.' },
            { name: 'Water Dependency', description: 'Must immerse in water for 1 hour per day or suffer 1 level of exhaustion.' }
        ]
    },

    'myconid': {
        name: 'Myconid',
        size: 'medium',
        speed: { walk: 20 },
        abilityModifiers: { con: 2, wis: 1 },
        darkvision: 120,
        languages: ['Undercommon'],
        traits: [
            { name: 'Distress Spores', description: 'When damaged, all myconids within 240 feet sense distress.' },
            { name: 'Rapport Spores', description: 'Can communicate telepathically with creatures within 30 feet that have inhaled spores.' },
            { name: 'Sun Sickness', description: 'Takes 1 point of radiant damage every minute in sunlight.' },
            { name: 'Plant Nature', description: 'Doesn\'t require sleep.' }
        ]
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RacesData;
}
