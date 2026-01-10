/**
 * Shop Data for Location Generator
 * Commercial establishments with inventories, NPCs, and unique features
 */

const LocationShops = {
    /**
     * Shop Types with detailed profiles
     */
    types: {
        blacksmith: {
            id: 'blacksmith',
            name: 'Blacksmith',
            category: 'craftsman',
            description: 'Forge of steel and iron, where weapons and tools are born',
            sights: [
                'Glowing forge casting dancing shadows',
                'Racks of unfinished blades along the walls',
                'Apprentice working the bellows',
                'Sparks flying from the anvil'
            ],
            sounds: [
                'Ring of hammer on steel',
                'Hiss of quenching metal',
                'Roar of the forge',
                'Grunts of exertion'
            ],
            smells: [
                'Hot metal and coal smoke',
                'Burning oil and sweat',
                'Iron and leather',
                'Sulfur and steam'
            ],
            signatureItems: {
                squalid: [
                    { name: 'Bent Iron Nails', price: '1 cp/dozen', desc: 'Salvaged and straightened, mostly' },
                    { name: 'Chipped Hatchet', price: '3 sp', desc: 'Functional but ugly' },
                    { name: 'Rusty Horseshoes', price: '5 cp/set', desc: 'Good for one more use' }
                ],
                modest: [
                    { name: 'Standard Longsword', price: '15 gp', desc: 'Reliable craftsmanship' },
                    { name: 'Iron Cookware Set', price: '2 gp', desc: 'Built to last generations' },
                    { name: 'Reinforced Door Hinges', price: '5 sp', desc: 'Double-riveted for security' }
                ],
                wealthy: [
                    { name: 'Masterwork Rapier', price: '320 gp', desc: 'Perfect balance, signed by maker' },
                    { name: 'Ornate Fire Poker Set', price: '50 gp', desc: 'Dragon-head designs' },
                    { name: 'Custom Plate Armor Fitting', price: '200 gp', desc: 'Tailored measurements taken' }
                ],
                legendary: [
                    { name: 'Meteor-Iron Blade', price: '5,000 gp', desc: 'Forged from a fallen star' },
                    { name: 'Ever-Hot Forge Tools', price: '8,000 gp', desc: 'Self-heating, never need a fire' },
                    { name: 'Adamantine Commission', price: '15,000 gp', desc: 'Six-month waiting list' }
                ]
            },
            uniqueFeatures: [
                'Uses volcanic vents instead of a traditional forge',
                'Employs a fire elemental bound in the furnace',
                'Specializes in weapons for non-humanoid appendages',
                'The smith is blind but works by sound alone',
                'All items are blessed by a temple before leaving',
                'Water from an enchanted spring is used for quenching',
                'The anvil is a fragment of a golem\'s core',
                'Weapons are tested on captured monsters in the basement'
            ],
            npcTraits: ['muscular', 'burn-scarred', 'perfectionist', 'gruff', 'patient'],
            npcSecrets: [
                'Was once the royal armorer before a disgrace',
                'Forges weapons for both sides of the conflict',
                'Is slowly dying from lung damage but hiding it',
                'Secretly a werecreature who uses their heat resistance',
                'Knows the formula for a legendary lost alloy'
            ]
        },

        armorsmith: {
            id: 'armorsmith',
            name: 'Armorsmith',
            category: 'craftsman',
            description: 'Where protection is crafted from metal and leather',
            sights: [
                'Armor stands displaying finished pieces',
                'Workbench covered in chain links',
                'Leather scraps and metal plates everywhere',
                'Fitting mirrors and measuring tools'
            ],
            sounds: [
                'Rhythmic hammering on curved surfaces',
                'Clinking of chain mail',
                'Leather being punched',
                'Customer complaints about fit'
            ],
            smells: [
                'Oiled leather and metal polish',
                'Heated steel',
                'Saddle soap',
                'Wool padding'
            ],
            signatureItems: {
                squalid: [
                    { name: 'Patched Leather Armor', price: '5 gp', desc: 'Held together with hope' },
                    { name: 'Dented Shield', price: '3 gp', desc: 'The dents prove it works' },
                    { name: 'Salvaged Chainmail Scraps', price: '2 gp', desc: 'Assemble your own' }
                ],
                modest: [
                    { name: 'Scale Mail', price: '50 gp', desc: 'Standard military issue' },
                    { name: 'Reinforced Helm', price: '15 gp', desc: 'Extra thick at the crown' },
                    { name: 'Riding Leathers', price: '25 gp', desc: 'Flexible and road-worthy' }
                ],
                wealthy: [
                    { name: 'Ceremonial Half-Plate', price: '800 gp', desc: 'Gilded and engraved' },
                    { name: 'Mithril Chain Shirt', price: '1,000 gp', desc: 'Light as silk, strong as steel' },
                    { name: 'Noble\'s Parade Armor', price: '1,500 gp', desc: 'More art than protection' }
                ],
                legendary: [
                    { name: 'Dragonscale Armor', price: '12,000 gp', desc: 'Made from actual dragon' },
                    { name: 'Celestial Full Plate', price: '20,000 gp', desc: 'Blessed by angels' },
                    { name: 'Living Armor', price: '25,000 gp', desc: 'Repairs itself over time' }
                ]
            },
            uniqueFeatures: [
                'Uses giant spider silk for padding',
                'Employs only left-handed craftspeople',
                'Each piece includes a hidden compartment',
                'Tests all armor by having customers fight a golem',
                'Specializes in armor for unusual body types',
                'All armor is sanctified against possession',
                'Uses techniques from an extinct dwarven clan',
                'The shop itself is inside a giant turtle shell'
            ],
            npcTraits: ['meticulous', 'proud', 'veteran soldier', 'artistic', 'paranoid about quality'],
            npcSecrets: [
                'Supplies armor with deliberate weak points to assassins',
                'Is an escaped slave from an underground forge',
                'Their best work is cursed without their knowledge',
                'Actually a construct pretending to be human',
                'Knows the weak point of every famous knight\'s armor'
            ]
        },

        magicShop: {
            id: 'magicShop',
            name: 'Magic Item Boutique',
            category: 'specialty',
            description: 'Repository of wonders and wallet-draining enchantments',
            sights: [
                'Items floating on display pedestals',
                'Glowing runes on every surface',
                'Strange creatures in cages or jars',
                'Ceiling that shows another plane'
            ],
            sounds: [
                'Soft magical humming',
                'Whispers from unknown sources',
                'Occasional pops and crackles',
                'Chimes without wind'
            ],
            smells: [
                'Ozone and old magic',
                'Exotic incense',
                'Nothing at all, suspiciously',
                'Whatever the customer secretly desires'
            ],
            signatureItems: {
                squalid: [
                    { name: 'Slightly Magical Pebble', price: '5 gp', desc: 'Glows when wet' },
                    { name: 'Broken Wand Pieces', price: '10 gp', desc: 'Might have one charge left' },
                    { name: 'Haunted Mirror Shard', price: '15 gp', desc: 'Shows your fears occasionally' }
                ],
                modest: [
                    { name: 'Potion of Healing', price: '50 gp', desc: 'Standard formulation' },
                    { name: 'Driftglobe', price: '75 gp', desc: 'Follows and lights the way' },
                    { name: 'Bag of Holding', price: '500 gp', desc: 'The classic' }
                ],
                wealthy: [
                    { name: 'Cloak of Elvenkind', price: '5,000 gp', desc: 'Be unseen' },
                    { name: '+1 Weapon (various)', price: '3,000 gp', desc: 'Magically enhanced' },
                    { name: 'Ring of Protection', price: '3,500 gp', desc: 'Deflect the worst' }
                ],
                legendary: [
                    { name: 'Staff of Power', price: '95,000 gp', desc: 'If we have one in stock' },
                    { name: 'Portable Hole', price: '30,000 gp', desc: 'Pocket dimension included' },
                    { name: 'Artifact Fragment', price: 'By negotiation', desc: 'Part of something greater' }
                ]
            },
            uniqueFeatures: [
                'The shop exists in multiple locations simultaneously',
                'Payment accepted in memories, years of life, or gold',
                'All items come with a minor curse as "security"',
                'The owner is a polymorphed dragon',
                'Items choose their buyers, not the other way around',
                'The basement is actually an extraplanar space',
                'Returns accepted if the item is brought back with its previous owner\'s head',
                'Every purchase includes a prophecy'
            ],
            npcTraits: ['enigmatic', 'ancient', 'eccentric', 'absent-minded', 'cryptic'],
            npcSecrets: [
                'Is hiding from an extraplanar debt',
                'Every item sold plants a magical tracker',
                'Is slowly being possessed by one of their items',
                'Used to be an apprentice who killed their master',
                'The shop itself is sentient and the owner is a puppet'
            ]
        },

        alchemist: {
            id: 'alchemist',
            name: 'Alchemist',
            category: 'specialty',
            description: 'Where science and magic bubble together in strange brews',
            sights: [
                'Bubbling beakers and coiling tubes',
                'Shelves of labeled jars and bottles',
                'Stained workbenches and burn marks',
                'Charts of elemental combinations'
            ],
            sounds: [
                'Bubbling and hissing',
                'Occasional small explosions',
                'Glass clinking',
                'Muttering about measurements'
            ],
            smells: [
                'Sulfur and acid',
                'Sweet and bitter herbs',
                'Something burning',
                'Unidentifiable chemical reactions'
            ],
            signatureItems: {
                squalid: [
                    { name: 'Questionable Healing Salve', price: '2 gp', desc: 'Works 60% of the time' },
                    { name: 'Mild Acid Flask', price: '5 gp', desc: 'More of a strong vinegar' },
                    { name: 'Smoke Pellets', price: '1 gp/3', desc: 'Dramatic exits on a budget' }
                ],
                modest: [
                    { name: 'Alchemist\'s Fire', price: '50 gp', desc: 'Burns underwater' },
                    { name: 'Antitoxin', price: '50 gp', desc: 'For common poisons' },
                    { name: 'Tanglefoot Bag', price: '50 gp', desc: 'Stick them in place' }
                ],
                wealthy: [
                    { name: 'Universal Solvent', price: '300 gp', desc: 'Dissolves any adhesive' },
                    { name: 'Oil of Slipperiness', price: '500 gp', desc: 'Escape artist in a bottle' },
                    { name: 'Potion of Invisibility', price: '750 gp', desc: 'Disappear completely' }
                ],
                legendary: [
                    { name: 'Philosopher\'s Stone Fragment', price: '25,000 gp', desc: 'Transmute lead to gold once' },
                    { name: 'Elixir of Life', price: '50,000 gp', desc: 'Restore youth, maybe' },
                    { name: 'Bottled Concepts', price: 'Varies', desc: 'Time, space, or emotions' }
                ]
            },
            uniqueFeatures: [
                'Experiments on themselves constantly',
                'The shop grows its own ingredients in a pocket dimension',
                'All experiments are tested on awakened rats first',
                'Specializes in potions for specific bloodlines',
                'Uses monster parts instead of plants',
                'The alchemist is slowly turning into something else',
                'Potions come with emotional side effects',
                'Brews are customized to the buyer\'s aura'
            ],
            npcTraits: ['stained hands', 'manic energy', 'meticulous', 'forgetful', 'burned eyebrows'],
            npcSecrets: [
                'Experiments with forbidden substances',
                'Sells poison to assassins after hours',
                'Is trying to create a homunculus army',
                'Addicted to their own products',
                'Working for a cult developing a plague'
            ]
        },

        grocer: {
            id: 'grocer',
            name: 'Grocer',
            category: 'provision',
            description: 'Supplier of food, drink, and the basics of life',
            sights: [
                'Barrels and crates stacked high',
                'Fresh produce in woven baskets',
                'Dried meats hanging from rafters',
                'Sacks of grain and flour'
            ],
            sounds: [
                'Customers haggling',
                'Coins on the counter',
                'Rustling packaging',
                'Neighborhood gossip'
            ],
            smells: [
                'Fresh bread and vegetables',
                'Dried herbs and spices',
                'Cheese and cured meat',
                'Earth and wood'
            ],
            signatureItems: {
                squalid: [
                    { name: 'Day-Old Bread', price: '2 cp', desc: 'Still edible, mostly' },
                    { name: 'Mystery Meat Strips', price: '5 cp', desc: 'Don\'t ask' },
                    { name: 'Bruised Produce', price: '1 cp/lb', desc: 'Cut off the bad parts' }
                ],
                modest: [
                    { name: 'Trail Rations', price: '5 sp/day', desc: 'Keeps for a week' },
                    { name: 'Local Cheese Wheel', price: '1 gp', desc: 'Regional specialty' },
                    { name: 'Preserved Vegetables', price: '3 sp/jar', desc: 'Good through winter' }
                ],
                wealthy: [
                    { name: 'Imported Spices', price: '10 gp/oz', desc: 'From across the sea' },
                    { name: 'Aged Wine', price: '25 gp', desc: 'Twenty years in the barrel' },
                    { name: 'Exotic Fruits', price: '15 gp', desc: 'Magically preserved' }
                ],
                legendary: [
                    { name: 'Phoenix Egg Omelette', price: '500 gp', desc: 'Grants fire resistance for a day' },
                    { name: 'Treant Sap Honey', price: '200 gp', desc: 'Heal 1 HP per teaspoon' },
                    { name: 'Dragon Steak', price: '1,000 gp', desc: 'Tastes like chicken, but spicy' }
                ]
            },
            uniqueFeatures: [
                'Everything is grown in a druid\'s enchanted garden',
                'The grocer can identify any poison by taste',
                'Ingredients are delivered by trained pixies',
                'Specializes in food for specific races',
                'Nothing ever spoils due to a preservation enchantment',
                'The back room sells monster parts as "exotic ingredients"',
                'All produce is blessed by a local temple',
                'The grocer is actually a retired adventurer hiding in plain sight'
            ],
            npcTraits: ['rotund', 'friendly', 'knows everyone', 'always sampling', 'great memory'],
            npcSecrets: [
                'Launders money through the business',
                'Spies for the local thieves\' guild',
                'The "fresh" goods are illusioned',
                'Running an underground railroad for refugees',
                'The cheese wheel contains hidden messages'
            ]
        },

        generalGoods: {
            id: 'generalGoods',
            name: 'General Goods',
            category: 'provision',
            description: 'One-stop shop for adventuring supplies and everyday needs',
            sights: [
                'Cluttered shelves from floor to ceiling',
                'Rope coiled in corners',
                'Lanterns hanging from hooks',
                'Everything you need buried somewhere'
            ],
            sounds: [
                'Bells when the door opens',
                'Rummaging through stock',
                'Price negotiations',
                'Things falling over'
            ],
            smells: [
                'Leather and canvas',
                'Oil and polish',
                'New rope and old wood',
                'Accumulated dust'
            ],
            signatureItems: {
                squalid: [
                    { name: 'Frayed Rope (50ft)', price: '5 sp', desc: 'Holds 150 lbs, maybe' },
                    { name: 'Patched Backpack', price: '1 gp', desc: 'Some holes remain' },
                    { name: 'Bent Crowbar', price: '1 gp', desc: 'Still pries' }
                ],
                modest: [
                    { name: 'Explorer\'s Pack', price: '10 gp', desc: 'Everything you need' },
                    { name: 'Good Hemp Rope (50ft)', price: '1 gp', desc: 'Reliable' },
                    { name: 'Lantern and Oil', price: '1 gp', desc: 'See in the dark' }
                ],
                wealthy: [
                    { name: 'Silk Rope (50ft)', price: '10 gp', desc: 'Light and strong' },
                    { name: 'Fine Toolkit', price: '50 gp', desc: 'Professional grade' },
                    { name: 'Collapsible Equipment', price: '25 gp/item', desc: 'Packs small' }
                ],
                legendary: [
                    { name: 'Rope of Climbing', price: '2,000 gp', desc: 'Moves on command' },
                    { name: 'Immovable Rod', price: '5,000 gp', desc: 'Stays put' },
                    { name: 'Instant Fortress', price: '75,000 gp', desc: 'Tower in a box' }
                ]
            },
            uniqueFeatures: [
                'The owner remembers every purchase anyone ever made',
                'Items arrange themselves overnight',
                'Has a "request board" where adventurers leave shopping lists',
                'Everything has a story the owner will tell unsolicited',
                'Specializes in equipment for dungeon delving',
                'Nothing is priced—everything is negotiated',
                'The shop was once a famous adventurer\'s headquarters',
                'Payment plans available for trustworthy customers'
            ],
            npcTraits: ['encyclopedic knowledge', 'pack rat', 'friendly', 'overworked', 'organized chaos'],
            npcSecrets: [
                'Knowingly sells stolen goods',
                'Is the last member of an adventuring party',
                'Some items are actually mimics',
                'Runs a side business in information',
                'Has a map to a legendary dungeon, doesn\'t know it'
            ]
        },

        curioDealer: {
            id: 'curioDealer',
            name: 'Rare Curio Dealer',
            category: 'specialty',
            description: 'Purveyor of the strange, unusual, and probably haunted',
            sights: [
                'Glass cases with bizarre specimens',
                'Taxidermy of impossible creatures',
                'Maps to places that don\'t exist',
                'Items that move when you\'re not looking'
            ],
            sounds: [
                'Unsettling silence',
                'Ticking from nowhere',
                'Whispers at the edge of hearing',
                'The owner\'s knowing chuckle'
            ],
            smells: [
                'Preservation fluids',
                'Ancient dust',
                'Something that shouldn\'t exist',
                'Old memories'
            ],
            signatureItems: {
                squalid: [
                    { name: 'Weird-Shaped Rock', price: '5 cp', desc: 'Looks like it\'s watching you' },
                    { name: 'Tooth from Something', price: '1 sp', desc: 'Definitely not human' },
                    { name: 'Slightly Warm Coin', price: '5 sp', desc: 'From a dead man\'s eyes' }
                ],
                modest: [
                    { name: 'Bottled Ghost Breath', price: '25 gp', desc: 'Chills drinks' },
                    { name: 'Compass That Points to Danger', price: '50 gp', desc: 'Unfortunately accurate' },
                    { name: 'Book in Unknown Language', price: '30 gp', desc: 'Someone might read it' }
                ],
                wealthy: [
                    { name: 'Mummy\'s Hand', price: '500 gp', desc: 'Grants luck, allegedly' },
                    { name: 'Bottled Memory', price: '750 gp', desc: 'Experience someone else\'s moment' },
                    { name: 'Map to a Crashed Spelljammer', price: '1,000 gp', desc: 'Partially verified' }
                ],
                legendary: [
                    { name: 'Fragment of a Dead God', price: '50,000 gp', desc: 'Still resonates with power' },
                    { name: 'Time Loop in a Jar', price: 'Your future', desc: 'Watch yourself die repeatedly' },
                    { name: 'True Name of a Demon', price: '100,000 gp', desc: 'Written on living skin' }
                ]
            },
            uniqueFeatures: [
                'The owner doesn\'t remember acquiring half the stock',
                'Items find their way here from across the planes',
                'Nothing can be stolen—items return by morning',
                'The back room shows different contents to each viewer',
                'Payment can be made in secrets or futures',
                'The shop only appears on certain nights',
                'Each item comes with a verified provenance, all tragic',
                'The owner is actually several people sharing one body'
            ],
            npcTraits: ['unsettling calm', 'knows too much', 'never blinks', 'speaks in riddles', 'ageless appearance'],
            npcSecrets: [
                'Is bound to the shop, cannot leave',
                'Every sale is part of a larger pattern',
                'Has been running this shop for centuries',
                'Is collecting items for a specific ritual',
                'The "owner" is actually one of the items'
            ]
        },

        tavern: {
            id: 'tavern',
            name: 'Tavern',
            category: 'hospitality',
            description: 'Where travelers find drink, company, and trouble',
            sights: [
                'Long bar and scattered tables',
                'Fireplace with roaring flames',
                'Patrons in various states of inebriation',
                'Notice board covered in postings'
            ],
            sounds: [
                'Raucous laughter and arguments',
                'Clinking mugs and glasses',
                'Bard playing in the corner',
                'Chairs scraping on floor'
            ],
            smells: [
                'Ale and spirits',
                'Cooking meat',
                'Wood smoke',
                'Unwashed patrons'
            ],
            signatureItems: {
                squalid: [
                    { name: 'Watered Ale', price: '1 cp', desc: 'More water than ale' },
                    { name: 'Mystery Stew', price: '2 cp', desc: 'Filling, at least' },
                    { name: 'Common Room Floor', price: '1 cp/night', desc: 'Bring your own bedroll' }
                ],
                modest: [
                    { name: 'House Ale', price: '4 cp/mug', desc: 'Brewed on site' },
                    { name: 'Meat Pie', price: '1 sp', desc: 'Hot and hearty' },
                    { name: 'Shared Room', price: '5 sp/night', desc: 'Bunk beds, communal' }
                ],
                wealthy: [
                    { name: 'Imported Wine', price: '1 gp/glass', desc: 'From the southern vineyards' },
                    { name: 'Roast Fowl Dinner', price: '5 sp', desc: 'With all the trimmings' },
                    { name: 'Private Suite', price: '2 gp/night', desc: 'Lock on the door' }
                ],
                legendary: [
                    { name: 'Dragon\'s Breath Whiskey', price: '50 gp/shot', desc: 'Literally breathe fire' },
                    { name: 'Feast of Heroes', price: '100 gp', desc: 'Grants inspiration' },
                    { name: 'Planar Suite', price: '500 gp/night', desc: 'Pocket dimension privacy' }
                ]
            },
            uniqueFeatures: [
                'Built on a ley line—magic works strangely here',
                'The tavern cat is actually a polymorphed archmage',
                'Every drink comes with a fortune (usually accurate)',
                'A ghost haunts the best room, but is friendly',
                'The basement connects to the Underdark',
                'All brawls are non-lethal due to enchantment',
                'The fireplace shows visions in its flames',
                'Debts are collected by an animated suit of armor'
            ],
            npcTraits: ['good listener', 'knows everyone', 'thick-skinned', 'has seen everything', 'protective of regulars'],
            npcSecrets: [
                'Works for the local spy network',
                'Murdered the previous owner',
                'Is in witness protection from another city',
                'The tavern is a front for a criminal operation',
                'Collects information to sell to the highest bidder'
            ]
        },

        temple: {
            id: 'temple',
            name: 'Temple/Shrine',
            category: 'religious',
            description: 'House of worship and spiritual services',
            sights: [
                'Religious iconography on every surface',
                'Altar with offerings and candles',
                'Robed priests and acolytes',
                'Supplicants in prayer'
            ],
            sounds: [
                'Chanting and hymns',
                'Bells or gongs',
                'Whispered prayers',
                'Echoing silence'
            ],
            smells: [
                'Incense and candle wax',
                'Sacred oils',
                'Old stone and faith',
                'Flowers and herbs'
            ],
            signatureItems: {
                squalid: [
                    { name: 'Wooden Holy Symbol', price: '1 gp', desc: 'Handcarved' },
                    { name: 'Blessing', price: 'Donation', desc: 'Words of encouragement' },
                    { name: 'Temple Sanctuary', price: 'Free', desc: 'One night, no questions' }
                ],
                modest: [
                    { name: 'Holy Water', price: '25 gp', desc: 'Blessed and bottled' },
                    { name: 'Minor Healing', price: '50 gp', desc: 'Cure Wounds spell' },
                    { name: 'Funeral Rites', price: '25 gp', desc: 'Proper sendoff' }
                ],
                wealthy: [
                    { name: 'Greater Restoration', price: '450 gp', desc: 'Remove serious conditions' },
                    { name: 'Raise Dead', price: '1,000 gp', desc: 'Bring back the departed' },
                    { name: 'Atonement Ritual', price: '500 gp', desc: 'Clear your conscience' }
                ],
                legendary: [
                    { name: 'True Resurrection', price: '25,000 gp', desc: 'Return from any death' },
                    { name: 'Communion with Deity', price: 'Quest', desc: 'Speak directly to god' },
                    { name: 'Divine Intervention Request', price: 'Varies', desc: 'When all else fails' }
                ]
            },
            uniqueFeatures: [
                'The statue of the god moves when no one is watching',
                'Built on the site of a divine manifestation',
                'The catacombs contain a sealed evil',
                'Priests all share the same recurring dream',
                'The temple exists partially in another plane',
                'Heretics are welcome—for conversion attempts',
                'The altar bleeds on holy days',
                'Multiple gods are worshipped in rotating shifts'
            ],
            npcTraits: ['serene', 'devout', 'questioning', 'orthodox', 'reformist'],
            npcSecrets: [
                'Lost their faith years ago',
                'Secretly serves a different deity',
                'The "miracles" are actually arcane magic',
                'Planning to reform the entire religion',
                'Receives visions they\'re afraid to share'
            ]
        }
    },

    /**
     * Building Types for Districts
     */
    buildingTypes: {
        manor: { name: 'Manor House', category: 'residential' },
        estate: { name: 'Noble Estate', category: 'residential' },
        private_garden: { name: 'Private Garden', category: 'recreation' },
        exclusive_club: { name: 'Exclusive Club', category: 'social' },
        gallery: { name: 'Art Gallery', category: 'cultural' },
        courthouse: { name: 'Courthouse', category: 'government' },
        archive: { name: 'Archive', category: 'government' },
        tax_office: { name: 'Tax Office', category: 'government' },
        prison: { name: 'Prison', category: 'government' },
        council_hall: { name: 'Council Hall', category: 'government' },
        monastery: { name: 'Monastery', category: 'religious' },
        hospital: { name: 'Hospital', category: 'service' },
        orphanage: { name: 'Orphanage', category: 'charity' },
        cemetery: { name: 'Cemetery', category: 'religious' },
        trading_house: { name: 'Trading House', category: 'commercial' },
        bank: { name: 'Bank', category: 'financial' },
        customs_house: { name: 'Customs House', category: 'government' },
        market_stall: { name: 'Market Stall', category: 'commercial' },
        bathhouse: { name: 'Bathhouse', category: 'service' },
        guild_hall: { name: 'Guild Hall', category: 'professional' },
        apprentice_house: { name: 'Apprentice House', category: 'residential' },
        supply_shop: { name: 'Supply Shop', category: 'commercial' },
        gambling_den: { name: 'Gambling Den', category: 'entertainment' },
        theater: { name: 'Theater', category: 'entertainment' },
        brothel: { name: 'Brothel', category: 'entertainment' },
        arena: { name: 'Arena', category: 'entertainment' },
        opium_den: { name: 'Opium Den', category: 'entertainment' },
        tenement: { name: 'Tenement', category: 'residential' },
        flophouse: { name: 'Flophouse', category: 'hospitality' },
        pawnshop: { name: 'Pawnshop', category: 'commercial' },
        fence: { name: 'Fence\'s Shop', category: 'criminal' },
        soup_kitchen: { name: 'Soup Kitchen', category: 'charity' },
        shipyard: { name: 'Shipyard', category: 'industrial' },
        lighthouse: { name: 'Lighthouse', category: 'navigation' },
        embassy: { name: 'Embassy', category: 'diplomatic' },
        foreign_temple: { name: 'Foreign Temple', category: 'religious' },
        ethnic_shop: { name: 'Ethnic Shop', category: 'commercial' },
        community_hall: { name: 'Community Hall', category: 'social' },
        foreign_inn: { name: 'Foreign Inn', category: 'hospitality' },
        university: { name: 'University', category: 'education' },
        library: { name: 'Library', category: 'education' },
        mage_tower: { name: 'Mage Tower', category: 'arcane' },
        observatory: { name: 'Observatory', category: 'arcane' },
        laboratory: { name: 'Laboratory', category: 'arcane' },
        barracks: { name: 'Barracks', category: 'military' },
        armory: { name: 'Armory', category: 'military' },
        training_ground: { name: 'Training Ground', category: 'military' },
        war_college: { name: 'War College', category: 'education' },
        veterans_hall: { name: 'Veterans Hall', category: 'social' },
        loading_dock: { name: 'Loading Dock', category: 'industrial' },
        teamster_office: { name: 'Teamster Office', category: 'commercial' },
        night_watchman_post: { name: 'Night Watchman Post', category: 'security' },
        public_garden: { name: 'Public Garden', category: 'recreation' },
        conservatory: { name: 'Conservatory', category: 'recreation' },
        greenhouse: { name: 'Greenhouse', category: 'agricultural' },
        pavilion: { name: 'Pavilion', category: 'recreation' },
        townhouse: { name: 'Townhouse', category: 'residential' },
        apartment: { name: 'Apartment Building', category: 'residential' },
        local_shop: { name: 'Local Shop', category: 'commercial' },
        small_temple: { name: 'Small Temple', category: 'religious' },
        school: { name: 'School', category: 'education' }
    }
};

// Helper functions
LocationShops.getShopType = function(id) {
    return this.types[id] || null;
};

LocationShops.getAllShopTypes = function() {
    return Object.values(this.types);
};

LocationShops.getShopsByCategory = function(category) {
    return Object.values(this.types).filter(shop => shop.category === category);
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LocationShops;
}
