// SRD 5.2 Monster Data - Part 4a (A-C creatures)
const SRDMonsters4a = [
    {
        name: "Acolyte",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 10,
        hp: 9,
        hpDice: "2d8",
        speed: "30 ft.",
        str: 10, dex: 10, con: 10, int: 10, wis: 14, cha: 11,
        skills: ["Medicine +4", "Religion +2"],
        senses: "passive Perception 12",
        languages: "any one language (usually Common)",
        cr: "0.25",
        traits: [
            { name: "Spellcasting", description: "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has the following cleric spells prepared: Cantrips (at will): light, sacred flame, thaumaturgy. 1st level (3 slots): bless, cure wounds, sanctuary." }
        ],
        actions: [
            { name: "Club", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Archmage",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 99,
        hpDice: "18d8+18",
        speed: "30 ft.",
        str: 10, dex: 14, con: 12, int: 20, wis: 15, cha: 16,
        saves: ["Int +9", "Wis +6"],
        skills: ["Arcana +13", "History +13"],
        resistances: ["damage from spells; nonmagical bludgeoning, piercing, and slashing (from stoneskin)"],
        senses: "passive Perception 12",
        languages: "any six languages",
        cr: "12",
        traits: [
            { name: "Magic Resistance", description: "The archmage has advantage on saving throws against spells and other magical effects." },
            { name: "Spellcasting", description: "The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared: Cantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking grasp. 1st level (4 slots): detect magic, identify, mage armor, magic missile. 2nd level (3 slots): detect thoughts, mirror image, misty step. 3rd level (3 slots): counterspell, fly, lightning bolt. 4th level (3 slots): banishment, fire shield, stoneskin. 5th level (3 slots): cone of cold, scrying, wall of force. 6th level (1 slot): globe of invulnerability. 7th level (1 slot): teleport. 8th level (1 slot): mind blank. 9th level (1 slot): time stop." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Adult Brass Dragon",
        size: "huge",
        type: "dragon",
        alignment: "chaotic good",
        ac: 18,
        acType: "natural armor",
        hp: 172,
        hpDice: "15d12+75",
        speed: "40 ft., burrow 30 ft., fly 80 ft.",
        str: 23, dex: 10, con: 21, int: 14, wis: 13, cha: 17,
        saves: ["Dex +5", "Con +10", "Wis +6", "Cha +8"],
        skills: ["History +7", "Perception +11", "Persuasion +8", "Stealth +5"],
        immunities: ["fire"],
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
        languages: "Common, Draconic",
        cr: "13",
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons. Fire Breath: The dragon exhales fire in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one. Sleep Breath: The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
        ],
        source: "SRD"
    },
    {
        name: "Adult Bronze Dragon",
        size: "huge",
        type: "dragon",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 212,
        hpDice: "17d12+102",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        str: 25, dex: 10, con: 23, int: 16, wis: 15, cha: 19,
        saves: ["Dex +5", "Con +11", "Wis +7", "Cha +9"],
        skills: ["Insight +7", "Perception +12", "Stealth +5"],
        immunities: ["lightning"],
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
        languages: "Common, Draconic",
        cr: "15",
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons. Lightning Breath: The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one. Repulsion Breath: The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
        ],
        source: "SRD"
    },
    {
        name: "Adult Copper Dragon",
        size: "huge",
        type: "dragon",
        alignment: "chaotic good",
        ac: 18,
        acType: "natural armor",
        hp: 184,
        hpDice: "16d12+80",
        speed: "40 ft., climb 40 ft., fly 80 ft.",
        str: 23, dex: 12, con: 21, int: 18, wis: 15, cha: 17,
        saves: ["Dex +6", "Con +10", "Wis +7", "Cha +8"],
        skills: ["Deception +8", "Perception +12", "Stealth +6"],
        immunities: ["acid"],
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
        languages: "Common, Draconic",
        cr: "14",
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons. Acid Breath: The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one. Slowing Breath: The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
        ],
        source: "SRD"
    },
    {
        name: "Adult Gold Dragon",
        size: "huge",
        type: "dragon",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 256,
        hpDice: "19d12+133",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        str: 27, dex: 14, con: 25, int: 16, wis: 15, cha: 24,
        saves: ["Dex +8", "Con +13", "Wis +8", "Cha +13"],
        skills: ["Insight +8", "Perception +14", "Persuasion +13", "Stealth +8"],
        immunities: ["fire"],
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 24",
        languages: "Common, Draconic",
        cr: "17",
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons. Fire Breath: The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one. Weakening Breath: The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
        ],
        source: "SRD"
    },
    {
        name: "Adult Silver Dragon",
        size: "huge",
        type: "dragon",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 243,
        hpDice: "18d12+126",
        speed: "40 ft., fly 80 ft.",
        str: 27, dex: 10, con: 25, int: 16, wis: 13, cha: 21,
        saves: ["Dex +5", "Con +12", "Wis +6", "Cha +10"],
        skills: ["Arcana +8", "History +8", "Perception +11", "Stealth +5"],
        immunities: ["cold"],
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
        languages: "Common, Draconic",
        cr: "16",
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons. Cold Breath: The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one. Paralyzing Breath: The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 21 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
        ],
        source: "SRD"
    },
    {
        name: "Air Elemental",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 15,
        hp: 90,
        hpDice: "12d10+24",
        speed: "0 ft., fly 90 ft. (hover)",
        str: 14, dex: 20, con: 14, int: 6, wis: 10, cha: 6,
        resistances: ["lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Auran",
        cr: "5",
        traits: [
            { name: "Air Form", description: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage." },
            { name: "Whirlwind (Recharge 4-6)", description: "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone. If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone." }
        ],
        source: "SRD"
    },
    {
        name: "Androsphinx",
        size: "large",
        type: "monstrosity",
        alignment: "lawful neutral",
        ac: 17,
        acType: "natural armor",
        hp: 199,
        hpDice: "19d10+95",
        speed: "40 ft., fly 60 ft.",
        str: 22, dex: 10, con: 20, int: 16, wis: 18, cha: 23,
        saves: ["Dex +6", "Con +11", "Int +9", "Wis +10"],
        skills: ["Arcana +9", "Perception +10", "Religion +15"],
        immunities: ["psychic", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "frightened"],
        senses: "truesight 120 ft., passive Perception 20",
        languages: "Common, Sphinx",
        cr: "17",
        traits: [
            { name: "Inscrutable", description: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage." },
            { name: "Magic Weapons", description: "The sphinx's weapon attacks are magical." },
            { name: "Spellcasting", description: "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared: Cantrips (at will): sacred flame, spare the dying, thaumaturgy. 1st level (4 slots): command, detect evil and good, detect magic. 2nd level (3 slots): lesser restoration, zone of truth. 3rd level (3 slots): dispel magic, tongues. 4th level (3 slots): banishment, freedom of movement. 5th level (2 slots): flame strike, greater restoration. 6th level (1 slot): heroes' feast." }
        ],
        actions: [
            { name: "Multiattack", description: "The sphinx makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10 + 6) slashing damage." },
            { name: "Roar (3/Day)", description: "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw. First Roar: Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Second Roar: Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Third Roar: Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone." }
        ],
        legendaryActions: [
            { name: "Claw Attack", description: "The sphinx makes one claw attack." },
            { name: "Teleport (Costs 2 Actions)", description: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." },
            { name: "Cast a Spell (Costs 3 Actions)", description: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal." }
        ],
        source: "SRD"
    },
    {
        name: "Ankheg",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 39,
        hpDice: "6d10+6",
        speed: "30 ft., burrow 10 ft.",
        str: 17, dex: 11, con: 13, int: 1, wis: 13, cha: 6,
        senses: "darkvision 60 ft., tremorsense 60 ft., passive Perception 11",
        languages: "-",
        cr: "2",
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so." },
            { name: "Acid Spray (Recharge 6)", description: "The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Awakened Shrub",
        size: "small",
        type: "plant",
        alignment: "unaligned",
        ac: 9,
        hp: 10,
        hpDice: "3d6",
        speed: "20 ft.",
        str: 3, dex: 8, con: 11, int: 10, wis: 10, cha: 6,
        resistances: ["piercing"],
        vulnerabilities: ["fire"],
        senses: "passive Perception 10",
        languages: "one language known by its creator",
        cr: "0",
        traits: [
            { name: "False Appearance", description: "While the shrub remains motionless, it is indistinguishable from a normal shrub." }
        ],
        actions: [
            { name: "Rake", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Awakened Tree",
        size: "huge",
        type: "plant",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 59,
        hpDice: "7d12+14",
        speed: "20 ft.",
        str: 19, dex: 6, con: 15, int: 10, wis: 10, cha: 7,
        resistances: ["bludgeoning", "piercing"],
        vulnerabilities: ["fire"],
        senses: "passive Perception 10",
        languages: "one language known by its creator",
        cr: "2",
        traits: [
            { name: "False Appearance", description: "While the tree remains motionless, it is indistinguishable from a normal tree." }
        ],
        actions: [
            { name: "Slam", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Azer",
        size: "medium",
        type: "elemental",
        alignment: "lawful neutral",
        ac: 17,
        acType: "natural armor, shield",
        hp: 39,
        hpDice: "6d8+12",
        speed: "30 ft.",
        str: 17, dex: 12, con: 15, int: 12, wis: 13, cha: 10,
        saves: ["Con +4"],
        immunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: "passive Perception 11",
        languages: "Ignan",
        cr: "2",
        traits: [
            { name: "Heated Body", description: "A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage." },
            { name: "Heated Weapons", description: "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack)." },
            { name: "Illumination", description: "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Warhammer", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage." }
        ],
        source: "SRD"
    },
    {
        name: "Ape",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 19,
        hpDice: "3d8+6",
        speed: "30 ft., climb 30 ft.",
        str: 16, dex: 14, con: 14, int: 6, wis: 12, cha: 7,
        skills: ["Athletics +5", "Perception +3"],
        senses: "passive Perception 13",
        languages: "-",
        cr: "0.5",
        actions: [
            { name: "Multiattack", description: "The ape makes two fist attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Assassin",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 15,
        acType: "studded leather",
        hp: 78,
        hpDice: "12d8+24",
        speed: "30 ft.",
        str: 11, dex: 16, con: 14, int: 13, wis: 11, cha: 10,
        saves: ["Dex +6", "Int +4"],
        skills: ["Acrobatics +6", "Deception +3", "Perception +3", "Stealth +9"],
        resistances: ["poison"],
        senses: "passive Perception 13",
        languages: "Thieves' cant plus any two languages",
        cr: "8",
        traits: [
            { name: "Assassinate", description: "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit." },
            { name: "Evasion", description: "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Sneak Attack (1/Turn)", description: "The assassin deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll." }
        ],
        actions: [
            { name: "Multiattack", description: "The assassin makes two shortsword attacks." },
            { name: "Shortsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." },
            { name: "Light Crossbow", description: "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Bandit",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-lawful alignment",
        ac: 12,
        acType: "leather armor",
        hp: 11,
        hpDice: "2d8+2",
        speed: "30 ft.",
        str: 11, dex: 12, con: 12, int: 10, wis: 10, cha: 10,
        senses: "passive Perception 10",
        languages: "any one language (usually Common)",
        cr: "0.125",
        actions: [
            { name: "Scimitar", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage." },
            { name: "Light Crossbow", description: "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit: 5 (1d8 + 1) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Bandit Captain",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-lawful alignment",
        ac: 15,
        acType: "studded leather",
        hp: 65,
        hpDice: "10d8+20",
        speed: "30 ft.",
        str: 15, dex: 16, con: 14, int: 14, wis: 11, cha: 14,
        saves: ["Str +4", "Dex +5", "Wis +2"],
        skills: ["Athletics +4", "Deception +4"],
        senses: "passive Perception 10",
        languages: "any two languages",
        cr: "2",
        actions: [
            { name: "Multiattack", description: "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers." },
            { name: "Scimitar", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage." },
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage." }
        ],
        reactions: [
            { name: "Parry", description: "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon." }
        ],
        source: "SRD"
    },
    {
        name: "Bat",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 1,
        hpDice: "1d4-1",
        speed: "5 ft., fly 30 ft.",
        str: 2, dex: 15, con: 8, int: 2, wis: 12, cha: 4,
        senses: "blindsight 60 ft., passive Perception 11",
        languages: "-",
        cr: "0",
        traits: [
            { name: "Echolocation", description: "The bat can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The bat has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Berserker",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any chaotic alignment",
        ac: 13,
        acType: "hide armor",
        hp: 67,
        hpDice: "9d8+27",
        speed: "30 ft.",
        str: 16, dex: 12, con: 17, int: 9, wis: 11, cha: 9,
        senses: "passive Perception 10",
        languages: "any one language (usually Common)",
        cr: "2",
        traits: [
            { name: "Reckless", description: "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn." }
        ],
        actions: [
            { name: "Greataxe", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Black Bear",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 19,
        hpDice: "3d8+6",
        speed: "40 ft., climb 30 ft.",
        str: 15, dex: 10, con: 14, int: 2, wis: 12, cha: 7,
        skills: ["Perception +3"],
        senses: "passive Perception 13",
        languages: "-",
        cr: "0.5",
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Black Pudding",
        size: "large",
        type: "ooze",
        alignment: "unaligned",
        ac: 7,
        hp: 85,
        hpDice: "10d10+30",
        speed: "20 ft., climb 20 ft.",
        str: 16, dex: 5, con: 16, int: 1, wis: 6, cha: 1,
        immunities: ["acid", "cold", "lightning", "slashing"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 8",
        languages: "-",
        cr: "4",
        traits: [
            { name: "Amorphous", description: "The pudding can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Corrosive Form", description: "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round." },
            { name: "Spider Climb", description: "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10." }
        ],
        reactions: [
            { name: "Split", description: "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding." }
        ],
        source: "SRD"
    },
    {
        name: "Blink Dog",
        size: "medium",
        type: "fey",
        alignment: "lawful good",
        ac: 13,
        hp: 22,
        hpDice: "4d8+4",
        speed: "40 ft.",
        str: 12, dex: 17, con: 12, int: 10, wis: 13, cha: 11,
        skills: ["Perception +3", "Stealth +5"],
        senses: "passive Perception 13",
        languages: "Blink Dog, understands Sylvan but can't speak it",
        cr: "0.25",
        traits: [
            { name: "Keen Hearing and Smell", description: "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage." },
            { name: "Teleport (Recharge 4-6)", description: "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 feet to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack." }
        ],
        source: "SRD"
    },
    {
        name: "Boar",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 11,
        hpDice: "2d8+2",
        speed: "40 ft.",
        str: 13, dex: 11, con: 12, int: 2, wis: 9, cha: 5,
        senses: "passive Perception 9",
        languages: "-",
        cr: "0.25",
        traits: [
            { name: "Charge", description: "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." },
            { name: "Relentless (Recharges after a Short or Long Rest)", description: "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead." }
        ],
        actions: [
            { name: "Tusk", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Brown Bear",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 34,
        hpDice: "4d10+12",
        speed: "40 ft., climb 30 ft.",
        str: 19, dex: 10, con: 16, int: 2, wis: 13, cha: 7,
        skills: ["Perception +3"],
        senses: "passive Perception 13",
        languages: "-",
        cr: "1",
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Centaur",
        size: "large",
        type: "monstrosity",
        alignment: "neutral good",
        ac: 12,
        hp: 45,
        hpDice: "6d10+12",
        speed: "50 ft.",
        str: 18, dex: 14, con: 14, int: 9, wis: 13, cha: 11,
        skills: ["Athletics +6", "Perception +3", "Survival +3"],
        senses: "passive Perception 13",
        languages: "Elvish, Sylvan",
        cr: "2",
        traits: [
            { name: "Charge", description: "If the centaur moves at least 30 feet straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage." }
        ],
        actions: [
            { name: "Multiattack", description: "The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow." },
            { name: "Pike", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10 + 4) piercing damage." },
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Cat",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 2,
        hpDice: "1d4",
        speed: "40 ft., climb 30 ft.",
        str: 3, dex: 15, con: 10, int: 3, wis: 12, cha: 7,
        skills: ["Perception +3", "Stealth +4"],
        senses: "passive Perception 13",
        languages: "-",
        cr: "0",
        traits: [
            { name: "Keen Smell", description: "The cat has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Clay Golem",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 133,
        hpDice: "14d10+56",
        speed: "20 ft.",
        str: 20, dex: 9, con: 18, int: 3, wis: 8, cha: 1,
        immunities: ["acid", "poison", "psychic", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: "darkvision 60 ft., passive Perception 9",
        languages: "understands the languages of its creator but can't speak",
        cr: "9",
        traits: [
            { name: "Acid Absorption", description: "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt." },
            { name: "Berserk", description: "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points." },
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic." },
            { name: "Haste (Recharge 5-6)", description: "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action." }
        ],
        source: "SRD"
    },
    {
        name: "Copper Dragon Wyrmling",
        size: "medium",
        type: "dragon",
        alignment: "chaotic good",
        ac: 16,
        acType: "natural armor",
        hp: 22,
        hpDice: "4d8+4",
        speed: "30 ft., climb 30 ft., fly 60 ft.",
        str: 15, dex: 12, con: 13, int: 14, wis: 11, cha: 13,
        saves: ["Dex +3", "Con +3", "Wis +2", "Cha +3"],
        skills: ["Perception +4", "Stealth +3"],
        immunities: ["acid"],
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
        languages: "Draconic",
        cr: "1",
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons. Acid Breath: The dragon exhales acid in a 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful one. Slowing Breath: The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save." }
        ],
        source: "SRD"
    },
    {
        name: "Couatl",
        size: "medium",
        type: "celestial",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 97,
        hpDice: "13d8+39",
        speed: "30 ft., fly 90 ft.",
        str: 16, dex: 20, con: 17, int: 18, wis: 20, cha: 18,
        saves: ["Con +5", "Wis +7", "Cha +6"],
        resistances: ["radiant"],
        immunities: ["psychic", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: "truesight 120 ft., passive Perception 15",
        languages: "all, telepathy 120 ft.",
        cr: "4",
        traits: [
            { name: "Innate Spellcasting", description: "The couatl's spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbal components: At will: detect evil and good, detect magic, detect thoughts. 3/day each: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield. 1/day each: dream, greater restoration, scrying." },
            { name: "Magic Weapons", description: "The couatl's weapon attacks are magical." },
            { name: "Shielded Mind", description: "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake." },
            { name: "Constrict", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature. Hit: 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target." },
            { name: "Change Shape", description: "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice). In a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form." }
        ],
        source: "SRD"
    },
    {
        name: "Commoner",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 10,
        hp: 4,
        hpDice: "1d8",
        speed: "30 ft.",
        str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10,
        senses: "passive Perception 10",
        languages: "any one language (usually Common)",
        cr: "0",
        actions: [
            { name: "Club", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Crab",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 2,
        hpDice: "1d4",
        speed: "20 ft., swim 20 ft.",
        str: 2, dex: 11, con: 10, int: 1, wis: 8, cha: 2,
        skills: ["Stealth +2"],
        senses: "blindsight 30 ft., passive Perception 9",
        languages: "-",
        cr: "0",
        traits: [
            { name: "Amphibious", description: "The crab can breathe air and water." }
        ],
        actions: [
            { name: "Claw", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Crocodile",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 19,
        hpDice: "3d10+3",
        speed: "20 ft., swim 30 ft.",
        str: 15, dex: 10, con: 13, int: 2, wis: 10, cha: 5,
        skills: ["Stealth +2"],
        senses: "passive Perception 10",
        languages: "-",
        cr: "0.5",
        traits: [
            { name: "Hold Breath", description: "The crocodile can hold its breath for 15 minutes." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target." }
        ],
        source: "SRD"
    },
    {
        name: "Cult Fanatic",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 13,
        acType: "leather armor",
        hp: 33,
        hpDice: "6d8+6",
        speed: "30 ft.",
        str: 11, dex: 14, con: 12, int: 10, wis: 13, cha: 14,
        skills: ["Deception +4", "Persuasion +4", "Religion +2"],
        senses: "passive Perception 11",
        languages: "any one language (usually Common)",
        cr: "2",
        traits: [
            { name: "Dark Devotion", description: "The fanatic has advantage on saving throws against being charmed or frightened." },
            { name: "Spellcasting", description: "The fanatic is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following cleric spells prepared: Cantrips (at will): light, sacred flame, thaumaturgy. 1st level (4 slots): command, inflict wounds, shield of faith. 2nd level (3 slots): hold person, spiritual weapon." }
        ],
        actions: [
            { name: "Multiattack", description: "The fanatic makes two melee attacks." },
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 4 (1d4 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Cultist",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 12,
        acType: "leather armor",
        hp: 9,
        hpDice: "2d8",
        speed: "30 ft.",
        str: 11, dex: 12, con: 10, int: 10, wis: 11, cha: 10,
        skills: ["Deception +2", "Religion +2"],
        senses: "passive Perception 10",
        languages: "any one language (usually Common)",
        cr: "0.125",
        traits: [
            { name: "Dark Devotion", description: "The cultist has advantage on saving throws against being charmed or frightened." }
        ],
        actions: [
            { name: "Scimitar", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Chuul",
        size: "large",
        type: "aberration",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 93,
        hpDice: "11d10+33",
        speed: "30 ft., swim 30 ft.",
        str: 19, dex: 10, con: 16, int: 5, wis: 11, cha: 5,
        skills: ["Perception +4"],
        immunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "understands Deep Speech but can't speak",
        cr: "4",
        traits: [
            { name: "Amphibious", description: "The chuul can breathe air and water." },
            { name: "Sense Magic", description: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once." },
            { name: "Pincer", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled." },
            { name: "Tentacles", description: "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        source: "SRD"
    },
    {
        name: "Cyclops",
        size: "huge",
        type: "giant",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "natural armor",
        hp: 138,
        hpDice: "12d12+60",
        speed: "30 ft.",
        str: 22, dex: 11, con: 20, int: 8, wis: 6, cha: 10,
        senses: "passive Perception 8",
        languages: "Giant",
        cr: "6",
        traits: [
            { name: "Poor Depth Perception", description: "The cyclops has disadvantage on any attack roll against a target more than 30 feet away." }
        ],
        actions: [
            { name: "Multiattack", description: "The cyclops makes two greatclub attacks." },
            { name: "Greatclub", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +9 to hit, range 30/120 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage." }
        ],
        source: "SRD"
    }
];

if (typeof window !== 'undefined') { window.SRDMonsters4a = SRDMonsters4a; }
