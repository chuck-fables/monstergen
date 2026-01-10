/**
 * Location Panel Controller
 * Handles UI interactions for the Location & POI generator panel
 */

const LocationPanel = {
    currentResult: null,
    editingLocationId: null,

    init() {
        this.populateScaleSelect();
        this.populateWealthSelect();
        this.populateBiomeSelect();
        this.populateSubtypeSelects();
        this.loadLibrary();
        this.updateSubtypeVisibility();
    },

    /**
     * Populate the scale dropdown
     */
    populateScaleSelect() {
        const select = document.getElementById('locationScale');
        if (!select) return;

        select.innerHTML = '';
        const scales = LocationGenerator.getScales();
        scales.forEach(scale => {
            const option = document.createElement('option');
            option.value = scale.id;
            option.textContent = scale.name;
            option.title = scale.description;
            select.appendChild(option);
        });

        select.value = 'shop';
        select.addEventListener('change', () => this.updateSubtypeVisibility());
    },

    /**
     * Populate wealth tier dropdown
     */
    populateWealthSelect() {
        const select = document.getElementById('locationWealth');
        if (!select) return;

        select.innerHTML = '';
        const tiers = LocationGenerator.getWealthTiers();
        tiers.forEach(tier => {
            const option = document.createElement('option');
            option.value = tier.id;
            option.textContent = tier.name;
            option.title = tier.description;
            select.appendChild(option);
        });

        select.value = 'modest';
    },

    /**
     * Populate biome dropdown
     */
    populateBiomeSelect() {
        const select = document.getElementById('locationBiome');
        if (!select) return;

        select.innerHTML = '<option value="urban">Urban</option>';
        const biomes = LocationGenerator.getBiomes();
        biomes.forEach(biome => {
            const option = document.createElement('option');
            option.value = biome.id;
            option.textContent = biome.name;
            select.appendChild(option);
        });
    },

    /**
     * Populate subtype selects
     */
    populateSubtypeSelects() {
        // Settlement scales
        const settlementSelect = document.getElementById('locationSettlementScale');
        if (settlementSelect) {
            settlementSelect.innerHTML = '';
            const scales = LocationGenerator.getSettlementScales();
            scales.forEach(scale => {
                const option = document.createElement('option');
                option.value = scale.id;
                option.textContent = scale.name;
                settlementSelect.appendChild(option);
            });
            settlementSelect.value = 'town';
        }

        // District types
        const districtSelect = document.getElementById('locationDistrictType');
        if (districtSelect) {
            districtSelect.innerHTML = '<option value="random">Random</option>';
            const types = LocationGenerator.getDistrictTypes();
            types.forEach(type => {
                const option = document.createElement('option');
                option.value = type.id;
                option.textContent = type.name;
                districtSelect.appendChild(option);
            });
        }

        // Shop types
        const shopSelect = document.getElementById('locationShopType');
        if (shopSelect) {
            shopSelect.innerHTML = '<option value="random">Random</option>';
            const types = LocationGenerator.getShopTypes();
            types.forEach(type => {
                const option = document.createElement('option');
                option.value = type.id;
                option.textContent = type.name;
                shopSelect.appendChild(option);
            });
        }

        // Landmark scales
        const landmarkSelect = document.getElementById('locationLandmarkScale');
        if (landmarkSelect) {
            landmarkSelect.innerHTML = '';
            const scales = LocationGenerator.getLandmarkScales();
            scales.forEach(scale => {
                const option = document.createElement('option');
                option.value = scale.id;
                option.textContent = scale.name;
                option.title = scale.description;
                landmarkSelect.appendChild(option);
            });
            landmarkSelect.value = 'microLandmark';
        }
    },

    /**
     * Update visibility of subtype controls based on scale selection
     */
    updateSubtypeVisibility() {
        const scale = document.getElementById('locationScale')?.value;

        // Hide all subtype groups
        document.querySelectorAll('.location-subtype-group').forEach(el => {
            el.style.display = 'none';
        });

        // Show biome for wilderness only
        const biomeGroup = document.getElementById('biomeGroup');
        if (biomeGroup) {
            biomeGroup.style.display = scale === 'wilderness' ? 'block' : 'none';
        }

        // Show relevant subtype
        const subtypeMap = {
            settlement: 'settlementSubtype',
            district: 'districtSubtype',
            shop: 'shopSubtype',
            wilderness: 'landmarkSubtype'
        };

        const subtypeId = subtypeMap[scale];
        if (subtypeId) {
            const subtypeEl = document.getElementById(subtypeId);
            if (subtypeEl) subtypeEl.style.display = 'block';
        }
    },

    /**
     * Generate new locations
     */
    generate() {
        const scale = document.getElementById('locationScale')?.value || 'shop';
        const wealthTier = document.getElementById('locationWealth')?.value || 'modest';
        const biome = document.getElementById('locationBiome')?.value || 'forest';
        const quantity = parseInt(document.getElementById('locationQuantity')?.value) || 1;

        const options = {
            scale,
            wealthTier,
            quantity
        };

        // Add scale-specific options
        switch (scale) {
            case 'settlement':
                options.settlementScale = document.getElementById('locationSettlementScale')?.value || 'town';
                break;
            case 'district':
                const districtType = document.getElementById('locationDistrictType')?.value;
                if (districtType && districtType !== 'random') {
                    options.districtType = districtType;
                }
                break;
            case 'shop':
                const shopType = document.getElementById('locationShopType')?.value;
                if (shopType && shopType !== 'random') {
                    options.shopType = shopType;
                }
                break;
            case 'wilderness':
                options.biome = biome;
                options.landmarkScale = document.getElementById('locationLandmarkScale')?.value || 'microLandmark';
                break;
        }

        this.currentResult = LocationGenerator.generate(options);

        if (this.currentResult) {
            this.renderLocations();
        }
    },

    /**
     * Render the current locations to the output area
     */
    renderLocations() {
        const output = document.getElementById('locationOutput');
        if (!output || !this.currentResult) return;

        output.innerHTML = LocationCardRenderer.renderBatch(this.currentResult, {
            editingLocationId: this.editingLocationId
        });
    },

    /**
     * Toggle edit mode for a location
     */
    toggleEdit(locationId) {
        if (this.editingLocationId === locationId) {
            this.editingLocationId = null;
        } else {
            this.editingLocationId = locationId;
        }
        this.renderLocations();
    },

    /**
     * Save edits from edit mode
     */
    saveEdits(locationId) {
        if (!this.currentResult || !this.currentResult.locations) return;

        const locIndex = this.currentResult.locations.findIndex(l => l.id === locationId);
        if (locIndex === -1) return;

        const card = document.querySelector(`.location-card[data-location-id="${locationId}"]`);
        if (!card) return;

        const edits = LocationCardRenderer.collectEdits(card);
        const location = this.currentResult.locations[locIndex];

        // Apply simple field edits
        if (edits.name) location.name = edits.name;
        if (edits.dynamicEntry) location.dynamicEntry = edits.dynamicEntry;
        if (edits.uniqueFeature) location.uniqueFeature = edits.uniqueFeature;
        if (edits.description) location.description = edits.description;
        if (edits.vibe) location.vibe = edits.vibe;
        if (edits.atmosphere) location.atmosphere = edits.atmosphere;

        // Apply sensory edits
        if (edits.sensory && location.sensory) {
            if (edits.sensory.sight) location.sensory.sight = edits.sensory.sight;
            if (edits.sensory.sound) location.sensory.sound = edits.sensory.sound;
            if (edits.sensory.smell) location.sensory.smell = edits.sensory.smell;
        }

        // Apply hookNPC edits
        if (edits.hookNPC && location.hookNPC) {
            if (edits.hookNPC.name) location.hookNPC.name = edits.hookNPC.name;
            if (edits.hookNPC.trait) location.hookNPC.trait = edits.hookNPC.trait;
            if (edits.hookNPC.secret) location.hookNPC.secret = edits.hookNPC.secret;
        }

        // Apply rumor edits
        if (edits.rumor && location.rumor) {
            if (edits.rumor.text) location.rumor.text = edits.rumor.text;
        }

        // Apply signatureItems edits
        if (edits.signatureItems && location.signatureItems) {
            edits.signatureItems.forEach((itemEdit, index) => {
                if (location.signatureItems[index]) {
                    if (itemEdit.name) location.signatureItems[index].name = itemEdit.name;
                    if (itemEdit.price) location.signatureItems[index].price = itemEdit.price;
                    if (itemEdit.desc) location.signatureItems[index].desc = itemEdit.desc;
                }
            });
        }

        // Mark as modified
        location.modifiedAt = new Date().toISOString();

        this.editingLocationId = null;
        this.renderLocations();
        this.showNotification('Location changes saved', 'success');
    },

    /**
     * Cancel edits and return to view mode
     */
    cancelEdits() {
        this.editingLocationId = null;
        this.renderLocations();
    },

    /**
     * Save all locations to the library
     */
    saveAll() {
        if (!this.currentResult || !this.currentResult.locations) {
            this.showNotification('No locations to save', 'error');
            return;
        }

        const saved = this.getStoredLocations();
        let newCount = 0;

        this.currentResult.locations.forEach(loc => {
            if (!saved.some(l => l.id === loc.id)) {
                saved.unshift(loc);
                newCount++;
            }
        });

        if (newCount === 0) {
            this.showNotification('All locations already saved', 'info');
            return;
        }

        try {
            localStorage.setItem('dmtk_locations', JSON.stringify(saved));
            this.loadLibrary();
            this.showNotification(`Saved ${newCount} location${newCount > 1 ? 's' : ''} to library`, 'success');
        } catch (e) {
            this.showNotification('Failed to save locations', 'error');
        }
    },

    /**
     * Save a single location
     */
    saveLocation(locationId) {
        if (!this.currentResult || !this.currentResult.locations) return;

        const location = this.currentResult.locations.find(l => l.id === locationId);
        if (!location) return;

        const saved = this.getStoredLocations();

        if (saved.some(l => l.id === locationId)) {
            this.showNotification('Location already saved', 'info');
            return;
        }

        saved.unshift(location);

        try {
            localStorage.setItem('dmtk_locations', JSON.stringify(saved));
            this.loadLibrary();
            this.showNotification('Location saved to library', 'success');
        } catch (e) {
            this.showNotification('Failed to save location', 'error');
        }
    },

    /**
     * Copy all locations to clipboard
     */
    async copyAll() {
        if (!this.currentResult) {
            this.showNotification('No locations to copy', 'error');
            return;
        }

        const text = LocationCardRenderer.batchToText(this.currentResult);

        try {
            await navigator.clipboard.writeText(text);
            this.showNotification('Copied all locations to clipboard', 'success');
        } catch (e) {
            this.fallbackCopy(text);
        }
    },

    /**
     * Copy a single location
     */
    async copyLocation(locationId) {
        if (!this.currentResult || !this.currentResult.locations) return;

        const location = this.currentResult.locations.find(l => l.id === locationId);
        if (!location) return;

        const text = LocationCardRenderer.toText(location);

        try {
            await navigator.clipboard.writeText(text);
            this.showNotification('Location copied to clipboard', 'success');
        } catch (e) {
            this.fallbackCopy(text);
        }
    },

    /**
     * Fallback copy method
     */
    fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        this.showNotification('Copied to clipboard', 'success');
    },

    /**
     * Get stored locations from localStorage
     */
    getStoredLocations() {
        try {
            return JSON.parse(localStorage.getItem('dmtk_locations')) || [];
        } catch (e) {
            return [];
        }
    },

    /**
     * Load and display the location library
     */
    loadLibrary() {
        const container = document.getElementById('locationLibraryList');
        if (!container) return;

        const locations = this.getStoredLocations();

        if (locations.length === 0) {
            container.innerHTML = `
                <div class="location-library-empty">
                    No saved locations yet
                </div>
            `;
            return;
        }

        container.innerHTML = locations.map(loc =>
            LocationCardRenderer.renderCompact(loc)
        ).join('');
    },

    /**
     * Load a saved location for viewing
     */
    loadLocation(locationId) {
        const locations = this.getStoredLocations();
        const location = locations.find(l => l.id === locationId);

        if (location) {
            this.currentResult = {
                id: 'single_' + locationId,
                timestamp: new Date().toISOString(),
                settings: {
                    scale: location.type,
                    wealthTier: location.wealthTier || 'modest',
                    quantity: 1
                },
                locations: [location]
            };
            this.renderLocations();
        }
    },

    /**
     * Delete a location from the library
     */
    deleteLocation(locationId) {
        if (!confirm('Delete this location from your library?')) return;

        let locations = this.getStoredLocations();
        locations = locations.filter(l => l.id !== locationId);

        try {
            localStorage.setItem('dmtk_locations', JSON.stringify(locations));
            this.loadLibrary();
            this.showNotification('Location deleted', 'success');
        } catch (e) {
            this.showNotification('Failed to delete location', 'error');
        }
    },

    /**
     * Show notification
     */
    showNotification(message, type = 'info') {
        if (typeof showNotification === 'function') {
            showNotification(message, type);
            return;
        }

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 24px;
            background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
            color: white;
            border-radius: 6px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => LocationPanel.init(), 100);
});
