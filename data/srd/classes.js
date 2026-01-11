// SRD 5.2 Class and Subclass Data
const SRDClasses = [
    {
        name: "Barbarian",
        hitDie: "d12",
        primaryAbility: "Strength",
        savingThrows: ["Strength", "Constitution"],
        armorProficiencies: ["Light armor", "Medium armor", "Shields"],
        weaponProficiencies: ["Simple weapons", "Martial weapons"],
        skillChoices: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
        numSkillChoices: 2,
        features: [
            { level: 1, name: "Rage", description: "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain advantage on Strength checks and saving throws, bonus rage damage on melee weapon attacks using Strength, and resistance to bludgeoning, piercing, and slashing damage." },
            { level: 1, name: "Unarmored Defense", description: "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit." },
            { level: 2, name: "Reckless Attack", description: "You can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly, giving you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn." },
            { level: 2, name: "Danger Sense", description: "You gain an uncanny sense of when things nearby aren't as they should be, giving you advantage on Dexterity saving throws against effects that you can see." },
            { level: 3, name: "Primal Path", description: "You choose a path that shapes the nature of your rage." },
            { level: 5, name: "Extra Attack", description: "You can attack twice, instead of once, whenever you take the Attack action on your turn." },
            { level: 5, name: "Fast Movement", description: "Your speed increases by 10 feet while you aren't wearing heavy armor." },
            { level: 7, name: "Feral Instinct", description: "Your instincts are so honed that you have advantage on initiative rolls." },
            { level: 9, name: "Brutal Critical", description: "You can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack." },
            { level: 11, name: "Relentless Rage", description: "Your rage can keep you fighting despite grievous wounds." },
            { level: 15, name: "Persistent Rage", description: "Your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it." },
            { level: 18, name: "Indomitable Might", description: "If your total for a Strength check is less than your Strength score, you can use that score in place of the total." },
            { level: 20, name: "Primal Champion", description: "You embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24." }
        ],
        subclasses: [
            {
                name: "Path of the Berserker",
                description: "For some barbarians, rage is a means to an end—that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood.",
                features: [
                    { level: 3, name: "Frenzy", description: "You can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion." },
                    { level: 6, name: "Mindless Rage", description: "You can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage." },
                    { level: 10, name: "Intimidating Presence", description: "You can use your action to frighten someone with your menacing presence." },
                    { level: 14, name: "Retaliation", description: "When you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature." }
                ],
                source: "SRD"
            }
        ],
        source: "SRD"
    },
    {
        name: "Bard",
        hitDie: "d8",
        primaryAbility: "Charisma",
        savingThrows: ["Dexterity", "Charisma"],
        armorProficiencies: ["Light armor"],
        weaponProficiencies: ["Simple weapons", "Hand crossbows", "Longswords", "Rapiers", "Shortswords"],
        toolProficiencies: ["Three musical instruments of your choice"],
        skillChoices: ["Any"],
        numSkillChoices: 3,
        spellcasting: { ability: "Charisma", type: "known" },
        features: [
            { level: 1, name: "Spellcasting", description: "You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music." },
            { level: 1, name: "Bardic Inspiration", description: "You can inspire others through stirring words or music. A creature within 60 feet that can hear you gains a Bardic Inspiration die (d6) to add to one ability check, attack roll, or saving throw it makes." },
            { level: 2, name: "Jack of All Trades", description: "You can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus." },
            { level: 2, name: "Song of Rest", description: "You can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points." },
            { level: 3, name: "Bard College", description: "You delve into the advanced techniques of a bard college of your choice." },
            { level: 3, name: "Expertise", description: "Choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies." },
            { level: 5, name: "Font of Inspiration", description: "You regain all of your expended uses of Bardic Inspiration when you finish a short or long rest." },
            { level: 6, name: "Countercharm", description: "You gain the ability to use musical notes or words of power to disrupt mind-influencing effects." },
            { level: 10, name: "Magical Secrets", description: "You have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast." },
            { level: 20, name: "Superior Inspiration", description: "When you roll initiative and have no uses of Bardic Inspiration left, you regain one use." }
        ],
        subclasses: [
            {
                name: "College of Lore",
                description: "Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales.",
                features: [
                    { level: 3, name: "Bonus Proficiencies", description: "You gain proficiency with three skills of your choice." },
                    { level: 3, name: "Cutting Words", description: "You learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others." },
                    { level: 6, name: "Additional Magical Secrets", description: "You learn two spells of your choice from any class." },
                    { level: 14, name: "Peerless Skill", description: "When you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check." }
                ],
                source: "SRD"
            }
        ],
        source: "SRD"
    },
    {
        name: "Cleric",
        hitDie: "d8",
        primaryAbility: "Wisdom",
        savingThrows: ["Wisdom", "Charisma"],
        armorProficiencies: ["Light armor", "Medium armor", "Shields"],
        weaponProficiencies: ["Simple weapons"],
        skillChoices: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
        numSkillChoices: 2,
        spellcasting: { ability: "Wisdom", type: "prepared" },
        features: [
            { level: 1, name: "Spellcasting", description: "As a conduit for divine power, you can cast cleric spells." },
            { level: 1, name: "Divine Domain", description: "Choose one domain related to your deity." },
            { level: 2, name: "Channel Divinity", description: "You gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects." },
            { level: 2, name: "Channel Divinity: Turn Undead", description: "As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw." },
            { level: 5, name: "Destroy Undead", description: "When an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold." },
            { level: 10, name: "Divine Intervention", description: "You can call on your deity to intervene on your behalf when your need is great." }
        ],
        subclasses: [
            {
                name: "Life Domain",
                description: "The Life domain focuses on the vibrant positive energy—one of the fundamental forces of the universe—that sustains all life.",
                domainSpells: [
                    { level: 1, spells: ["Bless", "Cure Wounds"] },
                    { level: 3, spells: ["Lesser Restoration", "Spiritual Weapon"] },
                    { level: 5, spells: ["Beacon of Hope", "Revivify"] },
                    { level: 7, spells: ["Death Ward", "Guardian of Faith"] },
                    { level: 9, spells: ["Mass Cure Wounds", "Raise Dead"] }
                ],
                features: [
                    { level: 1, name: "Bonus Proficiency", description: "You gain proficiency with heavy armor." },
                    { level: 1, name: "Disciple of Life", description: "Your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level." },
                    { level: 2, name: "Channel Divinity: Preserve Life", description: "You can use your Channel Divinity to heal the badly injured." },
                    { level: 6, name: "Blessed Healer", description: "The healing spells you cast on others heal you as well." },
                    { level: 8, name: "Divine Strike", description: "You gain the ability to infuse your weapon strikes with divine energy." },
                    { level: 17, name: "Supreme Healing", description: "When you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die." }
                ],
                source: "SRD"
            }
        ],
        source: "SRD"
    },
    {
        name: "Druid",
        hitDie: "d8",
        primaryAbility: "Wisdom",
        savingThrows: ["Intelligence", "Wisdom"],
        armorProficiencies: ["Light armor", "Medium armor", "Shields (druids will not wear armor or use shields made of metal)"],
        weaponProficiencies: ["Clubs", "Daggers", "Darts", "Javelins", "Maces", "Quarterstaffs", "Scimitars", "Sickles", "Slings", "Spears"],
        toolProficiencies: ["Herbalism kit"],
        skillChoices: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
        numSkillChoices: 2,
        spellcasting: { ability: "Wisdom", type: "prepared" },
        features: [
            { level: 1, name: "Druidic", description: "You know Druidic, the secret language of druids." },
            { level: 1, name: "Spellcasting", description: "Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will." },
            { level: 2, name: "Wild Shape", description: "You can use your action to magically assume the shape of a beast that you have seen before." },
            { level: 2, name: "Druid Circle", description: "You choose to identify with a circle of druids." },
            { level: 18, name: "Timeless Body", description: "The primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year." },
            { level: 18, name: "Beast Spells", description: "You can cast many of your druid spells in any shape you assume using Wild Shape." },
            { level: 20, name: "Archdruid", description: "You can use your Wild Shape an unlimited number of times." }
        ],
        subclasses: [
            {
                name: "Circle of the Land",
                description: "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition.",
                features: [
                    { level: 2, name: "Bonus Cantrip", description: "You learn one additional druid cantrip of your choice." },
                    { level: 2, name: "Natural Recovery", description: "During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher." },
                    { level: 3, name: "Circle Spells", description: "Your mystical connection to the land infuses you with the ability to cast certain spells." },
                    { level: 6, name: "Land's Stride", description: "Moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard." },
                    { level: 10, name: "Nature's Ward", description: "You can't be charmed or frightened by elementals or fey, and you are immune to poison and disease." },
                    { level: 14, name: "Nature's Sanctuary", description: "Creatures of the natural world sense your connection to nature and become hesitant to attack you." }
                ],
                source: "SRD"
            }
        ],
        source: "SRD"
    },
    {
        name: "Fighter",
        hitDie: "d10",
        primaryAbility: "Strength or Dexterity",
        savingThrows: ["Strength", "Constitution"],
        armorProficiencies: ["All armor", "Shields"],
        weaponProficiencies: ["Simple weapons", "Martial weapons"],
        skillChoices: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],
        numSkillChoices: 2,
        features: [
            { level: 1, name: "Fighting Style", description: "You adopt a particular style of fighting as your specialty." },
            { level: 1, name: "Second Wind", description: "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level." },
            { level: 2, name: "Action Surge", description: "You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action." },
            { level: 3, name: "Martial Archetype", description: "You choose an archetype that you strive to emulate in your combat styles and techniques." },
            { level: 5, name: "Extra Attack", description: "You can attack twice, instead of once, whenever you take the Attack action on your turn." },
            { level: 9, name: "Indomitable", description: "You can reroll a saving throw that you fail. If you do so, you must use the new roll." },
            { level: 11, name: "Extra Attack (2)", description: "You can attack three times whenever you take the Attack action on your turn." },
            { level: 20, name: "Extra Attack (3)", description: "You can attack four times whenever you take the Attack action on your turn." }
        ],
        subclasses: [
            {
                name: "Champion",
                description: "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection.",
                features: [
                    { level: 3, name: "Improved Critical", description: "Your weapon attacks score a critical hit on a roll of 19 or 20." },
                    { level: 7, name: "Remarkable Athlete", description: "You can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus." },
                    { level: 10, name: "Additional Fighting Style", description: "You can choose a second option from the Fighting Style class feature." },
                    { level: 15, name: "Superior Critical", description: "Your weapon attacks score a critical hit on a roll of 18–20." },
                    { level: 18, name: "Survivor", description: "You attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left." }
                ],
                source: "SRD"
            }
        ],
        source: "SRD"
    },
    {
        name: "Monk",
        hitDie: "d8",
        primaryAbility: "Dexterity & Wisdom",
        savingThrows: ["Strength", "Dexterity"],
        armorProficiencies: ["None"],
        weaponProficiencies: ["Simple weapons", "Shortswords"],
        toolProficiencies: ["One type of artisan's tools or one musical instrument"],
        skillChoices: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
        numSkillChoices: 2,
        features: [
            { level: 1, name: "Unarmored Defense", description: "While you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier." },
            { level: 1, name: "Martial Arts", description: "Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons." },
            { level: 2, name: "Ki", description: "Your training allows you to harness the mystic energy of ki." },
            { level: 2, name: "Unarmored Movement", description: "Your speed increases by 10 feet while you are not wearing armor or wielding a shield." },
            { level: 3, name: "Monastic Tradition", description: "You commit yourself to a monastic tradition." },
            { level: 3, name: "Deflect Missiles", description: "You can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack." },
            { level: 4, name: "Slow Fall", description: "You can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level." },
            { level: 5, name: "Extra Attack", description: "You can attack twice, instead of once, whenever you take the Attack action on your turn." },
            { level: 5, name: "Stunning Strike", description: "You can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike." },
            { level: 6, name: "Ki-Empowered Strikes", description: "Your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage." },
            { level: 7, name: "Evasion", description: "When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail." },
            { level: 7, name: "Stillness of Mind", description: "You can use your action to end one effect on yourself that is causing you to be charmed or frightened." },
            { level: 10, name: "Purity of Body", description: "Your mastery of the ki flowing through you makes you immune to disease and poison." },
            { level: 13, name: "Tongue of the Sun and Moon", description: "You learn to touch the ki of other minds so that you understand all spoken languages." },
            { level: 14, name: "Diamond Soul", description: "Your mastery of ki grants you proficiency in all saving throws." },
            { level: 15, name: "Timeless Body", description: "Your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically." },
            { level: 18, name: "Empty Body", description: "You can use your action to spend 4 ki points to become invisible for 1 minute." },
            { level: 20, name: "Perfect Self", description: "When you roll for initiative and have no ki points remaining, you regain 4 ki points." }
        ],
        subclasses: [
            {
                name: "Way of the Open Hand",
                description: "Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed.",
                features: [
                    { level: 3, name: "Open Hand Technique", description: "You can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of several effects on that target." },
                    { level: 6, name: "Wholeness of Body", description: "You gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again." },
                    { level: 11, name: "Tranquility", description: "You can enter a special meditation that surrounds you with an aura of peace." },
                    { level: 17, name: "Quivering Palm", description: "You gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level." }
                ],
                source: "SRD"
            }
        ],
        source: "SRD"
    },
    {
        name: "Paladin",
        hitDie: "d10",
        primaryAbility: "Strength & Charisma",
        savingThrows: ["Wisdom", "Charisma"],
        armorProficiencies: ["All armor", "Shields"],
        weaponProficiencies: ["Simple weapons", "Martial weapons"],
        skillChoices: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
        numSkillChoices: 2,
        spellcasting: { ability: "Charisma", type: "prepared", startLevel: 2 },
        features: [
            { level: 1, name: "Divine Sense", description: "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears." },
            { level: 1, name: "Lay on Hands", description: "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5." },
            { level: 2, name: "Fighting Style", description: "You adopt a style of fighting as your specialty." },
            { level: 2, name: "Spellcasting", description: "You have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does." },
            { level: 2, name: "Divine Smite", description: "When you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage." },
            { level: 3, name: "Divine Health", description: "The divine magic flowing through you makes you immune to disease." },
            { level: 3, name: "Sacred Oath", description: "You swear the oath that binds you as a paladin forever." },
            { level: 5, name: "Extra Attack", description: "You can attack twice, instead of once, whenever you take the Attack action on your turn." },
            { level: 6, name: "Aura of Protection", description: "Whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1)." },
            { level: 10, name: "Aura of Courage", description: "You and friendly creatures within 10 feet of you can't be frightened while you are conscious." },
            { level: 11, name: "Improved Divine Smite", description: "Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage." },
            { level: 14, name: "Cleansing Touch", description: "You can use your action to end one spell on yourself or on one willing creature that you touch." }
        ],
        subclasses: [
            {
                name: "Oath of Devotion",
                description: "The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order.",
                oathSpells: [
                    { level: 3, spells: ["Protection from Evil and Good", "Sanctuary"] },
                    { level: 5, spells: ["Lesser Restoration", "Zone of Truth"] },
                    { level: 9, spells: ["Beacon of Hope", "Dispel Magic"] },
                    { level: 13, spells: ["Freedom of Movement", "Guardian of Faith"] },
                    { level: 17, spells: ["Commune", "Flame Strike"] }
                ],
                features: [
                    { level: 3, name: "Channel Divinity: Sacred Weapon", description: "As an action, you can imbue one weapon that you are holding with positive energy." },
                    { level: 3, name: "Channel Divinity: Turn the Unholy", description: "As an action, you present your holy symbol and speak a prayer censuring fiends and undead." },
                    { level: 7, name: "Aura of Devotion", description: "You and friendly creatures within 10 feet of you can't be charmed while you are conscious." },
                    { level: 15, name: "Purity of Spirit", description: "You are always under the effects of a protection from evil and good spell." },
                    { level: 20, name: "Holy Nimbus", description: "As an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that." }
                ],
                source: "SRD"
            }
        ],
        source: "SRD"
    },
    {
        name: "Ranger",
        hitDie: "d10",
        primaryAbility: "Dexterity & Wisdom",
        savingThrows: ["Strength", "Dexterity"],
        armorProficiencies: ["Light armor", "Medium armor", "Shields"],
        weaponProficiencies: ["Simple weapons", "Martial weapons"],
        skillChoices: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
        numSkillChoices: 3,
        spellcasting: { ability: "Wisdom", type: "known", startLevel: 2 },
        features: [
            { level: 1, name: "Favored Enemy", description: "You have significant experience studying, tracking, hunting, and even talking to a certain type of enemy." },
            { level: 1, name: "Natural Explorer", description: "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions." },
            { level: 2, name: "Fighting Style", description: "You adopt a particular style of fighting as your specialty." },
            { level: 2, name: "Spellcasting", description: "You have learned to use the magical essence of nature to cast spells, much as a druid does." },
            { level: 3, name: "Ranger Archetype", description: "You choose an archetype that you strive to emulate." },
            { level: 3, name: "Primeval Awareness", description: "You can use your action and expend one ranger spell slot to focus your awareness on the region around you." },
            { level: 5, name: "Extra Attack", description: "You can attack twice, instead of once, whenever you take the Attack action on your turn." },
            { level: 8, name: "Land's Stride", description: "Moving through nonmagical difficult terrain costs you no extra movement." },
            { level: 10, name: "Hide in Plain Sight", description: "You can spend 1 minute creating camouflage for yourself." },
            { level: 14, name: "Vanish", description: "You can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail." },
            { level: 18, name: "Feral Senses", description: "You gain preternatural senses that help you fight creatures you can't see." },
            { level: 20, name: "Foe Slayer", description: "You become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies." }
        ],
        subclasses: [
            {
                name: "Hunter",
                description: "Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness.",
                features: [
                    { level: 3, name: "Hunter's Prey", description: "You gain one of the following features of your choice: Colossus Slayer, Giant Killer, or Horde Breaker." },
                    { level: 7, name: "Defensive Tactics", description: "You gain one of the following features of your choice: Escape the Horde, Multiattack Defense, or Steel Will." },
                    { level: 11, name: "Multiattack", description: "You gain one of the following features of your choice: Volley or Whirlwind Attack." },
                    { level: 15, name: "Superior Hunter's Defense", description: "You gain one of the following features of your choice: Evasion, Stand Against the Tide, or Uncanny Dodge." }
                ],
                source: "SRD"
            }
        ],
        source: "SRD"
    },
    {
        name: "Rogue",
        hitDie: "d8",
        primaryAbility: "Dexterity",
        savingThrows: ["Dexterity", "Intelligence"],
        armorProficiencies: ["Light armor"],
        weaponProficiencies: ["Simple weapons", "Hand crossbows", "Longswords", "Rapiers", "Shortswords"],
        toolProficiencies: ["Thieves' tools"],
        skillChoices: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
        numSkillChoices: 4,
        features: [
            { level: 1, name: "Expertise", description: "Choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies." },
            { level: 1, name: "Sneak Attack", description: "You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll." },
            { level: 1, name: "Thieves' Cant", description: "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation." },
            { level: 2, name: "Cunning Action", description: "Your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat to take the Dash, Disengage, or Hide action." },
            { level: 3, name: "Roguish Archetype", description: "You choose an archetype that you emulate in the exercise of your rogue abilities." },
            { level: 5, name: "Uncanny Dodge", description: "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you." },
            { level: 7, name: "Evasion", description: "When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail." },
            { level: 11, name: "Reliable Talent", description: "You have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10." },
            { level: 14, name: "Blindsense", description: "If you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you." },
            { level: 15, name: "Slippery Mind", description: "You have acquired greater mental strength. You gain proficiency in Wisdom saving throws." },
            { level: 18, name: "Elusive", description: "You are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated." },
            { level: 20, name: "Stroke of Luck", description: "You have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit." }
        ],
        subclasses: [
            {
                name: "Thief",
                description: "You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype.",
                features: [
                    { level: 3, name: "Fast Hands", description: "You can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action." },
                    { level: 3, name: "Second-Story Work", description: "You gain the ability to climb faster than normal; climbing no longer costs you extra movement. In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier." },
                    { level: 9, name: "Supreme Sneak", description: "You have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn." },
                    { level: 13, name: "Use Magic Device", description: "You have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you." },
                    { level: 17, name: "Thief's Reflexes", description: "You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10." }
                ],
                source: "SRD"
            }
        ],
        source: "SRD"
    },
    {
        name: "Sorcerer",
        hitDie: "d6",
        primaryAbility: "Charisma",
        savingThrows: ["Constitution", "Charisma"],
        armorProficiencies: ["None"],
        weaponProficiencies: ["Daggers", "Darts", "Slings", "Quarterstaffs", "Light crossbows"],
        skillChoices: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
        numSkillChoices: 2,
        spellcasting: { ability: "Charisma", type: "known" },
        features: [
            { level: 1, name: "Spellcasting", description: "An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic." },
            { level: 1, name: "Sorcerous Origin", description: "Choose a sorcerous origin, which describes the source of your innate magical power." },
            { level: 2, name: "Font of Magic", description: "You tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects." },
            { level: 3, name: "Metamagic", description: "You gain the ability to twist your spells to suit your needs. You gain two Metamagic options of your choice." },
            { level: 20, name: "Sorcerous Restoration", description: "You regain 4 expended sorcery points whenever you finish a short rest." }
        ],
        subclasses: [
            {
                name: "Draconic Bloodline",
                description: "Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors.",
                features: [
                    { level: 1, name: "Dragon Ancestor", description: "You choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later." },
                    { level: 1, name: "Draconic Resilience", description: "As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier." },
                    { level: 6, name: "Elemental Affinity", description: "When you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell." },
                    { level: 14, name: "Dragon Wings", description: "You gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed." },
                    { level: 18, name: "Draconic Presence", description: "You can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened." }
                ],
                source: "SRD"
            }
        ],
        source: "SRD"
    },
    {
        name: "Warlock",
        hitDie: "d8",
        primaryAbility: "Charisma",
        savingThrows: ["Wisdom", "Charisma"],
        armorProficiencies: ["Light armor"],
        weaponProficiencies: ["Simple weapons"],
        skillChoices: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
        numSkillChoices: 2,
        spellcasting: { ability: "Charisma", type: "known", pactMagic: true },
        features: [
            { level: 1, name: "Otherworldly Patron", description: "You have struck a bargain with an otherworldly being of your choice." },
            { level: 1, name: "Pact Magic", description: "Your arcane research and the magic bestowed on you by your patron have given you facility with spells." },
            { level: 2, name: "Eldritch Invocations", description: "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability." },
            { level: 3, name: "Pact Boon", description: "Your otherworldly patron bestows a gift upon you for your loyal service." },
            { level: 11, name: "Mystic Arcanum (6th level)", description: "Your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum." },
            { level: 20, name: "Eldritch Master", description: "You can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature." }
        ],
        subclasses: [
            {
                name: "The Fiend",
                description: "You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims.",
                expandedSpells: [
                    { level: 1, spells: ["Burning Hands", "Command"] },
                    { level: 2, spells: ["Blindness/Deafness", "Scorching Ray"] },
                    { level: 3, spells: ["Fireball", "Stinking Cloud"] },
                    { level: 4, spells: ["Fire Shield", "Wall of Fire"] },
                    { level: 5, spells: ["Flame Strike", "Hallow"] }
                ],
                features: [
                    { level: 1, name: "Dark One's Blessing", description: "When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1)." },
                    { level: 6, name: "Dark One's Own Luck", description: "You can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll." },
                    { level: 10, name: "Fiendish Resilience", description: "You can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature." },
                    { level: 14, name: "Hurl Through Hell", description: "When you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes." }
                ],
                source: "SRD"
            }
        ],
        source: "SRD"
    },
    {
        name: "Wizard",
        hitDie: "d6",
        primaryAbility: "Intelligence",
        savingThrows: ["Intelligence", "Wisdom"],
        armorProficiencies: ["None"],
        weaponProficiencies: ["Daggers", "Darts", "Slings", "Quarterstaffs", "Light crossbows"],
        skillChoices: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
        numSkillChoices: 2,
        spellcasting: { ability: "Intelligence", type: "prepared", spellbook: true },
        features: [
            { level: 1, name: "Spellcasting", description: "As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power." },
            { level: 1, name: "Arcane Recovery", description: "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover." },
            { level: 2, name: "Arcane Tradition", description: "You choose an arcane tradition, shaping your practice of magic through one of eight schools." },
            { level: 18, name: "Spell Mastery", description: "You have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared." },
            { level: 20, name: "Signature Spells", description: "You gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot." }
        ],
        subclasses: [
            {
                name: "School of Evocation",
                description: "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid.",
                features: [
                    { level: 2, name: "Evocation Savant", description: "The gold and time you must spend to copy an evocation spell into your spellbook is halved." },
                    { level: 2, name: "Sculpt Spells", description: "You can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save." },
                    { level: 6, name: "Potent Cantrip", description: "Your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip." },
                    { level: 10, name: "Empowered Evocation", description: "You can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast." },
                    { level: 14, name: "Overchannel", description: "You can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell." }
                ],
                source: "SRD"
            }
        ],
        source: "SRD"
    }
];

if (typeof window !== 'undefined') {
    window.SRDClasses = SRDClasses;
}
