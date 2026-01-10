/**
 * D&D 5e Inventory Data
 * Equipment and items by class
 */

const InventoryData = {
    // Base equipment by class
    classEquipment: {
        barbarian: {
            weapons: ['Greataxe', 'Handaxe', 'Handaxe', 'Javelin', 'Javelin', 'Javelin', 'Javelin'],
            armor: [],
            gear: ['Explorer\'s Pack', 'Backpack', 'Bedroll', 'Mess Kit', 'Tinderbox', 'Torch', 'Torch', 'Rations', 'Waterskin', 'Rope']
        },
        bard: {
            weapons: ['Rapier', 'Dagger'],
            armor: ['Leather Armor'],
            gear: ['Diplomat\'s Pack', 'Lute', 'Backpack', 'Bedroll', 'Costume', 'Candle', 'Rations', 'Waterskin', 'Disguise Kit']
        },
        cleric: {
            weapons: ['Mace', 'Light Crossbow', 'Crossbow Bolts (20)'],
            armor: ['Scale Mail', 'Shield'],
            gear: ['Priest\'s Pack', 'Holy Symbol', 'Backpack', 'Blanket', 'Candle', 'Tinderbox', 'Alms Box', 'Incense', 'Censer', 'Vestments', 'Rations', 'Waterskin']
        },
        druid: {
            weapons: ['Scimitar', 'Wooden Shield'],
            armor: ['Leather Armor'],
            gear: ['Explorer\'s Pack', 'Druidic Focus', 'Herbalism Kit', 'Backpack', 'Bedroll', 'Mess Kit', 'Tinderbox', 'Torch', 'Rations', 'Waterskin']
        },
        fighter: {
            weapons: ['Longsword', 'Shield', 'Light Crossbow', 'Crossbow Bolts (20)'],
            armor: ['Chain Mail'],
            gear: ['Dungeoneer\'s Pack', 'Backpack', 'Crowbar', 'Hammer', 'Pitons', 'Torch', 'Tinderbox', 'Rations', 'Waterskin', 'Rope']
        },
        monk: {
            weapons: ['Shortsword', 'Dart', 'Dart', 'Dart', 'Dart', 'Dart', 'Dart', 'Dart', 'Dart', 'Dart', 'Dart'],
            armor: [],
            gear: ['Dungeoneer\'s Pack', 'Backpack', 'Crowbar', 'Hammer', 'Pitons', 'Torch', 'Tinderbox', 'Rations', 'Waterskin']
        },
        paladin: {
            weapons: ['Longsword', 'Shield', 'Javelin', 'Javelin', 'Javelin', 'Javelin', 'Javelin'],
            armor: ['Chain Mail'],
            gear: ['Priest\'s Pack', 'Holy Symbol', 'Backpack', 'Blanket', 'Candle', 'Tinderbox', 'Rations', 'Waterskin']
        },
        ranger: {
            weapons: ['Longbow', 'Arrows (20)', 'Shortsword', 'Shortsword'],
            armor: ['Scale Mail'],
            gear: ['Explorer\'s Pack', 'Backpack', 'Bedroll', 'Mess Kit', 'Tinderbox', 'Torch', 'Rations', 'Waterskin', 'Rope']
        },
        rogue: {
            weapons: ['Rapier', 'Shortbow', 'Arrows (20)', 'Dagger', 'Dagger'],
            armor: ['Leather Armor'],
            gear: ['Burglar\'s Pack', 'Thieves\' Tools', 'Backpack', 'Bag of Ball Bearings', 'String', 'Bell', 'Candles', 'Crowbar', 'Hammer', 'Pitons', 'Lantern', 'Oil', 'Rations', 'Tinderbox', 'Waterskin', 'Rope']
        },
        sorcerer: {
            weapons: ['Light Crossbow', 'Crossbow Bolts (20)', 'Dagger', 'Dagger'],
            armor: [],
            gear: ['Dungeoneer\'s Pack', 'Arcane Focus', 'Component Pouch', 'Backpack', 'Crowbar', 'Hammer', 'Pitons', 'Torch', 'Tinderbox', 'Rations', 'Waterskin']
        },
        warlock: {
            weapons: ['Light Crossbow', 'Crossbow Bolts (20)', 'Dagger', 'Dagger'],
            armor: ['Leather Armor'],
            gear: ['Dungeoneer\'s Pack', 'Arcane Focus', 'Component Pouch', 'Backpack', 'Crowbar', 'Hammer', 'Pitons', 'Torch', 'Tinderbox', 'Rations', 'Waterskin']
        },
        wizard: {
            weapons: ['Quarterstaff', 'Dagger'],
            armor: [],
            gear: ['Scholar\'s Pack', 'Spellbook', 'Component Pouch', 'Arcane Focus', 'Backpack', 'Book of Lore', 'Ink', 'Ink Pen', 'Parchment', 'Little Bag of Sand', 'Small Knife', 'Rations', 'Waterskin']
        },
        artificer: {
            weapons: ['Light Crossbow', 'Crossbow Bolts (20)', 'Dagger'],
            armor: ['Scale Mail'],
            gear: ['Dungeoneer\'s Pack', 'Thieves\' Tools', 'Tinker\'s Tools', 'Backpack', 'Crowbar', 'Hammer', 'Pitons', 'Torch', 'Tinderbox', 'Rations', 'Waterskin']
        }
    },

    // Class-specific weapon upgrades by CR
    classWeaponUpgrades: {
        barbarian: {
            melee: ['Greataxe', 'Greatsword', 'Maul'],
            ranged: ['Javelin', 'Handaxe']
        },
        bard: {
            melee: ['Rapier', 'Shortsword', 'Dagger'],
            ranged: ['Shortbow', 'Hand Crossbow']
        },
        cleric: {
            melee: ['Mace', 'Warhammer', 'Quarterstaff'],
            ranged: ['Light Crossbow']
        },
        druid: {
            melee: ['Quarterstaff', 'Scimitar', 'Sickle'],
            ranged: ['Sling', 'Dart']
        },
        fighter: {
            melee: ['Longsword', 'Greatsword', 'Battleaxe', 'Warhammer'],
            ranged: ['Longbow', 'Heavy Crossbow', 'Light Crossbow']
        },
        monk: {
            melee: ['Shortsword', 'Quarterstaff', 'Unarmed Strike'],
            ranged: ['Dart', 'Shortbow']
        },
        paladin: {
            melee: ['Longsword', 'Greatsword', 'Warhammer', 'Maul'],
            ranged: ['Javelin']
        },
        ranger: {
            melee: ['Shortsword', 'Scimitar', 'Dagger'],
            ranged: ['Longbow', 'Shortbow', 'Hand Crossbow']
        },
        rogue: {
            melee: ['Shortsword', 'Rapier', 'Dagger'],
            ranged: ['Shortbow', 'Hand Crossbow', 'Dagger']
        },
        sorcerer: {
            melee: ['Dagger', 'Quarterstaff'],
            ranged: ['Light Crossbow', 'Dagger']
        },
        warlock: {
            melee: ['Dagger', 'Quarterstaff', 'Rapier'],
            ranged: ['Light Crossbow', 'Dagger']
        },
        wizard: {
            melee: ['Dagger', 'Quarterstaff'],
            ranged: ['Light Crossbow', 'Dagger']
        },
        artificer: {
            melee: ['Dagger', 'Light Hammer'],
            ranged: ['Light Crossbow', 'Hand Crossbow']
        }
    },

    // Weapon stats for generating attacks
    weaponStats: {
        // Simple Melee
        'Club': { damage: '1d4', type: 'bludgeoning', properties: [] },
        'Dagger': { damage: '1d4', type: 'piercing', properties: ['finesse', 'light', 'thrown'], range: '20/60 ft.' },
        'Greatclub': { damage: '1d8', type: 'bludgeoning', properties: ['two-handed'] },
        'Handaxe': { damage: '1d6', type: 'slashing', properties: ['light', 'thrown'], range: '20/60 ft.' },
        'Javelin': { damage: '1d6', type: 'piercing', properties: ['thrown'], range: '30/120 ft.' },
        'Light Hammer': { damage: '1d4', type: 'bludgeoning', properties: ['light', 'thrown'], range: '20/60 ft.' },
        'Mace': { damage: '1d6', type: 'bludgeoning', properties: [] },
        'Quarterstaff': { damage: '1d6', type: 'bludgeoning', properties: ['versatile'] },
        'Sickle': { damage: '1d4', type: 'slashing', properties: ['light'] },
        'Spear': { damage: '1d6', type: 'piercing', properties: ['thrown', 'versatile'], range: '20/60 ft.' },
        'Unarmed Strike': { damage: '1', type: 'bludgeoning', properties: [] },
        // Martial Melee
        'Battleaxe': { damage: '1d8', type: 'slashing', properties: ['versatile'] },
        'Flail': { damage: '1d8', type: 'bludgeoning', properties: [] },
        'Glaive': { damage: '1d10', type: 'slashing', properties: ['heavy', 'reach', 'two-handed'] },
        'Greataxe': { damage: '1d12', type: 'slashing', properties: ['heavy', 'two-handed'] },
        'Greatsword': { damage: '2d6', type: 'slashing', properties: ['heavy', 'two-handed'] },
        'Halberd': { damage: '1d10', type: 'slashing', properties: ['heavy', 'reach', 'two-handed'] },
        'Lance': { damage: '1d12', type: 'piercing', properties: ['reach', 'special'] },
        'Longsword': { damage: '1d8', type: 'slashing', properties: ['versatile'] },
        'Maul': { damage: '2d6', type: 'bludgeoning', properties: ['heavy', 'two-handed'] },
        'Morningstar': { damage: '1d8', type: 'piercing', properties: [] },
        'Pike': { damage: '1d10', type: 'piercing', properties: ['heavy', 'reach', 'two-handed'] },
        'Rapier': { damage: '1d8', type: 'piercing', properties: ['finesse'] },
        'Scimitar': { damage: '1d6', type: 'slashing', properties: ['finesse', 'light'] },
        'Shortsword': { damage: '1d6', type: 'piercing', properties: ['finesse', 'light'] },
        'Trident': { damage: '1d6', type: 'piercing', properties: ['thrown', 'versatile'], range: '20/60 ft.' },
        'War Pick': { damage: '1d8', type: 'piercing', properties: [] },
        'Warhammer': { damage: '1d8', type: 'bludgeoning', properties: ['versatile'] },
        'Whip': { damage: '1d4', type: 'slashing', properties: ['finesse', 'reach'] },
        // Ranged
        'Light Crossbow': { damage: '1d8', type: 'piercing', properties: ['ammunition', 'loading', 'two-handed'], range: '80/320 ft.' },
        'Dart': { damage: '1d4', type: 'piercing', properties: ['finesse', 'thrown'], range: '20/60 ft.' },
        'Shortbow': { damage: '1d6', type: 'piercing', properties: ['ammunition', 'two-handed'], range: '80/320 ft.' },
        'Sling': { damage: '1d4', type: 'bludgeoning', properties: ['ammunition'], range: '30/120 ft.' },
        'Hand Crossbow': { damage: '1d6', type: 'piercing', properties: ['ammunition', 'light', 'loading'], range: '30/120 ft.' },
        'Heavy Crossbow': { damage: '1d10', type: 'piercing', properties: ['ammunition', 'heavy', 'loading', 'two-handed'], range: '100/400 ft.' },
        'Longbow': { damage: '1d8', type: 'piercing', properties: ['ammunition', 'heavy', 'two-handed'], range: '150/600 ft.' }
    },

    /**
     * Get the primary melee weapon for a class
     */
    getPrimaryMeleeWeapon(characterClass) {
        const weapons = this.classWeaponUpgrades[characterClass]?.melee || ['Longsword'];
        return weapons[0];
    },

    /**
     * Get the primary ranged weapon for a class
     */
    getPrimaryRangedWeapon(characterClass) {
        const weapons = this.classWeaponUpgrades[characterClass]?.ranged || ['Light Crossbow'];
        return weapons[0];
    },

    /**
     * Get weapon stats
     */
    getWeaponStats(weaponName) {
        // Handle magic weapon names like "+1 Longsword"
        const baseName = weaponName.replace(/^\+\d+\s+/, '');
        return this.weaponStats[baseName] || this.weaponStats['Longsword'];
    },

    // Upgraded equipment by CR (legacy, kept for compatibility)
    weaponUpgrades: {
        martial: {
            0: ['Dagger', 'Club', 'Sickle'],
            1: ['Shortsword', 'Handaxe', 'Light Crossbow'],
            3: ['Longsword', 'Battleaxe', 'Rapier'],
            5: ['Greatsword', 'Greataxe', 'Longbow'],
            8: ['Greatsword', 'Greataxe', 'Heavy Crossbow'],
            11: ['Greatsword', 'Greataxe', 'Longbow'],
            15: ['Greatsword', 'Greataxe', 'Longbow']
        },
        caster: {
            0: ['Dagger', 'Quarterstaff'],
            1: ['Dagger', 'Quarterstaff', 'Light Crossbow'],
            3: ['Dagger', 'Quarterstaff', 'Light Crossbow'],
            5: ['Dagger', 'Quarterstaff', 'Light Crossbow'],
            8: ['Dagger', 'Quarterstaff'],
            11: ['Dagger', 'Quarterstaff'],
            15: ['Dagger', 'Quarterstaff']
        }
    },

    armorUpgrades: {
        heavy: {
            0: ['Padded Armor'],
            1: ['Leather Armor', 'Hide Armor'],
            3: ['Chain Shirt', 'Scale Mail'],
            5: ['Breastplate', 'Half Plate'],
            8: ['Chain Mail', 'Splint Armor'],
            11: ['Splint Armor', 'Plate Armor'],
            15: ['Plate Armor']
        },
        medium: {
            0: ['Padded Armor'],
            1: ['Leather Armor'],
            3: ['Hide Armor', 'Chain Shirt'],
            5: ['Scale Mail', 'Breastplate'],
            8: ['Breastplate', 'Half Plate'],
            11: ['Half Plate'],
            15: ['Half Plate']
        },
        light: {
            0: [],
            1: ['Padded Armor'],
            3: ['Leather Armor'],
            5: ['Studded Leather'],
            8: ['Studded Leather'],
            11: ['Studded Leather'],
            15: ['Studded Leather']
        }
    },

    // Common adventuring gear
    commonGear: [
        'Backpack', 'Bedroll', 'Blanket', 'Candle', 'Clothes (common)', 'Clothes (traveler\'s)',
        'Flask', 'Grappling Hook', 'Hammer', 'Lantern (hooded)', 'Mirror (steel)',
        'Oil (flask)', 'Pitons (10)', 'Pouch', 'Rations (1 day)', 'Rope (50 ft.)',
        'Sack', 'Sealing Wax', 'Signal Whistle', 'Spikes (iron, 10)', 'Tent (two-person)',
        'Tinderbox', 'Torch', 'Waterskin', 'Whetstone'
    ],

    // Class-specific items
    classItems: {
        barbarian: ['Totem', 'Trophy from a slain enemy', 'Hunting Trap'],
        bard: ['Musical Instrument', 'Costume', 'Love letter', 'Lock of hair'],
        cleric: ['Holy Symbol', 'Prayer Book', 'Incense', 'Vestments'],
        druid: ['Druidic Focus', 'Totem', 'Mistletoe', 'Holly'],
        fighter: ['Insignia of rank', 'Trophy from a fallen enemy', 'Playing cards', 'Dice set'],
        monk: ['Incense', 'Prayer wheel', 'Meditation beads'],
        paladin: ['Holy Symbol', 'Prayer Book', 'Healer\'s Kit'],
        ranger: ['Hunting Trap', 'Trophy from an animal', 'Arrows'],
        rogue: ['Thieves\' Tools', 'Crowbar', 'Dark common clothes with hood'],
        sorcerer: ['Arcane Focus', 'Crystal', 'Orb'],
        warlock: ['Arcane Focus', 'Component Pouch', 'Grimoire'],
        wizard: ['Spellbook', 'Component Pouch', 'Arcane Focus', 'Ink', 'Quill']
    },

    // Gold by CR
    goldByCR: {
        0: { min: 1, max: 10 },
        0.125: { min: 5, max: 20 },
        0.25: { min: 10, max: 30 },
        0.5: { min: 20, max: 50 },
        1: { min: 30, max: 80 },
        2: { min: 50, max: 150 },
        3: { min: 80, max: 250 },
        4: { min: 120, max: 400 },
        5: { min: 200, max: 600 },
        6: { min: 300, max: 900 },
        7: { min: 450, max: 1200 },
        8: { min: 600, max: 1800 },
        9: { min: 900, max: 2500 },
        10: { min: 1200, max: 3500 },
        11: { min: 1800, max: 5000 },
        12: { min: 2500, max: 7000 },
        13: { min: 3500, max: 10000 },
        14: { min: 5000, max: 15000 },
        15: { min: 7000, max: 20000 },
        16: { min: 10000, max: 30000 },
        17: { min: 15000, max: 45000 },
        18: { min: 20000, max: 60000 },
        19: { min: 30000, max: 80000 },
        20: { min: 45000, max: 120000 }
    },

    /**
     * Generate inventory for a humanoid
     */
    generateInventory(characterClass, cr) {
        const inventory = [];
        const crNum = parseFloat(cr);

        // Get class equipment
        const classEquip = this.classEquipment[characterClass] || this.classEquipment.fighter;

        // Add weapons
        if (classEquip.weapons) {
            const weaponMap = {};
            classEquip.weapons.forEach(w => {
                if (weaponMap[w]) {
                    weaponMap[w]++;
                } else {
                    weaponMap[w] = 1;
                }
            });
            for (const [weapon, count] of Object.entries(weaponMap)) {
                inventory.push({ name: weapon, quantity: count, type: 'weapon' });
            }
        }

        // Add armor
        if (classEquip.armor) {
            classEquip.armor.forEach(a => {
                inventory.push({ name: a, quantity: 1, type: 'armor' });
            });
        }

        // Upgrade equipment based on CR
        this.upgradeEquipment(inventory, characterClass, crNum);

        // Add some class-specific items
        const classItems = this.classItems[characterClass] || [];
        const numItems = Math.min(2, classItems.length);
        for (let i = 0; i < numItems; i++) {
            const item = classItems[Math.floor(Math.random() * classItems.length)];
            if (!inventory.find(i => i.name === item)) {
                inventory.push({ name: item, quantity: 1, type: 'gear' });
            }
        }

        // Add gold
        const goldRange = this.goldByCR[Math.min(crNum, 20)] || this.goldByCR[1];
        const gold = Math.floor(Math.random() * (goldRange.max - goldRange.min + 1)) + goldRange.min;
        inventory.push({ name: 'Gold Pieces', quantity: gold, type: 'currency' });

        return inventory;
    },

    /**
     * Upgrade equipment based on CR
     */
    upgradeEquipment(inventory, characterClass, cr) {
        // Determine if martial or caster
        const casterClasses = ['wizard', 'sorcerer', 'warlock', 'bard', 'cleric', 'druid'];
        const isCaster = casterClasses.includes(characterClass);

        // Find CR tier
        const crTiers = [0, 1, 3, 5, 8, 11, 15];
        let tier = 0;
        for (const t of crTiers) {
            if (cr >= t) tier = t;
        }

        // Upgrade primary weapon
        const weaponPool = isCaster ? this.weaponUpgrades.caster[tier] : this.weaponUpgrades.martial[tier];
        if (weaponPool && weaponPool.length > 0) {
            const newWeapon = weaponPool[Math.floor(Math.random() * weaponPool.length)];
            const weaponIndex = inventory.findIndex(i => i.type === 'weapon');
            if (weaponIndex >= 0) {
                inventory[weaponIndex].name = newWeapon;
            }
        }

        // Upgrade armor based on class proficiencies
        const heavyArmorClasses = ['fighter', 'paladin'];
        const mediumArmorClasses = ['barbarian', 'cleric', 'druid', 'ranger', 'artificer'];

        let armorType = 'light';
        if (heavyArmorClasses.includes(characterClass)) armorType = 'heavy';
        else if (mediumArmorClasses.includes(characterClass)) armorType = 'medium';

        const armorPool = this.armorUpgrades[armorType][tier];
        if (armorPool && armorPool.length > 0) {
            const newArmor = armorPool[Math.floor(Math.random() * armorPool.length)];
            const armorIndex = inventory.findIndex(i => i.type === 'armor');
            if (armorIndex >= 0) {
                inventory[armorIndex].name = newArmor;
            } else if (newArmor) {
                inventory.push({ name: newArmor, quantity: 1, type: 'armor' });
            }
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = InventoryData;
}
