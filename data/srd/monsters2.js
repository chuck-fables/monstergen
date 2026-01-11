// SRD 5.2 Monster Data - Part 2 (Dragons and more)
const SRDMonsters2 = [
    {
        name: "Adult Black Dragon",
        size: "huge",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 195,
        hpDice: "17d12+85",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        str: 23, dex: 14, con: 21, int: 14, wis: 13, cha: 17,
        saves: ["Dex +7", "Con +10", "Wis +6", "Cha +8"],
        skills: ["Perception +11", "Stealth +7"],
        immunities: ["acid"],
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
        languages: "Common, Draconic",
        cr: "14",
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage." },
            { name: "Claw", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours." },
            { name: "Acid Breath (Recharge 5-6)", description: "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
        ],
        source: "SRD"
    },
    {
        name: "Adult Blue Dragon",
        size: "huge",
        type: "dragon",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 225,
        hpDice: "18d12+108",
        speed: "40 ft., burrow 30 ft., fly 80 ft.",
        str: 25, dex: 10, con: 23, int: 16, wis: 15, cha: 19,
        saves: ["Dex +5", "Con +11", "Wis +7", "Cha +9"],
        skills: ["Perception +12", "Stealth +5"],
        immunities: ["lightning"],
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
        languages: "Common, Draconic",
        cr: "16",
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage." },
            { name: "Claw", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Lightning Breath (Recharge 5-6)", description: "The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone." }
        ],
        source: "SRD"
    },
    {
        name: "Adult Red Dragon",
        size: "huge",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 256,
        hpDice: "19d12+133",
        speed: "40 ft., climb 40 ft., fly 80 ft.",
        str: 27, dex: 10, con: 25, int: 16, wis: 13, cha: 21,
        saves: ["Dex +6", "Con +13", "Wis +7", "Cha +11"],
        skills: ["Perception +13", "Stealth +6"],
        immunities: ["fire"],
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 23",
        languages: "Common, Draconic",
        cr: "17",
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage." },
            { name: "Claw", description: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Fire Breath (Recharge 5-6)", description: "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone." }
        ],
        source: "SRD"
    },
    {
        name: "Adult Green Dragon",
        size: "huge",
        type: "dragon",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 207,
        hpDice: "18d12+90",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        str: 23, dex: 12, con: 21, int: 18, wis: 15, cha: 17,
        saves: ["Dex +6", "Con +10", "Wis +7", "Cha +8"],
        skills: ["Deception +8", "Insight +7", "Perception +12", "Persuasion +8", "Stealth +6"],
        immunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
        languages: "Common, Draconic",
        cr: "15",
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage." },
            { name: "Claw", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Poison Breath (Recharge 5-6)", description: "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone." }
        ],
        source: "SRD"
    },
    {
        name: "Adult White Dragon",
        size: "huge",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 200,
        hpDice: "16d12+96",
        speed: "40 ft., burrow 30 ft., fly 80 ft., swim 40 ft.",
        str: 22, dex: 10, con: 22, int: 8, wis: 12, cha: 12,
        saves: ["Dex +5", "Con +11", "Wis +6", "Cha +6"],
        skills: ["Perception +11", "Stealth +5"],
        immunities: ["cold"],
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
        languages: "Common, Draconic",
        cr: "13",
        traits: [
            { name: "Ice Walk", description: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage." },
            { name: "Claw", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Cold Breath (Recharge 5-6)", description: "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone." }
        ],
        source: "SRD"
    },
    {
        name: "Drider",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 123,
        hpDice: "13d10+52",
        speed: "30 ft., climb 30 ft.",
        str: 16, dex: 16, con: 18, int: 13, wis: 14, cha: 12,
        skills: ["Perception +5", "Stealth +9"],
        senses: "darkvision 120 ft., passive Perception 15",
        languages: "Elvish, Undercommon",
        cr: "6",
        traits: [
            { name: "Fey Ancestry", description: "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep." },
            { name: "Spider Climb", description: "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." },
            { name: "Web Walker", description: "The drider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Multiattack", description: "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 2 (1d4) piercing damage plus 9 (2d8) poison damage." },
            { name: "Longsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands." },
            { name: "Longbow", description: "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage." }
        ],
        source: "SRD"
    },
    {
        name: "Ettercap",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 44,
        hpDice: "8d8+8",
        speed: "30 ft., climb 30 ft.",
        str: 14, dex: 15, con: 13, int: 7, wis: 12, cha: 8,
        skills: ["Perception +3", "Stealth +4", "Survival +3"],
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "-",
        cr: "2",
        traits: [
            { name: "Spider Climb", description: "The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The ettercap ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Multiattack", description: "The ettercap makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage plus 4 (1d8) poison damage. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage." },
            { name: "Web (Recharge 5-6)", description: "Ranged Weapon Attack: +4 to hit, range 30/60 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect also ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, vulnerability to fire damage, and immunity to bludgeoning, poison, and psychic damage." }
        ],
        source: "SRD"
    },
    {
        name: "Ettin",
        size: "large",
        type: "giant",
        alignment: "chaotic evil",
        ac: 12,
        acType: "natural armor",
        hp: 85,
        hpDice: "10d10+30",
        speed: "40 ft.",
        str: 21, dex: 8, con: 17, int: 6, wis: 10, cha: 8,
        skills: ["Perception +4"],
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "Giant, Orc",
        cr: "4",
        traits: [
            { name: "Two Heads", description: "The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious." },
            { name: "Wakeful", description: "When one of the ettin's heads is asleep, its other head is awake." }
        ],
        actions: [
            { name: "Multiattack", description: "The ettin makes two attacks: one with its battleaxe and one with its morningstar." },
            { name: "Battleaxe", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage." },
            { name: "Morningstar", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Gargoyle",
        size: "medium",
        type: "elemental",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 52,
        hpDice: "7d8+21",
        speed: "30 ft., fly 60 ft.",
        str: 15, dex: 11, con: 16, int: 6, wis: 11, cha: 7,
        resistances: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        immunities: ["poison"],
        conditionImmunities: ["exhaustion", "petrified", "poisoned"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Terran",
        cr: "2",
        traits: [
            { name: "False Appearance", description: "While the gargoyle remains motionless, it is indistinguishable from an inanimate statue." }
        ],
        actions: [
            { name: "Multiattack", description: "The gargoyle makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Gelatinous Cube",
        size: "large",
        type: "ooze",
        alignment: "unaligned",
        ac: 6,
        hp: 84,
        hpDice: "8d10+40",
        speed: "15 ft.",
        str: 14, dex: 3, con: 20, int: 1, wis: 6, cha: 1,
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 8",
        languages: "-",
        cr: "2",
        traits: [
            { name: "Ooze Cube", description: "The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw." },
            { name: "Transparent", description: "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage." },
            { name: "Engulf", description: "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it. An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube." }
        ],
        source: "SRD"
    }
];

// Merge with main SRDMonsters array
if (typeof window !== 'undefined') {
    window.SRDMonsters2 = SRDMonsters2;
}
