/**
 * Hook Card Renderer
 * Renders generated quest hooks into clean, readable HTML
 */

const HookCardRenderer = {
    /**
     * Render a batch of hooks to HTML
     * @param {Object} result - Generation result from HookGenerator
     * @param {Object} options - Rendering options
     * @returns {string} HTML string
     */
    renderBatch(result, options = {}) {
        if (!result || !result.hooks || result.hooks.length === 0) {
            return '<div class="hook-empty-state">No hooks generated</div>';
        }

        const showEnvironment = options.showEnvironment !== false;
        const showLoot = options.showLoot !== false;
        const showMoral = options.showMoral !== false;

        const header = `
            <div class="hook-batch-header">
                <div class="hook-batch-meta">
                    <span class="hook-count">${result.hooks.length} Quest Hook${result.hooks.length > 1 ? 's' : ''}</span>
                    <span class="hook-settings">
                        ${this.formatSetting('Biome', result.settings.biome)}
                        ${this.formatSetting('Monster', result.settings.monsterType)}
                        ${this.formatSetting('Theme', result.settings.theme)}
                    </span>
                </div>
                <div class="hook-batch-actions">
                    <button type="button" class="btn-hook" onclick="HookPanel.saveAll()" title="Save All">
                        &#128190; Save All
                    </button>
                    <button type="button" class="btn-hook" onclick="HookPanel.copyAll()" title="Copy All">
                        &#128203; Copy All
                    </button>
                </div>
            </div>
        `;

        const hooks = result.hooks.map((hook, index) =>
            this.renderSingle(hook, {
                ...options,
                index: index + 1,
                editable: options.editingHookId === hook.id
            })
        ).join('');

        return `
            <div class="hook-batch" data-batch-id="${result.id}">
                ${header}
                <div class="hook-list">
                    ${hooks}
                </div>
            </div>
        `;
    },

    /**
     * Render a single hook to HTML
     */
    renderSingle(hook, options = {}) {
        if (!hook) return '';

        const showEnvironment = options.showEnvironment !== false;
        const showLoot = options.showLoot !== false;
        const showMoral = options.showMoral !== false;
        const index = options.index || '';
        const editable = options.editable === true;

        return `
            <div class="hook-card ${editable ? 'hook-card-editing' : ''}" data-hook-id="${hook.id}">
                <div class="hook-header">
                    <div class="hook-number">${index ? `#${index}` : ''}</div>
                    ${editable
                        ? `<input type="text" class="hook-title-edit" data-field="title" value="${this.escapeHtml(hook.title)}" />`
                        : `<h3 class="hook-title">${hook.title}</h3>`
                    }
                    <div class="hook-tags">
                        <span class="hook-tag tag-biome" title="Biome">${hook.biome.name}</span>
                        <span class="hook-tag tag-monster" title="Monster Type">${hook.monsterType.name}</span>
                        <span class="hook-tag tag-theme" title="Theme">${hook.theme.name}</span>
                    </div>
                </div>

                <div class="hook-body">
                    <!-- Setting & Atmosphere -->
                    <div class="hook-section hook-setting">
                        <div class="hook-section-icon">&#127759;</div>
                        <div class="hook-section-content">
                            <div class="hook-section-title">Setting</div>
                            ${editable
                                ? `<textarea class="hook-edit-textarea hook-edit-textarea-small" data-field="biome.atmosphere">${this.escapeHtml(hook.biome.atmosphere)}</textarea>`
                                : `<div class="hook-atmosphere">${hook.biome.atmosphere}</div>`
                            }
                            <div class="hook-landmark">Near: ${editable
                                ? `<input type="text" class="hook-edit-input hook-edit-inline" data-field="biome.landmark" value="${this.escapeHtml(hook.biome.landmark)}" />`
                                : `<em>${hook.biome.landmark}</em>`
                            }</div>
                        </div>
                    </div>

                    <!-- The Hook Angle -->
                    <div class="hook-section hook-angle">
                        <div class="hook-section-icon">&#128161;</div>
                        <div class="hook-section-content">
                            <div class="hook-section-title">The ${hook.monsterType.name} Angle</div>
                            ${editable
                                ? `<textarea class="hook-edit-textarea" data-field="monsterType.angle">${this.escapeHtml(hook.monsterType.angle)}</textarea>`
                                : `<p>${hook.monsterType.angle}</p>`
                            }
                        </div>
                    </div>

                    <!-- Catalyst -->
                    <div class="hook-section hook-catalyst">
                        <div class="hook-section-icon">&#9889;</div>
                        <div class="hook-section-content">
                            <div class="hook-section-title">The Catalyst</div>
                            ${editable
                                ? `<textarea class="hook-edit-textarea" data-field="catalyst.text">${this.escapeHtml(hook.catalyst.text)}</textarea>`
                                : `<p>${hook.catalyst.text}</p>`
                            }
                            <div class="hook-catalyst-type">${this.formatCatalystType(hook.catalyst.type)}</div>
                        </div>
                    </div>

                    <!-- Objective -->
                    <div class="hook-section hook-objective">
                        <div class="hook-section-icon">&#127919;</div>
                        <div class="hook-section-content">
                            <div class="hook-section-title">The Objective</div>
                            ${editable
                                ? `<textarea class="hook-edit-textarea" data-field="theme.objective">${this.escapeHtml(hook.theme.objective)}</textarea>`
                                : `<p>${hook.theme.objective}</p>`
                            }
                        </div>
                    </div>

                    <!-- Complication -->
                    <div class="hook-section hook-complication">
                        <div class="hook-section-icon">&#9888;</div>
                        <div class="hook-section-content">
                            <div class="hook-section-title">The Complication</div>
                            ${editable
                                ? `<textarea class="hook-edit-textarea" data-field="complication.text">${this.escapeHtml(hook.complication.text)}</textarea>`
                                : `<p>${hook.complication.text}</p>`
                            }
                        </div>
                    </div>

                    <!-- Stakes -->
                    <div class="hook-section hook-stake">
                        <div class="hook-section-icon">&#128128;</div>
                        <div class="hook-section-content">
                            <div class="hook-section-title">If They Fail...</div>
                            ${editable
                                ? `<textarea class="hook-edit-textarea" data-field="stake.text">${this.escapeHtml(hook.stake.text)}</textarea>`
                                : `<p>${hook.stake.text}</p>`
                            }
                            <div class="hook-stake-type">${this.formatStakeType(hook.stake.type)}</div>
                        </div>
                    </div>

                    ${showEnvironment ? this.renderEnvironmentalHazard(hook.environmentalHazard, editable) : ''}

                    ${showLoot ? this.renderLootTeaser(hook.lootTeaser, editable) : ''}

                    ${showMoral && hook.moralDilemma ? this.renderMoralDilemma(hook.moralDilemma, editable) : ''}
                </div>

                <div class="hook-footer">
                    ${editable ? `
                        <button type="button" class="btn-hook btn-hook-primary" onclick="HookPanel.saveEdits('${hook.id}')">
                            Save Changes
                        </button>
                        <button type="button" class="btn-hook" onclick="HookPanel.cancelEdits()">
                            Cancel
                        </button>
                    ` : `
                        <button type="button" class="btn-hook-small" onclick="HookPanel.toggleEdit('${hook.id}')" title="Edit">
                            &#9998;
                        </button>
                        <button type="button" class="btn-hook-small" onclick="HookPanel.saveHook('${hook.id}')" title="Save">
                            &#128190;
                        </button>
                        <button type="button" class="btn-hook-small" onclick="HookPanel.copyHook('${hook.id}')" title="Copy">
                            &#128203;
                        </button>
                        <button type="button" class="btn-hook-small" onclick="HookPanel.sendToCanvas('${hook.id}')" title="Send to Canvas">
                            &#127912;
                        </button>
                    `}
                </div>
            </div>
        `;
    },

    /**
     * Render environmental hazard section
     */
    renderEnvironmentalHazard(hazard, editable = false) {
        if (!hazard) return '';

        return `
            <div class="hook-section hook-hazard">
                <div class="hook-section-icon">&#9888;</div>
                <div class="hook-section-content">
                    <div class="hook-section-title">Environmental Hazard</div>
                    ${editable
                        ? `<input type="text" class="hook-edit-input" data-field="environmentalHazard.name" value="${this.escapeHtml(hazard.name)}" placeholder="Hazard name" />`
                        : `<div class="hazard-name">${hazard.name}</div>`
                    }
                    ${editable
                        ? `<textarea class="hook-edit-textarea hook-edit-textarea-small" data-field="environmentalHazard.effect">${this.escapeHtml(hazard.effect)}</textarea>`
                        : `<div class="hazard-effect">${hazard.effect}</div>`
                    }
                </div>
            </div>
        `;
    },

    /**
     * Render loot teaser section
     */
    renderLootTeaser(lootTeaser, editable = false) {
        if (!lootTeaser && !editable) return '';

        return `
            <div class="hook-section hook-loot">
                <div class="hook-section-icon">&#128176;</div>
                <div class="hook-section-content">
                    <div class="hook-section-title">Potential Reward</div>
                    ${editable
                        ? `<textarea class="hook-edit-textarea hook-edit-textarea-small" data-field="lootTeaser" placeholder="Describe the potential reward...">${this.escapeHtml(lootTeaser || '')}</textarea>`
                        : `<p class="loot-teaser">${lootTeaser}</p>`
                    }
                </div>
            </div>
        `;
    },

    /**
     * Render moral dilemma section
     */
    renderMoralDilemma(dilemma, editable = false) {
        if (!dilemma) return '';

        return `
            <div class="hook-section hook-dilemma">
                <div class="hook-section-icon">&#9878;</div>
                <div class="hook-section-content">
                    <div class="hook-section-title">Moral Dilemma</div>
                    ${editable
                        ? `<textarea class="hook-edit-textarea hook-edit-textarea-small" data-field="moralDilemma.situation">${this.escapeHtml(dilemma.situation)}</textarea>`
                        : `<div class="dilemma-situation">${dilemma.situation}</div>`
                    }
                    <div class="dilemma-choice"><strong>The Choice:</strong> ${editable
                        ? `<textarea class="hook-edit-textarea hook-edit-textarea-small" data-field="moralDilemma.choice">${this.escapeHtml(dilemma.choice)}</textarea>`
                        : dilemma.choice
                    }</div>
                    <div class="dilemma-consequence"><strong>Either Way:</strong> ${editable
                        ? `<textarea class="hook-edit-textarea hook-edit-textarea-small" data-field="moralDilemma.consequence">${this.escapeHtml(dilemma.consequence)}</textarea>`
                        : dilemma.consequence
                    }</div>
                </div>
            </div>
        `;
    },

    /**
     * Format catalyst type for display
     */
    formatCatalystType(type) {
        const labels = {
            noticeBoard: 'Notice Board',
            dyingNpc: 'Dying NPC',
            strangeOmen: 'Strange Omen',
            personalConnection: 'Personal Connection',
            discovered: 'Discovery',
            supernatural: 'Supernatural',
            authority: 'Authority'
        };
        return labels[type] || type;
    },

    /**
     * Format stake type for display
     */
    formatStakeType(type) {
        const labels = {
            personal: 'Personal Stakes',
            regional: 'Regional Threat',
            cosmic: 'Cosmic Consequences',
            immediate: 'Immediate Danger'
        };
        return labels[type] || type;
    },

    /**
     * Format setting value for header
     */
    formatSetting(label, value) {
        if (!value || value === 'random') {
            return `<span class="setting-item">${label}: Random</span>`;
        }
        const formatted = value.charAt(0).toUpperCase() + value.slice(1).replace(/([A-Z])/g, ' $1');
        return `<span class="setting-item">${label}: ${formatted}</span>`;
    },

    /**
     * Convert hook to plain text for clipboard
     */
    toText(hook) {
        if (!hook) return '';

        let text = `═══════════════════════════════════════════════════\n`;
        text += `${hook.title.toUpperCase()}\n`;
        text += `═══════════════════════════════════════════════════\n\n`;

        text += `SETTING: ${hook.biome.name}\n`;
        text += `Atmosphere: ${hook.biome.atmosphere}\n`;
        text += `Location: ${hook.biome.landmark}\n\n`;

        text += `MONSTER TYPE: ${hook.monsterType.name}\n`;
        text += `${hook.monsterType.angle}\n\n`;

        text += `THE CATALYST:\n`;
        text += `${hook.catalyst.text}\n\n`;

        text += `OBJECTIVE (${hook.theme.name}):\n`;
        text += `${hook.theme.objective}\n\n`;

        text += `THE COMPLICATION:\n`;
        text += `${hook.complication.text}\n\n`;

        text += `IF THEY FAIL:\n`;
        text += `${hook.stake.text}\n\n`;

        if (hook.environmentalHazard) {
            text += `ENVIRONMENTAL HAZARD: ${hook.environmentalHazard.name}\n`;
            text += `${hook.environmentalHazard.effect}\n\n`;
        }

        if (hook.lootTeaser) {
            text += `POTENTIAL REWARD:\n`;
            text += `${hook.lootTeaser}\n\n`;
        }

        if (hook.moralDilemma) {
            text += `MORAL DILEMMA:\n`;
            text += `Situation: ${hook.moralDilemma.situation}\n`;
            text += `Choice: ${hook.moralDilemma.choice}\n`;
            text += `Consequence: ${hook.moralDilemma.consequence}\n\n`;
        }

        text += `═══════════════════════════════════════════════════\n`;

        return text;
    },

    /**
     * Convert batch to plain text
     */
    batchToText(result) {
        if (!result || !result.hooks) return '';

        let text = `QUEST HOOKS GENERATED\n`;
        text += `${'═'.repeat(50)}\n`;
        text += `Settings: Biome=${result.settings.biome}, Monster=${result.settings.monsterType}, Theme=${result.settings.theme}\n`;
        text += `Generated: ${result.hooks.length} hooks\n\n`;

        result.hooks.forEach((hook, index) => {
            text += `\n[HOOK #${index + 1}]\n`;
            text += this.toText(hook);
        });

        return text;
    },

    /**
     * Render compact card for library
     */
    renderCompact(hook) {
        if (!hook) return '';

        return `
            <div class="hook-card-compact" data-hook-id="${hook.id}">
                <div class="hook-compact-header">
                    <div class="hook-compact-title">${hook.title}</div>
                    <div class="hook-compact-tags">
                        <span class="tag-mini">${hook.biome.name}</span>
                        <span class="tag-mini">${hook.theme.name}</span>
                    </div>
                </div>
                <div class="hook-compact-actions">
                    <button type="button" class="btn-icon-small" onclick="HookPanel.loadHook('${hook.id}')" title="View">
                        &#128065;
                    </button>
                    <button type="button" class="btn-icon-small" onclick="HookPanel.deleteHook('${hook.id}')" title="Delete">
                        &#128465;
                    </button>
                </div>
            </div>
        `;
    },

    /**
     * Escape HTML special characters
     */
    escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    /**
     * Collect edited values from a hook card
     */
    collectEdits(cardElement) {
        const edits = {};

        cardElement.querySelectorAll('input[data-field], textarea[data-field]').forEach(el => {
            const field = el.dataset.field;
            const value = el.value;

            // Handle nested fields like "biome.atmosphere"
            if (field.includes('.')) {
                const [parent, child] = field.split('.');
                if (!edits[parent]) edits[parent] = {};
                edits[parent][child] = value;
            } else {
                edits[field] = value;
            }
        });

        return edits;
    }
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HookCardRenderer;
}
