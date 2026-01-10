/**
 * Location Card Renderer
 * Renders generated locations into clean, readable HTML
 * Uses D&D Parchment Theme with SVG icons
 */

const LocationCardRenderer = {
    // SVG Icons for use throughout the renderer
    icons: {
        eye: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
        home: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
        building: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>',
        rainbow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 17a10 10 0 0 0-20 0"></path><path d="M6 17a6 6 0 0 1 12 0"></path><path d="M10 17a2 2 0 0 1 4 0"></path></svg>',
        palette: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"></path></svg>',
        mapPin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
        package: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
        user: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
        star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
        messageCircle: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',
        zap: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
        search: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
        globe: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
        tree: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-6"></path><path d="M12 8V2"></path><path d="M4 12h16"></path><path d="m5 15 7-7 7 7"></path><path d="m5 9 7 7 7-7"></path></svg>',
        wind: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path><path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path><path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path></svg>',
        edit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>',
        save: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>',
        copy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
        canvas: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
        trash: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>',
        settlement: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
        district: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>',
        shop: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>',
        wilderness: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 18 12 12 16 18"></polyline></svg>'
    },

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
                    <button type="button" class="btn-location btn-location-text" onclick="LocationPanel.saveAll()" title="Save All">
                        ${this.icons.save} Save All
                    </button>
                    <button type="button" class="btn-location btn-location-text" onclick="LocationPanel.copyAll()" title="Copy All">
                        ${this.icons.copy} Copy All
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
                <div class="location-tapered-rule"></div>

                <div class="location-body">
                    <!-- Dynamic Entry -->
                    <div class="location-section location-entry">
                        <div class="section-icon">${this.icons.eye}</div>
                        <div class="section-content">
                            <div class="section-title">First Impression</div>
                            <p class="entry-text">${loc.dynamicEntry}</p>
                        </div>
                    </div>

                    <!-- Description -->
                    <div class="location-section">
                        <div class="section-icon">${this.icons.home}</div>
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
                        <div class="section-icon">${this.icons.building}</div>
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
                        <div class="section-icon">${this.icons.star}</div>
                        <div class="section-content">
                            <div class="section-title">Unique Feature</div>
                            <p>${loc.uniqueFeature}</p>
                        </div>
                    </div>

                    <!-- Rumor -->
                    ${this.renderRumor(loc.rumor)}
                </div>

                <div class="location-tapered-rule reverse"></div>
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
                <div class="location-tapered-rule"></div>

                <div class="location-body">
                    <!-- Dynamic Entry -->
                    <div class="location-section location-entry">
                        <div class="section-icon">${this.icons.eye}</div>
                        <div class="section-content">
                            <div class="section-title">First Impression</div>
                            <p class="entry-text">${loc.dynamicEntry}</p>
                        </div>
                    </div>

                    <!-- Vibe & Industry -->
                    <div class="location-section">
                        <div class="section-icon">${this.icons.wind}</div>
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
                        <div class="section-icon">${this.icons.mapPin}</div>
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
                        <div class="section-icon">${this.icons.star}</div>
                        <div class="section-content">
                            <div class="section-title">Unique Feature</div>
                            <p>${loc.uniqueFeature}</p>
                        </div>
                    </div>

                    <!-- Rumor -->
                    ${this.renderRumor(loc.rumor)}
                </div>

                <div class="location-tapered-rule reverse"></div>
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
                <div class="location-tapered-rule"></div>

                <div class="location-body">
                    <!-- Dynamic Entry -->
                    <div class="location-section location-entry">
                        <div class="section-icon">${this.icons.eye}</div>
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
                        <div class="section-icon">${this.icons.package}</div>
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
                        <div class="section-icon">${this.icons.star}</div>
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

                <div class="location-tapered-rule reverse"></div>
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
                <div class="location-tapered-rule"></div>

                <div class="location-body">
                    <!-- Dynamic Entry -->
                    <div class="location-section location-entry">
                        <div class="section-icon">${this.icons.eye}</div>
                        <div class="section-content">
                            <div class="section-title">First Impression</div>
                            <p class="entry-text">${loc.dynamicEntry}</p>
                        </div>
                    </div>

                    <!-- Atmosphere -->
                    <div class="location-section">
                        <div class="section-icon">${this.icons.wind}</div>
                        <div class="section-content">
                            <div class="section-title">Atmosphere</div>
                            <p class="atmosphere-text">${loc.atmosphere}</p>
                        </div>
                    </div>

                    <!-- Description -->
                    <div class="location-section">
                        <div class="section-icon">${this.icons.globe}</div>
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
                        <div class="section-icon">${this.icons.mapPin}</div>
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
                        <div class="section-icon">${this.icons.mapPin}</div>
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
                        <div class="section-icon">${this.icons.zap}</div>
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
                        <div class="section-icon">${this.icons.search}</div>
                        <div class="section-content">
                            <div class="section-title">Potential Discovery</div>
                            <p>${loc.discovery}</p>
                        </div>
                    </div>
                    ` : ''}
                </div>

                <div class="location-tapered-rule reverse"></div>
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
                    <div class="section-icon">${this.icons.palette}</div>
                    <div class="section-content">
                        <div class="section-title">Sensory Details</div>
                        <div class="sensory-grid sensory-grid-edit">
                            <div class="sensory-item">
                                <span class="sensory-label">Sight:</span>
                                <input type="text" class="location-edit-input" data-field="sensory.sight" value="${this.escapeHtml(sensory.sight)}" />
                            </div>
                            <div class="sensory-item">
                                <span class="sensory-label">Sound:</span>
                                <input type="text" class="location-edit-input" data-field="sensory.sound" value="${this.escapeHtml(sensory.sound)}" />
                            </div>
                            <div class="sensory-item">
                                <span class="sensory-label">Smell:</span>
                                <input type="text" class="location-edit-input" data-field="sensory.smell" value="${this.escapeHtml(sensory.smell)}" />
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="location-section location-sensory">
                <div class="section-icon">${this.icons.palette}</div>
                <div class="section-content">
                    <div class="section-title">Sensory Details</div>
                    <div class="sensory-grid">
                        <div class="sensory-item">
                            <span class="sensory-label">Sight:</span>
                            <span class="sensory-text">${sensory.sight}</span>
                        </div>
                        <div class="sensory-item">
                            <span class="sensory-label">Sound:</span>
                            <span class="sensory-text">${sensory.sound}</span>
                        </div>
                        <div class="sensory-item">
                            <span class="sensory-label">Smell:</span>
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
                    <div class="section-icon">${this.icons.user}</div>
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
                <div class="section-icon">${this.icons.user}</div>
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
                    <div class="section-icon">${this.icons.messageCircle}</div>
                    <div class="section-content">
                        <div class="section-title">Local Rumor <span class="rumor-truth">(${rumor.isTrue ? 'True' : 'False'})</span></div>
                        <textarea class="location-edit-textarea" data-field="rumor.text">${this.escapeHtml(rumor.text)}</textarea>
                    </div>
                </div>
            `;
        }

        return `
            <div class="location-section location-rumor">
                <div class="section-icon">${this.icons.messageCircle}</div>
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
                    <button type="button" class="btn-location-primary btn-location-text" onclick="LocationPanel.saveEdits('${id}')">
                        Save Changes
                    </button>
                    <button type="button" class="btn-location btn-location-text" onclick="LocationPanel.cancelEdits()">
                        Cancel
                    </button>
                </div>
            `;
        }

        return `
            <div class="location-footer">
                <button type="button" class="btn-location-small" onclick="LocationPanel.toggleEdit('${id}')" title="Edit">
                    ${this.icons.edit}
                </button>
                <button type="button" class="btn-location-small" onclick="LocationPanel.saveLocation('${id}')" title="Save">
                    ${this.icons.save}
                </button>
                <button type="button" class="btn-location-small" onclick="LocationPanel.copyLocation('${id}')" title="Copy">
                    ${this.icons.copy}
                </button>
                <button type="button" class="btn-location-small" onclick="LocationPanel.sendToCanvas('${id}')" title="Send to Canvas">
                    ${this.icons.canvas}
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

        let text = `${'='.repeat(50)}\n`;
        text += `${loc.name.toUpperCase()}\n`;
        text += `${'='.repeat(50)}\n\n`;

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

        text += `${'='.repeat(50)}\n`;

        return text;
    },

    /**
     * Convert batch to text
     */
    batchToText(result) {
        if (!result || !result.locations) return '';

        let text = `LOCATIONS GENERATED\n`;
        text += `${'='.repeat(50)}\n`;
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

        const typeIcons = {
            settlement: this.icons.settlement,
            district: this.icons.district,
            shop: this.icons.shop,
            wilderness: this.icons.wilderness
        };

        return `
            <div class="location-card-compact" data-location-id="${loc.id}">
                <div class="location-compact-header">
                    <div class="location-compact-icon">${typeIcons[loc.type] || this.icons.mapPin}</div>
                    <div class="location-compact-info">
                        <div class="location-compact-name">${loc.name}</div>
                        <div class="location-compact-type">${loc.scale || loc.districtType || loc.shopType || loc.type}</div>
                    </div>
                </div>
                <div class="location-compact-actions">
                    <button type="button" class="btn-icon-small" onclick="LocationPanel.loadLocation('${loc.id}')" title="View">
                        ${this.icons.eye}
                    </button>
                    <button type="button" class="btn-icon-small" onclick="LocationPanel.deleteLocation('${loc.id}')" title="Delete">
                        ${this.icons.trash}
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
