/**
 * Location & POI Generator
 * Generates settlements, districts, shops, and wilderness landmarks
 */

const LocationGenerator = {
    /**
     * Generate locations based on scale
     * @param {Object} options - Generation options
     * @returns {Object} Generation result with locations array
     */
    generate(options = {}) {
        const scale = options.scale || 'shop';
        const biome = options.biome || 'urban';
        const wealthTier = options.wealthTier || 'modest';
        const quantity = Math.min(Math.max(options.quantity || 1, 1), 15);

        const locations = [];

        for (let i = 0; i < quantity; i++) {
            let location;

            switch (scale) {
                case 'settlement':
                    location = this.generateSettlement(options);
                    break;
                case 'district':
                    location = this.generateDistrict(options);
                    break;
                case 'shop':
                    location = this.generateShop(options);
                    break;
                case 'wilderness':
                    location = this.generateWildernessLandmark(options);
                    break;
                default:
                    location = this.generateShop(options);
            }

            locations.push(location);
        }

        return {
            id: this.generateId(),
            timestamp: new Date().toISOString(),
            settings: { scale, biome, wealthTier, quantity },
            locations
        };
    },

    /**
     * Generate a settlement
     */
    generateSettlement(options = {}) {
        const scaleId = options.settlementScale || 'town';
        const scale = LocationSettlements.getScale(scaleId);
        const wealthTier = LocationSettlements.getWealthTier(options.wealthTier || 'modest');
        const economicState = this.randomElement(Object.values(LocationSettlements.economicStates));

        const name = LocationNames.generateSettlementName();
        const population = this.randomBetween(scale.population.min, scale.population.max);

        // Generate districts for this settlement
        const districtCount = this.randomBetween(scale.districtCount.min, scale.districtCount.max);
        const availableDistricts = [...scale.availableDistricts];
        const districts = [];

        for (let i = 0; i < districtCount && availableDistricts.length > 0; i++) {
            const districtId = this.randomElement(availableDistricts);
            availableDistricts.splice(availableDistricts.indexOf(districtId), 1);
            districts.push(this.generateDistrictSummary(districtId, wealthTier.id));
        }

        // Generate a local rumor
        const rumor = this.generateRumor(name);

        // Hook NPC
        const hookNPC = this.generateHookNPC('common');

        return {
            id: this.generateId(),
            type: 'settlement',
            name: name,
            scale: scale.name,
            scaleId: scaleId,
            population: population,
            wealthTier: wealthTier.name,
            economicState: economicState,
            description: scale.description,
            features: scale.features,
            districts: districts,
            dynamicEntry: LocationNames.getRandomEntry('settlement'),
            hookNPC: hookNPC,
            rumor: rumor,
            uniqueFeature: this.generateSettlementUniqueFeature(scale, wealthTier)
        };
    },

    /**
     * Generate a district summary for settlement
     */
    generateDistrictSummary(districtId, wealthTier) {
        const district = LocationSettlements.getDistrict(districtId);
        return {
            id: districtId,
            name: district.name,
            vibe: this.randomElement(district.vibes),
            primaryIndustry: this.randomElement(district.primaryIndustries),
            securityLevel: district.securityLevel
        };
    },

    /**
     * Generate a full district
     */
    generateDistrict(options = {}) {
        const districtId = options.districtType || this.randomElement(Object.keys(LocationSettlements.districts));
        const district = LocationSettlements.getDistrict(districtId);
        const wealthTier = LocationSettlements.getWealthTier(options.wealthTier || district.wealthTier || 'modest');
        const economicState = this.randomElement(Object.values(LocationSettlements.economicStates));

        // Generate a settlement name for context
        const settlementName = options.settlementName || LocationNames.generateSettlementName();

        // Sensory description
        const sensory = {
            sight: this.randomElement(district.vibes),
            sound: this.randomElement(district.sounds),
            smell: this.randomElement(district.smells)
        };

        // Generate notable locations within district
        const notableLocations = [];
        const shopCount = this.randomBetween(2, 4);
        for (let i = 0; i < shopCount; i++) {
            notableLocations.push({
                name: LocationNames.generateShopName(),
                type: this.randomElement(district.buildingTypes)
            });
        }

        // Rumor from district pool
        const rumor = this.randomElement(district.rumors);

        // Hook NPC
        const hookNPC = this.generateHookNPC('common');

        return {
            id: this.generateId(),
            type: 'district',
            name: `${district.name} of ${settlementName}`,
            districtType: district.name,
            districtId: districtId,
            settlementName: settlementName,
            vibe: this.randomElement(district.vibes),
            primaryIndustry: this.randomElement(district.primaryIndustries),
            securityLevel: district.securityLevel,
            wealthTier: wealthTier.name,
            economicState: economicState,
            sensory: sensory,
            notableLocations: notableLocations,
            dynamicEntry: LocationNames.getRandomEntry('district'),
            hookNPC: hookNPC,
            rumor: rumor,
            uniqueFeature: this.generateDistrictUniqueFeature(district, wealthTier)
        };
    },

    /**
     * Generate a shop/building
     */
    generateShop(options = {}) {
        const shopTypeId = options.shopType || this.randomElement(Object.keys(LocationShops.types));
        const shop = LocationShops.getShopType(shopTypeId);
        const wealthTier = LocationSettlements.getWealthTier(options.wealthTier || 'modest');

        const name = LocationNames.generateShopName(shopTypeId);
        const typeLabel = this.getShopTypeLabel(shop, wealthTier);

        // Sensory description
        const sensory = {
            sight: this.randomElement(shop.sights),
            sound: this.randomElement(shop.sounds),
            smell: this.randomElement(shop.smells)
        };

        // Signature items for this wealth tier
        const signatureItems = shop.signatureItems[wealthTier.id] || shop.signatureItems.modest;

        // Hook NPC (the proprietor)
        const hookNPC = this.generateHookNPC('common', shop.npcTraits, shop.npcSecrets);

        // Unique feature
        const uniqueFeature = this.randomElement(shop.uniqueFeatures);

        return {
            id: this.generateId(),
            type: 'shop',
            name: `${name} - ${typeLabel}`,
            shopName: name,
            shopType: shop.name,
            shopTypeId: shopTypeId,
            typeLabel: typeLabel,
            category: shop.category,
            wealthTier: wealthTier.name,
            description: shop.description,
            sensory: sensory,
            signatureItems: signatureItems,
            dynamicEntry: LocationNames.getRandomEntry('shop'),
            hookNPC: hookNPC,
            uniqueFeature: uniqueFeature,
            rumor: this.generateShopRumor(name, hookNPC.name)
        };
    },

    /**
     * Get shop type label based on wealth
     */
    getShopTypeLabel(shop, wealthTier) {
        const prefixes = {
            squalid: ['Decrepit', 'Rundown', 'Shabby', 'Desperate'],
            modest: ['Humble', 'Honest', 'Working-Class', 'Standard'],
            wealthy: ['Fine', 'Upscale', 'Prestigious', 'Quality'],
            legendary: ['Legendary', 'Renowned', 'Mythic', 'Incomparable']
        };

        const prefix = this.randomElement(prefixes[wealthTier.id] || prefixes.modest);
        return `${prefix} ${shop.name}`;
    },

    /**
     * Generate a wilderness landmark
     */
    generateWildernessLandmark(options = {}) {
        const biomeId = options.biome || 'forest';
        const biome = LocationLandmarks.getBiome(biomeId);

        if (!biome) {
            return this.generateShop(options); // Fallback
        }

        const landmarkScale = options.landmarkScale || 'microLandmark';
        let landmark;

        switch (landmarkScale) {
            case 'macroBiome':
                landmark = this.generateMacroLandmark(biome);
                break;
            case 'mesoArea':
                landmark = this.generateMesoLandmark(biome);
                break;
            case 'microLandmark':
            default:
                landmark = this.generateMicroLandmark(biome);
                break;
        }

        return landmark;
    },

    /**
     * Generate macro-level landmark (region)
     */
    generateMacroLandmark(biome) {
        const feature = this.randomElement(biome.macroFeatures);
        const name = feature.name;

        // Generate some meso-areas within
        const mesoAreas = [];
        const count = this.randomBetween(2, 4);
        for (let i = 0; i < count; i++) {
            const meso = this.randomElement(biome.mesoFeatures);
            mesoAreas.push(meso.name);
        }

        const hookNPC = this.generateHookNPC('exotic');

        return {
            id: this.generateId(),
            type: 'wilderness',
            scale: 'Macro-Region',
            name: name,
            biome: biome.name,
            biomeId: biome.id,
            description: feature.desc,
            atmosphere: this.randomElement(biome.atmosphere),
            containedAreas: mesoAreas,
            dynamicEntry: LocationNames.getRandomEntry('wilderness'),
            hookNPC: hookNPC,
            discovery: this.randomElement(biome.discoveries),
            uniqueFeature: `This ${biome.name.toLowerCase()} region ${this.randomElement([
                'has never been fully mapped',
                'is home to creatures found nowhere else',
                'holds ruins of a forgotten civilization',
                'is sacred to the local people',
                'is slowly changing due to magical influence'
            ])}`
        };
    },

    /**
     * Generate meso-level landmark (area)
     */
    generateMesoLandmark(biome) {
        const feature = this.randomElement(biome.mesoFeatures);

        // Generate some micro-landmarks within
        const microLandmarks = [];
        const count = this.randomBetween(2, 3);
        for (let i = 0; i < count; i++) {
            const micro = this.randomElement(biome.microFeatures);
            microLandmarks.push(micro.name);
        }

        const hookNPC = this.generateHookNPC('exotic');

        return {
            id: this.generateId(),
            type: 'wilderness',
            scale: 'Meso-Area',
            name: feature.name,
            biome: biome.name,
            biomeId: biome.id,
            description: feature.desc,
            atmosphere: this.randomElement(biome.atmosphere),
            containedLandmarks: microLandmarks,
            dynamicEntry: LocationNames.getRandomEntry('wilderness'),
            hookNPC: hookNPC,
            discovery: this.randomElement(biome.discoveries),
            uniqueFeature: `This area ${this.randomElement([
                'is claimed by a territorial creature',
                'has strange magical properties',
                'is considered taboo by locals',
                'contains evidence of recent activity',
                'seems to shift when you\'re not looking'
            ])}`
        };
    },

    /**
     * Generate micro-level landmark (specific POI)
     */
    generateMicroLandmark(biome) {
        const feature = this.randomElement(biome.microFeatures);
        const name = feature.name || LocationNames.generateLandmarkName(feature.type);

        // Regional effects
        const regionalEffects = LocationLandmarks.getRegionalEffects(feature.type);
        const regionalEffect = this.randomElement(regionalEffects) || feature.effect;

        // Sensory
        const sensory = {
            sight: feature.desc,
            sound: this.generateLandmarkSound(feature.type, biome),
            smell: this.generateLandmarkSmell(feature.type, biome)
        };

        const hookNPC = this.generateHookNPC('exotic');

        return {
            id: this.generateId(),
            type: 'wilderness',
            scale: 'Micro-Landmark',
            name: name,
            landmarkType: feature.type,
            biome: biome.name,
            biomeId: biome.id,
            description: feature.desc,
            atmosphere: this.randomElement(biome.atmosphere),
            sensory: sensory,
            effect: feature.effect,
            regionalEffect: regionalEffect,
            dynamicEntry: LocationNames.getRandomEntry('wilderness'),
            hookNPC: hookNPC,
            discovery: this.randomElement(biome.discoveries),
            uniqueFeature: feature.effect
        };
    },

    /**
     * Generate landmark-appropriate sound
     */
    generateLandmarkSound(type, biome) {
        const sounds = {
            tree: ['Wind through branches', 'Creaking wood', 'Rustling leaves', 'Bird calls'],
            rock: ['Wind whistling past', 'Echoing silence', 'Distant rumbling', 'Cracking stone'],
            spring: ['Bubbling water', 'Splashing', 'Trickling', 'Rushing current'],
            cave: ['Dripping water', 'Echoing footsteps', 'Distant growls', 'Wind moaning'],
            leyline: ['Magical humming', 'Static crackle', 'Whispered voices', 'Ringing tones'],
            clearing: ['Unusual silence', 'Amplified sounds', 'Humming insects', 'Birdsong'],
            ruin: ['Creaking structures', 'Wind through gaps', 'Ghostly echoes', 'Settling stones']
        };
        return this.randomElement(sounds[type] || ['Ambient sounds']);
    },

    /**
     * Generate landmark-appropriate smell
     */
    generateLandmarkSmell(type, biome) {
        const smells = {
            tree: ['Fresh sap', 'Rotting leaves', 'Flower blossoms', 'Ancient wood'],
            rock: ['Mineral dust', 'Damp stone', 'Sulfur', 'Clean air'],
            spring: ['Fresh water', 'Minerals', 'Algae', 'Life'],
            cave: ['Damp earth', 'Bat guano', 'Stale air', 'Mineral deposits'],
            leyline: ['Ozone', 'Nothing at all', 'Burning', 'Flowers'],
            clearing: ['Crushed grass', 'Wildflowers', 'Morning dew', 'Nothing'],
            ruin: ['Dust', 'Decay', 'Old stone', 'Forgotten incense']
        };
        return this.randomElement(smells[type] || ['The biome\'s natural scent']);
    },

    /**
     * Generate a Hook NPC
     */
    generateHookNPC(style = 'common', traitPool = null, secretPool = null) {
        const name = LocationNames.generateNPCName(style);
        const trait = traitPool ? this.randomElement(traitPool) : LocationNames.getRandomTrait();
        const secret = secretPool ? this.randomElement(secretPool) : LocationNames.getRandomSecret();

        return { name, trait, secret };
    },

    /**
     * Generate settlement unique feature
     */
    generateSettlementUniqueFeature(scale, wealthTier) {
        const features = [
            `Built around an ancient ${this.randomElement(['tree', 'stone', 'well', 'altar', 'gate'])} that predates all records`,
            `All buildings must be constructed from ${this.randomElement(['local stone', 'imported wood', 'adobe', 'recycled ship materials'])}`,
            `Governed by a ${this.randomElement(['council of elders', 'merchant guild', 'religious order', 'hereditary lord', 'elected mayor'])}`,
            `Famous for its ${this.randomElement(['annual festival', 'unique cuisine', 'strange laws', 'talented artisans', 'haunted history'])}`,
            `The ${this.randomElement(['water', 'air', 'local animals', 'children', 'crops'])} here have an unusual property`,
            `No ${this.randomElement(['magic', 'violence', 'outsiders', 'animals', 'fire'])} is permitted within the ${this.randomElement(['walls', 'market', 'temple district', 'town center'])}`,
            `A local ${this.randomElement(['legend', 'curse', 'blessing', 'prophecy', 'tradition'])} shapes daily life`
        ];
        return this.randomElement(features);
    },

    /**
     * Generate district unique feature
     */
    generateDistrictUniqueFeature(district, wealthTier) {
        const features = [
            `The streets are paved with ${this.randomElement(['cobblestones', 'packed earth', 'wooden planks', 'strange glowing stones'])}`,
            `A peculiar ${this.randomElement(['smell', 'sound', 'light', 'mist', 'silence'])} pervades the area`,
            `Local custom requires visitors to ${this.randomElement(['cover their heads', 'remove their weapons', 'pay a small tribute', 'announce themselves', 'wear specific colors'])}`,
            `The district is ${this.randomElement(['built on the ruins of', 'slowly sinking into', 'elevated above', 'carved out of', 'growing into'])} something older`,
            `${this.randomElement(['Cats', 'Ravens', 'Rats', 'Stray dogs', 'Unusual birds'])} are unusually common here`
        ];
        return this.randomElement(features);
    },

    /**
     * Generate rumor for settlement/location
     */
    generateRumor(locationName) {
        const isTrue = Math.random() < 0.5;
        const templates = isTrue ? LocationNames.rumorTemplates.true : LocationNames.rumorTemplates.false;
        const template = this.randomElement(templates);

        // Replace placeholders
        const rumor = template
            .replace('{target}', this.randomElement(['The mayor', 'The priest', 'The innkeeper', 'Old ' + LocationNames.generateNPCName('common').split(' ')[0]]))
            .replace('{location}', this.randomElement(['the old mill', 'the abandoned house', 'the cellar', 'the woods']))
            .replace('{building}', this.randomElement(['the tavern', 'the temple', 'the town hall', 'the merchant\'s house']))
            .replace('{npc}', LocationNames.generateNPCName('common'))
            .replace('{npc2}', LocationNames.generateNPCName('common'))
            .replace('{time}', this.randomElement(['ten years', 'a generation', 'last winter', 'before the war']))
            .replace('{authority}', this.randomElement(['the lord', 'the guard captain', 'the council', 'the priest']))
            .replace('{problem}', this.randomElement(['the smuggling', 'the cult', 'the murders', 'the corruption']))
            .replace('{topic}', this.randomElement(['the old ruins', 'the merchant family', 'strangers in town', 'the well']))
            .replace('{event}', this.randomElement(['the fire', 'the death', 'the disappearance', 'the storm']))
            .replace('{creature}', this.randomElement(['vampire', 'werewolf', 'doppelganger', 'hag']))
            .replace('{relative}', this.randomElement(['spouse', 'sibling', 'parent', 'business partner']))
            .replace('{entity}', this.randomElement(['the ghost of', 'a demon', 'an angry spirit', 'the founder\'s shade']))
            .replace('{action}', this.randomElement(['raise taxes', 'flee the city', 'ban magic', 'start a war']))
            .replace('{item}', this.randomElement(['the statue', 'the painting', 'the relic', 'the book']));

        return { text: rumor, isTrue };
    },

    /**
     * Generate shop-specific rumor
     */
    generateShopRumor(shopName, ownerName) {
        const rumors = [
            `${ownerName} waters down the goods`,
            `The back room is where the real business happens`,
            `${shopName} used to be owned by someone who disappeared mysteriously`,
            `${ownerName} never sleeps—you can see lights at all hours`,
            `The prices here are fair, but the scales are not`,
            `Something lives in the walls of ${shopName}`,
            `${ownerName} will buy anything, no questions asked`,
            `The best items are never on display—you have to ask`
        ];

        return {
            text: this.randomElement(rumors),
            isTrue: Math.random() < 0.5
        };
    },

    /**
     * Utility functions
     */
    randomElement(arr) {
        if (!arr || arr.length === 0) return null;
        return arr[Math.floor(Math.random() * arr.length)];
    },

    randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    generateId() {
        return 'loc_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    },

    /**
     * Get available options for UI dropdowns
     */
    getScales() {
        return [
            { id: 'settlement', name: 'Settlement', description: 'Towns, cities, villages' },
            { id: 'district', name: 'District', description: 'Neighborhoods within settlements' },
            { id: 'shop', name: 'Shop/Building', description: 'Individual businesses and structures' },
            { id: 'wilderness', name: 'Wilderness Landmark', description: 'Natural features and POIs' }
        ];
    },

    getSettlementScales() {
        return LocationSettlements.getAllScales().map(s => ({ id: s.id, name: s.name }));
    },

    getDistrictTypes() {
        return LocationSettlements.getAllDistricts().map(d => ({ id: d.id, name: d.name }));
    },

    getShopTypes() {
        return LocationShops.getAllShopTypes().map(s => ({ id: s.id, name: s.name, category: s.category }));
    },

    getBiomes() {
        return LocationLandmarks.getAllBiomes().map(b => ({ id: b.id, name: b.name }));
    },

    getWealthTiers() {
        return Object.values(LocationSettlements.wealthTiers).map(w => ({ id: w.id, name: w.name, description: w.description }));
    },

    getLandmarkScales() {
        return [
            { id: 'macroBiome', name: 'Macro-Region', description: 'Vast geographical features' },
            { id: 'mesoArea', name: 'Meso-Area', description: 'Distinct areas within regions' },
            { id: 'microLandmark', name: 'Micro-Landmark', description: 'Specific points of interest' }
        ];
    }
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LocationGenerator;
}
