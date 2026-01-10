/**
 * Biome Data for Quest Hook Generator
 * Each biome has unique environmental hazards, atmosphere, and thematic elements
 */

const HookBiomes = {
    tundra: {
        id: 'tundra',
        name: 'Tundra',
        description: 'Frozen wastelands where survival itself is a victory',
        atmosphere: ['howling winds', 'endless white expanse', 'aurora-lit nights', 'permafrost silence'],
        environmentalHazards: [
            { name: 'Whiteout Blizzard', effect: 'Visibility drops to 10 feet, disadvantage on Perception checks' },
            { name: 'Thin Ice', effect: 'DC 12 Dexterity save or fall through into freezing water' },
            { name: 'Frostbite Winds', effect: '1d4 cold damage per hour without proper protection' },
            { name: 'Snow Blindness', effect: 'DC 13 Constitution save after 4 hours or blinded for 1d4 hours' },
            { name: 'Avalanche Zone', effect: 'Loud noises trigger DC 15 Dexterity save, 4d10 bludgeoning on fail' },
            { name: 'Ice Geysers', effect: 'Random eruptions deal 2d6 cold damage in 15-foot radius' },
            { name: 'Hypothermia', effect: 'Exhaustion level every 2 hours without fire or shelter' }
        ],
        landmarks: ['frozen shipwreck', 'ice cave', 'abandoned research outpost', 'glacier crevasse', 'hot spring oasis', 'mammoth graveyard', 'aurora shrine'],
        creatures: ['winter wolves', 'frost giants', 'remorhazes', 'yetis', 'ice mephits', 'arctic owlbears']
    },

    taiga: {
        id: 'taiga',
        name: 'Taiga',
        description: 'Dense coniferous forests where ancient things slumber',
        atmosphere: ['pine-scented air', 'wolf howls at dusk', 'snow-laden branches', 'frozen streams'],
        environmentalHazards: [
            { name: 'Deadfall Trap', effect: 'Hidden snow-covered pits, DC 14 Perception to spot, 2d6 fall damage' },
            { name: 'Widow-Maker Trees', effect: 'Dead branches fall randomly, DC 12 Dexterity save or 1d10 bludgeoning' },
            { name: 'Frozen River Crossing', effect: 'Ice may crack, DC 13 Dexterity save or submerge' },
            { name: 'Predator Territory', effect: 'Wolf packs track party, encounter chance increases each hour' },
            { name: 'Disorienting Sameness', effect: 'DC 15 Survival check to navigate or become lost' },
            { name: 'Treacherous Snow Depth', effect: 'Movement speed halved, disadvantage on Stealth' }
        ],
        landmarks: ['abandoned logging camp', 'hermit\'s cabin', 'frozen waterfall', 'ancient standing stones', 'trapper\'s cache', 'wolf den', 'druid grove'],
        creatures: ['dire wolves', 'owlbears', 'trolls', 'green hags', 'werewolves', 'elk spirits']
    },

    temperateForest: {
        id: 'temperateForest',
        name: 'Temperate Forest',
        description: 'Ancient woodlands where fey creatures watch from the shadows',
        atmosphere: ['dappled sunlight', 'rustling leaves', 'birdsong', 'moss-covered stones', 'misty mornings'],
        environmentalHazards: [
            { name: 'Fey Crossroads', effect: 'Chance of accidental planar shift to Feywild' },
            { name: 'Hallucinogenic Spores', effect: 'DC 13 Constitution save or suffer confusion for 1 minute' },
            { name: 'Treant Territory', effect: 'Cutting wood angers forest guardians' },
            { name: 'Quicksand Bog', effect: 'DC 14 Strength save to escape, sink 1 foot per round' },
            { name: 'Poison Ivy Thickets', effect: '1d4 poison damage, disadvantage on concentration' },
            { name: 'Will-o\'-Wisp Lure', effect: 'Lights lead travelers astray into dangerous areas' }
        ],
        landmarks: ['ruined elven tower', 'sacred grove', 'bandit hideout', 'witch\'s cottage', 'fairy ring', 'ancient oak', 'hidden spring'],
        creatures: ['dryads', 'centaurs', 'ettercaps', 'displacer beasts', 'sprites', 'treants', 'green dragons']
    },

    rainforest: {
        id: 'rainforest',
        name: 'Rainforest',
        description: 'Steaming jungles teeming with life and ancient ruins',
        atmosphere: ['oppressive humidity', 'constant insect drone', 'vibrant colors', 'towering canopy', 'sudden downpours'],
        environmentalHazards: [
            { name: 'Bloodwasp Swarms', effect: '2d4 piercing damage per round in swarm, DC 12 Constitution or poisoned' },
            { name: 'Strangler Vines', effect: 'DC 14 Strength save or restrained, 1d6 bludgeoning per round' },
            { name: 'Flash Flood', effect: 'DC 15 Strength save or swept away 60 feet, 3d6 bludgeoning' },
            { name: 'Rot Grub Infestation', effect: 'Contact with corpses risks infestation, 1d6 necrotic per round' },
            { name: 'Heat Exhaustion', effect: 'DC 12 Constitution save each hour or gain exhaustion in heavy armor' },
            { name: 'Camouflaged Predators', effect: 'Creatures have advantage on Stealth, disadvantage to spot ambushes' },
            { name: 'Toxic Dart Frogs', effect: 'Touching bright-colored creatures, DC 14 Constitution or paralyzed' }
        ],
        landmarks: ['overgrown temple', 'canopy village', 'sacrificial cenote', 'crashed airship', 'serpent statue', 'medicine man\'s hut', 'ancient ziggurat'],
        creatures: ['yuan-ti', 'chuuls', 'giant apes', 'couatls', 'dinosaurs', 'green hags', 'vegepygmies']
    },

    grasslands: {
        id: 'grasslands',
        name: 'Grasslands',
        description: 'Endless plains where nomads follow ancient migration paths',
        atmosphere: ['waving grass seas', 'distant thunder', 'wide-open skies', 'grazing herds', 'lonely wind'],
        environmentalHazards: [
            { name: 'Prairie Fire', effect: '2d6 fire damage per round, spreads 30 feet per round with wind' },
            { name: 'Stampede', effect: 'DC 15 Dexterity save or 4d10 bludgeoning from panicked herd' },
            { name: 'Lightning Storm', effect: 'Metal armor attracts strikes, 8d6 lightning on failed DC 15 Dex save' },
            { name: 'Sinkhole', effect: 'Ground collapses, DC 14 Dexterity save or fall 20 feet into burrow' },
            { name: 'Dehydration', effect: 'No shade, water consumption doubled or exhaustion' },
            { name: 'Tall Grass Ambush', effect: 'Enemies hidden in grass have advantage on surprise attacks' }
        ],
        landmarks: ['nomad camp', 'buffalo jump cliff', 'lone standing stone', 'abandoned farmstead', 'dried riverbed', 'burial mounds', 'windmill ruins'],
        creatures: ['gnolls', 'centaurs', 'ankhegs', 'bulettes', 'griffons', 'wyverns', 'roving humanoid bands']
    },

    desert: {
        id: 'desert',
        name: 'Desert',
        description: 'Scorching sands hiding buried empires and desperate outlaws',
        atmosphere: ['shimmering heat', 'endless dunes', 'starlit nights', 'ancient silence', 'mirages'],
        environmentalHazards: [
            { name: 'Sandstorm', effect: 'Blindness, 1d4 slashing per round, impossible navigation' },
            { name: 'Quickite Sand', effect: 'Hardite during day, quicksand at night, DC 15 Strength to escape' },
            { name: 'Heat Stroke', effect: 'DC 12 Constitution save each hour or exhaustion, doubled water need' },
            { name: 'Mirage Madness', effect: 'DC 14 Wisdom save or waste 1d4 hours chasing false water' },
            { name: 'Glass Storm', effect: 'Lightning-fused sand shards, 2d6 slashing in 30-foot area' },
            { name: 'Scorpion Nest', effect: 'Disturbing sand triggers swarm, DC 13 Constitution or poisoned' },
            { name: 'Sun Reflection', effect: 'Metal equipment becomes searing, 1d4 fire damage to touch' }
        ],
        landmarks: ['buried pyramid', 'oasis town', 'skeleton of a purple worm', 'sand-blasted ruins', 'slave caravan route', 'canyon hideout', 'petrified forest'],
        creatures: ['blue dragons', 'mummies', 'lamias', 'dust mephits', 'giant scorpions', 'sphinxes', 'bandits']
    },

    savanna: {
        id: 'savanna',
        name: 'Savanna',
        description: 'Golden grasslands where apex predators rule and tribes war',
        atmosphere: ['acacia silhouettes', 'distant drums', 'circling vultures', 'watering hole tension', 'dry season desperation'],
        environmentalHazards: [
            { name: 'Razor-Grass', effect: 'Moving through tall grass deals 1d4 slashing, difficult terrain' },
            { name: 'Territorial Predators', effect: 'Lion prides or hyena packs claim regions, attack intruders' },
            { name: 'Tsetse Swarms', effect: 'DC 12 Constitution save or contract sleeping sickness (exhaustion)' },
            { name: 'Watering Hole Politics', effect: 'All creatures converge at water, tense standoffs likely' },
            { name: 'Brush Fire', effect: 'Dry season fires spread rapidly, escape or suffocate' },
            { name: 'Termite Mound Collapse', effect: 'Hollow ground, DC 13 Dexterity save or fall into insect hive' }
        ],
        landmarks: ['great baobab tree', 'tribal village', 'elephant graveyard', 'ancient watchtower', 'dried lakebed', 'hunting grounds', 'spirit rock'],
        creatures: ['werelions', 'gnoll war bands', 'giant hyenas', 'chimeras', 'awakened beasts', 'tribal warriors']
    },

    swamp: {
        id: 'swamp',
        name: 'Swamp',
        description: 'Fetid marshlands where the dead do not rest easy',
        atmosphere: ['rotting vegetation', 'buzzing insects', 'murky water', 'croaking frogs', 'will-o\'-wisps'],
        environmentalHazards: [
            { name: 'Bog Pits', effect: 'Hidden deep water, DC 14 Perception to spot, DC 15 Strength to escape' },
            { name: 'Swamp Gas', effect: 'Flammable, fire causes 3d6 explosion in 15-foot radius' },
            { name: 'Leech Infestation', effect: '1 HP drain per hour in water, DC 12 Perception to notice' },
            { name: 'Disease-Carrying Mosquitoes', effect: 'DC 13 Constitution save or contract swamp fever' },
            { name: 'Unstable Ground', effect: 'Movement halved, heavy creatures may sink' },
            { name: 'Corpse Flower Pollen', effect: 'DC 14 Constitution save or poisoned and nauseated' },
            { name: 'Fogbound', effect: 'Permanent heavy fog, visibility limited to 30 feet' }
        ],
        landmarks: ['sunken temple', 'witch\'s hut', 'abandoned village', 'mass grave', 'crocodile nest', 'smuggler\'s dock', 'drowned tower'],
        creatures: ['black dragons', 'hags', 'shambling mounds', 'will-o\'-wisps', 'bullywugs', 'lizardfolk', 'zombies']
    },

    mountain: {
        id: 'mountain',
        name: 'Mountain',
        description: 'Towering peaks where dragons lair and dwarven kingdoms crumble',
        atmosphere: ['thin air', 'echoing silence', 'snow-capped peaks', 'treacherous paths', 'ancient stones'],
        environmentalHazards: [
            { name: 'Altitude Sickness', effect: 'Above 10,000 feet, DC 12 Constitution save per hour or exhaustion' },
            { name: 'Rockslide', effect: 'Triggered by noise, DC 15 Dexterity save or 4d10 bludgeoning' },
            { name: 'Narrow Ledge', effect: 'DC 12 Acrobatics to traverse, fall 100+ feet on failure' },
            { name: 'Sudden Storm', effect: 'Lightning and hail, 2d6 damage per round exposed' },
            { name: 'Thin Air', effect: 'Disadvantage on Constitution saves, exhaustion from exertion' },
            { name: 'Crumbling Bridge', effect: 'Ancient spans may collapse, DC 14 Dexterity to react' },
            { name: 'Echo Betrayal', effect: 'Sounds carry for miles, alerting nearby creatures' }
        ],
        landmarks: ['abandoned mine', 'dragon\'s lair', 'dwarven gatehouse', 'mountain shrine', 'crashed flying ship', 'giant\'s throne', 'hermit monastery'],
        creatures: ['red dragons', 'stone giants', 'rocs', 'galeb duhr', 'perytons', 'harpies', 'kobolds']
    },

    coastal: {
        id: 'coastal',
        name: 'Coastal',
        description: 'Where sea meets shore and pirates hunt merchant prey',
        atmosphere: ['salt spray', 'crying gulls', 'crashing waves', 'rotting fish', 'distant sails'],
        environmentalHazards: [
            { name: 'Riptide', effect: 'DC 15 Strength (Athletics) save or pulled 60 feet out to sea' },
            { name: 'Jagged Rocks', effect: 'Ships take 4d10 damage, swimmers take 2d6 slashing' },
            { name: 'Sudden Squall', effect: 'Disadvantage on ranged attacks, ships risk capsizing' },
            { name: 'Tidal Surge', effect: 'Caves and beaches flood rapidly, DC 14 Dexterity to reach safety' },
            { name: 'Siren Song', effect: 'DC 14 Wisdom save or compelled toward dangerous waters' },
            { name: 'Kelp Forest', effect: 'Swimming speed halved, risk of entanglement' },
            { name: 'Saltwater Exposure', effect: 'Untreated wounds fester, healing halved' }
        ],
        landmarks: ['smuggler\'s cove', 'lighthouse ruins', 'sea cave', 'shipwreck graveyard', 'fishing village', 'pirate fortress', 'tidal island'],
        creatures: ['sahuagin', 'merrow', 'sea hags', 'water elementals', 'giant crabs', 'pirates', 'bronze dragons']
    },

    underwater: {
        id: 'underwater',
        name: 'Underwater',
        description: 'Alien depths where sunken civilizations guard terrible secrets',
        atmosphere: ['crushing pressure', 'bioluminescence', 'eerie silence', 'kelp forests', 'ancient darkness'],
        environmentalHazards: [
            { name: 'Crushing Depth', effect: 'Below 100 feet, 1d6 bludgeoning per minute without protection' },
            { name: 'Pressure Change', effect: 'Rapid ascent causes 4d6 damage (the bends)' },
            { name: 'Ink Cloud', effect: 'Creatures create blinding clouds, disadvantage on attacks' },
            { name: 'Thermal Vent', effect: '3d6 fire damage in 20-foot radius around volcanic vents' },
            { name: 'Current Tunnel', effect: 'DC 16 Strength save or swept away to random location' },
            { name: 'Drowning', effect: 'Without water breathing, Constitution minutes before death' },
            { name: 'Predator Frenzy', effect: 'Blood in water attracts sharks within 1 mile' }
        ],
        landmarks: ['sunken city', 'coral palace', 'abyssal trench', 'underwater volcano', 'merfolk village', 'kraken\'s lair', 'drowned temple'],
        creatures: ['aboleths', 'kraken', 'merfolk', 'sea elves', 'dragon turtles', 'marids', 'chuuls']
    },

    underdark: {
        id: 'underdark',
        name: 'Underdark',
        description: 'Lightless depths where drow scheme and aberrations hunt',
        atmosphere: ['absolute darkness', 'dripping water', 'fungal glow', 'distant screams', 'paranoid silence'],
        environmentalHazards: [
            { name: 'Faerzress Radiation', effect: 'Magic becomes unpredictable, wild magic surges possible' },
            { name: 'Toxic Spores', effect: 'DC 13 Constitution save or poisoned, hallucinations for 1d4 hours' },
            { name: 'Cave-In', effect: 'Loud noises risk collapse, DC 15 Dexterity save or 6d6 bludgeoning' },
            { name: 'Bottomless Chasm', effect: 'Bridges may be trapped or illusory, falls are fatal' },
            { name: 'Silence Zones', effect: 'Natural magical silence, no verbal spells or communication' },
            { name: 'Bioluminescent Lure', effect: 'Beautiful lights are predator traps, DC 13 Wisdom save' },
            { name: 'Flooding Tunnels', effect: 'Underground rivers rise without warning' }
        ],
        landmarks: ['drow outpost', 'fungal forest', 'aboleth lake', 'mind flayer colony', 'duergar fortress', 'crystal cavern', 'purple worm tunnel'],
        creatures: ['mind flayers', 'drow', 'duergar', 'hook horrors', 'driders', 'beholders', 'purple worms']
    },

    urban: {
        id: 'urban',
        name: 'Urban',
        description: 'Sprawling cities where intrigue festers and power corrupts',
        atmosphere: ['crowded streets', 'merchant calls', 'smoke-filled taverns', 'noble carriages', 'distant bells', 'sewer stench', 'guild halls', 'street performers'],
        environmentalHazards: [
            { name: 'Crowded Streets', effect: 'Movement halved, disadvantage on ranged attacks beyond 30 feet' },
            { name: 'Pickpocket Gangs', effect: 'DC 14 Perception or lose 1d10 gold per hour in markets' },
            { name: 'City Watch Patrol', effect: 'Weapons drawn attract attention, DC 13 Deception to explain' },
            { name: 'Guild Territory', effect: 'Operating without license angers local guilds, possible ambush' },
            { name: 'Plague Quarter', effect: 'DC 13 Constitution save or contract disease after 1 hour exposure' },
            { name: 'Collapsing Building', effect: 'Old structures may collapse, DC 14 Dexterity save or 3d6 bludgeoning' },
            { name: 'Sewer Gas', effect: 'Underground areas, DC 12 Constitution save or poisoned for 1 hour' },
            { name: 'Noble\'s Carriage', effect: 'Failing to yield is illegal, guards pursue offenders' },
            { name: 'Fire Outbreak', effect: 'Wooden districts catch fire quickly, 2d6 fire damage per round' },
            { name: 'Mob Violence', effect: 'Civil unrest, DC 14 Charisma to avoid being targeted by angry crowds' },
            { name: 'Black Market Raid', effect: 'Guards raid illegal activities, DC 15 Stealth to avoid arrest' },
            { name: 'Assassin\'s Mark', effect: 'High-profile actions attract unwanted attention from hired killers' },
            { name: 'Tavern Brawl', effect: 'Bar fights escalate quickly, DC 13 Dexterity save or caught in chaos' },
            { name: 'Corrupt Officials', effect: 'Bribes expected, refusing costs 1d4 hours in bureaucracy' }
        ],
        landmarks: ['grand cathedral', 'thieves\' guild hideout', 'noble estate', 'fighting pit', 'black market', 'wizard\'s tower', 'royal palace', 'prison fortress', 'merchant quarter', 'slum district', 'arena', 'university', 'temple district', 'docks'],
        creatures: ['assassins', 'city guards', 'noble houses', 'thieves\' guilds', 'cult cells', 'wererats', 'doppelgangers', 'vampire spawn', 'corrupt officials', 'rival adventurers', 'street gangs', 'mercenary companies']
    },

    abyssal: {
        id: 'abyssal',
        name: 'Abyssal',
        description: 'The infinite layers of chaos where demons spawn and madness reigns',
        atmosphere: ['screaming winds', 'blood-red skies', 'constant warfare', 'reality tears', 'suffering echoes', 'corruption seeping'],
        environmentalHazards: [
            { name: 'Demonic Corruption', effect: 'DC 14 Wisdom save daily or alignment shifts one step toward chaotic evil' },
            { name: 'Blood Rain', effect: 'Acidic blood falls from sky, 1d6 acid damage per round exposed' },
            { name: 'Madness Whispers', effect: 'DC 15 Wisdom save or gain short-term madness for 1d10 minutes' },
            { name: 'Soul Drain', effect: 'Death here risks soul consumption, resurrection requires DC 15 check' },
            { name: 'Layer Shift', effect: 'Ground may drop into different Abyssal layer without warning' },
            { name: 'Demon Horde', effect: 'Constant patrols of lesser demons, encounter every 1d4 hours' },
            { name: 'Flesh Pits', effect: 'Living terrain may consume travelers, DC 16 Strength to escape' }
        ],
        landmarks: ['demon lord\'s citadel', 'fields of bone', 'screaming chasm', 'corruption wellspring', 'prison of souls', 'war camp', 'spawning pits'],
        creatures: ['demons', 'balors', 'mariliths', 'vrocks', 'hezrous', 'glabrezus', 'corrupted souls', 'chaos beasts']
    },

    infernal: {
        id: 'infernal',
        name: 'Infernal',
        description: 'The Nine Hells where devils enforce tyrannical order through contracts and fire',
        atmosphere: ['sulfurous air', 'iron discipline', 'endless bureaucracy', 'burning rivers', 'tormented screams', 'oppressive hierarchy'],
        environmentalHazards: [
            { name: 'Infernal Contract', effect: 'Any agreement may become binding, DC 16 Insight to detect tricks' },
            { name: 'Hellfire Geysers', effect: '4d6 fire damage in 20-foot radius, erupts randomly' },
            { name: 'Soul Harvesting', effect: 'Devils attempt to corrupt mortals, DC 14 Wisdom to resist temptation' },
            { name: 'Brimstone Atmosphere', effect: 'DC 12 Constitution save per hour or 1 level exhaustion' },
            { name: 'Hierarchy Offense', effect: 'Disrespecting a devil\'s rank brings immediate punishment' },
            { name: 'Chain Walls', effect: 'Living chains attempt to bind intruders, DC 15 Dexterity save' },
            { name: 'Memory Tax', effect: 'Devils may demand memories as payment, lose proficiency temporarily' }
        ],
        landmarks: ['archdevil\'s palace', 'soul forge', 'chain tower', 'river Styx crossing', 'contract vault', 'torture chamber', 'war machine foundry'],
        creatures: ['devils', 'pit fiends', 'erinyes', 'bone devils', 'bearded devils', 'lemures', 'chain devils', 'archdevils']
    },

    celestial: {
        id: 'celestial',
        name: 'Celestial',
        description: 'The Upper Planes where divine light illuminates and angels guard sacred truths',
        atmosphere: ['golden radiance', 'heavenly choir', 'pure air', 'eternal peace', 'divine presence', 'overwhelming beauty'],
        environmentalHazards: [
            { name: 'Blinding Radiance', effect: 'Creatures of evil take 2d6 radiant damage per round' },
            { name: 'Divine Judgment', effect: 'Evil acts immediately noticed, celestials respond in 1d4 rounds' },
            { name: 'Overwhelming Peace', effect: 'DC 14 Wisdom save or unable to take violent actions for 1 minute' },
            { name: 'Truth Compulsion', effect: 'DC 15 Charisma save or unable to lie while in holy sites' },
            { name: 'Mortal Fragility', effect: 'Mortals feel inadequate, DC 13 Wisdom or disadvantage on ability checks' },
            { name: 'Time Flows Differently', effect: '1 day here may be 1 week on Material Plane' },
            { name: 'Purity Test', effect: 'Sacred barriers block those with evil in their hearts' }
        ],
        landmarks: ['celestial citadel', 'garden of paradise', 'hall of heroes', 'divine throne room', 'library of all knowledge', 'healing springs', 'judgment court'],
        creatures: ['angels', 'solars', 'planetars', 'devas', 'couatls', 'ki-rin', 'pegasi', 'celestial beings']
    },

    astral: {
        id: 'astral',
        name: 'Astral',
        description: 'The silvery void between planes where thought becomes reality and dead gods drift',
        atmosphere: ['silver emptiness', 'timeless silence', 'floating debris', 'color pools', 'psychic echoes', 'weightlessness'],
        environmentalHazards: [
            { name: 'Psychic Storm', effect: '3d6 psychic damage, DC 15 Intelligence save for half' },
            { name: 'Githyanki Patrol', effect: 'Hostile raiders attack non-gith on sight' },
            { name: 'Dead God Proximity', effect: 'Near divine corpses, DC 14 Wisdom or gain indefinite madness' },
            { name: 'Color Pool Trap', effect: 'Portals may lead anywhere, DC 16 Arcana to identify destination' },
            { name: 'Thought Manifestation', effect: 'Strong emotions become real, DC 13 Wisdom to control' },
            { name: 'Silver Cord Severing', effect: 'Astral projection vulnerable, death if cord cut' },
            { name: 'Timeless Drift', effect: 'No aging, but may lose track of days, weeks, years' }
        ],
        landmarks: ['dead god corpse', 'githyanki fortress', 'color pool cluster', 'astral dreadnought territory', 'planar lighthouse', 'memory palace', 'thought fortress'],
        creatures: ['githyanki', 'githzerai', 'astral dreadnoughts', 'thought eaters', 'psychic entities', 'planar travelers', 'mind flayers']
    }
};

// Helper to get all biomes as array
HookBiomes.getAll = function() {
    return Object.values(this).filter(b => typeof b === 'object' && b.id);
};

// Helper to get random biome
HookBiomes.getRandom = function() {
    const biomes = this.getAll();
    return biomes[Math.floor(Math.random() * biomes.length)];
};

// Helper to get biome by id
HookBiomes.getById = function(id) {
    return this[id] || null;
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HookBiomes;
}
