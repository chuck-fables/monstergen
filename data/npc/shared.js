/**
 * Shared NPC Data
 * Hair colors, eye colors, clothing, professions, and improv keywords
 */

const NPCSharedData = {
    hairColors: [
        "Black", "Dark brown", "Brown", "Light brown", "Auburn", "Chestnut", "Copper", "Ginger",
        "Red", "Strawberry blonde", "Blonde", "Golden blonde", "Platinum blonde", "White", "Silver",
        "Gray", "Salt and pepper", "Jet black", "Raven", "Midnight blue", "Deep purple", "Forest green",
        "Russet", "Mahogany", "Honey", "Sandy", "Ash blonde", "Dirty blonde", "Mousy brown", "Bald",
        "Shaved", "Thinning gray", "Snow white", "Steel gray", "Faded red", "Dusty brown", "Sun-bleached"
    ],

    eyeColors: [
        "Brown", "Dark brown", "Light brown", "Hazel", "Amber", "Green", "Bright green", "Pale green",
        "Blue", "Light blue", "Dark blue", "Steel blue", "Gray", "Silver", "Violet", "Golden",
        "Black", "Ice blue", "Sea green", "Olive", "Copper", "Bronze", "Tawny", "Honey",
        "Emerald", "Sapphire", "Stormy gray", "Pale gray", "Deep brown", "Warm brown", "Cool gray",
        "Heterochromatic", "Milky (blind)", "Red-tinged", "Yellow-flecked", "Gold-flecked"
    ],

    clothing: [
        "Simple peasant clothes", "Worn traveling cloak", "Fine merchant attire", "Leather armor",
        "Rough-spun tunic", "Patched work clothes", "Noble finery", "Religious vestments",
        "Practical adventurer gear", "Blacksmith's apron", "Sailor's outfit", "Guard uniform",
        "Tattered rags", "Colorful performer's costume", "Scholar's robes", "Hunter's leathers",
        "Farmer's overalls", "Cook's stained apron", "Military uniform", "Servant's livery",
        "Foreign exotic garb", "Well-worn boots and cloak", "Mismatched hand-me-downs",
        "Dusty road-worn clothes", "Clean but plain clothes", "Faded guild uniform",
        "Heavy winter furs", "Light summer linens", "Ornate ceremonial dress", "Practical work boots",
        "Hooded traveling cloak", "Reinforced leather vest", "Embroidered waistcoat", "Muddy work clothes",
        "Threadbare but clean clothes", "Flashy but cheap jewelry", "Understated quality garments"
    ],

    professions: [
        "Blacksmith", "Farmer", "Merchant", "Guard", "Innkeeper", "Barmaid", "Cook", "Baker",
        "Butcher", "Fisherman", "Hunter", "Trapper", "Woodcutter", "Carpenter", "Mason",
        "Miner", "Jeweler", "Tailor", "Cobbler", "Tanner", "Weaver", "Potter", "Candlemaker",
        "Herbalist", "Healer", "Midwife", "Scribe", "Scholar", "Librarian", "Priest", "Monk",
        "Sailor", "Dockworker", "Caravan driver", "Stablehand", "Messenger", "Courier",
        "Beggar", "Pickpocket", "Thief", "Smuggler", "Fence", "Assassin", "Bounty hunter",
        "Mercenary", "Soldier", "Veteran", "Retired adventurer", "Street performer", "Bard",
        "Actor", "Dancer", "Acrobat", "Fortune teller", "Gambler", "Barber",
        "Gravedigger", "Executioner", "Jailer", "Tax collector", "Moneylender", "Banker",
        "Lawyer", "Judge", "Noble", "Servant", "Butler", "Maid", "Governess", "Tutor",
        "Shepherd", "Beekeeper", "Brewer", "Vintner", "Distiller", "Cheesemaker", "Miller",
        "Ferryman", "Bridge toll collector", "Lamplighter", "Ratcatcher", "Chimney sweep",
        "Street sweeper", "Night watchman", "Town crier", "Apothecary", "Alchemist",
        "Sage", "Wizard's apprentice", "Hedge witch", "Hermit", "Pilgrim", "Wanderer",
        "Refugee", "Exile", "Spy", "Informant", "Pawnbroker", "Antiques dealer",
        "Map maker", "Navigator", "Ship captain", "First mate", "Pirate", "Privateer"
    ],

    improvKeywords: {
        objects: [
            "Knife", "Key", "Map", "Ring", "Letter", "Coin", "Book", "Scroll", "Potion", "Gem",
            "Locket", "Mirror", "Candle", "Rope", "Chain", "Lock", "Box", "Jar", "Bottle", "Vial",
            "Sword", "Shield", "Helmet", "Boot", "Glove", "Cloak", "Hood", "Mask", "Crown", "Scepter",
            "Skull", "Bone", "Tooth", "Feather", "Scale", "Claw", "Fang", "Horn", "Antler", "Pelt",
            "Flower", "Seed", "Root", "Leaf", "Branch", "Stone", "Crystal", "Pearl", "Shell", "Coral",
            "Doll", "Puppet", "Toy", "Game", "Dice", "Cards", "Instrument", "Flute", "Drum", "Bell",
            "Hammer", "Anvil", "Needle", "Thread", "Cloth", "Leather", "Paper", "Ink", "Quill", "Seal",
            "Lantern", "Torch", "Oil", "Wax", "Salt", "Spice", "Herb", "Medicine", "Poison", "Antidote",
            "Gold", "Silver", "Copper", "Iron", "Steel", "Bronze", "Brass", "Tin", "Lead", "Platinum",
            "Bread", "Cheese", "Wine", "Ale", "Meat", "Fish", "Fruit", "Grain", "Honey", "Milk",
            "Wagon", "Cart", "Wheel", "Saddle", "Bridle", "Whip", "Net", "Trap", "Cage", "Collar",
            "Painting", "Statue", "Tapestry", "Rug", "Chest", "Coffer", "Urn", "Chalice", "Plate", "Bowl",
            "Cane", "Staff", "Wand", "Orb", "Amulet", "Talisman", "Charm", "Token", "Badge", "Signet",
            "Journal", "Diary", "Recipe", "Formula", "Blueprint", "Contract", "Deed", "Will", "Warrant", "Bounty",
            "Relic", "Artifact", "Heirloom", "Keepsake", "Trophy", "Medal", "Ribbon", "Banner", "Flag", "Standard"
        ],
        animals: [
            "Horse", "Dog", "Cat", "Rat", "Raven", "Owl", "Hawk", "Eagle", "Wolf", "Bear",
            "Deer", "Boar", "Fox", "Rabbit", "Snake", "Spider", "Bat", "Crow", "Pig", "Goat",
            "Sheep", "Cow", "Bull", "Ox", "Donkey", "Mule", "Chicken", "Rooster", "Duck", "Goose",
            "Fish", "Eel", "Crab", "Lobster", "Frog", "Toad", "Lizard", "Turtle", "Beetle", "Moth",
            "Bee", "Wasp", "Ant", "Fly", "Worm", "Leech", "Snail", "Slug", "Scorpion", "Centipede",
            "Dragon", "Griffin", "Unicorn", "Phoenix", "Basilisk", "Hydra", "Wyvern", "Chimera", "Manticore", "Sphinx",
            "Goblin", "Orc", "Troll", "Ogre", "Giant", "Demon", "Devil", "Imp", "Elemental", "Golem",
            "Ghost", "Specter", "Wraith", "Skeleton", "Zombie"
        ],
        actions: [
            "Hunt", "Chase", "Flee", "Hide", "Seek", "Find", "Lose", "Steal", "Return", "Give",
            "Take", "Buy", "Sell", "Trade", "Barter", "Gamble", "Bet", "Win", "Cheat",
            "Fight", "Duel", "Ambush", "Raid", "Siege", "Defend", "Attack", "Retreat", "Surrender", "Betray",
            "Kill", "Murder", "Execute", "Sacrifice", "Resurrect", "Heal", "Cure", "Poison", "Curse", "Bless",
            "Marry", "Divorce", "Elope", "Seduce", "Reject", "Abandon", "Adopt", "Inherit", "Disinherit", "Exile",
            "Imprison", "Escape", "Rescue", "Kidnap", "Ransom", "Blackmail", "Threaten", "Bribe", "Extort", "Demand",
            "Promise", "Swear", "Break", "Fulfill", "Reveal", "Conceal", "Discover", "Forget", "Remember", "Confess",
            "Accuse", "Judge", "Condemn", "Pardon", "Forgive", "Avenge", "Punish", "Reward", "Honor",
            "Disgrace", "Humiliate", "Celebrate", "Mourn", "Bury", "Burn", "Drown", "Hang", "Behead", "Torture",
            "Build", "Destroy", "Create", "Forge", "Craft", "Brew", "Cook", "Plant", "Harvest", "Gather"
        ],
        locations: [
            "Tavern", "Inn", "Temple", "Church", "Shrine", "Altar", "Crypt", "Tomb", "Grave", "Cemetery",
            "Castle", "Tower", "Dungeon", "Prison", "Fortress", "Wall", "Gate", "Bridge", "Road", "Path",
            "Forest", "Grove", "Clearing", "Swamp", "Marsh", "Bog", "Lake", "River", "Stream", "Waterfall",
            "Cave", "Cavern", "Mine", "Quarry", "Mountain", "Hill", "Valley", "Plain", "Desert", "Tundra",
            "Farm", "Mill", "Barn", "Stable", "Well", "Fountain", "Market", "Shop", "Warehouse", "Dock",
            "Ship", "Boat", "Harbor", "Lighthouse", "Island", "Coast", "Beach", "Cliff", "Reef", "Wreck",
            "Ruin", "Monument", "Statue", "Obelisk", "Circle", "Maze", "Garden", "Orchard", "Vineyard", "Field",
            "Crossroads", "Gallows", "Arena", "Colosseum", "Theater"
        ],
        concepts: [
            "Secret", "Mystery", "Riddle", "Puzzle", "Clue", "Evidence", "Proof", "Alibi", "Motive", "Suspect",
            "Debt", "Loan", "Interest", "Payment", "Fortune", "Poverty", "Wealth", "Greed", "Charity", "Gift",
            "Love", "Hate", "Fear", "Hope", "Despair", "Joy", "Sorrow", "Anger", "Peace", "War",
            "Honor", "Shame", "Pride", "Humility", "Courage", "Cowardice", "Loyalty", "Treachery", "Trust", "Doubt",
            "Truth", "Lie", "Rumor", "Gossip", "Legend", "Myth", "Prophecy", "Omen", "Sign", "Portent",
            "Dream", "Nightmare", "Vision", "Memory", "Amnesia", "Madness", "Sanity", "Obsession", "Addiction", "Recovery",
            "Birth", "Death", "Marriage", "Divorce", "Inheritance", "Legacy", "Bloodline", "Bastard", "Orphan", "Heir",
            "Crime", "Justice", "Law", "Order", "Chaos", "Freedom", "Slavery", "Rebellion", "Revolution", "Tyranny",
            "Magic", "Curse", "Blessing", "Miracle", "Plague", "Famine", "Flood", "Fire", "Storm", "Earthquake",
            "Dawn", "Dusk", "Midnight", "Eclipse", "Solstice", "Equinox", "Festival", "Holiday", "Anniversary", "Deadline"
        ]
    },

    // Helper function to get all improv keywords as a flat array
    getAllImprovKeywords() {
        return [
            ...this.improvKeywords.objects,
            ...this.improvKeywords.animals,
            ...this.improvKeywords.actions,
            ...this.improvKeywords.locations,
            ...this.improvKeywords.concepts
        ];
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NPCSharedData;
}
