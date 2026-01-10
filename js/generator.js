/**
 * D&D 5e Monster Generator Engine
 * Core stat generation logic with CR balancing
 */

const Generator = {
    /**
     * Generate a complete monster stat block
     */
    generateMonster(options) {
        const {
            name,
            type,
            cr,
            size,
            alignment,
            attackTypes = { melee: true },
            hasLegendary = false,
            hasMythic = false,
            hasLair = false,
            // Humanoid-specific options
            race = null,
            characterClass = null,
            generateInventory = false,
            includeMagicItems = false
        } = options;

        // Verify required data objects exist
        if (typeof MonsterTypes === 'undefined') {
            throw new Error('MonsterTypes data not loaded');
        }
        if (typeof CRStats === 'undefined') {
            throw new Error('CRStats data not loaded');
        }
        if (typeof SizeData === 'undefined') {
            throw new Error('SizeData not loaded');
        }
        if (typeof AttackData === 'undefined') {
            throw new Error('AttackData not loaded');
        }

        // Get type-specific data
        const typeData = MonsterTypes[type] || MonsterTypes.humanoid;
        if (!typeData) {
            throw new Error(`No data found for monster type: ${type}`);
        }

        const crData = CRStats[cr] || CRStats[1];
        if (!crData) {
            throw new Error(`No CR data found for CR: ${cr}`);
        }

        // Determine element early for dragons/elementals so name matches breath weapon
        const element = (type === 'dragon' || type === 'elemental') ? this.determineElement(type) : null;

        // Generate base stats
        const monster = {
            name: name || this.generateName(type, race, element),
            size: size || Utils.randomChoice(typeData.typicalSizes),
            type: type,
            subtype: this.getSubtype(type, race),
            alignment: alignment === 'any' ? this.generateAlignment(typeData) : alignment,
            cr: parseFloat(cr),
            xp: Utils.xpByCR(parseFloat(cr)),
            proficiencyBonus: crData.profBonus,

            // Generate ability scores
            abilities: this.generateAbilities(type, cr, typeData, characterClass),

            // Combat stats
            armorClass: this.generateAC(cr, type, typeData, characterClass, race),
            hitPoints: this.generateHP(cr, size, typeData, type, characterClass, attackTypes.spells),
            speed: this.generateSpeed(type, typeData, race),

            // Defenses
            savingThrows: this.generateSavingThrows(cr, typeData, characterClass),
            skills: this.generateSkills(type, typeData, characterClass),
            damageResistances: this.generateDamageResistances(type, typeData, race, element),
            damageImmunities: this.generateDamageImmunities(type, typeData, race, element),
            conditionImmunities: this.generateConditionImmunities(type, typeData, race),

            // Senses and languages
            senses: this.generateSenses(type, typeData, race),
            languages: this.generateLanguages(type, typeData, race),

            // Traits and abilities
            traits: [],
            actions: [],
            bonusActions: [],
            reactions: [],
            legendaryActions: hasLegendary ? [] : null,
            mythicTrait: hasMythic ? null : undefined,
            mythicActions: hasMythic ? [] : null,
            lairActions: hasLair ? [] : null,

            // Spellcasting
            spellcasting: null,

            // Humanoid-specific
            race: race,
            characterClass: characterClass,
            inventory: generateInventory ? [] : null,
            magicItems: includeMagicItems ? [] : null,

            // Element for dragons/elementals (used for name matching and breath weapons)
            element: element
        };

        // Generate traits based on type (pass hit dice for humanoid spellcasters)
        monster.traits = this.generateTraits(type, cr, typeData, race, characterClass, monster.hitPoints.hitDice);

        // Generate actions based on attack types
        monster.actions = this.generateActions(monster, attackTypes, typeData);

        // Generate spellcasting if selected
        if (attackTypes.spells) {
            monster.spellcasting = this.generateSpellcasting(monster, characterClass);
        }

        // Generate legendary actions if enabled
        if (hasLegendary) {
            monster.legendaryActions = this.generateLegendaryActions(monster, cr);
        }

        // Generate mythic actions if enabled
        if (hasMythic) {
            const mythic = this.generateMythicActions(monster, cr);
            monster.mythicTrait = mythic.trait;
            monster.mythicActions = mythic.actions;
        }

        // Generate lair actions if enabled
        if (hasLair) {
            monster.lairActions = this.generateLairActions(monster, type);
        }

        // Generate inventory for humanoids
        if (generateInventory && type === 'humanoid') {
            monster.inventory = this.generateInventory(monster, characterClass, cr);
        }

        // Generate magic items if enabled
        if (includeMagicItems) {
            monster.magicItems = this.generateMagicItems(monster, cr);
            this.applyMagicItemBonuses(monster);
        }

        // Apply racial traits for humanoids
        if (race && type === 'humanoid') {
            this.applyRacialTraits(monster, race);
        }

        return monster;
    },

    /**
     * Generate ability scores based on type and CR
     */
    generateAbilities(type, cr, typeData, characterClass) {
        const crNum = parseFloat(cr);
        const baseStats = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };

        // Get ability ranges for type
        const ranges = typeData.typicalAbilityRanges;

        // Calculate scaling factor based on CR
        const scaleFactor = Math.min(1, crNum / 20);

        // Generate base stats within type ranges
        for (const ability of ['str', 'dex', 'con', 'int', 'wis', 'cha']) {
            const range = ranges[ability];
            const baseValue = range.min + Math.floor((range.max - range.min) * scaleFactor);
            // Add some randomness
            const variance = Utils.randomInt(-2, 2);
            baseStats[ability] = Utils.clamp(baseValue + variance, range.min, range.max);
        }

        // Apply class-based priorities for humanoids
        if (characterClass && typeof ClassData !== 'undefined' && ClassData[characterClass]) {
            const classInfo = ClassData[characterClass];
            const priorities = classInfo.abilityPriorities || [];

            // Boost primary stats
            if (priorities[0]) {
                baseStats[priorities[0]] = Math.min(baseStats[priorities[0]] + 4, 20 + Math.floor(crNum / 5));
            }
            if (priorities[1]) {
                baseStats[priorities[1]] = Math.min(baseStats[priorities[1]] + 2, 20 + Math.floor(crNum / 5));
            }
        }

        // Ensure CON is reasonable for HP
        baseStats.con = Math.max(baseStats.con, 10 + Math.floor(crNum / 3));

        return baseStats;
    },

    /**
     * Generate armor class
     */
    generateAC(cr, type, typeData, characterClass, race) {
        const crNum = parseFloat(cr);
        const crData = CRStats[crNum] || CRStats[1];
        let baseAC = crData.ac;

        // Variance based on type
        const variance = Utils.randomInt(-1, 1);
        baseAC += variance;

        // Determine armor type
        let armorType = Utils.randomChoice(typeData.armorTypes) || 'natural armor';

        // Class-based armor for humanoids
        if (characterClass && typeof ClassData !== 'undefined' && ClassData[characterClass]) {
            const classInfo = ClassData[characterClass];
            if (classInfo.armorProficiencies) {
                if (classInfo.armorProficiencies.includes('heavy')) {
                    armorType = Utils.randomChoice(['plate armor', 'splint armor', 'chain mail']);
                } else if (classInfo.armorProficiencies.includes('medium')) {
                    armorType = Utils.randomChoice(['half plate', 'breastplate', 'scale mail']);
                } else if (classInfo.armorProficiencies.includes('light')) {
                    armorType = Utils.randomChoice(['studded leather', 'leather armor']);
                }
            }
        }

        return {
            value: Utils.clamp(baseAC, 10, 22),
            type: armorType
        };
    },

    /**
     * Generate hit points
     * @param {number} cr - Challenge rating
     * @param {string} size - Creature size
     * @param {object} typeData - Monster type data
     * @param {string} type - Monster type (e.g., 'humanoid')
     * @param {string} characterClass - Character class (for humanoids)
     * @param {boolean} hasSpellcasting - Whether spellcasting is enabled
     */
    generateHP(cr, size, typeData, type = null, characterClass = null, hasSpellcasting = false) {
        const crNum = parseFloat(cr);
        const crData = CRStats[crNum] || CRStats[1];
        const hitDie = SizeData[size]?.hitDie || 8;

        let numDice;

        // Humanoid spellcasters get more hit dice to match their caster level
        // Example: Archmage is CR 12 with 18 hit dice (18th level caster)
        if (type === 'humanoid' && hasSpellcasting && this.isSpellcaster(characterClass)) {
            // Hit dice = caster level for humanoid spellcasters
            numDice = this.getHumanoidCasterLevel(crNum);
        } else {
            // Normal HP calculation for non-spellcasters
            const targetHP = Utils.randomInt(crData.hpMin, crData.hpMax);
            const avgHitDie = (hitDie + 1) / 2;
            numDice = Math.max(1, Math.round(targetHP / (avgHitDie + 2))); // Assume +2 CON mod average
        }

        // Adjust for actual HP
        const conMod = 2 + Math.floor(crNum / 5); // Estimated CON mod
        const hp = Utils.calculateHP(numDice, hitDie, conMod);

        return {
            average: hp.average,
            notation: hp.notation,
            hitDice: numDice,
            hitDieSize: hitDie
        };
    },

    /**
     * Generate movement speeds
     */
    generateSpeed(type, typeData, race) {
        const speeds = { ...typeData.typicalSpeeds };

        // Apply racial speeds if applicable
        if (race && typeof RacesData !== 'undefined' && RacesData[race]) {
            const raceData = RacesData[race];
            if (raceData.speed) {
                Object.assign(speeds, raceData.speed);
            }
        }

        // Helper to round to nearest 5
        const roundTo5 = (val) => Math.round(val / 5) * 5;

        // Minimum walking speed: 30 for most creatures, 10 for oozes
        const minWalk = type === 'ooze' ? 10 : 30;

        // Apply speeds with variance, rounded to increments of 5
        if (speeds.walk) {
            speeds.walk = roundTo5(Math.max(minWalk, speeds.walk + Utils.randomInt(-1, 1) * 5));
        } else {
            speeds.walk = minWalk;
        }

        if (speeds.fly) {
            speeds.fly = roundTo5(Math.max(30, speeds.fly + Utils.randomInt(-2, 2) * 5));
        }

        if (speeds.swim) {
            speeds.swim = roundTo5(Math.max(20, speeds.swim + Utils.randomInt(-1, 1) * 5));
        }

        if (speeds.climb) {
            speeds.climb = roundTo5(Math.max(20, speeds.climb + Utils.randomInt(-1, 1) * 5));
        }

        if (speeds.burrow) {
            speeds.burrow = roundTo5(Math.max(10, speeds.burrow + Utils.randomInt(-1, 1) * 5));
        }

        return speeds;
    },

    /**
     * Generate saving throw proficiencies
     */
    generateSavingThrows(cr, typeData, characterClass) {
        const saves = {};
        const crNum = parseFloat(cr);
        const numSaves = crNum < 5 ? 1 : crNum < 10 ? 2 : crNum < 17 ? 3 : 4;

        // Priority saves by type
        let priorities = ['con', 'wis'];
        if (typeData.abilityPriorities && typeData.abilityPriorities !== 'variable') {
            priorities = typeData.abilityPriorities.slice(0, 2);
        }

        // Class-based saves
        if (characterClass && typeof ClassData !== 'undefined' && ClassData[characterClass]) {
            const classInfo = ClassData[characterClass];
            if (classInfo.savingThrows) {
                priorities = classInfo.savingThrows;
            }
        }

        // Add saves based on priority
        for (let i = 0; i < numSaves && i < priorities.length; i++) {
            saves[priorities[i]] = true;
        }

        return saves;
    },

    /**
     * Generate skill proficiencies
     */
    generateSkills(type, typeData, characterClass) {
        const skills = {};
        const numSkills = Utils.randomInt(1, 4);

        // Type-based skill preferences
        const typeSkills = {
            aberration: ['arcana', 'perception', 'insight', 'intimidation'],
            beast: ['perception', 'stealth', 'athletics', 'survival'],
            celestial: ['insight', 'perception', 'religion', 'persuasion'],
            construct: ['perception'],
            dragon: ['perception', 'stealth', 'arcana', 'history'],
            elemental: ['perception'],
            fey: ['deception', 'perception', 'stealth', 'persuasion', 'performance'],
            fiend: ['deception', 'insight', 'intimidation', 'perception'],
            giant: ['athletics', 'perception'],
            humanoid: ['perception', 'stealth', 'athletics', 'insight', 'persuasion'],
            monstrosity: ['perception', 'stealth', 'athletics'],
            ooze: [],
            plant: ['perception', 'stealth'],
            undead: ['perception', 'stealth', 'arcana']
        };

        let availableSkills = typeSkills[type] || ['perception'];

        // Add class skills for humanoids
        if (characterClass && typeof ClassData !== 'undefined' && ClassData[characterClass]) {
            const classInfo = ClassData[characterClass];
            if (classInfo.skills) {
                availableSkills = [...new Set([...availableSkills, ...classInfo.skills])];
            }
        }

        // Select skills
        const selectedSkills = Utils.randomChoices(availableSkills, numSkills);
        for (const skill of selectedSkills) {
            skills[skill] = true;
        }

        return skills;
    },

    /**
     * Generate damage resistances
     * Dragons/elementals get resistances matching their element
     */
    generateDamageResistances(type, typeData, race, element = null) {
        let resistances = [...(typeData.commonDamageResistances || [])];

        // Add racial resistances
        if (race && typeof RacesData !== 'undefined' && RacesData[race]) {
            const raceData = RacesData[race];
            if (raceData.damageResistances) {
                resistances = [...new Set([...resistances, ...raceData.damageResistances])];
            }
        }

        return resistances;
    },

    /**
     * Generate damage immunities
     * Dragons/elementals get immunities matching their element
     */
    generateDamageImmunities(type, typeData, race, element = null) {
        let immunities = [...(typeData.commonDamageImmunities || [])];

        // Add element-based immunities for dragons and elementals
        if (element && (type === 'dragon' || type === 'elemental')) {
            const elementToImmunity = {
                fire: 'fire',
                water: 'cold',
                cold: 'cold',
                earth: 'acid',
                air: 'lightning',
                lightning: 'lightning',
                acid: 'acid',
                poison: 'poison'
            };

            const elementImmunity = elementToImmunity[element];
            if (elementImmunity && !immunities.includes(elementImmunity)) {
                immunities.push(elementImmunity);
            }
        }

        return immunities;
    },

    /**
     * Generate condition immunities
     */
    generateConditionImmunities(type, typeData, race) {
        return [...(typeData.commonConditionImmunities || [])];
    },

    /**
     * Generate senses
     */
    generateSenses(type, typeData, race) {
        const senses = { ...typeData.typicalSenses };

        // Add racial senses
        if (race && typeof RacesData !== 'undefined' && RacesData[race]) {
            const raceData = RacesData[race];
            if (raceData.darkvision) {
                senses.darkvision = Math.max(senses.darkvision || 0, raceData.darkvision);
            }
            if (raceData.senses) {
                Object.assign(senses, raceData.senses);
            }
        }

        return senses;
    },

    /**
     * Generate languages
     */
    generateLanguages(type, typeData, race) {
        let languages = [...(typeData.typicalLanguages || [])];

        // Add racial languages
        if (race && typeof RacesData !== 'undefined' && RacesData[race]) {
            const raceData = RacesData[race];
            if (raceData.languages) {
                languages = [...new Set([...languages, ...raceData.languages])];
            }
        }

        // Ensure at least Common for humanoids
        if (type === 'humanoid' && !languages.includes('Common')) {
            languages.unshift('Common');
        }

        return languages;
    },

    /**
     * Generate traits
     * @param {string} type - Monster type
     * @param {number} cr - Challenge rating
     * @param {object} typeData - Type data
     * @param {string} race - Race (for humanoids)
     * @param {string} characterClass - Class (for humanoids)
     * @param {number} hitDice - Number of hit dice (for humanoid spellcasters)
     */
    generateTraits(type, cr, typeData, race, characterClass, hitDice = null) {
        const traits = [];
        const crNum = parseFloat(cr);

        // Get type-specific abilities (but NOT for humanoids - they get class/racial traits instead)
        if (type !== 'humanoid' && typeof AbilitiesData !== 'undefined') {
            const typeAbilities = AbilitiesData.getAbilitiesForType(type, crNum, 2);
            for (const ability of typeAbilities) {
                traits.push({
                    name: ability.name,
                    description: this.formatAbilityDescription(ability, crNum)
                });
            }
        }

        // Add class features for humanoids
        if (characterClass && typeof ClassData !== 'undefined' && ClassData[characterClass]) {
            const classInfo = ClassData[characterClass];
            // For spellcasters, use hit dice as level; otherwise use CR-based level
            let level;
            if (hitDice && this.isSpellcaster(characterClass)) {
                level = hitDice;
            } else {
                level = this.crToLevel(crNum);
            }
            const classFeatures = this.getClassFeatures(classInfo, level);
            traits.push(...classFeatures);
        }

        return traits;
    },

    /**
     * Generate actions
     */
    generateActions(monster, attackTypes, typeData) {
        const actions = [];
        const cr = monster.cr;
        const profBonus = monster.proficiencyBonus;

        // Determine number of attacks for multiattack
        const numAttacks = cr < 5 ? 1 : cr < 11 ? 2 : cr < 17 ? 3 : 4;

        // For humanoids with a class, generate attacks based on class equipment
        if (monster.type === 'humanoid' && monster.characterClass) {
            const classAttacks = this.generateHumanoidClassAttacks(monster, attackTypes);
            actions.push(...classAttacks);
        } else {
            // Generate melee attacks (non-humanoid or no class)
            if (attackTypes.melee) {
                const meleeAttacks = this.generateMeleeAttacks(monster, typeData);
                actions.push(...meleeAttacks);
            }

            // Generate ranged attacks
            if (attackTypes.ranged) {
                const rangedAttacks = this.generateRangedAttacks(monster, typeData);
                actions.push(...rangedAttacks);
            }
        }

        // Generate breath weapon
        if (attackTypes.breath) {
            const breathWeapon = this.generateBreathWeapon(monster, typeData);
            if (breathWeapon) actions.push(breathWeapon);
        }

        // Generate gaze attack
        if (attackTypes.gaze) {
            const gazeAttack = this.generateGazeAttack(monster);
            if (gazeAttack) actions.push(gazeAttack);
        }

        // Generate aura effect
        if (attackTypes.aura) {
            const auraEffect = this.generateAuraEffect(monster);
            if (auraEffect) {
                monster.traits.push(auraEffect);
            }
        }

        // Add multiattack if multiple attacks available
        if (numAttacks > 1 && actions.length > 0) {
            const attackNames = actions
                .filter(a => a.isAttack)
                .slice(0, 2)
                .map(a => a.name.toLowerCase());

            if (attackNames.length > 0) {
                actions.unshift({
                    name: 'Multiattack',
                    description: `The ${monster.name.toLowerCase()} makes ${numAttacks} attacks${attackNames.length > 1 ? `: ${this.formatMultiattackDescription(attackNames, numAttacks)}` : ` with its ${attackNames[0]}`}.`
                });
            }
        }

        return actions;
    },

    /**
     * Generate attacks for humanoids based on class and equipment
     */
    generateHumanoidClassAttacks(monster, attackTypes) {
        const actions = [];
        const characterClass = monster.characterClass;
        const cr = monster.cr;
        const profBonus = monster.proficiencyBonus;

        if (typeof InventoryData === 'undefined') {
            return this.generateMeleeAttacks(monster, MonsterTypeData.humanoid);
        }

        // Get class weapons
        const classWeapons = InventoryData.classWeaponUpgrades[characterClass];
        if (!classWeapons) {
            return this.generateMeleeAttacks(monster, MonsterTypeData.humanoid);
        }

        // Check for magic weapon from magic items
        let magicWeapon = null;
        if (monster.magicItems && monster.magicItems.length > 0) {
            for (const item of monster.magicItems) {
                if (item.type === 'weapon' && (item.attackBonus || item.damageBonus)) {
                    magicWeapon = item;
                    break;
                }
            }
        }

        // Calculate ability modifiers
        const strMod = Utils.abilityModifier(monster.abilities.str);
        const dexMod = Utils.abilityModifier(monster.abilities.dex);

        // Generate melee attack
        if (attackTypes.melee && classWeapons.melee && classWeapons.melee.length > 0) {
            const weaponName = classWeapons.melee[0];
            const weaponStats = InventoryData.getWeaponStats(weaponName);

            // Determine ability modifier (finesse weapons can use DEX)
            const isFinesse = weaponStats.properties.includes('finesse');
            const abilityMod = isFinesse ? Math.max(strMod, dexMod) : strMod;

            // Check if magic weapon matches this weapon type
            let attackBonus = 0;
            let damageBonus = 0;
            let displayName = weaponName;

            if (magicWeapon && this.magicWeaponMatchesType(magicWeapon.name, weaponName)) {
                attackBonus = magicWeapon.attackBonus || 0;
                damageBonus = magicWeapon.damageBonus || 0;
                displayName = magicWeapon.name;
            }

            const totalAttackBonus = profBonus + abilityMod + attackBonus;
            const totalDamageBonus = abilityMod + damageBonus;
            const reach = weaponStats.properties.includes('reach') ? 10 : 5;

            const attack = {
                name: displayName,
                isAttack: true,
                attackType: 'Melee Weapon Attack',
                attackBonus: totalAttackBonus,
                reach: reach,
                targets: 'one target',
                damage: {
                    dice: weaponStats.damage,
                    bonus: totalDamageBonus,
                    type: weaponStats.type
                },
                description: `Melee Weapon Attack: +${totalAttackBonus} to hit, reach ${reach} ft., one target. Hit: ${this.formatWeaponDamage(weaponStats.damage, totalDamageBonus)} ${weaponStats.type} damage.`
            };
            actions.push(attack);
        }

        // Generate ranged attack
        if (attackTypes.ranged && classWeapons.ranged && classWeapons.ranged.length > 0) {
            const weaponName = classWeapons.ranged[0];
            const weaponStats = InventoryData.getWeaponStats(weaponName);

            // Ranged weapons use DEX, thrown weapons can use STR
            const isThrown = weaponStats.properties.includes('thrown');
            const isFinesse = weaponStats.properties.includes('finesse');
            let abilityMod = dexMod;
            if (isThrown && !weaponStats.properties.includes('ammunition')) {
                abilityMod = Math.max(strMod, dexMod);
            }

            // Check if magic weapon matches this weapon type
            let attackBonus = 0;
            let damageBonus = 0;
            let displayName = weaponName;

            if (magicWeapon && this.magicWeaponMatchesType(magicWeapon.name, weaponName)) {
                attackBonus = magicWeapon.attackBonus || 0;
                damageBonus = magicWeapon.damageBonus || 0;
                displayName = magicWeapon.name;
            }

            const totalAttackBonus = profBonus + abilityMod + attackBonus;
            const totalDamageBonus = abilityMod + damageBonus;
            const range = weaponStats.range || '30/120 ft.';

            const attack = {
                name: displayName,
                isAttack: true,
                attackType: 'Ranged Weapon Attack',
                attackBonus: totalAttackBonus,
                range: range,
                targets: 'one target',
                damage: {
                    dice: weaponStats.damage,
                    bonus: totalDamageBonus,
                    type: weaponStats.type
                },
                description: `Ranged Weapon Attack: +${totalAttackBonus} to hit, range ${range}, one target. Hit: ${this.formatWeaponDamage(weaponStats.damage, totalDamageBonus)} ${weaponStats.type} damage.`
            };
            actions.push(attack);
        }

        return actions;
    },

    /**
     * Check if a magic weapon matches a weapon type
     */
    magicWeaponMatchesType(magicWeaponName, baseWeaponName) {
        const magicLower = magicWeaponName.toLowerCase();
        const baseLower = baseWeaponName.toLowerCase();

        // Direct match
        if (magicLower.includes(baseLower)) return true;

        // Category matches
        const swordTypes = ['longsword', 'shortsword', 'greatsword', 'rapier', 'scimitar'];
        const axeTypes = ['battleaxe', 'greataxe', 'handaxe'];
        const bowTypes = ['longbow', 'shortbow'];
        const crossbowTypes = ['light crossbow', 'heavy crossbow', 'hand crossbow'];
        const daggerTypes = ['dagger'];

        if (magicLower.includes('sword') && swordTypes.some(s => baseLower.includes(s))) return true;
        if (magicLower.includes('axe') && axeTypes.some(s => baseLower.includes(s))) return true;
        if (magicLower.includes('bow') && !magicLower.includes('crossbow') && bowTypes.some(s => baseLower.includes(s))) return true;
        if (magicLower.includes('crossbow') && crossbowTypes.some(s => baseLower.includes(s))) return true;
        if (magicLower.includes('dagger') && baseLower.includes('dagger')) return true;
        if (magicLower.includes('mace') && baseLower.includes('mace')) return true;
        if (magicLower.includes('hammer') && baseLower.includes('hammer')) return true;

        return false;
    },

    /**
     * Format weapon damage string with bonus
     */
    formatWeaponDamage(baseDamage, bonus) {
        // Calculate average damage
        const match = baseDamage.match(/(\d+)d(\d+)/);
        let avgDamage = 0;
        if (match) {
            const numDice = parseInt(match[1]);
            const dieSize = parseInt(match[2]);
            avgDamage = Math.floor(numDice * (dieSize + 1) / 2) + bonus;
        } else {
            avgDamage = parseInt(baseDamage) + bonus;
        }

        if (bonus === 0) {
            return `${avgDamage} (${baseDamage})`;
        }

        const sign = bonus > 0 ? ' + ' : ' - ';
        return `${avgDamage} (${baseDamage}${sign}${Math.abs(bonus)})`;
    },

    /**
     * Generate melee attacks
     */
    generateMeleeAttacks(monster, typeData) {
        const attacks = [];
        const cr = monster.cr;
        const profBonus = monster.proficiencyBonus;
        const strMod = Utils.abilityModifier(monster.abilities.str);
        const dexMod = Utils.abilityModifier(monster.abilities.dex);

        // Get attack templates for type
        const meleeTemplates = AttackData.meleeNatural[monster.type] || AttackData.meleeNatural.humanoid;
        const selectedAttacks = Utils.randomChoices(meleeTemplates, Utils.randomInt(1, 2));

        for (const template of selectedAttacks) {
            const isFinesse = template.properties?.includes('finesse');
            const attackMod = isFinesse ? Math.max(strMod, dexMod) : strMod;
            const attackBonus = profBonus + attackMod;
            const damageDice = AttackData.getDamageDice(cr, attacks.length === 0 ? 'primary' : 'secondary');
            const damageBonus = attackMod;

            const attack = {
                name: template.name,
                isAttack: true,
                attackType: 'Melee Weapon Attack',
                attackBonus: attackBonus,
                reach: template.reach || 5,
                targets: 'one target',
                damage: {
                    dice: damageDice,
                    bonus: damageBonus,
                    type: template.damage
                },
                description: this.formatAttackDescription({
                    attackType: 'Melee Weapon Attack',
                    bonus: attackBonus,
                    reach: template.reach || 5,
                    targets: 'one target',
                    damage: damageDice,
                    damageBonus: damageBonus,
                    damageType: template.damage,
                    properties: template.properties
                }, monster)
            };

            attacks.push(attack);
        }

        return attacks;
    },

    /**
     * Generate ranged attacks
     */
    generateRangedAttacks(monster, typeData) {
        const attacks = [];
        const cr = monster.cr;
        const profBonus = monster.proficiencyBonus;
        const dexMod = Utils.abilityModifier(monster.abilities.dex);

        // Get attack templates for type
        const rangedTemplates = AttackData.ranged[monster.type] || AttackData.ranged.humanoid;
        if (rangedTemplates.length === 0) return attacks;

        const selectedAttacks = Utils.randomChoices(rangedTemplates, 1);

        for (const template of selectedAttacks) {
            const attackBonus = profBonus + dexMod;
            const damageDice = AttackData.getDamageDice(cr, 'secondary');
            const damageBonus = dexMod;

            const attack = {
                name: template.name,
                isAttack: true,
                attackType: 'Ranged Weapon Attack',
                attackBonus: attackBonus,
                range: template.range,
                targets: 'one target',
                damage: {
                    dice: damageDice,
                    bonus: damageBonus,
                    type: template.damage
                },
                description: this.formatRangedAttackDescription({
                    attackType: 'Ranged Weapon Attack',
                    bonus: attackBonus,
                    range: template.range,
                    targets: 'one target',
                    damage: damageDice,
                    damageBonus: damageBonus,
                    damageType: template.damage,
                    properties: template.properties
                }, monster)
            };

            attacks.push(attack);
        }

        return attacks;
    },

    /**
     * Generate breath weapon
     * Uses the monster's element if set (for dragons/elementals) to match the name
     */
    generateBreathWeapon(monster, typeData) {
        const cr = monster.cr;

        // Map element to breath damage type
        const elementToBreath = {
            fire: 'fire',
            water: 'cold',
            earth: 'acid',
            air: 'lightning',
            cold: 'cold',
            lightning: 'lightning',
            acid: 'acid',
            poison: 'poison'
        };

        // Use monster's element if set, otherwise select randomly based on type
        let breathType;
        if (monster.element && elementToBreath[monster.element]) {
            breathType = elementToBreath[monster.element];
        } else {
            // Fallback: select breath type based on monster type
            const breathTypes = {
                dragon: ['fire', 'cold', 'lightning', 'acid', 'poison'],
                elemental: ['fire', 'cold', 'lightning', 'thunder'],
                fiend: ['fire', 'necrotic'],
                aberration: ['psychic', 'acid'],
                monstrosity: ['fire', 'poison', 'acid']
            };

            const availableTypes = breathTypes[monster.type] || ['fire'];
            breathType = Utils.randomChoice(availableTypes);
        }
        const breathData = AttackData.breathWeapons[breathType];

        if (!breathData) return null;

        const sizeIndex = AttackData.getBreathWeaponSize(cr);
        const shape = breathData.shapes[Math.min(sizeIndex, breathData.shapes.length - 1)];
        const damage = AttackData.getBreathDamageDice(cr);
        const recharge = AttackData.getBreathRecharge(cr);
        const saveDC = CRStats[cr]?.saveDC || 13;

        return {
            name: `${breathData.name} (Recharge ${recharge})`,
            description: `The ${monster.name.toLowerCase()} exhales ${breathType === 'fire' ? 'fire' : breathType} in a ${shape}. Each creature in that area must make a DC ${saveDC} ${Utils.capitalize(breathData.saveType)} saving throw, taking ${damage} ${breathType} damage on a failed save, or half as much damage on a successful one.`
        };
    },

    /**
     * Generate gaze attack
     */
    generateGazeAttack(monster) {
        const gazeOptions = AttackData.gazeAttacks;
        const gaze = Utils.randomChoice(gazeOptions);

        if (!gaze) return null;

        const saveDC = CRStats[monster.cr]?.saveDC || 13;
        const damage = AttackData.getDamageDice(monster.cr, 'secondary');

        return {
            name: gaze.name,
            description: gaze.description
                .replace('{dc}', saveDC)
                .replace('{damage}', damage)
        };
    },

    /**
     * Generate aura effect
     * For elementals/dragons, uses element-appropriate auras
     */
    generateAuraEffect(monster) {
        const auraOptions = AttackData.auraEffects;

        let aura;

        // For elementals and dragons with an element, pick an appropriate aura
        if (monster.element && (monster.type === 'elemental' || monster.type === 'dragon')) {
            const elementAuraMap = {
                fire: 'Heat Aura',
                water: 'Cold Aura',
                cold: 'Cold Aura',
                earth: 'Earthen Tremor',
                air: 'Buffeting Winds',
                lightning: 'Lightning Aura',
                acid: 'Corrosive Aura',
                poison: 'Stench'
            };

            const preferredAuraName = elementAuraMap[monster.element];
            if (preferredAuraName) {
                aura = auraOptions.find(a => a.name === preferredAuraName);
            }
        }

        // Fallback to random aura if no element-specific one found
        if (!aura) {
            aura = Utils.randomChoice(auraOptions);
        }

        if (!aura) return null;

        const saveDC = CRStats[monster.cr]?.saveDC || 13;
        const damage = AttackData.getDamageDice(monster.cr, 'secondary');
        const radius = aura.radius || 10;

        return {
            name: aura.name,
            description: aura.description
                .replace('{dc}', saveDC)
                .replace('{damage}', damage)
                .replace('{radius}', radius)
                .replace('{bonus}', monster.proficiencyBonus)
        };
    },

    /**
     * Generate spellcasting
     * For humanoid spellcasters, caster level equals hit dice (not CR)
     * Example: Archmage is CR 12 with 18 hit dice = 18th level caster (9th level spells)
     * Half-casters (Paladin, Ranger, Artificer) max at 5th level spells
     * Warlocks use Pact Magic (limited slots all same level) + Mystic Arcanum
     */
    generateSpellcasting(monster, characterClass) {
        if (typeof SpellsData === 'undefined') return null;

        const cr = monster.cr;
        let level;

        // Determine caster type
        const isHalfCaster = ['paladin', 'ranger', 'artificer'].includes(characterClass);
        const isWarlock = characterClass === 'warlock';

        // For humanoid spellcasters, use hit dice as caster level
        if (monster.type === 'humanoid' && this.isSpellcaster(characterClass)) {
            level = monster.hitPoints.hitDice;
        } else {
            // For non-humanoids or innate casters, use CR-based level
            level = this.crToLevel(cr);
        }

        // Determine spellcasting ability
        let spellAbility = 'int';
        if (characterClass) {
            const classAbilities = {
                wizard: 'int', artificer: 'int',
                cleric: 'wis', druid: 'wis', ranger: 'wis', monk: 'wis',
                bard: 'cha', sorcerer: 'cha', warlock: 'cha', paladin: 'cha'
            };
            spellAbility = classAbilities[characterClass] || 'int';
        } else {
            // Type-based spellcasting
            const typeAbilities = {
                aberration: 'int', celestial: 'cha', fey: 'cha',
                fiend: 'cha', dragon: 'cha', undead: 'int'
            };
            spellAbility = typeAbilities[monster.type] || 'int';
        }

        const abilityMod = Utils.abilityModifier(monster.abilities[spellAbility]);
        const spellSaveDC = Utils.spellSaveDC(monster.proficiencyBonus, abilityMod);
        const spellAttackBonus = Utils.spellAttackBonus(monster.proficiencyBonus, abilityMod);

        // Handle Warlock Pact Magic separately
        if (isWarlock) {
            const warlockData = SpellsData.getWarlockSlots(level);
            const mysticArcanum = SpellsData.getMysticArcanum(level);
            const spells = SpellsData.getSpellsForLevel(level, 'warlock');

            // Add Mystic Arcanum spells (6th-9th level, 1/day each)
            for (let arcLevel = 6; arcLevel <= 9; arcLevel++) {
                if (mysticArcanum[arcLevel]) {
                    const arcSpells = SpellsData.spellsByLevel[arcLevel]?.warlock || [];
                    if (arcSpells.length > 0) {
                        spells[`level${arcLevel}`] = SpellsData.selectRandomSpells(arcSpells, 1);
                    }
                }
            }

            return {
                ability: spellAbility,
                saveDC: spellSaveDC,
                attackBonus: spellAttackBonus,
                level: level,
                maxSpellLevel: warlockData.slotLevel,
                isWarlock: true,
                pactSlots: warlockData.slots,
                pactSlotLevel: warlockData.slotLevel,
                mysticArcanum: mysticArcanum,
                spells: spells,
                innate: false
            };
        }

        // Get spell slots based on caster type
        const spellSlots = SpellsData.getSpellSlots(level, characterClass);
        const spells = SpellsData.getSpellsForLevel(level, characterClass || monster.type);

        // Calculate max spell level available
        let maxSpellLevel;
        if (isHalfCaster) {
            maxSpellLevel = this.maxSpellLevelForHalfCaster(level);
        } else {
            maxSpellLevel = this.maxSpellLevelForCasterLevel(level);
        }

        return {
            ability: spellAbility,
            saveDC: spellSaveDC,
            attackBonus: spellAttackBonus,
            level: level,
            maxSpellLevel: maxSpellLevel,
            slots: spellSlots,
            spells: spells,
            innate: !characterClass,
            isHalfCaster: isHalfCaster
        };
    },

    /**
     * Generate legendary actions
     */
    generateLegendaryActions(monster, cr) {
        if (typeof LegendaryData === 'undefined') return [];

        const crNum = parseFloat(cr);
        const numActions = 3;

        // Get legendary actions for type
        const legendaryActions = LegendaryData.getLegendaryActions(monster.type, crNum, numActions);

        return legendaryActions.map(action => ({
            name: action.name,
            cost: action.cost || 1,
            description: action.description
                .replace('{name}', monster.name.toLowerCase())
                .replace('{damage}', AttackData.getDamageDice(crNum, 'secondary'))
                .replace('{dc}', CRStats[crNum]?.saveDC || 13)
        }));
    },

    /**
     * Generate mythic actions
     */
    generateMythicActions(monster, cr) {
        if (typeof LegendaryData === 'undefined') {
            return { trait: null, actions: [] };
        }

        const crNum = parseFloat(cr);

        // Get mythic trait
        const mythicTrait = LegendaryData.getMythicTrait(monster.type, crNum);

        // Get mythic actions
        const mythicActions = LegendaryData.getMythicActions(monster.type, crNum, 3);

        return {
            trait: {
                name: mythicTrait.name,
                description: mythicTrait.description
                    .replace('{name}', monster.name)
                    .replace('{hp}', Math.floor(monster.hitPoints.average / 2))
            },
            actions: mythicActions.map(action => ({
                name: action.name,
                cost: action.cost || 1,
                description: action.description
                    .replace('{name}', monster.name.toLowerCase())
                    .replace('{damage}', AttackData.getDamageDice(crNum, 'primary'))
                    .replace('{dc}', CRStats[crNum]?.saveDC || 13)
            }))
        };
    },

    /**
     * Generate lair actions
     */
    generateLairActions(monster, type) {
        if (typeof LegendaryData === 'undefined') return [];

        const lairActions = LegendaryData.getLairActions(type, monster.cr, 3);

        return lairActions.map(action => ({
            description: action.description
                .replace('{name}', monster.name.toLowerCase())
                .replace('{damage}', AttackData.getDamageDice(monster.cr, 'secondary'))
                .replace('{dc}', CRStats[monster.cr]?.saveDC || 13)
        }));
    },

    /**
     * Generate inventory for humanoids
     */
    generateInventory(monster, characterClass, cr) {
        if (typeof InventoryData === 'undefined') return [];

        return InventoryData.generateInventory(characterClass, cr);
    },

    /**
     * Generate magic items (class-appropriate for humanoids)
     */
    generateMagicItems(monster, cr) {
        if (typeof MagicItemsData === 'undefined') return [];

        const crNum = parseFloat(cr);
        const numItems = crNum < 5 ? 1 : crNum < 10 ? 2 : crNum < 17 ? 3 : 4;

        // Use class-appropriate items for humanoids with a class
        if (monster.type === 'humanoid' && monster.characterClass) {
            return MagicItemsData.getClassAppropriateItems(crNum, monster.characterClass, numItems);
        }

        return MagicItemsData.getRandomItems(crNum, numItems);
    },

    /**
     * Apply magic item bonuses to monster stats
     */
    applyMagicItemBonuses(monster) {
        if (!monster.magicItems || monster.magicItems.length === 0) return;

        for (const item of monster.magicItems) {
            if (item.acBonus) {
                monster.armorClass.value += item.acBonus;
            }
            if (item.attackBonus) {
                // Store for use in attack descriptions
                monster.magicAttackBonus = (monster.magicAttackBonus || 0) + item.attackBonus;
            }
            if (item.abilityBonus) {
                for (const [ability, bonus] of Object.entries(item.abilityBonus)) {
                    monster.abilities[ability] = Math.min(30, monster.abilities[ability] + bonus);
                }
            }
            if (item.action) {
                monster.actions.push({
                    name: item.name,
                    description: item.action
                });
            }
        }
    },

    /**
     * Apply racial traits
     */
    applyRacialTraits(monster, race) {
        if (typeof RacesData === 'undefined' || !RacesData[race]) return;

        const raceData = RacesData[race];

        // Add racial traits
        if (raceData.traits) {
            for (const trait of raceData.traits) {
                monster.traits.push({
                    name: trait.name,
                    description: trait.description,
                    isRacial: true
                });
            }
        }

        // Apply ability modifiers
        if (raceData.abilityModifiers) {
            for (const [ability, mod] of Object.entries(raceData.abilityModifiers)) {
                monster.abilities[ability] = Math.min(30, monster.abilities[ability] + mod);
            }
        }
    },

    /**
     * Generate name
     * @param {string} type - Monster type
     * @param {string} race - Race for humanoids
     * @param {string} element - Element type for elementals/dragons (fire, cold, lightning, etc.)
     */
    generateName(type, race, element = null) {
        // Try humanoid names first
        if (race && typeof HumanoidNames !== 'undefined' && HumanoidNames[race]) {
            return HumanoidNames.generateName(race);
        }

        // Fall back to monster names
        if (typeof MonsterNames !== 'undefined') {
            // For elementals and dragons, use element-appropriate names
            if ((type === 'elemental' || type === 'dragon') && element) {
                return MonsterNames.generateName(type, true, element);
            }
            return MonsterNames.generateName(type, true);
        }

        return 'Unknown Creature';
    },

    /**
     * Determine element type for elementals and dragons
     */
    determineElement(type) {
        const elementsByType = {
            dragon: ['fire', 'cold', 'lightning', 'acid', 'poison'],
            elemental: ['fire', 'water', 'earth', 'air']
        };

        const elements = elementsByType[type];
        if (elements && elements.length > 0) {
            return Utils.randomChoice(elements);
        }
        return null;
    },

    /**
     * Generate alignment
     */
    generateAlignment(typeData) {
        if (!typeData.typicalAlignments || typeData.typicalAlignments.length === 0) {
            return 'true neutral';
        }
        return Utils.randomChoice(typeData.typicalAlignments);
    },

    /**
     * Get subtype
     */
    getSubtype(type, race) {
        if (type === 'humanoid' && race) {
            return race.replace(/-/g, ' ');
        }
        return null;
    },

    /**
     * Convert CR to equivalent level (for non-spellcasters)
     */
    crToLevel(cr) {
        const crNum = parseFloat(cr);
        if (crNum < 1) return 1;
        return Math.min(20, Math.ceil(crNum));
    },

    /**
     * Check if a class is a spellcaster
     */
    isSpellcaster(characterClass) {
        const casterClasses = ['bard', 'cleric', 'druid', 'sorcerer', 'warlock', 'wizard', 'artificer', 'paladin', 'ranger'];
        return casterClasses.includes(characterClass);
    },

    /**
     * Get caster level for humanoid spellcasters based on CR
     * Spellcasters have higher effective levels to match their spell access
     * Example: Archmage is CR 12 with 18 hit dice (18th level caster, 9th level spells)
     */
    getHumanoidCasterLevel(cr) {
        const crNum = parseFloat(cr);
        // Spellcasters get more hit dice than their CR would suggest
        // CR 12 Archmage has 18 HD, so roughly CR * 1.5 for high-level casters
        // Scale: CR 1-4 = CR+2, CR 5-10 = CR*1.3, CR 11+ = CR*1.5
        if (crNum <= 0.5) return 1;
        if (crNum <= 4) return Math.min(20, Math.ceil(crNum + 2));
        if (crNum <= 10) return Math.min(20, Math.ceil(crNum * 1.4));
        return Math.min(20, Math.ceil(crNum * 1.5));
    },

    /**
     * Get the maximum spell level available at a given caster level
     */
    maxSpellLevelForCasterLevel(casterLevel) {
        // Full casters: level 1=1st, 3=2nd, 5=3rd, 7=4th, 9=5th, 11=6th, 13=7th, 15=8th, 17=9th
        if (casterLevel >= 17) return 9;
        if (casterLevel >= 15) return 8;
        if (casterLevel >= 13) return 7;
        if (casterLevel >= 11) return 6;
        if (casterLevel >= 9) return 5;
        if (casterLevel >= 7) return 4;
        if (casterLevel >= 5) return 3;
        if (casterLevel >= 3) return 2;
        return 1;
    },

    /**
     * Get max spell level for half-casters (Paladin, Ranger, Artificer)
     * Half-casters max at 5th level spells at level 17+
     */
    maxSpellLevelForHalfCaster(casterLevel) {
        // Half-casters: level 2=1st, 5=2nd, 9=3rd, 13=4th, 17=5th
        if (casterLevel >= 17) return 5;
        if (casterLevel >= 13) return 4;
        if (casterLevel >= 9) return 3;
        if (casterLevel >= 5) return 2;
        if (casterLevel >= 2) return 1;
        return 0;
    },

    /**
     * Get class features for level
     */
    getClassFeatures(classInfo, level) {
        const features = [];

        if (classInfo.features) {
            for (const feature of classInfo.features) {
                if (feature.level <= level) {
                    let name = feature.name;
                    let description = feature.description;

                    // Calculate Sneak Attack damage for rogues
                    // Scales: 1d6 at level 1, +1d6 every 2 levels (1, 3, 5, 7, 9, 11, 13, 15, 17, 19)
                    if (name.includes('{sneakAttackDice}')) {
                        const sneakAttackDice = Math.ceil(level / 2);
                        const diceString = `${sneakAttackDice}d6`;
                        name = name.replace('{sneakAttackDice}', diceString);
                        description = description.replace('{sneakAttackDice}', diceString);
                    }

                    features.push({
                        name: name,
                        description: description,
                        isClassFeature: true
                    });
                }
            }
        }

        return features.slice(0, 3); // Limit to 3 class features
    },

    /**
     * Format ability description
     */
    formatAbilityDescription(ability, cr) {
        const crData = CRStats[cr] || CRStats[1];
        let desc = ability.description;

        desc = desc.replace(/{name}/g, 'creature');
        desc = desc.replace(/{dc}/g, crData.saveDC);
        desc = desc.replace(/{damage}/g, AttackData.getDamageDice(cr, 'secondary'));
        desc = desc.replace(/{range}/g, ability.range || 30);
        desc = desc.replace(/{healing}/g, AttackData.getDamageDice(cr, 'secondary'));
        desc = desc.replace(/{distance}/g, 20);
        desc = desc.replace(/{halfDistance}/g, 10);
        desc = desc.replace(/{threshold}/g, 5 + Math.floor(cr / 2));
        desc = desc.replace(/{bonus}/g, crData.profBonus);
        desc = desc.replace(/{time}/g, '1d10 days');
        desc = desc.replace(/{level}/g, Math.max(1, Math.floor(cr / 2)));
        desc = desc.replace(/{forms}/g, 'a Small or Medium humanoid');
        desc = desc.replace(/{appearance}/g, 'an inanimate object');
        desc = desc.replace(/{damageType}/g, 'fire');
        desc = desc.replace(/{sense}/g, 'smell');
        desc = desc.replace(/{duration}/g, 30);
        desc = desc.replace(/{condition}/g, 'a wish spell is used');
        desc = desc.replace(/{spawnType}/g, 'zombie');
        desc = desc.replace(/{count}/g, '1d4');
        desc = desc.replace(/{brightRadius}/g, 30);
        desc = desc.replace(/{dimRadius}/g, 30);
        desc = desc.replace(/{size}/g, 10);
        desc = desc.replace(/{object}/g, 'an amulet');

        return desc;
    },

    /**
     * Format attack description
     */
    formatAttackDescription(attack, monster) {
        let desc = `${attack.attackType}: ${Utils.formatModifier(attack.bonus)} to hit, reach ${attack.reach} ft., ${attack.targets}. `;
        desc += `Hit: ${Utils.averageDice(attack.damage)} (${attack.damage}) `;

        if (attack.damageBonus !== 0) {
            desc = desc.replace(`(${attack.damage})`, `(${attack.damage} ${Utils.formatModifier(attack.damageBonus)})`);
            const avg = Utils.averageDice(attack.damage) + attack.damageBonus;
            desc = desc.replace(/Hit: \d+/, `Hit: ${avg}`);
        }

        desc += `${attack.damageType} damage.`;

        // Add property effects
        if (attack.properties) {
            if (attack.properties.includes('grapple')) {
                desc += ` The target is grappled (escape DC ${CRStats[monster.cr]?.saveDC || 13}).`;
            }
            if (attack.properties.includes('poison')) {
                desc += ` The target must make a DC ${CRStats[monster.cr]?.saveDC || 13} Constitution saving throw or be poisoned for 1 minute.`;
            }
            if (attack.properties.includes('knockdown')) {
                desc += ` The target must succeed on a DC ${CRStats[monster.cr]?.saveDC || 13} Strength saving throw or be knocked prone.`;
            }
        }

        return desc;
    },

    /**
     * Format ranged attack description
     */
    formatRangedAttackDescription(attack, monster) {
        let desc = `${attack.attackType}: ${Utils.formatModifier(attack.bonus)} to hit, range ${attack.range}, ${attack.targets}. `;
        desc += `Hit: ${Utils.averageDice(attack.damage)} (${attack.damage}) `;

        if (attack.damageBonus !== 0) {
            desc = desc.replace(`(${attack.damage})`, `(${attack.damage} ${Utils.formatModifier(attack.damageBonus)})`);
            const avg = Utils.averageDice(attack.damage) + attack.damageBonus;
            desc = desc.replace(/Hit: \d+/, `Hit: ${avg}`);
        }

        desc += `${attack.damageType} damage.`;

        return desc;
    },

    /**
     * Format multiattack description
     */
    formatMultiattackDescription(attackNames, numAttacks) {
        if (attackNames.length === 1) {
            return `${numAttacks} ${attackNames[0]} attacks`;
        } else if (attackNames.length === 2) {
            const perAttack = Math.floor(numAttacks / 2);
            const remainder = numAttacks % 2;
            if (remainder === 0) {
                return `${perAttack} ${attackNames[0]} attacks and ${perAttack} ${attackNames[1]} attacks`;
            } else {
                return `${perAttack + 1} ${attackNames[0]} attacks and ${perAttack} ${attackNames[1]} attacks`;
            }
        }
        return `${numAttacks} attacks`;
    },

    /**
     * Randomize all options
     */
    randomizeOptions() {
        const types = Object.keys(MonsterTypes);
        const type = Utils.randomChoice(types);
        const typeData = MonsterTypes[type];

        const crOptions = [0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        const cr = Utils.randomChoice(crOptions);

        const size = Utils.randomChoice(typeData.typicalSizes);
        const alignment = Utils.randomChoice(typeData.typicalAlignments);

        const attackTypes = {
            melee: Math.random() > 0.2,
            ranged: Math.random() > 0.5,
            spells: type !== 'beast' && type !== 'ooze' && Math.random() > 0.6,
            breath: ['dragon', 'elemental', 'fiend', 'monstrosity'].includes(type) && Math.random() > 0.7,
            gaze: ['aberration', 'monstrosity', 'undead'].includes(type) && Math.random() > 0.8,
            aura: Math.random() > 0.8
        };

        const hasLegendary = cr >= 10 && Math.random() > 0.5;
        const hasMythic = cr >= 17 && Math.random() > 0.7;
        const hasLair = hasLegendary && Math.random() > 0.5;

        // Humanoid-specific
        let race = null;
        let characterClass = null;
        let generateInventory = false;
        let includeMagicItems = false;

        if (type === 'humanoid' && typeof RacesData !== 'undefined') {
            const races = Object.keys(RacesData);
            race = Utils.randomChoice(races);

            if (typeof ClassData !== 'undefined' && Math.random() > 0.3) {
                const classes = Object.keys(ClassData);
                characterClass = Utils.randomChoice(classes);
            }

            generateInventory = Math.random() > 0.3;
            includeMagicItems = cr >= 5 && Math.random() > 0.5;
        }

        return {
            type,
            cr,
            size,
            alignment,
            attackTypes,
            hasLegendary,
            hasMythic,
            hasLair,
            race,
            characterClass,
            generateInventory,
            includeMagicItems
        };
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Generator;
}
