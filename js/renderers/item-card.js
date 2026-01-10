/**
 * Magic Item Card Renderer
 * Renders magic items as HTML cards with optional editing
 */

const ItemCardRenderer = {
    /**
     * Render a batch of items
     */
    renderBatch(result, options = {}) {
        if (!result || !result.items) return '';

        const itemsHtml = result.items.map(item => this.renderSingle(item, {
            ...options,
            editable: options.editingItemId === item.id
        })).join('');

        return `
            <div class="item-batch">
                ${itemsHtml}
            </div>
        `;
    },

    /**
     * Render a single item card
     */
    renderSingle(item, options = {}) {
        const rarityColor = item.rarityData?.color || '#666';
        const isArtifact = item.rarity === 'artifact';
        const editable = options.editable === true;

        return `
            <div class="item-card" data-item-id="${item.id}" data-rarity="${item.rarity}">
                <div class="item-card-header" style="border-color: ${rarityColor}">
                    <div class="item-name-row">
                        ${editable
                            ? `<input type="text" class="item-name-edit" data-field="name" value="${this.escapeHtml(item.name)}" />`
                            : `<h3 class="item-name">${item.name}</h3>`
                        }
                        <div class="item-actions">
                            ${editable ? '' : `
                            <button class="item-action-btn" onclick="ItemPanel.toggleEdit('${item.id}')" title="Edit item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
                            </button>
                            <button class="item-action-btn" onclick="ItemPanel.copyItem('${item.id}')" title="Copy to clipboard">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                            </button>
                            <button class="item-action-btn" onclick="ItemPanel.saveItem('${item.id}')" title="Save to library">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </button>
                            `}
                        </div>
                    </div>
                    <div class="item-subtitle">
                        <span class="item-type">${item.subtype.name}</span>
                        <span class="item-rarity" style="color: ${rarityColor}">${item.rarityData?.name || item.rarity}</span>
                        <span class="item-biome">${item.biomeData?.name || item.biome}</span>
                    </div>
                </div>

                <div class="item-card-body">
                    ${this.renderAppearance(item, editable)}
                    ${this.renderMechanics(item, editable)}
                    ${isArtifact ? this.renderArtifactProperties(item, editable) : ''}
                    ${this.renderAttunement(item, editable)}
                    ${this.renderFlavorText(item, editable)}
                </div>

                ${editable ? `
                <div class="item-card-footer item-edit-footer">
                    <button type="button" class="btn btn-primary btn-small" onclick="ItemPanel.saveEdits('${item.id}')">
                        Save Changes
                    </button>
                    <button type="button" class="btn btn-secondary btn-small" onclick="ItemPanel.cancelEdits()">
                        Cancel
                    </button>
                </div>
                ` : ''}
            </div>
        `;
    },

    /**
     * Render appearance section
     */
    renderAppearance(item, editable = false) {
        return `
            <div class="item-section item-appearance">
                <h4 class="item-section-title">Appearance</h4>
                ${editable
                    ? `<textarea class="item-edit-textarea" data-field="appearance">${this.escapeHtml(item.appearance)}</textarea>`
                    : `<p class="item-appearance-text">${item.appearance}</p>`
                }
            </div>
        `;
    },

    /**
     * Render mechanics section
     */
    renderMechanics(item, editable = false) {
        if (!item.mechanics || item.mechanics.length === 0) return '';

        const mechanicsHtml = item.mechanics.map((mech, index) => {
            if (editable) {
                return `
                    <div class="item-mechanic-edit">
                        <input type="text" class="item-edit-input" data-field="mechanics" data-index="${index}" data-subfield="name" value="${this.escapeHtml(mech.name)}" placeholder="Name" />
                        <textarea class="item-edit-textarea item-edit-textarea-small" data-field="mechanics" data-index="${index}" data-subfield="description">${this.escapeHtml(mech.description)}</textarea>
                    </div>
                `;
            }
            return `
                <div class="item-mechanic ${mech.type === 'curse' ? 'item-mechanic-curse' : ''}">
                    <span class="item-mechanic-name">${mech.name}.</span>
                    <span class="item-mechanic-desc">${mech.description}</span>
                </div>
            `;
        }).join('');

        return `
            <div class="item-section item-mechanics">
                <h4 class="item-section-title">Mechanics</h4>
                ${mechanicsHtml}
            </div>
        `;
    },

    /**
     * Render artifact properties
     */
    renderArtifactProperties(item, editable = false) {
        if (!item.artifactProperties) return '';

        const { minorBeneficial, majorBeneficial, detrimental } = item.artifactProperties;

        const renderPropertyGroup = (props, groupName, groupClass, title) => {
            return `
                <div class="artifact-property-group ${groupClass}">
                    <h5>${title}</h5>
                    ${props.map((prop, index) => {
                        if (editable) {
                            return `
                                <div class="artifact-property-edit">
                                    <input type="text" class="item-edit-input" data-field="artifactProperties" data-group="${groupName}" data-index="${index}" data-subfield="name" value="${this.escapeHtml(prop.name)}" placeholder="Name" />
                                    <textarea class="item-edit-textarea item-edit-textarea-small" data-field="artifactProperties" data-group="${groupName}" data-index="${index}" data-subfield="desc">${this.escapeHtml(prop.desc)}</textarea>
                                </div>
                            `;
                        }
                        return `
                            <div class="artifact-property ${groupClass.includes('detrimental') ? 'artifact-property-negative' : ''}">
                                <span class="property-name">${prop.name}.</span>
                                <span class="property-desc">${prop.desc}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        };

        return `
            <div class="item-section item-artifact-properties">
                <h4 class="item-section-title">Artifact Properties</h4>
                ${renderPropertyGroup(minorBeneficial, 'minorBeneficial', 'artifact-minor-beneficial', 'Minor Beneficial Properties')}
                ${renderPropertyGroup(majorBeneficial, 'majorBeneficial', 'artifact-major-beneficial', 'Major Beneficial Property')}
                ${renderPropertyGroup(detrimental, 'detrimental', 'artifact-detrimental', 'Detrimental Property')}
            </div>
        `;
    },

    /**
     * Render attunement section
     */
    renderAttunement(item, editable = false) {
        if (!item.attunement) return '';

        const attunementClass = item.attunement.required ? 'attunement-required' : 'attunement-none';

        return `
            <div class="item-section item-attunement ${attunementClass}">
                <span class="attunement-label">Attunement:</span>
                ${editable
                    ? `<input type="text" class="item-edit-input item-edit-inline" data-field="attunement.requirement" value="${this.escapeHtml(item.attunement.requirement)}" />`
                    : `<span class="attunement-value">${item.attunement.requirement}</span>`
                }
            </div>
        `;
    },

    /**
     * Render flavor text
     */
    renderFlavorText(item, editable = false) {
        if (!item.flavorText && !editable) return '';

        return `
            <div class="item-section item-flavor">
                ${editable
                    ? `<textarea class="item-edit-textarea item-edit-textarea-small item-flavor-edit" data-field="flavorText" placeholder="Flavor text...">${this.escapeHtml(item.flavorText || '')}</textarea>`
                    : `<p class="item-flavor-text">"${item.flavorText}"</p>`
                }
            </div>
        `;
    },

    /**
     * Render compact card for library
     */
    renderCompact(item) {
        const rarityColor = item.rarityData?.color || '#666';

        return `
            <div class="item-card-compact" data-item-id="${item.id}">
                <div class="item-compact-header" style="border-left-color: ${rarityColor}">
                    <span class="item-compact-name">${item.name}</span>
                    <span class="item-compact-type">${item.subtype?.name || 'Item'}</span>
                </div>
                <div class="item-compact-meta">
                    <span class="item-compact-rarity" style="color: ${rarityColor}">${item.rarityData?.name || item.rarity}</span>
                    <span class="item-compact-biome">${item.biomeData?.name || item.biome}</span>
                </div>
                <div class="item-compact-actions">
                    <button class="item-compact-btn" onclick="ItemPanel.loadItem('${item.id}')" title="View">View</button>
                    <button class="item-compact-btn item-compact-btn-danger" onclick="ItemPanel.deleteItem('${item.id}')" title="Delete">Delete</button>
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
     * Collect edited values from the card
     */
    collectEdits(cardElement) {
        const edits = {};

        // Collect simple fields
        cardElement.querySelectorAll('input[data-field], textarea[data-field]').forEach(el => {
            const field = el.dataset.field;
            const index = el.dataset.index;
            const subfield = el.dataset.subfield;
            const group = el.dataset.group;

            if (field === 'mechanics' && index !== undefined) {
                if (!edits.mechanics) edits.mechanics = [];
                if (!edits.mechanics[index]) edits.mechanics[index] = {};
                edits.mechanics[index][subfield] = el.value;
            } else if (field === 'artifactProperties' && group && index !== undefined) {
                if (!edits.artifactProperties) edits.artifactProperties = {};
                if (!edits.artifactProperties[group]) edits.artifactProperties[group] = [];
                if (!edits.artifactProperties[group][index]) edits.artifactProperties[group][index] = {};
                edits.artifactProperties[group][index][subfield] = el.value;
            } else if (field === 'attunement.requirement') {
                if (!edits.attunement) edits.attunement = {};
                edits.attunement.requirement = el.value;
            } else {
                edits[field] = el.value;
            }
        });

        return edits;
    },

    /**
     * Convert item to plain text
     */
    toText(item) {
        let text = '';

        text += `${item.name}\n`;
        text += `${item.subtype.name} (${item.rarityData?.name || item.rarity})\n`;
        text += `Biome: ${item.biomeData?.name || item.biome}\n`;
        text += '\n';

        text += `APPEARANCE\n`;
        text += `${item.appearance}\n`;
        text += '\n';

        if (item.mechanics && item.mechanics.length > 0) {
            text += `MECHANICS\n`;
            item.mechanics.forEach(mech => {
                text += `${mech.name}: ${mech.description}\n`;
            });
            text += '\n';
        }

        if (item.artifactProperties) {
            text += `ARTIFACT PROPERTIES\n`;
            text += `Minor Beneficial:\n`;
            item.artifactProperties.minorBeneficial.forEach(prop => {
                text += `  - ${prop.name}: ${prop.desc}\n`;
            });
            text += `Major Beneficial:\n`;
            item.artifactProperties.majorBeneficial.forEach(prop => {
                text += `  - ${prop.name}: ${prop.desc}\n`;
            });
            text += `Detrimental:\n`;
            item.artifactProperties.detrimental.forEach(prop => {
                text += `  - ${prop.name}: ${prop.desc}\n`;
            });
            text += '\n';
        }

        if (item.attunement) {
            text += `ATTUNEMENT: ${item.attunement.requirement}\n`;
            text += '\n';
        }

        if (item.flavorText) {
            text += `"${item.flavorText}"\n`;
        }

        return text;
    },

    /**
     * Convert batch to plain text
     */
    batchToText(result) {
        if (!result || !result.items) return '';

        return result.items.map(item => this.toText(item)).join('\n' + '='.repeat(50) + '\n\n');
    }
};
