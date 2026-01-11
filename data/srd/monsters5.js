// SRD 5.2 Monster Data - Part 5 (G-M)
const SRDMonsters5 = [
    {
        name: "Ghast",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 13,
        hp: 36,
        hpDice: "8d8",
        speed: "30 ft.",
        str: 16, dex: 17, con: 10, int: 11, wis: 10, cha: 8,
        resistances: ["necrotic"],
        immunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "poisoned"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Common",
        cr: "2",
        traits: [
            { name: "Stench", description: "Any creature that starts its turn within 5 feet of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours." },
            { name: "Turning Defiance", description: "The ghast and any ghouls within 30 feet of it have advantage on saving throws against effects that turn undead." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 12 (2d8 + 3) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Ape",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 157,
        hpDice: "15d12+60",
        speed: "40 ft., climb 40 ft.",
        str: 23, dex: 14, con: 18, int: 7, wis: 12, cha: 7,
        skills: ["Athletics +9", "Perception +4"],
        senses: "passive Perception 14",
        languages: "-",
        cr: "7",
        actions: [
            { name: "Multiattack", description: "The ape makes two fist attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 30 (7d6 + 6) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Badger",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 13,
        hpDice: "2d8+4",
        speed: "30 ft., burrow 10 ft.",
        str: 13, dex: 10, con: 15, int: 2, wis: 12, cha: 5,
        senses: "darkvision 30 ft., passive Perception 11",
        languages: "-",
        cr: "0.25",
        traits: [
            { name: "Keen Smell", description: "The badger has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The badger makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Bat",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 22,
        hpDice: "4d10",
        speed: "10 ft., fly 60 ft.",
        str: 15, dex: 16, con: 11, int: 2, wis: 12, cha: 6,
        senses: "blindsight 60 ft., passive Perception 11",
        languages: "-",
        cr: "0.25",
        traits: [
            { name: "Echolocation", description: "The bat can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The bat has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Boar",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 42,
        hpDice: "5d10+15",
        speed: "40 ft.",
        str: 17, dex: 10, con: 16, int: 2, wis: 7, cha: 5,
        senses: "passive Perception 8",
        languages: "-",
        cr: "2",
        traits: [
            { name: "Charge", description: "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." },
            { name: "Relentless (Recharges after a Short or Long Rest)", description: "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead." }
        ],
        actions: [
            { name: "Tusk", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Centipede",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 4,
        hpDice: "1d6+1",
        speed: "30 ft., climb 30 ft.",
        str: 5, dex: 14, con: 12, int: 1, wis: 7, cha: 3,
        senses: "blindsight 30 ft., passive Perception 8",
        languages: "-",
        cr: "0.25",
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Constrictor Snake",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 60,
        hpDice: "8d12+8",
        speed: "30 ft., swim 30 ft.",
        str: 19, dex: 14, con: 12, int: 1, wis: 10, cha: 3,
        skills: ["Perception +2"],
        senses: "blindsight 10 ft., passive Perception 12",
        languages: "-",
        cr: "2",
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Crab",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 13,
        hpDice: "3d8",
        speed: "30 ft., swim 30 ft.",
        str: 13, dex: 15, con: 11, int: 1, wis: 9, cha: 3,
        skills: ["Stealth +4"],
        senses: "blindsight 30 ft., passive Perception 9",
        languages: "-",
        cr: "0.125",
        traits: [
            { name: "Amphibious", description: "The crab can breathe air and water." }
        ],
        actions: [
            { name: "Claw", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Crocodile",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 85,
        hpDice: "9d12+27",
        speed: "30 ft., swim 50 ft.",
        str: 21, dex: 9, con: 17, int: 2, wis: 10, cha: 7,
        skills: ["Stealth +5"],
        senses: "passive Perception 10",
        languages: "-",
        cr: "5",
        traits: [
            { name: "Hold Breath", description: "The crocodile can hold its breath for 30 minutes." }
        ],
        actions: [
            { name: "Multiattack", description: "The crocodile makes two attacks: one with its bite and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10 + 5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target." },
            { name: "Tail", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Eagle",
        size: "large",
        type: "beast",
        alignment: "neutral good",
        ac: 13,
        hp: 26,
        hpDice: "4d10+4",
        speed: "10 ft., fly 80 ft.",
        str: 16, dex: 17, con: 13, int: 8, wis: 14, cha: 10,
        skills: ["Perception +4"],
        senses: "passive Perception 14",
        languages: "Giant Eagle, understands Common and Auran but can't speak them",
        cr: "1",
        traits: [
            { name: "Keen Sight", description: "The eagle has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The eagle makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Elk",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 42,
        hpDice: "5d12+10",
        speed: "60 ft.",
        str: 19, dex: 16, con: 14, int: 7, wis: 14, cha: 10,
        skills: ["Perception +4"],
        senses: "passive Perception 14",
        languages: "Giant Elk, understands Common, Elvish, and Sylvan but can't speak them",
        cr: "2",
        traits: [
            { name: "Charge", description: "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage." },
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8 + 4) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Fire Beetle",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 4,
        hpDice: "1d6+1",
        speed: "30 ft.",
        str: 8, dex: 10, con: 12, int: 1, wis: 7, cha: 3,
        senses: "blindsight 30 ft., passive Perception 8",
        languages: "-",
        cr: "0",
        traits: [
            { name: "Illumination", description: "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 - 1) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Frog",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 18,
        hpDice: "4d8",
        speed: "30 ft., swim 30 ft.",
        str: 12, dex: 13, con: 11, int: 2, wis: 10, cha: 3,
        skills: ["Perception +2", "Stealth +3"],
        senses: "darkvision 30 ft., passive Perception 12",
        languages: "-",
        cr: "0.25",
        traits: [
            { name: "Amphibious", description: "The frog can breathe air and water." },
            { name: "Standing Leap", description: "The frog's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target." },
            { name: "Swallow", description: "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Goat",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 19,
        hpDice: "3d10+3",
        speed: "40 ft.",
        str: 17, dex: 11, con: 12, int: 3, wis: 12, cha: 6,
        senses: "passive Perception 11",
        languages: "-",
        cr: "0.5",
        traits: [
            { name: "Charge", description: "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." },
            { name: "Sure-Footed", description: "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Hyena",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 45,
        hpDice: "6d10+12",
        speed: "50 ft.",
        str: 16, dex: 14, con: 14, int: 2, wis: 12, cha: 7,
        skills: ["Perception +3"],
        senses: "passive Perception 13",
        languages: "-",
        cr: "1",
        traits: [
            { name: "Rampage", description: "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Lizard",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 19,
        hpDice: "3d10+3",
        speed: "30 ft., climb 30 ft.",
        str: 15, dex: 12, con: 13, int: 2, wis: 10, cha: 5,
        senses: "darkvision 30 ft., passive Perception 10",
        languages: "-",
        cr: "0.25",
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Octopus",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 52,
        hpDice: "8d10+8",
        speed: "10 ft., swim 60 ft.",
        str: 17, dex: 13, con: 13, int: 4, wis: 10, cha: 4,
        skills: ["Perception +4", "Stealth +5"],
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "-",
        cr: "1",
        traits: [
            { name: "Hold Breath", description: "While out of water, the octopus can hold its breath for 1 hour." },
            { name: "Underwater Camouflage", description: "The octopus has advantage on Dexterity (Stealth) checks made while underwater." },
            { name: "Water Breathing", description: "The octopus can breathe only underwater." }
        ],
        actions: [
            { name: "Tentacles", description: "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target." },
            { name: "Ink Cloud (Recharges after a Short or Long Rest)", description: "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Owl",
        size: "large",
        type: "beast",
        alignment: "neutral",
        ac: 12,
        hp: 19,
        hpDice: "3d10+3",
        speed: "5 ft., fly 60 ft.",
        str: 13, dex: 15, con: 12, int: 8, wis: 13, cha: 10,
        skills: ["Perception +5", "Stealth +4"],
        senses: "darkvision 120 ft., passive Perception 15",
        languages: "Giant Owl, understands Common, Elvish, and Sylvan but can't speak them",
        cr: "0.25",
        traits: [
            { name: "Flyby", description: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach." },
            { name: "Keen Hearing and Sight", description: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight." }
        ],
        actions: [
            { name: "Talons", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6 + 1) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Poisonous Snake",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        hp: 11,
        hpDice: "2d8+2",
        speed: "30 ft., swim 30 ft.",
        str: 10, dex: 18, con: 13, int: 2, wis: 10, cha: 3,
        skills: ["Perception +2"],
        senses: "blindsight 10 ft., passive Perception 12",
        languages: "-",
        cr: "0.25",
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Rat",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 7,
        hpDice: "2d6",
        speed: "30 ft.",
        str: 7, dex: 15, con: 11, int: 2, wis: 10, cha: 4,
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "-",
        cr: "0.125",
        traits: [
            { name: "Keen Smell", description: "The rat has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pack Tactics", description: "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Scorpion",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 52,
        hpDice: "7d10+14",
        speed: "40 ft.",
        str: 15, dex: 13, con: 15, int: 1, wis: 9, cha: 3,
        senses: "blindsight 60 ft., passive Perception 9",
        languages: "-",
        cr: "3",
        actions: [
            { name: "Multiattack", description: "The scorpion makes three attacks: two with its claws and one with its sting." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target." },
            { name: "Sting", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Sea Horse",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 16,
        hpDice: "3d10",
        speed: "0 ft., swim 40 ft.",
        str: 12, dex: 15, con: 11, int: 2, wis: 12, cha: 5,
        senses: "passive Perception 11",
        languages: "-",
        cr: "0.5",
        traits: [
            { name: "Charge", description: "If the sea horse moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." },
            { name: "Water Breathing", description: "The sea horse can breathe only underwater." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Shark",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 126,
        hpDice: "11d12+55",
        speed: "0 ft., swim 50 ft.",
        str: 23, dex: 11, con: 21, int: 1, wis: 10, cha: 5,
        skills: ["Perception +3"],
        senses: "blindsight 60 ft., passive Perception 13",
        languages: "-",
        cr: "5",
        traits: [
            { name: "Blood Frenzy", description: "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Water Breathing", description: "The shark can breathe only underwater." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10 + 6) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Toad",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 39,
        hpDice: "6d10+6",
        speed: "20 ft., swim 40 ft.",
        str: 15, dex: 13, con: 13, int: 2, wis: 10, cha: 3,
        senses: "darkvision 30 ft., passive Perception 10",
        languages: "-",
        cr: "1",
        traits: [
            { name: "Amphibious", description: "The toad can breathe air and water." },
            { name: "Standing Leap", description: "The toad's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target." },
            { name: "Swallow", description: "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time. If the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Vulture",
        size: "large",
        type: "beast",
        alignment: "neutral evil",
        ac: 10,
        hp: 22,
        hpDice: "3d10+6",
        speed: "10 ft., fly 60 ft.",
        str: 15, dex: 10, con: 15, int: 6, wis: 12, cha: 7,
        skills: ["Perception +3"],
        senses: "passive Perception 13",
        languages: "understands Common but can't speak",
        cr: "1",
        traits: [
            { name: "Keen Sight and Smell", description: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell." },
            { name: "Pack Tactics", description: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The vulture makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Wasp",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 13,
        hpDice: "3d8",
        speed: "10 ft., fly 50 ft.",
        str: 10, dex: 14, con: 10, int: 1, wis: 10, cha: 3,
        senses: "passive Perception 10",
        languages: "-",
        cr: "0.5",
        actions: [
            { name: "Sting", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Weasel",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 9,
        hpDice: "2d8",
        speed: "40 ft.",
        str: 11, dex: 16, con: 10, int: 4, wis: 12, cha: 5,
        skills: ["Perception +3", "Stealth +5"],
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "-",
        cr: "0.125",
        traits: [
            { name: "Keen Hearing and Smell", description: "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Giant Wolf Spider",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 11,
        hpDice: "2d8+2",
        speed: "40 ft., climb 40 ft.",
        str: 12, dex: 16, con: 13, int: 3, wis: 12, cha: 4,
        skills: ["Perception +3", "Stealth +7"],
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 13",
        languages: "-",
        cr: "0.25",
        traits: [
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ],
        source: "SRD"
    },
    {
        name: "Gibbering Mouther",
        size: "medium",
        type: "aberration",
        alignment: "neutral",
        ac: 9,
        hp: 67,
        hpDice: "9d8+27",
        speed: "10 ft., swim 10 ft.",
        str: 10, dex: 8, con: 16, int: 3, wis: 10, cha: 6,
        conditionImmunities: ["prone"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "-",
        cr: "2",
        traits: [
            { name: "Aberrant Ground", description: "The ground in a 10-foot radius around the mouther is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a DC 10 Strength saving throw or have its speed reduced to 0 until the start of its next turn." },
            { name: "Gibbering", description: "The mouther babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within 20 feet of the mouther and can hear the gibbering must succeed on a DC 10 Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle." },
            { name: "Bites", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 17 (5d6) piercing damage. If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther." },
            { name: "Blinding Spittle (Recharge 5-6)", description: "The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther's next turn." }
        ],
        source: "SRD"
    },
    {
        name: "Glabrezu",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 157,
        hpDice: "15d10+75",
        speed: "40 ft.",
        str: 20, dex: 15, con: 21, int: 19, wis: 17, cha: 16,
        saves: ["Str +9", "Con +9", "Wis +7", "Cha +7"],
        resistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: "truesight 120 ft., passive Perception 13",
        languages: "Abyssal, telepathy 120 ft.",
        cr: "9",
        traits: [
            { name: "Innate Spellcasting", description: "The glabrezu's spellcasting ability is Intelligence (spell save DC 16). The glabrezu can innately cast the following spells, requiring no material components:\nAt will: darkness, detect magic, dispel magic\n1/day each: confusion, fly, power word stun" },
            { name: "Magic Resistance", description: "The glabrezu has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell." },
            { name: "Pincer", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target." },
            { name: "Fist", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Gladiator",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 16,
        acType: "studded leather, shield",
        hp: 112,
        hpDice: "15d8+45",
        speed: "30 ft.",
        str: 18, dex: 15, con: 16, int: 10, wis: 12, cha: 15,
        saves: ["Str +7", "Dex +5", "Con +6"],
        skills: ["Athletics +10", "Intimidation +5"],
        senses: "passive Perception 11",
        languages: "any one language (usually Common)",
        cr: "5",
        traits: [
            { name: "Brave", description: "The gladiator has advantage on saving throws against being frightened." },
            { name: "Brute", description: "A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack)." }
        ],
        actions: [
            { name: "Multiattack", description: "The gladiator makes three melee attacks or two ranged attacks." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. and range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack." },
            { name: "Shield Bash", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone." }
        ],
        reactions: [
            { name: "Parry", description: "The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon." }
        ],
        source: "SRD"
    },
    {
        name: "Goat",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 4,
        hpDice: "1d8",
        speed: "40 ft.",
        str: 12, dex: 10, con: 11, int: 2, wis: 10, cha: 5,
        senses: "passive Perception 10",
        languages: "-",
        cr: "0",
        traits: [
            { name: "Charge", description: "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone." },
            { name: "Sure-Footed", description: "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Gold Dragon Wyrmling",
        size: "medium",
        type: "dragon",
        alignment: "lawful good",
        ac: 17,
        acType: "natural armor",
        hp: 60,
        hpDice: "8d8+24",
        speed: "30 ft., fly 60 ft., swim 30 ft.",
        str: 19, dex: 14, con: 17, int: 14, wis: 11, cha: 16,
        saves: ["Dex +4", "Con +5", "Wis +2", "Cha +5"],
        skills: ["Perception +4", "Stealth +4"],
        immunities: ["fire"],
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
        languages: "Draconic",
        cr: "3",
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        source: "SRD"
    },
    {
        name: "Gorgon",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 19,
        acType: "natural armor",
        hp: 114,
        hpDice: "12d10+48",
        speed: "40 ft.",
        str: 20, dex: 11, con: 18, int: 2, wis: 12, cha: 7,
        skills: ["Perception +4"],
        conditionImmunities: ["petrified"],
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "-",
        cr: "5",
        traits: [
            { name: "Trampling Charge", description: "If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (2d12 + 5) piercing damage." },
            { name: "Hooves", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage." },
            { name: "Petrifying Breath (Recharge 5-6)", description: "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic." }
        ],
        source: "SRD"
    },
    {
        name: "Gray Ooze",
        size: "medium",
        type: "ooze",
        alignment: "unaligned",
        ac: 8,
        hp: 22,
        hpDice: "3d8+9",
        speed: "10 ft., climb 10 ft.",
        str: 12, dex: 6, con: 16, int: 1, wis: 6, cha: 2,
        skills: ["Stealth +2"],
        resistances: ["acid", "cold", "fire"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 8",
        languages: "-",
        cr: "0.5",
        traits: [
            { name: "Amorphous", description: "The ooze can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Corrode Metal", description: "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage. The ooze can eat through 2-inch-thick, nonmagical metal in 1 round." },
            { name: "False Appearance", description: "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10." }
        ],
        source: "SRD"
    },
    {
        name: "Green Dragon Wyrmling",
        size: "medium",
        type: "dragon",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 38,
        hpDice: "7d8+7",
        speed: "30 ft., fly 60 ft., swim 30 ft.",
        str: 15, dex: 12, con: 13, int: 14, wis: 11, cha: 13,
        saves: ["Dex +3", "Con +3", "Wis +2", "Cha +3"],
        skills: ["Perception +4", "Stealth +3"],
        immunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
        languages: "Draconic",
        cr: "2",
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 3 (1d6) poison damage." },
            { name: "Poison Breath (Recharge 5-6)", description: "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Green Hag",
        size: "medium",
        type: "fey",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 82,
        hpDice: "11d8+33",
        speed: "30 ft.",
        str: 18, dex: 12, con: 16, int: 13, wis: 14, cha: 14,
        skills: ["Arcana +3", "Deception +4", "Perception +4", "Stealth +3"],
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "Common, Draconic, Sylvan",
        cr: "3",
        traits: [
            { name: "Amphibious", description: "The hag can breathe air and water." },
            { name: "Innate Spellcasting", description: "The hag's innate spellcasting ability is Charisma (spell save DC 12). She can innately cast the following spells, requiring no material components:\nAt will: dancing lights, minor illusion, vicious mockery" },
            { name: "Mimicry", description: "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage." },
            { name: "Illusory Appearance", description: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies. The changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised." },
            { name: "Invisible Passage", description: "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her." }
        ],
        source: "SRD"
    },
    {
        name: "Grick",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 27,
        hpDice: "6d8",
        speed: "30 ft., climb 30 ft.",
        str: 14, dex: 14, con: 11, int: 3, wis: 14, cha: 5,
        resistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: "darkvision 60 ft., passive Perception 12",
        languages: "-",
        cr: "2",
        traits: [
            { name: "Stone Camouflage", description: "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target." },
            { name: "Tentacles", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage." },
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Grimlock",
        size: "medium",
        type: "humanoid",
        subtype: "grimlock",
        alignment: "neutral evil",
        ac: 11,
        hp: 11,
        hpDice: "2d8+2",
        speed: "30 ft.",
        str: 16, dex: 12, con: 12, int: 9, wis: 8, cha: 6,
        skills: ["Athletics +5", "Perception +3", "Stealth +3"],
        conditionImmunities: ["blinded"],
        senses: "blindsight 30 ft. or 10 ft. while deafened (blind beyond this radius), passive Perception 13",
        languages: "Undercommon",
        cr: "0.25",
        traits: [
            { name: "Blind Senses", description: "The grimlock can't use its blindsight while deafened and unable to smell." },
            { name: "Keen Hearing and Smell", description: "The grimlock has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Stone Camouflage", description: "The grimlock has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Spiked Bone Club", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) bludgeoning damage plus 2 (1d4) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Guard",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 16,
        acType: "chain shirt, shield",
        hp: 11,
        hpDice: "2d8+2",
        speed: "30 ft.",
        str: 13, dex: 12, con: 12, int: 10, wis: 11, cha: 10,
        skills: ["Perception +2"],
        senses: "passive Perception 12",
        languages: "any one language (usually Common)",
        cr: "0.125",
        actions: [
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack." }
        ],
        source: "SRD"
    },
    {
        name: "Guardian Naga",
        size: "large",
        type: "monstrosity",
        alignment: "lawful good",
        ac: 18,
        acType: "natural armor",
        hp: 127,
        hpDice: "15d10+45",
        speed: "40 ft.",
        str: 19, dex: 18, con: 16, int: 16, wis: 19, cha: 18,
        saves: ["Dex +8", "Con +7", "Int +7", "Wis +8", "Cha +8"],
        immunities: ["poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "Celestial, Common",
        cr: "10",
        traits: [
            { name: "Rejuvenation", description: "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning." },
            { name: "Spellcasting", description: "The naga is an 11th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following cleric spells prepared:\nCantrips (at will): mending, sacred flame, thaumaturgy\n1st level (4 slots): command, cure wounds, shield of faith\n2nd level (3 slots): calm emotions, hold person\n3rd level (3 slots): bestow curse, clairvoyance\n4th level (3 slots): banishment, freedom of movement\n5th level (2 slots): flame strike, geas\n6th level (1 slot): true seeing" }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 8 (1d8 + 4) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one." },
            { name: "Spit Poison", description: "Ranged Weapon Attack: +8 to hit, range 15/30 ft., one creature. Hit: The target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Half-Red Dragon Veteran",
        size: "medium",
        type: "humanoid",
        subtype: "human",
        alignment: "any alignment",
        ac: 18,
        acType: "plate",
        hp: 65,
        hpDice: "10d8+20",
        speed: "30 ft.",
        str: 16, dex: 13, con: 14, int: 10, wis: 11, cha: 10,
        skills: ["Athletics +5", "Perception +2"],
        resistances: ["fire"],
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 12",
        languages: "Common, Draconic",
        cr: "5",
        actions: [
            { name: "Multiattack", description: "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack." },
            { name: "Longsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands." },
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage." },
            { name: "Heavy Crossbow", description: "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage." },
            { name: "Fire Breath (Recharge 5-6)", description: "The veteran exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Hawk",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 1,
        hpDice: "1d4-1",
        speed: "10 ft., fly 60 ft.",
        str: 5, dex: 16, con: 8, int: 2, wis: 14, cha: 6,
        skills: ["Perception +4"],
        senses: "passive Perception 14",
        languages: "-",
        cr: "0",
        traits: [
            { name: "Keen Sight", description: "The hawk has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Talons", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Hezrou",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 136,
        hpDice: "13d10+65",
        speed: "30 ft.",
        str: 19, dex: 17, con: 20, int: 5, wis: 12, cha: 13,
        saves: ["Str +7", "Con +8", "Wis +4"],
        resistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: "darkvision 120 ft., passive Perception 11",
        languages: "Abyssal, telepathy 120 ft.",
        cr: "8",
        traits: [
            { name: "Magic Resistance", description: "The hezrou has advantage on saving throws against spells and other magical effects." },
            { name: "Stench", description: "Any creature that starts its turn within 10 feet of the hezrou must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours." }
        ],
        actions: [
            { name: "Multiattack", description: "The hezrou makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Hippogriff",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hpDice: "3d10+3",
        speed: "40 ft., fly 60 ft.",
        str: 17, dex: 13, con: 13, int: 2, wis: 12, cha: 8,
        skills: ["Perception +5"],
        senses: "passive Perception 15",
        languages: "-",
        cr: "1",
        traits: [
            { name: "Keen Sight", description: "The hippogriff has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The hippogriff makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Homunculus",
        size: "tiny",
        type: "construct",
        alignment: "neutral",
        ac: 13,
        acType: "natural armor",
        hp: 5,
        hpDice: "2d4",
        speed: "20 ft., fly 40 ft.",
        str: 4, dex: 15, con: 11, int: 10, wis: 10, cha: 7,
        immunities: ["poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "understands the languages of its creator but can't speak",
        cr: "0",
        traits: [
            { name: "Telepathic Bond", description: "While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way." }
        ],
        source: "SRD"
    },
    {
        name: "Horned Devil",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 178,
        hpDice: "17d10+85",
        speed: "20 ft., fly 60 ft.",
        str: 22, dex: 17, con: 21, int: 12, wis: 16, cha: 17,
        saves: ["Str +10", "Dex +7", "Wis +7", "Cha +7"],
        resistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        immunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: "darkvision 120 ft., passive Perception 13",
        languages: "Infernal, telepathy 120 ft.",
        cr: "11",
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack." },
            { name: "Fork", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) piercing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 10 (1d8 + 6) piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing." },
            { name: "Hurl Flame", description: "Ranged Spell Attack: +7 to hit, range 150 ft., one target. Hit: 14 (4d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire." }
        ],
        source: "SRD"
    },
    {
        name: "Hunter Shark",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 45,
        hpDice: "6d10+12",
        speed: "0 ft., swim 40 ft.",
        str: 18, dex: 13, con: 15, int: 1, wis: 10, cha: 4,
        skills: ["Perception +2"],
        senses: "blindsight 30 ft., passive Perception 12",
        languages: "-",
        cr: "2",
        traits: [
            { name: "Blood Frenzy", description: "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Water Breathing", description: "The shark can breathe only underwater." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Hyena",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 5,
        hpDice: "1d8+1",
        speed: "50 ft.",
        str: 11, dex: 13, con: 12, int: 2, wis: 12, cha: 5,
        skills: ["Perception +3"],
        senses: "passive Perception 13",
        languages: "-",
        cr: "0",
        traits: [
            { name: "Pack Tactics", description: "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Ice Devil",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 180,
        hpDice: "19d10+76",
        speed: "40 ft.",
        str: 21, dex: 14, con: 18, int: 18, wis: 15, cha: 18,
        saves: ["Dex +7", "Con +9", "Wis +7", "Cha +9"],
        resistances: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        immunities: ["cold", "fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 12",
        languages: "Infernal, telepathy 120 ft.",
        cr: "14",
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes three attacks: one with its bite, one with its claws, and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) piercing damage plus 10 (3d6) cold damage." },
            { name: "Claws", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (2d4 + 5) slashing damage plus 10 (3d6) cold damage." },
            { name: "Tail", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage plus 10 (3d6) cold damage." },
            { name: "Wall of Ice (Recharge 6)", description: "The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter. When the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one. The wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-foot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes." }
        ],
        source: "SRD"
    },
    {
        name: "Ice Mephit",
        size: "small",
        type: "elemental",
        alignment: "neutral evil",
        ac: 11,
        hp: 21,
        hpDice: "6d6",
        speed: "30 ft., fly 30 ft.",
        str: 7, dex: 13, con: 10, int: 9, wis: 11, cha: 12,
        skills: ["Perception +2", "Stealth +3"],
        vulnerabilities: ["bludgeoning", "fire"],
        immunities: ["cold", "poison"],
        conditionImmunities: ["poisoned"],
        senses: "darkvision 60 ft., passive Perception 12",
        languages: "Aquan, Auran",
        cr: "0.5",
        traits: [
            { name: "Death Burst", description: "When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 feet of it must make a DC 10 Dexterity saving throw, taking 4 (1d8) slashing damage on a failed save, or half as much damage on a successful one." },
            { name: "False Appearance", description: "While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice." },
            { name: "Innate Spellcasting (1/Day)", description: "The mephit can innately cast fog cloud, requiring no material components. Its innate spellcasting ability is Charisma." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) cold damage." },
            { name: "Frost Breath (Recharge 6)", description: "The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Invisible Stalker",
        size: "medium",
        type: "elemental",
        alignment: "neutral",
        ac: 14,
        hp: 104,
        hpDice: "16d8+32",
        speed: "50 ft., fly 50 ft. (hover)",
        str: 16, dex: 19, con: 14, int: 10, wis: 15, cha: 11,
        skills: ["Perception +8", "Stealth +10"],
        resistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: "darkvision 60 ft., passive Perception 18",
        languages: "Auran, understands Common but doesn't speak it",
        cr: "6",
        traits: [
            { name: "Invisibility", description: "The stalker is invisible." },
            { name: "Faultless Tracker", description: "The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner." }
        ],
        actions: [
            { name: "Multiattack", description: "The stalker makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Iron Golem",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 20,
        acType: "natural armor",
        hp: 210,
        hpDice: "20d10+100",
        speed: "30 ft.",
        str: 24, dex: 9, con: 20, int: 3, wis: 11, cha: 1,
        immunities: ["fire", "poison", "psychic", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: "darkvision 120 ft., passive Perception 10",
        languages: "understands the languages of its creator but can't speak",
        cr: "16",
        traits: [
            { name: "Fire Absorption", description: "Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt." },
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two melee attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage." },
            { name: "Sword", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 23 (3d10 + 7) slashing damage." },
            { name: "Poison Breath (Recharge 6)", description: "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Jackal",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hpDice: "1d6",
        speed: "40 ft.",
        str: 8, dex: 15, con: 11, int: 3, wis: 12, cha: 6,
        skills: ["Perception +3"],
        senses: "passive Perception 13",
        languages: "-",
        cr: "0",
        traits: [
            { name: "Keen Hearing and Smell", description: "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Killer Whale",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 90,
        hpDice: "12d12+12",
        speed: "0 ft., swim 60 ft.",
        str: 19, dex: 10, con: 13, int: 3, wis: 12, cha: 7,
        skills: ["Perception +3"],
        senses: "blindsight 120 ft., passive Perception 13",
        languages: "-",
        cr: "3",
        traits: [
            { name: "Echolocation", description: "The whale can't use its blindsight while deafened." },
            { name: "Hold Breath", description: "The whale can hold its breath for 30 minutes." },
            { name: "Keen Hearing", description: "The whale has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6 + 4) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Knight",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 18,
        acType: "plate",
        hp: 52,
        hpDice: "8d8+16",
        speed: "30 ft.",
        str: 16, dex: 11, con: 14, int: 11, wis: 11, cha: 15,
        saves: ["Con +4", "Wis +2"],
        senses: "passive Perception 10",
        languages: "any one language (usually Common)",
        cr: "3",
        traits: [
            { name: "Brave", description: "The knight has advantage on saving throws against being frightened." }
        ],
        actions: [
            { name: "Multiattack", description: "The knight makes two melee attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage." },
            { name: "Heavy Crossbow", description: "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage." },
            { name: "Leadership (Recharges after a Short or Long Rest)", description: "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated." }
        ],
        reactions: [
            { name: "Parry", description: "The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon." }
        ],
        source: "SRD"
    },
    {
        name: "Lamia",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 97,
        hpDice: "13d10+26",
        speed: "30 ft.",
        str: 16, dex: 13, con: 15, int: 14, wis: 15, cha: 16,
        skills: ["Deception +7", "Insight +4", "Stealth +3"],
        senses: "darkvision 60 ft., passive Perception 12",
        languages: "Abyssal, Common",
        cr: "4",
        traits: [
            { name: "Innate Spellcasting", description: "The lamia's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no material components.\nAt will: disguise self (any humanoid form), major image\n3/day each: charm person, mirror image, scrying, suggestion\n1/day: geas" }
        ],
        actions: [
            { name: "Multiattack", description: "The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage." },
            { name: "Dagger", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage." },
            { name: "Intoxicating Touch", description: "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks." }
        ],
        source: "SRD"
    },
    {
        name: "Lemure",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 7,
        hp: 13,
        hpDice: "3d8",
        speed: "15 ft.",
        str: 10, dex: 5, con: 11, int: 1, wis: 11, cha: 3,
        resistances: ["cold"],
        immunities: ["fire", "poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: "darkvision 120 ft., passive Perception 10",
        languages: "understands Infernal but can't speak",
        cr: "0",
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the lemure's darkvision." },
            { name: "Hellish Rejuvenation", description: "A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature or its remains are sprinkled with holy water." }
        ],
        actions: [
            { name: "Fist", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Lion",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 26,
        hpDice: "4d10+4",
        speed: "50 ft.",
        str: 17, dex: 15, con: 13, int: 3, wis: 12, cha: 8,
        skills: ["Perception +3", "Stealth +6"],
        senses: "passive Perception 13",
        languages: "-",
        cr: "1",
        traits: [
            { name: "Keen Smell", description: "The lion has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pack Tactics", description: "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Pounce", description: "If the lion moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action." },
            { name: "Running Leap", description: "With a 10-foot running start, the lion can long jump up to 25 feet." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Lizard",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 2,
        hpDice: "1d4",
        speed: "20 ft., climb 20 ft.",
        str: 2, dex: 11, con: 10, int: 1, wis: 8, cha: 3,
        senses: "darkvision 30 ft., passive Perception 9",
        languages: "-",
        cr: "0",
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Lizardfolk",
        size: "medium",
        type: "humanoid",
        subtype: "lizardfolk",
        alignment: "neutral",
        ac: 15,
        acType: "natural armor, shield",
        hp: 22,
        hpDice: "4d8+4",
        speed: "30 ft., swim 30 ft.",
        str: 15, dex: 10, con: 13, int: 7, wis: 12, cha: 7,
        skills: ["Perception +3", "Stealth +4", "Survival +5"],
        senses: "passive Perception 13",
        languages: "Draconic",
        cr: "0.5",
        traits: [
            { name: "Hold Breath", description: "The lizardfolk can hold its breath for 15 minutes." }
        ],
        actions: [
            { name: "Multiattack", description: "The lizardfolk makes two melee attacks, each one with a different weapon." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
            { name: "Heavy Club", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
            { name: "Spiked Shield", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Mage",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 40,
        hpDice: "9d8",
        speed: "30 ft.",
        str: 9, dex: 14, con: 11, int: 17, wis: 12, cha: 11,
        saves: ["Int +6", "Wis +4"],
        skills: ["Arcana +6", "History +6"],
        senses: "passive Perception 11",
        languages: "any four languages",
        cr: "6",
        traits: [
            { name: "Spellcasting", description: "The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The mage has the following wizard spells prepared:\nCantrips (at will): fire bolt, light, mage hand, prestidigitation\n1st level (4 slots): detect magic, mage armor, magic missile, shield\n2nd level (3 slots): misty step, suggestion\n3rd level (3 slots): counterspell, fireball, fly\n4th level (3 slots): greater invisibility, ice storm\n5th level (1 slot): cone of cold" }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Magma Mephit",
        size: "small",
        type: "elemental",
        alignment: "neutral evil",
        ac: 11,
        hp: 22,
        hpDice: "5d6+5",
        speed: "30 ft., fly 30 ft.",
        str: 8, dex: 12, con: 12, int: 7, wis: 10, cha: 10,
        skills: ["Stealth +3"],
        vulnerabilities: ["cold"],
        immunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Ignan, Terran",
        cr: "0.5",
        traits: [
            { name: "Death Burst", description: "When the mephit dies, it explodes in a burst of lava. Each creature within 5 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one." },
            { name: "False Appearance", description: "While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma." },
            { name: "Innate Spellcasting (1/Day)", description: "The mephit can innately cast heat metal (spell save DC 10), requiring no material components. Its innate spellcasting ability is Charisma." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) fire damage." },
            { name: "Fire Breath (Recharge 6)", description: "The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Magmin",
        size: "small",
        type: "elemental",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "natural armor",
        hp: 9,
        hpDice: "2d6+2",
        speed: "30 ft.",
        str: 7, dex: 15, con: 12, int: 8, wis: 11, cha: 10,
        resistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["fire"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Ignan",
        cr: "0.5",
        traits: [
            { name: "Death Burst", description: "When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited." },
            { name: "Ignited Illumination", description: "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Touch", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d6) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns." }
        ],
        source: "SRD"
    },
    {
        name: "Mammoth",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 126,
        hpDice: "11d12+55",
        speed: "40 ft.",
        str: 24, dex: 9, con: 21, int: 3, wis: 11, cha: 6,
        senses: "passive Perception 10",
        languages: "-",
        cr: "6",
        traits: [
            { name: "Trampling Charge", description: "If the mammoth moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8 + 7) piercing damage." },
            { name: "Stomp", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: 29 (4d10 + 7) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Marilith",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 189,
        hpDice: "18d10+90",
        speed: "40 ft.",
        str: 18, dex: 20, con: 20, int: 18, wis: 16, cha: 20,
        saves: ["Str +9", "Con +10", "Wis +8", "Cha +10"],
        resistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: "truesight 120 ft., passive Perception 13",
        languages: "Abyssal, telepathy 120 ft.",
        cr: "16",
        traits: [
            { name: "Magic Resistance", description: "The marilith has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The marilith's weapon attacks are magical." },
            { name: "Reactive", description: "The marilith can take one reaction on every turn in a combat." }
        ],
        actions: [
            { name: "Multiattack", description: "The marilith makes seven attacks: six with its longswords and one with its tail." },
            { name: "Longsword", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 15 (2d10 + 4) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets." },
            { name: "Teleport", description: "The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." }
        ],
        reactions: [
            { name: "Parry", description: "The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon." }
        ],
        source: "SRD"
    },
    {
        name: "Mastiff",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 5,
        hpDice: "1d8+1",
        speed: "40 ft.",
        str: 13, dex: 14, con: 12, int: 3, wis: 12, cha: 7,
        skills: ["Perception +3"],
        senses: "passive Perception 13",
        languages: "-",
        cr: "0.125",
        traits: [
            { name: "Keen Hearing and Smell", description: "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." }
        ],
        source: "SRD"
    },
    {
        name: "Merfolk",
        size: "medium",
        type: "humanoid",
        subtype: "merfolk",
        alignment: "neutral",
        ac: 11,
        hp: 11,
        hpDice: "2d8+2",
        speed: "10 ft., swim 40 ft.",
        str: 10, dex: 13, con: 12, int: 11, wis: 11, cha: 12,
        skills: ["Perception +2"],
        senses: "passive Perception 12",
        languages: "Aquan, Common",
        cr: "0.125",
        traits: [
            { name: "Amphibious", description: "The merfolk can breathe air and water." }
        ],
        actions: [
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 3 (1d6) piercing damage, or 4 (1d8) piercing damage if used with two hands to make a melee attack." }
        ],
        source: "SRD"
    },
    {
        name: "Merrow",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 45,
        hpDice: "6d10+12",
        speed: "10 ft., swim 40 ft.",
        str: 18, dex: 10, con: 15, int: 8, wis: 10, cha: 9,
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Abyssal, Aquan",
        cr: "2",
        traits: [
            { name: "Amphibious", description: "The merrow can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The merrow makes two attacks: one with its bite and one with its claws or harpoon." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) slashing damage." },
            { name: "Harpoon", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow." }
        ],
        source: "SRD"
    },
    {
        name: "Minotaur Skeleton",
        size: "large",
        type: "undead",
        alignment: "lawful evil",
        ac: 12,
        acType: "natural armor",
        hp: 67,
        hpDice: "9d10+18",
        speed: "40 ft.",
        str: 18, dex: 11, con: 15, int: 6, wis: 8, cha: 5,
        vulnerabilities: ["bludgeoning"],
        immunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: "darkvision 60 ft., passive Perception 9",
        languages: "understands Abyssal but can't speak",
        cr: "2",
        traits: [
            { name: "Charge", description: "If the skeleton moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone." }
        ],
        actions: [
            { name: "Greataxe", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage." },
            { name: "Gore", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Mule",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 11,
        hpDice: "2d8+2",
        speed: "40 ft.",
        str: 14, dex: 10, con: 13, int: 2, wis: 10, cha: 5,
        senses: "passive Perception 10",
        languages: "-",
        cr: "0.125",
        traits: [
            { name: "Beast of Burden", description: "The mule is considered to be a Large animal for the purpose of determining its carrying capacity." },
            { name: "Sure-Footed", description: "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone." }
        ],
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Mummy Lord",
        size: "medium",
        type: "undead",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 97,
        hpDice: "13d8+39",
        speed: "20 ft.",
        str: 18, dex: 10, con: 17, int: 11, wis: 18, cha: 16,
        saves: ["Con +8", "Int +5", "Wis +9", "Cha +8"],
        skills: ["History +5", "Religion +5"],
        vulnerabilities: ["fire"],
        immunities: ["necrotic", "poison", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "the languages it knew in life",
        cr: "15",
        traits: [
            { name: "Magic Resistance", description: "The mummy lord has advantage on saving throws against spells and other magical effects." },
            { name: "Rejuvenation", description: "A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again. The new body appears within 5 feet of the mummy lord's heart." },
            { name: "Spellcasting", description: "The mummy lord is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). The mummy lord has the following cleric spells prepared:\nCantrips (at will): sacred flame, thaumaturgy\n1st level (4 slots): command, guiding bolt, shield of faith\n2nd level (3 slots): hold person, silence, spiritual weapon\n3rd level (3 slots): animate dead, dispel magic\n4th level (3 slots): divination, guardian of faith\n5th level (2 slots): contagion, insect plague\n6th level (1 slot): harm" }
        ],
        actions: [
            { name: "Multiattack", description: "The mummy can use its Dreadful Glare and makes one attack with its rotting fist." },
            { name: "Rotting Fist", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic." },
            { name: "Dreadful Glare", description: "The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours." }
        ],
        legendaryActions: [
            { name: "Attack", description: "The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare." },
            { name: "Blinding Dust", description: "Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving throw or be blinded until the end of the creature's next turn." },
            { name: "Blasphemous Word (Costs 2 Actions)", description: "The mummy lord utters a blasphemous word. Each non-undead creature within 10 feet of the mummy lord that can hear the magical utterance must succeed on a DC 16 Constitution saving throw or be stunned until the end of the mummy lord's next turn." },
            { name: "Channel Negative Energy (Costs 2 Actions)", description: "The mummy lord magically unleashes negative energy. Creatures within 60 feet of the mummy lord, including ones behind barriers and around corners, can't regain hit points until the end of the mummy lord's next turn." },
            { name: "Whirlwind of Sand (Costs 2 Actions)", description: "The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can't be grappled, petrified, knocked prone, restrained, or stunned. Equipment worn or carried by the mummy lord remain in its possession." }
        ],
        source: "SRD"
    }
];

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.SRDMonsters5 = SRDMonsters5;
}
