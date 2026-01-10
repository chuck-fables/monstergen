/**
 * D&D 5e Monster Names Data
 * Contains name lists for each monster type
 */

const MonsterNames = {
    aberration: {
        names: [
            'Xel\'thar', 'Ghoroth', 'Nethrilax', 'Yzorith', 'Quillmind', 'Vexoth', 'Dralgor',
            'Shub\'nareth', 'Eldraxis', 'Mnoroth', 'Cephalyx', 'Thought-Eater', 'Voidmaw',
            'Xibaltor', 'Neurolich', 'Psylok', 'Aberrus', 'Mindflenser', 'Gulgoth',
            'Ithillid', 'Cerebrix', 'Thul\'naar', 'Nyxoth', 'Eye-of-Madness', 'Zanethrix',
            'Abyssal Gazer', 'Krenzithor', 'Ulitharex', 'Oculothrax', 'Braineater',
            'Tentaculon', 'Gibbering Master', 'Psychovore', 'Elderspawn', 'Void Walker',
            'Reality Render', 'Mind Flenser', 'Thought Devourer', 'Chaos Spawn',
            'Aberrant Lord', 'Dream Stalker', 'Nightmare Weaver', 'Soul Ripper',
            'Entropy Beast', 'Madness Incarnate', 'The Unspeakable', 'Far Realm Horror',
            'Dimensional Shambler', 'Alien Intellect', 'The Many-Eyed', 'Psychic Leech',
            'Mind Sovereign', 'Thought Tyrant', 'Aberrant Overmind', 'Eldritch Terror',
            'The Incomprehensible', 'Void Sovereign', 'Chaos Harbinger', 'Madness Lord',
            'The Unknowable', 'Entropy Master', 'Reality Shaper', 'Dimension Walker',
            'The Formless', 'Elder Brain', 'Mind Master', 'Thought Lord', 'Aberrant King',
            'Void Emperor', 'The All-Seeing', 'Chaos King', 'Nightmare Lord',
            'Dream Tyrant', 'Soul Sovereign', 'Eldritch King', 'The Eternal Eye',
            'Mind Emperor', 'Thought Emperor', 'Aberrant Emperor', 'Void King',
            'Reality King', 'Dimension Lord', 'Entropy King', 'Madness Emperor'
        ],
        titles: [
            'the Incomprehensible', 'of the Void', 'the Mind Render', 'of Many Eyes',
            'the Formless', 'of the Deep', 'the All-Seeing', 'of Madness',
            'the Unnameable', 'of the Far Realm', 'the Dream Eater', 'of Chaos',
            'the Soul Drinker', 'of Entropy', 'the Reality Bender', 'of Nightmares'
        ]
    },

    beast: {
        names: [
            'Shadowfang', 'Thunderclaw', 'Stonehide', 'Ironback', 'Swiftwind', 'Bloodmaw',
            'Nightstalker', 'Silvertooth', 'Grimhowl', 'Stormwing', 'Deathclaw',
            'Ghostfur', 'Steelhorn', 'Darkpelt', 'Blazetail', 'Frostbite', 'Venomstrike',
            'Thornback', 'Razorscale', 'Duskrunner', 'Moonhowler', 'Sunmane',
            'Earthshaker', 'Windrider', 'Flameheart', 'Icebreaker', 'Shadowstep',
            'Thunderhoof', 'Stonebreaker', 'Ironjaw', 'Swiftstrike', 'Bloodfang',
            'Nightwing', 'Silverclaw', 'Grimfang', 'Stormhoof', 'Deathstrike',
            'Ghostclaw', 'Steelfang', 'Darkwing', 'Blazefang', 'Frosttooth',
            'Venomfang', 'Thornclaw', 'Razorfang', 'Duskmane', 'Moonwing', 'Sunstrike',
            'Earthcrusher', 'Windrunner', 'Flameclaw', 'Icefang', 'Shadowmaw',
            'Thundermaw', 'Stonefang', 'Ironclaw', 'Swiftfang', 'Bloodclaw',
            'Nightfang', 'Silverscale', 'Grimclaw', 'Stormclaw', 'Deathfang',
            'Ghostfang', 'Steelclaw', 'Darkclaw', 'Blazeclaw', 'Frostclaw',
            'Venomclaw', 'Thornfang', 'Razorclaw', 'Duskfang', 'Moonclaw',
            'Sunclaw', 'Earthfang', 'Windfang', 'Flamefang', 'Iceclaw', 'Alpha',
            'Dire Shadow', 'Great Stalker', 'Prime Hunter', 'Pack Leader',
            'Apex Predator', 'Elder Beast', 'Ancient Terror', 'Primal Horror'
        ],
        titles: [
            'the Savage', 'of the Wild', 'the Untamed', 'of the Hunt',
            'the Predator', 'of the Pack', 'the Alpha', 'of the Forest',
            'the Beast', 'of the Mountains', 'the Hunter', 'of the Plains',
            'the Fierce', 'of the Jungle', 'the Wild One', 'of the Swamp'
        ]
    },

    celestial: {
        names: [
            'Seraphiel', 'Luminara', 'Aurelion', 'Celestine', 'Radiantus', 'Glorion',
            'Solarius', 'Dawnbringer', 'Lightweaver', 'Heavenguard', 'Divinus',
            'Sanctiel', 'Purityx', 'Holyflame', 'Gracewind', 'Eterniel', 'Blessed One',
            'Virtue', 'Holiness', 'Radiance', 'Splendor', 'Glory', 'Magnificence',
            'Celestius', 'Empyrean', 'Astralion', 'Luminoth', 'Aurelius', 'Heliodor',
            'Solanthas', 'Dawnstar', 'Lightbinder', 'Heavensent', 'Divinicus',
            'Sanctus', 'Pureheart', 'Holyguard', 'Gracewing', 'Eternius',
            'Virtueus', 'Radiantheart', 'Splendorus', 'Glorianna', 'Magnificus',
            'Sereniel', 'Harmoniel', 'Justiel', 'Valoriel', 'Hopebringer',
            'Truthseeker', 'Merciful', 'Compassionate', 'Benevolent', 'Righteous',
            'Exalted', 'Hallowed', 'Consecrated', 'Sanctified', 'Anointed',
            'Blessed', 'Holy Arbiter', 'Divine Champion', 'Angelic Guardian',
            'Celestial Protector', 'Heaven\'s Voice', 'Light\'s Herald', 'Dawn\'s Champion',
            'Solar Knight', 'Astral Warden', 'Empyrean Guard', 'Holy Avenger',
            'Divine Justicar', 'Celestial Arbiter', 'Heaven\'s Wrath', 'Light\'s Fury'
        ],
        titles: [
            'the Radiant', 'of the Light', 'the Divine', 'of Heaven',
            'the Blessed', 'of the Sun', 'the Holy', 'of Glory',
            'the Pure', 'of Grace', 'the Exalted', 'of Virtue',
            'the Magnificent', 'of Eternity', 'the Celestial', 'of Dawn'
        ]
    },

    construct: {
        names: [
            'Ironclad', 'Steelguard', 'Bronzeheart', 'Mithrilcore', 'Adamantius',
            'Clockwork', 'Geargrind', 'Pistonpunch', 'Steamfist', 'Mechanicus',
            'Warforged', 'Sentinelix', 'Guardian', 'Protector', 'Defender',
            'Automatrix', 'Servitor', 'Executor', 'Enforcer', 'Warden',
            'Colossus', 'Titan', 'Juggernaut', 'Behemoth', 'Leviathan',
            'Iron Golem', 'Steel Sentinel', 'Bronze Guardian', 'Stone Colossus',
            'Clay Enforcer', 'Flesh Golem', 'Shield Guardian', 'Helmed Horror',
            'Animated Armor', 'Living Statue', 'Mechanical Beast', 'Clockwork Soldier',
            'Steam Golem', 'Gear Guardian', 'Piston Protector', 'War Machine',
            'Battle Construct', 'Siege Engine', 'Fortress Walker', 'Tower Guardian',
            'Gate Keeper', 'Vault Defender', 'Treasury Sentinel', 'Tomb Guardian',
            'Crypt Watcher', 'Temple Protector', 'Shrine Defender', 'Altar Guardian',
            'Sacred Sentinel', 'Holy Construct', 'Divine Automaton', 'Blessed Guardian',
            'Sanctified Defender', 'Consecrated Protector', 'Hallowed Sentinel',
            'Eternal Watcher', 'Tireless Guardian', 'Unceasing Defender',
            'Perpetual Sentinel', 'Endless Protector', 'Immortal Guardian',
            'Indestructible', 'Invincible', 'Unstoppable', 'Unbreakable'
        ],
        titles: [
            'the Eternal', 'of Iron', 'the Tireless', 'of Steel',
            'the Immutable', 'of Stone', 'the Guardian', 'of Bronze',
            'the Defender', 'of Mithril', 'the Sentinel', 'of Adamantine',
            'the Protector', 'of the Forge', 'the Unbreakable', 'of the Vault'
        ]
    },

    dragon: {
        names: [
            'Infernothrax', 'Glaciuswing', 'Tempestscale', 'Venomfang', 'Shadowbane',
            'Aurelion', 'Pyroclastus', 'Frostmourne', 'Stormrend', 'Acidmaw',
            'Nightterror', 'Goldenhoard', 'Emberclaw', 'Icevein', 'Thunderwing',
            'Corrosix', 'Darkflight', 'Sunscorch', 'Glacialus', 'Cyclonix',
            'Ancalagon', 'Balerion', 'Smaug', 'Fafnir', 'Glaurung', 'Nidhogg',
            'Tiamatrix', 'Bahamutian', 'Chromatus', 'Dracolich', 'Drakonid',
            'Wyrmlord', 'Dragonking', 'Scalelord', 'Wingmaster', 'Clawtitan',
            'Fanglord', 'Fireking', 'Icedrake', 'Stormdragon', 'Acidwyrm',
            'Shadowdrake', 'Lightdragon', 'Voidwyrm', 'Chaosdrake', 'Orderdragon',
            'Elderdrake', 'Ancientwyrm', 'Primaldragon', 'Titanwyrm', 'Goddrake',
            'Worldender', 'Realmburner', 'Planetscorcher', 'Stardevourer',
            'Moonbane', 'Sunslayer', 'Skyrend', 'Earthshatter', 'Oceanboiler',
            'Mountainmelter', 'Forestburner', 'Cityrazor', 'Kingslayer',
            'Godkiller', 'Titanslayer', 'Herosbane', 'Armageddon', 'Apocalypse',
            'Cataclysm', 'Devastation', 'Annihilation', 'Extinction', 'Oblivion'
        ],
        titles: [
            'the Ancient', 'of Fire', 'the Destroyer', 'of Ice',
            'the Magnificent', 'of Lightning', 'the Terrible', 'of Acid',
            'the Feared', 'of Shadow', 'the Mighty', 'of Light',
            'the Dread', 'of the Mountain', 'the Great', 'of the Sky'
        ]
    },

    elemental: {
        names: [
            'Ignatius', 'Aquaron', 'Terravex', 'Aerolith', 'Pyronus', 'Hydrovex',
            'Geomancer', 'Windcaller', 'Flameheart', 'Tidecaller', 'Stonelord',
            'Stormborn', 'Infernix', 'Frostide', 'Earthshaker', 'Galeforce',
            'Magmanus', 'Maelstrom', 'Tremorus', 'Cycloneus', 'Emberlord',
            'Wavemaster', 'Quartzian', 'Zephyrus', 'Blazeking', 'Tsunamix',
            'Crystallus', 'Tempestus', 'Volcanix', 'Glacierus', 'Seismicus',
            'Hurricanus', 'Lavabeast', 'Icestorm', 'Sandstorm', 'Tornado',
            'Fire Elemental', 'Water Elemental', 'Earth Elemental', 'Air Elemental',
            'Magma Elemental', 'Ice Elemental', 'Sand Elemental', 'Storm Elemental',
            'Lightning Elemental', 'Steam Elemental', 'Mud Elemental', 'Dust Elemental',
            'Smoke Elemental', 'Ash Elemental', 'Crystal Elemental', 'Metal Elemental',
            'Primordial', 'Elemental Lord', 'Plane Walker', 'Chaos Elemental',
            'Pure Element', 'Essence Incarnate', 'Elemental Prince', 'Elemental King',
            'Elemental Emperor', 'Elemental Titan', 'Elemental Colossus',
            'Primal Fire', 'Primal Water', 'Primal Earth', 'Primal Air',
            'Living Flame', 'Living Wave', 'Living Stone', 'Living Wind'
        ],
        titles: [
            'the Burning', 'of Fire', 'the Raging', 'of Water',
            'the Unyielding', 'of Earth', 'the Howling', 'of Air',
            'the Scorching', 'of the Volcano', 'the Freezing', 'of the Ocean',
            'the Crushing', 'of the Mountain', 'the Swift', 'of the Storm'
        ]
    },

    fey: {
        names: [
            'Titania', 'Oberon', 'Mab', 'Puck', 'Peaseblossom', 'Cobweb', 'Moth',
            'Mustardseed', 'Gossamer', 'Dewdrop', 'Moonbeam', 'Starlight',
            'Willowisp', 'Thornrose', 'Mistwalker', 'Dreamweaver', 'Shadowdancer',
            'Glimmer', 'Sparkle', 'Twinkle', 'Shimmer', 'Flicker', 'Glow',
            'Faelight', 'Pixiedust', 'Spritewind', 'Nymphsong', 'Dryadsigh',
            'Satyrlaughter', 'Centaurhoof', 'Unicornmane', 'Gryphonwing',
            'Phoenixfeather', 'Dragonfly', 'Butterfly', 'Firefly', 'Ladybug',
            'Bumblebee', 'Honeydew', 'Nectar', 'Pollen', 'Blossom', 'Petal',
            'Leaf', 'Twig', 'Branch', 'Root', 'Bark', 'Moss', 'Fern',
            'Mushroom', 'Toadstool', 'Acorn', 'Pinecone', 'Holly', 'Ivy',
            'Mistletoe', 'Hawthorn', 'Willow', 'Oak', 'Ash', 'Elder',
            'Rowan', 'Birch', 'Alder', 'Hazel', 'Apple', 'Cherry',
            'Quicksilver', 'Moondust', 'Stardust', 'Sunbeam', 'Rainbow',
            'Aurora', 'Twilight', 'Dawn', 'Dusk', 'Midnight', 'Noon'
        ],
        titles: [
            'the Enchanting', 'of the Glade', 'the Whimsical', 'of the Moon',
            'the Trickster', 'of the Forest', 'the Beautiful', 'of the Stars',
            'the Mysterious', 'of Dreams', 'the Graceful', 'of the Wild',
            'the Alluring', 'of Twilight', 'the Ethereal', 'of the Feywild'
        ]
    },

    fiend: {
        names: [
            'Malachar', 'Belzebrus', 'Asmodion', 'Mephistar', 'Baalzephon',
            'Demogorgus', 'Orculus', 'Yeenogrus', 'Zuggtmora', 'Jubilexia',
            'Pazuziel', 'Graz\'ztus', 'Fraz-Urb\'lux', 'Kostchtchion', 'Dagonath',
            'Hellspawn', 'Soulreaper', 'Demonlord', 'Devillord', 'Pitfiend',
            'Balorus', 'Marilithia', 'Glabrezux', 'Hezrouix', 'Vrocki',
            'Barbed One', 'Horned Devil', 'Chain Master', 'Bone Devil',
            'Ice Devil', 'Pit Lord', 'War Devil', 'Erinyes', 'Succubi',
            'Incubi', 'Shadow Fiend', 'Fire Fiend', 'Frost Fiend', 'Storm Fiend',
            'Plague Fiend', 'Famine Fiend', 'War Fiend', 'Death Fiend',
            'Pain Lord', 'Suffering Master', 'Torment Bringer', 'Agony Dealer',
            'Soul Trader', 'Contract Keeper', 'Deal Maker', 'Bargain Striker',
            'Infernal Duke', 'Abyssal Prince', 'Hell Knight', 'Demon General',
            'Devil Captain', 'Fiend Commander', 'Legion Master', 'Horde Leader',
            'Corruption', 'Temptation', 'Damnation', 'Perdition', 'Ruination',
            'Devastation', 'Annihilation', 'Obliteration', 'Extermination'
        ],
        titles: [
            'the Damned', 'of the Pit', 'the Corruptor', 'of Hell',
            'the Tempter', 'of the Abyss', 'the Destroyer', 'of Suffering',
            'the Tormentor', 'of Darkness', 'the Malevolent', 'of Pain',
            'the Infernal', 'of Fire', 'the Abyssal', 'of Damnation'
        ]
    },

    giant: {
        names: [
            'Thundrok', 'Mountaincrusher', 'Earthshaker', 'Stormbringer', 'Frostgiant',
            'Firetitan', 'Cloudwalker', 'Hillbreaker', 'Stonefist', 'Iceheart',
            'Flamelord', 'Skyking', 'Rockthrower', 'Boulderback', 'Cliffhanger',
            'Avalanche', 'Earthquake', 'Volcano', 'Glacier', 'Typhoon',
            'Grom', 'Thok', 'Krug', 'Morg', 'Zog', 'Brak', 'Drog', 'Frek',
            'Grak', 'Hruk', 'Jok', 'Krak', 'Lok', 'Mrok', 'Nok', 'Prok',
            'Rok', 'Srok', 'Trok', 'Urok', 'Vrok', 'Wrok', 'Yrok', 'Zrok',
            'Goliathus', 'Titanicus', 'Colossux', 'Behemothix', 'Leviathanix',
            'Jotunheim', 'Ymir', 'Surtur', 'Thrym', 'Skadi', 'Aegir',
            'Ran', 'Fornjot', 'Kari', 'Logi', 'Hler', 'Gymir', 'Gerd',
            'Angrboda', 'Bestla', 'Farbauti', 'Laufey', 'Mimir', 'Vafthrudnir',
            'Hill Giant', 'Stone Giant', 'Frost Giant', 'Fire Giant',
            'Cloud Giant', 'Storm Giant', 'Death Giant', 'Fomorian',
            'Cyclops', 'Ettin', 'Ogre', 'Troll'
        ],
        titles: [
            'the Mighty', 'of the Mountains', 'the Colossal', 'of the Hills',
            'the Thunderous', 'of Ice', 'the Crushing', 'of Fire',
            'the Towering', 'of the Clouds', 'the Enormous', 'of the Storm',
            'the Massive', 'of Stone', 'the Gigantic', 'of the Earth'
        ]
    },

    humanoid: {
        names: [
            'The Masked One', 'The Hooded Figure', 'The Cloaked Stranger',
            'The Unknown', 'The Nameless', 'The Faceless', 'The Mysterious',
            'The Shadow', 'The Ghost', 'The Phantom', 'The Specter',
            'The Wraith', 'The Spirit', 'The Shade', 'The Silhouette'
        ],
        titles: [
            'the Cunning', 'of the Shadows', 'the Wise', 'of the Order',
            'the Bold', 'of the Guild', 'the Swift', 'of the Night',
            'the Strong', 'of the Kingdom', 'the Clever', 'of the Realm',
            'the Deadly', 'of the Wilds', 'the Mysterious', 'of the Tower'
        ]
    },

    monstrosity: {
        names: [
            'Chimeron', 'Manticorix', 'Griffonheart', 'Basiliskus', 'Medusara',
            'Hydragorn', 'Cerberux', 'Minotauros', 'Centaurus', 'Harpyia',
            'Sphinxara', 'Lamiar', 'Gorgonix', 'Cyclopsis', 'Scyllax',
            'Charybdix', 'Echidnar', 'Typhonix', 'Orthrusar', 'Nemeanix',
            'Kraken', 'Leviathan', 'Behemoth', 'Tarrasque', 'Catoblepas',
            'Cockatrice', 'Peryton', 'Roc', 'Wyvern', 'Bulette', 'Ankheg',
            'Carrion Crawler', 'Chuul', 'Cloaker', 'Darkmantle', 'Displacer Beast',
            'Ettercap', 'Girallon', 'Grick', 'Griffon', 'Harpy', 'Hell Hound',
            'Hippogriff', 'Hook Horror', 'Howler', 'Hydra', 'Kruthik',
            'Lamia', 'Leucrotta', 'Manticore', 'Medusa', 'Mimic', 'Minotaur',
            'Naga', 'Owlbear', 'Phase Spider', 'Purple Worm', 'Remorhaz',
            'Rust Monster', 'Salamander', 'Sphinx', 'Stirge', 'Umber Hulk',
            'Winter Wolf', 'Worg', 'Yeti', 'Yuan-ti Abomination', 'Basilisk',
            'Chimera', 'Cockatrice', 'Doppelganger', 'Drider', 'Froghemoth'
        ],
        titles: [
            'the Horrifying', 'of the Depths', 'the Monstrous', 'of the Caves',
            'the Terrifying', 'of the Wilds', 'the Fearsome', 'of the Mountains',
            'the Dreadful', 'of the Forest', 'the Nightmarish', 'of the Swamp',
            'the Grotesque', 'of the Desert', 'the Abhorrent', 'of the Underdark'
        ]
    },

    ooze: {
        names: [
            'The Formless', 'The Shapeless', 'The Amorphous', 'The Protoplasm',
            'Gelatinous', 'Slime', 'Pudding', 'Jelly', 'Glob', 'Blob',
            'Ooze Lord', 'Slime King', 'Pudding Master', 'Jelly Queen',
            'The Consumer', 'The Dissolver', 'The Corroder', 'The Engulfer',
            'Acidic Mass', 'Corrosive Blob', 'Digestive Horror', 'Living Acid',
            'Gray Ooze', 'Black Pudding', 'Gelatinous Cube', 'Ochre Jelly',
            'Mustard Jelly', 'Green Slime', 'Crystal Ooze', 'Magma Ooze',
            'Psychic Gray Ooze', 'Adult Oblex', 'Elder Oblex', 'Slithering Tracker',
            'The Hungry', 'The Endless', 'The Patient', 'The Waiting',
            'The Dissolving', 'The Absorbing', 'The Growing', 'The Spreading',
            'Plasmodium', 'Cytoplasm', 'Protoplasmic', 'Amoeboid', 'Pseudopodic',
            'Blobular', 'Gelatinoid', 'Mucoid', 'Viscoid', 'Colloid',
            'The Creeping', 'The Crawling', 'The Flowing', 'The Seeping',
            'The Dripping', 'The Oozing', 'The Spreading', 'The Expanding'
        ],
        titles: [
            'the Consuming', 'of Acid', 'the Dissolving', 'of the Depths',
            'the Endless', 'of the Sewers', 'the Hungry', 'of the Dungeon',
            'the Patient', 'of the Caves', 'the Spreading', 'of the Underdark',
            'the Growing', 'of the Pit', 'the Absorbing', 'of Corruption'
        ]
    },

    plant: {
        names: [
            'Thornwood', 'Vinemaster', 'Rootlord', 'Leafbringer', 'Blossomdeath',
            'Fungalord', 'Sporeling', 'Mossheart', 'Fernking', 'Treant',
            'Shambling Mound', 'Myconid', 'Vegepygmy', 'Blighted', 'Awakened',
            'Dryad', 'Hamadryad', 'Green Man', 'Wood Woad', 'Twig Blight',
            'Needle Blight', 'Vine Blight', 'Corpse Flower', 'Yellow Musk',
            'Assassin Vine', 'Violet Fungus', 'Shrieker', 'Gas Spore',
            'Phantom Fungus', 'Phycomid', 'Basidirond', 'Ascomoid', 'Ustilagor',
            'Ixitxachitl', 'Kelpie', 'Seaweed', 'Algae', 'Plankton',
            'Elderoak', 'Ironwood', 'Darkwood', 'Silverleaf', 'Goldenbough',
            'Crimsonvine', 'Shadowroot', 'Moonflower', 'Sunblossom', 'Starpetal',
            'Poisonivy', 'Deathcap', 'Bloodthorn', 'Boneleaf', 'Soulroot',
            'Nightshade', 'Hemlock', 'Belladonna', 'Wolfsbane', 'Mandrake',
            'Forest Guardian', 'Grove Protector', 'Woodland Spirit', 'Nature\'s Wrath',
            'Green Fury', 'Verdant Rage', 'Primal Growth', 'Wild Overgrowth'
        ],
        titles: [
            'the Overgrown', 'of the Forest', 'the Verdant', 'of the Grove',
            'the Thorny', 'of the Garden', 'the Rooted', 'of the Marsh',
            'the Blooming', 'of the Jungle', 'the Spreading', 'of the Wilds',
            'the Growing', 'of Nature', 'the Entangling', 'of the Woods'
        ]
    },

    undead: {
        names: [
            'Gravemaw', 'Bonelord', 'Soulreaver', 'Deathwhisper', 'Tombkeeper',
            'Cryptwalker', 'Shadowbane', 'Nightstalker', 'Doomhowl', 'Fearmonger',
            'Lich King', 'Vampire Lord', 'Mummy Lord', 'Death Knight', 'Wraith Lord',
            'Ghost King', 'Specter', 'Phantom', 'Poltergeist', 'Banshee',
            'Revenant', 'Wight', 'Ghoul', 'Ghast', 'Zombie', 'Skeleton',
            'Vampire Spawn', 'Mummy', 'Shadow', 'Specter', 'Spirit',
            'Necromancer', 'Death Priest', 'Bone Collector', 'Soul Harvester',
            'Grave Digger', 'Crypt Keeper', 'Tomb Guardian', 'Corpse Master',
            'Flesh Weaver', 'Spirit Binder', 'Ghost Caller', 'Death Speaker',
            'The Risen', 'The Returned', 'The Awakened', 'The Restless',
            'The Eternal', 'The Deathless', 'The Undying', 'The Immortal',
            'Boneyard', 'Graveyard', 'Cemetery', 'Catacomb', 'Crypt',
            'Morgue', 'Ossuary', 'Mausoleum', 'Sepulcher', 'Tomb',
            'Necrosis', 'Mortis', 'Thanatos', 'Mors', 'Letum',
            'Decay', 'Rot', 'Corruption', 'Putrefaction', 'Decomposition'
        ],
        titles: [
            'the Deathless', 'of the Grave', 'the Eternal', 'of the Crypt',
            'the Risen', 'of the Tomb', 'the Undying', 'of Death',
            'the Lifeless', 'of Darkness', 'the Soulless', 'of the Night',
            'the Cursed', 'of Shadows', 'the Damned', 'of the Abyss'
        ]
    },

    /**
     * Generate a random name for a monster type
     */
    generateName(type, includeTitle = true) {
        const typeData = this[type];
        if (!typeData) return 'Unknown Creature';

        const name = typeData.names[Math.floor(Math.random() * typeData.names.length)];

        if (includeTitle && typeData.titles && Math.random() > 0.5) {
            const title = typeData.titles[Math.floor(Math.random() * typeData.titles.length)];
            return `${name} ${title}`;
        }

        return name;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MonsterNames;
}
