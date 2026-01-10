/**
 * Loot Card Renderer
 * Renders generated loot into clean, readable HTML
 */

const LootCardRenderer = {
    /**
     * Render loot to HTML
     * @param {Object} loot - Generated loot object
     * @param {Object} options - Rendering options
     * @returns {string} HTML string
     */
    render(loot, options = {}) {
        if (!loot) return '';

        const showTags = options.showTags !== false;
        const showValues = options.showValues !== false;
        const editable = options.editable === true;

        return `
            <div class="loot-card ${editable ? 'loot-card-editing' : ''}" data-loot-id="${loot.id}">
                <div class="loot-header">
                    ${editable
                        ? `<input type="text" class="loot-name-edit" data-field="hoardName" value="${this.escapeHtml(loot.hoardName)}" />`
                        : `<div class="loot-type">${loot.hoardName}</div>`
                    }
                    <div class="loot-meta">
                        Party Level ${loot.partyLevel} | ${loot.partySize} Players
                    </div>
                    ${editable
                        ? `<textarea class="loot-edit-textarea loot-edit-textarea-small" data-field="hoardDescription">${this.escapeHtml(loot.hoardDescription)}</textarea>`
                        : `<div class="loot-description">${loot.hoardDescription}</div>`
                    }
                </div>

                <div class="loot-body">
                    ${this.renderGold(loot.gold, showValues, editable)}
                    ${this.renderGems(loot.gems, showValues, editable)}
                    ${this.renderArtObjects(loot.artObjects, showValues, editable)}
                    ${this.renderMundaneItems(loot.mundaneItems, showTags, editable)}
                    ${this.renderMagicItems(loot.magicItems, loot.consumables, showTags, showValues, editable)}
                </div>

                <div class="loot-footer">
                    <div class="loot-total">
                        <span class="total-label">Estimated Total Value:</span>
                        <span class="total-value">${this.formatGold(loot.totalValue)}</span>
                    </div>
                    <div class="loot-actions">
                        ${editable ? `
                            <button type="button" class="btn-loot btn-loot-primary" onclick="LootPanel.saveEdits()">
                                Save Changes
                            </button>
                            <button type="button" class="btn-loot" onclick="LootPanel.cancelEdits()">
                                Cancel
                            </button>
                        ` : `
                            <button type="button" class="btn-loot" onclick="LootPanel.toggleEdit()" title="Edit">
                                &#9998; Edit
                            </button>
                            <button type="button" class="btn-loot" onclick="LootPanel.saveLoot()" title="Save to Library">
                                &#128190; Save
                            </button>
                            <button type="button" class="btn-loot" onclick="LootPanel.copyLoot()" title="Copy to Clipboard">
                                &#128203; Copy
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * Render gold section
     */
    renderGold(gold, showValues, editable = false) {
        if (!gold || gold.total === 0) return '';

        const coins = gold.coins;

        if (editable) {
            return `
                <div class="loot-section">
                    <h3 class="loot-section-title">&#128176; Currency</h3>
                    <div class="loot-item gold-item gold-item-edit">
                        <div class="gold-coins-edit">
                            <label>PP: <input type="number" class="loot-edit-input loot-edit-coin" data-field="gold.coins.pp" value="${coins.pp || 0}" min="0" /></label>
                            <label>GP: <input type="number" class="loot-edit-input loot-edit-coin" data-field="gold.coins.gp" value="${coins.gp || 0}" min="0" /></label>
                            <label>SP: <input type="number" class="loot-edit-input loot-edit-coin" data-field="gold.coins.sp" value="${coins.sp || 0}" min="0" /></label>
                            <label>CP: <input type="number" class="loot-edit-input loot-edit-coin" data-field="gold.coins.cp" value="${coins.cp || 0}" min="0" /></label>
                        </div>
                        <input type="text" class="loot-edit-input" data-field="gold.description" value="${this.escapeHtml(gold.description)}" placeholder="Description..." />
                    </div>
                </div>
            `;
        }

        let coinDisplay = '';
        if (coins.pp && coins.pp > 0) coinDisplay += `<span class="coin pp">${coins.pp} pp</span>`;
        if (coins.gp && coins.gp > 0) coinDisplay += `<span class="coin gp">${coins.gp} gp</span>`;
        if (coins.sp && coins.sp > 0) coinDisplay += `<span class="coin sp">${coins.sp} sp</span>`;
        if (coins.cp && coins.cp > 0) coinDisplay += `<span class="coin cp">${coins.cp} cp</span>`;

        return `
            <div class="loot-section">
                <h3 class="loot-section-title">&#128176; Currency</h3>
                <div class="loot-item gold-item">
                    <div class="gold-coins">${coinDisplay}</div>
                    <div class="gold-flavor">${gold.description}</div>
                </div>
            </div>
        `;
    },

    /**
     * Render gems section
     */
    renderGems(gems, showValues, editable = false) {
        if (!gems || gems.length === 0) return '';

        const gemItems = gems.map((gem, idx) => {
            if (editable) {
                return `
                    <div class="loot-item gem-item gem-item-edit">
                        <input type="text" class="loot-edit-input" data-field="gems" data-index="${idx}" data-subfield="name" value="${this.escapeHtml(gem.name)}" placeholder="Gem name" />
                        <input type="text" class="loot-edit-input" data-field="gems" data-index="${idx}" data-subfield="description" value="${this.escapeHtml(gem.description)}" placeholder="Description" />
                        <input type="number" class="loot-edit-input loot-edit-value" data-field="gems" data-index="${idx}" data-subfield="value" value="${gem.value}" min="0" /> gp
                    </div>
                `;
            }
            return `
                <div class="loot-item gem-item">
                    <span class="item-name">${gem.name}</span>
                    <span class="item-desc">${gem.description}</span>
                    ${showValues ? `<span class="item-value">${gem.value} gp</span>` : ''}
                </div>
            `;
        }).join('');

        return `
            <div class="loot-section">
                <h3 class="loot-section-title">&#128142; Gems</h3>
                ${gemItems}
            </div>
        `;
    },

    /**
     * Render art objects section
     */
    renderArtObjects(artObjects, showValues, editable = false) {
        if (!artObjects || artObjects.length === 0) return '';

        const artItems = artObjects.map((art, idx) => {
            if (editable) {
                return `
                    <div class="loot-item art-item art-item-edit">
                        <input type="text" class="loot-edit-input" data-field="artObjects" data-index="${idx}" data-subfield="name" value="${this.escapeHtml(art.name)}" placeholder="Art object name" />
                        <input type="number" class="loot-edit-input loot-edit-value" data-field="artObjects" data-index="${idx}" data-subfield="value" value="${art.value}" min="0" /> gp
                    </div>
                `;
            }
            return `
                <div class="loot-item art-item">
                    <span class="item-name">${art.name}</span>
                    ${showValues ? `<span class="item-value">${art.value} gp</span>` : ''}
                </div>
            `;
        }).join('');

        return `
            <div class="loot-section">
                <h3 class="loot-section-title">&#127912; Art Objects</h3>
                ${artItems}
            </div>
        `;
    },

    /**
     * Render mundane items section
     */
    renderMundaneItems(items, showTags, editable = false) {
        if (!items || items.length === 0) return '';

        const mundaneItems = items.map((item, idx) => {
            if (editable) {
                return `
                    <div class="loot-item mundane-item mundane-item-edit">
                        <input type="text" class="loot-edit-input" data-field="mundaneItems" data-index="${idx}" data-subfield="name" value="${this.escapeHtml(item.name)}" placeholder="Item name" />
                        <input type="text" class="loot-edit-input" data-field="mundaneItems" data-index="${idx}" data-subfield="hook" value="${this.escapeHtml(item.hook || '')}" placeholder="Hook (optional)" />
                    </div>
                `;
            }
            return `
                <div class="loot-item mundane-item">
                    <span class="item-name">${item.name}</span>
                    ${item.hook ? `<span class="item-hook">${item.hook}</span>` : ''}
                    ${showTags && item.tag ? `<span class="item-tag">${item.tag}</span>` : ''}
                </div>
            `;
        }).join('');

        return `
            <div class="loot-section">
                <h3 class="loot-section-title">&#128230; Curiosities & Trinkets</h3>
                ${mundaneItems}
            </div>
        `;
    },

    /**
     * Render magic items (permanent and consumable)
     */
    renderMagicItems(magicItems, consumables, showTags, showValues, editable = false) {
        const allMagic = [
            ...(consumables || []).map(c => ({ ...c, isConsumable: true, sourceArray: 'consumables' })),
            ...(magicItems || []).map(m => ({ ...m, isConsumable: false, sourceArray: 'magicItems' }))
        ];

        if (allMagic.length === 0) return '';

        const items = allMagic.map((item, idx) => {
            const rarityClass = `rarity-${item.rarity}`;

            if (editable) {
                return `
                    <div class="loot-item magic-item magic-item-edit ${rarityClass}">
                        <input type="text" class="loot-edit-input" data-field="${item.sourceArray}" data-index="${idx}" data-subfield="name" value="${this.escapeHtml(item.name)}" placeholder="Item name" />
                        <div class="magic-item-edit-row">
                            <input type="text" class="loot-edit-input" data-field="${item.sourceArray}" data-index="${idx}" data-subfield="type" value="${this.escapeHtml(item.type || '')}" placeholder="Type" />
                            <select class="loot-edit-select" data-field="${item.sourceArray}" data-index="${idx}" data-subfield="rarity">
                                <option value="common" ${item.rarity === 'common' ? 'selected' : ''}>Common</option>
                                <option value="uncommon" ${item.rarity === 'uncommon' ? 'selected' : ''}>Uncommon</option>
                                <option value="rare" ${item.rarity === 'rare' ? 'selected' : ''}>Rare</option>
                                <option value="veryRare" ${item.rarity === 'veryRare' ? 'selected' : ''}>Very Rare</option>
                                <option value="legendary" ${item.rarity === 'legendary' ? 'selected' : ''}>Legendary</option>
                            </select>
                        </div>
                        <textarea class="loot-edit-textarea" data-field="${item.sourceArray}" data-index="${idx}" data-subfield="description">${this.escapeHtml(item.description)}</textarea>
                    </div>
                `;
            }

            const attunementBadge = item.attunement
                ? `<span class="attunement-badge" title="Requires Attunement${typeof item.attunement === 'string' ? ` (${item.attunement})` : ''}">&#9733;</span>`
                : '';
            const consumableBadge = item.isConsumable
                ? '<span class="consumable-badge" title="Consumable">&#9889;</span>'
                : '';

            return `
                <div class="loot-item magic-item ${rarityClass}">
                    <div class="magic-item-header">
                        <span class="item-name">${item.name}</span>
                        <span class="item-badges">
                            ${attunementBadge}
                            ${consumableBadge}
                        </span>
                    </div>
                    <div class="magic-item-details">
                        <span class="item-type">${item.type || 'Wondrous Item'}</span>
                        <span class="item-rarity">${this.formatRarity(item.rarity)}</span>
                    </div>
                    <div class="item-desc">${item.description}</div>
                    ${showTags && item.tag ? `<span class="item-tag">${item.tag}</span>` : ''}
                </div>
            `;
        }).join('');

        return `
            <div class="loot-section">
                <h3 class="loot-section-title">&#10024; Magic Items</h3>
                ${items}
            </div>
        `;
    },

    /**
     * Format gold value
     */
    formatGold(value) {
        if (value >= 1000) {
            return `${(value / 1000).toFixed(1)}k gp`;
        }
        return `${Math.round(value)} gp`;
    },

    /**
     * Format rarity display
     */
    formatRarity(rarity) {
        const map = {
            common: 'Common',
            uncommon: 'Uncommon',
            rare: 'Rare',
            veryRare: 'Very Rare',
            legendary: 'Legendary'
        };
        return map[rarity] || rarity;
    },

    /**
     * Convert loot to plain text
     */
    toText(loot) {
        if (!loot) return '';

        let text = `${loot.hoardName}\n`;
        text += `Party Level ${loot.partyLevel} | ${loot.partySize} Players\n`;
        text += `${'='.repeat(50)}\n\n`;

        // Gold
        if (loot.gold && loot.gold.total > 0) {
            text += `CURRENCY\n`;
            const c = loot.gold.coins;
            const parts = [];
            if (c.pp) parts.push(`${c.pp} pp`);
            if (c.gp) parts.push(`${c.gp} gp`);
            if (c.sp) parts.push(`${c.sp} sp`);
            if (c.cp) parts.push(`${c.cp} cp`);
            text += `${parts.join(', ')}\n`;
            text += `(${loot.gold.description})\n\n`;
        }

        // Gems
        if (loot.gems && loot.gems.length > 0) {
            text += `GEMS\n`;
            loot.gems.forEach(g => {
                text += `- ${g.name} (${g.value} gp) - ${g.description}\n`;
            });
            text += '\n';
        }

        // Art
        if (loot.artObjects && loot.artObjects.length > 0) {
            text += `ART OBJECTS\n`;
            loot.artObjects.forEach(a => {
                text += `- ${a.name} (${a.value} gp)\n`;
            });
            text += '\n';
        }

        // Mundane
        if (loot.mundaneItems && loot.mundaneItems.length > 0) {
            text += `CURIOSITIES & TRINKETS\n`;
            loot.mundaneItems.forEach(m => {
                text += `- ${m.name}\n`;
                if (m.hook) text += `  Hook: ${m.hook}\n`;
            });
            text += '\n';
        }

        // Magic items
        const allMagic = [...(loot.consumables || []), ...(loot.magicItems || [])];
        if (allMagic.length > 0) {
            text += `MAGIC ITEMS\n`;
            allMagic.forEach(i => {
                const attune = i.attunement ? ' (requires attunement)' : '';
                const consume = i.consumable ? ' [consumable]' : '';
                text += `- ${i.name} (${this.formatRarity(i.rarity)})${attune}${consume}\n`;
                text += `  ${i.description}\n`;
            });
            text += '\n';
        }

        text += `${'='.repeat(50)}\n`;
        text += `Estimated Total Value: ${this.formatGold(loot.totalValue)}\n`;

        return text;
    },

    /**
     * Render compact card for library
     */
    renderCompact(loot) {
        if (!loot) return '';

        const magicCount = (loot.magicItems?.length || 0) + (loot.consumables?.length || 0);
        const summary = [];
        if (loot.gold?.total > 0) summary.push(`${this.formatGold(loot.gold.total)}`);
        if (magicCount > 0) summary.push(`${magicCount} magic items`);
        if (loot.gems?.length > 0) summary.push(`${loot.gems.length} gems`);

        return `
            <div class="loot-card-compact" data-loot-id="${loot.id}">
                <div class="loot-compact-header">
                    <div class="loot-compact-name">${loot.hoardName}</div>
                    <div class="loot-compact-info">Lvl ${loot.partyLevel} | ${summary.join(', ')}</div>
                </div>
                <div class="loot-compact-actions">
                    <button type="button" class="btn-icon-small" onclick="LootPanel.loadLoot('${loot.id}')" title="Load">
                        &#128065;
                    </button>
                    <button type="button" class="btn-icon-small" onclick="LootPanel.deleteLoot('${loot.id}')" title="Delete">
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
     * Collect edited values from a loot card
     */
    collectEdits(cardElement) {
        const edits = {};

        cardElement.querySelectorAll('input[data-field], textarea[data-field], select[data-field]').forEach(el => {
            const field = el.dataset.field;
            const index = el.dataset.index;
            const subfield = el.dataset.subfield;
            let value = el.value;

            // Convert to number for number inputs
            if (el.type === 'number') {
                value = parseInt(value) || 0;
            }

            // Handle array items (gems, artObjects, mundaneItems, magicItems, consumables)
            if (index !== undefined && subfield) {
                if (!edits[field]) edits[field] = [];
                if (!edits[field][index]) edits[field][index] = {};
                edits[field][index][subfield] = value;
            }
            // Handle nested fields like "gold.coins.gp"
            else if (field.includes('.')) {
                const parts = field.split('.');
                let obj = edits;
                for (let i = 0; i < parts.length - 1; i++) {
                    if (!obj[parts[i]]) obj[parts[i]] = {};
                    obj = obj[parts[i]];
                }
                obj[parts[parts.length - 1]] = value;
            }
            // Handle simple fields
            else {
                edits[field] = value;
            }
        });

        return edits;
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LootCardRenderer;
}
