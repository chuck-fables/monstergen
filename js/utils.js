/**
 * D&D 5e Monster Generator - Utility Functions
 */

const Utils = {
    /**
     * Roll dice with notation like "2d6+3"
     * @param {string} notation - Dice notation (e.g., "2d6", "1d8+2", "3d6-1")
     * @returns {number} - Total result
     */
    rollDice(notation) {
        const match = notation.match(/(\d+)d(\d+)([+-]\d+)?/i);
        if (!match) return 0;

        const numDice = parseInt(match[1]);
        const dieSize = parseInt(match[2]);
        const modifier = match[3] ? parseInt(match[3]) : 0;

        let total = modifier;
        for (let i = 0; i < numDice; i++) {
            total += Math.floor(Math.random() * dieSize) + 1;
        }
        return total;
    },

    /**
     * Calculate average of dice notation
     * @param {string} notation - Dice notation
     * @returns {number} - Average result
     */
    averageDice(notation) {
        const match = notation.match(/(\d+)d(\d+)([+-]\d+)?/i);
        if (!match) return 0;

        const numDice = parseInt(match[1]);
        const dieSize = parseInt(match[2]);
        const modifier = match[3] ? parseInt(match[3]) : 0;

        return Math.floor(numDice * ((dieSize + 1) / 2)) + modifier;
    },

    /**
     * Generate dice notation from desired average
     * @param {number} targetAvg - Desired average
     * @param {number} dieSize - Die size to use (default d8)
     * @returns {string} - Dice notation
     */
    generateDiceNotation(targetAvg, dieSize = 8) {
        const avgPerDie = (dieSize + 1) / 2;
        let numDice = Math.max(1, Math.round(targetAvg / avgPerDie));
        let baseAvg = numDice * avgPerDie;
        let modifier = Math.round(targetAvg - baseAvg);

        if (modifier === 0) {
            return `${numDice}d${dieSize}`;
        } else if (modifier > 0) {
            return `${numDice}d${dieSize}+${modifier}`;
        } else {
            return `${numDice}d${dieSize}${modifier}`;
        }
    },

    /**
     * Random selection from array
     * @param {Array} array - Array to select from
     * @returns {*} - Random element
     */
    randomChoice(array) {
        if (!array || array.length === 0) return null;
        return array[Math.floor(Math.random() * array.length)];
    },

    /**
     * Multiple random selections from array (no duplicates)
     * @param {Array} array - Array to select from
     * @param {number} count - Number of selections
     * @returns {Array} - Array of selections
     */
    randomChoices(array, count) {
        if (!array || array.length === 0) return [];
        const shuffled = [...array].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, shuffled.length));
    },

    /**
     * Weighted random selection
     * @param {Array} items - Array of {item, weight} objects
     * @returns {*} - Selected item
     */
    weightedChoice(items) {
        const totalWeight = items.reduce((sum, i) => sum + (i.weight || 1), 0);
        let random = Math.random() * totalWeight;

        for (const item of items) {
            random -= item.weight || 1;
            if (random <= 0) return item.item || item;
        }
        return items[items.length - 1].item || items[items.length - 1];
    },

    /**
     * Random integer between min and max (inclusive)
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @returns {number}
     */
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Calculate ability modifier
     * @param {number} score - Ability score
     * @returns {number} - Modifier
     */
    abilityModifier(score) {
        return Math.floor((score - 10) / 2);
    },

    /**
     * Format modifier with sign
     * @param {number} mod - Modifier value
     * @returns {string} - Formatted string (e.g., "+3", "-1")
     */
    formatModifier(mod) {
        return mod >= 0 ? `+${mod}` : `${mod}`;
    },

    /**
     * Get proficiency bonus by CR
     * @param {number} cr - Challenge rating
     * @returns {number} - Proficiency bonus
     */
    proficiencyByCR(cr) {
        if (cr < 5) return 2;
        if (cr < 9) return 3;
        if (cr < 13) return 4;
        if (cr < 17) return 5;
        if (cr < 21) return 6;
        if (cr < 25) return 7;
        if (cr < 29) return 8;
        return 9;
    },

    /**
     * Get XP by CR
     * @param {number} cr - Challenge rating
     * @returns {number} - Experience points
     */
    xpByCR(cr) {
        const xpTable = {
            0: 10, 0.125: 25, 0.25: 50, 0.5: 100,
            1: 200, 2: 450, 3: 700, 4: 1100, 5: 1800,
            6: 2300, 7: 2900, 8: 3900, 9: 5000, 10: 5900,
            11: 7200, 12: 8400, 13: 10000, 14: 11500, 15: 13000,
            16: 15000, 17: 18000, 18: 20000, 19: 22000, 20: 25000,
            21: 33000, 22: 41000, 23: 50000, 24: 62000, 25: 75000,
            26: 90000, 27: 105000, 28: 120000, 29: 135000, 30: 155000
        };
        return xpTable[cr] || 0;
    },

    /**
     * Format CR for display
     * @param {number} cr - Challenge rating
     * @returns {string}
     */
    formatCR(cr) {
        if (cr === 0.125) return '1/8';
        if (cr === 0.25) return '1/4';
        if (cr === 0.5) return '1/2';
        return String(cr);
    },

    /**
     * Capitalize first letter
     * @param {string} str
     * @returns {string}
     */
    capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    /**
     * Title case string
     * @param {string} str
     * @returns {string}
     */
    titleCase(str) {
        if (!str) return '';
        return str.split(' ').map(word => this.capitalize(word)).join(' ');
    },

    /**
     * Format list with commas and "and"
     * @param {Array} items
     * @returns {string}
     */
    formatList(items) {
        if (!items || items.length === 0) return '';
        if (items.length === 1) return items[0];
        if (items.length === 2) return `${items[0]} and ${items[1]}`;
        return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
    },

    /**
     * Get hit die by size
     * @param {string} size - Creature size
     * @returns {number} - Hit die size
     */
    hitDieBySize(size) {
        const hitDice = {
            tiny: 4,
            small: 6,
            medium: 8,
            large: 10,
            huge: 12,
            gargantuan: 20
        };
        return hitDice[size.toLowerCase()] || 8;
    },

    /**
     * Calculate HP from hit dice
     * @param {number} numDice - Number of hit dice
     * @param {number} dieSize - Hit die size
     * @param {number} conMod - Constitution modifier
     * @returns {object} - {average, notation}
     */
    calculateHP(numDice, dieSize, conMod) {
        const conBonus = numDice * conMod;
        const avgDie = (dieSize + 1) / 2;
        const average = Math.floor(numDice * avgDie + conBonus);

        let notation;
        if (conBonus === 0) {
            notation = `${numDice}d${dieSize}`;
        } else if (conBonus > 0) {
            notation = `${numDice}d${dieSize} + ${conBonus}`;
        } else {
            notation = `${numDice}d${dieSize} - ${Math.abs(conBonus)}`;
        }

        return { average: Math.max(1, average), notation };
    },

    /**
     * Get AC description
     * @param {number} ac - Armor class
     * @param {string} armorType - Type of armor/defense
     * @returns {string}
     */
    formatAC(ac, armorType) {
        if (armorType) {
            return `${ac} (${armorType})`;
        }
        return String(ac);
    },

    /**
     * Format speed
     * @param {object} speeds - Speed object {walk, fly, swim, climb, burrow}
     * @returns {string}
     */
    formatSpeed(speeds) {
        const parts = [];
        if (speeds.walk) parts.push(`${speeds.walk} ft.`);
        if (speeds.burrow) parts.push(`burrow ${speeds.burrow} ft.`);
        if (speeds.climb) parts.push(`climb ${speeds.climb} ft.`);
        if (speeds.fly) {
            parts.push(`fly ${speeds.fly} ft.${speeds.hover ? ' (hover)' : ''}`);
        }
        if (speeds.swim) parts.push(`swim ${speeds.swim} ft.`);
        return parts.join(', ') || '0 ft.';
    },

    /**
     * Deep clone object
     * @param {object} obj
     * @returns {object}
     */
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    },

    /**
     * Merge objects deeply
     * @param {object} target
     * @param {object} source
     * @returns {object}
     */
    deepMerge(target, source) {
        const result = { ...target };
        for (const key of Object.keys(source)) {
            if (source[key] instanceof Object && key in target) {
                result[key] = this.deepMerge(target[key], source[key]);
            } else {
                result[key] = source[key];
            }
        }
        return result;
    },

    /**
     * Generate UUID
     * @returns {string}
     */
    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    /**
     * Clamp value between min and max
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */
    clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    },

    /**
     * Calculate spell save DC
     * @param {number} profBonus - Proficiency bonus
     * @param {number} abilityMod - Spellcasting ability modifier
     * @returns {number}
     */
    spellSaveDC(profBonus, abilityMod) {
        return 8 + profBonus + abilityMod;
    },

    /**
     * Calculate spell attack bonus
     * @param {number} profBonus - Proficiency bonus
     * @param {number} abilityMod - Spellcasting ability modifier
     * @returns {number}
     */
    spellAttackBonus(profBonus, abilityMod) {
        return profBonus + abilityMod;
    },

    /**
     * Get ordinal suffix for number
     * @param {number} n
     * @returns {string}
     */
    ordinal(n) {
        const s = ['th', 'st', 'nd', 'rd'];
        const v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    },

    /**
     * Format spell slot level
     * @param {number} level - Spell level (0-9)
     * @returns {string}
     */
    formatSpellLevel(level) {
        if (level === 0) return 'Cantrip';
        return `${this.ordinal(level)}-level`;
    },

    /**
     * Shuffle array in place
     * @param {Array} array
     * @returns {Array}
     */
    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },

    /**
     * Scale value based on CR
     * @param {number} cr - Challenge rating
     * @param {number} baseValue - Base value at CR 1
     * @param {number} scaling - Scaling factor per CR
     * @returns {number}
     */
    scaleByCR(cr, baseValue, scaling = 1) {
        return Math.round(baseValue + (cr - 1) * scaling);
    },

    /**
     * Get damage dice for attack by CR
     * @param {number} cr - Challenge rating
     * @returns {string} - Dice notation
     */
    getDamageDiceByCR(cr) {
        if (cr < 1) return '1d6';
        if (cr < 2) return '1d8';
        if (cr < 4) return '2d6';
        if (cr < 6) return '2d8';
        if (cr < 8) return '3d6';
        if (cr < 11) return '3d8';
        if (cr < 14) return '4d8';
        if (cr < 17) return '5d8';
        if (cr < 20) return '6d8';
        return '8d8';
    },

    /**
     * Pluralize word
     * @param {string} word
     * @param {number} count
     * @returns {string}
     */
    pluralize(word, count) {
        if (count === 1) return word;
        // Simple pluralization rules
        if (word.endsWith('s') || word.endsWith('x') || word.endsWith('ch') || word.endsWith('sh')) {
            return word + 'es';
        }
        if (word.endsWith('y') && !['a', 'e', 'i', 'o', 'u'].includes(word[word.length - 2])) {
            return word.slice(0, -1) + 'ies';
        }
        return word + 's';
    }
};

// Skill definitions for stat block rendering
const Skills = {
    acrobatics: { name: 'Acrobatics', ability: 'dex' },
    'animal handling': { name: 'Animal Handling', ability: 'wis' },
    arcana: { name: 'Arcana', ability: 'int' },
    athletics: { name: 'Athletics', ability: 'str' },
    deception: { name: 'Deception', ability: 'cha' },
    history: { name: 'History', ability: 'int' },
    insight: { name: 'Insight', ability: 'wis' },
    intimidation: { name: 'Intimidation', ability: 'cha' },
    investigation: { name: 'Investigation', ability: 'int' },
    medicine: { name: 'Medicine', ability: 'wis' },
    nature: { name: 'Nature', ability: 'int' },
    perception: { name: 'Perception', ability: 'wis' },
    performance: { name: 'Performance', ability: 'cha' },
    persuasion: { name: 'Persuasion', ability: 'cha' },
    religion: { name: 'Religion', ability: 'int' },
    'sleight of hand': { name: 'Sleight of Hand', ability: 'dex' },
    stealth: { name: 'Stealth', ability: 'dex' },
    survival: { name: 'Survival', ability: 'wis' }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Utils, Skills };
}
