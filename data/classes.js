/**
 * D&D 5e Class Data
 * Contains all 13 core classes with ability priorities, features, and proficiencies
 */

const ClassData = {
    barbarian: {
        name: 'Barbarian',
        hitDie: 12,
        abilityPriorities: ['str', 'con', 'dex', 'wis', 'cha', 'int'],
        savingThrows: ['str', 'con'],
        skills: ['athletics', 'intimidation', 'perception', 'survival', 'nature', 'animalHandling'],
        armorProficiencies: ['light', 'medium', 'shields'],
        weaponProficiencies: ['simple', 'martial'],
        primaryWeapons: ['Greataxe', 'Greatsword', 'Maul'],
        secondaryWeapons: ['Handaxe', 'Javelin'],
        features: [
            { level: 1, name: 'Rage', description: 'Can enter a rage as a bonus action, gaining advantage on Strength checks and saving throws, bonus rage damage on melee attacks, and resistance to bludgeoning, piercing, and slashing damage.' },
            { level: 1, name: 'Unarmored Defense', description: 'While not wearing armor, AC equals 10 + Dexterity modifier + Constitution modifier.' },
            { level: 2, name: 'Reckless Attack', description: 'Can choose to attack recklessly, gaining advantage on melee weapon attack rolls but granting advantage to attacks against the creature until next turn.' },
            { level: 2, name: 'Danger Sense', description: 'Has advantage on Dexterity saving throws against effects that can be seen.' },
            { level: 5, name: 'Extra Attack', description: 'Can attack twice when taking the Attack action.' },
            { level: 5, name: 'Fast Movement', description: 'Speed increases by 10 feet while not wearing heavy armor.' },
            { level: 11, name: 'Relentless Rage', description: 'If dropped to 0 hit points while raging, can make a DC 10 Constitution saving throw to drop to 1 hit point instead.' }
        ]
    },

    bard: {
        name: 'Bard',
        hitDie: 8,
        abilityPriorities: ['cha', 'dex', 'con', 'wis', 'int', 'str'],
        savingThrows: ['dex', 'cha'],
        skills: ['performance', 'persuasion', 'deception', 'insight', 'arcana', 'history', 'acrobatics'],
        armorProficiencies: ['light'],
        weaponProficiencies: ['simple', 'hand crossbow', 'longsword', 'rapier', 'shortsword'],
        primaryWeapons: ['Rapier', 'Shortsword'],
        secondaryWeapons: ['Dagger', 'Hand Crossbow'],
        spellcasting: {
            ability: 'cha',
            type: 'known'
        },
        features: [
            { level: 1, name: 'Bardic Inspiration', description: 'Can use a bonus action to inspire others, granting a Bardic Inspiration die that can be added to ability checks, attack rolls, or saving throws.' },
            { level: 1, name: 'Spellcasting', description: 'Can cast bard spells using Charisma as the spellcasting ability.' },
            { level: 2, name: 'Jack of All Trades', description: 'Can add half proficiency bonus to any ability check not already including proficiency bonus.' },
            { level: 2, name: 'Song of Rest', description: 'Can use soothing music or oration to help allies regain hit points during short rests.' },
            { level: 3, name: 'Expertise', description: 'Proficiency bonus is doubled for two chosen skill proficiencies.' },
            { level: 6, name: 'Countercharm', description: 'Can use music or oration to grant advantage on saving throws against being frightened or charmed.' }
        ]
    },

    cleric: {
        name: 'Cleric',
        hitDie: 8,
        abilityPriorities: ['wis', 'con', 'str', 'cha', 'dex', 'int'],
        savingThrows: ['wis', 'cha'],
        skills: ['religion', 'insight', 'medicine', 'persuasion', 'history'],
        armorProficiencies: ['light', 'medium', 'shields'],
        weaponProficiencies: ['simple'],
        primaryWeapons: ['Mace', 'Warhammer'],
        secondaryWeapons: ['Light Crossbow', 'Shield'],
        spellcasting: {
            ability: 'wis',
            type: 'prepared'
        },
        features: [
            { level: 1, name: 'Spellcasting', description: 'Can cast cleric spells using Wisdom as the spellcasting ability.' },
            { level: 1, name: 'Divine Domain', description: 'Chooses a divine domain that grants additional spells and features.' },
            { level: 2, name: 'Channel Divinity', description: 'Can channel divine energy to fuel magical effects, including Turn Undead.' },
            { level: 2, name: 'Turn Undead', description: 'Can present holy symbol to turn undead creatures, causing them to flee.' },
            { level: 5, name: 'Destroy Undead', description: 'Undead of CR 1/2 or lower that fail their saving throw against Turn Undead are instantly destroyed.' },
            { level: 10, name: 'Divine Intervention', description: 'Can call upon deity to intervene on behalf of the cleric.' }
        ]
    },

    druid: {
        name: 'Druid',
        hitDie: 8,
        abilityPriorities: ['wis', 'con', 'dex', 'int', 'cha', 'str'],
        savingThrows: ['int', 'wis'],
        skills: ['nature', 'survival', 'animalHandling', 'perception', 'insight', 'medicine'],
        armorProficiencies: ['light', 'medium', 'shields'],
        weaponProficiencies: ['club', 'dagger', 'dart', 'javelin', 'mace', 'quarterstaff', 'scimitar', 'sickle', 'sling', 'spear'],
        primaryWeapons: ['Scimitar', 'Quarterstaff'],
        secondaryWeapons: ['Dagger', 'Sling'],
        spellcasting: {
            ability: 'wis',
            type: 'prepared'
        },
        features: [
            { level: 1, name: 'Druidic', description: 'Knows Druidic, the secret language of druids.' },
            { level: 1, name: 'Spellcasting', description: 'Can cast druid spells using Wisdom as the spellcasting ability.' },
            { level: 2, name: 'Wild Shape', description: 'Can magically assume the shape of beasts. Can transform twice per rest.' },
            { level: 2, name: 'Druid Circle', description: 'Chooses a druid circle that grants additional features.' },
            { level: 18, name: 'Timeless Body', description: 'Ages more slowly and cannot be aged magically.' },
            { level: 20, name: 'Archdruid', description: 'Can use Wild Shape an unlimited number of times.' }
        ]
    },

    fighter: {
        name: 'Fighter',
        hitDie: 10,
        abilityPriorities: ['str', 'con', 'dex', 'wis', 'cha', 'int'],
        savingThrows: ['str', 'con'],
        skills: ['athletics', 'intimidation', 'perception', 'survival', 'acrobatics', 'history'],
        armorProficiencies: ['light', 'medium', 'heavy', 'shields'],
        weaponProficiencies: ['simple', 'martial'],
        primaryWeapons: ['Longsword', 'Greatsword', 'Battleaxe', 'Greataxe'],
        secondaryWeapons: ['Longbow', 'Heavy Crossbow', 'Shield'],
        features: [
            { level: 1, name: 'Fighting Style', description: 'Adopts a particular style of fighting as a specialty.' },
            { level: 1, name: 'Second Wind', description: 'Can use a bonus action to regain hit points equal to 1d10 + fighter level.' },
            { level: 2, name: 'Action Surge', description: 'Can take one additional action on top of regular action and possible bonus action.' },
            { level: 3, name: 'Martial Archetype', description: 'Chooses an archetype that grants additional features.' },
            { level: 5, name: 'Extra Attack', description: 'Can attack twice when taking the Attack action.' },
            { level: 9, name: 'Indomitable', description: 'Can reroll a failed saving throw.' },
            { level: 11, name: 'Extra Attack (2)', description: 'Can attack three times when taking the Attack action.' }
        ]
    },

    monk: {
        name: 'Monk',
        hitDie: 8,
        abilityPriorities: ['dex', 'wis', 'con', 'str', 'cha', 'int'],
        savingThrows: ['str', 'dex'],
        skills: ['acrobatics', 'athletics', 'stealth', 'insight', 'history', 'religion'],
        armorProficiencies: [],
        weaponProficiencies: ['simple', 'shortsword'],
        primaryWeapons: ['Shortsword', 'Quarterstaff'],
        secondaryWeapons: ['Dart', 'Unarmed Strike'],
        features: [
            { level: 1, name: 'Unarmored Defense', description: 'While not wearing armor, AC equals 10 + Dexterity modifier + Wisdom modifier.' },
            { level: 1, name: 'Martial Arts', description: 'Can use Dexterity for unarmed strikes and monk weapons. Martial arts die starts at 1d4 and increases.' },
            { level: 2, name: 'Ki', description: 'Has ki points that fuel special abilities like Flurry of Blows, Patient Defense, and Step of the Wind.' },
            { level: 2, name: 'Unarmored Movement', description: 'Speed increases by 10 feet while not wearing armor or shield.' },
            { level: 3, name: 'Deflect Missiles', description: 'Can use reaction to deflect or catch missiles.' },
            { level: 4, name: 'Slow Fall', description: 'Can reduce falling damage by 5 times monk level.' },
            { level: 5, name: 'Extra Attack', description: 'Can attack twice when taking the Attack action.' },
            { level: 5, name: 'Stunning Strike', description: 'Can spend 1 ki point to attempt to stun a creature hit by a melee attack.' },
            { level: 7, name: 'Evasion', description: 'Takes no damage on a successful Dexterity saving throw against effects that deal half damage on success.' }
        ]
    },

    paladin: {
        name: 'Paladin',
        hitDie: 10,
        abilityPriorities: ['str', 'cha', 'con', 'wis', 'dex', 'int'],
        savingThrows: ['wis', 'cha'],
        skills: ['athletics', 'intimidation', 'persuasion', 'religion', 'insight', 'medicine'],
        armorProficiencies: ['light', 'medium', 'heavy', 'shields'],
        weaponProficiencies: ['simple', 'martial'],
        primaryWeapons: ['Longsword', 'Greatsword', 'Warhammer'],
        secondaryWeapons: ['Javelin', 'Shield'],
        spellcasting: {
            ability: 'cha',
            type: 'prepared',
            startLevel: 2
        },
        features: [
            { level: 1, name: 'Divine Sense', description: 'Can detect celestials, fiends, and undead within 60 feet.' },
            { level: 1, name: 'Lay on Hands', description: 'Has a pool of healing power equal to 5 x paladin level.' },
            { level: 2, name: 'Fighting Style', description: 'Adopts a particular style of fighting as a specialty.' },
            { level: 2, name: 'Spellcasting', description: 'Can cast paladin spells using Charisma as the spellcasting ability.' },
            { level: 2, name: 'Divine Smite', description: 'Can expend spell slots to deal extra radiant damage on melee hits.' },
            { level: 3, name: 'Divine Health', description: 'Is immune to disease.' },
            { level: 3, name: 'Sacred Oath', description: 'Swears an oath that grants additional spells and features.' },
            { level: 5, name: 'Extra Attack', description: 'Can attack twice when taking the Attack action.' },
            { level: 6, name: 'Aura of Protection', description: 'Allies within 10 feet gain bonus to saving throws equal to Charisma modifier.' }
        ]
    },

    ranger: {
        name: 'Ranger',
        hitDie: 10,
        abilityPriorities: ['dex', 'wis', 'con', 'str', 'int', 'cha'],
        savingThrows: ['str', 'dex'],
        skills: ['survival', 'perception', 'stealth', 'nature', 'animalHandling', 'athletics', 'investigation'],
        armorProficiencies: ['light', 'medium', 'shields'],
        weaponProficiencies: ['simple', 'martial'],
        primaryWeapons: ['Longbow', 'Shortsword'],
        secondaryWeapons: ['Dagger', 'Handaxe'],
        spellcasting: {
            ability: 'wis',
            type: 'known',
            startLevel: 2
        },
        features: [
            { level: 1, name: 'Favored Enemy', description: 'Has advantage on Survival checks to track and Intelligence checks to recall information about chosen enemy types.' },
            { level: 1, name: 'Natural Explorer', description: 'Is an expert at navigating and surviving in certain terrain types.' },
            { level: 2, name: 'Fighting Style', description: 'Adopts a particular style of fighting as a specialty.' },
            { level: 2, name: 'Spellcasting', description: 'Can cast ranger spells using Wisdom as the spellcasting ability.' },
            { level: 3, name: 'Primeval Awareness', description: 'Can sense whether certain creature types are within 1 mile.' },
            { level: 3, name: 'Ranger Archetype', description: 'Chooses an archetype that grants additional features.' },
            { level: 5, name: 'Extra Attack', description: 'Can attack twice when taking the Attack action.' },
            { level: 8, name: 'Land\'s Stride', description: 'Can move through nonmagical difficult terrain without extra movement cost.' },
            { level: 10, name: 'Hide in Plain Sight', description: 'Can spend 1 minute creating camouflage to gain +10 bonus to Stealth checks.' }
        ]
    },

    rogue: {
        name: 'Rogue',
        hitDie: 8,
        abilityPriorities: ['dex', 'int', 'con', 'wis', 'cha', 'str'],
        savingThrows: ['dex', 'int'],
        skills: ['stealth', 'sleightOfHand', 'acrobatics', 'perception', 'investigation', 'deception', 'insight', 'persuasion'],
        armorProficiencies: ['light'],
        weaponProficiencies: ['simple', 'hand crossbow', 'longsword', 'rapier', 'shortsword'],
        primaryWeapons: ['Rapier', 'Shortsword'],
        secondaryWeapons: ['Dagger', 'Shortbow', 'Hand Crossbow'],
        features: [
            { level: 1, name: 'Expertise', description: 'Proficiency bonus is doubled for two chosen skill proficiencies.' },
            { level: 1, name: 'Sneak Attack ({sneakAttackDice})', description: 'Once per turn, can deal an extra {sneakAttackDice} damage when hitting with a finesse or ranged weapon if having advantage on the attack roll, or if another enemy of the target is within 5 feet of it.' },
            { level: 1, name: 'Thieves\' Cant', description: 'Knows thieves\' cant, a secret mix of dialect, jargon, and code.' },
            { level: 2, name: 'Cunning Action', description: 'Can take Dash, Disengage, or Hide as a bonus action.' },
            { level: 3, name: 'Roguish Archetype', description: 'Chooses an archetype that grants additional features.' },
            { level: 5, name: 'Uncanny Dodge', description: 'Can use reaction to halve damage from an attack that hits.' },
            { level: 7, name: 'Evasion', description: 'Takes no damage on a successful Dexterity saving throw against effects that deal half damage on success.' },
            { level: 11, name: 'Reliable Talent', description: 'Can treat any roll of 9 or lower on a proficient skill check as a 10.' }
        ]
    },

    sorcerer: {
        name: 'Sorcerer',
        hitDie: 6,
        abilityPriorities: ['cha', 'con', 'dex', 'wis', 'int', 'str'],
        savingThrows: ['con', 'cha'],
        skills: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion'],
        armorProficiencies: [],
        weaponProficiencies: ['dagger', 'dart', 'sling', 'quarterstaff', 'light crossbow'],
        primaryWeapons: ['Quarterstaff', 'Dagger'],
        secondaryWeapons: ['Light Crossbow', 'Dart'],
        spellcasting: {
            ability: 'cha',
            type: 'known'
        },
        features: [
            { level: 1, name: 'Spellcasting', description: 'Can cast sorcerer spells using Charisma as the spellcasting ability.' },
            { level: 1, name: 'Sorcerous Origin', description: 'Chooses an origin that describes the source of innate magical power.' },
            { level: 2, name: 'Font of Magic', description: 'Has sorcery points that can be used to create spell slots or fuel Metamagic.' },
            { level: 3, name: 'Metamagic', description: 'Can twist spells to suit needs with options like Careful Spell, Distant Spell, Quickened Spell, etc.' },
            { level: 20, name: 'Sorcerous Restoration', description: 'Regains 4 sorcery points on a short rest.' }
        ]
    },

    warlock: {
        name: 'Warlock',
        hitDie: 8,
        abilityPriorities: ['cha', 'con', 'dex', 'wis', 'int', 'str'],
        savingThrows: ['wis', 'cha'],
        skills: ['arcana', 'deception', 'history', 'intimidation', 'investigation', 'nature', 'religion'],
        armorProficiencies: ['light'],
        weaponProficiencies: ['simple'],
        primaryWeapons: ['Quarterstaff', 'Light Crossbow'],
        secondaryWeapons: ['Dagger'],
        spellcasting: {
            ability: 'cha',
            type: 'pact'
        },
        features: [
            { level: 1, name: 'Otherworldly Patron', description: 'Has struck a bargain with an otherworldly being that grants magical powers.' },
            { level: 1, name: 'Pact Magic', description: 'Can cast warlock spells using Charisma. Spell slots are limited but recharge on short rest.' },
            { level: 2, name: 'Eldritch Invocations', description: 'Has learned fragments of forbidden knowledge that imbue with abiding magical abilities.' },
            { level: 3, name: 'Pact Boon', description: 'Patron bestows a gift: Pact of the Chain, Blade, or Tome.' },
            { level: 11, name: 'Mystic Arcanum', description: 'Can cast powerful spells once per long rest without using spell slots.' }
        ]
    },

    wizard: {
        name: 'Wizard',
        hitDie: 6,
        abilityPriorities: ['int', 'con', 'dex', 'wis', 'cha', 'str'],
        savingThrows: ['int', 'wis'],
        skills: ['arcana', 'history', 'insight', 'investigation', 'medicine', 'religion'],
        armorProficiencies: [],
        weaponProficiencies: ['dagger', 'dart', 'sling', 'quarterstaff', 'light crossbow'],
        primaryWeapons: ['Quarterstaff', 'Dagger'],
        secondaryWeapons: ['Light Crossbow'],
        spellcasting: {
            ability: 'int',
            type: 'prepared',
            spellbook: true
        },
        features: [
            { level: 1, name: 'Spellcasting', description: 'Can cast wizard spells using Intelligence as the spellcasting ability. Maintains a spellbook.' },
            { level: 1, name: 'Arcane Recovery', description: 'Can recover spell slots during a short rest once per day.' },
            { level: 2, name: 'Arcane Tradition', description: 'Chooses an arcane tradition that grants additional features.' },
            { level: 18, name: 'Spell Mastery', description: 'Can cast certain 1st and 2nd-level spells at will.' },
            { level: 20, name: 'Signature Spells', description: 'Has two 3rd-level spells that are always prepared and can be cast once each without expending a spell slot.' }
        ]
    },

    artificer: {
        name: 'Artificer',
        hitDie: 8,
        abilityPriorities: ['int', 'con', 'dex', 'wis', 'cha', 'str'],
        savingThrows: ['con', 'int'],
        skills: ['arcana', 'history', 'investigation', 'medicine', 'nature', 'perception', 'sleightOfHand'],
        armorProficiencies: ['light', 'medium', 'shields'],
        weaponProficiencies: ['simple'],
        primaryWeapons: ['Light Crossbow', 'Quarterstaff'],
        secondaryWeapons: ['Dagger'],
        spellcasting: {
            ability: 'int',
            type: 'prepared'
        },
        features: [
            { level: 1, name: 'Magical Tinkering', description: 'Can invest a spark of magic into mundane objects.' },
            { level: 1, name: 'Spellcasting', description: 'Can cast artificer spells using Intelligence as the spellcasting ability.' },
            { level: 2, name: 'Infuse Item', description: 'Can imbue mundane items with magical effects.' },
            { level: 3, name: 'Artificer Specialist', description: 'Chooses a specialty: Alchemist, Artillerist, or Battle Smith.' },
            { level: 3, name: 'The Right Tool for the Job', description: 'Can produce any artisan\'s tool with 1 hour of work.' },
            { level: 6, name: 'Tool Expertise', description: 'Proficiency bonus is doubled for any ability check using proficient tools.' },
            { level: 10, name: 'Magic Item Adept', description: 'Can attune to up to 4 magic items. Can craft common and uncommon magic items faster.' }
        ]
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClassData;
}
