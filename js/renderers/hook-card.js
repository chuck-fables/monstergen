/**
 * Hook Card Renderer
 * Renders generated quest hooks into clean, readable HTML
 * D&D Parchment Theme
 */

const HookCardRenderer = {
    /**
     * SVG Icons for the card
     */
    icons: {
        save: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
        copy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
        edit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
        canvas: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
        view: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
        delete: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
        setting: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
        lightbulb: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
        bolt: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
        target: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
        warning: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
        skull: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="8"/><path d="M12 18v4"/><path d="M8 22h8"/><circle cx="9" cy="9" r="1.5" fill="currentColor"/><circle cx="15" cy="9" r="1.5" fill="currentColor"/><path d="M9 14h6"/></svg>',
        flame: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
        coins: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="M16.71 13.88l.7.71-2.82 2.82"/></svg>',
        scale: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>',
        scroll: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/></svg>'
    },

    /**
     * Render a batch of hooks to HTML
     * @param {Object} result - Generation result from HookGenerator
     * @param {Object} options - Rendering options
     * @returns {string} HTML string
     */
    renderBatch(result, options = {}) {
        if (!result || !result.hooks || result.hooks.length === 0) {
            return `<div class="hook-empty-state">
                <div class="icon">${this.icons.scroll}</div>
                <h3>No Hooks Generated</h3>
                <p>Generate quest hooks to see them here</p>
            </div>`;
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
                        ${this.icons.save}
                    </button>
                    <button type="button" class="btn-hook" onclick="HookPanel.copyAll()" title="Copy All">
                        ${this.icons.copy}
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

                <div class="hook-tapered-rule"></div>

                <div class="hook-body">
                    <!-- Setting & Atmosphere -->
                    <div class="hook-section hook-setting">
                        <div class="hook-section-icon">${this.icons.setting}</div>
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
                        <div class="hook-section-icon">${this.icons.lightbulb}</div>
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
                        <div class="hook-section-icon">${this.icons.bolt}</div>
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
                        <div class="hook-section-icon">${this.icons.target}</div>
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
                        <div class="hook-section-icon">${this.icons.warning}</div>
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
                        <div class="hook-section-icon">${this.icons.skull}</div>
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

                <div class="hook-tapered-rule reverse"></div>

                <div class="hook-footer">
                    ${editable ? `
                        <button type="button" class="btn-hook btn-hook-text btn-hook-primary" onclick="HookPanel.saveEdits('${hook.id}')">
                            Save Changes
                        </button>
                        <button type="button" class="btn-hook btn-hook-text" onclick="HookPanel.cancelEdits()">
                            Cancel
                        </button>
                    ` : `
                        <button type="button" class="btn-hook-small" onclick="HookPanel.toggleEdit('${hook.id}')" title="Edit">
                            ${this.icons.edit}
                        </button>
                        <button type="button" class="btn-hook-small" onclick="HookPanel.saveHook('${hook.id}')" title="Save">
                            ${this.icons.save}
                        </button>
                        <button type="button" class="btn-hook-small" onclick="HookPanel.copyHook('${hook.id}')" title="Copy">
                            ${this.icons.copy}
                        </button>
                        <button type="button" class="btn-hook-small" onclick="HookPanel.sendToCanvas('${hook.id}')" title="Send to Canvas">
                            ${this.icons.canvas}
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
                <div class="hook-section-icon">${this.icons.flame}</div>
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
                <div class="hook-section-icon">${this.icons.coins}</div>
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
                <div class="hook-section-icon">${this.icons.scale}</div>
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

        let text = `${'='.repeat(50)}\n`;
        text += `${hook.title.toUpperCase()}\n`;
        text += `${'='.repeat(50)}\n\n`;

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

        text += `${'='.repeat(50)}\n`;

        return text;
    },

    /**
     * Convert batch to plain text
     */
    batchToText(result) {
        if (!result || !result.hooks) return '';

        let text = `QUEST HOOKS GENERATED\n`;
        text += `${'='.repeat(50)}\n`;
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
                    <button type="button" class="btn-hook-small" onclick="HookPanel.loadHook('${hook.id}')" title="View">
                        ${this.icons.view}
                    </button>
                    <button type="button" class="btn-hook-small" onclick="HookPanel.deleteHook('${hook.id}')" title="Delete">
                        ${this.icons.delete}
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
