// SRD 5.2 Monster Data - Part 6b (S-Z)
const SRDMonsters6b = [
    {
        name: "Sahuagin",
        size: "medium",
        type: "humanoid",
        subtype: "sahuagin",
        alignment: "lawful evil",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hpDice: "4d8+4",
        speed: "30 ft., swim 40 ft.",
        str: 13, dex: 11, con: 12, int: 12, wis: 13, cha: 9,
        skills: ["Perception +5"],
        senses: "darkvision 120 ft., passive Perception 15",
        languages: "Sahuagin",
        cr: "0.5",
        traits: [
            { name: "Blood Frenzy", description: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Limited Amphibiousness", description: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating." },
            { name: "Shark Telepathy", description: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy." }
        ],
        actions: [
            { name: "Multiattack", description: "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear." },
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) slashing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack." }
        ],
        source: "SRD"
    },
    {
        name: "Salamander",
        size: "large",
        type: "elemental",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 90,
        hpDice: "12d10+24",
        speed: "30 ft.",
        str: 18, dex: 14, con: 15, int: 11, wis: 10, cha: 12,
        resistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["fire"],
        vulnerabilities: ["cold"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Ignan",
        cr: "5",
        traits: [
            { name: "Heated Body", description: "A creature that touches the salamander or hits it with a melee attack while within 5 feet of it takes 7 (2d6) fire damage." },
            { name: "Heated Weapons", description: "Any metal melee weapon the salamander wields deals an extra 3 (1d6) fire damage on a hit (included in the attack)." }
        ],
        actions: [
            { name: "Multiattack", description: "The salamander makes two attacks: one with its spear and one with its tail." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage." },
            { name: "Tail", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage plus 7 (2d6) fire damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets." }
        ],
        source: "SRD"
    },
    {
        name: "Satyr",
        size: "medium",
        type: "fey",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "leather armor",
        hp: 31,
        hpDice: "7d8",
        speed: "40 ft.",
        str: 12, dex: 16, con: 11, int: 12, wis: 10, cha: 14,
        skills: ["Perception +2", "Performance +6", "Stealth +5"],
        senses: "passive Perception 12",
        languages: "Common, Elvish, Sylvan",
        cr: "0.5",
        traits: [
            { name: "Magic Resistance", description: "The satyr has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) bludgeoning damage." },
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6 + 3) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Scorpion",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 1,
        hpDice: "1d4-1",
        speed: "10 ft.",
        str: 2, dex: 11, con: 8, int: 1, wis: 8, cha: 2,
        senses: "blindsight 10 ft., passive Perception 9",
        languages: "-",
        cr: "0",
        actions: [
            { name: "Sting", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Scout",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 13,
        acType: "leather armor",
        hp: 16,
        hpDice: "3d8+3",
        speed: "30 ft.",
        str: 11, dex: 14, con: 12, int: 11, wis: 13, cha: 11,
        skills: ["Nature +4", "Perception +5", "Stealth +6", "Survival +5"],
        senses: "passive Perception 15",
        languages: "any one language (usually Common)",
        cr: "0.5",
        traits: [
            { name: "Keen Hearing and Sight", description: "The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The scout makes two melee attacks or two ranged attacks." },
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Sea Hag",
        size: "medium",
        type: "fey",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 52,
        hpDice: "7d8+21",
        speed: "30 ft., swim 40 ft.",
        str: 16, dex: 13, con: 16, int: 12, wis: 12, cha: 13,
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "Aquan, Common, Giant",
        cr: "2",
        traits: [
            { name: "Amphibious", description: "The hag can breathe air and water." },
            { name: "Horrific Appearance", description: "Any humanoid that starts its turn within 30 feet of the hag and can see the hag's true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours. Unless the target is surprised or the revelation of the hag's true form is sudden, the target can avert its eyes and avoid making the initial saving throw. Until the start of its next turn, a creature that averts its eyes has disadvantage on attack rolls against the hag." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage." },
            { name: "Death Glare", description: "The hag targets one frightened creature she can see within 30 feet of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points." },
            { name: "Illusory Appearance", description: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies. The changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have no claws, but someone touching her hand might feel the claws. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check to discern that the hag is disguised." }
        ],
        source: "SRD"
    },
    {
        name: "Shadow",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 16,
        hpDice: "3d8+3",
        speed: "40 ft.",
        str: 6, dex: 14, con: 13, int: 6, wis: 10, cha: 8,
        skills: ["Stealth +4"],
        vulnerabilities: ["radiant"],
        resistances: ["acid", "cold", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["necrotic", "poison"],
        conditionImmunities: ["exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "-",
        cr: "0.5",
        traits: [
            { name: "Amorphous", description: "The shadow can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Shadow Stealth", description: "While in dim light or darkness, the shadow can take the Hide action as a bonus action." },
            { name: "Sunlight Weakness", description: "While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws." }
        ],
        actions: [
            { name: "Strength Drain", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) necrotic damage, and the target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest. If a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later." }
        ],
        source: "SRD"
    },
    {
        name: "Shambling Mound",
        size: "large",
        type: "plant",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 136,
        hpDice: "16d10+48",
        speed: "20 ft., swim 20 ft.",
        str: 18, dex: 8, con: 16, int: 5, wis: 10, cha: 5,
        skills: ["Stealth +2"],
        resistances: ["cold", "fire"],
        immunities: ["lightning"],
        conditionImmunities: ["blinded", "deafened", "exhaustion"],
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 10",
        languages: "-",
        cr: "5",
        traits: [
            { name: "Lightning Absorption", description: "Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt." }
        ],
        actions: [
            { name: "Multiattack", description: "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it." },
            { name: "Slam", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage." },
            { name: "Engulf", description: "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time." }
        ],
        source: "SRD"
    },
    {
        name: "Shield Guardian",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 142,
        hpDice: "15d10+60",
        speed: "30 ft.",
        str: 18, dex: 8, con: 18, int: 7, wis: 10, cha: 3,
        immunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 10",
        languages: "understands commands given in any language but can't speak",
        cr: "7",
        traits: [
            { name: "Bound", description: "The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred to the guardian." },
            { name: "Regeneration", description: "The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit point." },
            { name: "Spell Storing", description: "A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the guardian. The spell has no effect but is stored within the guardian. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the guardian casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost." }
        ],
        actions: [
            { name: "Multiattack", description: "The guardian makes two fist attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage." }
        ],
        reactions: [
            { name: "Shield", description: "When a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 feet of the wearer." }
        ],
        source: "SRD"
    },
    {
        name: "Skeleton",
        size: "medium",
        type: "undead",
        alignment: "lawful evil",
        ac: 13,
        acType: "armor scraps",
        hp: 13,
        hpDice: "2d8+4",
        speed: "30 ft.",
        str: 10, dex: 14, con: 15, int: 6, wis: 8, cha: 5,
        vulnerabilities: ["bludgeoning"],
        immunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: "darkvision 60 ft., passive Perception 9",
        languages: "understands all languages it knew in life but can't speak",
        cr: "0.25",
        actions: [
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Solar",
        size: "large",
        type: "celestial",
        alignment: "lawful good",
        ac: 21,
        acType: "natural armor",
        hp: 243,
        hpDice: "18d10+144",
        speed: "50 ft., fly 150 ft.",
        str: 26, dex: 22, con: 26, int: 25, wis: 25, cha: 30,
        saves: ["Int +14", "Wis +14", "Cha +17"],
        skills: ["Perception +14"],
        resistances: ["radiant", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: "truesight 120 ft., passive Perception 24",
        languages: "all, telepathy 120 ft.",
        cr: "21",
        traits: [
            { name: "Angelic Weapons", description: "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack)." },
            { name: "Divine Awareness", description: "The solar knows if it hears a lie." },
            { name: "Innate Spellcasting", description: "The solar's spellcasting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components:\nAt will: detect evil and good, invisibility (self only)\n3/day each: blade barrier, dispel evil and good, resurrection\n1/day each: commune, control weather" },
            { name: "Magic Resistance", description: "The solar has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The solar makes two greatsword attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage." },
            { name: "Slaying Longbow", description: "Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit: 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 100 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die." },
            { name: "Flying Sword", description: "The solar releases its greatsword to hover magically in an unoccupied space within 5 feet of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies." },
            { name: "Healing Touch (4/Day)", description: "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness." }
        ],
        legendaryActions: [
            { name: "Teleport", description: "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." },
            { name: "Searing Burst (Costs 2 Actions)", description: "The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one." },
            { name: "Blinding Gaze (Costs 3 Actions)", description: "The solar targets one creature it can see within 30 feet of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness." }
        ],
        source: "SRD"
    },
    {
        name: "Specter",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 22,
        hpDice: "5d8",
        speed: "0 ft., fly 50 ft. (hover)",
        str: 1, dex: 14, con: 11, int: 10, wis: 10, cha: 11,
        resistances: ["acid", "cold", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "understands all languages it knew in life but can't speak",
        cr: "1",
        traits: [
            { name: "Incorporeal Movement", description: "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Life Drain", description: "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) necrotic damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." }
        ],
        source: "SRD"
    },
    {
        name: "Spider",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 1,
        hpDice: "1d4-1",
        speed: "20 ft., climb 20 ft.",
        str: 2, dex: 14, con: 8, int: 1, wis: 10, cha: 2,
        skills: ["Stealth +4"],
        senses: "darkvision 30 ft., passive Perception 10",
        languages: "-",
        cr: "0",
        traits: [
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage." }
        ],
        source: "SRD"
    },
    {
        name: "Spirit Naga",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 75,
        hpDice: "10d10+20",
        speed: "40 ft.",
        str: 18, dex: 17, con: 14, int: 16, wis: 15, cha: 16,
        saves: ["Dex +6", "Con +5", "Wis +5", "Cha +6"],
        immunities: ["poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: "darkvision 60 ft., passive Perception 12",
        languages: "Abyssal, Common",
        cr: "8",
        traits: [
            { name: "Rejuvenation", description: "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning." },
            { name: "Spellcasting", description: "The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following wizard spells prepared:\nCantrips (at will): mage hand, minor illusion, ray of frost\n1st level (4 slots): charm person, detect magic, sleep\n2nd level (3 slots): detect thoughts, hold person\n3rd level (3 slots): lightning bolt, water breathing\n4th level (3 slots): blight, dimension door\n5th level (2 slots): dominate person" }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 7 (1d6 + 4) piercing damage, and the target must make a DC 13 Constitution saving throw, taking 31 (7d8) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Sprite",
        size: "tiny",
        type: "fey",
        alignment: "neutral good",
        ac: 15,
        acType: "leather armor",
        hp: 2,
        hpDice: "1d4",
        speed: "10 ft., fly 40 ft.",
        str: 3, dex: 18, con: 10, int: 14, wis: 13, cha: 11,
        skills: ["Perception +3", "Stealth +8"],
        senses: "passive Perception 13",
        languages: "Common, Elvish, Sylvan",
        cr: "0.25",
        actions: [
            { name: "Longsword", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 slashing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +6 to hit, range 40/160 ft., one target. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake." },
            { name: "Heart Sight", description: "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw." },
            { name: "Invisibility", description: "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it." }
        ],
        source: "SRD"
    },
    {
        name: "Spy",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        hp: 27,
        hpDice: "6d8",
        speed: "30 ft.",
        str: 10, dex: 15, con: 10, int: 12, wis: 14, cha: 16,
        skills: ["Deception +5", "Insight +4", "Investigation +5", "Perception +6", "Persuasion +5", "Sleight of Hand +4", "Stealth +4"],
        senses: "passive Perception 16",
        languages: "any two languages",
        cr: "1",
        traits: [
            { name: "Cunning Action", description: "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action." },
            { name: "Sneak Attack (1/Turn)", description: "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll." }
        ],
        actions: [
            { name: "Multiattack", description: "The spy makes two melee attacks." },
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
            { name: "Hand Crossbow", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Steam Mephit",
        size: "small",
        type: "elemental",
        alignment: "neutral evil",
        ac: 10,
        hp: 21,
        hpDice: "6d6",
        speed: "30 ft., fly 30 ft.",
        str: 5, dex: 11, con: 10, int: 11, wis: 10, cha: 12,
        immunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Aquan, Ignan",
        cr: "0.25",
        traits: [
            { name: "Death Burst", description: "When the mephit dies, it explodes in a cloud of steam. Each creature within 5 feet of the mephit must succeed on a DC 10 Dexterity saving throw or take 4 (1d8) fire damage." },
            { name: "Innate Spellcasting (1/Day)", description: "The mephit can innately cast blur, requiring no material components. Its innate spellcasting ability is Charisma." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 2 (1d4) slashing damage plus 2 (1d4) fire damage." },
            { name: "Steam Breath (Recharge 6)", description: "The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Stirge",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 2,
        hpDice: "1d4",
        speed: "10 ft., fly 40 ft.",
        str: 4, dex: 16, con: 11, int: 2, wis: 8, cha: 6,
        senses: "darkvision 60 ft., passive Perception 9",
        languages: "-",
        cr: "0.125",
        actions: [
            { name: "Blood Drain", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss. The stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge." }
        ],
        source: "SRD"
    },
    {
        name: "Stone Giant",
        size: "huge",
        type: "giant",
        alignment: "neutral",
        ac: 17,
        acType: "natural armor",
        hp: 126,
        hpDice: "11d12+55",
        speed: "40 ft.",
        str: 23, dex: 15, con: 20, int: 10, wis: 12, cha: 9,
        saves: ["Dex +5", "Con +8", "Wis +4"],
        skills: ["Athletics +12", "Perception +4"],
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "Giant",
        cr: "7",
        traits: [
            { name: "Stone Camouflage", description: "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two greatclub attacks." },
            { name: "Greatclub", description: "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone." }
        ],
        reactions: [
            { name: "Rock Catching", description: "If a rock or similar object is hurled at the giant, the giant can, with a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it." }
        ],
        source: "SRD"
    },
    {
        name: "Stone Golem",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 178,
        hpDice: "17d10+85",
        speed: "30 ft.",
        str: 22, dex: 9, con: 20, int: 3, wis: 11, cha: 1,
        immunities: ["poison", "psychic", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: "darkvision 120 ft., passive Perception 10",
        languages: "understands the languages of its creator but can't speak",
        cr: "10",
        traits: [
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage." },
            { name: "Slow (Recharge 5-6)", description: "The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        source: "SRD"
    },
    {
        name: "Storm Giant",
        size: "huge",
        type: "giant",
        alignment: "chaotic good",
        ac: 16,
        acType: "scale mail",
        hp: 230,
        hpDice: "20d12+100",
        speed: "50 ft., swim 50 ft.",
        str: 29, dex: 14, con: 20, int: 16, wis: 18, cha: 18,
        saves: ["Str +14", "Con +10", "Wis +9", "Cha +9"],
        skills: ["Arcana +8", "Athletics +14", "History +8", "Perception +9"],
        resistances: ["cold"],
        immunities: ["lightning", "thunder"],
        senses: "passive Perception 19",
        languages: "Common, Giant",
        cr: "13",
        traits: [
            { name: "Amphibious", description: "The giant can breathe air and water." },
            { name: "Innate Spellcasting", description: "The giant's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components:\nAt will: detect magic, feather fall, levitate, light\n3/day each: control weather, water breathing" }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two greatsword attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6 + 9) slashing damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. Hit: 35 (4d12 + 9) bludgeoning damage." },
            { name: "Lightning Strike (Recharge 5-6)", description: "The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Succubus/Incubus",
        size: "medium",
        type: "fiend",
        subtype: "shapechanger",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 66,
        hpDice: "12d8+12",
        speed: "30 ft., fly 60 ft.",
        str: 8, dex: 17, con: 13, int: 15, wis: 12, cha: 20,
        skills: ["Deception +9", "Insight +5", "Perception +5", "Persuasion +9", "Stealth +7"],
        resistances: ["cold", "fire", "lightning", "poison", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: "darkvision 60 ft., passive Perception 15",
        languages: "Abyssal, Common, Infernal, telepathy 60 ft.",
        cr: "4",
        traits: [
            { name: "Telepathic Bond", description: "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence." },
            { name: "Shapechanger", description: "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." }
        ],
        actions: [
            { name: "Claw (Fiend Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage." },
            { name: "Charm", description: "One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours. The fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends." },
            { name: "Draining Kiss", description: "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." },
            { name: "Etherealness", description: "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa." }
        ],
        source: "SRD"
    },
    {
        name: "Swarm of Bats",
        size: "medium",
        type: "beast",
        subtype: "swarm",
        alignment: "unaligned",
        ac: 12,
        hp: 22,
        hpDice: "5d8",
        speed: "0 ft., fly 30 ft.",
        str: 5, dex: 15, con: 10, int: 2, wis: 12, cha: 4,
        resistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: "blindsight 60 ft., passive Perception 11",
        languages: "-",
        cr: "0.25",
        traits: [
            { name: "Echolocation", description: "The swarm can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The swarm has advantage on Wisdom (Perception) checks that rely on hearing." },
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +4 to hit, reach 0 ft., one creature in the swarm's space. Hit: 5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer." }
        ],
        source: "SRD"
    },
    {
        name: "Swarm of Insects",
        size: "medium",
        type: "beast",
        subtype: "swarm",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hpDice: "5d8",
        speed: "20 ft., climb 20 ft.",
        str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1,
        resistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: "blindsight 10 ft., passive Perception 8",
        languages: "-",
        cr: "0.5",
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer." }
        ],
        source: "SRD"
    },
    {
        name: "Swarm of Rats",
        size: "medium",
        type: "beast",
        subtype: "swarm",
        alignment: "unaligned",
        ac: 10,
        hp: 24,
        hpDice: "7d8-7",
        speed: "30 ft.",
        str: 9, dex: 11, con: 9, int: 2, wis: 10, cha: 3,
        resistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: "darkvision 30 ft., passive Perception 10",
        languages: "-",
        cr: "0.25",
        traits: [
            { name: "Keen Smell", description: "The swarm has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +2 to hit, reach 0 ft., one target in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer." }
        ],
        source: "SRD"
    },
    {
        name: "Tarrasque",
        size: "gargantuan",
        type: "monstrosity",
        subtype: "titan",
        alignment: "unaligned",
        ac: 25,
        acType: "natural armor",
        hp: 676,
        hpDice: "33d20+330",
        speed: "40 ft.",
        str: 30, dex: 11, con: 30, int: 3, wis: 11, cha: 11,
        saves: ["Int +5", "Wis +9", "Cha +9"],
        immunities: ["fire", "poison", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "frightened", "paralyzed", "poisoned"],
        senses: "blindsight 120 ft., passive Perception 10",
        languages: "-",
        cr: "30",
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the tarrasque fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "The tarrasque has advantage on saving throws against spells and other magical effects." },
            { name: "Reflective Carapace", description: "Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target." },
            { name: "Siege Monster", description: "The tarrasque deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite." },
            { name: "Bite", description: "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target." },
            { name: "Claw", description: "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8 + 10) slashing damage." },
            { name: "Horns", description: "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 32 (4d10 + 10) piercing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone." },
            { name: "Frightful Presence", description: "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours." },
            { name: "Swallow", description: "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns. If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone." }
        ],
        legendaryActions: [
            { name: "Attack", description: "The tarrasque makes one claw attack or tail attack." },
            { name: "Move", description: "The tarrasque moves up to half its speed." },
            { name: "Chomp (Costs 2 Actions)", description: "The tarrasque makes one bite attack or uses its Swallow." }
        ],
        source: "SRD"
    },
    {
        name: "Thug",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 11,
        acType: "leather armor",
        hp: 32,
        hpDice: "5d8+10",
        speed: "30 ft.",
        str: 15, dex: 11, con: 14, int: 10, wis: 10, cha: 11,
        skills: ["Intimidation +2"],
        senses: "passive Perception 10",
        languages: "any one language (usually Common)",
        cr: "0.5",
        traits: [
            { name: "Pack Tactics", description: "The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The thug makes two melee attacks." },
            { name: "Mace", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) bludgeoning damage." },
            { name: "Heavy Crossbow", description: "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Tiger",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 37,
        hpDice: "5d10+10",
        speed: "40 ft.",
        str: 17, dex: 15, con: 14, int: 3, wis: 12, cha: 8,
        skills: ["Perception +3", "Stealth +6"],
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "-",
        cr: "1",
        traits: [
            { name: "Keen Smell", description: "The tiger has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pounce", description: "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Treant",
        size: "huge",
        type: "plant",
        alignment: "chaotic good",
        ac: 16,
        acType: "natural armor",
        hp: 138,
        hpDice: "12d12+60",
        speed: "30 ft.",
        str: 23, dex: 8, con: 21, int: 12, wis: 16, cha: 12,
        resistances: ["bludgeoning", "piercing"],
        vulnerabilities: ["fire"],
        senses: "passive Perception 13",
        languages: "Common, Druidic, Elvish, Sylvan",
        cr: "9",
        traits: [
            { name: "False Appearance", description: "While the treant remains motionless, it is indistinguishable from a normal tree." },
            { name: "Siege Monster", description: "The treant deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The treant makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6 + 6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage." },
            { name: "Animate Trees (1/Day)", description: "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible." }
        ],
        source: "SRD"
    },
    {
        name: "Tribal Warrior",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "hide armor",
        hp: 11,
        hpDice: "2d8+2",
        speed: "30 ft.",
        str: 13, dex: 11, con: 12, int: 8, wis: 11, cha: 8,
        senses: "passive Perception 10",
        languages: "any one language",
        cr: "0.125",
        traits: [
            { name: "Pack Tactics", description: "The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack." }
        ],
        source: "SRD"
    },
    {
        name: "Triceratops",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 95,
        hpDice: "10d12+30",
        speed: "50 ft.",
        str: 22, dex: 9, con: 17, int: 2, wis: 11, cha: 5,
        senses: "passive Perception 10",
        languages: "-",
        cr: "5",
        traits: [
            { name: "Trampling Charge", description: "If the triceratops moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8 + 6) piercing damage." },
            { name: "Stomp", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Troll",
        size: "large",
        type: "giant",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 84,
        hpDice: "8d10+40",
        speed: "30 ft.",
        str: 18, dex: 13, con: 20, int: 7, wis: 9, cha: 7,
        skills: ["Perception +2"],
        senses: "darkvision 60 ft., passive Perception 12",
        languages: "Giant",
        cr: "5",
        traits: [
            { name: "Keen Smell", description: "The troll has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Regeneration", description: "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate." }
        ],
        actions: [
            { name: "Multiattack", description: "The troll makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Tyrannosaurus Rex",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 136,
        hpDice: "13d12+52",
        speed: "50 ft.",
        str: 25, dex: 10, con: 19, int: 2, wis: 12, cha: 9,
        skills: ["Perception +4"],
        senses: "passive Perception 14",
        languages: "-",
        cr: "8",
        actions: [
            { name: "Multiattack", description: "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12 + 7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target." },
            { name: "Tail", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Unicorn",
        size: "large",
        type: "celestial",
        alignment: "lawful good",
        ac: 12,
        hp: 67,
        hpDice: "9d10+18",
        speed: "50 ft.",
        str: 18, dex: 14, con: 15, int: 11, wis: 17, cha: 16,
        immunities: ["poison"],
        conditionImmunities: ["charmed", "paralyzed", "poisoned"],
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "Celestial, Elvish, Sylvan, telepathy 60 ft.",
        cr: "5",
        traits: [
            { name: "Charge", description: "If the unicorn moves at least 20 feet straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone." },
            { name: "Innate Spellcasting", description: "The unicorn's innate spellcasting ability is Charisma (spell save DC 14). The unicorn can innately cast the following spells, requiring no components:\nAt will: detect evil and good, druidcraft, pass without trace\n1/day each: calm emotions, dispel evil and good, entangle" },
            { name: "Magic Resistance", description: "The unicorn has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The unicorn's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The unicorn makes two attacks: one with its hooves and one with its horn." },
            { name: "Hooves", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage." },
            { name: "Horn", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage." },
            { name: "Healing Touch (3/Day)", description: "The unicorn touches another creature with its horn. The target magically regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target." },
            { name: "Teleport (1/Day)", description: "The unicorn magically teleports itself and up to three willing creatures it can see within 5 feet of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away." }
        ],
        legendaryActions: [
            { name: "Hooves", description: "The unicorn makes one attack with its hooves." },
            { name: "Shimmering Shield (Costs 2 Actions)", description: "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 feet of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn." },
            { name: "Heal Self (Costs 3 Actions)", description: "The unicorn magically regains 11 (2d8 + 2) hit points." }
        ],
        source: "SRD"
    },
    {
        name: "Vampire",
        size: "medium",
        type: "undead",
        subtype: "shapechanger",
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 144,
        hpDice: "17d8+68",
        speed: "30 ft.",
        str: 18, dex: 18, con: 18, int: 17, wis: 15, cha: 18,
        saves: ["Dex +9", "Wis +7", "Cha +9"],
        skills: ["Perception +7", "Stealth +9"],
        resistances: ["necrotic", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: "darkvision 120 ft., passive Perception 17",
        languages: "the languages it knew in life",
        cr: "13",
        traits: [
            { name: "Shapechanger", description: "If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form. While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies. While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight." },
            { name: "Legendary Resistance (3/Day)", description: "If the vampire fails a saving throw, it can choose to succeed instead." },
            { name: "Misty Escape", description: "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed. While it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point." },
            { name: "Regeneration", description: "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn." },
            { name: "Spider Climb", description: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Vampire Weaknesses", description: "The vampire has the following flaws: Forbiddance. The vampire can't enter a residence without an invitation from one of the occupants. Harmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water. Stake to the Heart. If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed. Sunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks." }
        ],
        actions: [
            { name: "Multiattack (Vampire Form Only)", description: "The vampire makes two attacks, only one of which can be a bite attack." },
            { name: "Unarmed Strike (Vampire Form Only)", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18)." },
            { name: "Bite (Bat or Vampire Form Only)", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control." },
            { name: "Charm", description: "The vampire targets one humanoid it can see within 30 feet of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack. Each time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect." },
            { name: "Children of the Night (1/Day)", description: "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action." }
        ],
        legendaryActions: [
            { name: "Move", description: "The vampire moves up to its speed without provoking opportunity attacks." },
            { name: "Unarmed Strike", description: "The vampire makes one unarmed strike." },
            { name: "Bite (Costs 2 Actions)", description: "The vampire makes one bite attack." }
        ],
        source: "SRD"
    },
    {
        name: "Vampire Spawn",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 82,
        hpDice: "11d8+33",
        speed: "30 ft.",
        str: 16, dex: 16, con: 16, int: 11, wis: 10, cha: 12,
        saves: ["Dex +6", "Wis +3"],
        skills: ["Perception +3", "Stealth +6"],
        resistances: ["necrotic", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "the languages it knew in life",
        cr: "5",
        traits: [
            { name: "Regeneration", description: "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn." },
            { name: "Spider Climb", description: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Vampire Weaknesses", description: "The vampire has the following flaws: Forbiddance. The vampire can't enter a residence without an invitation from one of the occupants. Harmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water. Stake to the Heart. If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed. Sunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks." }
        ],
        actions: [
            { name: "Multiattack", description: "The vampire makes two attacks, only one of which can be a bite attack." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4 + 3) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13)." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." }
        ],
        source: "SRD"
    },
    {
        name: "Veteran",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 17,
        acType: "splint",
        hp: 58,
        hpDice: "9d8+18",
        speed: "30 ft.",
        str: 16, dex: 13, con: 14, int: 10, wis: 11, cha: 10,
        skills: ["Athletics +5", "Perception +2"],
        senses: "passive Perception 12",
        languages: "any one language (usually Common)",
        cr: "3",
        actions: [
            { name: "Multiattack", description: "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack." },
            { name: "Longsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands." },
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage." },
            { name: "Heavy Crossbow", description: "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Vrock",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 104,
        hpDice: "11d10+44",
        speed: "40 ft., fly 60 ft.",
        str: 17, dex: 15, con: 18, int: 8, wis: 13, cha: 8,
        saves: ["Dex +5", "Wis +4", "Cha +2"],
        resistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: "darkvision 120 ft., passive Perception 11",
        languages: "Abyssal, telepathy 120 ft.",
        cr: "6",
        traits: [
            { name: "Magic Resistance", description: "The vrock has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The vrock makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage." },
            { name: "Spores (Recharge 6)", description: "A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it." },
            { name: "Stunning Screech (1/Day)", description: "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn." }
        ],
        source: "SRD"
    },
    {
        name: "Vulture",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 5,
        hpDice: "1d8+1",
        speed: "10 ft., fly 50 ft.",
        str: 7, dex: 10, con: 13, int: 2, wis: 12, cha: 4,
        skills: ["Perception +3"],
        senses: "passive Perception 13",
        languages: "-",
        cr: "0",
        traits: [
            { name: "Keen Sight and Smell", description: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell." },
            { name: "Pack Tactics", description: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Beak", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Warhorse",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hpDice: "3d10+3",
        speed: "60 ft.",
        str: 18, dex: 12, con: 13, int: 2, wis: 12, cha: 7,
        senses: "passive Perception 11",
        languages: "-",
        cr: "0.5",
        traits: [
            { name: "Trampling Charge", description: "If the horse moves at least 20 feet straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action." }
        ],
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Water Elemental",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hpDice: "12d10+48",
        speed: "30 ft., swim 90 ft.",
        str: 18, dex: 14, con: 18, int: 5, wis: 10, cha: 8,
        resistances: ["acid", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Aquan",
        cr: "5",
        traits: [
            { name: "Water Form", description: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Freeze", description: "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 feet until the end of its next turn." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage." },
            { name: "Whelm (Recharge 4-6)", description: "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space. The elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength check and succeeding." }
        ],
        source: "SRD"
    },
    {
        name: "Werebear",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "neutral good",
        ac: 10,
        acType: "11 in bear or hybrid form, natural armor",
        hp: 135,
        hpDice: "18d8+54",
        speed: "30 ft. (40 ft., climb 30 ft. in bear or hybrid form)",
        str: 19, dex: 10, con: 17, int: 11, wis: 12, cha: 12,
        skills: ["Perception +7"],
        immunities: ["bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons"],
        senses: "passive Perception 17",
        languages: "Common (can't speak in bear form)",
        cr: "5",
        traits: [
            { name: "Shapechanger", description: "The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Keen Smell", description: "The werebear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid." },
            { name: "Bite (Bear or Hybrid Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with werebear lycanthropy." },
            { name: "Claw (Bear or Hybrid Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage." },
            { name: "Greataxe (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Wereboar",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "neutral evil",
        ac: 10,
        acType: "11 in boar or hybrid form, natural armor",
        hp: 78,
        hpDice: "12d8+24",
        speed: "30 ft. (40 ft. in boar form)",
        str: 17, dex: 10, con: 15, int: 10, wis: 11, cha: 8,
        skills: ["Perception +2"],
        immunities: ["bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons"],
        senses: "passive Perception 12",
        languages: "Common (can't speak in boar form)",
        cr: "4",
        traits: [
            { name: "Shapechanger", description: "The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Charge (Boar or Hybrid Form Only)", description: "If the wereboar moves at least 15 feet straight toward a target and then hits it with its tusks on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." },
            { name: "Relentless (Recharges after a Short or Long Rest)", description: "If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "The wereboar makes two attacks, only one of which can be with its tusks." },
            { name: "Maul (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage." },
            { name: "Tusks (Boar or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy." }
        ],
        source: "SRD"
    },
    {
        name: "Wererat",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "lawful evil",
        ac: 12,
        hp: 33,
        hpDice: "6d8+6",
        speed: "30 ft.",
        str: 10, dex: 15, con: 12, int: 11, wis: 10, cha: 8,
        skills: ["Perception +2", "Stealth +4"],
        immunities: ["bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons"],
        senses: "darkvision 60 ft. (rat form only), passive Perception 12",
        languages: "Common (can't speak in rat form)",
        cr: "2",
        traits: [
            { name: "Shapechanger", description: "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Keen Smell", description: "The wererat has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "The wererat makes two attacks, only one of which can be a bite." },
            { name: "Bite (Rat or Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy." },
            { name: "Shortsword (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
            { name: "Hand Crossbow (Humanoid or Hybrid Form Only)", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Weretiger",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "neutral",
        ac: 12,
        hp: 120,
        hpDice: "16d8+48",
        speed: "30 ft. (40 ft. in tiger form)",
        str: 17, dex: 15, con: 16, int: 10, wis: 13, cha: 11,
        skills: ["Perception +5", "Stealth +4"],
        immunities: ["bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons"],
        senses: "darkvision 60 ft., passive Perception 15",
        languages: "Common (can't speak in tiger form)",
        cr: "4",
        traits: [
            { name: "Shapechanger", description: "The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Keen Hearing and Smell", description: "The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pounce (Tiger or Hybrid Form Only)", description: "If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks." },
            { name: "Bite (Tiger or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy." },
            { name: "Claw (Tiger or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage." },
            { name: "Scimitar (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage." },
            { name: "Longbow (Humanoid or Hybrid Form Only)", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Werewolf",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "chaotic evil",
        ac: 11,
        acType: "12 in wolf or hybrid form, natural armor",
        hp: 58,
        hpDice: "9d8+18",
        speed: "30 ft. (40 ft. in wolf form)",
        str: 15, dex: 13, con: 14, int: 10, wis: 11, cha: 10,
        skills: ["Perception +4", "Stealth +3"],
        immunities: ["bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons"],
        senses: "passive Perception 14",
        languages: "Common (can't speak in wolf form)",
        cr: "3",
        traits: [
            { name: "Shapechanger", description: "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Keen Hearing and Smell", description: "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "The werewolf makes two attacks: one with its bite and one with its claws or spear." },
            { name: "Bite (Wolf or Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy." },
            { name: "Claws (Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (2d4 + 2) slashing damage." },
            { name: "Spear (Humanoid Form Only)", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack." }
        ],
        source: "SRD"
    },
    {
        name: "Wight",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 14,
        acType: "studded leather",
        hp: 45,
        hpDice: "6d8+18",
        speed: "30 ft.",
        str: 15, dex: 14, con: 16, int: 10, wis: 13, cha: 15,
        skills: ["Perception +3", "Stealth +4"],
        resistances: ["necrotic", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        immunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "the languages it knew in life",
        cr: "3",
        traits: [
            { name: "Sunlight Sensitivity", description: "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack." },
            { name: "Life Drain", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time." },
            { name: "Longsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands." },
            { name: "Longbow", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Winter Wolf",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 75,
        hpDice: "10d10+20",
        speed: "50 ft.",
        str: 18, dex: 13, con: 14, int: 7, wis: 12, cha: 8,
        skills: ["Perception +5", "Stealth +3"],
        immunities: ["cold"],
        senses: "passive Perception 15",
        languages: "Common, Giant, Winter Wolf",
        cr: "3",
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Snow Camouflage", description: "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone." },
            { name: "Cold Breath (Recharge 5-6)", description: "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Wolf",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 11,
        hpDice: "2d8+2",
        speed: "40 ft.",
        str: 12, dex: 15, con: 12, int: 3, wis: 12, cha: 6,
        skills: ["Perception +3", "Stealth +4"],
        senses: "passive Perception 13",
        languages: "-",
        cr: "0.25",
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." }
        ],
        source: "SRD"
    },
    {
        name: "Worg",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 26,
        hpDice: "4d10+4",
        speed: "50 ft.",
        str: 16, dex: 13, con: 13, int: 7, wis: 11, cha: 8,
        skills: ["Perception +4"],
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "Goblin, Worg",
        cr: "0.5",
        traits: [
            { name: "Keen Hearing and Smell", description: "The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
        ],
        source: "SRD"
    },
    {
        name: "Wraith",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 13,
        hp: 67,
        hpDice: "9d8+27",
        speed: "0 ft., fly 60 ft. (hover)",
        str: 6, dex: 16, con: 16, int: 12, wis: 14, cha: 15,
        resistances: ["acid", "cold", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        immunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: "darkvision 60 ft., passive Perception 12",
        languages: "the languages it knew in life",
        cr: "5",
        traits: [
            { name: "Incorporeal Movement", description: "The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Life Drain", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8 + 3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." },
            { name: "Create Specter", description: "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time." }
        ],
        source: "SRD"
    },
    {
        name: "Wyvern",
        size: "large",
        type: "dragon",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 110,
        hpDice: "13d10+39",
        speed: "20 ft., fly 80 ft.",
        str: 19, dex: 10, con: 16, int: 5, wis: 12, cha: 6,
        skills: ["Perception +4"],
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "-",
        cr: "6",
        actions: [
            { name: "Multiattack", description: "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage." },
            { name: "Stinger", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage. The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Xorn",
        size: "medium",
        type: "elemental",
        alignment: "neutral",
        ac: 19,
        acType: "natural armor",
        hp: 73,
        hpDice: "7d8+42",
        speed: "20 ft., burrow 20 ft.",
        str: 17, dex: 10, con: 22, int: 11, wis: 10, cha: 11,
        skills: ["Perception +6", "Stealth +3"],
        resistances: ["piercing and slashing from nonmagical attacks that aren't adamantine"],
        senses: "darkvision 60 ft., tremorsense 60 ft., passive Perception 16",
        languages: "Terran",
        cr: "5",
        traits: [
            { name: "Earth Glide", description: "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through." },
            { name: "Stone Camouflage", description: "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." },
            { name: "Treasure Sense", description: "The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 feet of it." }
        ],
        actions: [
            { name: "Multiattack", description: "The xorn makes three claw attacks and one bite attack." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (3d6 + 3) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Young Black Dragon",
        size: "large",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 127,
        hpDice: "15d10+45",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        str: 19, dex: 14, con: 17, int: 12, wis: 11, cha: 15,
        saves: ["Dex +5", "Con +6", "Wis +3", "Cha +5"],
        skills: ["Perception +6", "Stealth +5"],
        immunities: ["acid"],
        senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 16",
        languages: "Common, Draconic",
        cr: "7",
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) acid damage." },
            { name: "Claw", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage." },
            { name: "Acid Breath (Recharge 5-6)", description: "The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Young Blue Dragon",
        size: "large",
        type: "dragon",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 152,
        hpDice: "16d10+64",
        speed: "40 ft., burrow 20 ft., fly 80 ft.",
        str: 21, dex: 10, con: 19, int: 14, wis: 13, cha: 17,
        saves: ["Dex +4", "Con +8", "Wis +5", "Cha +7"],
        skills: ["Perception +9", "Stealth +4"],
        immunities: ["lightning"],
        senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 19",
        languages: "Common, Draconic",
        cr: "9",
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) piercing damage plus 5 (1d10) lightning damage." },
            { name: "Claw", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage." },
            { name: "Lightning Breath (Recharge 5-6)", description: "The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Young Green Dragon",
        size: "large",
        type: "dragon",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 136,
        hpDice: "16d10+48",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        str: 19, dex: 12, con: 17, int: 16, wis: 13, cha: 15,
        saves: ["Dex +4", "Con +6", "Wis +4", "Cha +5"],
        skills: ["Deception +5", "Perception +7", "Stealth +4"],
        immunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 17",
        languages: "Common, Draconic",
        cr: "8",
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage." },
            { name: "Claw", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage." },
            { name: "Poison Breath (Recharge 5-6)", description: "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Young Red Dragon",
        size: "large",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 178,
        hpDice: "17d10+85",
        speed: "40 ft., climb 40 ft., fly 80 ft.",
        str: 23, dex: 10, con: 21, int: 14, wis: 11, cha: 19,
        saves: ["Dex +4", "Con +9", "Wis +4", "Cha +8"],
        skills: ["Perception +8", "Stealth +4"],
        immunities: ["fire"],
        senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 18",
        languages: "Common, Draconic",
        cr: "10",
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 3 (1d6) fire damage." },
            { name: "Claw", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage." },
            { name: "Fire Breath (Recharge 5-6)", description: "The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Young White Dragon",
        size: "large",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 133,
        hpDice: "14d10+56",
        speed: "40 ft., burrow 20 ft., fly 80 ft., swim 40 ft.",
        str: 18, dex: 10, con: 18, int: 6, wis: 11, cha: 12,
        saves: ["Dex +3", "Con +7", "Wis +3", "Cha +4"],
        skills: ["Perception +6", "Stealth +3"],
        immunities: ["cold"],
        senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 16",
        languages: "Common, Draconic",
        cr: "6",
        traits: [
            { name: "Ice Walk", description: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) cold damage." },
            { name: "Claw", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage." },
            { name: "Cold Breath (Recharge 5-6)", description: "The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one." }
        ],
        source: "SRD"
    },
    {
        name: "Zombie",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 8,
        hp: 22,
        hpDice: "3d8+9",
        speed: "20 ft.",
        str: 13, dex: 6, con: 16, int: 3, wis: 6, cha: 5,
        saves: ["Wis +0"],
        immunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: "darkvision 60 ft., passive Perception 8",
        languages: "understands the languages it knew in life but can't speak",
        cr: "0.25",
        traits: [
            { name: "Undead Fortitude", description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead." }
        ],
        actions: [
            { name: "Slam", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage." }
        ],
        source: "SRD"
    }
];

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.SRDMonsters6b = SRDMonsters6b;
}
