/**
 * Settlement Data for Location Generator
 * Hierarchical settlement scales, districts, and building types
 */

const LocationSettlements = {
    /**
     * Settlement Scales - From Capital City down to Isolated Outpost
     */
    scales: {
        capitalCity: {
            id: 'capitalCity',
            name: 'Capital City',
            population: { min: 25000, max: 100000 },
            districtCount: { min: 8, max: 15 },
            description: 'The beating heart of a kingdom, where power, wealth, and intrigue converge',
            features: ['Royal Palace', 'Grand Cathedral', 'Mage Academy', 'Arena', 'Foreign Embassies'],
            economicModifier: 1.5,
            securityLevels: ['High', 'Moderate', 'Low', 'Lawless'],
            buildingDensity: 'Packed',
            availableDistricts: ['nobility', 'government', 'temple', 'trade', 'market', 'craftsman', 'entertainment', 'slums', 'docks', 'foreign', 'academic', 'military', 'warehouse', 'garden']
        },
        city: {
            id: 'city',
            name: 'City',
            population: { min: 5000, max: 25000 },
            districtCount: { min: 4, max: 8 },
            description: 'A thriving urban center with diverse opportunities and dangers',
            features: ['Lord\'s Keep', 'Temple District', 'Merchant Quarter', 'City Walls'],
            economicModifier: 1.2,
            securityLevels: ['High', 'Moderate', 'Low'],
            buildingDensity: 'Dense',
            availableDistricts: ['nobility', 'temple', 'trade', 'market', 'craftsman', 'entertainment', 'slums', 'docks', 'warehouse']
        },
        town: {
            id: 'town',
            name: 'Town',
            population: { min: 1000, max: 5000 },
            districtCount: { min: 2, max: 4 },
            description: 'A modest settlement serving as a regional hub for trade and governance',
            features: ['Town Hall', 'Central Market', 'Local Temple', 'Inn'],
            economicModifier: 1.0,
            securityLevels: ['Moderate', 'Low'],
            buildingDensity: 'Moderate',
            availableDistricts: ['trade', 'market', 'craftsman', 'residential', 'temple']
        },
        hamlet: {
            id: 'hamlet',
            name: 'Hamlet',
            population: { min: 100, max: 1000 },
            districtCount: { min: 1, max: 2 },
            description: 'A small rural community where everyone knows everyone',
            features: ['Village Green', 'Shrine', 'Common Well', 'Elder\'s House'],
            economicModifier: 0.7,
            securityLevels: ['Low', 'None'],
            buildingDensity: 'Sparse',
            availableDistricts: ['residential', 'market']
        },
        isolatedOutpost: {
            id: 'isolatedOutpost',
            name: 'Isolated Outpost',
            population: { min: 10, max: 100 },
            districtCount: { min: 0, max: 1 },
            description: 'A lonely waypoint far from civilization\'s comforts',
            features: ['Watchtower', 'Supply Cache', 'Signal Fire', 'Defensive Palisade'],
            economicModifier: 0.5,
            securityLevels: ['Variable', 'None'],
            buildingDensity: 'Minimal',
            availableDistricts: ['military', 'trade']
        }
    },

    /**
     * District Types with detailed profiles
     */
    districts: {
        nobility: {
            id: 'nobility',
            name: 'Noble Quarter',
            vibes: ['Pristine gardens and armed guards', 'Old money and older secrets', 'Elegant facades hiding vicious politics', 'Where bloodlines matter more than gold'],
            primaryIndustries: ['Estate Management', 'Political Intrigue', 'Patronage of Arts', 'Land Ownership'],
            securityLevel: 'High',
            wealthTier: 'wealthy',
            buildingTypes: ['manor', 'estate', 'private_garden', 'exclusive_club', 'gallery'],
            sounds: ['Distant harpsichord music', 'Clip-clop of fine horses', 'Hushed conversations behind hedges', 'Servant footsteps on marble'],
            smells: ['Imported perfumes', 'Fresh-cut flowers', 'Polished wood', 'Fine wine'],
            rumors: [
                { text: 'Lord Ashworth\'s heir isn\'t actually his blood', true: true },
                { text: 'The Duchess has been buying up debt contracts from the slums', true: true },
                { text: 'There\'s an entrance to the thieves\' guild beneath the Vandermeer estate', true: false },
                { text: 'The noble houses are planning to overthrow the king', true: false }
            ]
        },
        government: {
            id: 'government',
            name: 'Administrative District',
            vibes: ['Bureaucracy in motion', 'Where laws are written and broken', 'Dusty archives and hushed halls', 'The machinery of state'],
            primaryIndustries: ['Governance', 'Record-Keeping', 'Tax Collection', 'Justice'],
            securityLevel: 'High',
            wealthTier: 'wealthy',
            buildingTypes: ['courthouse', 'archive', 'tax_office', 'prison', 'council_hall'],
            sounds: ['Scratching quills', 'Stamping seals', 'Echoing footsteps', 'Distant arguments'],
            smells: ['Old parchment', 'Ink', 'Candle wax', 'Dust'],
            rumors: [
                { text: 'The tax collector is skimming from the top', true: true },
                { text: 'Certain records have been deliberately destroyed', true: true },
                { text: 'The chief magistrate takes bribes through his wife\'s charity', true: false }
            ]
        },
        temple: {
            id: 'temple',
            name: 'Temple District',
            vibes: ['Sacred ground and incense smoke', 'Competing faiths in uneasy proximity', 'Pilgrims and penitents', 'Where gods walk through mortal servants'],
            primaryIndustries: ['Religious Services', 'Healing', 'Education', 'Charity'],
            securityLevel: 'Moderate',
            wealthTier: 'modest',
            buildingTypes: ['temple', 'shrine', 'monastery', 'hospital', 'orphanage', 'cemetery'],
            sounds: ['Chanting', 'Bell tolling', 'Prayers', 'Weeping', 'Hymns'],
            smells: ['Incense', 'Candle smoke', 'Holy water', 'Flowers for the dead'],
            rumors: [
                { text: 'The high priest communes with something other than their god', true: true },
                { text: 'The catacombs beneath the cathedral connect to somewhere forbidden', true: true },
                { text: 'Miracles can be purchased for the right donation', true: false }
            ]
        },
        trade: {
            id: 'trade',
            name: 'Merchant Quarter',
            vibes: ['Where fortunes are made and lost', 'Constant haggling and handshakes', 'Exotic goods from distant lands', 'Every person has a price'],
            primaryIndustries: ['Import/Export', 'Banking', 'Insurance', 'Speculation'],
            securityLevel: 'Moderate',
            wealthTier: 'wealthy',
            buildingTypes: ['trading_house', 'bank', 'warehouse', 'merchant_guild', 'customs_house'],
            sounds: ['Coin counting', 'Foreign languages', 'Haggling', 'Wagon wheels'],
            smells: ['Exotic spices', 'Money', 'Foreign goods', 'Sweat'],
            rumors: [
                { text: 'The Goldwright family has been laundering money for pirates', true: true },
                { text: 'A trade war with the eastern kingdoms is imminent', true: false },
                { text: 'Someone is cornering the market on healing potions', true: true }
            ]
        },
        market: {
            id: 'market',
            name: 'Market District',
            vibes: ['Chaos of commerce', 'A thousand goods under one sky', 'Pickpockets and honest merchants alike', 'The heartbeat of the city'],
            primaryIndustries: ['Retail', 'Food', 'Crafts', 'Street Entertainment'],
            securityLevel: 'Low',
            wealthTier: 'modest',
            buildingTypes: ['market_stall', 'shop', 'tavern', 'inn', 'bathhouse'],
            sounds: ['Vendors shouting', 'Crowds', 'Livestock', 'Street musicians'],
            smells: ['Fresh bread', 'Roasting meat', 'Unwashed bodies', 'Spices'],
            rumors: [
                { text: 'The fishmonger\'s wife is a retired assassin', true: true },
                { text: 'There\'s a black market operating after midnight', true: true },
                { text: 'The baker puts something addictive in his bread', true: false }
            ]
        },
        craftsman: {
            id: 'craftsman',
            name: 'Artisan Quarter',
            vibes: ['Ring of hammers and smell of sawdust', 'Where skill is currency', 'Guild signs on every door', 'Masters and apprentices'],
            primaryIndustries: ['Smithing', 'Carpentry', 'Weaving', 'Pottery', 'Leatherwork'],
            securityLevel: 'Moderate',
            wealthTier: 'modest',
            buildingTypes: ['smithy', 'workshop', 'guild_hall', 'apprentice_house', 'supply_shop'],
            sounds: ['Hammering', 'Sawing', 'Looms clacking', 'Apprentice arguments'],
            smells: ['Hot metal', 'Wood shavings', 'Tanning leather', 'Dyes'],
            rumors: [
                { text: 'The weaponsmith has been secretly arming the rebels', true: false },
                { text: 'Guild Master Thornton murdered his way to the top', true: true },
                { text: 'There\'s a dwarf teaching secrets of mithril-work to humans', true: true }
            ]
        },
        entertainment: {
            id: 'entertainment',
            name: 'Entertainment District',
            vibes: ['Where inhibitions go to die', 'Neon signs and dark alleys', 'Pleasure for every taste and budget', 'The night never ends here'],
            primaryIndustries: ['Gambling', 'Theater', 'Brothels', 'Taverns', 'Fighting Pits'],
            securityLevel: 'Low',
            wealthTier: 'modest',
            buildingTypes: ['gambling_den', 'theater', 'brothel', 'tavern', 'arena', 'opium_den'],
            sounds: ['Raucous laughter', 'Clinking glasses', 'Music', 'Moans', 'Dice rolling'],
            smells: ['Alcohol', 'Perfume', 'Smoke', 'Vomit'],
            rumors: [
                { text: 'The Velvet Rose brothel is a front for the thieves\' guild', true: true },
                { text: 'The fights at the Red Pit are rigged', true: true },
                { text: 'A noble\'s son was killed here and it was covered up', true: true }
            ]
        },
        slums: {
            id: 'slums',
            name: 'Slums',
            vibes: ['Desperation in every doorway', 'Where the city forgets its failures', 'Rats and resilience', 'Crime or starvation—choose'],
            primaryIndustries: ['Begging', 'Theft', 'Day Labor', 'Scavenging', 'Black Market'],
            securityLevel: 'Lawless',
            wealthTier: 'squalid',
            buildingTypes: ['tenement', 'flophouse', 'pawnshop', 'fence', 'soup_kitchen'],
            sounds: ['Crying children', 'Coughing', 'Angry shouts', 'Rats scurrying'],
            smells: ['Sewage', 'Rot', 'Unwashed bodies', 'Desperation'],
            rumors: [
                { text: 'A plague is spreading from the tannery district', true: false },
                { text: 'The Beggar King knows everything that happens in the city', true: true },
                { text: 'Children are disappearing and no one investigates', true: true }
            ]
        },
        docks: {
            id: 'docks',
            name: 'Docks',
            vibes: ['Salt air and hard labor', 'Where the sea meets the city', 'Sailors and smugglers', 'Every ship has a story'],
            primaryIndustries: ['Shipping', 'Fishing', 'Shipbuilding', 'Smuggling'],
            securityLevel: 'Low',
            wealthTier: 'modest',
            buildingTypes: ['warehouse', 'shipyard', 'sailor_tavern', 'customs', 'lighthouse'],
            sounds: ['Seagulls', 'Creaking ships', 'Shouting dockhands', 'Lapping waves'],
            smells: ['Salt', 'Fish', 'Tar', 'Rope'],
            rumors: [
                { text: 'A ghost ship appears in the harbor on foggy nights', true: true },
                { text: 'The harbormaster takes bribes to look away from certain cargo', true: true },
                { text: 'Pirates have a secret dock somewhere along the coast', true: true }
            ]
        },
        foreign: {
            id: 'foreign',
            name: 'Foreign Quarter',
            vibes: ['Little piece of elsewhere', 'Exotic customs and wary eyes', 'Neither here nor there', 'Where outsiders find community'],
            primaryIndustries: ['Import Goods', 'Cultural Services', 'Translation', 'Specialized Crafts'],
            securityLevel: 'Moderate',
            wealthTier: 'modest',
            buildingTypes: ['embassy', 'foreign_temple', 'ethnic_shop', 'community_hall', 'foreign_inn'],
            sounds: ['Foreign languages', 'Unfamiliar music', 'Spice grinding', 'Prayer calls'],
            smells: ['Exotic cooking', 'Foreign incense', 'Unusual spices'],
            rumors: [
                { text: 'The ambassador from the East is actually a spy', true: true },
                { text: 'A foreign cult is recruiting locals for dark rituals', true: false },
                { text: 'Refugees are smuggling ancient artifacts', true: true }
            ]
        },
        academic: {
            id: 'academic',
            name: 'Academic Quarter',
            vibes: ['Dusty tomes and dangerous experiments', 'Where knowledge is power', 'Absent-minded geniuses and cutthroat politics', 'Magic hums in the air'],
            primaryIndustries: ['Education', 'Research', 'Magic Services', 'Publishing'],
            securityLevel: 'High',
            wealthTier: 'wealthy',
            buildingTypes: ['university', 'library', 'mage_tower', 'observatory', 'laboratory'],
            sounds: ['Turning pages', 'Distant explosions', 'Arcane chanting', 'Heated debates'],
            smells: ['Old books', 'Alchemical reagents', 'Ozone', 'Chalk dust'],
            rumors: [
                { text: 'The archmage is researching forbidden magic', true: true },
                { text: 'A student accidentally opened a portal to the Abyss', true: false },
                { text: 'The library\'s restricted section contains books that read you', true: true }
            ]
        },
        military: {
            id: 'military',
            name: 'Military District',
            vibes: ['Discipline and danger', 'Where steel meets resolve', 'Barracks and blood', 'The city\'s iron fist'],
            primaryIndustries: ['Defense', 'Training', 'Arms Production', 'Mercenary Services'],
            securityLevel: 'High',
            wealthTier: 'modest',
            buildingTypes: ['barracks', 'armory', 'training_ground', 'war_college', 'veterans_hall'],
            sounds: ['Marching boots', 'Clashing weapons', 'Drill sergeants', 'Trumpets'],
            smells: ['Oil', 'Leather', 'Sweat', 'Horse'],
            rumors: [
                { text: 'The general is planning a coup', true: false },
                { text: 'The armory contains a weapon too dangerous to use', true: true },
                { text: 'Mercenaries are being hired for a secret mission', true: true }
            ]
        },
        warehouse: {
            id: 'warehouse',
            name: 'Warehouse District',
            vibes: ['Looming structures and long shadows', 'Where goods wait and thieves prowl', 'Quiet during day, dangerous at night', 'Everyone\'s got something stored here'],
            primaryIndustries: ['Storage', 'Distribution', 'Black Market', 'Smuggling'],
            securityLevel: 'Low',
            wealthTier: 'modest',
            buildingTypes: ['warehouse', 'loading_dock', 'teamster_office', 'night_watchman_post'],
            sounds: ['Rats', 'Creaking wood', 'Distant footsteps', 'Wagon loading'],
            smells: ['Dust', 'Mold', 'Whatever\'s stored', 'Rat droppings'],
            rumors: [
                { text: 'There\'s a fighting ring in Warehouse 7', true: true },
                { text: 'The night shift guards are in on the smuggling', true: true },
                { text: 'Something escaped from one of the crates', true: false }
            ]
        },
        garden: {
            id: 'garden',
            name: 'Garden District',
            vibes: ['Green oasis in stone desert', 'Where the wealthy breathe fresh air', 'Manicured nature and secret trysts', 'Beauty cultivated and controlled'],
            primaryIndustries: ['Horticulture', 'Recreation', 'Private Events', 'Rare Plant Trade'],
            securityLevel: 'High',
            wealthTier: 'wealthy',
            buildingTypes: ['public_garden', 'private_estate', 'conservatory', 'greenhouse', 'pavilion'],
            sounds: ['Birdsong', 'Fountains', 'Rustling leaves', 'Hushed conversations'],
            smells: ['Flowers', 'Fresh grass', 'Blooming trees', 'Clean air'],
            rumors: [
                { text: 'Poison ingredients are grown in Lord Ashworth\'s private garden', true: true },
                { text: 'The hedge maze was designed to trap unwanted guests', true: false },
                { text: 'Faeries have been spotted in the moonlit gardens', true: true }
            ]
        },
        residential: {
            id: 'residential',
            name: 'Residential Quarter',
            vibes: ['Where regular folks live', 'Clotheslines and children playing', 'Community and gossip', 'The city\'s sleeping heart'],
            primaryIndustries: ['Housing', 'Local Services', 'Small Shops', 'Day Labor'],
            securityLevel: 'Moderate',
            wealthTier: 'modest',
            buildingTypes: ['townhouse', 'apartment', 'local_shop', 'small_temple', 'school'],
            sounds: ['Children playing', 'Domestic arguments', 'Dogs barking', 'Shutters closing'],
            smells: ['Cooking food', 'Laundry', 'Wood smoke', 'Everyday life'],
            rumors: [
                { text: 'The old widow on Elm Street is actually a retired adventurer', true: true },
                { text: 'Strange lights have been seen in the abandoned house', true: true },
                { text: 'The baker\'s son joined a cult', true: false }
            ]
        }
    },

    /**
     * Economic States
     */
    economicStates: {
        booming: {
            id: 'booming',
            name: 'Booming',
            description: 'Trade flourishes, construction everywhere, optimism abounds',
            priceModifier: 1.3,
            availabilityModifier: 1.2,
            signs: ['New construction', 'Busy markets', 'Hiring signs', 'Crowded inns', 'Well-maintained streets']
        },
        stable: {
            id: 'stable',
            name: 'Stable',
            description: 'Neither growing nor shrinking, life continues as usual',
            priceModifier: 1.0,
            availabilityModifier: 1.0,
            signs: ['Normal activity', 'Regular trade', 'Maintained buildings', 'Predictable rhythms']
        },
        declining: {
            id: 'declining',
            name: 'Declining',
            description: 'Hard times have come, businesses close, people leave',
            priceModifier: 0.8,
            availabilityModifier: 0.7,
            signs: ['Boarded windows', 'Empty stalls', 'Beggars increasing', 'Deteriorating roads', 'Nervous merchants']
        },
        decaying: {
            id: 'decaying',
            name: 'Decaying',
            description: 'Once prosperous, now a shadow of former glory',
            priceModifier: 0.6,
            availabilityModifier: 0.5,
            signs: ['Ruined buildings', 'Abandoned districts', 'Desperate populace', 'Crime rampant', 'Services failing']
        },
        underSiege: {
            id: 'underSiege',
            name: 'Under Siege',
            description: 'Military threat looms, resources are rationed, fear is constant',
            priceModifier: 2.0,
            availabilityModifier: 0.3,
            signs: ['Military presence', 'Rationing', 'Refugees', 'Fortifications', 'Curfews', 'Suspicion']
        }
    },

    /**
     * Wealth Tiers
     */
    wealthTiers: {
        squalid: {
            id: 'squalid',
            name: 'Squalid',
            description: 'Poverty and desperation, bare survival',
            priceModifier: 0.5,
            qualityDescriptors: ['crumbling', 'filthy', 'makeshift', 'rotting', 'patched'],
            materialDescriptors: ['scavenged', 'rotten', 'rusty', 'moldy', 'threadbare']
        },
        modest: {
            id: 'modest',
            name: 'Modest',
            description: 'Working class, functional but not fancy',
            priceModifier: 1.0,
            qualityDescriptors: ['worn', 'practical', 'sturdy', 'plain', 'serviceable'],
            materialDescriptors: ['common', 'local', 'standard', 'reliable', 'honest']
        },
        wealthy: {
            id: 'wealthy',
            name: 'Wealthy',
            description: 'Prosperity and comfort, quality goods and services',
            priceModifier: 2.0,
            qualityDescriptors: ['polished', 'elegant', 'refined', 'impressive', 'quality'],
            materialDescriptors: ['imported', 'fine', 'crafted', 'selected', 'premium']
        },
        legendary: {
            id: 'legendary',
            name: 'Legendary',
            description: 'Extraordinary wealth, magical materials, once-in-a-lifetime quality',
            priceModifier: 5.0,
            qualityDescriptors: ['magnificent', 'unparalleled', 'mythic', 'divine', 'legendary'],
            materialDescriptors: ['enchanted', 'otherworldly', 'ancient', 'blessed', 'priceless']
        }
    }
};

// Helper functions
LocationSettlements.getScale = function(id) {
    return this.scales[id] || null;
};

LocationSettlements.getAllScales = function() {
    return Object.values(this.scales);
};

LocationSettlements.getDistrict = function(id) {
    return this.districts[id] || null;
};

LocationSettlements.getAllDistricts = function() {
    return Object.values(this.districts);
};

LocationSettlements.getEconomicState = function(id) {
    return this.economicStates[id] || null;
};

LocationSettlements.getWealthTier = function(id) {
    return this.wealthTiers[id] || null;
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LocationSettlements;
}
