/**
 * NPC Traits Data
 * Physical traits, clothing by wealth level, and improv seeds
 */

const NPCTraitsData = {
    // Hair colors organized by common and unusual
    hairColors: {
        common: [
            "jet black", "raven black", "dark brown", "chestnut brown", "light brown",
            "auburn", "copper", "strawberry blonde", "golden blonde", "platinum blonde",
            "dirty blonde", "ash brown", "mousy brown", "sandy brown", "honey blonde",
            "rust red", "fiery red", "ginger", "dark auburn", "chocolate brown",
            "salt and pepper", "silver gray", "pure white", "steel gray", "graying"
        ],
        unusual: [
            "snow white", "midnight blue", "deep purple", "forest green", "blood red",
            "silver", "golden", "copper with green highlights", "streaked with gray",
            "prematurely white", "dyed bright red", "dyed deep blue", "sun-bleached",
            "two-toned", "with a white streak", "with gray temples"
        ]
    },

    // Eye colors organized by common and unusual
    eyeColors: {
        common: [
            "dark brown", "light brown", "hazel", "amber", "green",
            "blue", "gray", "blue-gray", "green-gray", "brown-green",
            "steel gray", "pale blue", "deep blue", "bright green", "dark green",
            "golden brown", "warm brown", "cool gray", "sea green", "sky blue"
        ],
        unusual: [
            "violet", "golden", "silver", "amber with gold flecks", "one blue one brown",
            "pale almost colorless", "deep black", "bright yellow", "copper",
            "red-rimmed", "milky (blind)", "scarred over one eye", "unusually large",
            "constantly narrowed", "wide and innocent", "cold and calculating"
        ]
    },

    // Clothing by wealth level
    clothing: {
        squalid: {
            male: [
                "tattered rags barely held together with crude stitches",
                "a filthy, torn tunic with more holes than fabric",
                "threadbare pants patched with mismatched scraps",
                "a stained and ripped shirt that was once white",
                "cast-off clothes several sizes too large",
                "a rough burlap sack fashioned into a crude garment",
                "mud-caked leggings and a sleeveless vest full of holes",
                "clothes held together with bits of rope and twine",
                "a single long shirt worn as both tunic and sleeping garment",
                "stolen clothes that clearly belonged to someone else",
                "layers of rags wrapped for warmth",
                "a moth-eaten cloak over near-naked skin",
                "pants with knees worn through and fraying hems",
                "a shirt so thin it's nearly transparent",
                "clothes stiff with old sweat and grime"
            ],
            female: [
                "a tattered dress with more patches than original fabric",
                "filthy rags wrapped and tied into a makeshift garment",
                "a torn shift that barely preserves modesty",
                "cast-off clothes clearly meant for someone larger",
                "a stained apron worn over threadbare underlayers",
                "scraps of cloth tied together into a crude skirt",
                "a single dress worn day and night until it falls apart",
                "layers of rags for warmth and coverage",
                "a mud-stained chemise with ripped sleeves",
                "clothing held together with thorns and crude stitches",
                "a moth-eaten shawl over a nearly destroyed dress",
                "a burlap sack altered into a shapeless garment",
                "stolen clothes that obviously don't fit",
                "a dress so patched the original color is unknown",
                "rags wrapped around feet instead of shoes"
            ]
        },
        commoner: {
            male: [
                "a simple wool tunic in undyed brown",
                "sturdy canvas trousers and a linen shirt",
                "a plain jerkin over a homespun shirt",
                "work clothes stained with honest labor",
                "a leather vest over a cotton shirt",
                "simple but well-maintained traveling clothes",
                "a rough-woven shirt and patched but clean trousers",
                "a tradesman's apron over everyday clothes",
                "plain clothes in earthy browns and grays",
                "a simple cloth cap and working man's attire",
                "serviceable clothes with visible mending",
                "a farmer's smock over simple underlayers",
                "well-worn but cared-for everyday clothes",
                "a thick wool shirt and sturdy boots",
                "practical clothes suited to physical work"
            ],
            female: [
                "a simple wool dress in natural colors",
                "a plain linen dress with a practical apron",
                "homespun clothes in browns and grays",
                "a serviceable dress with visible mending",
                "a cotton dress with a kerchief covering her hair",
                "practical working clothes suitable for labor",
                "a simple bodice and full skirt in undyed wool",
                "clean but well-worn everyday clothes",
                "a dress with patches at the elbows and hem",
                "sturdy clothes in earth tones",
                "a plain dress with a woolen shawl",
                "simple clothes that show careful maintenance",
                "a working woman's dress with practical pockets",
                "clothes suited to household duties",
                "a modest dress and simple bonnet"
            ]
        },
        modest: {
            male: [
                "a clean linen shirt with a decent wool doublet",
                "well-fitted clothes in pleasant colors",
                "a leather belt with a simple brass buckle",
                "respectable attire suitable for church",
                "a good wool coat over quality underclothes",
                "clothes that show care and modest prosperity",
                "a clean shirt with embroidered collar",
                "boots polished to a reasonable shine",
                "a vest with decorative buttons",
                "clothes in good condition with some minor wear",
                "a cloak with a simple but quality clasp",
                "professional attire appropriate to his trade",
                "comfortable clothes of decent make",
                "a shirt with subtle decorative stitching",
                "well-maintained clothes with small luxuries"
            ],
            female: [
                "a well-made dress in a pleasant color",
                "clothes that show modest prosperity",
                "a dress with simple but tasteful embroidery",
                "respectable attire with minor decorations",
                "a good wool dress with a clean apron",
                "clothes that show care and attention",
                "a bodice with decorative lacework",
                "a dress with ribbons at the sleeves",
                "well-fitted clothes in flattering colors",
                "a simple necklace over a quality dress",
                "comfortable but respectable attire",
                "a dress suitable for receiving visitors",
                "clothes with small touches of decoration",
                "a dress with embroidered hem and collar",
                "attire appropriate to a merchant's wife"
            ]
        },
        wealthy: {
            male: [
                "fine clothes of quality wool and silk",
                "a velvet doublet with silver buttons",
                "expertly tailored attire in rich colors",
                "a silk shirt visible beneath an embroidered coat",
                "clothes that speak of significant means",
                "a brocade vest over fine linen",
                "boots of supple leather with silver buckles",
                "a fur-trimmed cloak of excellent quality",
                "rings on several fingers and a jeweled pin",
                "clothes cut in the latest fashion",
                "a silk cravat tied in an elaborate knot",
                "fine gloves and a walking stick with silver head",
                "clothes that cost more than most earn in a year",
                "an embroidered coat with gold thread",
                "attire suitable for a successful merchant"
            ],
            female: [
                "an elegant gown of fine silk",
                "clothes that display significant wealth",
                "a dress with intricate embroidery and lacework",
                "jewels at throat, ears, and fingers",
                "a velvet gown in a rich, deep color",
                "clothes cut in the height of fashion",
                "a fur-trimmed wrap over quality silk",
                "a dress with pearl buttons and gold thread",
                "fine slippers visible beneath flowing skirts",
                "elaborate hairstyle held with jeweled pins",
                "a gown that rustles expensively when she moves",
                "clothes that proclaim prosperity without vulgarity",
                "a dress with imported lace at collar and cuffs",
                "attire suitable for hosting important guests",
                "elegant clothes with subtle but expensive details"
            ]
        },
        noble: {
            male: [
                "resplendent attire fit for court",
                "clothes worth more than a village earns in a year",
                "a doublet encrusted with gems and gold thread",
                "silks and velvets of the finest quality",
                "a cape lined with ermine or sable",
                "rings, chains, and jewels proclaiming noble status",
                "clothes cut by the realm's finest tailors",
                "a sword with a gem-encrusted hilt at his side",
                "attire that commands respect and deference",
                "the latest court fashion in excessive detail",
                "clothes that change with each season's whims",
                "hereditary jewels worn as badges of rank",
                "an outfit that took servants hours to arrange",
                "fabrics so fine they're nearly translucent",
                "attire suitable for an audience with royalty"
            ],
            female: [
                "a magnificent gown of impossible elegance",
                "clothes that would bankrupt a merchant",
                "silks imported from distant lands",
                "jewels that catch and scatter light magnificently",
                "a gown with a train requiring attendants",
                "heirloom jewelry passed down through generations",
                "attire that sets fashion rather than follows it",
                "clothes that required a team of seamstresses",
                "a dress in colors reserved for nobility",
                "elaborate hairstyle with gems woven throughout",
                "a gown that weighs more than practical clothes",
                "furs from exotic and rare animals",
                "clothes changed multiple times each day",
                "attire fit for balls and royal audiences",
                "a dress that took months to create"
            ]
        }
    },

    // Distinctive physical features
    distinctiveFeatures: {
        male: [
            "a prominent scar across his left cheek",
            "a nose that's been broken more than once",
            "unusually tall for his kind",
            "a birthmark shaped like a crescent moon",
            "tattoos covering his forearms",
            "missing the tip of one finger",
            "a permanent squint from years in bright light",
            "calloused hands that speak of hard work",
            "burn scars on his hands and forearms",
            "a limp from an old injury",
            "an eye that wanders slightly",
            "exceptionally broad shoulders",
            "a thin frame that belies surprising strength",
            "a gap between his front teeth",
            "unusually pale skin",
            "weathered skin from years outdoors",
            "prematurely aged features",
            "a youthful face despite his years",
            "hands too soft for his profession",
            "a crooked smile that's oddly charming",
            "a nervous tic in one eye",
            "ears that stick out prominently",
            "a cleft chin",
            "thick eyebrows that dominate his expression",
            "a receding hairline he tries to hide"
        ],
        female: [
            "a beauty mark near her left eye",
            "freckles scattered across her nose and cheeks",
            "unusually tall for her kind",
            "a birthmark on her neck she usually covers",
            "a delicate scar on her chin",
            "hands roughened by work",
            "an infectious smile that lights up her face",
            "eyes that seem to change color in different light",
            "a permanent furrow between her brows",
            "calluses on her fingertips from her craft",
            "a slight limp she disguises well",
            "unusually long fingers",
            "a crooked tooth that shows when she smiles",
            "dimples that appear when she laughs",
            "prematurely gray streaks in her hair",
            "weathered skin from outdoor work",
            "a youthful appearance despite her age",
            "a regal bearing that draws eyes",
            "a nervous habit of touching her hair",
            "a distinctive laugh",
            "eyes that crinkle warmly when she smiles",
            "a sharp, intelligent gaze",
            "unusually small hands",
            "a posture that suggests years of training",
            "a prominent nose she's grown to accept"
        ]
    },

    // Improv seeds - random words for roleplay inspiration
    improvSeeds: {
        objects: [
            "key", "letter", "coin", "ring", "dagger", "book", "map", "candle",
            "rope", "mirror", "feather", "stone", "bottle", "box", "locket",
            "skull", "mask", "scroll", "gem", "bone", "cloth", "chain",
            "needle", "thread", "button", "bell", "whistle", "dice", "card",
            "flower", "leaf", "seed", "acorn", "shell", "scale", "claw",
            "tooth", "horn", "fur", "leather", "silk", "wool", "copper",
            "silver", "gold", "iron", "wood", "glass", "crystal", "pearl"
        ],
        animals: [
            "wolf", "raven", "cat", "dog", "horse", "rat", "spider", "snake",
            "owl", "hawk", "bear", "fox", "deer", "boar", "fish", "crow",
            "dove", "eagle", "lion", "tiger", "dragon", "griffin", "unicorn",
            "bat", "moth", "beetle", "wasp", "toad", "newt", "lizard",
            "turtle", "crab", "eel", "shark", "whale", "squid", "octopus",
            "worm", "snail", "butterfly", "dragonfly", "scorpion", "scarab"
        ],
        actions: [
            "running", "hiding", "searching", "waiting", "watching", "listening",
            "stealing", "lying", "plotting", "fleeing", "fighting", "arguing",
            "crying", "laughing", "praying", "cursing", "drinking", "gambling",
            "trading", "begging", "working", "sleeping", "dreaming", "dying",
            "loving", "hating", "fearing", "hoping", "regretting", "remembering",
            "forgetting", "learning", "teaching", "building", "destroying",
            "creating", "healing", "hurting", "protecting", "betraying"
        ],
        locations: [
            "alley", "bridge", "tower", "cave", "forest", "river", "mountain",
            "tavern", "temple", "market", "graveyard", "castle", "dungeon",
            "library", "garden", "harbor", "road", "gate", "wall", "well",
            "mill", "farm", "mine", "smithy", "stable", "prison", "palace",
            "sewers", "rooftop", "cellar", "attic", "bedroom", "kitchen",
            "throne room", "treasury", "armory", "chapel", "courtyard"
        ],
        concepts: [
            "secret", "debt", "oath", "curse", "prophecy", "treasure", "revenge",
            "love", "hate", "fear", "hope", "regret", "betrayal", "loyalty",
            "honor", "shame", "freedom", "captivity", "justice", "mercy",
            "power", "weakness", "wisdom", "folly", "truth", "lies", "fate",
            "chance", "destiny", "legacy", "inheritance", "murder", "theft",
            "war", "peace", "plague", "famine", "wealth", "poverty", "madness"
        ],
        adjectives: [
            "ancient", "broken", "stolen", "hidden", "sacred", "cursed", "blessed",
            "forgotten", "legendary", "mysterious", "dangerous", "valuable",
            "poisoned", "enchanted", "haunted", "forbidden", "lost", "ruined",
            "burning", "frozen", "golden", "silver", "bloody", "dark", "bright",
            "twisted", "hollow", "empty", "full", "cracked", "whole", "perfect"
        ]
    },

    // Helper function to get random improv seeds
    getRandomImprovSeeds(count = 6) {
        const seeds = [];
        const categories = Object.keys(this.improvSeeds);
        const usedCategories = new Set();

        while (seeds.length < count) {
            // Try to get variety by picking different categories
            let category;
            if (usedCategories.size < categories.length && seeds.length < categories.length) {
                do {
                    category = categories[Math.floor(Math.random() * categories.length)];
                } while (usedCategories.has(category));
                usedCategories.add(category);
            } else {
                category = categories[Math.floor(Math.random() * categories.length)];
            }

            const items = this.improvSeeds[category];
            const item = items[Math.floor(Math.random() * items.length)];
            if (!seeds.includes(item)) {
                seeds.push(item);
            }
        }

        return seeds;
    },

    // Get random hair color
    getRandomHairColor(allowUnusual = false) {
        const useUnusual = allowUnusual && Math.random() < 0.15;
        const colors = useUnusual ? this.hairColors.unusual : this.hairColors.common;
        return colors[Math.floor(Math.random() * colors.length)];
    },

    // Get random eye color
    getRandomEyeColor(allowUnusual = false) {
        const useUnusual = allowUnusual && Math.random() < 0.15;
        const colors = useUnusual ? this.eyeColors.unusual : this.eyeColors.common;
        return colors[Math.floor(Math.random() * colors.length)];
    },

    // Get random clothing by wealth and gender
    getRandomClothing(wealthLevel, gender) {
        const genderKey = gender.toLowerCase() === 'female' ? 'female' : 'male';
        const wealthKey = wealthLevel.toLowerCase();
        const clothing = this.clothing[wealthKey]?.[genderKey] || this.clothing.commoner[genderKey];
        return clothing[Math.floor(Math.random() * clothing.length)];
    },

    // Get random distinctive feature by gender
    getRandomDistinctiveFeature(gender) {
        const genderKey = gender.toLowerCase() === 'female' ? 'female' : 'male';
        const features = this.distinctiveFeatures[genderKey];
        return features[Math.floor(Math.random() * features.length)];
    }
};

// Wealth levels for reference
const NPCWealthLevels = [
    { id: "squalid", name: "Squalid", description: "Homeless, destitute, or living in abject poverty" },
    { id: "commoner", name: "Commoner", description: "Working class with modest means" },
    { id: "modest", name: "Modest", description: "Comfortable craftsperson or skilled worker" },
    { id: "wealthy", name: "Wealthy", description: "Successful merchant or minor landholder" },
    { id: "noble", name: "Noble", description: "Aristocracy or extremely wealthy elite" }
];

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NPCTraitsData, NPCWealthLevels };
}
