/**
 * NPC Generator
 * Generates comprehensive NPCs with multi-parameter options
 */

const NPCGenerator = {
    /**
     * Generate a random NPC
     * @param {Object} options - Generation options
     * @param {string} options.race - Race to generate (or 'random')
     * @param {string} options.gender - 'male', 'female', or 'random'
     * @param {string} options.wealth - Wealth level: 'squalid', 'commoner', 'modest', 'wealthy', 'noble', or 'random'
     * @param {string} options.vocationType - 'adventurer', 'civilian', or 'random'
     * @param {string} options.vocation - Specific vocation (optional)
     * @returns {Object} Generated NPC data
     */
    generate(options = {}) {
        // Determine gender
        const gender = options.gender === 'random' || !options.gender
            ? this.getRandomGender()
            : options.gender;

        // Determine race
        const race = options.race === 'random' || !options.race
            ? this.getRandomRace()
            : options.race;

        const raceData = NPCRaceData[race];
        if (!raceData) {
            console.error(`Unknown race: ${race}`);
            return null;
        }

        // Determine wealth level
        const wealth = options.wealth === 'random' || !options.wealth
            ? this.getRandomWealth()
            : options.wealth;

        // Determine vocation type and specific vocation
        const vocationType = options.vocationType === 'random' || !options.vocationType
            ? this.getRandomVocationType()
            : options.vocationType;

        const vocation = this.determineVocation(vocationType, options.vocation);

        // Generate name based on gender
        const firstName = this.getGenderedName(raceData, gender);
        const surname = raceData.surnames ? this.pick(raceData.surnames) : '';
        const fullName = surname ? `${firstName} ${surname}` : firstName;

        // Get gender-specific appearance
        const appearanceKey = gender === 'female' ? 'femaleAppearance' : 'maleAppearance';
        const appearance = raceData[appearanceKey]
            ? this.pick(raceData[appearanceKey])
            : '';

        // Core traits from race data
        const voice = this.pick(raceData.voices);
        const personality = this.pick(raceData.personalities);
        const quirk = raceData.quirks ? this.pick(raceData.quirks) : '';
        const background = raceData.backgrounds ? this.pick(raceData.backgrounds) : '';
        const motivation = raceData.motivations ? this.pick(raceData.motivations) : '';

        // Physical traits - use traits data
        const hairColor = NPCTraitsData.getRandomHairColor(race === 'tiefling' || race === 'gnome');
        const eyeColor = NPCTraitsData.getRandomEyeColor(race === 'tiefling' || race === 'elf');
        const clothing = NPCTraitsData.getRandomClothing(wealth, gender);
        const distinctiveFeature = NPCTraitsData.getRandomDistinctiveFeature(gender);

        // Get 6 random improv keywords
        const improvSeeds = NPCTraitsData.getRandomImprovSeeds(6);

        return {
            id: this.generateId(),
            // Core identity
            race: race,
            raceName: raceData.displayName,
            gender: gender,
            genderDisplay: gender.charAt(0).toUpperCase() + gender.slice(1),
            firstName: firstName,
            surname: surname,
            name: fullName,
            // Socioeconomic
            wealth: wealth,
            wealthDisplay: this.getWealthDisplay(wealth),
            vocationType: vocationType,
            vocation: vocation,
            // Physical traits
            hairColor: hairColor,
            eyeColor: eyeColor,
            clothing: clothing,
            appearance: appearance,
            distinctiveFeature: distinctiveFeature,
            // Personality traits
            voice: voice,
            personality: personality,
            quirk: quirk,
            // Background
            background: background,
            motivation: motivation,
            // Improv aids
            improvSeeds: improvSeeds,
            // Metadata
            createdAt: new Date().toISOString()
        };
    },

    /**
     * Get gendered name from race data
     */
    getGenderedName(raceData, gender) {
        if (gender === 'female' && raceData.femaleNames) {
            return this.pick(raceData.femaleNames);
        } else if (gender === 'male' && raceData.maleNames) {
            return this.pick(raceData.maleNames);
        }
        // Fallback to old format if exists
        return raceData.firstNames ? this.pick(raceData.firstNames) : 'Unknown';
    },

    /**
     * Determine vocation based on type and optional specific vocation
     */
    determineVocation(vocationType, specificVocation) {
        if (specificVocation && specificVocation !== 'random') {
            // Find the specific vocation
            if (vocationType === 'adventurer') {
                const adventurerClass = NPCVocationData.adventurerClasses.find(c => c.id === specificVocation);
                if (adventurerClass) {
                    return {
                        type: 'adventurer',
                        id: adventurerClass.id,
                        name: adventurerClass.name,
                        description: adventurerClass.description
                    };
                }
            } else {
                // Search civilian occupations
                const allOccupations = NPCVocationData.getAllOccupations();
                const occupation = allOccupations.find(o => o.id === specificVocation);
                if (occupation) {
                    return {
                        type: 'civilian',
                        id: occupation.id,
                        name: occupation.name,
                        description: occupation.description
                    };
                }
            }
        }

        // Random selection based on type
        if (vocationType === 'adventurer') {
            const adventurerClass = this.pick(NPCVocationData.adventurerClasses);
            return {
                type: 'adventurer',
                id: adventurerClass.id,
                name: adventurerClass.name,
                description: adventurerClass.description
            };
        } else {
            const occupation = NPCVocationData.getRandomOccupation();
            return {
                type: 'civilian',
                id: occupation.id,
                name: occupation.name,
                description: occupation.description
            };
        }
    },

    /**
     * Get list of available races
     */
    getRaces() {
        return Object.keys(NPCRaceData).map(key => ({
            id: key,
            displayName: NPCRaceData[key].displayName
        }));
    },

    /**
     * Get list of genders
     */
    getGenders() {
        return [
            { id: 'male', displayName: 'Male' },
            { id: 'female', displayName: 'Female' }
        ];
    },

    /**
     * Get list of wealth levels
     */
    getWealthLevels() {
        return [
            { id: 'squalid', displayName: 'Squalid', description: 'Destitute, homeless, or in abject poverty' },
            { id: 'commoner', displayName: 'Commoner', description: 'Working class with modest means' },
            { id: 'modest', displayName: 'Modest', description: 'Comfortable craftsperson or skilled worker' },
            { id: 'wealthy', displayName: 'Wealthy', description: 'Successful merchant or minor landholder' },
            { id: 'noble', displayName: 'Noble', description: 'Aristocracy or extremely wealthy elite' }
        ];
    },

    /**
     * Get list of vocation types
     */
    getVocationTypes() {
        return [
            { id: 'adventurer', displayName: 'Adventurer Class' },
            { id: 'civilian', displayName: 'Civilian Occupation' }
        ];
    },

    /**
     * Get adventurer classes
     */
    getAdventurerClasses() {
        return NPCVocationData.adventurerClasses.map(c => ({
            id: c.id,
            displayName: c.name
        }));
    },

    /**
     * Get civilian occupations by category
     */
    getCivilianOccupations() {
        const result = {};
        const categoryNames = NPCVocationData.getCategoryNames();

        for (const [categoryId, displayName] of Object.entries(categoryNames)) {
            result[categoryId] = {
                displayName: displayName,
                occupations: NPCVocationData.civilianOccupations[categoryId]?.map(o => ({
                    id: o.id,
                    displayName: o.name
                })) || []
            };
        }

        return result;
    },

    /**
     * Get all civilian occupations as flat list
     */
    getAllCivilianOccupations() {
        return NPCVocationData.getAllOccupations().map(o => ({
            id: o.id,
            displayName: o.name
        }));
    },

    /**
     * Get a random race
     */
    getRandomRace() {
        const races = Object.keys(NPCRaceData);
        return races[Math.floor(Math.random() * races.length)];
    },

    /**
     * Get a random gender
     */
    getRandomGender() {
        return Math.random() < 0.5 ? 'male' : 'female';
    },

    /**
     * Get a random wealth level (weighted toward commoner/modest)
     */
    getRandomWealth() {
        const weights = {
            squalid: 10,
            commoner: 40,
            modest: 30,
            wealthy: 15,
            noble: 5
        };
        const total = Object.values(weights).reduce((a, b) => a + b, 0);
        let random = Math.random() * total;

        for (const [level, weight] of Object.entries(weights)) {
            random -= weight;
            if (random <= 0) return level;
        }
        return 'commoner';
    },

    /**
     * Get a random vocation type
     */
    getRandomVocationType() {
        // 15% chance of adventurer, 85% civilian
        return Math.random() < 0.15 ? 'adventurer' : 'civilian';
    },

    /**
     * Get display name for wealth level
     */
    getWealthDisplay(wealth) {
        const levels = {
            squalid: 'Squalid',
            commoner: 'Commoner',
            modest: 'Modest',
            wealthy: 'Wealthy',
            noble: 'Noble'
        };
        return levels[wealth] || 'Unknown';
    },

    /**
     * Pick a random item from an array
     */
    pick(arr) {
        if (!arr || arr.length === 0) return '';
        return arr[Math.floor(Math.random() * arr.length)];
    },

    /**
     * Pick multiple unique items from an array
     */
    pickMultiple(arr, count) {
        if (!arr || arr.length === 0) return [];
        const shuffled = [...arr].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, arr.length));
    },

    /**
     * Generate a unique ID
     */
    generateId() {
        return 'npc_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 9);
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NPCGenerator;
}
