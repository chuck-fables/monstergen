// SRD 5.2 Monster Data - Part 3 (More Creatures)
const SRDMonsters3 = [
    {
        name: "Giant Spider",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 26,
        hpDice: "4d10+4",
        speed: "30 ft., climb 30 ft.",
        str: 14, dex: 16, con: 12, int: 2, wis: 11, cha: 4,
        skills: ["Stealth +7"],
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 10",
        languages: "-",
        cr: "1",
        traits: [
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." },
            { name: "Web (Recharge 5-6)", description: "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)." }
        ],
        source: "SRD"
    },
    {
        name: "Ghoul",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 22,
        hpDice: "5d8",
        speed: "30 ft.",
        str: 13, dex: 15, con: 10, int: 7, wis: 10, cha: 6,
        immunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "poisoned"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Common",
        cr: "1",
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        source: "SRD"
    },
    {
        name: "Ghost",
        size: "medium",
        type: "undead",
        alignment: "any alignment",
        ac: 11,
        hp: 45,
        hpDice: "10d8",
        speed: "0 ft., fly 40 ft. (hover)",
        str: 7, dex: 13, con: 10, int: 10, wis: 12, cha: 17,
        resistances: ["acid", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["cold", "necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "any languages it knew in life",
        cr: "4",
        traits: [
            { name: "Ethereal Sight", description: "The ghost can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa." },
            { name: "Incorporeal Movement", description: "The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." }
        ],
        actions: [
            { name: "Withering Touch", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6 + 3) necrotic damage." },
            { name: "Etherealness", description: "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane." },
            { name: "Horrifying Visage", description: "Each non-undead creature within 60 feet of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success." },
            { name: "Possession (Recharge 6)", description: "One humanoid that the ghost can see within 5 feet of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness." }
        ],
        source: "SRD"
    },
    {
        name: "Gnoll",
        size: "medium",
        type: "humanoid",
        subtype: "gnoll",
        alignment: "chaotic evil",
        ac: 15,
        acType: "hide armor, shield",
        hp: 22,
        hpDice: "5d8",
        speed: "30 ft.",
        str: 14, dex: 12, con: 11, int: 6, wis: 10, cha: 7,
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Gnoll",
        cr: "0.5",
        traits: [
            { name: "Rampage", description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack." },
            { name: "Longbow", description: "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Goblin",
        size: "small",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "neutral evil",
        ac: 15,
        acType: "leather armor, shield",
        hp: 7,
        hpDice: "2d6",
        speed: "30 ft.",
        str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8,
        skills: ["Stealth +6"],
        senses: "darkvision 60 ft., passive Perception 9",
        languages: "Common, Goblin",
        cr: "0.25",
        traits: [
            { name: "Nimble Escape", description: "The goblin can take the Disengage or Hide action as a bonus action on each of its turns." }
        ],
        actions: [
            { name: "Scimitar", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Griffon",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 12,
        hp: 59,
        hpDice: "7d10+21",
        speed: "30 ft., fly 80 ft.",
        str: 18, dex: 15, con: 16, int: 2, wis: 13, cha: 8,
        skills: ["Perception +5"],
        senses: "darkvision 60 ft., passive Perception 15",
        languages: "-",
        cr: "2",
        traits: [
            { name: "Keen Sight", description: "The griffon has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The griffon makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Harpy",
        size: "medium",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 11,
        hp: 38,
        hpDice: "7d8+7",
        speed: "20 ft., fly 40 ft.",
        str: 12, dex: 13, con: 12, int: 7, wis: 10, cha: 13,
        senses: "passive Perception 10",
        languages: "Common",
        cr: "1",
        actions: [
            { name: "Multiattack", description: "The harpy makes two attacks: one with its claws and one with its club." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage." },
            { name: "Club", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage." },
            { name: "Luring Song", description: "The harpy sings a magical melody. Every humanoid and giant within 300 feet of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated." }
        ],
        source: "SRD"
    },
    {
        name: "Hell Hound",
        size: "medium",
        type: "fiend",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 45,
        hpDice: "7d8+14",
        speed: "50 ft.",
        str: 17, dex: 12, con: 14, int: 6, wis: 13, cha: 6,
        skills: ["Perception +5"],
        immunities: ["fire"],
        senses: "darkvision 60 ft., passive Perception 15",
        languages: "understands Infernal but can't speak it",
        cr: "3",
        traits: [
            { name: "Keen Hearing and Smell", description: "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 7 (2d6) fire damage." },
            { name: "Fire Breath (Recharge 5-6)", description: "The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Hill Giant",
        size: "huge",
        type: "giant",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 105,
        hpDice: "10d12+40",
        speed: "40 ft.",
        str: 21, dex: 8, con: 19, int: 5, wis: 9, cha: 6,
        skills: ["Perception +2"],
        senses: "passive Perception 12",
        languages: "Giant",
        cr: "5",
        actions: [
            { name: "Multiattack", description: "The giant makes two greatclub attacks." },
            { name: "Greatclub", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8 + 5) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 21 (3d10 + 5) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Hobgoblin",
        size: "medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "lawful evil",
        ac: 18,
        acType: "chain mail, shield",
        hp: 11,
        hpDice: "2d8+2",
        speed: "30 ft.",
        str: 13, dex: 12, con: 12, int: 10, wis: 10, cha: 9,
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Common, Goblin",
        cr: "0.5",
        traits: [
            { name: "Martial Advantage", description: "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't incapacitated." }
        ],
        actions: [
            { name: "Longsword", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands." },
            { name: "Longbow", description: "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Hydra",
        size: "huge",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 172,
        hpDice: "15d12+75",
        speed: "30 ft., swim 30 ft.",
        str: 20, dex: 12, con: 20, int: 2, wis: 10, cha: 7,
        skills: ["Perception +6"],
        senses: "darkvision 60 ft., passive Perception 16",
        languages: "-",
        cr: "8",
        traits: [
            { name: "Hold Breath", description: "The hydra can hold its breath for 1 hour." },
            { name: "Multiple Heads", description: "The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious. Whenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies. At the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The hydra regains 10 hit points for each head regrown in this way." },
            { name: "Reactive Heads", description: "For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks." },
            { name: "Wakeful", description: "While the hydra sleeps, at least one of its heads is awake." }
        ],
        actions: [
            { name: "Multiattack", description: "The hydra makes as many bite attacks as it has heads." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10 + 5) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Imp",
        size: "tiny",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 13,
        hp: 10,
        hpDice: "3d4+3",
        speed: "20 ft., fly 40 ft.",
        str: 6, dex: 17, con: 13, int: 11, wis: 12, cha: 14,
        skills: ["Deception +4", "Insight +3", "Persuasion +4", "Stealth +5"],
        resistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        immunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: "darkvision 120 ft., passive Perception 11",
        languages: "Infernal, Common",
        cr: "1",
        traits: [
            { name: "Shapechanger", description: "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the imp's darkvision." },
            { name: "Magic Resistance", description: "The imp has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Sting (Bite in Beast Form)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one." },
            { name: "Invisibility", description: "The imp magically turns invisible until it attacks or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it." }
        ],
        source: "SRD"
    },
    {
        name: "Kobold",
        size: "small",
        type: "humanoid",
        subtype: "kobold",
        alignment: "lawful evil",
        ac: 12,
        hp: 5,
        hpDice: "2d6-2",
        speed: "30 ft.",
        str: 7, dex: 15, con: 9, int: 8, wis: 7, cha: 8,
        senses: "darkvision 60 ft., passive Perception 8",
        languages: "Common, Draconic",
        cr: "0.125",
        traits: [
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." },
            { name: "Pack Tactics", description: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Dagger", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage." },
            { name: "Sling", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Kraken",
        size: "gargantuan",
        type: "monstrosity",
        subtype: "titan",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 472,
        hpDice: "27d20+189",
        speed: "20 ft., swim 60 ft.",
        str: 30, dex: 11, con: 25, int: 22, wis: 18, cha: 20,
        saves: ["Str +17", "Dex +7", "Con +14", "Int +13", "Wis +11"],
        immunities: ["lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["frightened", "paralyzed"],
        senses: "truesight 120 ft., passive Perception 14",
        languages: "understands Abyssal, Celestial, Infernal, and Primordial but can't speak, telepathy 120 ft.",
        cr: "23",
        traits: [
            { name: "Amphibious", description: "The kraken can breathe air and water." },
            { name: "Freedom of Movement", description: "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 feet of movement to escape from nonmagical restraints or being grappled." },
            { name: "Siege Monster", description: "The kraken deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling." },
            { name: "Bite", description: "Melee Weapon Attack: +17 to hit, reach 5 ft., one target. Hit: 23 (3d8 + 10) piercing damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends." },
            { name: "Tentacle", description: "Melee Weapon Attack: +17 to hit, reach 30 ft., one target. Hit: 20 (3d6 + 10) bludgeoning damage, and the target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target." },
            { name: "Fling", description: "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone." },
            { name: "Lightning Storm", description: "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: [
            { name: "Tentacle Attack or Fling", description: "The kraken makes one tentacle attack or uses its Fling." },
            { name: "Lightning Storm (Costs 2 Actions)", description: "The kraken uses Lightning Storm." },
            { name: "Ink Cloud (Costs 3 Actions)", description: "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn." }
        ],
        source: "SRD"
    },
    {
        name: "Lich",
        size: "medium",
        type: "undead",
        alignment: "any evil alignment",
        ac: 17,
        acType: "natural armor",
        hp: 135,
        hpDice: "18d8+54",
        speed: "30 ft.",
        str: 11, dex: 16, con: 16, int: 20, wis: 14, cha: 16,
        saves: ["Con +10", "Int +12", "Wis +9"],
        skills: ["Arcana +18", "History +12", "Insight +9", "Perception +9"],
        resistances: ["cold", "lightning", "necrotic"],
        immunities: ["poison", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: "truesight 120 ft., passive Perception 19",
        languages: "Common plus up to five other languages",
        cr: "21",
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the lich fails a saving throw, it can choose to succeed instead." },
            { name: "Rejuvenation", description: "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery." },
            { name: "Spellcasting", description: "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared:\nCantrips (at will): mage hand, prestidigitation, ray of frost\n1st level (4 slots): detect magic, magic missile, shield, thunderwave\n2nd level (3 slots): acid arrow, detect thoughts, invisibility, mirror image\n3rd level (3 slots): animate dead, counterspell, dispel magic, fireball\n4th level (3 slots): blight, dimension door\n5th level (3 slots): cloudkill, scrying\n6th level (1 slot): disintegrate, globe of invulnerability\n7th level (1 slot): finger of death, plane shift\n8th level (1 slot): dominate monster, power word stun\n9th level (1 slot): power word kill" },
            { name: "Turn Resistance", description: "The lich has advantage on saving throws against any effect that turns undead." }
        ],
        actions: [
            { name: "Paralyzing Touch", description: "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        legendaryActions: [
            { name: "Cantrip", description: "The lich casts a cantrip." },
            { name: "Paralyzing Touch (Costs 2 Actions)", description: "The lich uses its Paralyzing Touch." },
            { name: "Frightening Gaze (Costs 2 Actions)", description: "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute." },
            { name: "Disrupt Life (Costs 3 Actions)", description: "Each non-undead creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Manticore",
        size: "large",
        type: "monstrosity",
        alignment: "lawful evil",
        ac: 14,
        acType: "natural armor",
        hp: 68,
        hpDice: "8d10+24",
        speed: "30 ft., fly 50 ft.",
        str: 17, dex: 16, con: 17, int: 7, wis: 12, cha: 8,
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "Common",
        cr: "3",
        traits: [
            { name: "Tail Spike Regrowth", description: "The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest." }
        ],
        actions: [
            { name: "Multiattack", description: "The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage." },
            { name: "Tail Spike", description: "Ranged Weapon Attack: +5 to hit, range 100/200 ft., one target. Hit: 7 (1d8 + 3) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Medusa",
        size: "medium",
        type: "monstrosity",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 127,
        hpDice: "17d8+51",
        speed: "30 ft.",
        str: 10, dex: 15, con: 16, int: 12, wis: 13, cha: 15,
        skills: ["Deception +5", "Insight +4", "Perception +4", "Stealth +5"],
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "Common",
        cr: "6",
        traits: [
            { name: "Petrifying Gaze", description: "When a creature that can see the medusa's eyes starts its turn within 30 feet of the medusa, the medusa can force it to make a DC 14 Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success." }
        ],
        actions: [
            { name: "Multiattack", description: "The medusa makes either three melee attacks—one with its snake hair and two with its shortsword—or two ranged attacks with its longbow." },
            { name: "Snake Hair", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage plus 14 (4d6) poison damage." },
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage." }
        ],
        source: "SRD"
    },
    {
        name: "Mimic",
        size: "medium",
        type: "monstrosity",
        subtype: "shapechanger",
        alignment: "neutral",
        ac: 12,
        acType: "natural armor",
        hp: 58,
        hpDice: "9d8+18",
        speed: "15 ft.",
        str: 17, dex: 12, con: 15, int: 5, wis: 13, cha: 8,
        skills: ["Stealth +5"],
        immunities: ["acid"],
        conditionImmunities: ["prone"],
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "-",
        cr: "2",
        traits: [
            { name: "Shapechanger", description: "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Adhesive (Object Form Only)", description: "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage." },
            { name: "False Appearance (Object Form Only)", description: "While the mimic remains motionless, it is indistinguishable from an ordinary object." },
            { name: "Grappler", description: "The mimic has advantage on attack rolls against any creature grappled by it." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) acid damage." }
        ],
        source: "SRD"
    },
    {
        name: "Minotaur",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 76,
        hpDice: "9d10+27",
        speed: "40 ft.",
        str: 18, dex: 11, con: 16, int: 6, wis: 16, cha: 9,
        skills: ["Perception +7"],
        senses: "darkvision 60 ft., passive Perception 17",
        languages: "Abyssal",
        cr: "3",
        traits: [
            { name: "Charge", description: "If the minotaur moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone." },
            { name: "Labyrinthine Recall", description: "The minotaur can perfectly recall any path it has traveled." },
            { name: "Reckless", description: "At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn." }
        ],
        actions: [
            { name: "Greataxe", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage." },
            { name: "Gore", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Mummy",
        size: "medium",
        type: "undead",
        alignment: "lawful evil",
        ac: 11,
        acType: "natural armor",
        hp: 58,
        hpDice: "9d8+18",
        speed: "20 ft.",
        str: 16, dex: 8, con: 15, int: 6, wis: 10, cha: 12,
        resistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "the languages it knew in life",
        cr: "3",
        actions: [
            { name: "Multiattack", description: "The mummy can use its Dreadful Glare and makes one attack with its rotting fist." },
            { name: "Rotting Fist", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot." },
            { name: "Dreadful Glare", description: "The mummy targets one creature it can see within 60 feet of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours." }
        ],
        source: "SRD"
    },
    {
        name: "Nightmare",
        size: "large",
        type: "fiend",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 68,
        hpDice: "8d10+24",
        speed: "60 ft., fly 90 ft.",
        str: 18, dex: 15, con: 16, int: 10, wis: 13, cha: 15,
        immunities: ["fire"],
        senses: "passive Perception 11",
        languages: "understands Abyssal, Common, and Infernal but can't speak",
        cr: "3",
        traits: [
            { name: "Confer Fire Resistance", description: "The nightmare can grant resistance to fire damage to anyone riding it." },
            { name: "Illumination", description: "The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage plus 7 (2d6) fire damage." },
            { name: "Ethereal Stride", description: "The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa." }
        ],
        source: "SRD"
    },
    {
        name: "Ogre",
        size: "large",
        type: "giant",
        alignment: "chaotic evil",
        ac: 11,
        acType: "hide armor",
        hp: 59,
        hpDice: "7d10+21",
        speed: "40 ft.",
        str: 19, dex: 8, con: 16, int: 5, wis: 7, cha: 7,
        senses: "darkvision 60 ft., passive Perception 8",
        languages: "Common, Giant",
        cr: "2",
        actions: [
            { name: "Greatclub", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 11 (2d6 + 4) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Orc",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 13,
        acType: "hide armor",
        hp: 15,
        hpDice: "2d8+6",
        speed: "30 ft.",
        str: 16, dex: 12, con: 16, int: 7, wis: 11, cha: 10,
        skills: ["Intimidation +2"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Common, Orc",
        cr: "0.5",
        traits: [
            { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see." }
        ],
        actions: [
            { name: "Greataxe", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6 + 3) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Owlbear",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 59,
        hpDice: "7d10+21",
        speed: "40 ft.",
        str: 20, dex: 12, con: 17, int: 3, wis: 12, cha: 7,
        skills: ["Perception +3"],
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "-",
        cr: "3",
        traits: [
            { name: "Keen Sight and Smell", description: "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The owlbear makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10 + 5) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage." }
        ],
        source: "SRD"
    }
];

// Merge with main SRDMonsters array
if (typeof window !== 'undefined') {
    window.SRDMonsters3 = SRDMonsters3;
}
