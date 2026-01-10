/**
 * Names and Flavor Data for Location Generator
 * Name generation components, NPC details, and sensory descriptions
 */

const LocationNames = {
    /**
     * Settlement name components
     */
    settlementNames: {
        prefixes: ['North', 'South', 'East', 'West', 'Old', 'New', 'High', 'Low', 'Great', 'Lesser', 'Upper', 'Lower', 'Far', 'Near'],
        roots: ['Haven', 'Ford', 'Bridge', 'Gate', 'Watch', 'Guard', 'Hold', 'Keep', 'Fall', 'Rise', 'Dale', 'Glen', 'Hollow', 'Creek', 'Brook', 'River', 'Lake', 'Marsh', 'Fen', 'Moor', 'Heath', 'Wood', 'Forest', 'Grove', 'Field', 'Meadow', 'Hill', 'Mount', 'Stone', 'Rock', 'Cliff', 'Valley', 'Crest', 'Peak', 'Shore', 'Bay', 'Cove', 'Port', 'Harbor'],
        suffixes: ['ton', 'ville', 'burg', 'heim', 'stead', 'worth', 'field', 'dale', 'mere', 'shire', 'land', 'wood', 'brook', 'ford', 'bridge', 'gate', 'hold', 'keep', 'watch', 'guard', 'point', 'haven', 'rest', 'fall', 'rise'],
        descriptors: ['Broken', 'Shattered', 'Golden', 'Silver', 'Iron', 'Copper', 'Bronze', 'Crimson', 'Azure', 'Verdant', 'Amber', 'Obsidian', 'Crystal', 'Shadow', 'Light', 'Dawn', 'Dusk', 'Storm', 'Thunder', 'Frost', 'Flame', 'Mist', 'Cloud', 'Star', 'Moon', 'Sun', 'Dragon', 'Wolf', 'Raven', 'Eagle', 'Lion', 'Bear', 'Stag', 'Serpent', 'Phoenix']
    },

    /**
     * Shop/Building name components
     */
    shopNames: {
        articles: ['The', 'Ye Olde', 'The Old', 'The New', 'The Grand', 'The Humble'],
        adjectives: ['Rusty', 'Golden', 'Silver', 'Iron', 'Copper', 'Brass', 'Broken', 'Mended', 'Lucky', 'Unlucky', 'Wandering', 'Weary', 'Merry', 'Grumpy', 'Sleepy', 'Dancing', 'Singing', 'Silent', 'Roaring', 'Whispering', 'Laughing', 'Crying', 'Prancing', 'Limping', 'Flying', 'Crawling', 'Drunken', 'Sober', 'Hungry', 'Fat', 'Thin', 'Tall', 'Short', 'Old', 'Young', 'Wise', 'Foolish', 'Brave', 'Cowardly', 'Honest', 'Crooked', 'Hidden', 'Famous', 'Forgotten'],
        nouns: ['Anvil', 'Hammer', 'Sword', 'Shield', 'Helm', 'Boot', 'Glove', 'Ring', 'Crown', 'Throne', 'Dragon', 'Griffin', 'Phoenix', 'Unicorn', 'Manticore', 'Basilisk', 'Wyvern', 'Goblin', 'Troll', 'Giant', 'Dwarf', 'Elf', 'Orc', 'Wizard', 'Knight', 'King', 'Queen', 'Prince', 'Princess', 'Thief', 'Assassin', 'Merchant', 'Sailor', 'Soldier', 'Beggar', 'Fool', 'Sage', 'Monk', 'Priest', 'Witch', 'Hag', 'Wolf', 'Bear', 'Stag', 'Raven', 'Eagle', 'Serpent', 'Spider', 'Rat', 'Cat', 'Dog', 'Horse', 'Pig', 'Goat', 'Sheep', 'Ox', 'Barrel', 'Tankard', 'Bottle', 'Cup', 'Plate', 'Spoon', 'Fork', 'Knife', 'Cauldron', 'Lantern', 'Candle', 'Key', 'Lock', 'Door', 'Window', 'Chimney', 'Hearth', 'Bed', 'Chair', 'Table', 'Book', 'Scroll', 'Quill', 'Coin', 'Gem', 'Pearl', 'Diamond', 'Ruby', 'Emerald', 'Sapphire', 'Moon', 'Sun', 'Star', 'Cloud', 'Storm', 'Thunder', 'Lightning', 'Rain', 'Snow', 'Wind', 'Fire', 'Water', 'Earth', 'Stone', 'Tree', 'Flower', 'Rose', 'Thorn', 'Leaf', 'Root', 'Branch'],
        possessives: ['\'s Rest', '\'s Respite', '\'s Retreat', '\'s Roost', '\'s Den', '\'s Lair', '\'s Haunt', '\'s Haven', '\'s Hideaway', '\'s Hollow', '\'s Corner', '\'s End', '\'s Edge', '\'s Keep', '\'s Hearth', '\'s Table', '\'s Cup', '\'s Tankard', '\'s Folly', '\'s Fortune', '\'s Gamble', '\'s Luck', '\'s Curse', '\'s Blessing', '\'s Promise', '\'s Oath', '\'s Secret', '\'s Whisper', '\'s Shadow', '\'s Light']
    },

    /**
     * Landmark name components
     */
    landmarkNames: {
        descriptors: ['Ancient', 'Forgotten', 'Sacred', 'Cursed', 'Blessed', 'Haunted', 'Sleeping', 'Waking', 'Weeping', 'Laughing', 'Singing', 'Silent', 'Whispering', 'Screaming', 'Dying', 'Living', 'Dead', 'Eternal', 'Fleeting', 'Hidden', 'Revealed', 'Lost', 'Found', 'Broken', 'Mended', 'Shattered', 'Whole', 'First', 'Last', 'Only', 'Many', 'Lone', 'Twin', 'Triple'],
        natural: ['Oak', 'Elm', 'Ash', 'Willow', 'Pine', 'Birch', 'Maple', 'Cedar', 'Yew', 'Rowan', 'Stone', 'Rock', 'Boulder', 'Cliff', 'Crag', 'Peak', 'Ridge', 'Valley', 'Gorge', 'Chasm', 'Pool', 'Spring', 'Well', 'Falls', 'Creek', 'Brook', 'Stream', 'River', 'Lake', 'Pond', 'Marsh', 'Bog', 'Fen', 'Moor', 'Glade', 'Grove', 'Copse', 'Thicket', 'Dell', 'Hollow', 'Cave', 'Cavern', 'Grotto', 'Tunnel'],
        legendary: ['Dragon', 'Giant', 'Titan', 'God', 'Goddess', 'Devil', 'Demon', 'Angel', 'Spirit', 'Ghost', 'Phantom', 'Wraith', 'Specter', 'King', 'Queen', 'Emperor', 'Empress', 'Hero', 'Champion', 'Sage', 'Wizard', 'Witch', 'Prophet', 'Seer', 'Oracle', 'Maiden', 'Crone', 'Mother', 'Father', 'Child', 'Elder', 'Ancestor'],
        endings: ['\'s Tooth', '\'s Claw', '\'s Eye', '\'s Heart', '\'s Throne', '\'s Crown', '\'s Grave', '\'s Rest', '\'s Watch', '\'s Gate', '\'s Bridge', '\'s Path', '\'s Way', '\'s Crossing', '\'s Reach', '\'s Grasp', '\'s Touch', '\'s Kiss', '\'s Tears', '\'s Blood', '\'s Breath', '\'s Voice', '\'s Song', '\'s Lament', '\'s Fury', '\'s Wrath', '\'s Mercy', '\'s Gift', '\'s Curse', '\'s Blessing']
    },

    /**
     * NPC first names by cultural style
     */
    npcFirstNames: {
        common: ['Alder', 'Bran', 'Cole', 'Darren', 'Evan', 'Finn', 'Gale', 'Hale', 'Ivan', 'Jasper', 'Keegan', 'Liam', 'Marcus', 'Nolan', 'Owen', 'Pierce', 'Quinn', 'Reed', 'Seth', 'Tanner', 'Alara', 'Brynn', 'Clara', 'Delia', 'Elena', 'Fiona', 'Greta', 'Helena', 'Iris', 'Jade', 'Kira', 'Luna', 'Mira', 'Nora', 'Olive', 'Petra', 'Rose', 'Sage', 'Thea', 'Una', 'Vera', 'Wren', 'Yara', 'Zara'],
        exotic: ['Azrael', 'Balasar', 'Corvus', 'Draven', 'Ezekiel', 'Fenris', 'Galvanax', 'Hex', 'Ignatius', 'Jareth', 'Kael', 'Lazarus', 'Mortimer', 'Nyx', 'Oberon', 'Phantom', 'Quetzal', 'Ravenna', 'Seraphina', 'Thorne', 'Umbra', 'Vesper', 'Wraith', 'Xander', 'Ysolde', 'Zephyr'],
        rough: ['Axe', 'Brick', 'Crusher', 'Dag', 'Edge', 'Fang', 'Grim', 'Hack', 'Iron', 'Jagged', 'Knuckle', 'Lunk', 'Mace', 'Nail', 'Orc-Bane', 'Pit', 'Quarry', 'Razor', 'Scar', 'Tusk', 'Ugly', 'Vex', 'Wart', 'Xit', 'Yak', 'Zit']
    },

    /**
     * NPC surnames/epithets
     */
    npcSurnames: {
        occupational: ['Smith', 'Baker', 'Tanner', 'Cooper', 'Fletcher', 'Carpenter', 'Mason', 'Potter', 'Weaver', 'Miller', 'Butcher', 'Brewer', 'Fisher', 'Hunter', 'Farmer', 'Shepherd', 'Sailor', 'Soldier', 'Scholar', 'Healer'],
        descriptive: ['the Tall', 'the Short', 'the Wide', 'the Thin', 'the Quick', 'the Slow', 'the Wise', 'the Foolish', 'the Brave', 'the Cautious', 'the Honest', 'the Crooked', 'the Fair', 'the Dark', 'the Old', 'the Young', 'the Scarred', 'the Beautiful', 'the Strong', 'the Gentle'],
        origin: ['of the Hills', 'of the Valley', 'of the Coast', 'of the Forest', 'of the Mountains', 'from Beyond', 'from the North', 'from the South', 'the Wanderer', 'the Stranger', 'the Foreigner', 'the Local', 'the Native', 'the Exile', 'the Returned']
    },

    /**
     * NPC personality traits
     */
    npcTraits: [
        'speaks in whispers', 'laughs at everything', 'never smiles', 'constantly fidgets', 'stands too close',
        'avoids eye contact', 'stares intensely', 'speaks too loudly', 'mumbles constantly', 'gestures wildly',
        'picks at their nails', 'strokes their beard/hair', 'cracks their knuckles', 'taps their foot', 'hums tunelessly',
        'quotes ancient texts', 'tells obvious lies', 'speaks in the third person', 'refers to past glories', 'complains constantly',
        'overly optimistic', 'deeply pessimistic', 'paranoid about everything', 'trusts too easily', 'suspicious of strangers',
        'speaks in riddles', 'extremely literal', 'uses big words incorrectly', 'has a catchphrase', 'finishes others\' sentences',
        'nostalgic for the past', 'obsessed with the future', 'lives in the moment', 'counts everything', 'collects odd things',
        'superstitious', 'strictly rational', 'deeply religious', 'atheistic and proud', 'spiritually confused'
    ],

    /**
     * NPC secrets (adapted to fit shop/location context)
     */
    npcSecrets: [
        'is hiding from someone powerful', 'has a price on their head', 'is not who they claim to be',
        'killed someone in their past', 'owes money to dangerous people', 'is spying for a rival',
        'has a forbidden love', 'is slowly dying from something', 'made a deal with a fiend',
        'is a retired adventurer', 'knows the location of a treasure', 'witnessed a crime and said nothing',
        'is planning to leave soon', 'is actually quite wealthy', 'has a child no one knows about',
        'is addicted to something', 'is a member of a secret society', 'has magical abilities they hide',
        'was once nobility', 'escaped from prison', 'knows a dangerous secret about the local lord',
        'is being blackmailed', 'has an item worth more than the entire shop', 'is cursed'
    ],

    /**
     * Dynamic Entry Descriptions (how the party first sees the location)
     */
    dynamicEntries: {
        settlement: [
            'The settlement emerges from the morning mist like a promise of civilization.',
            'Smoke rises from chimneys, the first sign of habitation in days.',
            'The sounds of life grow louder as you approach—voices, animals, industry.',
            'A weathered sign marks the boundary, the name barely legible.',
            'Guards at the gate eye you with suspicion as you approach.',
            'The smell hits you first—cooking food, wood smoke, and too many people.',
            'From the hilltop, the entire settlement spreads before you.',
            'The road becomes cobblestone, a sure sign you\'ve arrived.',
            'Church bells toll in the distance, marking the hour.',
            'A child spots you first and runs to tell others of your arrival.'
        ],
        district: [
            'The character of the streets changes as you enter the district.',
            'The buildings here tell a different story than those you left behind.',
            'You notice the change in who walks these streets.',
            'The sounds and smells shift as you cross the invisible boundary.',
            'Local residents eye you—some curious, some hostile, some indifferent.',
            'A subtle change in architecture marks the district\'s edge.',
            'The watch here wears different colors, or is conspicuously absent.',
            'Street vendors call out, their wares reflecting the district\'s nature.',
            'The buildings crowd closer here, or spread further apart.',
            'Graffiti on the walls hints at the district\'s true character.'
        ],
        shop: [
            'A hanging sign creaks in the wind, marking your destination.',
            'The door is open, warm light spilling onto the street.',
            'The distinctive sound of the trade being practiced reaches you.',
            'A proprietor stands in the doorway, appraising passersby.',
            'The window display catches your eye from across the street.',
            'A queue has formed—this place must be worth the wait.',
            'The building looks unremarkable, but reputation led you here.',
            'Smoke rises from the chimney, the forge/oven/still still burning.',
            'A cat sits in the window, watching your approach with knowing eyes.',
            'The smell of the trade announces the shop before you see the sign.'
        ],
        wilderness: [
            'The landmark rises before you, exactly where the map promised.',
            'You stumble upon it without warning—it wasn\'t supposed to be here.',
            'Local legends spoke of this place, but seeing it is different.',
            'The forest/terrain parts to reveal your destination.',
            'A feeling of power/dread/wonder washes over you as you approach.',
            'Birds fall silent, or burst into song, as you near the place.',
            'The trail ends here, at the edge of something remarkable.',
            'Old offerings lie scattered about—others have sought this place.',
            'The air changes as you approach—warmer, colder, electric.',
            'Time seems to slow as the landmark comes into view.'
        ]
    },

    /**
     * Rumor templates (True and False)
     */
    rumorTemplates: {
        true: [
            '{target} is hiding something in the {location}',
            'There\'s a secret passage beneath the {building}',
            '{npc} isn\'t who they claim to be',
            'Something happened here {time} ago that no one talks about',
            'The {authority} knows about the {problem} but does nothing',
            '{npc} saw something terrible and has been changed',
            'Strangers have been asking about {topic} lately',
            'The {event} wasn\'t an accident',
            'Someone important visits the {location} in secret'
        ],
        false: [
            '{target} is actually a {creature} in disguise',
            'There\'s treasure buried beneath the {building}',
            '{npc} murdered their {relative} for the inheritance',
            'The {location} is haunted by {entity}',
            'The {authority} is planning to {action}',
            '{npc} has magical powers they\'re hiding',
            'A dragon/demon/god visited here {time} ago',
            'The {item} in the {location} is cursed/blessed',
            '{npc} and {npc2} are secret lovers/enemies/related'
        ]
    }
};

// Name generation helper functions
LocationNames.generateSettlementName = function() {
    const styles = [
        // Prefix + Root + Suffix: Northhaventon
        () => {
            const prefix = this.randomElement(this.settlementNames.prefixes);
            const root = this.randomElement(this.settlementNames.roots);
            const suffix = this.randomElement(this.settlementNames.suffixes);
            return prefix + root.toLowerCase() + suffix;
        },
        // Descriptor + Root: Goldenhaven
        () => {
            const desc = this.randomElement(this.settlementNames.descriptors);
            const root = this.randomElement(this.settlementNames.roots);
            return desc + root.toLowerCase();
        },
        // Root + suffix: Riverdale
        () => {
            const root = this.randomElement(this.settlementNames.roots);
            const suffix = this.randomElement(this.settlementNames.suffixes);
            return root + suffix;
        },
        // Prefix + Root: Northbridge
        () => {
            const prefix = this.randomElement(this.settlementNames.prefixes);
            const root = this.randomElement(this.settlementNames.roots);
            return prefix + root.toLowerCase();
        }
    ];
    return this.randomElement(styles)();
};

LocationNames.generateShopName = function(shopType) {
    const styles = [
        // The Adjective Noun: The Rusty Anvil
        () => {
            const article = this.randomElement(this.shopNames.articles);
            const adj = this.randomElement(this.shopNames.adjectives);
            const noun = this.randomElement(this.shopNames.nouns);
            return `${article} ${adj} ${noun}`;
        },
        // The Noun's Possessive: The Dragon's Den
        () => {
            const article = this.randomElement(this.shopNames.articles);
            const noun = this.randomElement(this.shopNames.nouns);
            const poss = this.randomElement(this.shopNames.possessives);
            return `${article} ${noun}${poss}`;
        },
        // Adjective Noun: Golden Hammer
        () => {
            const adj = this.randomElement(this.shopNames.adjectives);
            const noun = this.randomElement(this.shopNames.nouns);
            return `${adj} ${noun}`;
        },
        // Noun and Noun: Sword and Shield
        () => {
            const noun1 = this.randomElement(this.shopNames.nouns);
            const noun2 = this.randomElement(this.shopNames.nouns);
            return `${noun1} and ${noun2}`;
        }
    ];
    return this.randomElement(styles)();
};

LocationNames.generateLandmarkName = function(type) {
    const styles = [
        // The Descriptor Feature: The Ancient Oak
        () => {
            const desc = this.randomElement(this.landmarkNames.descriptors);
            const feature = this.randomElement(this.landmarkNames.natural);
            return `The ${desc} ${feature}`;
        },
        // Legendary Entity's Ending: Dragon's Tooth
        () => {
            const entity = this.randomElement(this.landmarkNames.legendary);
            const ending = this.randomElement(this.landmarkNames.endings);
            return `${entity}${ending}`;
        },
        // The Feature of Descriptor: The Pool of Sorrows
        () => {
            const feature = this.randomElement(this.landmarkNames.natural);
            const desc = this.randomElement(this.landmarkNames.descriptors).toLowerCase();
            return `The ${feature} of ${desc.charAt(0).toUpperCase() + desc.slice(1)}`;
        }
    ];
    return this.randomElement(styles)();
};

LocationNames.generateNPCName = function(style = 'common') {
    const firstName = this.randomElement(this.npcFirstNames[style] || this.npcFirstNames.common);
    const surnameStyle = this.randomElement(['occupational', 'descriptive', 'origin']);
    const surname = this.randomElement(this.npcSurnames[surnameStyle]);

    if (surnameStyle === 'descriptive' || surnameStyle === 'origin') {
        return `${firstName} ${surname}`;
    }
    return `${firstName} ${surname}`;
};

LocationNames.getRandomTrait = function() {
    return this.randomElement(this.npcTraits);
};

LocationNames.getRandomSecret = function() {
    return this.randomElement(this.npcSecrets);
};

LocationNames.getRandomEntry = function(type) {
    return this.randomElement(this.dynamicEntries[type] || this.dynamicEntries.settlement);
};

LocationNames.randomElement = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LocationNames;
}
