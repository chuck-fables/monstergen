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
            },
            {
                name: 'Arrow of Slaying',
                type: 'weapon',
                weaponType: 'ammunition',
                attackBonus: 0,
                damageBonus: 0,
                extraDamage: '1d6 (vs specific creature type)',
                description: 'This arrow is designed to slay a specific creature type. On hit vs that creature type, deal +1d6 damage and the target must make a DC 17 Constitution save or take an extra 6d10 piercing damage.'
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
            },
            {
                name: 'Berserker Axe',
                type: 'weapon',
                weaponType: 'axe',
                attackBonus: 1,
                damageBonus: 1,
                cursed: true,
                description: 'You gain a +1 bonus to attack and damage rolls. Cursed: When you take damage, you must attack the nearest creature until no enemies remain. You cannot willingly be disarmed of this weapon.'
            },
            {
                name: 'Dagger of Venom',
                type: 'weapon',
                weaponType: 'dagger',
                attackBonus: 1,
                damageBonus: 1,
                action: 'Poison (1/day). You can coat the blade with thick, black poison as an action. The poison remains for 1 minute or until an attack hits. The target must succeed on a DC 15 Constitution save or take 2d10 poison damage and become poisoned for 1 minute.'
            },
            {
                name: 'Mace of Disruption',
                type: 'weapon',
                weaponType: 'mace',
                attackBonus: 0,
                damageBonus: 0,
                extraDamage: '2d6 radiant (vs fiend/undead)',
                description: 'This weapon sheds bright light in a 20-foot radius. Fiends and undead hit by it take an extra 2d6 radiant damage. If the target has 25 HP or fewer after taking this damage, it must succeed on a DC 15 Wisdom save or be destroyed.'
            },
            {
                name: 'Mace of Smiting',
                type: 'weapon',
                weaponType: 'mace',
                attackBonus: 1,
                damageBonus: 1,
                description: 'You gain a +1 bonus to attack and damage rolls (+3 vs constructs). On a critical hit, double the damage dice. If a construct has 25 HP or fewer after a critical hit, it is destroyed.'
            },
            {
                name: 'Sword of Sharpness',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 0,
                damageBonus: 0,
                extraDamage: '4d6 slashing (on nat 20)',
                description: 'Slashing weapons only. On a natural 20 against a creature with limbs, sever one limb (DM choice). Also deal an extra 4d6 slashing damage on nat 20. If you roll maximum on all damage dice, deal an additional 14 slashing damage.'
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
            },
            {
                name: 'Defender',
                type: 'weapon',
                weaponType: 'sword',
                attackBonus: 3,
                damageBonus: 3,
                description: 'You gain a +3 bonus to attack and damage rolls. At the start of each of your turns, you can transfer any amount of the bonus to your AC instead, lasting until the start of your next turn.'
            },
            {
                name: 'Dwarven Thrower',
                type: 'weapon',
                weaponType: 'hammer',
                attackBonus: 3,
                damageBonus: 3,
                extraDamage: '1d8 (thrown), +2d8 (vs giants)',
                description: 'You gain a +3 bonus to attack and damage rolls. This hammer returns when thrown (range 20/60). On a thrown hit, deal an extra 1d8 damage, or 2d8 extra damage against giants. Requires attunement by a dwarf.'
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
            },
            {
                name: 'Glamoured Studded Leather',
                type: 'armor',
                armorType: 'light',
                acBonus: 1,
                baseAC: 12,
                description: 'You have a +1 bonus to AC while wearing this armor. As a bonus action, you can change its appearance to any style of clothing you wish, though it always retains its weight.'
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
            },
            {
                name: 'Arrow-Catching Shield',
                type: 'armor',
                armorType: 'shield',
                acBonus: 2,
                description: 'You gain a +2 bonus to AC against ranged attacks while wielding this shield. Additionally, when an attacker makes a ranged attack that would hit you, you can use your reaction to reduce the damage to 0.'
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
            },
            {
                name: 'Armor of Vulnerability',
                type: 'armor',
                armorType: 'heavy',
                acBonus: 0,
                baseAC: 18,
                resistances: ['bludgeoning'],
                cursed: true,
                description: 'While wearing this armor, you have resistance to one of bludgeoning, piercing, or slashing damage (determined when found). Cursed: You have vulnerability to the other two damage types.'
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
                name: 'Clothes of Mending',
                type: 'wondrous',
                slot: 'body',
                description: 'This outfit magically mends itself, repairing any tears or damage over the course of 1 hour.'
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
                name: 'Amulet of Proof Against Detection',
                type: 'wondrous',
                slot: 'neck',
                description: 'While wearing this amulet, you are hidden from divination magic. You can\'t be targeted by such magic or perceived through magical scrying sensors.'
            },
            {
                name: 'Bag of Holding',
                type: 'wondrous',
                slot: 'none',
                description: 'This bag has an interior space considerably larger than its outside dimensions. It can hold up to 500 pounds, not exceeding a volume of 64 cubic feet, and weighs 15 pounds regardless of contents. Breathing creatures inside have 10 minutes of air.'
            },
            {
                name: 'Bag of Tricks',
                type: 'wondrous',
                slot: 'none',
                description: 'This bag contains 3 fuzzy balls that reappear at dawn. You can throw a ball up to 20 feet, where it transforms into a random beast that is friendly and obeys your commands for 10 minutes.'
            },
            {
                name: 'Boots of Elvenkind',
                type: 'wondrous',
                slot: 'boots',
                description: 'While you wear these boots, your steps make no sound. You have advantage on Dexterity (Stealth) checks that rely on moving silently.'
            },
            {
                name: 'Boots of Striding and Springing',
                type: 'wondrous',
                slot: 'boots',
                speed: { walking: 30 },
                description: 'While you wear these boots, your walking speed becomes 30 feet (if it was lower). Your jump distance is tripled.'
            },
            {
                name: 'Boots of the Winterlands',
                type: 'wondrous',
                slot: 'boots',
                resistances: ['cold'],
                description: 'While wearing these boots, you have resistance to cold damage. You ignore difficult terrain created by ice or snow, and can tolerate temperatures as low as -50 degrees Fahrenheit.'
            },
            {
                name: 'Bracers of Archery',
                type: 'wondrous',
                slot: 'arms',
                damageBonus: 2,
                description: 'While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.'
            },
            {
                name: 'Brooch of Shielding',
                type: 'wondrous',
                slot: 'neck',
                resistances: ['force'],
                description: 'While wearing this brooch, you have resistance to force damage and immunity to the magic missile spell.'
            },
            {
                name: 'Circlet of Blasting',
                type: 'wondrous',
                slot: 'head',
                action: 'Scorching Ray (1/day). While wearing this circlet, you can cast scorching ray as an action.'
            },
            {
                name: 'Cloak of Elvenkind',
                type: 'wondrous',
                slot: 'cloak',
                description: 'While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks.'
            },
            {
                name: 'Cloak of Protection',
                type: 'wondrous',
                slot: 'cloak',
                acBonus: 1,
                saveBonus: 1,
                description: 'You gain a +1 bonus to AC and saving throws while you wear this cloak.'
            },
            {
                name: 'Cloak of the Manta Ray',
                type: 'wondrous',
                slot: 'cloak',
                speed: { swim: 60 },
                description: 'While wearing this cloak with its hood up in water, you can breathe underwater and have a swimming speed of 60 feet.'
            },
            {
                name: 'Decanter of Endless Water',
                type: 'wondrous',
                slot: 'none',
                description: 'This stoppered flask produces fresh or salt water when commanded. "Stream" produces 1 gallon, "Fountain" produces 5 gallons, and "Geyser" produces 30 gallons in a 30-foot line.'
            },
            {
                name: 'Dust of Disappearance',
                type: 'wondrous',
                slot: 'none',
                description: 'When you throw this dust into the air, you and each creature and object within 10 feet become invisible for 2d4 minutes. The invisibility ends early if a creature attacks or casts a spell.'
            },
            {
                name: 'Dust of Dryness',
                type: 'wondrous',
                slot: 'none',
                description: 'This small packet contains 1d6+4 pinches of dust. You can use an action to sprinkle a pinch over water, absorbing a 15-foot cube of water and creating a marble-sized pellet.'
            },
            {
                name: 'Eyes of the Eagle',
                type: 'wondrous',
                slot: 'eyes',
                description: 'These lenses grant advantage on Wisdom (Perception) checks that rely on sight.'
            },
            {
                name: 'Gauntlets of Ogre Power',
                type: 'wondrous',
                slot: 'hands',
                abilitySet: { strength: 19 },
                description: 'Your Strength score is 19 while you wear these gauntlets.'
            },
            {
                name: 'Gloves of Thievery',
                type: 'wondrous',
                slot: 'hands',
                skillBonus: { 'sleight of hand': 5 },
                description: 'These gloves are invisible while worn. You gain a +5 bonus to Dexterity (Sleight of Hand) checks and checks to pick locks.'
            },
            {
                name: 'Goggles of Night',
                type: 'wondrous',
                slot: 'eyes',
                senses: { darkvision: 60 },
                description: 'While wearing these dark lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet.'
            },
            {
                name: 'Hat of Disguise',
                type: 'wondrous',
                slot: 'head',
                action: 'Disguise Self (At Will). While wearing this hat, you can cast disguise self at will. The spell ends if the hat is removed.'
            },
            {
                name: 'Headband of Intellect',
                type: 'wondrous',
                slot: 'head',
                abilitySet: { intelligence: 19 },
                description: 'Your Intelligence score is 19 while you wear this headband.'
            },
            {
                name: 'Lantern of Revealing',
                type: 'wondrous',
                slot: 'none',
                description: 'While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible in the bright light.'
            },
            {
                name: 'Medallion of Thoughts',
                type: 'wondrous',
                slot: 'neck',
                action: 'Detect Thoughts (3 charges). While wearing this medallion, you can cast detect thoughts (save DC 13). The medallion regains 1d3 expended charges daily at dawn.'
            },
            {
                name: 'Pearl of Power',
                type: 'wondrous',
                slot: 'none',
                action: 'Regain Spell Slot (1/day). While this pearl is on your person, you can use an action to speak its command word and regain one expended spell slot of 3rd level or lower.'
            },
            {
                name: 'Periapt of Wound Closure',
                type: 'wondrous',
                slot: 'neck',
                description: 'While wearing this pendant, you stabilize automatically when dying, and when you roll Hit Dice to regain hit points, double the number of hit points restored.'
            },
            {
                name: 'Pipes of Haunting',
                type: 'wondrous',
                slot: 'none',
                action: 'Haunting Tune (3 charges). You can use an action to play these pipes and expend 1 charge. Each creature within 30 feet must succeed on a DC 15 Wisdom save or be frightened for 1 minute. Regains 1d3 charges at dawn.'
            },
            {
                name: 'Pipes of the Sewers',
                type: 'wondrous',
                slot: 'none',
                action: 'Summon Rats (3 charges). While playing these pipes, you can use an action to expend charges to conjure swarms of rats. Regains 1d3 charges at dawn.'
            },
            {
                name: 'Ring of Mind Shielding',
                type: 'wondrous',
                slot: 'ring',
                description: 'While wearing this ring, you are immune to magic that allows creatures to read your thoughts or detect lies.'
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
                name: 'Rope of Climbing',
                type: 'wondrous',
                slot: 'none',
                description: 'This 60-foot length of silk rope weighs 3 pounds and can hold up to 3,000 pounds. As an action, you can command it to move, fasten, unfasten, or coil. The rope moves 10 feet per round when animated.'
            },
            {
                name: 'Slippers of Spider Climbing',
                type: 'wondrous',
                slot: 'boots',
                speed: { climb: 'walking speed' },
                description: 'While wearing these slippers, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed.'
            },
            {
                name: 'Stone of Good Luck',
                type: 'wondrous',
                slot: 'none',
                saveBonus: 1,
                description: 'While this polished agate is on your person, you gain a +1 bonus to ability checks and saving throws.'
            },
            {
                name: 'Wind Fan',
                type: 'wondrous',
                slot: 'none',
                action: 'Gust of Wind (3 charges). While holding this fan, you can use an action to cast gust of wind (save DC 13). The fan regains 1d3 expended charges daily at dawn.'
            },
            {
                name: 'Winged Boots',
                type: 'wondrous',
                slot: 'boots',
                speed: { fly: 'walking speed' },
                action: 'Fly (4 hours). While wearing these boots, you have a flying speed equal to your walking speed. You can use the boots for up to 4 hours, regaining 2 hours of flying capability for every 12 hours not in use.'
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
                name: 'Bead of Force',
                type: 'wondrous',
                slot: 'none',
                action: 'Force Explosion. You can throw this bead up to 60 feet. On impact, it explodes. Each creature within 10 feet must succeed on a DC 13 Dexterity save or take 5d4 force damage. A sphere of force then encloses the area for 1 minute.'
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
                name: 'Chime of Opening',
                type: 'wondrous',
                slot: 'none',
                action: 'Open (10 charges). You can strike this chime as an action, pointing it at an object within 120 feet that can be opened. One lock or latch on the object opens unless protected by arcane lock. The chime can be used 10 times before crumbling.'
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
                name: 'Dust of Sneezing and Choking',
                type: 'wondrous',
                slot: 'none',
                description: 'When this dust is scattered, each creature in a 30-foot radius must succeed on a DC 15 Constitution save or become incapacitated and suffocating. An affected creature can repeat the save at the end of each turn. Three failures results in 0 HP.'
            },
            {
                name: 'Figurine of Wondrous Power',
                type: 'wondrous',
                slot: 'none',
                action: 'Animate Figurine. This statuette of a beast can become a living creature for a duration. Variants include: Bronze Griffon, Ebony Fly, Golden Lions, Ivory Goats, Marble Elephant, Obsidian Steed, Onyx Dog, Serpentine Owl, and Silver Raven.'
            },
            {
                name: 'Folding Boat',
                type: 'wondrous',
                slot: 'none',
                description: 'This small wooden box unfolds into a boat 10 feet long that holds 4 creatures, or a ship 24 feet long that holds 15 creatures. Command words change its form.'
            },
            {
                name: 'Gem of Brightness',
                type: 'wondrous',
                slot: 'none',
                action: 'Light Effects (50 charges). This gem has 50 charges and can shed light (1 charge), fire a 60-foot beam that blinds on a failed DC 15 Con save (5 charges), or flare with 30-foot blinding light (10 charges).'
            },
            {
                name: 'Gem of Seeing',
                type: 'wondrous',
                slot: 'none',
                action: 'Truesight (3 charges). This gem has 3 charges. As an action, you can speak its command word to gain truesight out to 120 feet for 10 minutes. Regains 1d3 charges at dawn.'
            },
            {
                name: 'Gloves of Missile Snaring',
                type: 'wondrous',
                slot: 'hands',
                description: 'When a ranged weapon attack hits you while you wear these gloves, you can use your reaction to reduce the damage by 1d10 + your Dexterity modifier. If you reduce the damage to 0, you can catch the missile.'
            },
            {
                name: 'Gloves of Swimming and Climbing',
                type: 'wondrous',
                slot: 'hands',
                speed: { swim: 'walking speed', climb: 'walking speed' },
                description: 'While wearing these gloves, climbing and swimming don\'t cost you extra movement, and you gain a +5 bonus to Strength (Athletics) checks made to climb or swim.'
            },
            {
                name: 'Helm of Comprehending Languages',
                type: 'wondrous',
                slot: 'head',
                action: 'Comprehend Languages (At Will). While wearing this helm, you can cast comprehend languages at will.'
            },
            {
                name: 'Helm of Telepathy',
                type: 'wondrous',
                slot: 'head',
                action: 'Telepathy/Suggestion. While wearing this helm, you can cast detect thoughts (DC 13) at will. You can also cast suggestion (DC 13) once per day.'
            },
            {
                name: 'Helm of Teleportation',
                type: 'wondrous',
                slot: 'head',
                action: 'Teleport (3 charges). This helm has 3 charges. While wearing it, you can use an action to expend 1 charge and cast teleport. Regains 1d3 charges at dawn.'
            },
            {
                name: 'Horn of Blasting',
                type: 'wondrous',
                slot: 'none',
                action: 'Blast. As an action, you can speak the horn\'s command word and blow it. Each creature in a 30-foot cone must make a DC 15 Constitution save or take 5d6 thunder damage and be deafened for 1 minute. On a success, half damage and not deafened.'
            },
            {
                name: 'Mantle of Spell Resistance',
                type: 'wondrous',
                slot: 'cloak',
                description: 'While wearing this cloak, you have advantage on saving throws against spells.'
            },
            {
                name: 'Necklace of Adaptation',
                type: 'wondrous',
                slot: 'neck',
                description: 'While wearing this necklace, you can breathe normally in any environment, and you have advantage on saving throws against harmful gases and vapors.'
            },
            {
                name: 'Necklace of Fireballs',
                type: 'wondrous',
                slot: 'neck',
                action: 'Fireball. This necklace has 1d6+3 beads. You can detach a bead and throw it up to 60 feet. It detonates as a 3rd-level fireball (5d6 fire, DC 15 Dex). You can throw multiple beads, adding 1d6 damage per extra bead.'
            },
            {
                name: 'Periapt of Health',
                type: 'wondrous',
                slot: 'neck',
                description: 'You are immune to contracting any disease while wearing this pendant. If you are already infected, the effects are suppressed while you wear it.'
            },
            {
                name: 'Periapt of Proof Against Poison',
                type: 'wondrous',
                slot: 'neck',
                immunities: ['poison'],
                description: 'While wearing this pendant, you are immune to poison damage and the poisoned condition.'
            },
            {
                name: 'Portable Hole',
                type: 'wondrous',
                slot: 'none',
                description: 'This fine black cloth unfolds into a circular sheet 6 feet in diameter. Placing it on a surface creates a 10-foot-deep extradimensional hole. Folding it closes the hole. Placing it inside a bag of holding creates a rift to the Astral Plane.'
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
                name: 'Robe of Useful Items',
                type: 'wondrous',
                slot: 'body',
                description: 'This robe has patches that can be detached to become real items. It always has two each of: dagger, bullseye lantern, steel mirror, 10-foot pole, hempen rope, and sack. It also has 4d4 additional random patches.'
            },
            {
                name: 'Rope of Entanglement',
                type: 'wondrous',
                slot: 'none',
                action: 'Entangle. While holding this 20-foot rope, you can use an action to command it to entangle a creature you can see within 20 feet. The target must succeed on a DC 15 Dexterity save or be restrained. You can release it as a bonus action.'
            },
            {
                name: 'Wings of Flying',
                type: 'wondrous',
                slot: 'cloak',
                speed: { fly: 60 },
                action: 'Fly (1/day). You can use an action to speak the command word and gain a flying speed of 60 feet for 1 hour.'
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
                name: 'Carpet of Flying',
                type: 'wondrous',
                slot: 'none',
                speed: { fly: 60 },
                description: 'You can speak the carpet\'s command word as an action to make it hover and fly. It has various sizes: 3x5 ft (200 lb, 80 ft), 4x6 ft (400 lb, 60 ft), 5x7 ft (600 lb, 40 ft), or 6x9 ft (800 lb, 30 ft).'
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
                name: 'Crystal Ball',
                type: 'wondrous',
                slot: 'none',
                action: 'Scrying. You can cast scrying (save DC 17) while touching this crystal ball. Variants include Crystal Ball of Mind Reading, Crystal Ball of Telepathy, and Crystal Ball of True Seeing with additional powers.'
            },
            {
                name: 'Horn of Valhalla',
                type: 'wondrous',
                slot: 'none',
                action: 'Summon Berserkers. You can blow this horn as an action to summon warrior spirits. Silver (2d4+2 berserkers), Brass (3d4+3), Bronze (4d4+4), or Iron (5d4+5). They are friendly and fight for you for 1 hour.'
            },
            {
                name: 'Instant Fortress',
                type: 'wondrous',
                slot: 'none',
                action: 'Fortress. You can place this 1-inch metal cube on the ground and speak its command word as an action. It grows into a 20x20x30 ft adamantine tower with arrow slits, battlement, and interior floors.'
            },
            {
                name: 'Ioun Stone (Mastery)',
                type: 'wondrous',
                slot: 'none',
                description: 'Your proficiency bonus increases by 1 while this pale green prism orbits your head.'
            },
            {
                name: 'Manual of Bodily Health',
                type: 'wondrous',
                slot: 'none',
                abilityBonus: { constitution: 2 },
                description: 'After spending 48 hours reading this manual, your Constitution score increases by 2 (max 30). The manual then loses its magic for 100 years.'
            },
            {
                name: 'Manual of Gainful Exercise',
                type: 'wondrous',
                slot: 'none',
                abilityBonus: { strength: 2 },
                description: 'After spending 48 hours reading this manual, your Strength score increases by 2 (max 30). The manual then loses its magic for 100 years.'
            },
            {
                name: 'Manual of Quickness of Action',
                type: 'wondrous',
                slot: 'none',
                abilityBonus: { dexterity: 2 },
                description: 'After spending 48 hours reading this manual, your Dexterity score increases by 2 (max 30). The manual then loses its magic for 100 years.'
            },
            {
                name: 'Mirror of Life Trapping',
                type: 'wondrous',
                slot: 'none',
                description: 'This mirror has 15 extradimensional cells. A creature that sees its reflection must succeed on a DC 15 Charisma save or be trapped in a cell. You can free creatures by speaking command words.'
            },
            {
                name: 'Ring of Regeneration',
                type: 'wondrous',
                slot: 'ring',
                description: 'While wearing this ring, you regain 1d6 hit points every 10 minutes, provided you have at least 1 hit point. Lost body members regrow after 1d6+1 days.'
            },
            {
                name: 'Robe of Eyes',
                type: 'wondrous',
                slot: 'body',
                senses: { darkvision: 120 },
                description: 'This robe is covered in eyelike patterns. While wearing it, you can see in all directions, have advantage on sight-based Perception checks, can\'t be surprised, have darkvision 120 ft, and can see invisible creatures and into the Ethereal Plane.'
            },
            {
                name: 'Robe of Stars',
                type: 'wondrous',
                slot: 'body',
                saveBonus: 1,
                action: 'Stars (6 charges). You have +1 to saving throws. You can use an action to pull off a star and throw it up to 60 feet, dealing 5d4 radiant damage. You can also enter the Astral Plane 1/day.'
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
                name: 'Tome of Clear Thought',
                type: 'wondrous',
                slot: 'none',
                abilityBonus: { intelligence: 2 },
                description: 'After spending 48 hours reading this tome, your Intelligence score increases by 2 (max 30). The tome then loses its magic for 100 years.'
            }
        ],
        legendary: [
            {
                name: 'Apparatus of the Crab',
                type: 'wondrous',
                slot: 'none',
                description: 'This iron barrel-shaped container is a Large object that functions as a crab-shaped submersible vehicle. It can hold two Medium creatures, has AC 20, 200 HP, and can move 30 ft on land or through water using 10 levers that control its functions.'
            },
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
                name: 'Cube of Force',
                type: 'wondrous',
                slot: 'none',
                action: 'Force Barrier (36 charges). This cube has 36 charges. You can use an action to press one of its faces to activate a barrier of force with various properties: blocks gases, nonliving matter, living matter, spell effects, or everything. Each face uses 1-6 charges per minute.'
            },
            {
                name: 'Cubic Gate',
                type: 'wondrous',
                slot: 'none',
                action: 'Planar Portal. This cube has 6 sides, each keyed to a different plane of existence. You can use an action to press a side to cast gate, opening a portal to that plane. Each side can be used once, and all sides recharge at dawn.'
            },
            {
                name: 'Efreeti Bottle',
                type: 'wondrous',
                slot: 'none',
                action: 'Release Efreeti. When you open this brass bottle, an efreeti appears. On first opening: 10% chance it attacks, 80% chance it serves you for 1 hour, 10% chance it grants 3 wishes. On subsequent openings: 90% chance it attacks, 10% chance it serves for 1 hour.'
            },
            {
                name: 'Ioun Stone (Greater Absorption)',
                type: 'wondrous',
                slot: 'none',
                description: 'This marbled lavender and green ellipsoid can absorb spells of 8th level or lower. It can absorb 50 levels total before burning out.'
            },
            {
                name: 'Iron Flask',
                type: 'wondrous',
                slot: 'none',
                action: 'Trap Creature. You can use an action to speak the command word and target a creature from another plane within 60 feet. The target must succeed on a DC 17 Wisdom save or be trapped inside. You can release it to serve you for 1 hour.'
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
                name: 'Robe of Scintillating Colors',
                type: 'wondrous',
                slot: 'body',
                action: 'Dazzle (3 charges). While wearing this robe, you can use an action to activate its colors. Each creature within 30 feet that can see you must succeed on a DC 15 Wisdom save or be stunned until the end of your next turn. Regains 1d3 charges at dawn. You also have advantage on saves against gaze attacks.'
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
                name: 'Sphere of Annihilation',
                type: 'wondrous',
                slot: 'none',
                description: 'This 2-foot-diameter black sphere is a hole in the multiverse, destroying all matter it touches. You can use an action to move it 5 feet times your Intelligence modifier by making a DC 25 Intelligence (Arcana) check. On a failed check, it moves toward you.'
            },
            {
                name: 'Talisman of Pure Good',
                type: 'wondrous',
                slot: 'neck',
                action: 'Destroy Evil (7 charges). A good cleric or paladin can use an action and expend 1 charge to target a visible evil creature. The target must succeed on a DC 20 Dexterity save or be destroyed.'
            },
            {
                name: 'Talisman of Ultimate Evil',
                type: 'wondrous',
                slot: 'neck',
                action: 'Destroy Good (6 charges). An evil cleric or paladin can use an action and expend 1 charge to target a visible good creature. The target must succeed on a DC 20 Dexterity save or be destroyed.'
            },
            {
                name: 'Tome of Leadership and Influence',
                type: 'wondrous',
                slot: 'none',
                abilityBonus: { charisma: 2 },
                description: 'After spending 48 hours reading this tome, your Charisma score increases by 2 (max 30). The tome then loses its magic for 100 years.'
            },
            {
                name: 'Tome of Understanding',
                type: 'wondrous',
                slot: 'none',
                abilityBonus: { wisdom: 2 },
                description: 'After spending 48 hours reading this tome, your Wisdom score increases by 2 (max 30). The tome then loses its magic for 100 years.'
            },
            {
                name: 'Well of Many Worlds',
                type: 'wondrous',
                slot: 'none',
                action: 'Planar Portal. This fine black cloth can be unfolded to a 6-foot diameter and placed on a solid surface as an action. It creates a two-way portal to another plane of existence (randomly determined). The portal remains until the cloth is removed.'
            }
        ]
    },

    // Wands
    wands: {
        uncommon: [
            {
                name: 'Wand of Magic Detection',
                type: 'wand',
                requiresAttunement: false,
                description: 'This wand has 3 charges. While holding it, you can expend 1 charge as an action to cast the detect magic spell from it. The wand regains 1d3 expended charges daily at dawn.'
            },
            {
                name: 'Wand of Magic Missiles',
                type: 'wand',
                requiresAttunement: false,
                description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 or more charges to cast the magic missile spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes.'
            },
            {
                name: 'Wand of Secrets',
                type: 'wand',
                requiresAttunement: false,
                description: 'This wand has 3 charges. While holding it, you can use an action to expend 1 charge, and if a secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you. The wand regains 1d3 expended charges daily at dawn.'
            },
            {
                name: 'Wand of the War Mage +1',
                type: 'wand',
                requiresAttunement: 'spellcaster',
                spellAttackBonus: 1,
                description: 'While holding this wand, you gain a +1 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack.'
            },
            {
                name: 'Wand of Web',
                type: 'wand',
                requiresAttunement: 'spellcaster',
                description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 charge to cast the web spell (save DC 15) from it. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes.'
            }
        ],
        rare: [
            {
                name: 'Wand of Binding',
                type: 'wand',
                requiresAttunement: 'spellcaster',
                description: 'This wand has 7 charges. While holding it, you can use an action to expend charges to cast one of the following spells (save DC 17): hold monster (5 charges) or hold person (2 charges). The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes.'
            },
            {
                name: 'Wand of Enemy Detection',
                type: 'wand',
                requiresAttunement: true,
                description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 charge to speak its command word. For the next minute, you know the direction of the nearest creature hostile to you within 60 feet, but not its distance from you. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes.'
            },
            {
                name: 'Wand of Fear',
                type: 'wand',
                requiresAttunement: true,
                description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 charge to cast the command spell (save DC 15) or 2 charges to cast the fear spell (save DC 15) from it. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes.'
            },
            {
                name: 'Wand of Fireballs',
                type: 'wand',
                requiresAttunement: 'spellcaster',
                description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 or more charges to cast the fireball spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes.'
            },
            {
                name: 'Wand of Lightning Bolts',
                type: 'wand',
                requiresAttunement: 'spellcaster',
                description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 or more charges to cast the lightning bolt spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes.'
            },
            {
                name: 'Wand of Paralysis',
                type: 'wand',
                requiresAttunement: 'spellcaster',
                description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 charge to cause a thin blue ray to streak from the tip toward a creature you can see within 60 feet. The target must succeed on a DC 15 Constitution saving throw or be paralyzed for 1 minute. At the end of each of the target\'s turns, it can repeat the saving throw, ending the effect on itself on a success. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes.'
            },
            {
                name: 'Wand of the War Mage +2',
                type: 'wand',
                requiresAttunement: 'spellcaster',
                spellAttackBonus: 2,
                description: 'While holding this wand, you gain a +2 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack.'
            },
            {
                name: 'Wand of Wonder',
                type: 'wand',
                requiresAttunement: 'spellcaster',
                description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 charge and choose a target within 120 feet of you. Roll d100 and consult the following table to discover what happens. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes.'
            }
        ],
        veryRare: [
            {
                name: 'Wand of Polymorph',
                type: 'wand',
                requiresAttunement: 'spellcaster',
                description: 'This wand has 7 charges. While holding it, you can use an action to expend 1 charge to cast the polymorph spell (save DC 15) from it. The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand\'s last charge, roll a d20. On a 1, the wand crumbles into ashes.'
            },
            {
                name: 'Wand of the War Mage +3',
                type: 'wand',
                requiresAttunement: 'spellcaster',
                spellAttackBonus: 3,
                description: 'While holding this wand, you gain a +3 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack.'
            }
        ]
    },

    // Magic Rings
    rings: {
        uncommon: [
            {
                name: 'Ring of Jumping',
                type: 'ring',
                requiresAttunement: true,
                description: 'While wearing this ring, you can cast the jump spell from it as a bonus action at will, but can target only yourself when you do so.'
            },
            {
                name: 'Ring of Swimming',
                type: 'ring',
                speed: { swim: 40 },
                description: 'You have a swimming speed of 40 feet while wearing this ring.'
            },
            {
                name: 'Ring of Warmth',
                type: 'ring',
                requiresAttunement: true,
                resistances: ['cold'],
                description: 'While wearing this ring, you have resistance to cold damage. In addition, you and everything you wear and carry are unharmed by temperatures as low as -50 degrees Fahrenheit.'
            },
            {
                name: 'Ring of Water Walking',
                type: 'ring',
                description: 'While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground.'
            },
            {
                name: 'Ring of Feather Falling',
                type: 'ring',
                requiresAttunement: true,
                description: 'When you fall while wearing this ring, you descend 60 feet per round and take no damage from falling.'
            }
        ],
        rare: [
            {
                name: 'Ring of Animal Influence',
                type: 'ring',
                action: 'Animal Influence (3 charges). You can expend 1 charge to cast animal friendship (save DC 13), fear targeting only beasts (save DC 13), or speak with animals. The ring regains 1d3 expended charges daily at dawn.'
            },
            {
                name: 'Ring of Free Action',
                type: 'ring',
                requiresAttunement: true,
                description: 'While wearing this ring, difficult terrain doesn\'t cost you extra movement. In addition, magic can neither reduce your speed nor cause you to be paralyzed or restrained.'
            },
            {
                name: 'Ring of Resistance',
                type: 'ring',
                requiresAttunement: true,
                resistances: ['varies'],
                description: 'You have resistance to one damage type while wearing this ring. The gem in the ring indicates the type: pearl (acid), tourmaline (cold), garnet (fire), sapphire (force), jade (lightning), amethyst (necrotic), topaz (poison), opal (psychic), ruby (radiant), or spinel (thunder).'
            },
            {
                name: 'Ring of the Ram',
                type: 'ring',
                requiresAttunement: true,
                action: 'Ram Strike (3 charges). While wearing this ring, you can use an action to expend 1 to 3 charges to make a ranged spell attack against one creature within 60 feet. The attack deals 2d10 force damage per charge expended. Additionally, if the target is a creature, it must succeed on a DC 17 Strength saving throw or be pushed 5 feet away per charge expended. The ring regains 1d3 expended charges daily at dawn.'
            },
            {
                name: 'Ring of X-ray Vision',
                type: 'ring',
                requiresAttunement: true,
                action: 'X-ray Vision. While wearing this ring, you can use an action to see into and through solid matter for 1 minute. This vision has a radius of 30 feet. You can see through 1 foot of stone, 1 inch of common metal, or up to 3 feet of wood or dirt. Thicker substances or a thin sheet of lead blocks the vision. Each use causes 1 level of exhaustion unless you succeed on a DC 15 Constitution saving throw.'
            }
        ],
        veryRare: [
            {
                name: 'Ring of Invisibility',
                type: 'ring',
                requiresAttunement: true,
                action: 'Invisibility. While wearing this ring, you can turn invisible as an action. Anything you are wearing or carrying is invisible with you. You remain invisible until the ring is removed, until you attack or cast a spell, or until you use a bonus action to become visible again.'
            },
            {
                name: 'Ring of Shooting Stars',
                type: 'ring',
                requiresAttunement: true,
                action: 'Shooting Stars (6 charges, outdoors at night only). While wearing this ring outdoors at night, you can cast dancing lights or light at will. You can expend 2 charges to cast faerie fire or 1 to 3 charges to launch 1 to 3 lightning spheres (120 ft range, 4d12 lightning each, half on DC 15 Dex save). You can expend 1 to 3 charges to create shooting stars (each 15-ft cube within 60 ft deals 5d4 fire damage, half on DC 15 Dex save). The ring regains 1d6 expended charges daily at dawn.'
            },
            {
                name: 'Ring of Spell Turning',
                type: 'ring',
                requiresAttunement: true,
                description: 'While wearing this ring, you have advantage on saving throws against any spell that targets only you (not in an area of effect). In addition, if you roll a 20 for the save and the spell is 7th level or lower, the spell has no effect on you and instead targets the caster, using the slot level, spell save DC, attack bonus, and spellcasting ability of the caster.'
            },
            {
                name: 'Ring of Telekinesis',
                type: 'ring',
                requiresAttunement: true,
                action: 'Telekinesis. While wearing this ring, you can cast the telekinesis spell at will, but you can target only objects that aren\'t being worn or carried.'
            }
        ],
        legendary: [
            {
                name: 'Ring of Elemental Command (Air)',
                type: 'ring',
                requiresAttunement: true,
                resistances: ['lightning'],
                speed: { fly: 60 },
                action: 'Air Elemental Command. While wearing this ring, you have advantage on attack rolls against air elementals, and they have disadvantage on attack rolls against you. In addition, you have access to the following properties: You can expend 2 charges to cast dominate monster on an air elemental. You can expend 2 charges to cast gust of wind (DC 17). You can spend 2 charges to cast wind wall (DC 17). You can speak and understand Auran. If you help slay an air elemental while attuned to the ring, you gain the ability to fly at a speed of 60 feet and fall damage immunity. The ring has 5 charges and regains 1d4+1 charges daily at dawn.'
            },
            {
                name: 'Ring of Elemental Command (Earth)',
                type: 'ring',
                requiresAttunement: true,
                resistances: ['acid'],
                action: 'Earth Elemental Command. While wearing this ring, you have advantage on attack rolls against earth elementals, and they have disadvantage on attack rolls against you. In addition, you have access to the following properties: You can expend 2 charges to cast dominate monster on an earth elemental. You can expend 2 charges to cast stone shape. You can expend 2 charges to cast stoneskin (DC 17). You can speak and understand Terran. If you help slay an earth elemental while attuned to the ring, you gain the ability to move through solid earth or rock as if difficult terrain. The ring has 5 charges and regains 1d4+1 charges daily at dawn.'
            },
            {
                name: 'Ring of Elemental Command (Fire)',
                type: 'ring',
                requiresAttunement: true,
                resistances: ['fire'],
                immunities: ['fire'],
                action: 'Fire Elemental Command. While wearing this ring, you have advantage on attack rolls against fire elementals, and they have disadvantage on attack rolls against you. In addition, you have access to the following properties: You can expend 2 charges to cast dominate monster on a fire elemental. You can expend 2 charges to cast burning hands (DC 17). You can expend 2 charges to cast fireball (DC 17). You can expend 2 charges to cast wall of fire (DC 17). You can speak and understand Ignan. If you help slay a fire elemental while attuned to the ring, you gain immunity to fire damage. The ring has 5 charges and regains 1d4+1 charges daily at dawn.'
            },
            {
                name: 'Ring of Elemental Command (Water)',
                type: 'ring',
                requiresAttunement: true,
                resistances: ['cold'],
                speed: { swim: 60 },
                action: 'Water Elemental Command. While wearing this ring, you have advantage on attack rolls against water elementals, and they have disadvantage on attack rolls against you. In addition, you have access to the following properties: You can expend 2 charges to cast dominate monster on a water elemental. You can expend 2 charges to cast create or destroy water. You can expend 2 charges to cast control water (DC 17). You can expend 2 charges to cast ice storm (DC 17). You can speak and understand Aquan. If you help slay a water elemental while attuned to the ring, you can breathe underwater, have a swimming speed of 60 feet, and can walk on water as if solid ground. The ring has 5 charges and regains 1d4+1 charges daily at dawn.'
            }
        ]
    },

    // Rods
    rods: {
        uncommon: [
            {
                name: 'Immovable Rod',
                type: 'rod',
                description: 'This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn\'t move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success.'
            }
        ],
        rare: [],
        veryRare: [
            {
                name: 'Rod of Absorption',
                type: 'rod',
                requiresAttunement: true,
                description: 'While holding this rod, you can use your reaction to absorb a spell that is targeting only you and not with an area of effect. The absorbed spell\'s effect is canceled, and the spell\'s energy is stored in the rod. The energy has the same level as the spell when it was cast. The rod can absorb and store up to 50 levels of energy over the course of its existence. You can use an action to convert energy stored in the rod into spell slots to cast spells you have prepared or know. You can create spell slots only of a level equal to or lower than your own spell slots, up to a maximum of 5th level.'
            },
            {
                name: 'Rod of Security',
                type: 'rod',
                description: 'While holding this rod, you can use an action to activate it. The rod then instantly transports you and up to 199 other willing creatures you can see to a paradise that exists in an extraplanar space. You choose the form that the paradise takes, but it is always a comfortable and pleasant environment. The paradise provides enough food and water for its visitors. The paradise lasts for up to 200 days, divided by the number of creatures present (rounded down). After this time, or when you use an action to end it, all creatures return to the location they occupied when you activated the rod.'
            },
            {
                name: 'Rod of Rulership',
                type: 'rod',
                requiresAttunement: true,
                action: 'Charm (8 charges). You can use an action to present the rod and command obedience from each creature of your choice that you can see within 120 feet of you. Each target must succeed on a DC 15 Wisdom saving throw or be charmed by you for 8 hours. While charmed, the creature regards you as its trusted leader. The rod regains 1d4 + 4 charges daily at dawn.',
                description: 'You can use an action to present the rod and command obedience from each creature of your choice that you can see within 120 feet of you. Each target must succeed on a DC 15 Wisdom saving throw or be charmed by you for 8 hours. While charmed, the creature regards you as its trusted leader. The rod has 8 charges and regains 1d4 + 4 charges daily at dawn.'
            }
        ],
        legendary: [
            {
                name: 'Rod of Lordly Might',
                type: 'rod',
                requiresAttunement: true,
                attackBonus: 3,
                damageBonus: 3,
                action: 'Six Buttons. This rod functions as a +3 mace. It has six buttons: Button 1 (Flame Tongue): Creates a fiery blade that deals an extra 2d6 fire damage. Button 2 (Drain Life): On a hit, target takes 1d6 necrotic damage and you gain that many temporary hit points. You also gain +1d6 to AC for 1 minute. Button 3 (Battering Ram): Extends to become a +3 battering ram that deals 2d6 bludgeoning damage and can push creatures/objects 30 feet. Button 4 (Push): DC 15 Str save or pushed 40 feet away. Button 5 (Ladder): Extends up to 50 feet as a ladder. Button 6 (Compass): Points north and indicates depth underground.',
                description: 'This rod has a flanged head, and it functions as a magic mace that grants a +3 bonus to attack and damage rolls. The rod has properties associated with six different buttons on its haft: Flame Tongue blade (+2d6 fire), +1d6 necrotic damage and drain to AC bonus, battering ram form, creature push effect (DC 15 Str), 50-foot ladder extension, and compass/depth finder.'
            }
        ]
    },

    // Magic Staves
    staves: {
        rare: [
            {
                name: 'Staff of Charming',
                type: 'staff',
                requiresAttunement: 'bard, cleric, druid, sorcerer, warlock, or wizard',
                charges: 10,
                description: 'This staff has 10 charges. While holding it, you can use an action to expend charges to cast charm person (1 charge), command (1 charge), or comprehend languages (1 charge). The staff regains 1d8 + 2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.'
            },
            {
                name: 'Staff of Healing',
                type: 'staff',
                requiresAttunement: 'bard, cleric, or druid',
                charges: 10,
                description: 'This staff has 10 charges. While holding it, you can use an action to expend charges to cast cure wounds (1 charge per spell level, up to 4th), lesser restoration (2 charges), or mass cure wounds (5 charges). The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff vanishes in a flash of light, lost forever.'
            },
            {
                name: 'Staff of Swarming Insects',
                type: 'staff',
                requiresAttunement: 'bard, cleric, druid, sorcerer, warlock, or wizard',
                charges: 10,
                description: 'This staff has 10 charges and regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses. While holding the staff, you can use an action to expend charges to cast giant insect (4 charges) or insect plague (5 charges). The staff can also be used as a magic quarterstaff.'
            },
            {
                name: 'Staff of the Python',
                type: 'staff',
                requiresAttunement: 'cleric, druid, or warlock',
                description: 'You can use an action to speak this staff\'s command word and throw the staff on the ground within 10 feet of you. The staff becomes a giant constrictor snake under your control and acts on its own initiative count. By using a bonus action to speak the command word again, you return the staff to its normal form in a space formerly occupied by the snake. On your turn, you can mentally command the snake if it is within 60 feet of you. If the snake is reduced to 0 hit points, it dies and reverts to its staff form. The staff then shatters and is destroyed. If the snake reverts to staff form before losing all its hit points, it regains all of them.'
            },
            {
                name: 'Staff of Withering',
                type: 'staff',
                requiresAttunement: 'cleric, druid, or warlock',
                charges: 3,
                attackBonus: 2,
                description: 'This staff has 3 charges and regains 1d3 expended charges daily at dawn. The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to deal an extra 2d10 necrotic damage to the target. In addition, the target must succeed on a DC 15 Constitution saving throw or have disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.'
            }
        ],
        veryRare: [
            {
                name: 'Staff of Fire',
                type: 'staff',
                requiresAttunement: 'druid, sorcerer, warlock, or wizard',
                charges: 10,
                resistances: ['fire'],
                description: 'You have resistance to fire damage while you hold this staff. The staff has 10 charges. While holding it, you can use an action to expend charges to cast burning hands (1 charge), fireball (3 charges), or wall of fire (4 charges). The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff blackens, crumbles into cinders, and is destroyed.'
            },
            {
                name: 'Staff of Frost',
                type: 'staff',
                requiresAttunement: 'druid, sorcerer, warlock, or wizard',
                charges: 10,
                resistances: ['cold'],
                description: 'You have resistance to cold damage while you hold this staff. The staff has 10 charges. While holding it, you can use an action to expend charges to cast cone of cold (5 charges), fog cloud (1 charge), ice storm (4 charges), or wall of ice (4 charges). The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns to water and is destroyed.'
            },
            {
                name: 'Staff of Power',
                type: 'staff',
                requiresAttunement: 'sorcerer, warlock, or wizard',
                charges: 20,
                attackBonus: 2,
                acBonus: 2,
                saveBonus: 2,
                description: 'This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls. The staff has 20 charges for the following properties. It regains 2d8 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage rolls but loses all other properties. On a 20, the staff regains 1d8 + 2 charges. Spells: cone of cold (5 charges), fireball (5th-level, 5 charges), globe of invulnerability (6 charges), hold monster (5 charges), levitate (2 charges), lightning bolt (5th-level, 5 charges), magic missile (1 charge), ray of enfeeblement (1 charge), wall of force (5 charges). Retributive Strike: You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.'
            },
            {
                name: 'Staff of Striking',
                type: 'staff',
                requiresAttunement: true,
                charges: 10,
                attackBonus: 3,
                damageBonus: 3,
                description: 'This staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it. The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.'
            },
            {
                name: 'Staff of Thunder and Lightning',
                type: 'staff',
                requiresAttunement: true,
                attackBonus: 2,
                damageBonus: 2,
                description: 'This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can\'t be used again until the next dawn. Lightning: When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 lightning damage. Thunder: When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet. The target you hit must succeed on a DC 17 Constitution saving throw or become stunned until the end of your next turn. Lightning Strike: You can use an action to cause a bolt of lightning to leap from the staff\'s tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one. Thunderclap: You can use an action to cause the staff to issue a deafening thunderclap, audible out to 600 feet. Each creature within 60 feet of you (not including you) must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 1 minute. On a successful save, a creature takes half damage and isn\'t deafened. Thunder and Lightning: You can use an action to use the Lightning Strike and Thunderclap properties at the same time. Doing so doesn\'t expend the daily use of those properties, only the use of this one.'
            }
        ],
        legendary: [
            {
                name: 'Staff of the Magi',
                type: 'staff',
                requiresAttunement: 'sorcerer, warlock, or wizard',
                charges: 50,
                attackBonus: 2,
                acBonus: 2,
                description: 'This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls. The staff has 50 charges for the following properties. It regains 4d6 + 2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 20, the staff regains 1d12 + 1 charges. Spell Absorption: While holding the staff, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell\'s level. However, if doing so brings the staff\'s total number of charges above 50, the staff explodes as if you activated its retributive strike. Spells: You can use an action to expend charges to cast one of the following spells: conjure elemental (7 charges), dispel magic (3 charges), fireball (7th-level, 7 charges), flaming sphere (2 charges), ice storm (4 charges), invisibility (2 charges), knock (2 charges), lightning bolt (7th-level, 7 charges), passwall (5 charges), plane shift (7 charges), telekinesis (5 charges), wall of fire (4 charges), or web (2 charges). You can also use an action to cast one of the following spells without using any charges: arcane lock, detect magic, enlarge/reduce, light, mage hand, or protection from evil and good. Retributive Strike: You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it. You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 x the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin. On a successful save, a creature takes half as much damage.'
            },
            {
                name: 'Staff of the Woodlands',
                type: 'staff',
                requiresAttunement: 'druid',
                charges: 10,
                attackBonus: 2,
                damageBonus: 2,
                description: 'This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls. The staff has 10 charges for the following properties. It regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff. Spells: You can use an action to expend 1 or more of the staff\'s charges to cast one of the following spells from it, using your spell save DC: animal friendship (1 charge), awaken (5 charges), barkskin (2 charges), locate animals or plants (2 charges), speak with animals (1 charge), speak with plants (3 charges), or wall of thorns (6 charges). You can also use an action to cast the pass without trace spell from the staff without using any charges. Tree Form: You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by detect magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.'
            }
        ]
    },

    // Potions
    potions: {
        common: [
            {
                name: 'Potion of Climbing',
                type: 'potion',
                description: 'When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this time, you have advantage on Strength (Athletics) checks you make to climb.',
                effect: 'Climbing speed equal to walking speed for 1 hour'
            },
            {
                name: 'Potion of Healing',
                type: 'potion',
                description: 'You regain hit points when you drink this potion. The number of hit points restored is 2d4 + 2.',
                effect: 'Regain 2d4+2 HP'
            }
        ],
        uncommon: [
            {
                name: 'Potion of Animal Friendship',
                type: 'potion',
                description: 'When you drink this potion, you can cast the animal friendship spell (save DC 13) for 1 hour at will.',
                effect: 'Cast animal friendship (DC 13) for 1 hour'
            },
            {
                name: 'Potion of Fire Breath',
                type: 'potion',
                description: 'After drinking this potion, you can use a bonus action to exhale fire at a target within 30 feet. The target must make a DC 13 Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much on a successful one. The effect ends after you exhale fire three times or 1 hour passes.',
                effect: 'Exhale fire 3 times, 4d6 fire damage, DC 13 Dex save'
            },
            {
                name: 'Potion of Greater Healing',
                type: 'potion',
                description: 'You regain hit points when you drink this potion. The number of hit points restored is 4d4 + 4.',
                effect: 'Regain 4d4+4 HP'
            },
            {
                name: 'Potion of Growth',
                type: 'potion',
                description: 'When you drink this potion, you gain the "enlarge" effect of the enlarge/reduce spell for 1d4 hours (no concentration required).',
                effect: 'Enlarge effect for 1d4 hours'
            },
            {
                name: 'Potion of Poison',
                type: 'potion',
                description: 'This concoction looks, smells, and tastes like a potion of healing or other beneficial potion. However, it is actually poison masked by illusion magic. If you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be poisoned. While poisoned in this way, you take 3d6 poison damage at the start of each of your turns. At the end of each of your turns, you can repeat the saving throw, ending the effect on a success.',
                effect: 'Appears to be healing, 3d6 poison damage, poisoned condition'
            },
            {
                name: 'Potion of Resistance',
                type: 'potion',
                description: 'When you drink this potion, you gain resistance to one type of damage for 1 hour. The type of damage is determined when the potion is created.',
                effect: 'Resistance to one damage type for 1 hour'
            },
            {
                name: 'Potion of Water Breathing',
                type: 'potion',
                description: 'You can breathe underwater for 1 hour after drinking this potion. Its cloudy green fluid smells of the sea.',
                effect: 'Breathe underwater for 1 hour'
            },
            {
                name: 'Oil of Slipperiness',
                type: 'potion',
                description: 'This sticky black unguent is thick and heavy in the container, but it flows quickly when poured. You can use an action to pour it on yourself or another creature, granting the effect of a freedom of movement spell for 8 hours. Alternatively, you can pour it on the ground as an action, covering a 10-foot square area and duplicating the effect of the grease spell for 8 hours.',
                effect: 'Freedom of movement for 8 hours'
            },
            {
                name: 'Potion of Giant Strength (Hill)',
                type: 'potion',
                description: 'When you drink this potion, your Strength score changes to 21 for 1 hour. The potion has no effect on you if your Strength is already equal to or greater than that score.',
                effect: 'Strength becomes 21 for 1 hour',
                abilitySet: { strength: 21 }
            }
        ],
        rare: [
            {
                name: 'Potion of Clairvoyance',
                type: 'potion',
                description: 'When you drink this potion, you gain the effect of the clairvoyance spell. An eyeball bobs in this yellowish liquid but vanishes when the potion is opened.',
                effect: 'Cast clairvoyance'
            },
            {
                name: 'Potion of Diminution',
                type: 'potion',
                description: 'When you drink this potion, you gain the "reduce" effect of the enlarge/reduce spell for 1d4 hours (no concentration required).',
                effect: 'Reduce effect for 1d4 hours'
            },
            {
                name: 'Potion of Gaseous Form',
                type: 'potion',
                description: 'When you drink this potion, you gain the effect of the gaseous form spell for 1 hour (no concentration required) or until you end the effect as a bonus action.',
                effect: 'Gaseous form for 1 hour'
            },
            {
                name: 'Potion of Heroism',
                type: 'potion',
                description: 'For 1 hour after drinking this potion, you gain 10 temporary hit points that last for 1 hour. For the same duration, you are under the effect of the bless spell (no concentration required).',
                effect: '10 temp HP and bless effect for 1 hour'
            },
            {
                name: 'Potion of Invulnerability',
                type: 'potion',
                description: 'For 1 minute after you drink this potion, you have resistance to all damage. The potion\'s syrupy liquid looks like liquified iron.',
                effect: 'Resistance to all damage for 1 minute'
            },
            {
                name: 'Potion of Mind Reading',
                type: 'potion',
                description: 'When you drink this potion, you gain the effect of the detect thoughts spell (save DC 13). The potion\'s dense, purple liquid has an ovoid cloud of pink floating in it.',
                effect: 'Detect thoughts (DC 13) for 1 minute'
            },
            {
                name: 'Potion of Superior Healing',
                type: 'potion',
                description: 'You regain hit points when you drink this potion. The number of hit points restored is 8d4 + 8.',
                effect: 'Regain 8d4+8 HP'
            },
            {
                name: 'Oil of Etherealness',
                type: 'potion',
                description: 'Beads of this cloudy gray oil form on the outside of its container and quickly evaporate. You can use an action to coat a creature with this oil, giving them the effect of the etherealness spell for 1 hour.',
                effect: 'Ethereal plane for 1 hour'
            },
            {
                name: 'Potion of Giant Strength (Frost)',
                type: 'potion',
                description: 'When you drink this potion, your Strength score changes to 23 for 1 hour. The potion has no effect on you if your Strength is already equal to or greater than that score.',
                effect: 'Strength becomes 23 for 1 hour',
                abilitySet: { strength: 23 }
            },
            {
                name: 'Potion of Giant Strength (Stone)',
                type: 'potion',
                description: 'When you drink this potion, your Strength score changes to 23 for 1 hour. The potion has no effect on you if your Strength is already equal to or greater than that score.',
                effect: 'Strength becomes 23 for 1 hour',
                abilitySet: { strength: 23 }
            },
            {
                name: 'Potion of Giant Strength (Fire)',
                type: 'potion',
                description: 'When you drink this potion, your Strength score changes to 25 for 1 hour. The potion has no effect on you if your Strength is already equal to or greater than that score.',
                effect: 'Strength becomes 25 for 1 hour',
                abilitySet: { strength: 25 }
            }
        ],
        veryRare: [
            {
                name: 'Potion of Flying',
                type: 'potion',
                description: 'When you drink this potion, you gain a flying speed equal to your walking speed for 1 hour and can hover. If you\'re in the air when the potion wears off, you fall unless you have some other means of staying aloft.',
                effect: 'Flying speed 60 ft for 1 hour',
                speed: { fly: 60 }
            },
            {
                name: 'Potion of Invisibility',
                type: 'potion',
                description: 'This potion\'s container looks empty but feels as though it holds liquid. When you drink it, you become invisible for 1 hour. Anything you wear or carry is invisible with you. The effect ends early if you attack or cast a spell.',
                effect: 'Invisible for 1 hour'
            },
            {
                name: 'Potion of Speed',
                type: 'potion',
                description: 'When you drink this potion, you gain the effect of the haste spell for 1 minute (no concentration required).',
                effect: 'Haste effect for 1 minute'
            },
            {
                name: 'Potion of Supreme Healing',
                type: 'potion',
                description: 'You regain hit points when you drink this potion. The number of hit points restored is 10d4 + 20.',
                effect: 'Regain 10d4+20 HP'
            },
            {
                name: 'Potion of Giant Strength (Cloud)',
                type: 'potion',
                description: 'When you drink this potion, your Strength score changes to 27 for 1 hour. The potion has no effect on you if your Strength is already equal to or greater than that score.',
                effect: 'Strength becomes 27 for 1 hour',
                abilitySet: { strength: 27 }
            },
            {
                name: 'Oil of Sharpness',
                type: 'potion',
                description: 'This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. You can use an action to coat one slashing or piercing weapon or up to 5 pieces of ammunition with this oil. The coated item has a +3 bonus to attack and damage rolls for 1 hour.',
                effect: '+3 bonus to weapon attack and damage for 1 hour',
                attackBonus: 3,
                damageBonus: 3
            }
        ],
        legendary: [
            {
                name: 'Potion of Giant Strength (Storm)',
                type: 'potion',
                description: 'When you drink this potion, your Strength score changes to 29 for 1 hour. The potion has no effect on you if your Strength is already equal to or greater than that score.',
                effect: 'Strength becomes 29 for 1 hour',
                abilitySet: { strength: 29 }
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
