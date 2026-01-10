/**
 * Location Card Renderer
 * Renders generated locations into clean, readable HTML
 */

const LocationCardRenderer = {
    /**
     * Render a batch of locations to HTML
     */
    renderBatch(result, options = {}) {
        if (!result || !result.locations || result.locations.length === 0) {
            return '<div class="location-empty-state">No locations generated</div>';
        }

        const header = `
            <div class="location-batch-header">
                <div class="location-batch-meta">
                    <span class="location-count">${result.locations.length} Location${result.locations.length > 1 ? 's' : ''}</span>
                    <span class="location-settings">
                        Scale: ${this.formatSetting(result.settings.scale)} |
                        Wealth: ${this.formatSetting(result.settings.wealthTier)}
                    </span>
                </div>
                <div class="location-batch-actions">
                    <button type="button" class="btn-location" onclick="LocationPanel.saveAll()" title="Save All">
                        &#128190; Save All
                    </button>
                    <button type="button" class="btn-location" onclick="LocationPanel.copyAll()" title="Copy All">
                        &#128203; Copy All
                    </button>
                </div>
            </div>
        `;

        const locations = result.locations.map((loc, index) =>
            this.renderSingle(loc, {
                ...options,
                index: index + 1,
                editable: options.editingLocationId === loc.id
            })
        ).join('');

        return `
            <div class="location-batch" data-batch-id="${result.id}">
                ${header}
                <div class="location-list">
                    ${locations}
                </div>
            </div>
        `;
    },

    /**
     * Render a single location to HTML
     */
    renderSingle(location, options = {}) {
        if (!location) return '';

        switch (location.type) {
            case 'settlement':
                return this.renderSettlement(location, options);
            case 'district':
                return this.renderDistrict(location, options);
            case 'shop':
                return this.renderShop(location, options);
            case 'wilderness':
                return this.renderWilderness(location, options);
            default:
                return this.renderShop(location, options);
        }
    },

    /**
     * Render a settlement
     */
    renderSettlement(loc, options = {}) {
        const index = options.index || '';
        const economicClass = this.getEconomicClass(loc.economicState?.id);

        return `
            <div class="location-card location-settlement" data-location-id="${loc.id}">
                <div class="location-header settlement-header">
                    ${index ? `<div class="location-number">#${index}</div>` : ''}
                    <h3 class="location-name">${loc.name}</h3>
                    <div class="location-type">${loc.scale}</div>
                    <div class="location-tags">
                        <span class="location-tag tag-population">Pop: ${loc.population.toLocaleString()}</span>
                        <span class="location-tag tag-wealth">${loc.wealthTier}</span>
                        <span class="location-tag tag-economic ${economicClass}">${loc.economicState?.name || 'Stable'}</span>
                    </div>
                </div>

                <div class="location-body">
                    <!-- Dynamic Entry -->
                    <div class="location-section location-entry">
                        <div class="section-icon">&#128065;</div>
                        <div class="section-content">
                            <div class="section-title">First Impression</div>
                            <p class="entry-text">${loc.dynamicEntry}</p>
                        </div>
                    </div>

                    <!-- Description -->
                    <div class="location-section">
                        <div class="section-icon">&#127968;</div>
                        <div class="section-content">
                            <div class="section-title">Overview</div>
                            <p>${loc.description}</p>
                            <div class="features-list">
                                ${loc.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- Districts -->
                    ${loc.districts && loc.districts.length > 0 ? `
                    <div class="location-section">
                        <div class="section-icon">&#127961;</div>
                        <div class="section-content">
                            <div class="section-title">Districts</div>
                            <div class="districts-grid">
                                ${loc.districts.map(d => `
                                    <div class="district-mini">
                                        <div class="district-mini-name">${d.name}</div>
                                        <div class="district-mini-info">${d.primaryIndustry} | ${d.securityLevel}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    ` : ''}

                    <!-- Hook NPC -->
                    ${this.renderHookNPC(loc.hookNPC)}

                    <!-- Unique Feature -->
                    <div class="location-section location-unique">
                        <div class="section-icon">&#10024;</div>
                        <div class="section-content">
                            <div class="section-title">Unique Feature</div>
                            <p>${loc.uniqueFeature}</p>
                        </div>
                    </div>

                    <!-- Rumor -->
                    ${this.renderRumor(loc.rumor)}
                </div>

                ${this.renderFooter(loc.id)}
            </div>
        `;
    },

    /**
     * Render a district
     */
    renderDistrict(loc, options = {}) {
        const index = options.index || '';
        const economicClass = this.getEconomicClass(loc.economicState?.id);

        return `
            <div class="location-card location-district" data-location-id="${loc.id}">
                <div class="location-header district-header">
                    ${index ? `<div class="location-number">#${index}</div>` : ''}
                    <h3 class="location-name">${loc.name}</h3>
                    <div class="location-type">${loc.districtType}</div>
                    <div class="location-tags">
                        <span class="location-tag tag-security">${loc.securityLevel} Security</span>
                        <span class="location-tag tag-wealth">${loc.wealthTier}</span>
                        <span class="location-tag tag-economic ${economicClass}">${loc.economicState?.name || 'Stable'}</span>
                    </div>
                </div>

                <div class="location-body">
                    <!-- Dynamic Entry -->
                    <div class="location-section location-entry">
                        <div class="section-icon">&#128065;</div>
                        <div class="section-content">
                            <div class="section-title">First Impression</div>
                            <p class="entry-text">${loc.dynamicEntry}</p>
                        </div>
                    </div>

                    <!-- Vibe & Industry -->
                    <div class="location-section">
                        <div class="section-icon">&#127752;</div>
                        <div class="section-content">
                            <div class="section-title">The Vibe</div>
                            <p class="vibe-text">"${loc.vibe}"</p>
                            <div class="industry-tag">Primary Industry: <strong>${loc.primaryIndustry}</strong></div>
                        </div>
                    </div>

                    <!-- Sensory Description -->
                    ${this.renderSensory(loc.sensory)}

                    <!-- Notable Locations -->
                    ${loc.notableLocations && loc.notableLocations.length > 0 ? `
                    <div class="location-section">
                        <div class="section-icon">&#128205;</div>
                        <div class="section-content">
                            <div class="section-title">Notable Locations</div>
                            <ul class="notable-list">
                                ${loc.notableLocations.map(l => `
                                    <li><strong>${l.name}</strong> <span class="notable-type">(${l.type})</span></li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                    ` : ''}

                    <!-- Hook NPC -->
                    ${this.renderHookNPC(loc.hookNPC)}

                    <!-- Unique Feature -->
                    <div class="location-section location-unique">
                        <div class="section-icon">&#10024;</div>
                        <div class="section-content">
                            <div class="section-title">Unique Feature</div>
                            <p>${loc.uniqueFeature}</p>
                        </div>
                    </div>

                    <!-- Rumor -->
                    ${this.renderRumor(loc.rumor)}
                </div>

                ${this.renderFooter(loc.id)}
            </div>
        `;
    },

    /**
     * Render a shop
     */
    renderShop(loc, options = {}) {
        const index = options.index || '';
        const editable = options.editable === true;

        return `
            <div class="location-card location-shop ${editable ? 'location-card-editing' : ''}" data-location-id="${loc.id}">
                <div class="location-header shop-header">
                    ${index ? `<div class="location-number">#${index}</div>` : ''}
                    ${editable
                        ? `<input type="text" class="location-name-edit" data-field="name" value="${this.escapeHtml(loc.name)}" />`
                        : `<h3 class="location-name">${loc.name}</h3>`
                    }
                    <div class="location-type">${loc.shopType}</div>
                    <div class="location-tags">
                        <span class="location-tag tag-category">${loc.category}</span>
                        <span class="location-tag tag-wealth">${loc.wealthTier}</span>
                    </div>
                </div>

                <div class="location-body">
                    <!-- Dynamic Entry -->
                    <div class="location-section location-entry">
                        <div class="section-icon">&#128065;</div>
                        <div class="section-content">
                            <div class="section-title">First Impression</div>
                            ${editable
                                ? `<textarea class="location-edit-textarea" data-field="dynamicEntry">${this.escapeHtml(loc.dynamicEntry)}</textarea>`
                                : `<p class="entry-text">${loc.dynamicEntry}</p>`
                            }
                        </div>
                    </div>

                    <!-- Sensory Description -->
                    ${this.renderSensory(loc.sensory, editable)}

                    <!-- Signature Items -->
                    ${loc.signatureItems && loc.signatureItems.length > 0 ? `
                    <div class="location-section location-inventory">
                        <div class="section-icon">&#128230;</div>
                        <div class="section-content">
                            <div class="section-title">Signature Items</div>
                            <div class="inventory-list">
                                ${loc.signatureItems.map((item, idx) => `
                                    <div class="inventory-item ${editable ? 'inventory-item-edit' : ''}">
                                        <div class="item-header">
                                            ${editable
                                                ? `<input type="text" class="location-edit-input" data-field="signatureItems" data-index="${idx}" data-subfield="name" value="${this.escapeHtml(item.name)}" />`
                                                : `<span class="item-name">${item.name}</span>`
                                            }
                                            ${editable
                                                ? `<input type="text" class="location-edit-input location-edit-price" data-field="signatureItems" data-index="${idx}" data-subfield="price" value="${this.escapeHtml(item.price)}" />`
                                                : `<span class="item-price">${item.price}</span>`
                                            }
                                        </div>
                                        ${editable
                                            ? `<textarea class="location-edit-textarea location-edit-textarea-small" data-field="signatureItems" data-index="${idx}" data-subfield="desc">${this.escapeHtml(item.desc)}</textarea>`
                                            : `<div class="item-desc">${item.desc}</div>`
                                        }
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    ` : ''}

                    <!-- Hook NPC (Proprietor) -->
                    ${this.renderHookNPC(loc.hookNPC, 'The Proprietor', editable)}

                    <!-- Unique Feature -->
                    <div class="location-section location-unique">
                        <div class="section-icon">&#10024;</div>
                        <div class="section-content">
                            <div class="section-title">What Makes This Place Different</div>
                            ${editable
                                ? `<textarea class="location-edit-textarea" data-field="uniqueFeature">${this.escapeHtml(loc.uniqueFeature)}</textarea>`
                                : `<p>${loc.uniqueFeature}</p>`
                            }
                        </div>
                    </div>

                    <!-- Rumor -->
                    ${this.renderRumor(loc.rumor, editable)}
                </div>

                ${this.renderFooter(loc.id, editable)}
            </div>
        `;
    },

    /**
     * Render a wilderness landmark
     */
    renderWilderness(loc, options = {}) {
        const index = options.index || '';

        return `
            <div class="location-card location-wilderness" data-location-id="${loc.id}">
                <div class="location-header wilderness-header">
                    ${index ? `<div class="location-number">#${index}</div>` : ''}
                    <h3 class="location-name">${loc.name}</h3>
                    <div class="location-type">${loc.scale}</div>
                    <div class="location-tags">
                        <span class="location-tag tag-biome">${loc.biome}</span>
                        ${loc.landmarkType ? `<span class="location-tag tag-type">${loc.landmarkType}</span>` : ''}
                    </div>
                </div>

                <div class="location-body">
                    <!-- Dynamic Entry -->
                    <div class="location-section location-entry">
                        <div class="section-icon">&#128065;</div>
                        <div class="section-content">
                            <div class="section-title">First Impression</div>
                            <p class="entry-text">${loc.dynamicEntry}</p>
                        </div>
                    </div>

                    <!-- Atmosphere -->
                    <div class="location-section">
                        <div class="section-icon">&#127752;</div>
                        <div class="section-content">
                            <div class="section-title">Atmosphere</div>
                            <p class="atmosphere-text">${loc.atmosphere}</p>
                        </div>
                    </div>

                    <!-- Description -->
                    <div class="location-section">
                        <div class="section-icon">&#127758;</div>
                        <div class="section-content">
                            <div class="section-title">Description</div>
                            <p>${loc.description}</p>
                        </div>
                    </div>

                    <!-- Sensory (if available) -->
                    ${loc.sensory ? this.renderSensory(loc.sensory) : ''}

                    <!-- Contained Areas/Landmarks -->
                    ${loc.containedAreas ? `
                    <div class="location-section">
                        <div class="section-icon">&#128205;</div>
                        <div class="section-content">
                            <div class="section-title">Notable Areas Within</div>
                            <ul class="contained-list">
                                ${loc.containedAreas.map(a => `<li>${a}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    ` : ''}

                    ${loc.containedLandmarks ? `
                    <div class="location-section">
                        <div class="section-icon">&#128205;</div>
                        <div class="section-content">
                            <div class="section-title">Points of Interest</div>
                            <ul class="contained-list">
                                ${loc.containedLandmarks.map(l => `<li>${l}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    ` : ''}

                    <!-- Effect / Regional Effect -->
                    ${loc.effect || loc.regionalEffect ? `
                    <div class="location-section location-effect">
                        <div class="section-icon">&#9889;</div>
                        <div class="section-content">
                            <div class="section-title">Regional Effect</div>
                            <p class="effect-text">${loc.effect || loc.regionalEffect}</p>
                        </div>
                    </div>
                    ` : ''}

                    <!-- Hook NPC -->
                    ${this.renderHookNPC(loc.hookNPC, 'Notable Figure')}

                    <!-- Discovery -->
                    ${loc.discovery ? `
                    <div class="location-section location-discovery">
                        <div class="section-icon">&#128270;</div>
                        <div class="section-content">
                            <div class="section-title">Potential Discovery</div>
                            <p>${loc.discovery}</p>
                        </div>
                    </div>
                    ` : ''}
                </div>

                ${this.renderFooter(loc.id)}
            </div>
        `;
    },

    /**
     * Render sensory description section
     */
    renderSensory(sensory, editable = false) {
        if (!sensory) return '';

        if (editable) {
            return `
                <div class="location-section location-sensory">
                    <div class="section-icon">&#127912;</div>
                    <div class="section-content">
                        <div class="section-title">Sensory Details</div>
                        <div class="sensory-grid sensory-grid-edit">
                            <div class="sensory-item">
                                <span class="sensory-label">&#128064; Sight:</span>
                                <input type="text" class="location-edit-input" data-field="sensory.sight" value="${this.escapeHtml(sensory.sight)}" />
                            </div>
                            <div class="sensory-item">
                                <span class="sensory-label">&#128266; Sound:</span>
                                <input type="text" class="location-edit-input" data-field="sensory.sound" value="${this.escapeHtml(sensory.sound)}" />
                            </div>
                            <div class="sensory-item">
                                <span class="sensory-label">&#128067; Smell:</span>
                                <input type="text" class="location-edit-input" data-field="sensory.smell" value="${this.escapeHtml(sensory.smell)}" />
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="location-section location-sensory">
                <div class="section-icon">&#127912;</div>
                <div class="section-content">
                    <div class="section-title">Sensory Details</div>
                    <div class="sensory-grid">
                        <div class="sensory-item">
                            <span class="sensory-label">&#128064; Sight:</span>
                            <span class="sensory-text">${sensory.sight}</span>
                        </div>
                        <div class="sensory-item">
                            <span class="sensory-label">&#128266; Sound:</span>
                            <span class="sensory-text">${sensory.sound}</span>
                        </div>
                        <div class="sensory-item">
                            <span class="sensory-label">&#128067; Smell:</span>
                            <span class="sensory-text">${sensory.smell}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * Render Hook NPC section
     */
    renderHookNPC(npc, title = 'Hook NPC', editable = false) {
        if (!npc) return '';

        if (editable) {
            return `
                <div class="location-section location-npc">
                    <div class="section-icon">&#128100;</div>
                    <div class="section-content">
                        <div class="section-title">${title}</div>
                        <div class="npc-info npc-info-edit">
                            <input type="text" class="location-edit-input" data-field="hookNPC.name" value="${this.escapeHtml(npc.name)}" placeholder="Name" />
                            <div class="npc-trait"><strong>Trait:</strong> <input type="text" class="location-edit-input location-edit-inline" data-field="hookNPC.trait" value="${this.escapeHtml(npc.trait)}" /></div>
                            <div class="npc-secret"><strong>Secret:</strong> <textarea class="location-edit-textarea location-edit-textarea-small" data-field="hookNPC.secret">${this.escapeHtml(npc.secret)}</textarea></div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="location-section location-npc">
                <div class="section-icon">&#128100;</div>
                <div class="section-content">
                    <div class="section-title">${title}</div>
                    <div class="npc-info">
                        <div class="npc-name">${npc.name}</div>
                        <div class="npc-trait"><strong>Trait:</strong> ${npc.trait}</div>
                        <div class="npc-secret"><strong>Secret:</strong> ${npc.secret}</div>
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * Render Rumor section
     */
    renderRumor(rumor, editable = false) {
        if (!rumor) return '';

        if (editable) {
            return `
                <div class="location-section location-rumor">
                    <div class="section-icon">&#128172;</div>
                    <div class="section-content">
                        <div class="section-title">Local Rumor <span class="rumor-truth">(${rumor.isTrue ? 'True' : 'False'})</span></div>
                        <textarea class="location-edit-textarea" data-field="rumor.text">${this.escapeHtml(rumor.text)}</textarea>
                    </div>
                </div>
            `;
        }

        return `
            <div class="location-section location-rumor">
                <div class="section-icon">&#128172;</div>
                <div class="section-content">
                    <div class="section-title">Local Rumor <span class="rumor-truth">(${rumor.isTrue ? 'True' : 'False'})</span></div>
                    <p class="rumor-text">"${rumor.text}"</p>
                </div>
            </div>
        `;
    },

    /**
     * Render card footer
     */
    renderFooter(id, editable = false) {
        if (editable) {
            return `
                <div class="location-footer location-edit-footer">
                    <button type="button" class="btn-location btn-location-primary" onclick="LocationPanel.saveEdits('${id}')">
                        Save Changes
                    </button>
                    <button type="button" class="btn-location" onclick="LocationPanel.cancelEdits()">
                        Cancel
                    </button>
                </div>
            `;
        }

        return `
            <div class="location-footer">
                <button type="button" class="btn-location-small" onclick="LocationPanel.toggleEdit('${id}')" title="Edit">
                    &#9998;
                </button>
                <button type="button" class="btn-location-small" onclick="LocationPanel.saveLocation('${id}')" title="Save">
                    &#128190;
                </button>
                <button type="button" class="btn-location-small" onclick="LocationPanel.copyLocation('${id}')" title="Copy">
                    &#128203;
                </button>
                <button type="button" class="btn-location-small" onclick="LocationPanel.sendToCanvas('${id}')" title="Send to Canvas">
                    &#127912;
                </button>
            </div>
        `;
    },

    /**
     * Get economic state CSS class
     */
    getEconomicClass(stateId) {
        const classes = {
            booming: 'economic-booming',
            stable: 'economic-stable',
            declining: 'economic-declining',
            decaying: 'economic-decaying',
            underSiege: 'economic-siege'
        };
        return classes[stateId] || 'economic-stable';
    },

    /**
     * Format setting for display
     */
    formatSetting(value) {
        if (!value) return 'Any';
        return value.charAt(0).toUpperCase() + value.slice(1).replace(/([A-Z])/g, ' $1');
    },

    /**
     * Convert location to plain text
     */
    toText(loc) {
        if (!loc) return '';

        let text = `${'═'.repeat(50)}\n`;
        text += `${loc.name.toUpperCase()}\n`;
        text += `${'═'.repeat(50)}\n\n`;

        text += `Type: ${loc.type === 'shop' ? loc.typeLabel : loc.scale || loc.districtType || loc.type}\n`;
        if (loc.wealthTier) text += `Wealth: ${loc.wealthTier}\n`;
        if (loc.biome) text += `Biome: ${loc.biome}\n`;
        text += '\n';

        if (loc.dynamicEntry) {
            text += `FIRST IMPRESSION:\n${loc.dynamicEntry}\n\n`;
        }

        if (loc.sensory) {
            text += `SENSORY DETAILS:\n`;
            text += `- Sight: ${loc.sensory.sight}\n`;
            text += `- Sound: ${loc.sensory.sound}\n`;
            text += `- Smell: ${loc.sensory.smell}\n\n`;
        }

        if (loc.description) {
            text += `DESCRIPTION:\n${loc.description}\n\n`;
        }

        if (loc.hookNPC) {
            text += `HOOK NPC:\n`;
            text += `- Name: ${loc.hookNPC.name}\n`;
            text += `- Trait: ${loc.hookNPC.trait}\n`;
            text += `- Secret: ${loc.hookNPC.secret}\n\n`;
        }

        if (loc.uniqueFeature) {
            text += `UNIQUE FEATURE:\n${loc.uniqueFeature}\n\n`;
        }

        if (loc.signatureItems && loc.signatureItems.length > 0) {
            text += `SIGNATURE ITEMS:\n`;
            loc.signatureItems.forEach(item => {
                text += `- ${item.name} (${item.price}): ${item.desc}\n`;
            });
            text += '\n';
        }

        if (loc.rumor) {
            text += `LOCAL RUMOR (${loc.rumor.isTrue ? 'True' : 'False'}):\n"${loc.rumor.text}"\n\n`;
        }

        text += `${'═'.repeat(50)}\n`;

        return text;
    },

    /**
     * Convert batch to text
     */
    batchToText(result) {
        if (!result || !result.locations) return '';

        let text = `LOCATIONS GENERATED\n`;
        text += `${'═'.repeat(50)}\n`;
        text += `Scale: ${result.settings.scale}, Wealth: ${result.settings.wealthTier}\n`;
        text += `Generated: ${result.locations.length} locations\n\n`;

        result.locations.forEach((loc, index) => {
            text += `\n[LOCATION #${index + 1}]\n`;
            text += this.toText(loc);
        });

        return text;
    },

    /**
     * Render compact card for library
     */
    renderCompact(loc) {
        if (!loc) return '';

        const typeIcon = {
            settlement: '&#127968;',
            district: '&#127961;',
            shop: '&#128722;',
            wilderness: '&#127795;'
        };

        return `
            <div class="location-card-compact" data-location-id="${loc.id}">
                <div class="location-compact-header">
                    <div class="location-compact-icon">${typeIcon[loc.type] || '&#128205;'}</div>
                    <div class="location-compact-info">
                        <div class="location-compact-name">${loc.name}</div>
                        <div class="location-compact-type">${loc.scale || loc.districtType || loc.shopType || loc.type}</div>
                    </div>
                </div>
                <div class="location-compact-actions">
                    <button type="button" class="btn-icon-small" onclick="LocationPanel.loadLocation('${loc.id}')" title="View">
                        &#128065;
                    </button>
                    <button type="button" class="btn-icon-small" onclick="LocationPanel.deleteLocation('${loc.id}')" title="Delete">
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
     * Collect edited values from a location card
     */
    collectEdits(cardElement) {
        const edits = {};

        cardElement.querySelectorAll('input[data-field], textarea[data-field]').forEach(el => {
            const field = el.dataset.field;
            const index = el.dataset.index;
            const subfield = el.dataset.subfield;
            const value = el.value;

            // Handle signature items (array with index)
            if (field === 'signatureItems' && index !== undefined) {
                if (!edits.signatureItems) edits.signatureItems = [];
                if (!edits.signatureItems[index]) edits.signatureItems[index] = {};
                edits.signatureItems[index][subfield] = value;
            }
            // Handle nested fields like "sensory.sight"
            else if (field.includes('.')) {
                const [parent, child] = field.split('.');
                if (!edits[parent]) edits[parent] = {};
                edits[parent][child] = value;
            }
            // Handle simple fields
            else {
                edits[field] = value;
            }
        });

        return edits;
    }
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LocationCardRenderer;
}
