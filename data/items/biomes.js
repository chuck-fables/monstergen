/**
 * Magic Item Biomes Data
 * Defines biome-specific materials, aesthetics, and thematic effects
 */

const ItemBiomes = {
    biomes: {
        tundra: {
            id: 'tundra',
            name: 'Tundra',
            description: 'Frozen wastelands of perpetual ice and bitter winds',
            themes: ['cold', 'endurance', 'isolation', 'preservation'],
            primaryMaterials: [
                { name: 'permafrost iron', desc: 'Metal forged in glacial caves, permanently cold to the touch' },
                { name: 'mammoth ivory', desc: 'Ancient tusk carved with frost-runes' },
                { name: 'aurora crystal', desc: 'Prismatic ice that captures the northern lights' },
                { name: 'white dragonscale', desc: 'Scales from creatures of eternal winter' },
                { name: 'frozen heartwood', desc: 'Wood from trees that grow in magical cold' }
            ],
            secondaryMaterials: [
                { name: 'polar bear fur', desc: 'Thick white pelt that repels water and cold' },
                { name: 'glacier glass', desc: 'Transparent ice compressed over millennia' },
                { name: 'winter wolf leather', desc: 'Hide that seems to breathe frost' },
                { name: 'tundra moss', desc: 'Resilient vegetation that survives impossible cold' },
                { name: 'frost giant bone', desc: 'Dense bones from the lords of winter' }
            ],
            aesthetics: [
                'Rimed with permanent frost',
                'Glows with pale blue light in cold environments',
                'Covered in intricate snowflake patterns',
                'Emanates a constant chill',
                'White and silver coloration throughout'
            ],
            thematicEffects: [
                { type: 'resistance', element: 'cold' },
                { type: 'damage', element: 'cold' },
                { type: 'utility', theme: 'survival in cold' },
                { type: 'utility', theme: 'ice manipulation' },
                { type: 'utility', theme: 'preservation' }
            ]
        },

        taiga: {
            id: 'taiga',
            name: 'Taiga',
            description: 'Dense evergreen forests of the frozen north',
            themes: ['hunting', 'survival', 'nature spirits', 'resilience'],
            primaryMaterials: [
                { name: 'ironwood', desc: 'Dense timber harder than steel' },
                { name: 'dire wolf fang', desc: 'Teeth from the great wolves of the north' },
                { name: 'evergreen heartwood', desc: 'Living wood that never dies' },
                { name: 'elk antler', desc: 'Antlers shed by forest spirits' },
                { name: 'boreal amber', desc: 'Ancient tree sap containing frozen insects' }
            ],
            secondaryMaterials: [
                { name: 'pine resin', desc: 'Fragrant sap with preservative properties' },
                { name: 'owl feathers', desc: 'Silent pinions from nocturnal hunters' },
                { name: 'lynx fur', desc: 'Spotted pelt of forest stalkers' },
                { name: 'bear leather', desc: 'Thick hide from forest guardians' },
                { name: 'spruce bark', desc: 'Weathered bark marked with natural runes' }
            ],
            aesthetics: [
                'Decorated with pine needle motifs',
                'Smells faintly of evergreen',
                'Carved with wolf and bear imagery',
                'Green and brown earth tones',
                'Bound with sinew and natural cordage'
            ],
            thematicEffects: [
                { type: 'utility', theme: 'tracking' },
                { type: 'utility', theme: 'survival' },
                { type: 'utility', theme: 'animal communication' },
                { type: 'combat', theme: 'hunting' },
                { type: 'resistance', element: 'cold' }
            ]
        },

        temperateForest: {
            id: 'temperateForest',
            name: 'Temperate Forest',
            description: 'Ancient woodlands filled with fey magic',
            themes: ['fey', 'growth', 'illusion', 'nature magic'],
            primaryMaterials: [
                { name: 'dryad heartwood', desc: 'Gift-given wood from tree spirits' },
                { name: 'fey silver', desc: 'Metal touched by the Feywild' },
                { name: 'unicorn hair', desc: 'Strands willingly given by noble creatures' },
                { name: 'treant bark', desc: 'Living armor from awakened trees' },
                { name: 'moonpetal silk', desc: 'Fabric woven from flowers that bloom under moonlight' }
            ],
            secondaryMaterials: [
                { name: 'oak leaves', desc: 'Ever-green foliage preserved by druidic magic' },
                { name: 'pixie dust', desc: 'Glittering residue of fey creatures' },
                { name: 'fox fur', desc: 'Rust-red pelt associated with trickery' },
                { name: 'acorn caps', desc: 'Seeds of ancient oaks' },
                { name: 'mushroom leather', desc: 'Flexible material from giant fungi' }
            ],
            aesthetics: [
                'Covered in living vines and moss',
                'Changes color with the seasons',
                'Glimmers with fey light',
                'Decorated with leaf and acorn motifs',
                'Emits the scent of wildflowers'
            ],
            thematicEffects: [
                { type: 'utility', theme: 'illusion' },
                { type: 'utility', theme: 'nature magic' },
                { type: 'utility', theme: 'fey interaction' },
                { type: 'healing', theme: 'natural' },
                { type: 'utility', theme: 'plant control' }
            ]
        },

        rainforest: {
            id: 'rainforest',
            name: 'Rainforest',
            description: 'Steaming jungles teeming with life and poison',
            themes: ['poison', 'vitality', 'camouflage', 'primal power'],
            primaryMaterials: [
                { name: 'jungle jade', desc: 'Deep green stone pulsing with life energy' },
                { name: 'poison frog skin', desc: 'Iridescent hide containing deadly toxins' },
                { name: 'kapok heartwood', desc: 'Sacred wood from the world-tree' },
                { name: 'anaconda scales', desc: 'Scales from giant constrictors' },
                { name: 'orchid gold', desc: 'Metal infused with rare flower essences' }
            ],
            secondaryMaterials: [
                { name: 'parrot feathers', desc: 'Brilliant plumage of rainbow hues' },
                { name: 'rubber sap', desc: 'Flexible material from jungle trees' },
                { name: 'jaguar pelt', desc: 'Spotted fur of apex predators' },
                { name: 'vine cordage', desc: 'Strong natural rope from climbing plants' },
                { name: 'beetle carapace', desc: 'Iridescent shells from giant insects' }
            ],
            aesthetics: [
                'Bright, tropical coloration',
                'Covered in jungle flower motifs',
                'Slightly damp to the touch',
                'Hums with the sound of insects',
                'Camouflage pattern that shifts and moves'
            ],
            thematicEffects: [
                { type: 'damage', element: 'poison' },
                { type: 'utility', theme: 'camouflage' },
                { type: 'healing', theme: 'regeneration' },
                { type: 'utility', theme: 'climbing' },
                { type: 'resistance', element: 'poison' }
            ]
        },

        grasslands: {
            id: 'grasslands',
            name: 'Grasslands',
            description: 'Endless plains under vast open skies',
            themes: ['speed', 'freedom', 'weather', 'cavalry'],
            primaryMaterials: [
                { name: 'thunderhorse mane', desc: 'Hair from storm-touched steeds' },
                { name: 'prairie bronze', desc: 'Sun-kissed metal that never tarnishes' },
                { name: 'bison horn', desc: 'Dense horn from great herd beasts' },
                { name: 'wind-woven grass', desc: 'Magically strengthened prairie grass' },
                { name: 'lightning glass', desc: 'Fulgurite formed by prairie storms' }
            ],
            secondaryMaterials: [
                { name: 'eagle feathers', desc: 'Primary feathers from lords of the sky' },
                { name: 'antelope leather', desc: 'Supple hide from swift runners' },
                { name: 'prairie dog fur', desc: 'Soft undercoat from burrowing creatures' },
                { name: 'wheat stalks', desc: 'Golden grain infused with sun energy' },
                { name: 'hawk talons', desc: 'Sharp claws from aerial hunters' }
            ],
            aesthetics: [
                'Golden and amber coloration',
                'Decorated with running horse motifs',
                'Whispers in the wind',
                'Light and aerodynamic design',
                'Smells of fresh-cut hay'
            ],
            thematicEffects: [
                { type: 'utility', theme: 'speed' },
                { type: 'utility', theme: 'mounted combat' },
                { type: 'damage', element: 'lightning' },
                { type: 'utility', theme: 'weather control' },
                { type: 'utility', theme: 'long-distance travel' }
            ]
        },

        desert: {
            id: 'desert',
            name: 'Desert',
            description: 'Scorching sands hiding ancient secrets',
            themes: ['heat', 'thirst', 'sun', 'glass', 'mirage'],
            primaryMaterials: [
                { name: 'sun-forged glass', desc: 'Sand melted by pure sunlight into razor-sharp crystal' },
                { name: 'scarab gold', desc: 'Sacred metal blessed by sun deities' },
                { name: 'mummy wrappings', desc: 'Ancient cloth preserving powerful magic' },
                { name: 'sandworm chitin', desc: 'Armor plates from desert leviathans' },
                { name: 'phoenix feather', desc: 'Burning plume that regenerates from ash' }
            ],
            secondaryMaterials: [
                { name: 'scorpion tail', desc: 'Venomous appendage dried in desert sun' },
                { name: 'cactus leather', desc: 'Flexible hide from giant succulents' },
                { name: 'camel hair', desc: 'Insulating fiber from desert ships' },
                { name: 'oasis water', desc: 'Magically purified water that never evaporates' },
                { name: 'sandstone', desc: 'Compressed sand carved with hieroglyphs' }
            ],
            aesthetics: [
                'Shimmers like a heat mirage',
                'Warm to the touch even in cold',
                'Carved with sun and pyramid motifs',
                'Sandy gold and burnt orange tones',
                'Reflects light like a mirror'
            ],
            thematicEffects: [
                { type: 'resistance', element: 'fire' },
                { type: 'damage', element: 'fire' },
                { type: 'utility', theme: 'water creation' },
                { type: 'utility', theme: 'sand manipulation' },
                { type: 'utility', theme: 'heat immunity' }
            ]
        },

        savanna: {
            id: 'savanna',
            name: 'Savanna',
            description: 'Sun-baked grasslands of great beasts',
            themes: ['predation', 'stamina', 'pack tactics', 'primal strength'],
            primaryMaterials: [
                { name: 'lion mane', desc: 'Golden fur from the king of beasts' },
                { name: 'elephant ivory', desc: 'Ethically sourced from natural deaths' },
                { name: 'rhinoceros horn', desc: 'Dense keratin charged with primal energy' },
                { name: 'acacia heartwood', desc: 'Thorny wood from trees that survive fire' },
                { name: 'hyena fang', desc: 'Teeth that can crush bone' }
            ],
            secondaryMaterials: [
                { name: 'zebra hide', desc: 'Striped leather that confuses predators' },
                { name: 'giraffe leather', desc: 'Patterned hide from gentle giants' },
                { name: 'vulture feathers', desc: 'Black pinions from carrion birds' },
                { name: 'termite clay', desc: 'Building material from insect mounds' },
                { name: 'baobab bark', desc: 'Thick bark from trees that store water' }
            ],
            aesthetics: [
                'Decorated with tribal patterns',
                'Earth tones of brown, tan, and ochre',
                'Carved with predator imagery',
                'Smells of dry grass and sun',
                'Worn and weathered appearance'
            ],
            thematicEffects: [
                { type: 'utility', theme: 'endurance' },
                { type: 'combat', theme: 'pack tactics' },
                { type: 'resistance', element: 'fire' },
                { type: 'utility', theme: 'intimidation' },
                { type: 'combat', theme: 'primal rage' }
            ]
        },

        swamp: {
            id: 'swamp',
            name: 'Swamp',
            description: 'Fetid marshlands of decay and rebirth',
            themes: ['decay', 'disease', 'concealment', 'necromancy'],
            primaryMaterials: [
                { name: 'bog iron', desc: 'Metal formed in peat bogs, resistant to rust' },
                { name: 'black cypress', desc: 'Rot-resistant wood from ancient swamp trees' },
                { name: 'will-o-wisp essence', desc: 'Captured light from marsh spirits' },
                { name: 'hydra scale', desc: 'Regenerating scales from many-headed beasts' },
                { name: 'hag hair', desc: 'Wiry strands imbued with dark magic' }
            ],
            secondaryMaterials: [
                { name: 'crocodile leather', desc: 'Armored hide from patient hunters' },
                { name: 'leech skin', desc: 'Slimy covering with blood-draining properties' },
                { name: 'fungal matter', desc: 'Spore-producing growths' },
                { name: 'peat moss', desc: 'Preserving material from ancient bogs' },
                { name: 'snake venom', desc: 'Toxins from swamp serpents' }
            ],
            aesthetics: [
                'Covered in a thin layer of slime',
                'Murky green and brown coloration',
                'Emits a faint rotting smell',
                'Decorated with serpent motifs',
                'Always slightly damp'
            ],
            thematicEffects: [
                { type: 'damage', element: 'poison' },
                { type: 'damage', element: 'necrotic' },
                { type: 'utility', theme: 'disease' },
                { type: 'utility', theme: 'concealment in water' },
                { type: 'healing', theme: 'life drain' }
            ]
        },

        mountain: {
            id: 'mountain',
            name: 'Mountain',
            description: 'Towering peaks home to giants and dragons',
            themes: ['strength', 'stone', 'altitude', 'dwarven craft'],
            primaryMaterials: [
                { name: 'mithral', desc: 'Lightweight silvery metal of legendary strength' },
                { name: 'adamantine', desc: 'Virtually indestructible dark metal' },
                { name: 'giant-forged steel', desc: 'Metal worked in massive forges' },
                { name: 'mountain crystal', desc: 'Clear quartz with earth elemental essence' },
                { name: 'dragon bone', desc: 'Dense bones from mountain wyrms' }
            ],
            secondaryMaterials: [
                { name: 'goat leather', desc: 'Sure-footed animal hide' },
                { name: 'eagle down', desc: 'Soft feathers from high-nesting birds' },
                { name: 'granite dust', desc: 'Powdered stone from ancient peaks' },
                { name: 'silver ore', desc: 'Raw precious metal from mountain veins' },
                { name: 'ram horn', desc: 'Curved horn from mountain sheep' }
            ],
            aesthetics: [
                'Angular, geometric designs',
                'Grey and silver coloration',
                'Carved with dwarven runes',
                'Heavy and substantial feel',
                'Decorated with mountain and hammer motifs'
            ],
            thematicEffects: [
                { type: 'utility', theme: 'climbing' },
                { type: 'resistance', element: 'bludgeoning' },
                { type: 'utility', theme: 'earth manipulation' },
                { type: 'combat', theme: 'strength enhancement' },
                { type: 'utility', theme: 'altitude survival' }
            ]
        },

        coastal: {
            id: 'coastal',
            name: 'Coastal',
            description: 'Where land meets sea, ruled by tides and storms',
            themes: ['salt', 'storms', 'tides', 'navigation'],
            primaryMaterials: [
                { name: 'sea-glass', desc: 'Smooth glass tumbled by centuries of waves' },
                { name: 'kraken bone', desc: 'Dense material from ocean titans' },
                { name: 'coral steel', desc: 'Metal grown in magical reef forges' },
                { name: 'siren scale', desc: 'Iridescent scales from sea singers' },
                { name: 'storm pearl', desc: 'Pearls formed during magical tempests' }
            ],
            secondaryMaterials: [
                { name: 'shark leather', desc: 'Rough hide from ocean predators' },
                { name: 'driftwood', desc: 'Salt-preserved wood from shipwrecks' },
                { name: 'seaweed cordage', desc: 'Strong rope from ocean plants' },
                { name: 'crab shell', desc: 'Armored carapace from giant crustaceans' },
                { name: 'sail canvas', desc: 'Enchanted cloth that catches any wind' }
            ],
            aesthetics: [
                'Blue-green coloration like ocean water',
                'Encrusted with barnacles or shells',
                'Smells of salt and sea',
                'Decorated with wave and anchor motifs',
                'Always slightly wet'
            ],
            thematicEffects: [
                { type: 'utility', theme: 'water breathing' },
                { type: 'utility', theme: 'swimming' },
                { type: 'damage', element: 'lightning' },
                { type: 'utility', theme: 'navigation' },
                { type: 'resistance', element: 'cold' }
            ]
        },

        underwater: {
            id: 'underwater',
            name: 'Underwater',
            description: 'The crushing depths of ocean kingdoms',
            themes: ['pressure', 'bioluminescence', 'aquatic', 'communication'],
            primaryMaterials: [
                { name: 'deep coral', desc: 'Pressure-hardened coral from abyssal depths' },
                { name: 'merfolk silver', desc: 'Metal forged in underwater volcanic vents' },
                { name: 'aboleth mucus', desc: 'Reality-warping slime from ancient horrors' },
                { name: 'leviathan bone', desc: 'Massive bones from ocean gods' },
                { name: 'pressure pearl', desc: 'Gems formed in crushing depths' }
            ],
            secondaryMaterials: [
                { name: 'anglerfish lure', desc: 'Bioluminescent organ from deep fish' },
                { name: 'kelp fiber', desc: 'Strong strands from giant seaweed' },
                { name: 'octopus leather', desc: 'Color-changing hide from intelligent mollusks' },
                { name: 'whale ivory', desc: 'Dense material from gentle giants' },
                { name: 'bioluminescent ink', desc: 'Glowing pigment from deep-sea creatures' }
            ],
            aesthetics: [
                'Glows with bioluminescent light',
                'Deep blue and purple coloration',
                'Appears to ripple like underwater',
                'Decorated with fish and tentacle motifs',
                'Pressure-sealed construction'
            ],
            thematicEffects: [
                { type: 'utility', theme: 'water breathing' },
                { type: 'utility', theme: 'pressure resistance' },
                { type: 'utility', theme: 'aquatic communication' },
                { type: 'damage', element: 'cold' },
                { type: 'utility', theme: 'darkvision' }
            ]
        },

        underdark: {
            id: 'underdark',
            name: 'Underdark',
            description: 'Lightless depths beneath the world',
            themes: ['darkness', 'stealth', 'poison', 'madness'],
            primaryMaterials: [
                { name: 'drow steel', desc: 'Dark metal that drinks light' },
                { name: 'deep gnome crystal', desc: 'Gems attuned to earth and shadow' },
                { name: 'purple worm chitin', desc: 'Armor from tunneling behemoths' },
                { name: 'mindflayer leather', desc: 'Rubbery hide from aberrant horrors' },
                { name: 'faerzress-touched stone', desc: 'Rock infused with wild Underdark magic' }
            ],
            secondaryMaterials: [
                { name: 'giant spider silk', desc: 'Strong webbing from cave arachnids' },
                { name: 'cave fisher filament', desc: 'Adhesive strands for climbing' },
                { name: 'mushroom leather', desc: 'Flexible material from giant fungi' },
                { name: 'bat guano', desc: 'Alchemically useful cave deposits' },
                { name: 'drider venom', desc: 'Paralytic toxin from spider-folk' }
            ],
            aesthetics: [
                'Black and deep purple coloration',
                'Absorbs light around it',
                'Decorated with spider and eye motifs',
                'Silent when moving',
                'Seems to shift in shadows'
            ],
            thematicEffects: [
                { type: 'utility', theme: 'darkvision' },
                { type: 'utility', theme: 'stealth' },
                { type: 'damage', element: 'poison' },
                { type: 'utility', theme: 'climbing' },
                { type: 'resistance', element: 'psychic' }
            ]
        },

        abyssal: {
            id: 'abyssal',
            name: 'Abyssal',
            description: 'The infinite layers of demonic chaos',
            themes: ['corruption', 'chaos', 'blood', 'madness'],
            primaryMaterials: [
                { name: 'demon ichor', desc: 'Black blood of the Abyss that burns the righteous' },
                { name: 'chaos metal', desc: 'Constantly shifting alloy from the Abyss' },
                { name: 'balor flame', desc: 'Imprisoned fire that never dies' },
                { name: 'marilith scale', desc: 'Serpentine armor from demon generals' },
                { name: 'soul steel', desc: 'Metal forged from damned spirits' }
            ],
            secondaryMaterials: [
                { name: 'demon leather', desc: 'Hide flayed from lesser fiends' },
                { name: 'corruption crystal', desc: 'Gems that spread evil influence' },
                { name: 'blood rubies', desc: 'Stones formed from crystallized suffering' },
                { name: 'void silk', desc: 'Fabric woven from empty darkness' },
                { name: 'screaming iron', desc: 'Metal that wails when struck' }
            ],
            aesthetics: [
                'Oozes black ichor when damaged',
                'Covered in disturbing, shifting runes',
                'Whispers madness to the wielder',
                'Red and black coloration',
                'Causes unease in good creatures'
            ],
            thematicEffects: [
                { type: 'damage', element: 'necrotic' },
                { type: 'damage', element: 'fire' },
                { type: 'utility', theme: 'fear' },
                { type: 'curse', theme: 'blood tithe' },
                { type: 'resistance', element: 'poison' }
            ],
            cursedBenefits: [
                'Deal extra damage but take damage yourself',
                'Gain power by sacrificing hit dice',
                'Advantage on attacks but disadvantage on saves vs good',
                'Bonus to ability scores but alignment shifts toward evil',
                'Regain hit points when enemies die nearby'
            ]
        },

        infernal: {
            id: 'infernal',
            name: 'Infernal',
            description: 'The nine hells of lawful evil',
            themes: ['contracts', 'fire', 'tyranny', 'deception'],
            primaryMaterials: [
                { name: 'hellforged steel', desc: 'Metal tempered in the fires of Avernus' },
                { name: 'devil bone', desc: 'Dense ossite from archdevils' },
                { name: 'contract vellum', desc: 'Unbreakable parchment binding souls' },
                { name: 'brimstone', desc: 'Sulfurous stone from hell\'s depths' },
                { name: 'pit fiend scale', desc: 'Armor from hell\'s generals' }
            ],
            secondaryMaterials: [
                { name: 'chain links', desc: 'Iron from Kytons\' endless chains' },
                { name: 'infernal brass', desc: 'Gleaming metal that burns the touch' },
                { name: 'imp leather', desc: 'Supple hide from lesser devils' },
                { name: 'hellfire ruby', desc: 'Gems containing trapped hellfire' },
                { name: 'lemure wax', desc: 'Malleable substance from lowest devils' }
            ],
            aesthetics: [
                'Uncomfortably warm to hold',
                'Decorated with infernal script',
                'Black and burning orange coloration',
                'Reeks of sulfur',
                'Bears hidden contract terms'
            ],
            thematicEffects: [
                { type: 'damage', element: 'fire' },
                { type: 'utility', theme: 'contracts' },
                { type: 'utility', theme: 'deception' },
                { type: 'resistance', element: 'fire' },
                { type: 'curse', theme: 'soul binding' }
            ],
            cursedBenefits: [
                'Powerful effect but requires a bargain',
                'Gain advantage but owe a future favor',
                'Extra abilities but bound to serve',
                'Cannot be removed once attuned',
                'Powers increase but corrupt over time'
            ]
        },

        celestial: {
            id: 'celestial',
            name: 'Celestial',
            description: 'The upper planes of divine radiance',
            themes: ['radiance', 'protection', 'healing', 'justice'],
            primaryMaterials: [
                { name: 'celestial bronze', desc: 'Metal blessed by the gods themselves' },
                { name: 'angel feather', desc: 'Primary flight feathers from divine messengers' },
                { name: 'sunsteel', desc: 'Metal forged in the heart of Mount Celestia' },
                { name: 'unicorn horn', desc: 'Willingly gifted by celestial steeds' },
                { name: 'cloud silver', desc: 'Metal condensed from heavenly clouds' }
            ],
            secondaryMaterials: [
                { name: 'holy water crystal', desc: 'Solidified blessed water' },
                { name: 'phoenix down', desc: 'Soft feathers of rebirth' },
                { name: 'archon plate', desc: 'Shed armor from celestial warriors' },
                { name: 'astral silk', desc: 'Fabric woven from pure light' },
                { name: 'prayer beads', desc: 'Blessed tokens of devotion' }
            ],
            aesthetics: [
                'Glows with warm golden light',
                'White, gold, and silver coloration',
                'Decorated with wing and halo motifs',
                'Feels comforting to hold',
                'Hums with divine hymns when near evil'
            ],
            thematicEffects: [
                { type: 'damage', element: 'radiant' },
                { type: 'healing', theme: 'restoration' },
                { type: 'utility', theme: 'protection' },
                { type: 'resistance', element: 'necrotic' },
                { type: 'utility', theme: 'truth detection' }
            ]
        },

        astral: {
            id: 'astral',
            name: 'Astral',
            description: 'The silver void between worlds',
            themes: ['thought', 'time', 'planar travel', 'psychic'],
            primaryMaterials: [
                { name: 'astral silver', desc: 'Metal that exists partially in other dimensions' },
                { name: 'githyanki steel', desc: 'Weapons forged in the silver void' },
                { name: 'thought crystal', desc: 'Solidified psychic energy' },
                { name: 'color pool essence', desc: 'Captured light from planar portals' },
                { name: 'dead god fragment', desc: 'Pieces of divine corpses floating in the Astral' }
            ],
            secondaryMaterials: [
                { name: 'silver cord thread', desc: 'Strands connecting body to soul' },
                { name: 'void metal', desc: 'Substance from the spaces between stars' },
                { name: 'psychic residue', desc: 'Crystallized mental energy' },
                { name: 'star map ink', desc: 'Pigment that shows the multiverse' },
                { name: 'time dust', desc: 'Particles from where time doesn\'t flow' }
            ],
            aesthetics: [
                'Silvery and translucent',
                'Seems to exist in multiple places at once',
                'Weightless or nearly so',
                'Reflects impossible geometries',
                'Sparkles with distant stars'
            ],
            thematicEffects: [
                { type: 'damage', element: 'psychic' },
                { type: 'utility', theme: 'planar travel' },
                { type: 'utility', theme: 'telepathy' },
                { type: 'utility', theme: 'time manipulation' },
                { type: 'resistance', element: 'psychic' }
            ]
        },

        urban: {
            id: 'urban',
            name: 'Urban',
            description: 'Great cities of commerce and intrigue',
            themes: ['social', 'wealth', 'law', 'thievery', 'crowds'],
            primaryMaterials: [
                { name: 'guild steel', desc: 'Metal stamped with craftsmen\'s marks' },
                { name: 'coin silver', desc: 'Metal melted from a thousand currencies' },
                { name: 'contract parchment', desc: 'Legally binding magical vellum' },
                { name: 'noble silk', desc: 'The finest fabric money can buy' },
                { name: 'thieves\' shadow', desc: 'Darkness stolen from streetlamps' }
            ],
            secondaryMaterials: [
                { name: 'cobblestone dust', desc: 'Ground stone from ancient streets' },
                { name: 'rat leather', desc: 'Hide from the city\'s true rulers' },
                { name: 'tavern oak', desc: 'Wood stained with countless stories' },
                { name: 'sewer iron', desc: 'Corroded metal from beneath the streets' },
                { name: 'watch brass', desc: 'Metal from city guard equipment' }
            ],
            aesthetics: [
                'Appears ordinary until examined closely',
                'Decorated with guild or noble symbols',
                'Designed to be concealed easily',
                'Urban grey and muted colors',
                'Multiple hidden compartments'
            ],
            thematicEffects: [
                { type: 'utility', theme: 'disguise' },
                { type: 'utility', theme: 'persuasion' },
                { type: 'utility', theme: 'wealth manipulation' },
                { type: 'utility', theme: 'stealth in crowds' },
                { type: 'utility', theme: 'law manipulation' }
            ],
            socialEffects: [
                'Appear as a generic city guard',
                'Automatically know local laws',
                'Advantage on checks to find black markets',
                'Can sense hidden wealth',
                'Blend into any crowd',
                'Understand thieves\' cant',
                'Detect lies in negotiations',
                'Create binding magical contracts'
            ]
        }
    }
};
