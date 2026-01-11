// SRD 5.2 Monster Data - Part 6a (N-R)
const SRDMonsters6a = [
    {
        name: "Noble",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 15,
        acType: "breastplate",
        hp: 9,
        hpDice: "2d8",
        speed: "30 ft.",
        str: 11, dex: 12, con: 11, int: 12, wis: 14, cha: 16,
        skills: ["Deception +5", "Insight +4", "Persuasion +5"],
        senses: "passive Perception 12",
        languages: "any two languages",
        cr: "0.125",
        actions: [
            { name: "Rapier", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage." }
        ],
        reactions: [
            { name: "Parry", description: "The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon." }
        ],
        source: "SRD"
    },
    {
        name: "Ochre Jelly",
        size: "large",
        type: "ooze",
        alignment: "unaligned",
        ac: 8,
        hp: 45,
        hpDice: "6d10+12",
        speed: "10 ft., climb 10 ft.",
        str: 15, dex: 6, con: 14, int: 2, wis: 6, cha: 1,
        resistances: ["acid"],
        immunities: ["lightning", "slashing"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 8",
        languages: "-",
        cr: "2",
        traits: [
            { name: "Amorphous", description: "The jelly can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Spider Climb", description: "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) bludgeoning damage plus 3 (1d6) acid damage." }
        ],
        reactions: [
            { name: "Split", description: "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly." }
        ],
        source: "SRD"
    },
    {
        name: "Ogre Zombie",
        size: "large",
        type: "undead",
        alignment: "neutral evil",
        ac: 8,
        hp: 85,
        hpDice: "9d10+36",
        speed: "30 ft.",
        str: 19, dex: 6, con: 18, int: 3, wis: 6, cha: 5,
        saves: ["Wis +0"],
        immunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: "darkvision 60 ft., passive Perception 8",
        languages: "understands Common and Giant but can't speak",
        cr: "2",
        traits: [
            { name: "Undead Fortitude", description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead." }
        ],
        actions: [
            { name: "Morningstar", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Oni",
        size: "large",
        type: "giant",
        alignment: "lawful evil",
        ac: 16,
        acType: "chain mail",
        hp: 110,
        hpDice: "13d10+39",
        speed: "30 ft., fly 30 ft.",
        str: 19, dex: 11, con: 16, int: 14, wis: 12, cha: 15,
        saves: ["Dex +3", "Con +6", "Wis +4", "Cha +5"],
        skills: ["Arcana +5", "Deception +8", "Perception +4"],
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "Common, Giant",
        cr: "7",
        traits: [
            { name: "Innate Spellcasting", description: "The oni's innate spellcasting ability is Charisma (spell save DC 13). The oni can innately cast the following spells, requiring no material components:\nAt will: darkness, invisibility\n1/day each: charm person, cone of cold, gaseous form, sleep" },
            { name: "Magic Weapons", description: "The oni's weapon attacks are magical." },
            { name: "Regeneration", description: "The oni regains 10 hit points at the start of its turn if it has at least 1 hit point." }
        ],
        actions: [
            { name: "Multiattack", description: "The oni makes two attacks, either with its claws or its glaive." },
            { name: "Claw (Oni Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage." },
            { name: "Glaive", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form." },
            { name: "Change Shape", description: "The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size." }
        ],
        source: "SRD"
    },
    {
        name: "Otyugh",
        size: "large",
        type: "aberration",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hpDice: "12d10+48",
        speed: "30 ft.",
        str: 16, dex: 11, con: 19, int: 6, wis: 13, cha: 6,
        saves: ["Con +7"],
        senses: "darkvision 120 ft., passive Perception 11",
        languages: "Otyugh",
        cr: "5",
        traits: [
            { name: "Limited Telepathy", description: "The otyugh can magically transmit simple messages and images to any creature within 120 feet of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond." }
        ],
        actions: [
            { name: "Multiattack", description: "The otyugh makes three attacks: one with its bite and two with its tentacles." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) piercing damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured." },
            { name: "Tentacle", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target." },
            { name: "Tentacle Slam", description: "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6 + 3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned." }
        ],
        source: "SRD"
    },
    {
        name: "Owl",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 1,
        hpDice: "1d4-1",
        speed: "5 ft., fly 60 ft.",
        str: 3, dex: 13, con: 8, int: 2, wis: 12, cha: 7,
        skills: ["Perception +3", "Stealth +3"],
        senses: "darkvision 120 ft., passive Perception 13",
        languages: "-",
        cr: "0",
        traits: [
            { name: "Flyby", description: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach." },
            { name: "Keen Hearing and Sight", description: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight." }
        ],
        actions: [
            { name: "Talons", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Panther",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 13,
        hpDice: "3d8",
        speed: "50 ft., climb 40 ft.",
        str: 14, dex: 15, con: 10, int: 3, wis: 14, cha: 7,
        skills: ["Perception +4", "Stealth +6"],
        senses: "passive Perception 14",
        languages: "-",
        cr: "0.25",
        traits: [
            { name: "Keen Smell", description: "The panther has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pounce", description: "If the panther moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Pegasus",
        size: "large",
        type: "celestial",
        alignment: "chaotic good",
        ac: 12,
        hp: 59,
        hpDice: "7d10+21",
        speed: "60 ft., fly 90 ft.",
        str: 18, dex: 15, con: 16, int: 10, wis: 15, cha: 13,
        saves: ["Dex +4", "Wis +4", "Cha +3"],
        skills: ["Perception +6"],
        senses: "passive Perception 16",
        languages: "understands Celestial, Common, Elvish, and Sylvan but can't speak",
        cr: "2",
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Phase Spider",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 32,
        hpDice: "5d10+5",
        speed: "30 ft., climb 30 ft.",
        str: 15, dex: 15, con: 12, int: 6, wis: 10, cha: 6,
        skills: ["Stealth +6"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "-",
        cr: "3",
        traits: [
            { name: "Ethereal Jaunt", description: "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa." },
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ],
        source: "SRD"
    },
    {
        name: "Pit Fiend",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 300,
        hpDice: "24d10+168",
        speed: "30 ft., fly 60 ft.",
        str: 26, dex: 14, con: 24, int: 22, wis: 18, cha: 24,
        saves: ["Dex +8", "Con +13", "Wis +10"],
        resistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        immunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: "truesight 120 ft., passive Perception 14",
        languages: "Infernal, telepathy 120 ft.",
        cr: "20",
        traits: [
            { name: "Fear Aura", description: "Any creature hostile to the pit fiend that starts its turn within 20 feet of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the pit fiend's Fear Aura for the next 24 hours." },
            { name: "Magic Resistance", description: "The pit fiend has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The pit fiend's weapon attacks are magical." },
            { name: "Innate Spellcasting", description: "The pit fiend's spellcasting ability is Charisma (spell save DC 21). The pit fiend can innately cast the following spells, requiring no material components:\nAt will: detect magic, fireball\n3/day each: hold monster, wall of fire" }
        ],
        actions: [
            { name: "Multiattack", description: "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) piercing damage. The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Claw", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 17 (2d8 + 8) slashing damage." },
            { name: "Mace", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) bludgeoning damage plus 21 (6d6) fire damage." },
            { name: "Tail", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 24 (3d10 + 8) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Planetar",
        size: "large",
        type: "celestial",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 200,
        hpDice: "16d10+112",
        speed: "40 ft., fly 120 ft.",
        str: 24, dex: 20, con: 24, int: 19, wis: 22, cha: 25,
        saves: ["Con +12", "Wis +11", "Cha +12"],
        skills: ["Perception +11"],
        resistances: ["radiant", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened"],
        senses: "truesight 120 ft., passive Perception 21",
        languages: "all, telepathy 120 ft.",
        cr: "16",
        traits: [
            { name: "Angelic Weapons", description: "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack)." },
            { name: "Divine Awareness", description: "The planetar knows if it hears a lie." },
            { name: "Innate Spellcasting", description: "The planetar's spellcasting ability is Charisma (spell save DC 20). The planetar can innately cast the following spells, requiring no material components:\nAt will: detect evil and good, invisibility (self only)\n3/day each: blade barrier, dispel evil and good, flame strike, raise dead\n1/day each: commune, control weather, insect plague" },
            { name: "Magic Resistance", description: "The planetar has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The planetar makes two melee attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6 + 7) slashing damage plus 22 (5d8) radiant damage." },
            { name: "Healing Touch (4/Day)", description: "The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness." }
        ],
        source: "SRD"
    },
    {
        name: "Plesiosaurus",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 68,
        hpDice: "8d10+24",
        speed: "20 ft., swim 40 ft.",
        str: 18, dex: 15, con: 16, int: 2, wis: 12, cha: 5,
        skills: ["Perception +3", "Stealth +4"],
        senses: "passive Perception 13",
        languages: "-",
        cr: "2",
        traits: [
            { name: "Hold Breath", description: "The plesiosaurus can hold its breath for 1 hour." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Poisonous Snake",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 2,
        hpDice: "1d4",
        speed: "30 ft., swim 30 ft.",
        str: 2, dex: 16, con: 11, int: 1, wis: 10, cha: 3,
        senses: "blindsight 10 ft., passive Perception 10",
        languages: "-",
        cr: "0.125",
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Polar Bear",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 42,
        hpDice: "5d10+15",
        speed: "40 ft., swim 30 ft.",
        str: 20, dex: 10, con: 16, int: 2, wis: 13, cha: 7,
        skills: ["Perception +3"],
        senses: "passive Perception 13",
        languages: "-",
        cr: "2",
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Pony",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 11,
        hpDice: "2d8+2",
        speed: "40 ft.",
        str: 15, dex: 10, con: 13, int: 2, wis: 11, cha: 7,
        senses: "passive Perception 10",
        languages: "-",
        cr: "0.125",
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Priest",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 13,
        acType: "chain shirt",
        hp: 27,
        hpDice: "5d8+5",
        speed: "30 ft.",
        str: 10, dex: 10, con: 12, int: 13, wis: 16, cha: 13,
        skills: ["Medicine +7", "Persuasion +3", "Religion +4"],
        senses: "passive Perception 13",
        languages: "any two languages",
        cr: "2",
        traits: [
            { name: "Divine Eminence", description: "As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st." },
            { name: "Spellcasting", description: "The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The priest has the following cleric spells prepared:\nCantrips (at will): light, sacred flame, thaumaturgy\n1st level (4 slots): cure wounds, guiding bolt, sanctuary\n2nd level (3 slots): lesser restoration, spiritual weapon\n3rd level (2 slots): dispel magic, spirit guardians" }
        ],
        actions: [
            { name: "Mace", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Pseudodragon",
        size: "tiny",
        type: "dragon",
        alignment: "neutral good",
        ac: 13,
        acType: "natural armor",
        hp: 7,
        hpDice: "2d4+2",
        speed: "15 ft., fly 60 ft.",
        str: 6, dex: 15, con: 13, int: 10, wis: 12, cha: 10,
        skills: ["Perception +3", "Stealth +4"],
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 13",
        languages: "understands Common and Draconic but can't speak",
        cr: "0.25",
        traits: [
            { name: "Keen Senses", description: "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell." },
            { name: "Magic Resistance", description: "The pseudodragon has advantage on saving throws against spells and other magical effects." },
            { name: "Limited Telepathy", description: "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can understand a language." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage." },
            { name: "Sting", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake." }
        ],
        source: "SRD"
    },
    {
        name: "Purple Worm",
        size: "gargantuan",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 18,
        acType: "natural armor",
        hp: 247,
        hpDice: "15d20+90",
        speed: "50 ft., burrow 30 ft.",
        str: 28, dex: 7, con: 22, int: 1, wis: 8, cha: 4,
        saves: ["Con +11", "Wis +4"],
        senses: "blindsight 30 ft., tremorsense 60 ft., passive Perception 9",
        languages: "-",
        cr: "15",
        traits: [
            { name: "Tunneler", description: "The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake." }
        ],
        actions: [
            { name: "Multiattack", description: "The worm makes two attacks: one with its bite and one with its stinger." },
            { name: "Bite", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 22 (3d8 + 9) piercing damage. If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns. If the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone." },
            { name: "Tail Stinger", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one creature. Hit: 19 (3d6 + 9) piercing damage, and the target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Quasit",
        size: "tiny",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 13,
        hp: 7,
        hpDice: "3d4",
        speed: "40 ft.",
        str: 5, dex: 17, con: 10, int: 7, wis: 10, cha: 10,
        skills: ["Stealth +5"],
        resistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: "darkvision 120 ft., passive Perception 10",
        languages: "Abyssal, Common",
        cr: "1",
        traits: [
            { name: "Shapechanger", description: "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft., fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Magic Resistance", description: "The quasit has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Claws (Bite in Beast Form)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Scare (1/Day)", description: "One creature of the quasit's choice within 20 feet of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success." },
            { name: "Invisibility", description: "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it." }
        ],
        source: "SRD"
    },
    {
        name: "Rakshasa",
        size: "medium",
        type: "fiend",
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 110,
        hpDice: "13d8+52",
        speed: "40 ft.",
        str: 14, dex: 17, con: 18, int: 13, wis: 16, cha: 20,
        skills: ["Deception +10", "Insight +8"],
        vulnerabilities: ["piercing from magic weapons wielded by good creatures"],
        immunities: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "Common, Infernal",
        cr: "13",
        traits: [
            { name: "Limited Magic Immunity", description: "The rakshasa can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects." },
            { name: "Innate Spellcasting", description: "The rakshasa's innate spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). The rakshasa can innately cast the following spells, requiring no material components:\nAt will: detect thoughts, disguise self, mage hand, minor illusion\n3/day each: charm person, detect magic, invisibility, major image, suggestion\n1/day each: dominate person, fly, plane shift, true seeing" }
        ],
        actions: [
            { name: "Multiattack", description: "The rakshasa makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage, and the target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target's thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic." }
        ],
        source: "SRD"
    },
    {
        name: "Rat",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 1,
        hpDice: "1d4-1",
        speed: "20 ft.",
        str: 2, dex: 11, con: 9, int: 2, wis: 10, cha: 4,
        senses: "darkvision 30 ft., passive Perception 10",
        languages: "-",
        cr: "0",
        traits: [
            { name: "Keen Smell", description: "The rat has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Raven",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 1,
        hpDice: "1d4-1",
        speed: "10 ft., fly 50 ft.",
        str: 2, dex: 14, con: 8, int: 2, wis: 12, cha: 6,
        skills: ["Perception +3"],
        senses: "passive Perception 13",
        languages: "-",
        cr: "0",
        traits: [
            { name: "Mimicry", description: "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check." }
        ],
        actions: [
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Red Dragon Wyrmling",
        size: "medium",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 75,
        hpDice: "10d8+30",
        speed: "30 ft., climb 30 ft., fly 60 ft.",
        str: 19, dex: 10, con: 17, int: 12, wis: 11, cha: 15,
        saves: ["Dex +2", "Con +5", "Wis +2", "Cha +4"],
        skills: ["Perception +4", "Stealth +2"],
        immunities: ["fire"],
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
        languages: "Draconic",
        cr: "4",
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage plus 3 (1d6) fire damage." },
            { name: "Fire Breath (Recharge 5-6)", description: "The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Reef Shark",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hpDice: "4d8+4",
        speed: "0 ft., swim 40 ft.",
        str: 14, dex: 13, con: 13, int: 1, wis: 10, cha: 4,
        skills: ["Perception +2"],
        senses: "blindsight 30 ft., passive Perception 12",
        languages: "-",
        cr: "0.5",
        traits: [
            { name: "Pack Tactics", description: "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Water Breathing", description: "The shark can breathe only underwater." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Remorhaz",
        size: "huge",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 195,
        hpDice: "17d12+85",
        speed: "30 ft., burrow 20 ft.",
        str: 24, dex: 13, con: 21, int: 4, wis: 10, cha: 5,
        immunities: ["cold", "fire"],
        senses: "darkvision 60 ft., tremorsense 60 ft., passive Perception 10",
        languages: "-",
        cr: "11",
        traits: [
            { name: "Heated Body", description: "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 40 (6d10 + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target." },
            { name: "Swallow", description: "The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage plus 21 (6d6) fire damage at the start of each of the remorhaz's turns. If the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone." }
        ],
        source: "SRD"
    },
    {
        name: "Rhinoceros",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 45,
        hpDice: "6d10+12",
        speed: "40 ft.",
        str: 21, dex: 8, con: 15, int: 2, wis: 12, cha: 6,
        senses: "passive Perception 11",
        languages: "-",
        cr: "2",
        traits: [
            { name: "Charge", description: "If the rhinoceros moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Riding Horse",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 13,
        hpDice: "2d10+2",
        speed: "60 ft.",
        str: 16, dex: 10, con: 12, int: 2, wis: 11, cha: 7,
        senses: "passive Perception 10",
        languages: "-",
        cr: "0.25",
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Roc",
        size: "gargantuan",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 248,
        hpDice: "16d20+80",
        speed: "20 ft., fly 120 ft.",
        str: 28, dex: 10, con: 20, int: 3, wis: 10, cha: 9,
        saves: ["Dex +4", "Con +9", "Wis +4", "Cha +3"],
        skills: ["Perception +4"],
        senses: "passive Perception 14",
        languages: "-",
        cr: "11",
        traits: [
            { name: "Keen Sight", description: "The roc has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The roc makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 27 (4d8 + 9) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (4d6 + 9) slashing damage, and the target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the roc can't use its talons on another target." }
        ],
        source: "SRD"
    },
    {
        name: "Roper",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 20,
        acType: "natural armor",
        hp: 93,
        hpDice: "11d10+33",
        speed: "10 ft., climb 10 ft.",
        str: 18, dex: 8, con: 17, int: 7, wis: 16, cha: 6,
        skills: ["Perception +6", "Stealth +5"],
        senses: "darkvision 60 ft., passive Perception 16",
        languages: "-",
        cr: "5",
        traits: [
            { name: "False Appearance", description: "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite." },
            { name: "Grasping Tendrils", description: "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a DC 15 Strength check against it." },
            { name: "Spider Climb", description: "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The roper makes four tendril attacks, then uses Reel." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d8 + 4) piercing damage." },
            { name: "Tendril", description: "Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. Hit: The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target." },
            { name: "Reel", description: "The roper pulls each creature grappled by it up to 25 feet straight toward it." }
        ],
        source: "SRD"
    },
    {
        name: "Rug of Smothering",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 12,
        hp: 33,
        hpDice: "6d10",
        speed: "10 ft.",
        str: 17, dex: 14, con: 10, int: 1, wis: 3, cha: 1,
        immunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 6",
        languages: "-",
        cr: "2",
        traits: [
            { name: "Antimagic Susceptibility", description: "The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute." },
            { name: "Damage Transfer", description: "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half." },
            { name: "False Appearance", description: "While the rug remains motionless, it is indistinguishable from a normal rug." }
        ],
        actions: [
            { name: "Smother", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6 + 3) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Rust Monster",
        size: "medium",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 27,
        hpDice: "5d8+5",
        speed: "40 ft.",
        str: 13, dex: 12, con: 13, int: 2, wis: 13, cha: 6,
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "-",
        cr: "0.5",
        traits: [
            { name: "Iron Scent", description: "The rust monster can pinpoint, by scent, the location of ferrous metal within 30 feet of it." },
            { name: "Rust Metal", description: "Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the rust monster is destroyed after dealing damage." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage." },
            { name: "Antennae", description: "The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster's touch. If the object touched is either metal armor or a metal shield being worn or carried, its takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait." }
        ],
        source: "SRD"
    }
];

if (typeof window !== 'undefined') { window.SRDMonsters6a = SRDMonsters6a; }
