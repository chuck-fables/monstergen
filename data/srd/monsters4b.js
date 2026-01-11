// SRD 5.2 Monster Data - Part 4b (D-F)
const SRDMonsters4b = [
    {
        name: "Darkmantle",
        size: "small",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 22,
        hpDice: "5d6+5",
        speed: "10 ft., fly 30 ft.",
        str: 16, dex: 12, con: 13, int: 2, wis: 10, cha: 5,
        skills: ["Stealth +3"],
        senses: "blindsight 60 ft., passive Perception 10",
        languages: "-",
        cr: "0.5",
        traits: [
            { name: "Echolocation", description: "The darkmantle can't use its blindsight while deafened." },
            { name: "False Appearance", description: "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite." }
        ],
        actions: [
            { name: "Crush", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way. While attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target. A creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement." },
            { name: "Darkness Aura (1/Day)", description: "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled." }
        ],
        source: "SRD"
    },
    {
        name: "Death Knight",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 20,
        acType: "plate, shield",
        hp: 180,
        hpDice: "19d8+95",
        speed: "30 ft.",
        str: 20, dex: 11, con: 20, int: 12, wis: 16, cha: 18,
        saves: ["Dex +6", "Wis +9", "Cha +10"],
        immunities: ["necrotic", "poison"],
        conditionImmunities: ["exhaustion", "frightened", "poisoned"],
        senses: "darkvision 120 ft., passive Perception 13",
        languages: "Abyssal, Common",
        cr: "17",
        traits: [
            { name: "Magic Resistance", description: "The death knight has advantage on saving throws against spells and other magical effects." },
            { name: "Marshal Undead", description: "Unless the death knight is incapacitated, it and undead creatures of its choice within 60 feet of it have advantage on saving throws against features that turn undead." }
        ],
        actions: [
            { name: "Multiattack", description: "The death knight makes three longsword attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) slashing damage, or 10 (1d10 + 5) slashing damage if used with two hands, plus 18 (4d8) necrotic damage." },
            { name: "Hellfire Orb (1/Day)", description: "The death knight hurls a magical ball of fire that explodes at a point it can see within 120 feet of it. Each creature in a 20-foot-radius sphere centered on that point must make a DC 18 Dexterity saving throw. The sphere spreads around corners. A creature takes 35 (10d6) fire damage and 35 (10d6) necrotic damage on a failed save, or half as much damage on a successful one." }
        ],
        reactions: [
            { name: "Parry", description: "The death knight adds 6 to its AC against one melee attack that would hit it. To do so, the death knight must see the attacker and be wielding a melee weapon." }
        ],
        source: "SRD"
    },
    {
        name: "Demilich",
        size: "tiny",
        type: "undead",
        alignment: "neutral evil",
        ac: 20,
        acType: "natural armor",
        hp: 80,
        hpDice: "20d4",
        speed: "0 ft., fly 30 ft. (hover)",
        str: 1, dex: 20, con: 10, int: 20, wis: 17, cha: 20,
        saves: ["Con +6", "Int +11", "Wis +9", "Cha +11"],
        resistances: ["bludgeoning, piercing, and slashing from magic weapons"],
        immunities: ["necrotic", "poison", "psychic", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "deafened", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned", "prone", "stunned"],
        senses: "truesight 120 ft., passive Perception 13",
        languages: "-",
        cr: "18",
        traits: [
            { name: "Avoidance", description: "If the demilich is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Legendary Resistance (3/Day)", description: "If the demilich fails a saving throw, it can choose to succeed instead." },
            { name: "Turn Immunity", description: "The demilich is immune to effects that turn undead." }
        ],
        actions: [
            { name: "Howl (Recharge 5-6)", description: "The demilich emits a bloodcurdling howl. Each creature within 30 feet of the demilich that can hear the howl must succeed on a DC 15 Constitution saving throw or drop to 0 hit points. On a successful save, the creature is frightened until the end of its next turn." },
            { name: "Life Drain", description: "The demilich targets up to three creatures that it can see within 10 feet of it. Each target must succeed on a DC 19 Constitution saving throw or take 21 (6d6) necrotic damage, and the demilich regains hit points equal to the total damage dealt to all targets." }
        ],
        legendaryActions: [
            { name: "Flight", description: "The demilich flies up to half its flying speed." },
            { name: "Cloud of Dust", description: "The demilich magically swirls its dusty remains. Each creature within 10 feet of the demilich, including around a corner, must succeed on a DC 15 Constitution saving throw or be blinded until the end of the demilich's next turn." },
            { name: "Energy Drain (Costs 2 Actions)", description: "Each creature within 30 feet of the demilich must make a DC 15 Constitution saving throw. On a failed save, the creature's hit point maximum is magically reduced by 10 (3d6). If a creature's hit point maximum is reduced to 0 by this effect, the creature dies. A creature's hit point maximum can be restored with a greater restoration spell or similar magic." },
            { name: "Vile Curse (Costs 3 Actions)", description: "The demilich targets one creature it can see within 30 feet of it. The target must succeed on a DC 15 Wisdom saving throw or be magically cursed. Until the curse ends, the target has disadvantage on attack rolls and saving throws. The target can repeat the saving throw at the end of each of its turns, ending the curse on a success." }
        ],
        source: "SRD"
    },
    {
        name: "Deva",
        size: "medium",
        type: "celestial",
        alignment: "lawful good",
        ac: 17,
        acType: "natural armor",
        hp: 136,
        hpDice: "16d8+64",
        speed: "30 ft., fly 90 ft.",
        str: 18, dex: 18, con: 18, int: 17, wis: 20, cha: 20,
        saves: ["Wis +9", "Cha +9"],
        skills: ["Insight +9", "Perception +9"],
        resistances: ["radiant", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened"],
        senses: "darkvision 120 ft., passive Perception 19",
        languages: "all, telepathy 120 ft.",
        cr: "10",
        traits: [
            { name: "Angelic Weapons", description: "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack)." },
            { name: "Innate Spellcasting", description: "The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components: At will: detect evil and good; 1/day each: commune, raise dead" },
            { name: "Magic Resistance", description: "The deva has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The deva makes two melee attacks." },
            { name: "Mace", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage." },
            { name: "Healing Touch (3/Day)", description: "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness." },
            { name: "Change Shape", description: "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice). In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks." }
        ],
        source: "SRD"
    },
    {
        name: "Dire Wolf",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 37,
        hpDice: "5d10+10",
        speed: "50 ft.",
        str: 17, dex: 15, con: 15, int: 3, wis: 12, cha: 7,
        skills: ["Perception +3", "Stealth +4"],
        senses: "passive Perception 13",
        languages: "-",
        cr: "1",
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
        ],
        source: "SRD"
    },
    {
        name: "Displacer Beast",
        size: "large",
        type: "monstrosity",
        alignment: "lawful evil",
        ac: 13,
        acType: "natural armor",
        hp: 85,
        hpDice: "10d10+30",
        speed: "40 ft.",
        str: 18, dex: 15, con: 16, int: 6, wis: 12, cha: 8,
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "-",
        cr: "3",
        traits: [
            { name: "Avoidance", description: "If the displacer beast is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Displacement", description: "The displacer beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage. If it is hit by an attack, this trait is disrupted until the end of its next turn. This trait is also disrupted while the displacer beast is incapacitated or has a speed of 0." }
        ],
        actions: [
            { name: "Multiattack", description: "The displacer beast makes two attacks with its tentacles." },
            { name: "Tentacle", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 3 (1d6) piercing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Djinni",
        size: "large",
        type: "elemental",
        alignment: "chaotic good",
        ac: 17,
        acType: "natural armor",
        hp: 161,
        hpDice: "14d10+84",
        speed: "30 ft., fly 90 ft.",
        str: 21, dex: 15, con: 22, int: 15, wis: 16, cha: 20,
        saves: ["Dex +6", "Wis +7", "Cha +9"],
        immunities: ["lightning", "thunder"],
        senses: "darkvision 120 ft., passive Perception 13",
        languages: "Auran",
        cr: "11",
        traits: [
            { name: "Elemental Demise", description: "If the djinni dies, its body disintegrates into a warm breeze, leaving behind only equipment the djinni was wearing or carrying." },
            { name: "Innate Spellcasting", description: "The djinni's innate spellcasting ability is Charisma (spell save DC 17, +9 to hit with spell attacks). It can innately cast the following spells, requiring no material components: At will: detect evil and good, detect magic, thunderwave; 3/day each: create food and water, tongues, wind walk; 1/day each: conjure elemental (air elemental only), creation, gaseous form, invisibility, major image, plane shift" }
        ],
        actions: [
            { name: "Multiattack", description: "The djinni makes three scimitar attacks." },
            { name: "Scimitar", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice)." },
            { name: "Create Whirlwind", description: "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it. A creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind." }
        ],
        source: "SRD"
    },
    {
        name: "Doppelganger",
        size: "medium",
        type: "monstrosity",
        subtype: "shapechanger",
        alignment: "neutral",
        ac: 14,
        hp: 52,
        hpDice: "8d8+16",
        speed: "30 ft.",
        str: 11, dex: 18, con: 14, int: 11, wis: 12, cha: 14,
        skills: ["Deception +6", "Insight +3"],
        conditionImmunities: ["charmed"],
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "Common",
        cr: "3",
        traits: [
            { name: "Shapechanger", description: "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Ambusher", description: "The doppelganger has advantage on attack rolls against any creature it has surprised." },
            { name: "Surprise Attack", description: "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The doppelganger makes two melee attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage." },
            { name: "Read Thoughts", description: "The doppelganger magically reads the surface thoughts of one creature within 60 feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target." }
        ],
        source: "SRD"
    },
    {
        name: "Draft Horse",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 19,
        hpDice: "3d10+3",
        speed: "40 ft.",
        str: 18, dex: 10, con: 12, int: 2, wis: 11, cha: 7,
        senses: "passive Perception 10",
        languages: "-",
        cr: "0.25",
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Dragon Turtle",
        size: "gargantuan",
        type: "dragon",
        alignment: "neutral",
        ac: 20,
        acType: "natural armor",
        hp: 341,
        hpDice: "22d20+110",
        speed: "20 ft., swim 40 ft.",
        str: 25, dex: 10, con: 20, int: 10, wis: 12, cha: 12,
        saves: ["Dex +6", "Con +11", "Wis +7"],
        resistances: ["fire"],
        senses: "darkvision 120 ft., passive Perception 11",
        languages: "Aquan, Draconic",
        cr: "17",
        traits: [
            { name: "Amphibious", description: "The dragon turtle can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 16 (2d8 + 7) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone." },
            { name: "Steam Breath (Recharge 5-6)", description: "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage." }
        ],
        source: "SRD"
    },
    {
        name: "Dretch",
        size: "small",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 11,
        acType: "natural armor",
        hp: 18,
        hpDice: "4d6+4",
        speed: "20 ft.",
        str: 11, dex: 11, con: 12, int: 5, wis: 8, cha: 3,
        resistances: ["cold", "fire", "lightning"],
        immunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: "darkvision 60 ft., passive Perception 9",
        languages: "Abyssal, telepathy 60 ft. (works only with creatures that understand Abyssal)",
        cr: "0.25",
        actions: [
            { name: "Multiattack", description: "The dretch makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage." },
            { name: "Fetid Cloud (1/Day)", description: "A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions." }
        ],
        source: "SRD"
    },
    {
        name: "Drow",
        size: "medium",
        type: "humanoid",
        subtype: "elf",
        alignment: "neutral evil",
        ac: 15,
        acType: "chain shirt",
        hp: 13,
        hpDice: "3d8",
        speed: "30 ft.",
        str: 10, dex: 14, con: 10, int: 11, wis: 11, cha: 12,
        skills: ["Perception +2", "Stealth +4"],
        senses: "darkvision 120 ft., passive Perception 12",
        languages: "Elvish, Undercommon",
        cr: "0.25",
        traits: [
            { name: "Fey Ancestry", description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep." },
            { name: "Innate Spellcasting", description: "The drow's spellcasting ability is Charisma (spell save DC 11). It can innately cast the following spells, requiring no material components: At will: dancing lights; 1/day each: darkness, faerie fire" },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
            { name: "Hand Crossbow", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake." }
        ],
        source: "SRD"
    },
    {
        name: "Dust Mephit",
        size: "small",
        type: "elemental",
        alignment: "neutral evil",
        ac: 12,
        hp: 17,
        hpDice: "5d6",
        speed: "30 ft., fly 30 ft.",
        str: 5, dex: 14, con: 10, int: 9, wis: 11, cha: 10,
        skills: ["Perception +2", "Stealth +4"],
        vulnerabilities: ["fire"],
        immunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: "darkvision 60 ft., passive Perception 12",
        languages: "Auran, Terran",
        cr: "0.5",
        traits: [
            { name: "Death Burst", description: "When the mephit dies, it explodes in a burst of dust. Each creature within 5 feet of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success." },
            { name: "Innate Spellcasting (1/Day)", description: "The mephit can innately cast sleep, requiring no material components. Its innate spellcasting ability is Charisma." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) slashing damage." },
            { name: "Blinding Breath (Recharge 6)", description: "The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        source: "SRD"
    },
    {
        name: "Eagle",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hpDice: "1d6",
        speed: "10 ft., fly 60 ft.",
        str: 6, dex: 15, con: 10, int: 2, wis: 14, cha: 7,
        skills: ["Perception +4"],
        senses: "passive Perception 14",
        languages: "-",
        cr: "0",
        traits: [
            { name: "Keen Sight", description: "The eagle has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Talons", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Earth Elemental",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 17,
        acType: "natural armor",
        hp: 126,
        hpDice: "12d10+60",
        speed: "30 ft., burrow 30 ft.",
        str: 20, dex: 8, con: 20, int: 5, wis: 10, cha: 5,
        vulnerabilities: ["thunder"],
        resistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["poison"],
        conditionImmunities: ["exhaustion", "paralyzed", "petrified", "poisoned", "unconscious"],
        senses: "darkvision 60 ft., tremorsense 60 ft., passive Perception 10",
        languages: "Terran",
        cr: "5",
        traits: [
            { name: "Earth Glide", description: "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through." },
            { name: "Siege Monster", description: "The elemental deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Efreeti",
        size: "large",
        type: "elemental",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 200,
        hpDice: "16d10+112",
        speed: "40 ft., fly 60 ft.",
        str: 22, dex: 12, con: 24, int: 16, wis: 15, cha: 16,
        saves: ["Int +7", "Wis +6", "Cha +7"],
        immunities: ["fire"],
        senses: "darkvision 120 ft., passive Perception 12",
        languages: "Ignan",
        cr: "11",
        traits: [
            { name: "Elemental Demise", description: "If the efreeti dies, its body disintegrates in a flash of fire and puff of smoke, leaving behind only equipment the efreeti was wearing or carrying." },
            { name: "Innate Spellcasting", description: "The efreeti's innate spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It can innately cast the following spells, requiring no material components: At will: detect magic; 3/day each: enlarge/reduce, tongues; 1/day each: conjure elemental (fire elemental only), gaseous form, invisibility, major image, plane shift, wall of fire" }
        ],
        actions: [
            { name: "Multiattack", description: "The efreeti makes two scimitar attacks or uses its Hurl Flame twice." },
            { name: "Scimitar", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage plus 7 (2d6) fire damage." },
            { name: "Hurl Flame", description: "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17 (5d6) fire damage." }
        ],
        source: "SRD"
    },
    {
        name: "Elephant",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 76,
        hpDice: "8d12+24",
        speed: "40 ft.",
        str: 22, dex: 9, con: 17, int: 3, wis: 11, cha: 6,
        senses: "passive Perception 10",
        languages: "-",
        cr: "4",
        traits: [
            { name: "Trampling Charge", description: "If the elephant moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) piercing damage." },
            { name: "Stomp", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Erinyes",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 153,
        hpDice: "18d8+72",
        speed: "30 ft., fly 60 ft.",
        str: 18, dex: 16, con: 18, int: 14, wis: 14, cha: 18,
        saves: ["Dex +7", "Con +8", "Wis +6", "Cha +8"],
        resistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        immunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: "truesight 120 ft., passive Perception 12",
        languages: "Infernal, telepathy 120 ft.",
        cr: "12",
        traits: [
            { name: "Hellish Weapons", description: "The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit (included in the attacks)." },
            { name: "Magic Resistance", description: "The erinyes has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The erinyes makes three attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands, plus 13 (3d8) poison damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 13 (3d8) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic." }
        ],
        reactions: [
            { name: "Parry", description: "The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon." }
        ],
        source: "SRD"
    },
    {
        name: "Fire Elemental",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 13,
        hp: 102,
        hpDice: "12d10+36",
        speed: "50 ft.",
        str: 10, dex: 17, con: 16, int: 6, wis: 10, cha: 7,
        resistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        immunities: ["fire", "poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Ignan",
        cr: "5",
        traits: [
            { name: "Fire Form", description: "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns." },
            { name: "Illumination", description: "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 feet." },
            { name: "Water Susceptibility", description: "For every 5 feet the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two touch attacks." },
            { name: "Touch", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns." }
        ],
        source: "SRD"
    },
    {
        name: "Fire Giant",
        size: "huge",
        type: "giant",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 162,
        hpDice: "13d12+78",
        speed: "30 ft.",
        str: 25, dex: 9, con: 23, int: 10, wis: 14, cha: 13,
        saves: ["Dex +3", "Con +10", "Cha +5"],
        skills: ["Athletics +11", "Perception +6"],
        immunities: ["fire"],
        senses: "passive Perception 16",
        languages: "Giant",
        cr: "9",
        actions: [
            { name: "Multiattack", description: "The giant makes two greatsword attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 28 (6d6 + 7) slashing damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. Hit: 29 (4d10 + 7) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Flesh Golem",
        size: "medium",
        type: "construct",
        alignment: "neutral",
        ac: 9,
        hp: 93,
        hpDice: "11d8+44",
        speed: "30 ft.",
        str: 19, dex: 9, con: 18, int: 6, wis: 10, cha: 5,
        immunities: ["lightning", "poison", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "understands the languages of its creator but can't speak",
        cr: "5",
        traits: [
            { name: "Berserk", description: "Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points." },
            { name: "Aversion of Fire", description: "If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn." },
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Lightning Absorption", description: "Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage." }
        ],
        source: "SRD"
    },
    {
        name: "Flying Snake",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        hp: 5,
        hpDice: "2d4",
        speed: "30 ft., fly 60 ft., swim 30 ft.",
        str: 4, dex: 18, con: 11, int: 2, wis: 12, cha: 5,
        senses: "blindsight 10 ft., passive Perception 11",
        languages: "-",
        cr: "0.125",
        traits: [
            { name: "Flyby", description: "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1 piercing damage plus 7 (3d4) poison damage." }
        ],
        source: "SRD"
    },
    {
        name: "Flying Sword",
        size: "small",
        type: "construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 17,
        hpDice: "5d6",
        speed: "0 ft., fly 50 ft. (hover)",
        str: 12, dex: 15, con: 11, int: 1, wis: 5, cha: 1,
        saves: ["Dex +4"],
        immunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 7",
        languages: "-",
        cr: "0.25",
        traits: [
            { name: "Antimagic Susceptibility", description: "The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute." },
            { name: "False Appearance", description: "While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword." }
        ],
        actions: [
            { name: "Longsword", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage." }
        ],
        source: "SRD"
    },
    {
        name: "Frog",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 1,
        hpDice: "1d4-1",
        speed: "20 ft., swim 20 ft.",
        str: 1, dex: 13, con: 8, int: 1, wis: 8, cha: 3,
        skills: ["Perception +1", "Stealth +3"],
        senses: "darkvision 30 ft., passive Perception 11",
        languages: "-",
        cr: "0",
        traits: [
            { name: "Amphibious", description: "The frog can breathe air and water." },
            { name: "Standing Leap", description: "The frog's long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start." }
        ],
        actions: [],
        source: "SRD"
    },
    {
        name: "Frost Giant",
        size: "huge",
        type: "giant",
        alignment: "neutral evil",
        ac: 15,
        acType: "patchwork armor",
        hp: 138,
        hpDice: "12d12+60",
        speed: "40 ft.",
        str: 23, dex: 9, con: 21, int: 9, wis: 10, cha: 12,
        saves: ["Con +8", "Wis +3", "Cha +4"],
        skills: ["Athletics +9", "Perception +3"],
        immunities: ["cold"],
        senses: "passive Perception 13",
        languages: "Giant",
        cr: "8",
        actions: [
            { name: "Multiattack", description: "The giant makes two greataxe attacks." },
            { name: "Greataxe", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12 + 6) slashing damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage." }
        ],
        source: "SRD"
    }
];

if (typeof window !== 'undefined') { window.SRDMonsters4b = SRDMonsters4b; }
