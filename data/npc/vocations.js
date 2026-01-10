/**
 * NPC Vocation Data
 * Comprehensive list of adventurer classes and civilian occupations
 */

const NPCVocationData = {
    // D&D 5e Adventurer Classes
    adventurerClasses: [
        {
            id: "barbarian",
            name: "Barbarian",
            description: "A fierce warrior driven by primal rage",
            typicalGear: ["greataxe", "javelins", "explorer's pack"],
            commonBackgrounds: ["outlander", "soldier", "folk hero"]
        },
        {
            id: "bard",
            name: "Bard",
            description: "A performer whose music weaves magic",
            typicalGear: ["rapier", "lute", "entertainer's pack"],
            commonBackgrounds: ["entertainer", "charlatan", "noble"]
        },
        {
            id: "cleric",
            name: "Cleric",
            description: "A holy warrior blessed by divine power",
            typicalGear: ["mace", "shield", "holy symbol", "priest's pack"],
            commonBackgrounds: ["acolyte", "hermit", "folk hero"]
        },
        {
            id: "druid",
            name: "Druid",
            description: "A keeper of nature's ancient secrets",
            typicalGear: ["wooden shield", "scimitar", "druidic focus"],
            commonBackgrounds: ["hermit", "outlander", "sage"]
        },
        {
            id: "fighter",
            name: "Fighter",
            description: "A master of martial combat",
            typicalGear: ["longsword", "shield", "chain mail", "dungeoneer's pack"],
            commonBackgrounds: ["soldier", "noble", "folk hero"]
        },
        {
            id: "monk",
            name: "Monk",
            description: "A disciplined warrior of body and spirit",
            typicalGear: ["shortsword", "darts", "explorer's pack"],
            commonBackgrounds: ["hermit", "acolyte", "outlander"]
        },
        {
            id: "paladin",
            name: "Paladin",
            description: "A holy knight sworn to an oath",
            typicalGear: ["longsword", "shield", "chain mail", "holy symbol"],
            commonBackgrounds: ["noble", "soldier", "acolyte"]
        },
        {
            id: "ranger",
            name: "Ranger",
            description: "A skilled hunter and tracker",
            typicalGear: ["longbow", "shortswords", "explorer's pack"],
            commonBackgrounds: ["outlander", "folk hero", "soldier"]
        },
        {
            id: "rogue",
            name: "Rogue",
            description: "A cunning specialist in stealth and trickery",
            typicalGear: ["shortsword", "shortbow", "thieves' tools", "burglar's pack"],
            commonBackgrounds: ["criminal", "charlatan", "urchin"]
        },
        {
            id: "sorcerer",
            name: "Sorcerer",
            description: "A spellcaster with innate magical power",
            typicalGear: ["dagger", "component pouch", "explorer's pack"],
            commonBackgrounds: ["hermit", "noble", "sage"]
        },
        {
            id: "warlock",
            name: "Warlock",
            description: "A wielder of magic granted by a patron",
            typicalGear: ["light crossbow", "arcane focus", "scholar's pack"],
            commonBackgrounds: ["charlatan", "sage", "hermit"]
        },
        {
            id: "wizard",
            name: "Wizard",
            description: "A scholarly practitioner of arcane magic",
            typicalGear: ["quarterstaff", "spellbook", "component pouch"],
            commonBackgrounds: ["sage", "acolyte", "noble"]
        }
    ],

    // Civilian Occupations organized by category
    civilianOccupations: {
        // Food & Drink
        foodAndDrink: [
            { id: "baker", name: "Baker", description: "Bakes bread, pastries, and other goods" },
            { id: "brewer", name: "Brewer", description: "Crafts ales, beers, and meads" },
            { id: "butcher", name: "Butcher", description: "Prepares and sells meat" },
            { id: "cheesemaker", name: "Cheesemaker", description: "Produces various cheeses" },
            { id: "cook", name: "Cook", description: "Prepares food for an establishment" },
            { id: "distiller", name: "Distiller", description: "Creates spirits and liquors" },
            { id: "fishmonger", name: "Fishmonger", description: "Sells fresh fish and seafood" },
            { id: "grocer", name: "Grocer", description: "Sells fresh produce and foodstuffs" },
            { id: "innkeeper", name: "Innkeeper", description: "Runs an inn or tavern" },
            { id: "miller", name: "Miller", description: "Grinds grain into flour" },
            { id: "pastry_chef", name: "Pastry Chef", description: "Specializes in sweet baked goods" },
            { id: "spice_merchant", name: "Spice Merchant", description: "Trades in exotic spices" },
            { id: "tavern_keeper", name: "Tavern Keeper", description: "Manages a drinking establishment" },
            { id: "vintner", name: "Vintner", description: "Produces and sells wine" },
            { id: "barmaid", name: "Barmaid", description: "Serves drinks at a tavern" },
            { id: "confectioner", name: "Confectioner", description: "Makes candies and sweets" },
            { id: "sausage_maker", name: "Sausage Maker", description: "Creates cured meats and sausages" },
            { id: "beekeeper", name: "Beekeeper", description: "Keeps bees for honey and wax" }
        ],

        // Crafts & Manufacturing
        craftsAndManufacturing: [
            { id: "armorer", name: "Armorer", description: "Crafts and repairs armor" },
            { id: "blacksmith", name: "Blacksmith", description: "Forges metal items" },
            { id: "bowyer", name: "Bowyer", description: "Makes bows and crossbows" },
            { id: "carpenter", name: "Carpenter", description: "Works with wood to build structures" },
            { id: "cartwright", name: "Cartwright", description: "Makes and repairs carts and wagons" },
            { id: "chandler", name: "Chandler", description: "Makes candles and soap" },
            { id: "cobbler", name: "Cobbler", description: "Makes and repairs shoes" },
            { id: "cooper", name: "Cooper", description: "Makes barrels and casks" },
            { id: "fletcher", name: "Fletcher", description: "Makes arrows and bolts" },
            { id: "glassblower", name: "Glassblower", description: "Creates glass items" },
            { id: "goldsmith", name: "Goldsmith", description: "Works with precious metals" },
            { id: "jeweler", name: "Jeweler", description: "Creates and sells jewelry" },
            { id: "leatherworker", name: "Leatherworker", description: "Crafts leather goods" },
            { id: "locksmith", name: "Locksmith", description: "Makes and repairs locks" },
            { id: "mason", name: "Mason", description: "Works with stone construction" },
            { id: "potter", name: "Potter", description: "Creates ceramic items" },
            { id: "rope_maker", name: "Rope Maker", description: "Produces rope and cordage" },
            { id: "saddler", name: "Saddler", description: "Makes saddles and horse tack" },
            { id: "sailmaker", name: "Sailmaker", description: "Creates sails for ships" },
            { id: "silversmith", name: "Silversmith", description: "Works with silver" },
            { id: "tailor", name: "Tailor", description: "Makes and repairs clothing" },
            { id: "tanner", name: "Tanner", description: "Processes animal hides into leather" },
            { id: "tinker", name: "Tinker", description: "Repairs small metal items" },
            { id: "weaponsmith", name: "Weaponsmith", description: "Forges weapons" },
            { id: "weaver", name: "Weaver", description: "Creates fabric on a loom" },
            { id: "wheelwright", name: "Wheelwright", description: "Makes and repairs wheels" },
            { id: "woodcarver", name: "Woodcarver", description: "Carves decorative wood items" },
            { id: "dyer", name: "Dyer", description: "Colors fabrics and leather" },
            { id: "embroiderer", name: "Embroiderer", description: "Creates decorative needlework" },
            { id: "furrier", name: "Furrier", description: "Works with furs and pelts" },
            { id: "hat_maker", name: "Hat Maker", description: "Creates hats and headwear" },
            { id: "instrument_maker", name: "Instrument Maker", description: "Crafts musical instruments" },
            { id: "papermaker", name: "Papermaker", description: "Produces paper and parchment" },
            { id: "perfumer", name: "Perfumer", description: "Creates scents and perfumes" },
            { id: "sculptor", name: "Sculptor", description: "Carves statues and decorative pieces" },
            { id: "shipwright", name: "Shipwright", description: "Builds and repairs ships" },
            { id: "toymaker", name: "Toymaker", description: "Creates toys and games" },
            { id: "upholsterer", name: "Upholsterer", description: "Works with furniture fabrics" },
            { id: "wainwright", name: "Wainwright", description: "Makes and repairs wagons" },
            { id: "watchmaker", name: "Watchmaker", description: "Creates timepieces and clocks" },
            { id: "basket_weaver", name: "Basket Weaver", description: "Weaves baskets and containers" },
            { id: "broom_maker", name: "Broom Maker", description: "Makes brooms and brushes" },
            { id: "engraver", name: "Engraver", description: "Carves designs into metal or stone" },
            { id: "gilder", name: "Gilder", description: "Applies gold leaf to objects" },
            { id: "lapidary", name: "Lapidary", description: "Cuts and polishes gemstones" },
            { id: "nail_maker", name: "Nail Maker", description: "Forges nails and fasteners" },
            { id: "seamstress", name: "Seamstress", description: "Sews and repairs clothing" }
        ],

        // Agriculture & Animal Husbandry
        agricultureAndAnimals: [
            { id: "farmer", name: "Farmer", description: "Grows crops for food and trade" },
            { id: "shepherd", name: "Shepherd", description: "Tends and herds sheep" },
            { id: "rancher", name: "Rancher", description: "Raises cattle or livestock" },
            { id: "fisherman", name: "Fisherman", description: "Catches fish for a living" },
            { id: "hunter", name: "Hunter", description: "Hunts game for food or pelts" },
            { id: "trapper", name: "Trapper", description: "Captures animals for fur trade" },
            { id: "horse_breeder", name: "Horse Breeder", description: "Raises and trains horses" },
            { id: "stable_master", name: "Stable Master", description: "Manages stables and horses" },
            { id: "falconer", name: "Falconer", description: "Trains and keeps hunting birds" },
            { id: "gamekeeper", name: "Gamekeeper", description: "Manages game on an estate" },
            { id: "herdsman", name: "Herdsman", description: "Tends livestock herds" },
            { id: "kennelmaster", name: "Kennelmaster", description: "Breeds and trains dogs" },
            { id: "lumberjack", name: "Lumberjack", description: "Cuts and processes timber" },
            { id: "miner", name: "Miner", description: "Extracts ore and minerals" },
            { id: "vineyard_keeper", name: "Vineyard Keeper", description: "Cultivates grapevines" },
            { id: "orchard_keeper", name: "Orchard Keeper", description: "Maintains fruit orchards" },
            { id: "herbalist", name: "Herbalist", description: "Grows and sells medicinal herbs" },
            { id: "goatherd", name: "Goatherd", description: "Tends goats" },
            { id: "swineherd", name: "Swineherd", description: "Raises pigs" },
            { id: "poultry_farmer", name: "Poultry Farmer", description: "Raises chickens and fowl" },
            { id: "ostler", name: "Ostler", description: "Cares for horses at an inn" },
            { id: "rat_catcher", name: "Rat Catcher", description: "Controls vermin populations" },
            { id: "whaler", name: "Whaler", description: "Hunts whales at sea" },
            { id: "oyster_diver", name: "Oyster Diver", description: "Harvests oysters and shellfish" },
            { id: "pearl_diver", name: "Pearl Diver", description: "Dives for pearls" }
        ],

        // Trade & Commerce
        tradeAndCommerce: [
            { id: "merchant", name: "Merchant", description: "Buys and sells goods" },
            { id: "trader", name: "Trader", description: "Travels to trade goods" },
            { id: "peddler", name: "Peddler", description: "Travels selling small wares" },
            { id: "shopkeeper", name: "Shopkeeper", description: "Runs a retail establishment" },
            { id: "banker", name: "Banker", description: "Handles money and loans" },
            { id: "money_changer", name: "Money Changer", description: "Exchanges currencies" },
            { id: "auctioneer", name: "Auctioneer", description: "Conducts public sales" },
            { id: "fence", name: "Fence", description: "Deals in stolen goods" },
            { id: "factor", name: "Factor", description: "Acts as an agent for merchants" },
            { id: "caravan_master", name: "Caravan Master", description: "Leads trade caravans" },
            { id: "ship_captain", name: "Ship Captain", description: "Commands a trading vessel" },
            { id: "warehouse_manager", name: "Warehouse Manager", description: "Oversees goods storage" },
            { id: "customs_officer", name: "Customs Officer", description: "Inspects imported goods" },
            { id: "appraiser", name: "Appraiser", description: "Values goods and property" },
            { id: "broker", name: "Broker", description: "Arranges deals between parties" },
            { id: "importer", name: "Importer", description: "Brings in foreign goods" },
            { id: "exporter", name: "Exporter", description: "Sends goods to foreign lands" },
            { id: "pawnbroker", name: "Pawnbroker", description: "Loans money against items" },
            { id: "antiquarian", name: "Antiquarian", description: "Deals in old and rare items" },
            { id: "book_dealer", name: "Book Dealer", description: "Sells books and manuscripts" }
        ],

        // Service & Hospitality
        serviceAndHospitality: [
            { id: "servant", name: "Servant", description: "Provides domestic service" },
            { id: "butler", name: "Butler", description: "Heads household staff" },
            { id: "maid", name: "Maid", description: "Performs household cleaning" },
            { id: "cook_domestic", name: "Household Cook", description: "Prepares meals for a household" },
            { id: "valet", name: "Valet", description: "Personal attendant to a lord" },
            { id: "lady_in_waiting", name: "Lady-in-Waiting", description: "Attends a noblewoman" },
            { id: "porter", name: "Porter", description: "Carries luggage and goods" },
            { id: "barber", name: "Barber", description: "Cuts hair and shaves beards" },
            { id: "bath_attendant", name: "Bath Attendant", description: "Works at a bathhouse" },
            { id: "laundress", name: "Laundress", description: "Washes and mends clothing" },
            { id: "wet_nurse", name: "Wet Nurse", description: "Nurses others' children" },
            { id: "nanny", name: "Nanny", description: "Cares for children" },
            { id: "governess", name: "Governess", description: "Educates children in a household" },
            { id: "tutor", name: "Tutor", description: "Provides private instruction" },
            { id: "guide", name: "Guide", description: "Leads travelers through areas" },
            { id: "translator", name: "Translator", description: "Converts between languages" },
            { id: "messenger", name: "Messenger", description: "Carries messages and packages" },
            { id: "courier", name: "Courier", description: "Delivers important documents" },
            { id: "bodyguard", name: "Bodyguard", description: "Protects a specific person" },
            { id: "footman", name: "Footman", description: "Household servant in livery" },
            { id: "housekeeper", name: "Housekeeper", description: "Manages household affairs" },
            { id: "groundskeeper", name: "Groundskeeper", description: "Maintains estate grounds" },
            { id: "concierge", name: "Concierge", description: "Assists guests at an establishment" },
            { id: "bellhop", name: "Bellhop", description: "Assists guests at an inn" }
        ],

        // Entertainment & Arts
        entertainmentAndArts: [
            { id: "actor", name: "Actor", description: "Performs in theatrical productions" },
            { id: "musician", name: "Musician", description: "Plays musical instruments" },
            { id: "singer", name: "Singer", description: "Performs vocal music" },
            { id: "dancer", name: "Dancer", description: "Performs dances" },
            { id: "juggler", name: "Juggler", description: "Performs juggling acts" },
            { id: "acrobat", name: "Acrobat", description: "Performs gymnastic feats" },
            { id: "jester", name: "Jester", description: "Entertains through comedy" },
            { id: "storyteller", name: "Storyteller", description: "Tells tales and legends" },
            { id: "poet", name: "Poet", description: "Composes verses and poems" },
            { id: "playwright", name: "Playwright", description: "Writes theatrical works" },
            { id: "painter", name: "Painter", description: "Creates paintings" },
            { id: "portrait_artist", name: "Portrait Artist", description: "Paints likenesses of people" },
            { id: "illuminator", name: "Illuminator", description: "Decorates manuscripts" },
            { id: "fire_breather", name: "Fire Breather", description: "Performs with fire" },
            { id: "sword_swallower", name: "Sword Swallower", description: "Performs dangerous feats" },
            { id: "fortune_teller", name: "Fortune Teller", description: "Reads fortunes for coin" },
            { id: "puppeteer", name: "Puppeteer", description: "Performs with puppets" },
            { id: "magician", name: "Stage Magician", description: "Performs illusions and tricks" },
            { id: "contortionist", name: "Contortionist", description: "Performs flexible feats" },
            { id: "animal_trainer", name: "Animal Trainer", description: "Trains animals for shows" },
            { id: "ringmaster", name: "Ringmaster", description: "Leads circus performances" },
            { id: "mime", name: "Mime", description: "Performs silent acting" },
            { id: "minstrel", name: "Minstrel", description: "Travels performing music" },
            { id: "composer", name: "Composer", description: "Creates musical works" },
            { id: "calligrapher", name: "Calligrapher", description: "Creates decorative writing" }
        ],

        // Religion & Spiritual
        religionAndSpiritual: [
            { id: "priest", name: "Priest", description: "Leads religious services" },
            { id: "acolyte", name: "Acolyte", description: "Assists in religious duties" },
            { id: "monk_religious", name: "Religious Monk", description: "Lives in monastic devotion" },
            { id: "nun", name: "Nun", description: "Female religious devotee" },
            { id: "temple_guardian", name: "Temple Guardian", description: "Protects a holy site" },
            { id: "shrine_keeper", name: "Shrine Keeper", description: "Maintains a shrine" },
            { id: "pilgrim", name: "Pilgrim", description: "Travels to holy sites" },
            { id: "missionary", name: "Missionary", description: "Spreads religious faith" },
            { id: "exorcist", name: "Exorcist", description: "Removes evil spirits" },
            { id: "oracle", name: "Oracle", description: "Provides divine prophecies" },
            { id: "inquisitor", name: "Inquisitor", description: "Investigates religious crimes" },
            { id: "undertaker", name: "Undertaker", description: "Prepares the dead for burial" },
            { id: "grave_digger", name: "Grave Digger", description: "Digs graves for burial" },
            { id: "mourner", name: "Professional Mourner", description: "Hired to mourn at funerals" },
            { id: "hermit", name: "Hermit", description: "Lives in religious seclusion" },
            { id: "flagellant", name: "Flagellant", description: "Practices self-punishment" },
            { id: "pardoner", name: "Pardoner", description: "Sells religious indulgences" },
            { id: "relic_keeper", name: "Relic Keeper", description: "Guards sacred relics" }
        ],

        // Scholarly & Academic
        scholarlyAndAcademic: [
            { id: "scholar", name: "Scholar", description: "Pursues academic knowledge" },
            { id: "sage", name: "Sage", description: "Expert in specific knowledge" },
            { id: "scribe", name: "Scribe", description: "Copies and writes documents" },
            { id: "librarian", name: "Librarian", description: "Manages a collection of books" },
            { id: "archivist", name: "Archivist", description: "Preserves historical records" },
            { id: "cartographer", name: "Cartographer", description: "Creates maps" },
            { id: "historian", name: "Historian", description: "Studies the past" },
            { id: "astronomer", name: "Astronomer", description: "Studies the stars" },
            { id: "alchemist", name: "Alchemist", description: "Practices alchemical arts" },
            { id: "apothecary", name: "Apothecary", description: "Prepares medicines" },
            { id: "naturalist", name: "Naturalist", description: "Studies the natural world" },
            { id: "philosopher", name: "Philosopher", description: "Contemplates deep questions" },
            { id: "tutor_academic", name: "Academic Tutor", description: "Teaches specific subjects" },
            { id: "professor", name: "Professor", description: "Teaches at a university" },
            { id: "researcher", name: "Researcher", description: "Conducts scholarly research" },
            { id: "linguist", name: "Linguist", description: "Studies languages" },
            { id: "mathematician", name: "Mathematician", description: "Works with numbers" },
            { id: "engineer", name: "Engineer", description: "Designs structures and machines" },
            { id: "architect", name: "Architect", description: "Designs buildings" },
            { id: "surveyor", name: "Surveyor", description: "Measures and maps land" },
            { id: "herbologist", name: "Herbologist", description: "Studies medicinal plants" },
            { id: "genealogist", name: "Genealogist", description: "Traces family lineages" },
            { id: "antiquary", name: "Antiquary", description: "Studies ancient artifacts" }
        ],

        // Medical & Healing
        medicalAndHealing: [
            { id: "physician", name: "Physician", description: "Practices medicine" },
            { id: "surgeon", name: "Surgeon", description: "Performs operations" },
            { id: "healer", name: "Healer", description: "Treats the sick and injured" },
            { id: "midwife", name: "Midwife", description: "Assists in childbirth" },
            { id: "herbalist_medical", name: "Medical Herbalist", description: "Uses herbs for healing" },
            { id: "nurse", name: "Nurse", description: "Cares for the ill" },
            { id: "dentist", name: "Dentist", description: "Treats teeth and gums" },
            { id: "bonesetter", name: "Bonesetter", description: "Sets broken bones" },
            { id: "bloodletter", name: "Bloodletter", description: "Practices bloodletting" },
            { id: "plague_doctor", name: "Plague Doctor", description: "Treats epidemic diseases" },
            { id: "leech_collector", name: "Leech Collector", description: "Gathers medicinal leeches" },
            { id: "veterinarian", name: "Veterinarian", description: "Treats animal ailments" }
        ],

        // Law & Government
        lawAndGovernment: [
            { id: "magistrate", name: "Magistrate", description: "Administers local justice" },
            { id: "judge", name: "Judge", description: "Presides over legal cases" },
            { id: "lawyer", name: "Lawyer", description: "Practices law" },
            { id: "barrister", name: "Barrister", description: "Argues cases in court" },
            { id: "bailiff", name: "Bailiff", description: "Enforces court orders" },
            { id: "tax_collector", name: "Tax Collector", description: "Collects taxes" },
            { id: "herald", name: "Herald", description: "Makes official announcements" },
            { id: "diplomat", name: "Diplomat", description: "Represents their nation abroad" },
            { id: "ambassador", name: "Ambassador", description: "Official representative to foreign lands" },
            { id: "clerk", name: "Clerk", description: "Keeps records and accounts" },
            { id: "notary", name: "Notary", description: "Certifies legal documents" },
            { id: "inspector", name: "Inspector", description: "Examines for compliance" },
            { id: "warden", name: "Warden", description: "Oversees a prison or region" },
            { id: "executioner", name: "Executioner", description: "Carries out death sentences" },
            { id: "torturer", name: "Torturer", description: "Extracts confessions" },
            { id: "jailer", name: "Jailer", description: "Guards prisoners" },
            { id: "town_crier", name: "Town Crier", description: "Announces public news" },
            { id: "census_taker", name: "Census Taker", description: "Counts populations" },
            { id: "steward", name: "Steward", description: "Manages an estate" },
            { id: "reeve", name: "Reeve", description: "Oversees a village or manor" },
            { id: "chamberlain", name: "Chamberlain", description: "Manages a noble household" },
            { id: "seneschal", name: "Seneschal", description: "Chief steward of a castle" }
        ],

        // Military & Security
        militaryAndSecurity: [
            { id: "soldier", name: "Soldier", description: "Serves in the military" },
            { id: "guard", name: "Guard", description: "Protects people or property" },
            { id: "watchman", name: "Watchman", description: "Patrols for safety" },
            { id: "constable", name: "Constable", description: "Maintains local peace" },
            { id: "sheriff", name: "Sheriff", description: "Chief law enforcement officer" },
            { id: "knight", name: "Knight", description: "Mounted warrior of noble status" },
            { id: "squire", name: "Squire", description: "Knight's apprentice" },
            { id: "mercenary", name: "Mercenary", description: "Soldier for hire" },
            { id: "bounty_hunter", name: "Bounty Hunter", description: "Captures wanted criminals" },
            { id: "detective", name: "Detective", description: "Investigates crimes" },
            { id: "spy", name: "Spy", description: "Gathers secret information" },
            { id: "scout", name: "Scout", description: "Reconnoiters ahead" },
            { id: "archer", name: "Archer", description: "Specializes in ranged combat" },
            { id: "pikeman", name: "Pikeman", description: "Infantry with long spears" },
            { id: "cavalry", name: "Cavalry", description: "Mounted soldier" },
            { id: "siege_engineer", name: "Siege Engineer", description: "Operates siege weapons" },
            { id: "drill_sergeant", name: "Drill Sergeant", description: "Trains soldiers" },
            { id: "quartermaster", name: "Quartermaster", description: "Manages military supplies" },
            { id: "armory_keeper", name: "Armory Keeper", description: "Maintains weapons and armor" },
            { id: "castellan", name: "Castellan", description: "Commands a castle garrison" },
            { id: "night_watchman", name: "Night Watchman", description: "Patrols at night" },
            { id: "gatekeeper", name: "Gatekeeper", description: "Guards entrance ways" },
            { id: "torturer", name: "Interrogator", description: "Questions prisoners" }
        ],

        // Maritime
        maritime: [
            { id: "sailor", name: "Sailor", description: "Works aboard ships" },
            { id: "navigator", name: "Navigator", description: "Charts ship courses" },
            { id: "captain", name: "Ship's Captain", description: "Commands a vessel" },
            { id: "first_mate", name: "First Mate", description: "Second in command" },
            { id: "boatswain", name: "Boatswain", description: "Supervises deck crew" },
            { id: "helmsman", name: "Helmsman", description: "Steers the ship" },
            { id: "lookout", name: "Lookout", description: "Watches for dangers" },
            { id: "ship_cook", name: "Ship's Cook", description: "Prepares food aboard ship" },
            { id: "dockworker", name: "Dockworker", description: "Loads and unloads ships" },
            { id: "harbormaster", name: "Harbormaster", description: "Manages port operations" },
            { id: "lighthouse_keeper", name: "Lighthouse Keeper", description: "Maintains lighthouse" },
            { id: "ferry_operator", name: "Ferry Operator", description: "Operates a ferry" },
            { id: "pirate", name: "Pirate", description: "Raids ships at sea" },
            { id: "privateer", name: "Privateer", description: "Licensed sea raider" },
            { id: "smuggler", name: "Smuggler", description: "Moves illegal goods" },
            { id: "net_mender", name: "Net Mender", description: "Repairs fishing nets" },
            { id: "rope_maker_maritime", name: "Ship's Rope Maker", description: "Makes rigging" },
            { id: "caulker", name: "Caulker", description: "Seals ship hulls" }
        ],

        // Transportation
        transportation: [
            { id: "carter", name: "Carter", description: "Drives carts for transport" },
            { id: "coachman", name: "Coachman", description: "Drives horse-drawn coaches" },
            { id: "teamster", name: "Teamster", description: "Drives teams of animals" },
            { id: "wagon_driver", name: "Wagon Driver", description: "Transports goods by wagon" },
            { id: "carriage_driver", name: "Carriage Driver", description: "Drives passenger carriages" },
            { id: "sedan_bearer", name: "Sedan Bearer", description: "Carries sedan chairs" },
            { id: "stable_hand", name: "Stable Hand", description: "Cares for horses" },
            { id: "farrier", name: "Farrier", description: "Shoes horses" },
            { id: "animal_handler", name: "Animal Handler", description: "Works with draft animals" },
            { id: "road_warden", name: "Road Warden", description: "Patrols roads" },
            { id: "toll_keeper", name: "Toll Keeper", description: "Collects road tolls" },
            { id: "bridge_keeper", name: "Bridge Keeper", description: "Maintains and guards bridges" },
            { id: "pack_handler", name: "Pack Handler", description: "Manages pack animals" }
        ],

        // Underworld & Criminal
        underworldAndCriminal: [
            { id: "thief", name: "Thief", description: "Steals for a living" },
            { id: "pickpocket", name: "Pickpocket", description: "Steals from pockets" },
            { id: "burglar", name: "Burglar", description: "Breaks into buildings" },
            { id: "cutpurse", name: "Cutpurse", description: "Cuts purses from belts" },
            { id: "con_artist", name: "Con Artist", description: "Swindles through deception" },
            { id: "forger", name: "Forger", description: "Creates fake documents" },
            { id: "counterfeiter", name: "Counterfeiter", description: "Makes fake currency" },
            { id: "smuggler_criminal", name: "Smuggler", description: "Moves contraband goods" },
            { id: "fence_criminal", name: "Fence", description: "Sells stolen goods" },
            { id: "assassin", name: "Assassin", description: "Kills for payment" },
            { id: "enforcer", name: "Enforcer", description: "Uses violence for a boss" },
            { id: "loan_shark", name: "Loan Shark", description: "Lends money at high interest" },
            { id: "beggar", name: "Beggar", description: "Asks for alms" },
            { id: "prostitute", name: "Prostitute", description: "Sells companionship" },
            { id: "madam", name: "Madam", description: "Runs a brothel" },
            { id: "gang_leader", name: "Gang Leader", description: "Leads a criminal gang" },
            { id: "informant", name: "Informant", description: "Sells information" },
            { id: "grave_robber", name: "Grave Robber", description: "Steals from graves" },
            { id: "poacher", name: "Poacher", description: "Illegally hunts game" },
            { id: "highwayman", name: "Highwayman", description: "Robs travelers on roads" },
            { id: "racketeer", name: "Racketeer", description: "Runs protection schemes" },
            { id: "black_marketeer", name: "Black Marketeer", description: "Sells illegal goods" }
        ],

        // Miscellaneous
        miscellaneous: [
            { id: "street_vendor", name: "Street Vendor", description: "Sells goods on streets" },
            { id: "chimney_sweep", name: "Chimney Sweep", description: "Cleans chimneys" },
            { id: "lamp_lighter", name: "Lamp Lighter", description: "Lights street lamps" },
            { id: "night_soil_collector", name: "Night Soil Collector", description: "Removes waste" },
            { id: "rag_picker", name: "Rag Picker", description: "Collects and sells rags" },
            { id: "mudlark", name: "Mudlark", description: "Scavenges in river mud" },
            { id: "charcoal_burner", name: "Charcoal Burner", description: "Produces charcoal" },
            { id: "ice_cutter", name: "Ice Cutter", description: "Harvests ice in winter" },
            { id: "well_digger", name: "Well Digger", description: "Digs wells" },
            { id: "gravestone_carver", name: "Gravestone Carver", description: "Carves memorials" },
            { id: "sign_painter", name: "Sign Painter", description: "Paints shop signs" },
            { id: "town_drunk", name: "Town Drunk", description: "Known local drunkard" },
            { id: "hermit", name: "Hermit", description: "Lives in isolation" },
            { id: "wanderer", name: "Wanderer", description: "Travels without purpose" },
            { id: "retired_adventurer", name: "Retired Adventurer", description: "Former adventurer" },
            { id: "gambler", name: "Gambler", description: "Lives by gambling" },
            { id: "matchmaker", name: "Matchmaker", description: "Arranges marriages" },
            { id: "wet_nurse", name: "Wet Nurse", description: "Nurses infants" },
            { id: "food_taster", name: "Food Taster", description: "Tests food for poison" },
            { id: "dog_walker", name: "Dog Walker", description: "Walks dogs for nobles" }
        ]
    },

    // Helper function to get a random civilian occupation
    getRandomOccupation() {
        const categories = Object.keys(this.civilianOccupations);
        const category = categories[Math.floor(Math.random() * categories.length)];
        const occupations = this.civilianOccupations[category];
        return occupations[Math.floor(Math.random() * occupations.length)];
    },

    // Get all civilian occupations as a flat array
    getAllOccupations() {
        const all = [];
        for (const category of Object.values(this.civilianOccupations)) {
            all.push(...category);
        }
        return all;
    },

    // Get occupations by category
    getOccupationsByCategory(categoryId) {
        return this.civilianOccupations[categoryId] || [];
    },

    // Get category names
    getCategoryNames() {
        return {
            foodAndDrink: "Food & Drink",
            craftsAndManufacturing: "Crafts & Manufacturing",
            agricultureAndAnimals: "Agriculture & Animals",
            tradeAndCommerce: "Trade & Commerce",
            serviceAndHospitality: "Service & Hospitality",
            entertainmentAndArts: "Entertainment & Arts",
            religionAndSpiritual: "Religion & Spiritual",
            scholarlyAndAcademic: "Scholarly & Academic",
            medicalAndHealing: "Medical & Healing",
            lawAndGovernment: "Law & Government",
            militaryAndSecurity: "Military & Security",
            maritime: "Maritime",
            transportation: "Transportation",
            underworldAndCriminal: "Underworld & Criminal",
            miscellaneous: "Miscellaneous"
        };
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NPCVocationData;
}
