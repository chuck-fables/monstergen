/**
 * Landmark Data for Location Generator
 * Natural features, wilderness locations, and biome-specific elements
 */

const LocationLandmarks = {
    /**
     * Wilderness Scales - Macro to Micro
     */
    scales: {
        macroBiome: {
            id: 'macroBiome',
            name: 'Macro-Region',
            description: 'Vast geographical features spanning hundreds of miles',
            examples: ['Mountain Range', 'Great Forest', 'Desert Expanse', 'Coastal Region', 'Underground Network'],
            contains: ['mesoArea'],
            explorationTime: 'Weeks to months'
        },
        mesoArea: {
            id: 'mesoArea',
            name: 'Meso-Area',
            description: 'Distinct areas within larger regions, spanning miles',
            examples: ['Valley', 'Cave System', 'River Delta', 'Forest Grove', 'Canyon'],
            contains: ['microLandmark'],
            explorationTime: 'Days to weeks'
        },
        microLandmark: {
            id: 'microLandmark',
            name: 'Micro-Landmark',
            description: 'Specific points of interest, spanning feet to hundreds of feet',
            examples: ['Ancient Tree', 'Sacred Spring', 'Rock Formation', 'Small Cave', 'Clearing'],
            contains: [],
            explorationTime: 'Minutes to hours'
        }
    },

    /**
     * Biome-specific landmark types
     */
    biomes: {
        forest: {
            id: 'forest',
            name: 'Forest',
            atmosphere: ['Dappled sunlight through leaves', 'Birdsong and rustling', 'Moss-covered everything', 'Ancient and watchful'],
            macroFeatures: [
                { name: 'The Endless Wood', desc: 'A forest so vast no one has mapped its center' },
                { name: 'The Petrified Forest', desc: 'Stone trees from an ancient cataclysm' },
                { name: 'The Feywood Marches', desc: 'Where the material plane thins near the Feywild' }
            ],
            mesoFeatures: [
                { name: 'Druid Grove', desc: 'Ancient circle of standing stones amid towering oaks' },
                { name: 'The Fungal Hollow', desc: 'Valley filled with bioluminescent mushrooms' },
                { name: 'Spider Wood', desc: 'Section of forest claimed by giant arachnids' },
                { name: 'The Quiet', desc: 'Area where no bird sings and no wind blows' },
                { name: 'Treant Territory', desc: 'Where the oldest trees walk' }
            ],
            microFeatures: [
                { type: 'tree', name: 'The Grandfather Oak', desc: 'A tree so old it remembers the first elves', effect: 'Commune with nature cast here reaches further' },
                { type: 'tree', name: 'The Hangman\'s Willow', desc: 'Vines that move with purpose', effect: 'Restless dead rise within 100 feet' },
                { type: 'tree', name: 'The Wishing Bough', desc: 'A silver-leafed tree where prayers are answered', effect: 'One request per visitor, price unknown' },
                { type: 'spring', name: 'Moonwell', desc: 'Pool that glows silver under moonlight', effect: 'Water heals 1d8 HP if drunk under full moon' },
                { type: 'spring', name: 'The Bitter Spring', desc: 'Water that tastes of regret', effect: 'Drinkers must succeed DC 15 Wis save or confess their worst secret' },
                { type: 'rock', name: 'The Lover\'s Stone', desc: 'Heart-shaped boulder where vows are made', effect: 'Oaths sworn here cannot be broken without consequence' },
                { type: 'clearing', name: 'The Dancing Circle', desc: 'A ring of mushrooms where nothing grows inside', effect: 'On certain nights, fey hold revels here' },
                { type: 'ruin', name: 'The Overgrown Shrine', desc: 'Ancient altar consumed by roots', effect: 'The deity worshipped here is forgotten, but still listening' }
            ],
            discoveries: [
                'A cache of elven arrows hidden in a hollow trunk',
                'Map carved into bark showing a path to somewhere',
                'Skeleton of an adventurer clutching a journal',
                'Fey circle that wasn\'t here yesterday',
                'Animal trail that leads somewhere impossible'
            ]
        },

        mountain: {
            id: 'mountain',
            name: 'Mountain',
            atmosphere: ['Thin air and echoing silence', 'Snow-capped peaks', 'Vertigo-inducing heights', 'Ancient and unyielding'],
            macroFeatures: [
                { name: 'The Spine of the World', desc: 'Mountain range dividing continents' },
                { name: 'The Shattered Peaks', desc: 'Mountains broken by ancient magic' },
                { name: 'The Volcanic Chain', desc: 'Active volcanoes that smoke continuously' }
            ],
            mesoFeatures: [
                { name: 'The Dwarf Holds', desc: 'Abandoned dwarven passages through the mountain' },
                { name: 'Dragon\'s Roost', desc: 'Peaks where wyrms make their lairs' },
                { name: 'The Frozen Pass', desc: 'Only route through, deadly in winter' },
                { name: 'Giant\'s Staircase', desc: 'Natural formation like massive steps' },
                { name: 'The Echo Chamber', desc: 'Valley where sounds repeat for hours' }
            ],
            microFeatures: [
                { type: 'rock', name: 'The Crying Stone', desc: 'Boulder that weeps water that never freezes', effect: 'Water from here never freezes' },
                { type: 'rock', name: 'The Oracle\'s Perch', desc: 'Flat stone where seers once spoke', effect: 'Divination spells cast here gain +2 to the roll' },
                { type: 'rock', name: 'Titan\'s Finger', desc: 'Pillar of stone pointing at the sky', effect: 'Lightning strikes here during storms (8d6 damage)' },
                { type: 'cave', name: 'The Whispering Crevasse', desc: 'Crack in the mountain that speaks in dead languages', effect: 'Comprehend Languages reveals prophecies' },
                { type: 'cave', name: 'The Hot Vent', desc: 'Steam rises from deep below', effect: 'Rest here in comfort regardless of weather' },
                { type: 'spring', name: 'The Frozen Pool', desc: 'Lake of ice that never melts', effect: 'Things placed beneath the ice are preserved forever' },
                { type: 'leyline', name: 'The Convergence', desc: 'Where multiple ley lines meet atop the peak', effect: 'All spell slots recovered on short rest, once per month' },
                { type: 'ruin', name: 'The Watchtower', desc: 'Ancient fortification clinging to the cliffside', effect: 'Can see 50 miles on clear days' }
            ],
            discoveries: [
                'Entrance to a dwarven mine, sealed from inside',
                'Dragon scale the size of a shield',
                'Petrified corpse of something enormous',
                'Shrine to a mountain god still receiving offerings',
                'Natural bridge across an impossible chasm'
            ]
        },

        desert: {
            id: 'desert',
            name: 'Desert',
            atmosphere: ['Scorching sun and freezing nights', 'Endless dunes shifting', 'Mirage-haunted horizons', 'Ancient empires buried below'],
            macroFeatures: [
                { name: 'The Sea of Glass', desc: 'Desert where sand was fused by ancient fire' },
                { name: 'The Bone Wastes', desc: 'Graveyard of a titan or army' },
                { name: 'The Singing Dunes', desc: 'Desert that produces eerie music in the wind' }
            ],
            mesoFeatures: [
                { name: 'The Buried City', desc: 'Ruins of a civilization consumed by sand' },
                { name: 'The Salt Flats', desc: 'Blinding white expanse of crystallized sea' },
                { name: 'The Oasis Network', desc: 'Connected water sources with hidden routes' },
                { name: 'The Sandworm Territory', desc: 'Ground that shakes with their passing' },
                { name: 'The Mirage Fields', desc: 'Area where illusions are almost real' }
            ],
            microFeatures: [
                { type: 'spring', name: 'The Living Oasis', desc: 'Water that seems to beckon travelers', effect: 'Sentient and trades water for stories' },
                { type: 'spring', name: 'The Poison Well', desc: 'Water that looks pure but kills', effect: 'DC 18 Con save or take 6d6 poison damage' },
                { type: 'rock', name: 'The Sundial Stone', desc: 'Ancient marker that tracks celestial events', effect: 'Reveals hidden locations at specific times' },
                { type: 'rock', name: 'The Night Rock', desc: 'Black stone that stays cool in any heat', effect: 'Comfortable rest, but haunted by dreams' },
                { type: 'ruin', name: 'The Half-Buried Temple', desc: 'Only the top floor remains above sand', effect: 'Lower levels hold treasures and traps' },
                { type: 'tree', name: 'The Petrified Forest', desc: 'Stone trees from before the desert', effect: 'Each tree is a trapped elemental' },
                { type: 'leyline', name: 'The Fire Line', desc: 'Where fire magic runs wild', effect: 'Fire spells deal max damage but also hurt caster' },
                { type: 'clearing', name: 'The Glass Crater', desc: 'Perfect circle of fused sand', effect: 'Site of an ancient magical catastrophe' }
            ],
            discoveries: [
                'Map showing oasis locations, some marked with skulls',
                'Mummified merchant with intact goods',
                'Entrance to underground tomb, sand slowly filling it',
                'Rare desert bloom with alchemical properties',
                'Crashed flying vessel half-buried in sand'
            ]
        },

        swamp: {
            id: 'swamp',
            name: 'Swamp',
            atmosphere: ['Thick fog and murky water', 'Constant buzzing and croaking', 'Rotting vegetation', 'Sucking mud and treacherous footing'],
            macroFeatures: [
                { name: 'The Drowned Lands', desc: 'Flooded kingdom slowly sinking' },
                { name: 'The Festering Marsh', desc: 'Disease breeds in every pool' },
                { name: 'The Witch Moors', desc: 'Where hags and covens gather' }
            ],
            mesoFeatures: [
                { name: 'The Lizardfolk Village', desc: 'Stilt houses above the waterline' },
                { name: 'The Will-o\'-Wisp Trails', desc: 'Lights that lead travelers astray' },
                { name: 'The Corpse Garden', desc: 'Where the dead don\'t stay buried' },
                { name: 'The Black Water', desc: 'Pools of liquid darkness' },
                { name: 'The Hag\'s Domain', desc: 'Territory claimed by a coven' }
            ],
            microFeatures: [
                { type: 'tree', name: 'The Hangman\'s Cypress', desc: 'Tree where criminals were executed', effect: 'Ghosts of the hanged haunt at night' },
                { type: 'tree', name: 'The Mother Tree', desc: 'Massive mangrove where shambling mounds birth', effect: 'Plant creatures are drawn here' },
                { type: 'spring', name: 'The Boiling Pool', desc: 'Superheated by something below', effect: 'Entrance to the Plane of Fire' },
                { type: 'spring', name: 'The Memory Water', desc: 'Shows visions of those who died here', effect: 'Scrying without components, but traumatic' },
                { type: 'rock', name: 'The Sunken Altar', desc: 'Half-submerged ritual site', effect: 'Dark rituals performed here have greater power' },
                { type: 'ruin', name: 'The Flooded Tower', desc: 'Mage\'s tower slowly drowning', effect: 'Library partially salvageable' },
                { type: 'clearing', name: 'The Dry Patch', desc: 'Only solid ground for miles', effect: 'Something keeps the water away' },
                { type: 'leyline', name: 'The Death Line', desc: 'Where necrotic energy pools', effect: 'Undead are stronger, healing is weaker' }
            ],
            discoveries: [
                'Skeleton clutching a sealed scroll case',
                'Boat with no visible damage, abandoned',
                'Trail of bodies leading somewhere',
                'Hag\'s bargain written on preserved skin',
                'Treasure chest stuck in the mud, booby-trapped'
            ]
        },

        coastal: {
            id: 'coastal',
            name: 'Coastal',
            atmosphere: ['Salt spray and crying gulls', 'Crashing waves and distant storms', 'Rocky cliffs and hidden coves', 'Treasure and tragedy'],
            macroFeatures: [
                { name: 'The Shipwreck Coast', desc: 'Miles of dangerous reefs and wrecks' },
                { name: 'The Pirate Isles', desc: 'Archipelago ruled by sea raiders' },
                { name: 'The Leviathan\'s Wake', desc: 'Waters where something massive sleeps' }
            ],
            mesoFeatures: [
                { name: 'Smuggler\'s Bay', desc: 'Hidden cove used for illegal trade' },
                { name: 'The Siren Rocks', desc: 'Reefs where songs lure ships to doom' },
                { name: 'The Tidal Caves', desc: 'Accessible only at low tide' },
                { name: 'The Merfolk Shoals', desc: 'Territory of underwater civilization' },
                { name: 'The Ghost Fleet Anchorage', desc: 'Where phantom ships gather' }
            ],
            microFeatures: [
                { type: 'rock', name: 'The Widow\'s Watch', desc: 'Cliff where families awaited lost ships', effect: 'Ghosts appear on stormy nights' },
                { type: 'rock', name: 'The Tide Stone', desc: 'Boulder revealed only at lowest tide', effect: 'Messages carved by merfolk' },
                { type: 'spring', name: 'The Sweet Spring', desc: 'Fresh water emerging in salt water', effect: 'Heals sailors\' scurvy (1d4 days of rations)' },
                { type: 'cave', name: 'The Sea Cave', desc: 'Cavern filled at high tide', effect: 'Treasure washes in, and predators' },
                { type: 'cave', name: 'The Dragon Turtle\'s Lair', desc: 'Ancient creature\'s dwelling', effect: 'Tributes of gold keep it sleeping' },
                { type: 'ruin', name: 'The Lighthouse', desc: 'Abandoned beacon, light still burns', effect: 'No one maintains it, but it never goes out' },
                { type: 'leyline', name: 'The Storm Line', desc: 'Where weather magic concentrates', effect: 'Weather control spells are easier but unpredictable' },
                { type: 'clearing', name: 'The Beach of Bones', desc: 'Shore covered in whale skeletons', effect: 'Whales come here to die, and to speak' }
            ],
            discoveries: [
                'Message in a bottle with coordinates',
                'Pirate cache buried beneath a marked rock',
                'Survivor from a shipwreck with a story',
                'Map to a sunken treasure ship',
                'Triton artifact washed ashore'
            ]
        },

        underground: {
            id: 'underground',
            name: 'Underground/Underdark',
            atmosphere: ['Absolute darkness beyond torchlight', 'Dripping water and echoes', 'Alien life adapted to lightlessness', 'Crushing weight above'],
            macroFeatures: [
                { name: 'The Deepways', desc: 'Network of tunnels spanning continents' },
                { name: 'The Buried Sea', desc: 'Underground ocean with its own ecosystem' },
                { name: 'The Fungal Forest', desc: 'Miles of towering mushrooms' }
            ],
            mesoFeatures: [
                { name: 'The Drow Outpost', desc: 'Spider-worshipping elves\' forward base' },
                { name: 'The Crystal Caves', desc: 'Chambers of enormous gemstones' },
                { name: 'The Aboleth Lake', desc: 'Ancient evil lurks in the depths' },
                { name: 'The Forge City', desc: 'Duergar industrial complex' },
                { name: 'The Myconid Colony', desc: 'Mushroom people\'s community' }
            ],
            microFeatures: [
                { type: 'rock', name: 'The Singing Stone', desc: 'Crystal that produces eerie music', effect: 'Navigation aid, or lure for predators' },
                { type: 'rock', name: 'The Memory Crystal', desc: 'Records everything said near it', effect: 'Thousands of years of secrets stored' },
                { type: 'spring', name: 'The Darkwater Pool', desc: 'Water black as void', effect: 'Reveals invisible things, causes blindness in light' },
                { type: 'spring', name: 'The Blood Spring', desc: 'Red liquid that isn\'t water', effect: 'Healing properties, addictive' },
                { type: 'cave', name: 'The Breathing Cavern', desc: 'Air moves in and out rhythmically', effect: 'Something massive sleeps beyond' },
                { type: 'tree', name: 'The Zurkwood Grove', desc: 'Giant mushrooms like trees', effect: 'Wood-like material for construction' },
                { type: 'leyline', name: 'The Faerzress', desc: 'Wild magic radiation zone', effect: 'Teleportation fails, wild magic surges' },
                { type: 'ruin', name: 'The Illithid Archive', desc: 'Mind flayer library, abandoned', effect: 'Knowledge drives readers mad' }
            ],
            discoveries: [
                'Passage to the surface, well hidden',
                'Drow merchant dead, goods intact',
                'Map of tunnel systems, partially accurate',
                'Myconid offering a deal in spores',
                'Ancient artifact from a race that no longer exists'
            ]
        },

        arctic: {
            id: 'arctic',
            name: 'Arctic/Tundra',
            atmosphere: ['Blinding white and bitter cold', 'Howling winds and silence', 'Aurora dancing overhead', 'Life struggling against oblivion'],
            macroFeatures: [
                { name: 'The Ice Sheet', desc: 'Glacier the size of a kingdom' },
                { name: 'The Frozen Sea', desc: 'Ocean locked in eternal ice' },
                { name: 'The White Waste', desc: 'Tundra where nothing grows' }
            ],
            mesoFeatures: [
                { name: 'The Ice Cave Network', desc: 'Tunnels through ancient glaciers' },
                { name: 'The Frozen City', desc: 'Civilization preserved in ice' },
                { name: 'The Hot Springs', desc: 'Oasis of warmth in the cold' },
                { name: 'The Frost Giant Hold', desc: 'Jarl\'s fortress of ice and stone' },
                { name: 'The Mammoth Graveyard', desc: 'Where ancient beasts came to die' }
            ],
            microFeatures: [
                { type: 'rock', name: 'The Compass Stone', desc: 'Points to magnetic north, which is wrong here', effect: 'Navigation disrupted within a mile' },
                { type: 'rock', name: 'The Warm Rock', desc: 'Stone that never gets cold', effect: 'Comfortable rest, but attracts predators' },
                { type: 'spring', name: 'The Never-Freeze', desc: 'Pool that stays liquid in any cold', effect: 'Water from here grants cold resistance for 1 hour' },
                { type: 'spring', name: 'The Geyser', desc: 'Periodic eruption of steam', effect: 'Scalding damage if caught, warmth otherwise' },
                { type: 'cave', name: 'The Ice Tomb', desc: 'Frozen remains of something ancient', effect: 'Perfectly preserved, possibly awakening' },
                { type: 'tree', name: 'The Spirit Tree', desc: 'Lone tree where shamans commune', effect: 'Contact Other Plane once per month' },
                { type: 'leyline', name: 'The Aurora Point', desc: 'Where northern lights touch ground', effect: 'Divination magic enhanced, illusions unstable' },
                { type: 'ruin', name: 'The Research Station', desc: 'Abandoned expedition camp', effect: 'Supplies and a mystery about what happened' }
            ],
            discoveries: [
                'Frozen explorer with map to their destination',
                'Cache of preserved supplies',
                'Entrance to ice caves below',
                'Native tribe\'s sacred site',
                'Something thawing that shouldn\'t be'
            ]
        },

        planar: {
            id: 'planar',
            name: 'Planar/Extraplanar',
            atmosphere: ['Reality behaves differently', 'Colors and sensations beyond mortal', 'Danger from existence itself', 'Wonder and terror'],
            macroFeatures: [
                { name: 'The Astral Void', desc: 'Silver sea between worlds' },
                { name: 'The Elemental Chaos', desc: 'Where all elements war eternally' },
                { name: 'The Celestial Mountains', desc: 'Upper planes\' divine realm' }
            ],
            mesoFeatures: [
                { name: 'The Color Pool', desc: 'Portal cluster in the Astral' },
                { name: 'The Dead God\'s Corpse', desc: 'Drifting remains of a deity' },
                { name: 'The Githyanki Fortress', desc: 'Raider city on an asteroid' },
                { name: 'The Modron March Route', desc: 'Path of clockwork beings' },
                { name: 'The Demon Prince\'s Throne', desc: 'Seat of abyssal power' }
            ],
            microFeatures: [
                { type: 'rock', name: 'Reality Anchor', desc: 'Stone that keeps local space stable', effect: 'Normal physics apply within 100 feet' },
                { type: 'rock', name: 'Memory Stone', desc: 'Absorbs and replays experiences', effect: 'Witness history from the stone\'s perspective' },
                { type: 'spring', name: 'The Pool of Possibilities', desc: 'Liquid that shows alternate outcomes', effect: 'Glimpse what might have been' },
                { type: 'spring', name: 'Soul Water', desc: 'Essence of departed spirits', effect: 'Speak with dead without a body' },
                { type: 'leyline', name: 'The Nexus Point', desc: 'Where all planes touch', effect: 'Plane Shift without components, destination random' },
                { type: 'leyline', name: 'The Time Eddy', desc: 'Where time flows differently', effect: 'Minutes inside, days outside (or reverse)' },
                { type: 'ruin', name: 'The Fallen Citadel', desc: 'Celestial fortress crashed from above', effect: 'Divine artifacts amid angelic dead' },
                { type: 'clearing', name: 'The Stable Zone', desc: 'Island of normalcy in chaos', effect: 'Safe rest in an unsafe plane' }
            ],
            discoveries: [
                'Planar compass showing nearby portals',
                'Message from a trapped traveler',
                'Artifact from another world',
                'Map of the local planar geography',
                'Being that needs help returning home'
            ]
        }
    },

    /**
     * Regional Effects by landmark type
     */
    regionalEffects: {
        tree: [
            'Animals within a mile are more docile',
            'The seasons are shifted around this tree',
            'Dreams of those who sleep nearby are shared',
            'Magic detection reveals a vast root network below'
        ],
        rock: [
            'Magnetic interference disrupts compasses',
            'The stone hums at certain times',
            'Writing appears and disappears on the surface',
            'Shadows point toward it regardless of light source'
        ],
        spring: [
            'The water level never changes',
            'Reflections show things that aren\'t there',
            'Fish in the water speak prophecy',
            'The water\'s properties change with the moon'
        ],
        cave: [
            'Temperature inside doesn\'t match outside',
            'Echoes repeat words not spoken',
            'Something breathes in the deepest part',
            'Drawings on the walls animate at night'
        ],
        leyline: [
            'Magic feels different within the zone',
            'Wild magic surges occur during full moons',
            'Spellcasters feel drawn to the location',
            'Non-magical items sometimes gain temporary enchantments'
        ],
        clearing: [
            'The grass never grows past a certain height',
            'No predators enter the space',
            'Time feels slower or faster here',
            'Stars are visible even during the day'
        ],
        ruin: [
            'Ghosts reenact past events at midnight',
            'Hidden rooms phase in and out of existence',
            'The original purpose is slowly returning',
            'Treasures reform if taken too far'
        ]
    }
};

// Helper functions
LocationLandmarks.getScale = function(id) {
    return this.scales[id] || null;
};

LocationLandmarks.getBiome = function(id) {
    return this.biomes[id] || null;
};

LocationLandmarks.getAllBiomes = function() {
    return Object.values(this.biomes);
};

LocationLandmarks.getRegionalEffects = function(type) {
    return this.regionalEffects[type] || [];
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LocationLandmarks;
}
