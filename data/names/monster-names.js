/**
 * D&D 5e Monster Names Data
 * Contains extensive name lists for each monster type
 * Names are organized to match statblock themes (e.g., fire elementals get fire names)
 */

const MonsterNames = {
    aberration: {
        names: [
            // Mind/Psychic themed
            'Xel\'thar', 'Ghoroth', 'Nethrilax', 'Yzorith', 'Quillmind', 'Vexoth', 'Dralgor',
            'Shub\'nareth', 'Eldraxis', 'Mnoroth', 'Cephalyx', 'Thought-Eater', 'Voidmaw',
            'Xibaltor', 'Neurolich', 'Psylok', 'Aberrus', 'Mindflenser', 'Gulgoth',
            'Ithillid', 'Cerebrix', 'Thul\'naar', 'Nyxoth', 'Zanethrix', 'Krenzithor',
            'Ulitharex', 'Oculothrax', 'Braineater', 'Tentaculon', 'Psychovore',
            // Void/Chaos themed
            'Voidspawn', 'Chaosweaver', 'Realityrend', 'Dimensionrift', 'Entropyborn',
            'Nullspace', 'Voidwalker', 'Chaosborn', 'Realitybreaker', 'Dimensionwalker',
            'Entropymaw', 'Nullvoid', 'Voidling', 'Chaosling', 'Realityling',
            'Voidheart', 'Chaosheart', 'Realityheart', 'Dimensionheart', 'Entropyheart',
            // Eye/Gaze themed
            'Eye-of-Madness', 'Abyssal Gazer', 'The All-Seeing', 'Thousand-Eyes',
            'Ocularis', 'Gazerender', 'Sightstealer', 'Visionbane', 'Eyeless One',
            'Blind Watcher', 'The Unblinking', 'Ever-Watching', 'Lidless Horror',
            'Pupil of Chaos', 'Iris of Doom', 'Cornea of Madness', 'Retinal Horror',
            // Tentacle/Physical themed
            'Tentaclord', 'Graspingmaw', 'Writhing Mass', 'Coiling Horror', 'Appendage King',
            'Tendrilmaw', 'Grasping Doom', 'Writhing Horror', 'Coiling Dread', 'Appendage Lord',
            'Squirming Nightmare', 'Undulating Terror', 'Pulsating Horror', 'Throbbing Dread',
            // Madness themed
            'Madness Incarnate', 'Insanity\'s Child', 'Lunacy Born', 'Delirium Spawn',
            'Hysteria\'s Voice', 'Mania\'s Vessel', 'Dementia\'s Hand', 'Psychosis Manifest',
            'The Unhinged', 'The Deranged', 'The Unraveled', 'The Fractured Mind',
            // Eldritch/Cosmic themed
            'Far Realm Horror', 'Cosmic Aberration', 'Star Spawn', 'Astral Nightmare',
            'Cosmic Dread', 'Stellar Horror', 'Nebula Spawn', 'Galaxy Eater',
            'Universal Wrongness', 'Celestial Corruption', 'Interstellar Madness',
            'Eldritch Spawn', 'Eldritch Nightmare', 'Eldritch Horror', 'Eldritch Terror',
            // Titles/Unique
            'The Incomprehensible', 'The Unknowable', 'The Unfathomable', 'The Unspeakable',
            'The Indescribable', 'The Unnameable', 'The Formless One', 'The Shapeless Horror',
            'Mind Sovereign', 'Thought Tyrant', 'Aberrant Overmind', 'Elder Brain',
            'Void Emperor', 'Chaos King', 'Reality Shaper', 'Dimension Lord',
            'Aberrant King', 'Mind Emperor', 'Thought Emperor', 'Void Sovereign',
            'Entropy Master', 'Madness Lord', 'Dream Tyrant', 'Nightmare Weaver'
        ],
        titles: [
            'the Incomprehensible', 'of the Void', 'the Mind Render', 'of Many Eyes',
            'the Formless', 'of the Deep', 'the All-Seeing', 'of Madness',
            'the Unnameable', 'of the Far Realm', 'the Dream Eater', 'of Chaos',
            'the Soul Drinker', 'of Entropy', 'the Reality Bender', 'of Nightmares',
            'the Thought Thief', 'of Insanity', 'the Mind Breaker', 'of the Cosmos',
            'the Sanity Slayer', 'of the Stars', 'the Psyche Render', 'of the Abyss'
        ]
    },

    beast: {
        names: [
            // Predator names
            'Shadowfang', 'Bloodmaw', 'Deathclaw', 'Razorfang', 'Steeltooth',
            'Ironjaw', 'Bonecrusher', 'Skullripper', 'Spinesnapper', 'Neckbreaker',
            'Gutripper', 'Fleshrender', 'Sinewtearer', 'Musclerend', 'Limbshredder',
            'Nightstalker', 'Duskhunter', 'Dawnprowler', 'Twilightchaser', 'Moonhowler',
            'Sunmane', 'Starfang', 'Skywatcher', 'Cloudrunner', 'Stormchaser',
            // Pack/Alpha names
            'Alpha', 'Pack Leader', 'Apex Predator', 'Prime Hunter', 'Great Stalker',
            'Elder Beast', 'Ancient Terror', 'Primal Horror', 'First Born', 'Last Hunter',
            'Lone Wolf', 'Rogue Hunter', 'Outcast Predator', 'Exile Stalker', 'Wandering Terror',
            // Environmental names
            'Thunderclaw', 'Stormwing', 'Lightninghoof', 'Thunderhoof', 'Stormhide',
            'Frostbite', 'Icefang', 'Snowmane', 'Wintercoat', 'Coldpelt',
            'Blazetail', 'Flamemane', 'Firefur', 'Emberpelt', 'Scorchclaw',
            'Stonehide', 'Ironback', 'Steelscale', 'Bronzepelt', 'Coppermane',
            'Swiftwind', 'Galerunner', 'Breezefoot', 'Zephyrwing', 'Windstrider',
            'Earthshaker', 'Groundpounder', 'Terrawalker', 'Dustrunner', 'Sandstrider',
            // Descriptive names
            'Grimhowl', 'Dreadmaw', 'Terrorjaw', 'Fearclaw', 'Panicfang',
            'Silvertooth', 'Goldenmane', 'Bronzeclaw', 'Copperfang', 'Ironpelt',
            'Ghostfur', 'Shadowpelt', 'Darkcoat', 'Nightfur', 'Duskmane',
            'Swiftstrike', 'Quickclaw', 'Rapidfang', 'Hastepelt', 'Speedmane',
            'Mightyjaw', 'Powerback', 'Strongclaw', 'Forcefang', 'Crushpelt',
            // Size descriptors
            'Dire Shadow', 'Greater Stalker', 'Lesser Hunter', 'Giant Prowler',
            'Massive Predator', 'Colossal Beast', 'Enormous Terror', 'Titanic Horror',
            'Miniature Menace', 'Tiny Terror', 'Small Stalker', 'Little Nightmare'
        ],
        titles: [
            'the Savage', 'of the Wild', 'the Untamed', 'of the Hunt',
            'the Predator', 'of the Pack', 'the Alpha', 'of the Forest',
            'the Beast', 'of the Mountains', 'the Hunter', 'of the Plains',
            'the Fierce', 'of the Jungle', 'the Wild One', 'of the Swamp',
            'the Feral', 'of the Tundra', 'the Primal', 'of the Savanna',
            'the Relentless', 'of the Desert', 'the Cunning', 'of the Steppes'
        ]
    },

    celestial: {
        names: [
            // Angelic names
            'Seraphiel', 'Cherubiel', 'Throniel', 'Dominiel', 'Virtuael',
            'Poweriel', 'Principiel', 'Archangiel', 'Angelius', 'Seraphinus',
            'Celestiel', 'Diviniel', 'Sanctiel', 'Gloriel', 'Radiel',
            // Light/Radiance themed
            'Luminara', 'Radiantus', 'Brilliance', 'Effulgence', 'Resplendence',
            'Luminoth', 'Radiantor', 'Brilliantor', 'Effulgent One', 'Resplendent',
            'Lightweaver', 'Lightbringer', 'Lightbearer', 'Lightkeeper', 'Lightward',
            'Dawnbringer', 'Dawnkeeper', 'Dawnward', 'Dawnstar', 'Dawnlight',
            'Sunbringer', 'Sunkeeper', 'Sunward', 'Sunstar', 'Sunlight',
            'Starlight', 'Starkeeper', 'Starward', 'Starborn', 'Starchild',
            'Moonbeam', 'Moonkeeper', 'Moonward', 'Moonborn', 'Moonchild',
            // Divine/Holy themed
            'Aurelion', 'Glorion', 'Sanctus', 'Divinus', 'Benedictus',
            'Holiness', 'Purity', 'Virtue', 'Grace', 'Mercy',
            'Compassion', 'Benevolence', 'Righteousness', 'Justice', 'Truth',
            'Holyguard', 'Holyblade', 'Holyshield', 'Holyflame', 'Holylight',
            'Sacredone', 'Sacredguard', 'Sacredblade', 'Sacredshield', 'Sacredflame',
            // Heaven/Sky themed
            'Heavenguard', 'Heavensent', 'Heavenward', 'Heavenborn', 'Heavenchild',
            'Skyguard', 'Skywatcher', 'Skyward', 'Skyborn', 'Skychild',
            'Empyrean', 'Empyreal', 'Celestius', 'Celestine', 'Celestia',
            'Astralion', 'Astralus', 'Astralis', 'Astralborn', 'Astralchild',
            // Virtue themed
            'Valoriel', 'Justiel', 'Hopebringer', 'Faithkeeper', 'Truthseeker',
            'Merciful', 'Graceful', 'Virtuous', 'Righteous', 'Benevolent',
            'Exalted', 'Hallowed', 'Consecrated', 'Sanctified', 'Anointed',
            'Blessed', 'Holy Arbiter', 'Divine Champion', 'Angelic Guardian',
            'Celestial Protector', 'Heaven\'s Voice', 'Light\'s Herald', 'Dawn\'s Champion',
            'Solar Knight', 'Astral Warden', 'Empyrean Guard', 'Holy Avenger'
        ],
        titles: [
            'the Radiant', 'of the Light', 'the Divine', 'of Heaven',
            'the Blessed', 'of the Sun', 'the Holy', 'of Glory',
            'the Pure', 'of Grace', 'the Exalted', 'of Virtue',
            'the Magnificent', 'of Eternity', 'the Celestial', 'of Dawn',
            'the Merciful', 'of the Stars', 'the Righteous', 'of Justice',
            'the Glorious', 'of Compassion', 'the Hallowed', 'of Truth'
        ]
    },

    construct: {
        names: [
            // Metal types
            'Ironclad', 'Steelguard', 'Bronzeheart', 'Coppercoil', 'Silvershell',
            'Goldframe', 'Platinumcore', 'Mithrilmind', 'Adamantius', 'Orichalcum',
            'Irongolem', 'Steelgolem', 'Bronzegolem', 'Coppergolem', 'Silvergolem',
            'Ironbody', 'Steelbody', 'Bronzebody', 'Copperbody', 'Silverbody',
            // Mechanical names
            'Clockwork', 'Geargrind', 'Cogwhirl', 'Sprocket', 'Pistonpunch',
            'Steamfist', 'Mechanicus', 'Automaton', 'Mechanism', 'Apparatus',
            'Clockwork Soldier', 'Clockwork Guardian', 'Clockwork Knight', 'Clockwork Sentinel',
            'Gear Guardian', 'Gear Sentinel', 'Gear Protector', 'Gear Defender',
            'Steam Golem', 'Steam Guardian', 'Steam Sentinel', 'Steam Protector',
            // Guardian/Protector themed
            'Sentinel', 'Guardian', 'Protector', 'Defender', 'Warden',
            'Keeper', 'Watcher', 'Observer', 'Overseer', 'Monitor',
            'Shield Guardian', 'Gate Keeper', 'Vault Defender', 'Treasury Sentinel',
            'Tomb Guardian', 'Crypt Watcher', 'Temple Protector', 'Shrine Defender',
            'Altar Guardian', 'Sacred Sentinel', 'Holy Construct', 'Divine Automaton',
            // Size/Power themed
            'Colossus', 'Titan', 'Juggernaut', 'Behemoth', 'Leviathan',
            'War Machine', 'Battle Construct', 'Siege Engine', 'Fortress Walker',
            'Tower Guardian', 'Castle Sentinel', 'Citadel Defender', 'Stronghold Watcher',
            // Material themed
            'Stone Colossus', 'Clay Enforcer', 'Flesh Golem', 'Bone Construct',
            'Wood Golem', 'Crystal Construct', 'Glass Guardian', 'Ice Automaton',
            'Living Statue', 'Animated Armor', 'Helmed Horror', 'Sword Guardian',
            // Abstract
            'The Tireless', 'The Eternal', 'The Immutable', 'The Unceasing',
            'The Perpetual', 'The Endless', 'The Immortal', 'The Unbreakable',
            'Indestructible', 'Invincible', 'Unstoppable', 'Impervious'
        ],
        titles: [
            'the Eternal', 'of Iron', 'the Tireless', 'of Steel',
            'the Immutable', 'of Stone', 'the Guardian', 'of Bronze',
            'the Defender', 'of Mithril', 'the Sentinel', 'of Adamantine',
            'the Protector', 'of the Forge', 'the Unbreakable', 'of the Vault',
            'the Unwavering', 'of the Gate', 'the Resolute', 'of the Temple',
            'the Steadfast', 'of the Crypt', 'the Vigilant', 'of the Treasury'
        ]
    },

    dragon: {
        // Organized by element to match breath weapons
        fire: [
            'Infernothrax', 'Pyroclastus', 'Emberclaw', 'Blazeking', 'Volcanix',
            'Magmawing', 'Ashscale', 'Cinderhorn', 'Flamelord', 'Scorchwing',
            'Infernox', 'Pyrovex', 'Emberstorm', 'Blazethorn', 'Volcanus',
            'Magmabreath', 'Ashenwing', 'Cinderscale', 'Flamehorn', 'Scorchtail',
            'Fireking', 'Firelord', 'Firedrake', 'Firewyrm', 'Firedragon',
            'Burningwrath', 'Blazingfury', 'Scorchingterror', 'Searingdoom', 'Flamingdeath',
            'Redfang', 'Redscale', 'Redwing', 'Redclaw', 'Redhorn',
            'Crimsonscale', 'Crimsonfang', 'Crimsonwing', 'Crimsonclaw', 'Crimsonhorn',
            'Surtur\'s Spawn', 'Flame Emperor', 'Ash King', 'Cinder Lord', 'Ember Tyrant'
        ],
        cold: [
            'Glaciuswing', 'Frostmourne', 'Icevein', 'Glacialus', 'Frostbite',
            'Winterscale', 'Icehorn', 'Coldsnap', 'Frostlord', 'Chillfang',
            'Glaciax', 'Frostyx', 'Icestorm', 'Coldwrath', 'Winterfury',
            'Blizzardwing', 'Snowscale', 'Hailhorn', 'Permafrost', 'Absolutezero',
            'Iceking', 'Icelord', 'Icedrake', 'Icewyrm', 'Icedragon',
            'Freezingdeath', 'Frostingterror', 'Chillingdoom', 'Coldingfury', 'Winteringwrath',
            'Whitefang', 'Whitescale', 'Whitewing', 'Whiteclaw', 'Whitehorn',
            'Silverfrost', 'Silverbite', 'Silverchill', 'Silverwinter', 'Silverice',
            'Thrym\'s Child', 'Frost Emperor', 'Ice King', 'Winter Lord', 'Cold Tyrant'
        ],
        lightning: [
            'Tempestscale', 'Stormrend', 'Thunderwing', 'Cyclonix', 'Tempestus',
            'Stormborn', 'Lightningfang', 'Thunderclaw', 'Boltscale', 'Sparkwing',
            'Tempestyx', 'Stormyx', 'Thunderstorm', 'Cycloneus', 'Hurricanus',
            'Galewing', 'Tornadoscale', 'Volthorn', 'Shockfang', 'Staticscale',
            'Stormking', 'Stormlord', 'Stormdrake', 'Stormwyrm', 'Stormdragon',
            'Thunderingdeath', 'Lightningfury', 'Boltingterror', 'Shockingdoom', 'Stormingwrath',
            'Bluefang', 'Bluescale', 'Bluewing', 'Blueclaw', 'Bluehorn',
            'Azurestorm', 'Azurebolt', 'Azureshock', 'Azurevolt', 'Azureflash',
            'Thor\'s Fury', 'Storm Emperor', 'Thunder King', 'Lightning Lord', 'Tempest Tyrant'
        ],
        acid: [
            'Venomfang', 'Acidmaw', 'Corrosix', 'Dissolvex', 'Toxiscale',
            'Causticwing', 'Vitriolhorn', 'Corrodeclaw', 'Acidlord', 'Venomscale',
            'Venomyx', 'Acidyx', 'Corrosive', 'Dissolver', 'Toxicus',
            'Causticbreath', 'Vitriolscale', 'Corrodehorn', 'Acidfang', 'Venomwing',
            'Acidking', 'Acidlord', 'Aciddrake', 'Acidwyrm', 'Aciddragon',
            'Dissolvingdeath', 'Corrodingfury', 'Meltingterror', 'Eatingdoom', 'Acidingwrath',
            'Greenfang', 'Greenscale', 'Greenwing', 'Greenclaw', 'Greenhorn',
            'Viridianvenom', 'Viridiancorrosive', 'Viridianacid', 'Viridiantoxin', 'Viridianpoison',
            'Venom Emperor', 'Acid King', 'Corrosive Lord', 'Caustic Tyrant', 'Toxic Sovereign'
        ],
        poison: [
            'Poisonfang', 'Toxicmaw', 'Venomwing', 'Plaguescale', 'Blighthorn',
            'Noxiouswing', 'Miasmabreath', 'Pestilentscale', 'Poisonlord', 'Toxicscale',
            'Poisonyx', 'Toxicyx', 'Venomous', 'Plaguebringer', 'Blightbringer',
            'Noxiousbreath', 'Miasmascale', 'Pestilenthorn', 'Poisonfang', 'Toxicwing',
            'Poisonking', 'Poisonlord', 'Poisondrake', 'Poisonwyrm', 'Poisondragon',
            'Plaguingdeath', 'Blightingfury', 'Poisoningterror', 'Toxicingdoom', 'Venomingwrath',
            'Sickgreenfang', 'Sickgreenscale', 'Sickgreenwing', 'Sickgreenclaw', 'Sickgreenhorn',
            'Plague Emperor', 'Blight King', 'Poison Lord', 'Toxic Tyrant', 'Venom Sovereign'
        ],
        // Generic/Chromatic
        names: [
            'Ancalagon', 'Balerion', 'Smaug', 'Fafnir', 'Glaurung', 'Nidhogg',
            'Tiamatrix', 'Bahamutian', 'Chromatus', 'Dracolich', 'Drakonid',
            'Wyrmlord', 'Dragonking', 'Scalelord', 'Wingmaster', 'Clawtitan',
            'Fanglord', 'Tailmaster', 'Breathking', 'Hoardkeeper', 'Goldguard',
            'Elderdrake', 'Ancientwyrm', 'Primaldragon', 'Titanwyrm', 'Goddrake',
            'Worldender', 'Realmburner', 'Planetscorcher', 'Stardevourer', 'Moonbane',
            'Sunslayer', 'Skyrend', 'Earthshatter', 'Oceanboiler', 'Mountainmelter',
            'Shadowdrake', 'Lightdragon', 'Voidwyrm', 'Chaosdrake', 'Orderdragon',
            'Cataclysm', 'Devastation', 'Annihilation', 'Extinction', 'Oblivion',
            'Armageddon', 'Apocalypse', 'Ragnarok', 'Doomsday', 'Judgement'
        ],
        titles: [
            'the Ancient', 'of Fire', 'the Destroyer', 'of Ice',
            'the Magnificent', 'of Lightning', 'the Terrible', 'of Acid',
            'the Feared', 'of Shadow', 'the Mighty', 'of Light',
            'the Dread', 'of the Mountain', 'the Great', 'of the Sky',
            'the Covetous', 'of the Hoard', 'the Ravenous', 'of the Lair',
            'World-Ender', 'Realm-Burner', 'City-Razer', 'Kingdom-Crusher', 'Empire-Breaker'
        ]
    },

    elemental: {
        // Fire elementals
        fire: [
            'Ignatius', 'Pyronus', 'Infernix', 'Blazeking', 'Emberlord',
            'Flameheart', 'Magmanus', 'Volcanix', 'Scorchus', 'Cinderlord',
            'Pyroclast', 'Inferno', 'Blazestorm', 'Embercore', 'Flameburst',
            'Magmaflow', 'Volcanus', 'Scorchfire', 'Cinderfall', 'Ashlord',
            'Fire Elemental', 'Fire Lord', 'Fire King', 'Fire Emperor', 'Fire Titan',
            'Primal Fire', 'Living Flame', 'Fire Incarnate', 'Flame Elemental',
            'Pyreling', 'Flameling', 'Emberling', 'Scorchling', 'Blazeling',
            'Burning One', 'Scorching Terror', 'Searing Horror', 'Blazing Fury',
            'Molten Core', 'Molten Lord', 'Molten King', 'Molten Heart', 'Molten Fury',
            'Lavabeast', 'Lavaborn', 'Lavawalker', 'Lavaheart', 'Lavaking',
            'Heatstorm', 'Heatwave', 'Heatblast', 'Heatpulse', 'Heatlord'
        ],
        water: [
            'Aquaron', 'Hydrovex', 'Tidecaller', 'Wavemaster', 'Tsunamix',
            'Maelstrom', 'Oceanix', 'Depthslord', 'Currentus', 'Riverbane',
            'Aquaflow', 'Hydroblast', 'Tidestorm', 'Wavecrest', 'Tsunamus',
            'Maelstromus', 'Oceanus', 'Depthsking', 'Currentlord', 'Rivertide',
            'Water Elemental', 'Water Lord', 'Water King', 'Water Emperor', 'Water Titan',
            'Primal Water', 'Living Wave', 'Water Incarnate', 'Wave Elemental',
            'Aqualing', 'Waveling', 'Tideling', 'Currentling', 'Streamling',
            'Drowning Horror', 'Crushing Depths', 'Raging Torrent', 'Endless Tide',
            'Frostide', 'Glacierus', 'Icestorm', 'Frostwave', 'Chilltide',
            'Seaspray', 'Seafoam', 'Seaborn', 'Seaheart', 'Seaking'
        ],
        earth: [
            'Terravex', 'Geomancer', 'Stonelord', 'Earthshaker', 'Quartzian',
            'Tremorus', 'Seismicus', 'Boulderlord', 'Rockheart', 'Mountainking',
            'Terraflow', 'Geoblast', 'Stonestorm', 'Earthcrust', 'Quartzus',
            'Tremorus', 'Seismuslord', 'Boulderking', 'Rockmaster', 'Mountainlord',
            'Earth Elemental', 'Earth Lord', 'Earth King', 'Earth Emperor', 'Earth Titan',
            'Primal Earth', 'Living Stone', 'Earth Incarnate', 'Stone Elemental',
            'Terraling', 'Stoneling', 'Rockeling', 'Boulderling', 'Pebbeling',
            'Crushing Stone', 'Grinding Earth', 'Rumbling Mountain', 'Shaking Ground',
            'Crystallus', 'Crystalheart', 'Crystallord', 'Crystalking', 'Crystalborn',
            'Sandstorm', 'Sandheart', 'Sandlord', 'Sandking', 'Sandborn',
            'Mudflow', 'Mudlord', 'Mudking', 'Mudheart', 'Mudborn'
        ],
        air: [
            'Aerolith', 'Windcaller', 'Stormborn', 'Galeforce', 'Zephyrus',
            'Cycloneus', 'Hurricanus', 'Tornadolord', 'Gustmaster', 'Breezeling',
            'Aeroflow', 'Windblast', 'Stormgust', 'Galewind', 'Zephyrborn',
            'Cyclonelord', 'Hurricaneking', 'Tornadoking', 'Gustlord', 'Breezelord',
            'Air Elemental', 'Air Lord', 'Air King', 'Air Emperor', 'Air Titan',
            'Primal Air', 'Living Wind', 'Air Incarnate', 'Wind Elemental',
            'Airling', 'Windling', 'Gustling', 'Breezling', 'Zephyrling',
            'Howling Wind', 'Screaming Gale', 'Raging Storm', 'Endless Tempest',
            'Cloudwalker', 'Cloudborn', 'Cloudlord', 'Cloudking', 'Cloudheart',
            'Skyborn', 'Skylord', 'Skyking', 'Skyheart', 'Skymaster',
            'Thunderborn', 'Thunderlord', 'Thunderking', 'Thunderheart', 'Thundermaster'
        ],
        // Generic elemental names
        names: [
            'Primordial', 'Elemental Lord', 'Elemental King', 'Elemental Emperor',
            'Elemental Titan', 'Elemental Colossus', 'Elemental Prince', 'Elemental Duke',
            'Essence Incarnate', 'Plane Walker', 'Chaos Elemental', 'Pure Element',
            'The Raging', 'The Burning', 'The Freezing', 'The Crushing', 'The Howling',
            'The Scorching', 'The Drowning', 'The Grinding', 'The Screaming'
        ],
        titles: [
            'the Burning', 'of Fire', 'the Raging', 'of Water',
            'the Unyielding', 'of Earth', 'the Howling', 'of Air',
            'the Scorching', 'of the Volcano', 'the Freezing', 'of the Ocean',
            'the Crushing', 'of the Mountain', 'the Swift', 'of the Storm',
            'the Primordial', 'of the Elements', 'the Eternal', 'of the Plane'
        ]
    },

    fey: {
        names: [
            // Court names
            'Titania', 'Oberon', 'Mab', 'Puck', 'Peaseblossom', 'Cobweb', 'Moth',
            'Mustardseed', 'Gossamer', 'Quicksilver', 'Silvermist', 'Goldenlight',
            // Nature themed
            'Dewdrop', 'Moonbeam', 'Starlight', 'Sunray', 'Rainbow',
            'Willowisp', 'Thornrose', 'Fernfriend', 'Mosswhisper', 'Leafdancer',
            'Petalwing', 'Blossomheart', 'Floralkin', 'Gardenspirit', 'Meadowchild',
            'Forestsong', 'Woodlandecho', 'Grovespirit', 'Glenkeeper', 'Copsewalker',
            // Magical themed
            'Glimmer', 'Sparkle', 'Twinkle', 'Shimmer', 'Flicker', 'Glow',
            'Faelight', 'Pixiedust', 'Spritewind', 'Nymphsong', 'Dryadsigh',
            'Glamourweave', 'Enchantment', 'Spellsinger', 'Charmweaver', 'Hexbinder',
            'Dreamweaver', 'Mistwalker', 'Shadowdancer', 'Moonwhisper', 'Stargazer',
            // Trickster themed
            'Tricksy', 'Mischief', 'Prankspur', 'Jestergrin', 'Foolsgold',
            'Riddlekeeper', 'Puzzlemaster', 'Mazewalker', 'Illusionweave', 'Miragemaker',
            // Tree/Plant names
            'Willowsigh', 'Oakenhart', 'Ashenwing', 'Birchsong', 'Alderkin',
            'Hazelwhisper', 'Rowanbark', 'Elderbloom', 'Hawthornspike', 'Ivyclimb',
            'Hollyberry', 'Mistletoekiss', 'Fernfrond', 'Mossmantle', 'Lichencloak',
            // Time themed
            'Twilight', 'Dawn', 'Dusk', 'Midnight', 'Noon',
            'Aurora', 'Eclipse', 'Solstice', 'Equinox', 'Moonrise',
            // Abstract
            'Whimsy', 'Fancy', 'Caprice', 'Reverie', 'Fantasy',
            'Enigma', 'Mystery', 'Wonder', 'Marvel', 'Miracle'
        ],
        titles: [
            'the Enchanting', 'of the Glade', 'the Whimsical', 'of the Moon',
            'the Trickster', 'of the Forest', 'the Beautiful', 'of the Stars',
            'the Mysterious', 'of Dreams', 'the Graceful', 'of the Wild',
            'the Alluring', 'of Twilight', 'the Ethereal', 'of the Feywild',
            'the Capricious', 'of the Court', 'the Beguiling', 'of the Grove',
            'the Mischievous', 'of Illusions', 'the Dancing', 'of Moonlight'
        ]
    },

    fiend: {
        names: [
            // Devil/Infernal themed
            'Malachar', 'Belzebrus', 'Asmodion', 'Mephistar', 'Baalzephon',
            'Hellspawn', 'Pitfiend', 'Infernus', 'Damnation', 'Perdition',
            'Infernal Duke', 'Hell Knight', 'Devil Captain', 'Pit Lord', 'Arch-Devil',
            'Barbed One', 'Horned Devil', 'Chain Master', 'Bone Devil', 'Ice Devil',
            'Contract Keeper', 'Deal Maker', 'Bargain Striker', 'Soul Trader', 'Pact Binder',
            // Demon/Abyssal themed
            'Demogorgus', 'Orculus', 'Yeenogrus', 'Zuggtmora', 'Jubilexia',
            'Pazuziel', 'Graz\'ztus', 'Fraz-Urb\'lux', 'Kostchtchion', 'Dagonath',
            'Demonlord', 'Abyssal Prince', 'Demon General', 'Horde Leader', 'Legion Master',
            'Balorus', 'Marilithia', 'Glabrezux', 'Hezrouix', 'Vrocki',
            'Chaos Spawn', 'Madness Born', 'Destruction Made Flesh', 'Violence Incarnate',
            // Sin themed
            'Wrathborn', 'Greedspawn', 'Lustling', 'Envykin', 'Slothheart',
            'Gluttonmaw', 'Pridefall', 'Sinweaver', 'Vicekeeper', 'Corruptionmaster',
            // Suffering themed
            'Soulreaper', 'Pain Lord', 'Suffering Master', 'Torment Bringer', 'Agony Dealer',
            'Anguishborn', 'Miserymaker', 'Despairweaver', 'Griefbringer', 'Sorrowspawn',
            // Element-themed fiends
            'Fire Fiend', 'Frost Fiend', 'Storm Fiend', 'Shadow Fiend', 'Plague Fiend',
            'War Fiend', 'Death Fiend', 'Famine Fiend', 'Pestilence Fiend', 'Blood Fiend',
            // Generic
            'Corruption', 'Temptation', 'Damnation', 'Perdition', 'Ruination',
            'Devastation', 'Annihilation', 'Obliteration', 'Extermination', 'Eradication',
            'The Damned', 'The Fallen', 'The Corrupted', 'The Twisted', 'The Malformed'
        ],
        titles: [
            'the Damned', 'of the Pit', 'the Corruptor', 'of Hell',
            'the Tempter', 'of the Abyss', 'the Destroyer', 'of Suffering',
            'the Tormentor', 'of Darkness', 'the Malevolent', 'of Pain',
            'the Infernal', 'of Fire', 'the Abyssal', 'of Damnation',
            'the Wicked', 'of Sin', 'the Vile', 'of Corruption',
            'Soul-Taker', 'Deal-Breaker', 'Promise-Keeper', 'Contract-Bound'
        ]
    },

    giant: {
        names: [
            // Nordic inspired
            'Grom', 'Thok', 'Krug', 'Morg', 'Zog', 'Brak', 'Drog', 'Frek',
            'Grak', 'Hruk', 'Jok', 'Krak', 'Lok', 'Mrok', 'Nok', 'Prok',
            'Rok', 'Srok', 'Trok', 'Urok', 'Vrok', 'Wrok', 'Yrok', 'Zrok',
            'Ymir', 'Surtur', 'Thrym', 'Skadi', 'Aegir', 'Ran', 'Fornjot',
            'Kari', 'Logi', 'Hler', 'Gymir', 'Gerd', 'Angrboda', 'Bestla',
            // Type-specific
            'Hill Giant', 'Stone Giant', 'Frost Giant', 'Fire Giant', 'Cloud Giant',
            'Storm Giant', 'Death Giant', 'Fomorian', 'Cyclops', 'Ettin',
            'Hillcrusher', 'Stonehurler', 'Frostbreath', 'Firebeard', 'Cloudwalker',
            'Stormcaller', 'Deathtouched', 'Oneeye', 'Twohead', 'Giantkiller',
            // Descriptive
            'Thundrok', 'Mountaincrusher', 'Earthshaker', 'Stormbringer', 'Boulderfist',
            'Rockthrower', 'Hillbreaker', 'Stonefist', 'Cliffhanger', 'Cavecrusher',
            'Avalanche', 'Earthquake', 'Landslide', 'Rockslide', 'Mudslide',
            // Size themed
            'Goliathus', 'Titanicus', 'Colossux', 'Behemothix', 'Leviathanix',
            'Enormicus', 'Giganticus', 'Massivus', 'Vastus', 'Immensus',
            // Element-based giants
            'Firetitan', 'Frostgiant', 'Stormking', 'Earthlord', 'Cloudking',
            'Flamelord', 'Iceheart', 'Thunderfist', 'Stoneheart', 'Skywalker',
            // Abstract
            'The Towering', 'The Colossal', 'The Massive', 'The Enormous',
            'The Gigantic', 'The Tremendous', 'The Immense', 'The Vast',
            'The Thundering', 'The Crushing', 'The Stomping', 'The Trampling'
        ],
        titles: [
            'the Mighty', 'of the Mountains', 'the Colossal', 'of the Hills',
            'the Thunderous', 'of Ice', 'the Crushing', 'of Fire',
            'the Towering', 'of the Clouds', 'the Enormous', 'of the Storm',
            'the Massive', 'of Stone', 'the Gigantic', 'of the Earth',
            'Rock-Hurler', 'Mountain-Breaker', 'Earth-Shaker', 'Storm-Bringer'
        ]
    },

    humanoid: {
        names: [
            // Mysterious titles
            'The Masked One', 'The Hooded Figure', 'The Cloaked Stranger',
            'The Unknown', 'The Nameless', 'The Faceless', 'The Mysterious',
            'The Shadow', 'The Ghost', 'The Phantom', 'The Specter',
            'The Wraith', 'The Spirit', 'The Shade', 'The Silhouette',
            // Occupation based
            'The Mercenary', 'The Assassin', 'The Thief', 'The Spy', 'The Scout',
            'The Warrior', 'The Knight', 'The Soldier', 'The Guard', 'The Captain',
            'The Mage', 'The Wizard', 'The Sorcerer', 'The Warlock', 'The Witch',
            'The Priest', 'The Cleric', 'The Paladin', 'The Monk', 'The Druid',
            'The Bard', 'The Ranger', 'The Barbarian', 'The Rogue', 'The Fighter',
            // Title based
            'The Leader', 'The Chief', 'The Boss', 'The Master', 'The Lord',
            'The King', 'The Queen', 'The Prince', 'The Princess', 'The Duke',
            'The Baron', 'The Count', 'The Earl', 'The Viscount', 'The Knight',
            // Descriptor based
            'The Scarred', 'The One-Eyed', 'The Tall', 'The Short', 'The Old',
            'The Young', 'The Strong', 'The Swift', 'The Cunning', 'The Wise',
            'The Cruel', 'The Kind', 'The Just', 'The Unjust', 'The Fair'
        ],
        titles: [
            'the Cunning', 'of the Shadows', 'the Wise', 'of the Order',
            'the Bold', 'of the Guild', 'the Swift', 'of the Night',
            'the Strong', 'of the Kingdom', 'the Clever', 'of the Realm',
            'the Deadly', 'of the Wilds', 'the Mysterious', 'of the Tower',
            'the Feared', 'of the Streets', 'the Respected', 'of the Court'
        ]
    },

    monstrosity: {
        names: [
            // Mythological
            'Chimeron', 'Manticorix', 'Griffonheart', 'Basiliskus', 'Medusara',
            'Hydragorn', 'Cerberux', 'Minotauros', 'Centaurus', 'Harpyia',
            'Sphinxara', 'Lamiar', 'Gorgonix', 'Cyclopsis', 'Scyllax',
            'Charybdix', 'Echidnar', 'Typhonix', 'Orthrusar', 'Nemeanix',
            // Creature names
            'Kraken', 'Leviathan', 'Behemoth', 'Tarrasque', 'Catoblepas',
            'Cockatrice', 'Peryton', 'Roc', 'Wyvern', 'Bulette',
            'Ankheg', 'Carrion Crawler', 'Chuul', 'Cloaker', 'Darkmantle',
            'Displacer Beast', 'Ettercap', 'Girallon', 'Grick', 'Griffon',
            'Harpy', 'Hell Hound', 'Hippogriff', 'Hook Horror', 'Howler',
            'Hydra', 'Kruthik', 'Lamia', 'Leucrotta', 'Manticore',
            'Medusa', 'Mimic', 'Minotaur', 'Naga', 'Owlbear',
            'Phase Spider', 'Purple Worm', 'Remorhaz', 'Rust Monster', 'Sphinx',
            'Stirge', 'Umber Hulk', 'Winter Wolf', 'Worg', 'Yeti',
            // Hybrid names
            'Snakehawk', 'Lionscorpion', 'Eaglelion', 'Bullman', 'Horseman',
            'Birdwoman', 'Serpentqueen', 'Spiderlord', 'Wormking', 'Beetlebeast',
            'Wolffire', 'Beartusk', 'Catowl', 'Dogfish', 'Ratking',
            // Descriptive
            'Venomspitter', 'Acidbleeder', 'Flamesnorter', 'Frostbreather', 'Stonegazer',
            'Deathglarer', 'Fearscreamer', 'Mindbreaker', 'Soulstealer', 'Lifedrinker',
            'Bonecrusher', 'Fleshripper', 'Blooddrinker', 'Goreeater', 'Corpsecrawler'
        ],
        titles: [
            'the Horrifying', 'of the Depths', 'the Monstrous', 'of the Caves',
            'the Terrifying', 'of the Wilds', 'the Fearsome', 'of the Mountains',
            'the Dreadful', 'of the Forest', 'the Nightmarish', 'of the Swamp',
            'the Grotesque', 'of the Desert', 'the Abhorrent', 'of the Underdark',
            'the Unnatural', 'of Legend', 'the Aberrant', 'of Myth'
        ]
    },

    ooze: {
        names: [
            // Descriptive
            'The Formless', 'The Shapeless', 'The Amorphous', 'The Protoplasm',
            'The Consumer', 'The Dissolver', 'The Corroder', 'The Engulfer',
            'The Hungry', 'The Endless', 'The Patient', 'The Waiting',
            'The Dissolving', 'The Absorbing', 'The Growing', 'The Spreading',
            'The Creeping', 'The Crawling', 'The Flowing', 'The Seeping',
            'The Dripping', 'The Oozing', 'The Expanding', 'The Consuming',
            // Type names
            'Gelatinous', 'Slime', 'Pudding', 'Jelly', 'Glob', 'Blob',
            'Gray Ooze', 'Black Pudding', 'Gelatinous Cube', 'Ochre Jelly',
            'Mustard Jelly', 'Green Slime', 'Crystal Ooze', 'Magma Ooze',
            'Psychic Gray Ooze', 'Adult Oblex', 'Elder Oblex', 'Slithering Tracker',
            // Color variants
            'Crimson Ooze', 'Azure Slime', 'Emerald Pudding', 'Golden Jelly',
            'Obsidian Blob', 'Ivory Glob', 'Amber Ooze', 'Violet Slime',
            'Scarlet Pudding', 'Sapphire Jelly', 'Jade Blob', 'Bronze Glob',
            // Scientific-ish
            'Plasmodium', 'Cytoplasm', 'Protoplasmic', 'Amoeboid', 'Pseudopodic',
            'Blobular', 'Gelatinoid', 'Mucoid', 'Viscoid', 'Colloid',
            // Royalty
            'Ooze Lord', 'Slime King', 'Pudding Master', 'Jelly Queen', 'Blob Emperor',
            'Ooze Sovereign', 'Slime Monarch', 'Pudding Tyrant', 'Jelly Overlord',
            // Acid-themed
            'Acidic Mass', 'Corrosive Blob', 'Digestive Horror', 'Living Acid',
            'Caustic Puddle', 'Burning Slime', 'Melting Glob', 'Dissolving Mass'
        ],
        titles: [
            'the Consuming', 'of Acid', 'the Dissolving', 'of the Depths',
            'the Endless', 'of the Sewers', 'the Hungry', 'of the Dungeon',
            'the Patient', 'of the Caves', 'the Spreading', 'of the Underdark',
            'the Growing', 'of the Pit', 'the Absorbing', 'of Corruption',
            'the Formless', 'of the Abyss', 'the Shapeless', 'of the Dark'
        ]
    },

    plant: {
        names: [
            // Tree themed
            'Thornwood', 'Darkwood', 'Ironwood', 'Silverleaf', 'Goldenbough',
            'Elderoak', 'Ancientash', 'Primalpine', 'Eternelm', 'Worldtree',
            'Treant', 'Treantlord', 'Forestking', 'Woodlandqueen', 'Groveguardian',
            'Oakenheart', 'Ashenbark', 'Willowsoul', 'Birchspirit', 'Pinewalker',
            // Vine/Root themed
            'Vinemaster', 'Rootlord', 'Tendrilking', 'Branchqueen', 'Leaflord',
            'Crimsonvine', 'Shadowroot', 'Bloodtendril', 'Bonebranch', 'Soulleaf',
            'Assassin Vine', 'Strangling Root', 'Grasping Tendril', 'Reaching Branch',
            // Flower themed
            'Blossomdeath', 'Moonflower', 'Sunblossom', 'Starpetal', 'Dawnbloom',
            'Corpse Flower', 'Yellow Musk', 'Violet Death', 'Crimson Petal', 'Black Rose',
            'Nightshade', 'Hemlock', 'Belladonna', 'Wolfsbane', 'Mandrake',
            // Fungus themed
            'Fungalord', 'Sporeling', 'Mushroking', 'Toadstoolqueen', 'Moldmaster',
            'Myconid', 'Violet Fungus', 'Shrieker', 'Gas Spore', 'Phantom Fungus',
            'Deathcap', 'Bloodcap', 'Bonecap', 'Soulcap', 'Mindcap',
            // Moss/Fern themed
            'Mossheart', 'Fernking', 'Lichenqueen', 'Algaelord', 'Seaweedmaster',
            'Shambling Mound', 'Vegepygmy', 'Twig Blight', 'Needle Blight', 'Vine Blight',
            // Descriptive
            'Forest Guardian', 'Grove Protector', 'Woodland Spirit', 'Nature\'s Wrath',
            'Green Fury', 'Verdant Rage', 'Primal Growth', 'Wild Overgrowth',
            'The Overgrown', 'The Entangling', 'The Thorny', 'The Rooted',
            'Poisonivy', 'Bloodthorn', 'Boneleaf', 'Soulroot', 'Deathblossom'
        ],
        titles: [
            'the Overgrown', 'of the Forest', 'the Verdant', 'of the Grove',
            'the Thorny', 'of the Garden', 'the Rooted', 'of the Marsh',
            'the Blooming', 'of the Jungle', 'the Spreading', 'of the Wilds',
            'the Growing', 'of Nature', 'the Entangling', 'of the Woods',
            'the Blighted', 'of the Swamp', 'the Corrupted', 'of the Deep'
        ]
    },

    undead: {
        names: [
            // Ghost/Spirit themed
            'Gravemaw', 'Tombkeeper', 'Cryptwalker', 'Soulreaver', 'Deathwhisper',
            'Ghost King', 'Specter Lord', 'Phantom Master', 'Spirit Tyrant', 'Shade Emperor',
            'Specter', 'Phantom', 'Poltergeist', 'Banshee', 'Wraith',
            'Revenant', 'Ghost', 'Spirit', 'Shade', 'Apparition',
            'Haunt', 'Spook', 'Phantasm', 'Eidolon', 'Fetch',
            // Skeleton themed
            'Bonelord', 'Skeleking', 'Ossuary Master', 'Rib Tyrant', 'Skull Emperor',
            'Skeleton Knight', 'Skeleton Warrior', 'Skeleton Mage', 'Skeleton Archer',
            'Bone Collector', 'Bone Weaver', 'Bone Shaper', 'Bone Master',
            'Rattlebones', 'Clatterskull', 'Grindbone', 'Snaprib', 'Crackjaw',
            // Zombie/Corpse themed
            'Corpse Master', 'Flesh Weaver', 'Rot Lord', 'Decay King', 'Putrescence',
            'Zombie Lord', 'Zombie King', 'Zombie Master', 'Zombie Tyrant',
            'Ghoul', 'Ghast', 'Wight', 'Mummy', 'Zombie',
            'The Risen', 'The Returned', 'The Awakened', 'The Restless',
            // Vampire themed
            'Vampire Lord', 'Blood King', 'Night Master', 'Crimson Tyrant', 'Sanguine Emperor',
            'Vampire Spawn', 'Blood Drinker', 'Life Stealer', 'Vitae Thief',
            'Nosferatu', 'Strigoi', 'Upir', 'Vrykolakas', 'Dhampir',
            // Lich/Necromancer themed
            'Lich King', 'Necro Lord', 'Death Master', 'Undeath Tyrant', 'Bone Emperor',
            'Necromancer', 'Death Priest', 'Grave Digger', 'Crypt Keeper',
            'Spirit Binder', 'Ghost Caller', 'Death Speaker', 'Soul Harvester',
            // Abstract
            'Shadowbane', 'Nightstalker', 'Doomhowl', 'Fearmonger', 'Dreadlord',
            'The Eternal', 'The Deathless', 'The Undying', 'The Immortal',
            'Necrosis', 'Mortis', 'Thanatos', 'Mors', 'Letum',
            'Decay', 'Rot', 'Corruption', 'Putrefaction', 'Decomposition',
            // Location themed
            'Boneyard', 'Graveyard', 'Cemetery', 'Catacomb', 'Crypt',
            'Morgue', 'Ossuary', 'Mausoleum', 'Sepulcher', 'Tomb'
        ],
        titles: [
            'the Deathless', 'of the Grave', 'the Eternal', 'of the Crypt',
            'the Risen', 'of the Tomb', 'the Undying', 'of Death',
            'the Lifeless', 'of Darkness', 'the Soulless', 'of the Night',
            'the Cursed', 'of Shadows', 'the Damned', 'of the Abyss',
            'the Restless', 'of the Ossuary', 'the Awakened', 'of the Morgue'
        ]
    },

    /**
     * Generate a random name for a monster type
     * For elementals and dragons, can specify element for matching names
     */
    generateName(type, includeTitle = true, element = null) {
        const typeData = this[type];
        if (!typeData) return 'Unknown Creature';

        let namePool;

        // Handle element-specific naming for dragons and elementals
        if (element && typeData[element]) {
            namePool = typeData[element];
        } else if (typeData.names) {
            namePool = typeData.names;
        } else {
            // Fallback for types with only element-specific arrays
            const keys = Object.keys(typeData).filter(k => k !== 'titles' && Array.isArray(typeData[k]));
            if (keys.length > 0) {
                const randomKey = keys[Math.floor(Math.random() * keys.length)];
                namePool = typeData[randomKey];
            } else {
                return 'Unknown Creature';
            }
        }

        const name = namePool[Math.floor(Math.random() * namePool.length)];

        if (includeTitle && typeData.titles && Math.random() > 0.5) {
            const title = typeData.titles[Math.floor(Math.random() * typeData.titles.length)];
            return `${name} ${title}`;
        }

        return name;
    },

    /**
     * Get element-appropriate name for elementals/dragons
     */
    getElementalName(type, element) {
        return this.generateName(type, true, element);
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MonsterNames;
}
