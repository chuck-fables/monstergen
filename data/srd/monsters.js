// SRD 5.2 Monster Data
const SRDMonsters = [
    {
        name: "Aboleth",
        size: "large",
        type: "aberration",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 135,
        hpDice: "18d10+36",
        speed: "10 ft., swim 40 ft.",
        str: 21, dex: 9, con: 15, int: 18, wis: 15, cha: 18,
        saves: ["Con +6", "Int +8", "Wis +6"],
        skills: ["History +12", "Perception +10"],
        senses: "darkvision 120 ft., passive Perception 20",
        languages: "Deep Speech, telepathy 120 ft.",
        cr: "10",
        traits: [
            { name: "Amphibious", description: "The aboleth can breathe air and water." },
            { name: "Mucous Cloud", description: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater." },
            { name: "Probing Telepathy", description: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature." }
        ],
        actions: [
            { name: "Multiattack", description: "The aboleth makes three tentacle attacks." },
            { name: "Tentacle", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed." },
            { name: "Tail", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) bludgeoning damage." },
            { name: "Enslave (3/Day)", description: "The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The aboleth makes a Wisdom (Perception) check." },
            { name: "Tail Swipe", description: "The aboleth makes one tail attack." },
            { name: "Psychic Drain (Costs 2 Actions)", description: "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes." }
        ],
        source: "SRD"
    },
    {
        name: "Animated Armor",
        size: "medium",
        type: "construct",
        alignment: "unaligned",
        ac: 18,
        acType: "natural armor",
        hp: 33,
        hpDice: "6d8+6",
        speed: "25 ft.",
        str: 14, dex: 11, con: 13, int: 1, wis: 3, cha: 1,
        immunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 6",
        languages: "-",
        cr: "1",
        traits: [
            { name: "Antimagic Susceptibility", description: "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute." },
            { name: "False Appearance", description: "While the armor remains motionless, it is indistinguishable from a normal suit of armor." }
        ],
        actions: [
            { name: "Multiattack", description: "The armor makes two melee attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Banshee",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 58,
        hpDice: "13d8",
        speed: "0 ft., fly 40 ft. (hover)",
        str: 1, dex: 14, con: 10, int: 12, wis: 11, cha: 17,
        resistances: ["acid", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["cold", "necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Common, Elvish",
        cr: "4",
        traits: [
            { name: "Detect Life", description: "The banshee can magically sense the presence of creatures up to 5 miles away that aren't undead or constructs. She knows the general direction they're in but not their exact locations." },
            { name: "Incorporeal Movement", description: "The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5 (1d10) force damage if she ends her turn inside an object." }
        ],
        actions: [
            { name: "Corrupting Touch", description: "Melee Spell Attack: +4 to hit, reach 5 ft., one target. Hit: 12 (3d6 + 2) necrotic damage." },
            { name: "Horrifying Visage", description: "Each non-undead creature within 60 feet of the banshee that can see her must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if the banshee is within line of sight, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the banshee's Horrifying Visage for the next 24 hours." },
            { name: "Wail (1/Day)", description: "The banshee releases a mournful wail, provided that she isn't in sunlight. This wail has no effect on constructs and undead. All other creatures within 30 feet of her that can hear her must make a DC 13 Constitution saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes 10 (3d6) psychic damage." }
        ],
        source: "SRD"
    },
    {
        name: "Basilisk",
        size: "medium",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 52,
        hpDice: "8d8+16",
        speed: "20 ft.",
        str: 16, dex: 8, con: 15, int: 2, wis: 8, cha: 7,
        senses: "darkvision 60 ft., passive Perception 9",
        languages: "-",
        cr: "3",
        traits: [
            { name: "Petrifying Gaze", description: "If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage." }
        ],
        source: "SRD"
    },
    {
        name: "Behir",
        size: "huge",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 168,
        hpDice: "16d12+64",
        speed: "50 ft., climb 40 ft.",
        str: 23, dex: 16, con: 18, int: 7, wis: 14, cha: 12,
        skills: ["Perception +6", "Stealth +7"],
        immunities: ["lightning"],
        senses: "darkvision 90 ft., passive Perception 16",
        languages: "Draconic",
        cr: "11",
        actions: [
            { name: "Multiattack", description: "The behir makes two attacks: one with its bite and one to constrict." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) piercing damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature. Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends." },
            { name: "Lightning Breath (Recharge 5-6)", description: "The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one." },
            { name: "Swallow", description: "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time." }
        ],
        source: "SRD"
    },
    {
        name: "Bugbear",
        size: "medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "chaotic evil",
        ac: 16,
        acType: "hide armor, shield",
        hp: 27,
        hpDice: "5d8+5",
        speed: "30 ft.",
        str: 15, dex: 14, con: 13, int: 8, wis: 11, cha: 9,
        skills: ["Stealth +6", "Survival +2"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Common, Goblin",
        cr: "1",
        traits: [
            { name: "Brute", description: "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)." },
            { name: "Surprise Attack", description: "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack." }
        ],
        actions: [
            { name: "Morningstar", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d8 + 2) piercing damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 9 (2d6 + 2) piercing damage in melee or 5 (1d6 + 2) piercing damage at range." }
        ],
        source: "SRD"
    },
    {
        name: "Bulette",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 94,
        hpDice: "9d10+45",
        speed: "40 ft., burrow 40 ft.",
        str: 19, dex: 11, con: 21, int: 2, wis: 10, cha: 5,
        skills: ["Perception +6"],
        senses: "darkvision 60 ft., tremorsense 60 ft., passive Perception 16",
        languages: "-",
        cr: "5",
        traits: [
            { name: "Standing Leap", description: "The bulette's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12 + 4) piercing damage." },
            { name: "Deadly Leap", description: "If the bulette jumps at least 15 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 feet out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space." }
        ],
        source: "SRD"
    },
    {
        name: "Chimera",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hpDice: "12d10+48",
        speed: "30 ft., fly 60 ft.",
        str: 19, dex: 11, con: 19, int: 3, wis: 14, cha: 10,
        skills: ["Perception +8"],
        senses: "darkvision 60 ft., passive Perception 18",
        languages: "understands Draconic but can't speak",
        cr: "6",
        actions: [
            { name: "Multiattack", description: "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage." },
            { name: "Horns", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) bludgeoning damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage." },
            { name: "Fire Breath (Recharge 5-6)", description: "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Cloaker",
        size: "large",
        type: "aberration",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "natural armor",
        hp: 78,
        hpDice: "12d10+12",
        speed: "10 ft., fly 40 ft.",
        str: 17, dex: 15, con: 12, int: 13, wis: 12, cha: 14,
        skills: ["Stealth +5"],
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "Deep Speech, Undercommon",
        cr: "8",
        traits: [
            { name: "Damage Transfer", description: "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down), and that creature takes the other half." },
            { name: "False Appearance", description: "While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak." },
            { name: "Light Sensitivity", description: "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The cloaker makes two attacks: one with its bite and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check." },
            { name: "Tail", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 7 (1d8 + 3) slashing damage." },
            { name: "Moan", description: "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours." },
            { name: "Phantasms (Recharges after a Short or Long Rest)", description: "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear." }
        ],
        source: "SRD"
    },
    {
        name: "Cockatrice",
        size: "small",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 27,
        hpDice: "6d6+6",
        speed: "20 ft., fly 40 ft.",
        str: 6, dex: 12, con: 12, int: 2, wis: 13, cha: 5,
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "-",
        cr: "0.5",
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours." }
        ],
        source: "SRD"
    }
];

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.SRDMonsters = SRDMonsters;
}
