/**
 * D&D 5e Magic Items Data
 * Magic items with effects and stat bonuses
 */

const MagicItemsData = {
    // Rarity tiers by CR
    rarityByCR: {
        0: ['common'],
        1: ['common', 'uncommon'],
        2: ['common', 'uncommon'],
        3: ['common', 'uncommon'],
        4: ['common', 'uncommon'],
        5: ['uncommon', 'rare'],
        6: ['uncommon', 'rare'],
        7: ['uncommon', 'rare'],
        8: ['uncommon', 'rare'],
        9: ['uncommon', 'rare'],
        10: ['uncommon', 'rare'],
        11: ['rare', 'veryRare'],
        12: ['rare', 'veryRare'],
        13: ['rare', 'veryRare'],
        14: ['rare', 'veryRare'],
        15: ['rare', 'veryRare'],
        16: ['rare', 'veryRare'],
        17: ['veryRare', 'legendary'],
        18: ['veryRare', 'legendary'],
        19: ['veryRare', 'legendary'],
        20: ['veryRare', 'legendary'],
        21: ['legendary'],
        22: ['legendary'],
        23: ['legendary'],
        24: ['legendary'],
        25: ['legendary'],
        26: ['legendary'],
        27: ['legendary'],
        28: ['legendary'],
        29: ['legendary'],
        30: ['legendary']
    },

    // Magic Weapons
    weapons: {
        common: [
            {
                name: 'Moon-Touched Sword',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 0,
                damageBonus: 0,
                description: 'This sword glows with moonlight, shedding bright light in a 15-foot radius.'
            },
            {
                name: 'Unbreakable Arrow',
                type: 'weapon',
                weaponType: 'ammunition',
                attackBonus: 0,
                damageBonus: 0,
                description: 'This arrow cannot be broken except when in an antimagic field.'
            }
        ],
        uncommon: [
            {
                name: '+1 Longsword',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 1,
                damageBonus: 1,
                description: 'You have a +1 bonus to attack and damage rolls made with this magic weapon.'
            },
            {
                name: '+1 Battleaxe',
                type: 'weapon',
                weaponType: 'axe',
                attackBonus: 1,
                damageBonus: 1,
                description: 'You have a +1 bonus to attack and damage rolls made with this magic weapon.'
            },
            {
                name: '+1 Longbow',
                type: 'weapon',
                weaponType: 'bow',
                attackBonus: 1,
                damageBonus: 1,
                description: 'You have a +1 bonus to attack and damage rolls made with this magic weapon.'
            },
            {
                name: '+1 Dagger',
                type: 'weapon',
                weaponType: 'dagger',
                attackBonus: 1,
                damageBonus: 1,
                description: 'You have a +1 bonus to attack and damage rolls made with this magic weapon.'
            },
            {
                name: 'Javelin of Lightning',
                type: 'weapon',
                weaponType: 'spear',
                attackBonus: 0,
                damageBonus: 0,
                action: 'Lightning Bolt (1/day). When thrown, the javelin transforms into a bolt of lightning. Each creature in a 120-foot line must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, or half as much on a success.'
            },
            {
                name: 'Weapon of Warning',
                type: 'weapon',
                weaponType: 'any',
                attackBonus: 0,
                damageBonus: 0,
                description: 'This weapon warns its wielder of danger. While wielded, the creature and allies within 30 feet cannot be surprised and have advantage on initiative rolls.'
            },
            {
                name: 'Trident of Fish Command',
                type: 'weapon',
                weaponType: 'trident',
                attackBonus: 0,
                damageBonus: 0,
                action: 'Dominate Beast (3/day). While carrying this trident, you can use an action to cast dominate beast (save DC 15) on a beast with an innate swimming speed.'
            },
            {
                name: 'Vicious Weapon',
                type: 'weapon',
                weaponType: 'any',
                attackBonus: 0,
                damageBonus: 0,
                description: 'When you roll a 20 on your attack roll with this magic weapon, the target takes an extra 2d6 damage of the weapon\'s type.'
            }
        ],
        rare: [
            {
                name: '+2 Longsword',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 2,
                damageBonus: 2,
                description: 'You have a +2 bonus to attack and damage rolls made with this magic weapon.'
            },
            {
                name: '+2 Greatsword',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 2,
                damageBonus: 2,
                description: 'You have a +2 bonus to attack and damage rolls made with this magic weapon.'
            },
            {
                name: '+2 Longbow',
                type: 'weapon',
                weaponType: 'bow',
                attackBonus: 2,
                damageBonus: 2,
                description: 'You have a +2 bonus to attack and damage rolls made with this magic weapon.'
            },
            {
                name: 'Flame Tongue',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 0,
                damageBonus: 0,
                extraDamage: '2d6 fire',
                description: 'You can use a bonus action to speak this weapon\'s command word, causing flames to erupt from the blade. While ablaze, it deals an extra 2d6 fire damage and sheds bright light in a 40-foot radius.'
            },
            {
                name: 'Frost Brand',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 0,
                damageBonus: 0,
                extraDamage: '1d6 cold',
                resistances: ['fire'],
                description: 'When drawn, this sword deals an extra 1d6 cold damage. While holding it, you have resistance to fire damage and shed bright light in a 10-foot radius.'
            },
            {
                name: 'Mace of Terror',
                type: 'weapon',
                weaponType: 'mace',
                attackBonus: 0,
                damageBonus: 0,
                action: 'Terror (3 charges). While holding this weapon, you can use an action to expend 1 charge and release a wave of terror. Each creature of your choice within 30 feet must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute.'
            },
            {
                name: 'Sun Blade',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 2,
                damageBonus: 2,
                extraDamage: '1d8 radiant (vs undead)',
                description: 'This radiant blade functions as a longsword with a +2 bonus. Against undead, it deals an extra 1d8 radiant damage. It emits bright sunlight in a 15-foot radius.'
            },
            {
                name: 'Sword of Life Stealing',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 0,
                damageBonus: 0,
                description: 'When you roll a 20 on an attack roll, the target takes an extra 3d6 necrotic damage, and you gain temporary hit points equal to the extra damage dealt.'
            },
            {
                name: 'Sword of Wounding',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 0,
                damageBonus: 0,
                description: 'HP lost to this weapon can be regained only through rest. Once per turn, you can wound the target, dealing 1d4 necrotic damage at the start of each of its turns.'
            },
            {
                name: 'Giant Slayer',
                type: 'weapon',
                weaponType: 'any',
                attackBonus: 1,
                damageBonus: 1,
                description: 'You gain a +1 bonus to attack and damage rolls. When you hit a giant, it takes an extra 2d6 damage and must succeed on a DC 15 Strength saving throw or fall prone.'
            },
            {
                name: 'Dragon Slayer',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 1,
                damageBonus: 1,
                description: 'You gain a +1 bonus to attack and damage rolls. When you hit a dragon, it takes an extra 3d6 damage.'
            }
        ],
        veryRare: [
            {
                name: '+3 Longsword',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 3,
                damageBonus: 3,
                description: 'You have a +3 bonus to attack and damage rolls made with this magic weapon.'
            },
            {
                name: '+3 Greatsword',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 3,
                damageBonus: 3,
                description: 'You have a +3 bonus to attack and damage rolls made with this magic weapon.'
            },
            {
                name: '+3 Longbow',
                type: 'weapon',
                weaponType: 'bow',
                attackBonus: 3,
                damageBonus: 3,
                description: 'You have a +3 bonus to attack and damage rolls made with this magic weapon.'
            },
            {
                name: 'Dancing Sword',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 0,
                damageBonus: 0,
                action: 'Dance (1/day). You can toss this sword into the air and use a bonus action to make it hover and fly up to 30 feet to attack a target within 5 feet of it. It uses your attack bonus and deals 1d8 + proficiency slashing damage.'
            },
            {
                name: 'Nine Lives Stealer',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 2,
                damageBonus: 2,
                description: 'You gain a +2 bonus. If you score a critical hit against a creature with fewer than 100 HP, it must succeed on a DC 15 Constitution saving throw or be slain.'
            },
            {
                name: 'Scimitar of Speed',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 2,
                damageBonus: 2,
                description: 'You gain a +2 bonus to attack and damage rolls. You can make one attack with this weapon as a bonus action on each of your turns.'
            },
            {
                name: 'Oathbow',
                type: 'weapon',
                weaponType: 'bow',
                attackBonus: 0,
                damageBonus: 0,
                extraDamage: '3d6 piercing (vs sworn enemy)',
                description: 'When you use this bow to make a ranged attack, you can speak its command word to designate a sworn enemy. Your attacks against them deal an extra 3d6 piercing damage, you have advantage on the attacks, and cannot be charmed.'
            }
        ],
        legendary: [
            {
                name: 'Holy Avenger',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 3,
                damageBonus: 3,
                extraDamage: '2d10 radiant (vs fiend/undead)',
                description: 'This +3 sword deals an extra 2d10 radiant damage against fiends and undead. While held, it creates a 10-foot aura that gives you and allies advantage on saving throws against spells.'
            },
            {
                name: 'Vorpal Sword',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 3,
                damageBonus: 3,
                description: 'This +3 sword ignores slashing resistance. On a roll of 20, it severs one head of the target, killing it instantly if the creature can\'t survive without that head.'
            },
            {
                name: 'Luck Blade',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 1,
                damageBonus: 1,
                description: 'This +1 sword grants a +1 bonus to saving throws. You can reroll one attack roll, ability check, or saving throw (1/day). The sword has 1d4-1 charges of the wish spell.'
            },
            {
                name: 'Hammer of Thunderbolts',
                type: 'weapon',
                weaponType: 'hammer',
                attackBonus: 1,
                damageBonus: 1,
                abilityBonus: { strength: 4 },
                description: 'While attuned with a belt of giant strength and gauntlets of ogre power, this becomes a +3 weapon, sets Strength to 30, and can release a thunderclap dealing 4d6 thunder + 3d6 lightning.'
            },
            {
                name: 'Moonblade',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 2,
                damageBonus: 2,
                description: 'This sentient +2 longsword has accumulated runes over generations, each granting a special property.'
            },
            {
                name: 'Wave',
                type: 'weapon',
                weaponType: 'trident',
                attackBonus: 3,
                damageBonus: 3,
                extraDamage: '1d10 necrotic (on crit)',
                description: 'This sentient +3 trident grants water breathing, swimming speed, and command of water elementals. On a critical hit, it deals an extra 1d10 necrotic (or heals the wielder).'
            }
        ]
    },

    // Magic Armor
    armor: {
        common: [
            {
                name: 'Cast-Off Armor',
                type: 'armor',
                armorType: 'any',
                acBonus: 0,
                description: 'You can doff this armor as an action.'
            },
            {
                name: 'Smoldering Armor',
                type: 'armor',
                armorType: 'any',
                acBonus: 0,
                description: 'Wisps of harmless smoke rise from this armor.'
            }
        ],
        uncommon: [
            {
                name: '+1 Chain Mail',
                type: 'armor',
                armorType: 'heavy',
                acBonus: 1,
                baseAC: 16,
                description: 'You have a +1 bonus to AC while wearing this armor.'
            },
            {
                name: '+1 Studded Leather',
                type: 'armor',
                armorType: 'light',
                acBonus: 1,
                baseAC: 12,
                description: 'You have a +1 bonus to AC while wearing this armor.'
            },
            {
                name: '+1 Scale Mail',
                type: 'armor',
                armorType: 'medium',
                acBonus: 1,
                baseAC: 14,
                description: 'You have a +1 bonus to AC while wearing this armor.'
            },
            {
                name: '+1 Shield',
                type: 'armor',
                armorType: 'shield',
                acBonus: 1,
                description: 'This shield grants an additional +1 bonus to AC beyond the normal shield bonus.'
            },
            {
                name: 'Mithral Armor',
                type: 'armor',
                armorType: 'medium',
                acBonus: 0,
                description: 'This armor doesn\'t impose disadvantage on Dexterity (Stealth) checks. If medium armor, you can add up to +3 DEX.'
            },
            {
                name: 'Adamantine Armor',
                type: 'armor',
                armorType: 'heavy',
                acBonus: 0,
                description: 'While wearing this armor, any critical hit against you becomes a normal hit.'
            },
            {
                name: 'Mariner\'s Armor',
                type: 'armor',
                armorType: 'light',
                acBonus: 0,
                speed: { swim: 'walking speed' },
                description: 'While wearing this armor, you have a swimming speed equal to your walking speed. Additionally, you can breathe underwater.'
            },
            {
                name: 'Sentinel Shield',
                type: 'armor',
                armorType: 'shield',
                acBonus: 0,
                description: 'While holding this shield, you have advantage on initiative rolls and Wisdom (Perception) checks.'
            }
        ],
        rare: [
            {
                name: '+2 Plate Armor',
                type: 'armor',
                armorType: 'heavy',
                acBonus: 2,
                baseAC: 18,
                description: 'You have a +2 bonus to AC while wearing this armor.'
            },
            {
                name: '+2 Half Plate',
                type: 'armor',
                armorType: 'medium',
                acBonus: 2,
                baseAC: 15,
                description: 'You have a +2 bonus to AC while wearing this armor.'
            },
            {
                name: '+2 Studded Leather',
                type: 'armor',
                armorType: 'light',
                acBonus: 2,
                baseAC: 12,
                description: 'You have a +2 bonus to AC while wearing this armor.'
            },
            {
                name: '+2 Shield',
                type: 'armor',
                armorType: 'shield',
                acBonus: 2,
                description: 'This shield grants an additional +2 bonus to AC beyond the normal shield bonus.'
            },
            {
                name: 'Armor of Resistance',
                type: 'armor',
                armorType: 'any',
                acBonus: 0,
                resistances: ['fire'],
                description: 'While wearing this armor, you have resistance to one type of damage (determined when found).'
            },
            {
                name: 'Elven Chain',
                type: 'armor',
                armorType: 'medium',
                acBonus: 1,
                baseAC: 14,
                description: 'This chain shirt grants +1 AC. You can wear it even if you lack proficiency with medium armor.'
            },
            {
                name: 'Dragon Scale Mail',
                type: 'armor',
                armorType: 'medium',
                acBonus: 1,
                baseAC: 14,
                resistances: ['varies'],
                description: 'This +1 scale mail grants resistance to a damage type based on the dragon it was made from. You have advantage on saving throws against the frightful presence of dragons.'
            },
            {
                name: 'Shield of Missile Attraction',
                type: 'armor',
                armorType: 'shield',
                acBonus: 0,
                description: 'While holding this shield, you have resistance to damage from ranged weapon attacks.'
            },
            {
                name: 'Animated Shield',
                type: 'armor',
                armorType: 'shield',
                acBonus: 0,
                description: 'You can speak the command word as a bonus action to animate this shield, which hovers within 5 feet and grants its AC bonus, leaving your hands free.'
            }
        ],
        veryRare: [
            {
                name: '+3 Plate Armor',
                type: 'armor',
                armorType: 'heavy',
                acBonus: 3,
                baseAC: 18,
                description: 'You have a +3 bonus to AC while wearing this armor.'
            },
            {
                name: '+3 Studded Leather',
                type: 'armor',
                armorType: 'light',
                acBonus: 3,
                baseAC: 12,
                description: 'You have a +3 bonus to AC while wearing this armor.'
            },
            {
                name: '+3 Shield',
                type: 'armor',
                armorType: 'shield',
                acBonus: 3,
                description: 'This shield grants an additional +3 bonus to AC beyond the normal shield bonus.'
            },
            {
                name: 'Demon Armor',
                type: 'armor',
                armorType: 'heavy',
                acBonus: 1,
                baseAC: 18,
                attackBonus: 1,
                description: 'This plate armor grants +1 AC and allows you to speak Abyssal. Its clawed gauntlets turn unarmed strikes into +1 weapons dealing 1d8 slashing.'
            },
            {
                name: 'Dwarven Plate',
                type: 'armor',
                armorType: 'heavy',
                acBonus: 2,
                baseAC: 18,
                description: 'This plate armor grants +2 AC. If an effect would move you against your will, you can reduce the distance by up to 10 feet.'
            },
            {
                name: 'Spellguard Shield',
                type: 'armor',
                armorType: 'shield',
                acBonus: 0,
                description: 'While holding this shield, you have advantage on saving throws against spells and magical effects, and spell attacks have disadvantage against you.'
            }
        ],
        legendary: [
            {
                name: 'Armor of Invulnerability',
                type: 'armor',
                armorType: 'heavy',
                acBonus: 0,
                baseAC: 18,
                immunities: ['nonmagical'],
                description: 'While wearing this armor, you have resistance to nonmagical damage. Once per day, you can become immune to nonmagical damage for 10 minutes.'
            },
            {
                name: 'Efreeti Chain',
                type: 'armor',
                armorType: 'medium',
                acBonus: 3,
                baseAC: 13,
                immunities: ['fire'],
                description: 'This chain mail grants +3 AC and immunity to fire damage. You can speak and understand Primordial and walk on magma/lava as if solid.'
            },
            {
                name: 'Plate Armor of Etherealness',
                type: 'armor',
                armorType: 'heavy',
                acBonus: 0,
                baseAC: 18,
                action: 'Etherealness (1/day). You can cast the etherealness spell on yourself as an action.'
            }
        ]
    },

    // Wondrous Items
    wondrous: {
        common: [
            {
                name: 'Cloak of Billowing',
                type: 'wondrous',
                slot: 'cloak',
                description: 'You can use a bonus action to make this cloak billow dramatically.'
            },
            {
                name: 'Hat of Wizardry',
                type: 'wondrous',
                slot: 'head',
                description: 'This hat allows you to cast prestidigitation at will.'
            },
            {
                name: 'Dread Helm',
                type: 'wondrous',
                slot: 'head',
                description: 'This helm makes your eyes glow red while worn.'
            }
        ],
        uncommon: [
            {
                name: 'Cloak of Protection',
                type: 'wondrous',
                slot: 'cloak',
                acBonus: 1,
                saveBonus: 1,
                description: 'You gain a +1 bonus to AC and saving throws while you wear this cloak.'
            },
            {
                name: 'Boots of Elvenkind',
                type: 'wondrous',
                slot: 'boots',
                description: 'While you wear these boots, your steps make no sound. You have advantage on Dexterity (Stealth) checks that rely on moving silently.'
            },
            {
                name: 'Cloak of Elvenkind',
                type: 'wondrous',
                slot: 'cloak',
                description: 'While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks.'
            },
            {
                name: 'Gauntlets of Ogre Power',
                type: 'wondrous',
                slot: 'hands',
                abilitySet: { strength: 19 },
                description: 'Your Strength score is 19 while you wear these gauntlets.'
            },
            {
                name: 'Headband of Intellect',
                type: 'wondrous',
                slot: 'head',
                abilitySet: { intelligence: 19 },
                description: 'Your Intelligence score is 19 while you wear this headband.'
            },
            {
                name: 'Amulet of Proof Against Detection',
                type: 'wondrous',
                slot: 'neck',
                description: 'While wearing this amulet, you are hidden from divination magic. You can\'t be targeted by such magic or perceived through magical scrying sensors.'
            },
            {
                name: 'Bracers of Archery',
                type: 'wondrous',
                slot: 'arms',
                damageBonus: 2,
                description: 'While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.'
            },
            {
                name: 'Boots of Striding and Springing',
                type: 'wondrous',
                slot: 'boots',
                speed: { walking: 30 },
                description: 'While you wear these boots, your walking speed becomes 30 feet (if it was lower). Your jump distance is tripled.'
            },
            {
                name: 'Ring of Protection',
                type: 'wondrous',
                slot: 'ring',
                acBonus: 1,
                saveBonus: 1,
                description: 'You gain a +1 bonus to AC and saving throws while wearing this ring.'
            },
            {
                name: 'Ring of Mind Shielding',
                type: 'wondrous',
                slot: 'ring',
                description: 'While wearing this ring, you are immune to magic that allows creatures to read your thoughts or detect lies.'
            },
            {
                name: 'Periapt of Wound Closure',
                type: 'wondrous',
                slot: 'neck',
                description: 'While wearing this pendant, you stabilize automatically when dying, and when you roll Hit Dice to regain hit points, double the number of hit points restored.'
            },
            {
                name: 'Gloves of Thievery',
                type: 'wondrous',
                slot: 'hands',
                skillBonus: { 'sleight of hand': 5 },
                description: 'These gloves are invisible while worn. You gain a +5 bonus to Dexterity (Sleight of Hand) checks and checks to pick locks.'
            },
            {
                name: 'Eyes of the Eagle',
                type: 'wondrous',
                slot: 'eyes',
                description: 'These lenses grant advantage on Wisdom (Perception) checks that rely on sight.'
            },
            {
                name: 'Stone of Good Luck',
                type: 'wondrous',
                slot: 'none',
                saveBonus: 1,
                description: 'While this polished agate is on your person, you gain a +1 bonus to ability checks and saving throws.'
            }
        ],
        rare: [
            {
                name: 'Amulet of Health',
                type: 'wondrous',
                slot: 'neck',
                abilitySet: { constitution: 19 },
                description: 'Your Constitution score is 19 while you wear this amulet.'
            },
            {
                name: 'Belt of Dwarvenkind',
                type: 'wondrous',
                slot: 'waist',
                abilityBonus: { constitution: 2 },
                resistances: ['poison'],
                description: 'While wearing this belt, your Constitution increases by 2 (max 20), you have advantage on Charisma checks with dwarves, resistance to poison, and darkvision 60 ft.'
            },
            {
                name: 'Belt of Hill Giant Strength',
                type: 'wondrous',
                slot: 'waist',
                abilitySet: { strength: 21 },
                description: 'While wearing this belt, your Strength score becomes 21.'
            },
            {
                name: 'Cloak of Displacement',
                type: 'wondrous',
                slot: 'cloak',
                description: 'While you wear this cloak, creatures have disadvantage on attack rolls against you. If you take damage, this property ceases until the start of your next turn.'
            },
            {
                name: 'Cloak of the Bat',
                type: 'wondrous',
                slot: 'cloak',
                speed: { fly: 40 },
                description: 'While wearing this cloak in dim light or darkness, you have advantage on Stealth checks. You can also grip the edges and use it to fly at a speed of 40 feet.'
            },
            {
                name: 'Mantle of Spell Resistance',
                type: 'wondrous',
                slot: 'cloak',
                description: 'While wearing this cloak, you have advantage on saving throws against spells.'
            },
            {
                name: 'Ring of Evasion',
                type: 'wondrous',
                slot: 'ring',
                action: 'Evasion (3 charges). When you fail a Dexterity saving throw, you can use a reaction to expend 1 charge and succeed instead. Regains 1d3 charges daily at dawn.'
            },
            {
                name: 'Ring of Spell Storing',
                type: 'wondrous',
                slot: 'ring',
                description: 'This ring stores up to 5 levels of spells. Any creature can cast a stored spell using the slot level, DC, and attack bonus of the original caster.'
            },
            {
                name: 'Wings of Flying',
                type: 'wondrous',
                slot: 'cloak',
                speed: { fly: 60 },
                action: 'Fly (1/day). You can use an action to speak the command word and gain a flying speed of 60 feet for 1 hour.'
            },
            {
                name: 'Boots of Speed',
                type: 'wondrous',
                slot: 'boots',
                action: 'Speed (10 minutes). As a bonus action, you can click the heels together to double your walking speed. Attacks of opportunity against you have disadvantage.'
            },
            {
                name: 'Cape of the Mountebank',
                type: 'wondrous',
                slot: 'cloak',
                action: 'Dimension Door (1/day). You can cast dimension door as an action while wearing this cape. You vanish in a cloud of smoke and appear at your destination in similar smoke.'
            },
            {
                name: 'Helm of Telepathy',
                type: 'wondrous',
                slot: 'head',
                action: 'Telepathy/Suggestion. While wearing this helm, you can cast detect thoughts (DC 13) at will. You can also cast suggestion (DC 13) once per day.'
            },
            {
                name: 'Periapt of Proof Against Poison',
                type: 'wondrous',
                slot: 'neck',
                immunities: ['poison'],
                description: 'While wearing this pendant, you are immune to poison damage and the poisoned condition.'
            }
        ],
        veryRare: [
            {
                name: 'Amulet of the Planes',
                type: 'wondrous',
                slot: 'neck',
                action: 'Plane Shift. While wearing this amulet, you can use an action to name a location and make a DC 15 Intelligence check to cast plane shift.'
            },
            {
                name: 'Belt of Fire Giant Strength',
                type: 'wondrous',
                slot: 'waist',
                abilitySet: { strength: 25 },
                description: 'While wearing this belt, your Strength score becomes 25.'
            },
            {
                name: 'Belt of Frost Giant Strength',
                type: 'wondrous',
                slot: 'waist',
                abilitySet: { strength: 23 },
                description: 'While wearing this belt, your Strength score becomes 23.'
            },
            {
                name: 'Cloak of Arachnida',
                type: 'wondrous',
                slot: 'cloak',
                resistances: ['poison'],
                speed: { climb: 'walking speed' },
                description: 'This cloak grants resistance to poison, immunity to web effects, climbing equal to walking speed (even upside down), and allows you to cast web (DC 13) once per day.'
            },
            {
                name: 'Ioun Stone (Mastery)',
                type: 'wondrous',
                slot: 'none',
                description: 'Your proficiency bonus increases by 1 while this pale green prism orbits your head.'
            },
            {
                name: 'Rod of Alertness',
                type: 'wondrous',
                slot: 'held',
                acBonus: 1,
                saveBonus: 1,
                description: 'While holding this rod, you have advantage on Wisdom (Perception) checks and initiative rolls. You can plant it in the ground as an action to cast detect evil and good, detect magic, detect poison, or see invisibility.'
            },
            {
                name: 'Ring of Regeneration',
                type: 'wondrous',
                slot: 'ring',
                description: 'While wearing this ring, you regain 1d6 hit points every 10 minutes, provided you have at least 1 hit point. Lost body members regrow after 1d6+1 days.'
            },
            {
                name: 'Tome of Clear Thought',
                type: 'wondrous',
                slot: 'none',
                abilityBonus: { intelligence: 2 },
                description: 'After spending 48 hours reading this tome, your Intelligence score increases by 2 (max 30). The tome then loses its magic for 100 years.'
            }
        ],
        legendary: [
            {
                name: 'Belt of Storm Giant Strength',
                type: 'wondrous',
                slot: 'waist',
                abilitySet: { strength: 29 },
                description: 'While wearing this belt, your Strength score becomes 29.'
            },
            {
                name: 'Cloak of Invisibility',
                type: 'wondrous',
                slot: 'cloak',
                action: 'Invisibility (2 hours). While wearing this cloak, you can pull up the hood as an action to become invisible. Anything you carry is also invisible.'
            },
            {
                name: 'Ioun Stone (Greater Absorption)',
                type: 'wondrous',
                slot: 'none',
                description: 'This marbled lavender and green ellipsoid can absorb spells of 8th level or lower. It can absorb 50 levels total before burning out.'
            },
            {
                name: 'Ring of Djinni Summoning',
                type: 'wondrous',
                slot: 'ring',
                action: 'Summon Djinni (1/day). Speaking the ring\'s command word summons a djinni who appears in an unoccupied space within 120 feet. It remains for 1 hour and obeys your commands.'
            },
            {
                name: 'Ring of Three Wishes',
                type: 'wondrous',
                slot: 'ring',
                action: 'Wish (3 charges). While wearing this ring, you can expend 1 charge to cast the wish spell.'
            },
            {
                name: 'Robe of the Archmagi',
                type: 'wondrous',
                slot: 'body',
                acBonus: 5,
                saveBonus: 2,
                description: 'This robe grants AC 15 + DEX (base 20 AC total effective), advantage on saving throws against spells, +2 to spell save DC, and +2 to spell attack rolls.'
            },
            {
                name: 'Scarab of Protection',
                type: 'wondrous',
                slot: 'neck',
                saveBonus: 1,
                immunities: ['necromantic drain'],
                description: 'This scarab grants +1 to saving throws and advantage against necromancy spells. It has 12 charges that can convert a failed save vs. necromancy to a success.'
            },
            {
                name: 'Talisman of Pure Good',
                type: 'wondrous',
                slot: 'neck',
                action: 'Destroy Evil (7 charges). A good cleric or paladin can use an action and expend 1 charge to target a visible evil creature. The target must succeed on a DC 20 Dexterity save or be destroyed.'
            }
        ]
    },

    // Class-appropriate item filters
    classItemFilters: {
        wizard: {
            weaponTypes: ['dagger', 'quarterstaff', 'any'],
            armorTypes: ['none'],
            preferWondrous: true
        },
        sorcerer: {
            weaponTypes: ['dagger', 'quarterstaff', 'any'],
            armorTypes: ['none'],
            preferWondrous: true
        },
        warlock: {
            weaponTypes: ['dagger', 'quarterstaff', 'sword', 'any'],
            armorTypes: ['light'],
            preferWondrous: true
        },
        cleric: {
            weaponTypes: ['mace', 'hammer', 'any'],
            armorTypes: ['medium', 'heavy', 'shield'],
            preferWondrous: false
        },
        druid: {
            weaponTypes: ['quarterstaff', 'dagger', 'any'],
            armorTypes: ['light', 'medium', 'shield'],
            preferWondrous: true
        },
        fighter: {
            weaponTypes: ['sword', 'axe', 'hammer', 'bow', 'any'],
            armorTypes: ['heavy', 'medium', 'shield'],
            preferWondrous: false
        },
        barbarian: {
            weaponTypes: ['axe', 'sword', 'hammer', 'any'],
            armorTypes: ['medium', 'shield'],
            preferWondrous: false
        },
        paladin: {
            weaponTypes: ['sword', 'hammer', 'axe', 'any'],
            armorTypes: ['heavy', 'medium', 'shield'],
            preferWondrous: false
        },
        ranger: {
            weaponTypes: ['bow', 'sword', 'dagger', 'any'],
            armorTypes: ['light', 'medium'],
            preferWondrous: false
        },
        rogue: {
            weaponTypes: ['dagger', 'sword', 'bow', 'any'],
            armorTypes: ['light'],
            preferWondrous: true
        },
        monk: {
            weaponTypes: ['quarterstaff', 'dagger', 'any'],
            armorTypes: ['none'],
            preferWondrous: true
        },
        bard: {
            weaponTypes: ['sword', 'dagger', 'any'],
            armorTypes: ['light'],
            preferWondrous: true
        },
        artificer: {
            weaponTypes: ['crossbow', 'any'],
            armorTypes: ['medium', 'shield'],
            preferWondrous: true
        }
    },

    /**
     * Get random magic items for a creature based on CR and optionally class
     * @param {number} cr - Challenge rating
     * @param {number} count - Number of items to return
     * @param {string[]} categories - Item categories to include (weapons, armor, wondrous)
     * @param {string} characterClass - Optional class to filter appropriate items
     * @returns {object[]} Array of magic items
     */
    getRandomItems(cr, count = 1, categories = ['weapons', 'armor', 'wondrous'], characterClass = null) {
        const crNum = Math.min(Math.max(0, Math.floor(cr)), 30);
        const rarities = this.rarityByCR[crNum] || ['common'];
        const classFilter = characterClass ? this.classItemFilters[characterClass] : null;

        const items = [];
        const allItems = [];

        // Collect all items from allowed categories and rarities
        for (const category of categories) {
            const categoryItems = this[category];
            if (!categoryItems) continue;

            for (const rarity of rarities) {
                const rarityItems = categoryItems[rarity];
                if (rarityItems) {
                    for (const item of rarityItems) {
                        // Filter by class if specified
                        if (classFilter) {
                            if (category === 'weapons' && item.weaponType) {
                                // Check if weapon type is appropriate for class
                                if (!classFilter.weaponTypes.includes(item.weaponType) &&
                                    !classFilter.weaponTypes.includes('any')) {
                                    continue;
                                }
                            }
                            if (category === 'armor' && item.armorType) {
                                // Check if armor type is appropriate for class
                                if (classFilter.armorTypes.includes('none')) {
                                    continue; // Class doesn't use armor
                                }
                                if (!classFilter.armorTypes.includes(item.armorType) &&
                                    item.armorType !== 'any') {
                                    continue;
                                }
                            }
                        }

                        allItems.push({
                            ...item,
                            rarity: rarity
                        });
                    }
                }
            }
        }

        if (allItems.length === 0) return items;

        // Select random items
        const shuffled = allItems.sort(() => Math.random() - 0.5);
        for (let i = 0; i < count && i < shuffled.length; i++) {
            items.push(shuffled[i]);
        }

        return items;
    },

    /**
     * Get class-appropriate magic items
     * @param {number} cr - Challenge rating
     * @param {string} characterClass - Character class
     * @param {number} count - Number of items
     * @returns {object[]} Array of magic items
     */
    getClassAppropriateItems(cr, characterClass, count = 1) {
        const classFilter = this.classItemFilters[characterClass];

        // Determine which categories to prioritize
        let categories = ['wondrous'];
        if (classFilter) {
            if (!classFilter.armorTypes.includes('none')) {
                categories.push('armor');
            }
            if (classFilter.preferWondrous) {
                // Wondrous items are already first, maybe add weapons
                if (Math.random() > 0.5) categories.push('weapons');
            } else {
                // Prefer weapons and armor
                categories = ['weapons', 'armor', 'wondrous'];
            }
        } else {
            categories = ['weapons', 'armor', 'wondrous'];
        }

        return this.getRandomItems(cr, count, categories, characterClass);
    },

    /**
     * Get a magic weapon appropriate for CR
     * @param {number} cr - Challenge rating
     * @returns {object|null} A magic weapon or null
     */
    getRandomWeapon(cr) {
        const items = this.getRandomItems(cr, 1, ['weapons']);
        return items.length > 0 ? items[0] : null;
    },

    /**
     * Get magic armor appropriate for CR
     * @param {number} cr - Challenge rating
     * @returns {object|null} A magic armor or null
     */
    getRandomArmor(cr) {
        const items = this.getRandomItems(cr, 1, ['armor']);
        return items.length > 0 ? items[0] : null;
    },

    /**
     * Get a wondrous item appropriate for CR
     * @param {number} cr - Challenge rating
     * @returns {object|null} A wondrous item or null
     */
    getRandomWondrous(cr) {
        const items = this.getRandomItems(cr, 1, ['wondrous']);
        return items.length > 0 ? items[0] : null;
    },

    /**
     * Apply magic item bonuses to a creature's stats
     * @param {object} creature - The creature object
     * @param {object[]} magicItems - Array of magic items
     * @returns {object} Modified creature stats
     */
    applyItemBonuses(creature, magicItems) {
        const mods = {
            acBonus: 0,
            attackBonus: 0,
            damageBonus: 0,
            saveBonus: 0,
            abilityBonuses: {},
            abilityOverrides: {},
            resistances: [],
            immunities: [],
            speed: {},
            actions: []
        };

        for (const item of magicItems) {
            // AC bonus
            if (item.acBonus) {
                mods.acBonus += item.acBonus;
            }

            // Attack bonus
            if (item.attackBonus) {
                mods.attackBonus += item.attackBonus;
            }

            // Damage bonus
            if (item.damageBonus) {
                mods.damageBonus += item.damageBonus;
            }

            // Save bonus
            if (item.saveBonus) {
                mods.saveBonus += item.saveBonus;
            }

            // Ability score increases
            if (item.abilityBonus) {
                for (const [ability, bonus] of Object.entries(item.abilityBonus)) {
                    mods.abilityBonuses[ability] = (mods.abilityBonuses[ability] || 0) + bonus;
                }
            }

            // Ability score set (overrides)
            if (item.abilitySet) {
                for (const [ability, value] of Object.entries(item.abilitySet)) {
                    if (!mods.abilityOverrides[ability] || value > mods.abilityOverrides[ability]) {
                        mods.abilityOverrides[ability] = value;
                    }
                }
            }

            // Damage resistances
            if (item.resistances) {
                mods.resistances.push(...item.resistances);
            }

            // Damage immunities
            if (item.immunities) {
                mods.immunities.push(...item.immunities);
            }

            // Speed modifications
            if (item.speed) {
                for (const [type, value] of Object.entries(item.speed)) {
                    mods.speed[type] = value;
                }
            }

            // Special actions
            if (item.action) {
                mods.actions.push({
                    name: item.name,
                    description: item.action
                });
            }
        }

        return mods;
    },

    /**
     * Format magic items for display
     * @param {object[]} items - Array of magic items
     * @returns {string[]} Array of formatted strings
     */
    formatItems(items) {
        return items.map(item => {
            let str = `${item.name} (${item.rarity})`;
            if (item.description) {
                str += `. ${item.description}`;
            }
            return str;
        });
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MagicItemsData;
}
