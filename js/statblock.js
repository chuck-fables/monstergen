/**
 * D&D 5e Statblock Renderer
 * Generates HTML for the PHB-style statblock display
 */

const StatblockRenderer = {
    /**
     * Render a complete statblock
     */
    render(monster) {
        if (!monster) return this.renderPlaceholder();

        const html = `
            <div class="statblock-content">
                ${this.renderHeader(monster)}
                <div class="tapered-rule"></div>
                ${this.renderTopStats(monster)}
                <div class="tapered-rule"></div>
                ${this.renderAbilities(monster)}
                <div class="tapered-rule"></div>
                ${this.renderProperties(monster)}
                ${this.renderTraits(monster)}
                ${this.renderSpellcasting(monster)}
                ${this.renderActions(monster)}
                ${this.renderBonusActions(monster)}
                ${this.renderReactions(monster)}
                ${this.renderLegendaryActions(monster)}
                ${this.renderMythicActions(monster)}
                ${this.renderLairActions(monster)}
                ${this.renderInventory(monster)}
            </div>
        `;

        return html;
    },

    /**
     * Render placeholder
     */
    renderPlaceholder() {
        return `
            <div class="statblock-placeholder">
                <p>Configure options and click <strong>Generate</strong> to create a monster stat block.</p>
                <p>Or click <strong>Randomize</strong> for a random monster!</p>
            </div>
        `;
    },

    /**
     * Render header (name, type, size, alignment)
     */
    renderHeader(monster) {
        const typeLine = this.formatTypeLine(monster);

        return `
            <div class="statblock-header">
                <h1 class="statblock-name">${monster.name}</h1>
                <p class="statblock-type">${typeLine}</p>
            </div>
        `;
    },

    /**
     * Format type line
     */
    formatTypeLine(monster) {
        let line = `${Utils.capitalize(monster.size)} ${monster.type}`;

        if (monster.subtype) {
            line += ` (${monster.subtype})`;
        }

        line += `, ${monster.alignment}`;

        return line;
    },

    /**
     * Render top stats (AC, HP, Speed)
     */
    renderTopStats(monster) {
        const acText = this.formatAC(monster.armorClass);
        const hpText = this.formatHP(monster.hitPoints);
        const speedText = Utils.formatSpeed(monster.speed);

        return `
            <div class="top-stats">
                <p class="property-line">
                    <span class="property-name">Armor Class</span>
                    <span class="property-value">${acText}</span>
                </p>
                <p class="property-line">
                    <span class="property-name">Hit Points</span>
                    <span class="property-value">${hpText}</span>
                </p>
                <p class="property-line">
                    <span class="property-name">Speed</span>
                    <span class="property-value">${speedText}</span>
                </p>
            </div>
        `;
    },

    /**
     * Format AC
     */
    formatAC(armorClass) {
        if (armorClass.type && armorClass.type !== 'none') {
            return `${armorClass.value} (${armorClass.type})`;
        }
        return String(armorClass.value);
    },

    /**
     * Format HP
     */
    formatHP(hitPoints) {
        return `${hitPoints.average} (${hitPoints.notation})`;
    },

    /**
     * Render ability scores
     */
    renderAbilities(monster) {
        const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

        const headers = abilities.map(a => `<th>${a.toUpperCase()}</th>`).join('');
        const scores = abilities.map(a => {
            const score = monster.abilities[a];
            const mod = Utils.abilityModifier(score);
            return `<td><span class="ability-score">${score}</span> <span class="ability-modifier">(${Utils.formatModifier(mod)})</span></td>`;
        }).join('');

        return `
            <div class="abilities-block">
                <table class="abilities-table">
                    <thead>
                        <tr>${headers}</tr>
                    </thead>
                    <tbody>
                        <tr>${scores}</tr>
                    </tbody>
                </table>
            </div>
        `;
    },

    /**
     * Render properties (saves, skills, resistances, etc.)
     */
    renderProperties(monster) {
        const properties = [];

        // Saving Throws
        const saves = this.formatSavingThrows(monster);
        if (saves) {
            properties.push(`<p class="property-line"><span class="property-name">Saving Throws</span> <span class="property-value">${saves}</span></p>`);
        }

        // Skills
        const skills = this.formatSkills(monster);
        if (skills) {
            properties.push(`<p class="property-line"><span class="property-name">Skills</span> <span class="property-value">${skills}</span></p>`);
        }

        // Damage Resistances
        if (monster.damageResistances && monster.damageResistances.length > 0) {
            properties.push(`<p class="property-line"><span class="property-name">Damage Resistances</span> <span class="property-value">${monster.damageResistances.join(', ')}</span></p>`);
        }

        // Damage Immunities
        if (monster.damageImmunities && monster.damageImmunities.length > 0) {
            properties.push(`<p class="property-line"><span class="property-name">Damage Immunities</span> <span class="property-value">${monster.damageImmunities.join(', ')}</span></p>`);
        }

        // Condition Immunities
        if (monster.conditionImmunities && monster.conditionImmunities.length > 0) {
            properties.push(`<p class="property-line"><span class="property-name">Condition Immunities</span> <span class="property-value">${monster.conditionImmunities.join(', ')}</span></p>`);
        }

        // Senses
        const senses = this.formatSenses(monster);
        if (senses) {
            properties.push(`<p class="property-line"><span class="property-name">Senses</span> <span class="property-value">${senses}</span></p>`);
        }

        // Languages
        const languages = this.formatLanguages(monster);
        properties.push(`<p class="property-line"><span class="property-name">Languages</span> <span class="property-value">${languages}</span></p>`);

        // Challenge
        const challenge = this.formatChallenge(monster);
        properties.push(`<p class="property-line challenge-line"><span class="property-name">Challenge</span> <span class="property-value">${challenge}</span></p>`);

        return `<div class="properties-section">${properties.join('\n')}</div>`;
    },

    /**
     * Format saving throws
     */
    formatSavingThrows(monster) {
        if (!monster.savingThrows || Object.keys(monster.savingThrows).length === 0) {
            return null;
        }

        const saves = [];
        for (const [ability, proficient] of Object.entries(monster.savingThrows)) {
            if (proficient) {
                const mod = Utils.abilityModifier(monster.abilities[ability]);
                const total = mod + monster.proficiencyBonus;
                saves.push(`${Utils.capitalize(ability)} ${Utils.formatModifier(total)}`);
            }
        }

        return saves.length > 0 ? saves.join(', ') : null;
    },

    /**
     * Format skills
     */
    formatSkills(monster) {
        if (!monster.skills || Object.keys(monster.skills).length === 0) {
            return null;
        }

        const skillList = [];
        for (const [skillKey, proficient] of Object.entries(monster.skills)) {
            if (proficient && Skills[skillKey]) {
                const skill = Skills[skillKey];
                const mod = Utils.abilityModifier(monster.abilities[skill.ability]);
                const total = mod + monster.proficiencyBonus;
                skillList.push(`${skill.name} ${Utils.formatModifier(total)}`);
            }
        }

        return skillList.length > 0 ? skillList.join(', ') : null;
    },

    /**
     * Format senses
     */
    formatSenses(monster) {
        const senses = [];

        if (monster.senses) {
            if (monster.senses.blindsight) {
                senses.push(`blindsight ${monster.senses.blindsight} ft.`);
            }
            if (monster.senses.darkvision) {
                senses.push(`darkvision ${monster.senses.darkvision} ft.`);
            }
            if (monster.senses.tremorsense) {
                senses.push(`tremorsense ${monster.senses.tremorsense} ft.`);
            }
            if (monster.senses.truesight) {
                senses.push(`truesight ${monster.senses.truesight} ft.`);
            }
        }

        // Calculate passive perception
        const wisMod = Utils.abilityModifier(monster.abilities.wis);
        let passivePerception = 10 + wisMod;
        if (monster.skills && monster.skills.perception) {
            passivePerception += monster.proficiencyBonus;
        }
        senses.push(`passive Perception ${passivePerception}`);

        return senses.join(', ');
    },

    /**
     * Format languages
     */
    formatLanguages(monster) {
        if (!monster.languages || monster.languages.length === 0) {
            return '—';
        }

        // Handle telepathy
        const regularLanguages = monster.languages.filter(l => l !== 'telepathy');
        let result = regularLanguages.length > 0 ? regularLanguages.join(', ') : '—';

        if (monster.languages.includes('telepathy') && monster.senses && monster.senses.telepathy) {
            result += `, telepathy ${monster.senses.telepathy} ft.`;
        }

        return result;
    },

    /**
     * Format challenge rating
     */
    formatChallenge(monster) {
        const crDisplay = Utils.formatCR(monster.cr);
        return `${crDisplay} (${monster.xp.toLocaleString()} XP)`;
    },

    /**
     * Render traits
     */
    renderTraits(monster) {
        if (!monster.traits || monster.traits.length === 0) {
            return '';
        }

        const traitBlocks = monster.traits.map(trait => {
            let classes = 'trait-block';
            if (trait.isRacial) classes += ' racial-trait';
            if (trait.isClassFeature) classes += ' class-feature';

            return `
                <div class="${classes}">
                    <p><span class="trait-name">${trait.name}.</span> <span class="trait-description">${this.formatDescription(trait.description, monster)}</span></p>
                </div>
            `;
        }).join('');

        return `<div class="traits-section">${traitBlocks}</div>`;
    },

    /**
     * Render spellcasting
     */
    renderSpellcasting(monster) {
        if (!monster.spellcasting) {
            return '';
        }

        const sc = monster.spellcasting;
        const abilityName = {
            str: 'Strength', dex: 'Dexterity', con: 'Constitution',
            int: 'Intelligence', wis: 'Wisdom', cha: 'Charisma'
        }[sc.ability];

        let header;
        if (sc.innate) {
            header = `<span class="trait-name">Innate Spellcasting.</span> The ${monster.name.toLowerCase()}'s innate spellcasting ability is ${abilityName} (spell save DC ${sc.saveDC}, ${Utils.formatModifier(sc.attackBonus)} to hit with spell attacks). It can innately cast the following spells, requiring no material components:`;
        } else {
            header = `<span class="trait-name">Spellcasting.</span> The ${monster.name.toLowerCase()} is a ${Utils.ordinal(sc.level)}-level spellcaster. Its spellcasting ability is ${abilityName} (spell save DC ${sc.saveDC}, ${Utils.formatModifier(sc.attackBonus)} to hit with spell attacks). The ${monster.name.toLowerCase()} has the following spells prepared:`;
        }

        // Format spell lists
        const spellLists = [];

        if (sc.spells.cantrips && sc.spells.cantrips.length > 0) {
            spellLists.push(`<p class="spell-level"><span class="spell-level-name">Cantrips (at will):</span> <em>${sc.spells.cantrips.join(', ')}</em></p>`);
        }

        for (let level = 1; level <= 9; level++) {
            const levelSpells = sc.spells[`level${level}`];
            const slots = sc.slots[level];

            if (levelSpells && levelSpells.length > 0 && slots > 0) {
                const slotText = slots === 1 ? '1 slot' : `${slots} slots`;
                spellLists.push(`<p class="spell-level"><span class="spell-level-name">${Utils.ordinal(level)} level (${slotText}):</span> <em>${levelSpells.join(', ')}</em></p>`);
            }
        }

        // At-will for innate
        if (sc.innate && sc.spells.atWill && sc.spells.atWill.length > 0) {
            spellLists.push(`<p class="spell-level"><span class="spell-level-name">At will:</span> <em>${sc.spells.atWill.join(', ')}</em></p>`);
        }

        // Daily uses for innate
        for (const uses of [3, 2, 1]) {
            const dailySpells = sc.spells[`${uses}day`];
            if (dailySpells && dailySpells.length > 0) {
                spellLists.push(`<p class="spell-level"><span class="spell-level-name">${uses}/day each:</span> <em>${dailySpells.join(', ')}</em></p>`);
            }
        }

        return `
            <div class="spellcasting-block">
                <p>${header}</p>
                ${spellLists.join('\n')}
            </div>
        `;
    },

    /**
     * Render actions
     */
    renderActions(monster) {
        if (!monster.actions || monster.actions.length === 0) {
            return '';
        }

        const actionBlocks = monster.actions.map(action => {
            return `
                <div class="action-block">
                    <p><span class="action-name">${action.name}.</span> <span class="action-description">${this.formatDescription(action.description, monster)}</span></p>
                </div>
            `;
        }).join('');

        return `
            <div class="actions-section">
                <h2 class="section-header">Actions</h2>
                ${actionBlocks}
            </div>
        `;
    },

    /**
     * Render bonus actions
     */
    renderBonusActions(monster) {
        if (!monster.bonusActions || monster.bonusActions.length === 0) {
            return '';
        }

        const actionBlocks = monster.bonusActions.map(action => {
            return `
                <div class="action-block">
                    <p><span class="action-name">${action.name}.</span> <span class="action-description">${this.formatDescription(action.description, monster)}</span></p>
                </div>
            `;
        }).join('');

        return `
            <div class="bonus-actions-section">
                <h2 class="section-header">Bonus Actions</h2>
                ${actionBlocks}
            </div>
        `;
    },

    /**
     * Render reactions
     */
    renderReactions(monster) {
        if (!monster.reactions || monster.reactions.length === 0) {
            return '';
        }

        const reactionBlocks = monster.reactions.map(reaction => {
            return `
                <div class="action-block">
                    <p><span class="action-name">${reaction.name}.</span> <span class="action-description">${this.formatDescription(reaction.description, monster)}</span></p>
                </div>
            `;
        }).join('');

        return `
            <div class="reactions-section">
                <h2 class="section-header">Reactions</h2>
                ${reactionBlocks}
            </div>
        `;
    },

    /**
     * Render legendary actions
     */
    renderLegendaryActions(monster) {
        if (!monster.legendaryActions || monster.legendaryActions.length === 0) {
            return '';
        }

        const legendaryIntro = `The ${monster.name.toLowerCase()} can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The ${monster.name.toLowerCase()} regains spent legendary actions at the start of its turn.`;

        const actionBlocks = monster.legendaryActions.map(action => {
            const costText = action.cost > 1 ? ` (Costs ${action.cost} Actions)` : '';
            return `
                <div class="legendary-action">
                    <p><span class="action-name">${action.name}${costText}.</span> <span class="action-description">${this.formatDescription(action.description, monster)}</span></p>
                </div>
            `;
        }).join('');

        return `
            <div class="legendary-section">
                <h2 class="section-header">Legendary Actions</h2>
                <p class="legendary-description">${legendaryIntro}</p>
                ${actionBlocks}
            </div>
        `;
    },

    /**
     * Render mythic actions
     */
    renderMythicActions(monster) {
        if (!monster.mythicTrait || !monster.mythicActions || monster.mythicActions.length === 0) {
            return '';
        }

        // Render mythic trait
        const mythicTrait = `
            <div class="mythic-trait">
                <p><span class="trait-name">${monster.mythicTrait.name}.</span> <span class="trait-description">${this.formatDescription(monster.mythicTrait.description, monster)}</span></p>
            </div>
        `;

        const mythicIntro = `If ${monster.name}'s mythic trait is active, it can use the options below as legendary actions.`;

        const actionBlocks = monster.mythicActions.map(action => {
            const costText = action.cost > 1 ? ` (Costs ${action.cost} Actions)` : '';
            return `
                <div class="legendary-action">
                    <p><span class="action-name">${action.name}${costText}.</span> <span class="action-description">${this.formatDescription(action.description, monster)}</span></p>
                </div>
            `;
        }).join('');

        return `
            <div class="mythic-section">
                <h2 class="section-header">Mythic Actions</h2>
                ${mythicTrait}
                <p class="legendary-description">${mythicIntro}</p>
                ${actionBlocks}
            </div>
        `;
    },

    /**
     * Render lair actions
     */
    renderLairActions(monster) {
        if (!monster.lairActions || monster.lairActions.length === 0) {
            return '';
        }

        const lairIntro = `On initiative count 20 (losing initiative ties), the ${monster.name.toLowerCase()} takes a lair action to cause one of the following effects; the ${monster.name.toLowerCase()} can't use the same effect two rounds in a row:`;

        const actionBlocks = monster.lairActions.map(action => {
            return `
                <div class="lair-action">
                    <p>${this.formatDescription(action.description, monster)}</p>
                </div>
            `;
        }).join('');

        return `
            <div class="lair-section">
                <h2 class="section-header">Lair Actions</h2>
                <p class="lair-description">${lairIntro}</p>
                ${actionBlocks}
            </div>
        `;
    },

    /**
     * Render inventory
     */
    renderInventory(monster) {
        if (!monster.inventory || monster.inventory.length === 0) {
            return '';
        }

        const itemBlocks = monster.inventory.map(item => {
            return `
                <div class="inventory-item">
                    <span class="inventory-item-name">${item.name}</span>${item.quantity > 1 ? ` (${item.quantity})` : ''}
                </div>
            `;
        }).join('');

        // Magic items
        let magicItemBlocks = '';
        if (monster.magicItems && monster.magicItems.length > 0) {
            magicItemBlocks = monster.magicItems.map(item => {
                return `
                    <div class="inventory-item">
                        <span class="inventory-item-name magic-item">${item.name}</span> (${item.rarity})
                        <span class="magic-item-description">${item.description}</span>
                    </div>
                `;
            }).join('');
        }

        return `
            <div class="inventory-section">
                <h2 class="section-header">Equipment</h2>
                ${itemBlocks}
                ${magicItemBlocks}
            </div>
        `;
    },

    /**
     * Format description text
     */
    formatDescription(description, monster) {
        if (!description) return '';

        // Replace placeholders
        let formatted = description
            .replace(/{name}/g, monster.name.toLowerCase())
            .replace(/{Name}/g, monster.name);

        return formatted;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StatblockRenderer;
}
