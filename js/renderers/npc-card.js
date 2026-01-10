/**
 * NPC Card Renderer
 * Renders NPC data into HTML cards with editable fields
 */

const NPCCardRenderer = {
    /**
     * Render an NPC to HTML
     * @param {Object} npc - NPC data object
     * @param {Object} options - Rendering options
     * @param {boolean} options.editable - Whether fields should be editable
     * @param {boolean} options.expanded - Whether to show full details
     * @returns {string} HTML string
     */
    render(npc, options = {}) {
        if (!npc) return '';

        const showFullDetails = options.expanded !== false;
        const editable = options.editable === true;

        return `
            <div class="npc-card${editable ? ' npc-card-editing' : ''}" data-npc-id="${npc.id}" data-wealth="${npc.wealth}">
                <div class="npc-card-header">
                    ${editable
                        ? `<input type="text" class="npc-name-edit" data-field="name" value="${this.escapeHtml(npc.name)}" />`
                        : `<div class="npc-name">${npc.name}</div>`
                    }
                    <div class="npc-vocation ${npc.vocation.type}">${npc.raceName} ${npc.vocation.name}</div>
                    <div class="npc-header-meta">
                        <span class="npc-gender">${npc.genderDisplay}</span>
                        <span class="npc-wealth wealth-${npc.wealth}">${npc.wealthDisplay}</span>
                    </div>
                </div>

                <div class="npc-tapered-rule"></div>

                <div class="npc-card-body">
                    <!-- Physical Traits -->
                    <div class="npc-section npc-physical">
                        <div class="npc-property-line">
                            <span class="npc-property-name">Hair.</span>
                            ${editable
                                ? `<input type="text" class="trait-edit" data-field="hairColor" value="${this.escapeHtml(npc.hairColor)}" />`
                                : `<span class="trait-value">${npc.hairColor}</span>`
                            }
                        </div>
                        <div class="npc-property-line">
                            <span class="npc-property-name">Eyes.</span>
                            ${editable
                                ? `<input type="text" class="trait-edit" data-field="eyeColor" value="${this.escapeHtml(npc.eyeColor)}" />`
                                : `<span class="trait-value">${npc.eyeColor}</span>`
                            }
                        </div>
                        <div class="npc-property-line">
                            <span class="npc-property-name">Clothing.</span>
                            ${editable
                                ? `<textarea class="trait-edit trait-edit-wide" data-field="clothing">${this.escapeHtml(npc.clothing)}</textarea>`
                                : `<span class="trait-value">${npc.clothing}</span>`
                            }
                        </div>
                    </div>

                    <!-- Appearance -->
                    ${npc.appearance ? `
                    <div class="npc-section">
                        <div class="npc-section-title">Appearance</div>
                        ${editable
                            ? `<textarea class="npc-section-edit" data-field="appearance">${this.escapeHtml(npc.appearance)}</textarea>`
                            : `<div class="npc-section-content">${npc.appearance}</div>`
                        }
                    </div>
                    ` : ''}

                    <!-- Distinctive Feature -->
                    ${npc.distinctiveFeature ? `
                    <div class="npc-section">
                        <div class="npc-section-title">Distinctive Feature</div>
                        ${editable
                            ? `<textarea class="npc-section-edit" data-field="distinctiveFeature">${this.escapeHtml(npc.distinctiveFeature)}</textarea>`
                            : `<div class="npc-section-content">${npc.distinctiveFeature}</div>`
                        }
                    </div>
                    ` : ''}

                    <!-- Voice -->
                    <div class="npc-section">
                        <div class="npc-section-title">Voice</div>
                        ${editable
                            ? `<textarea class="npc-section-edit" data-field="voice">${this.escapeHtml(npc.voice)}</textarea>`
                            : `<div class="npc-section-content">${npc.voice}</div>`
                        }
                    </div>

                    <!-- Personality -->
                    <div class="npc-section">
                        <div class="npc-section-title">Personality</div>
                        ${editable
                            ? `<textarea class="npc-section-edit" data-field="personality">${this.escapeHtml(npc.personality)}</textarea>`
                            : `<div class="npc-section-content">${npc.personality}</div>`
                        }
                    </div>

                    <!-- Quirk -->
                    ${showFullDetails && npc.quirk ? `
                    <div class="npc-section">
                        <div class="npc-section-title">Quirk</div>
                        ${editable
                            ? `<textarea class="npc-section-edit" data-field="quirk">${this.escapeHtml(npc.quirk)}</textarea>`
                            : `<div class="npc-section-content">${npc.quirk}</div>`
                        }
                    </div>
                    ` : ''}

                    <!-- Background -->
                    ${showFullDetails && npc.background ? `
                    <div class="npc-section">
                        <div class="npc-section-title">Background</div>
                        ${editable
                            ? `<textarea class="npc-section-edit" data-field="background">${this.escapeHtml(npc.background)}</textarea>`
                            : `<div class="npc-section-content">${npc.background}</div>`
                        }
                    </div>
                    ` : ''}

                    <!-- Motivation -->
                    ${showFullDetails && npc.motivation ? `
                    <div class="npc-section">
                        <div class="npc-section-title">Motivation</div>
                        ${editable
                            ? `<textarea class="npc-section-edit" data-field="motivation">${this.escapeHtml(npc.motivation)}</textarea>`
                            : `<div class="npc-section-content">${npc.motivation}</div>`
                        }
                    </div>
                    ` : ''}

                    <!-- Improv Seeds -->
                    <div class="npc-section">
                        <div class="npc-section-title">Improv Seeds</div>
                        <div class="npc-keywords">
                            ${(npc.improvSeeds || npc.improvKeywords || []).map((word, index) =>
                                editable
                                    ? `<input type="text" class="npc-keyword-edit" data-field="improvSeeds" data-index="${index}" value="${this.escapeHtml(word)}" />`
                                    : `<span class="npc-keyword">${word}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>

                <div class="npc-tapered-rule reverse"></div>

                <div class="npc-card-footer">
                    ${editable ? `
                    <button type="button" class="btn-small btn-npc-primary" onclick="NPCPanel.saveEdits()">
                        Save Changes
                    </button>
                    <button type="button" class="btn-small btn-npc-secondary" onclick="NPCPanel.cancelEdits()">
                        Cancel
                    </button>
                    ` : `
                    <button type="button" class="btn-icon" onclick="NPCPanel.toggleEdit()" title="Edit NPC">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </button>
                    <button type="button" class="btn-icon" onclick="NPCPanel.saveNPC()" title="Save to Library">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </button>
                    <button type="button" class="btn-icon" onclick="NPCPanel.copyNPC()" title="Copy to Clipboard">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                    </button>
                    `}
                </div>
            </div>
        `;
    },

    /**
     * Render a compact NPC card for library view
     * @param {Object} npc - NPC data object
     * @returns {string} HTML string
     */
    renderCompact(npc) {
        if (!npc) return '';

        return `
            <div class="npc-card-compact" data-npc-id="${npc.id}" data-wealth="${npc.wealth || 'commoner'}">
                <div class="npc-compact-header">
                    <div class="npc-compact-name">${npc.name}</div>
                    <div class="npc-compact-info">
                        <span class="npc-compact-race">${npc.raceName}</span>
                        <span class="npc-compact-vocation">${npc.vocation?.name || npc.profession || 'Unknown'}</span>
                    </div>
                    <div class="npc-compact-meta">
                        <span class="npc-compact-gender">${npc.genderDisplay || ''}</span>
                        <span class="npc-compact-wealth wealth-${npc.wealth || 'commoner'}">${npc.wealthDisplay || ''}</span>
                    </div>
                </div>
                <div class="npc-compact-actions">
                    <button type="button" class="btn-compact" onclick="NPCPanel.loadNPC('${npc.id}')" title="Load">
                        View
                    </button>
                    <button type="button" class="btn-compact btn-compact-danger" onclick="NPCPanel.deleteNPC('${npc.id}')" title="Delete">
                        Delete
                    </button>
                </div>
            </div>
        `;
    },

    /**
     * Convert NPC to plain text format
     * @param {Object} npc - NPC data object
     * @returns {string} Plain text representation
     */
    toText(npc) {
        if (!npc) return '';

        let text = '';

        // Header
        text += `${npc.raceName} - ${npc.name} - ${npc.vocation?.name || npc.profession || 'Unknown'}\n`;
        text += `${npc.genderDisplay || ''} | ${npc.wealthDisplay || ''}\n`;
        text += `${'='.repeat(50)}\n\n`;

        // Physical Traits
        text += `PHYSICAL TRAITS\n`;
        text += `Hair: ${npc.hairColor}\n`;
        text += `Eyes: ${npc.eyeColor}\n`;
        text += `Clothing: ${npc.clothing}\n\n`;

        // Appearance
        if (npc.appearance) {
            text += `APPEARANCE\n${npc.appearance}\n\n`;
        }

        // Distinctive Feature
        if (npc.distinctiveFeature) {
            text += `DISTINCTIVE FEATURE\n${npc.distinctiveFeature}\n\n`;
        }

        // Voice
        text += `VOICE\n${npc.voice}\n\n`;

        // Personality
        text += `PERSONALITY\n${npc.personality}\n\n`;

        // Quirk
        if (npc.quirk) {
            text += `QUIRK\n${npc.quirk}\n\n`;
        }

        // Background
        if (npc.background) {
            text += `BACKGROUND\n${npc.background}\n\n`;
        }

        // Motivation
        if (npc.motivation) {
            text += `MOTIVATION\n${npc.motivation}\n\n`;
        }

        // Improv Seeds
        const seeds = npc.improvSeeds || npc.improvKeywords || [];
        text += `IMPROV SEEDS\n${seeds.join(', ')}\n`;

        return text;
    },

    /**
     * Escape HTML special characters
     * @param {string} str - String to escape
     * @returns {string} Escaped string
     */
    escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    /**
     * Collect edited values from the card
     * @param {HTMLElement} cardElement - The card DOM element
     * @returns {Object} Object with field names and new values
     */
    collectEdits(cardElement) {
        const edits = {};

        // Collect input fields
        cardElement.querySelectorAll('input[data-field], textarea[data-field]').forEach(el => {
            const field = el.dataset.field;
            const index = el.dataset.index;

            if (field === 'improvSeeds') {
                if (!edits.improvSeeds) edits.improvSeeds = [];
                edits.improvSeeds[parseInt(index)] = el.value;
            } else {
                edits[field] = el.value;
            }
        });

        return edits;
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NPCCardRenderer;
}
