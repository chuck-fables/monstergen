/**
 * Treasure Tables
 * Gold scaling, gems, art objects, and trade goods
 */

const TreasureTables = {
    // Gold scaling by party level (base amount per party member)
    goldByLevel: {
        1: { min: 10, max: 50 },
        2: { min: 20, max: 100 },
        3: { min: 40, max: 200 },
        4: { min: 75, max: 300 },
        5: { min: 150, max: 500 },
        6: { min: 200, max: 750 },
        7: { min: 300, max: 1000 },
        8: { min: 400, max: 1500 },
        9: { min: 500, max: 2000 },
        10: { min: 750, max: 3000 },
        11: { min: 1000, max: 4000 },
        12: { min: 1500, max: 5000 },
        13: { min: 2000, max: 7500 },
        14: { min: 3000, max: 10000 },
        15: { min: 4000, max: 15000 },
        16: { min: 5000, max: 20000 },
        17: { min: 7500, max: 30000 },
        18: { min: 10000, max: 40000 },
        19: { min: 15000, max: 50000 },
        20: { min: 20000, max: 75000 }
    },

    // Hoard type multipliers for gold
    hoardGoldMultipliers: {
        mundane: 0.1,      // Very little gold
        lowMagic: 0.3,     // Scraps
        standard: 0.5,     // Normal adventuring
        monster: 0.7,      // Accumulated treasure
        boss: 1.0,         // Full hoard
        legendary: 2.0     // Massive wealth
    },

    // Gems by value tier
    gems: {
        10: [
            { name: "Azurite", desc: "Opaque mottled deep blue" },
            { name: "Banded Agate", desc: "Translucent striped brown, blue, white, or red" },
            { name: "Blue Quartz", desc: "Transparent pale blue" },
            { name: "Eye Agate", desc: "Translucent circles of gray, white, brown, blue, or green" },
            { name: "Hematite", desc: "Opaque gray-black" },
            { name: "Lapis Lazuli", desc: "Opaque light and dark blue with yellow flecks" },
            { name: "Malachite", desc: "Opaque striated light and dark green" },
            { name: "Moss Agate", desc: "Translucent pink or yellow-white with mossy gray or green markings" },
            { name: "Obsidian", desc: "Opaque black" },
            { name: "Rhodochrosite", desc: "Opaque light pink" },
            { name: "Tiger Eye", desc: "Translucent brown with golden center" },
            { name: "Turquoise", desc: "Opaque light blue-green" }
        ],
        50: [
            { name: "Bloodstone", desc: "Opaque dark gray with red flecks" },
            { name: "Carnelian", desc: "Opaque orange to red-brown" },
            { name: "Chalcedony", desc: "Opaque white" },
            { name: "Chrysoprase", desc: "Translucent green" },
            { name: "Citrine", desc: "Transparent pale yellow-brown" },
            { name: "Jasper", desc: "Opaque blue, black, or brown" },
            { name: "Moonstone", desc: "Translucent white with pale blue glow" },
            { name: "Onyx", desc: "Opaque bands of black and white" },
            { name: "Quartz", desc: "Transparent white, smoky gray, or yellow" },
            { name: "Sardonyx", desc: "Opaque bands of red and white" },
            { name: "Star Rose Quartz", desc: "Translucent rosy stone with white star-shaped center" },
            { name: "Zircon", desc: "Transparent pale blue-green" }
        ],
        100: [
            { name: "Amber", desc: "Transparent watery gold to rich gold" },
            { name: "Amethyst", desc: "Transparent deep purple" },
            { name: "Chrysoberyl", desc: "Transparent yellow-green to pale green" },
            { name: "Coral", desc: "Opaque crimson" },
            { name: "Garnet", desc: "Transparent red, brown-green, or violet" },
            { name: "Jade", desc: "Translucent light green, deep green, or white" },
            { name: "Jet", desc: "Opaque deep black" },
            { name: "Pearl", desc: "Opaque lustrous white, yellow, or pink" },
            { name: "Spinel", desc: "Transparent red, red-brown, or deep green" },
            { name: "Tourmaline", desc: "Transparent pale green, blue, brown, or red" }
        ],
        500: [
            { name: "Alexandrite", desc: "Transparent dark green" },
            { name: "Aquamarine", desc: "Transparent pale blue-green" },
            { name: "Black Pearl", desc: "Opaque pure black" },
            { name: "Blue Spinel", desc: "Transparent deep blue" },
            { name: "Peridot", desc: "Transparent rich olive green" },
            { name: "Topaz", desc: "Transparent golden yellow" }
        ],
        1000: [
            { name: "Black Opal", desc: "Translucent dark green with black mottling and golden flecks" },
            { name: "Blue Sapphire", desc: "Transparent blue-white to medium blue" },
            { name: "Emerald", desc: "Transparent deep bright green" },
            { name: "Fire Opal", desc: "Translucent fiery red" },
            { name: "Opal", desc: "Translucent pale blue with green and golden mottling" },
            { name: "Star Ruby", desc: "Translucent ruby with white star-shaped center" },
            { name: "Star Sapphire", desc: "Translucent blue sapphire with white star-shaped center" },
            { name: "Yellow Sapphire", desc: "Transparent fiery yellow or yellow-green" }
        ],
        5000: [
            { name: "Black Sapphire", desc: "Translucent lustrous black with glowing highlights" },
            { name: "Diamond", desc: "Transparent blue-white, canary, pink, brown, or blue" },
            { name: "Jacinth", desc: "Transparent fiery orange" },
            { name: "Ruby", desc: "Transparent clear red to deep crimson" }
        ]
    },

    // Art objects by value tier
    artObjects: {
        25: [
            "Silver ewer",
            "Carved bone statuette",
            "Small gold bracelet",
            "Cloth-of-gold vestments",
            "Black velvet mask stitched with silver thread",
            "Copper chalice with silver filigree",
            "Pair of engraved bone dice",
            "Small mirror set in a painted wooden frame",
            "Embroidered silk handkerchief",
            "Gold locket with a painted portrait inside"
        ],
        250: [
            "Gold ring set with bloodstones",
            "Carved ivory statuette",
            "Large gold bracelet",
            "Silver necklace with a gemstone pendant",
            "Bronze crown",
            "Silk robe with gold embroidery",
            "Large well-made tapestry",
            "Brass mug with jade inlay",
            "Box of turquoise animal figurines",
            "Gold bird cage with electrum filigree"
        ],
        750: [
            "Silver chalice set with moonstones",
            "Silver-plated steel longsword with jet set in hilt",
            "Carved harp of exotic wood with ivory inlay and zircon gems",
            "Small gold idol",
            "Gold dragon comb set with red garnets as eyes",
            "Bottle stopper cork embossed with gold leaf and set with amethysts",
            "Ceremonial electrum dagger with a black pearl in the pommel",
            "Silver and gold brooch",
            "Obsidian statuette with gold fittings and inlay",
            "Painted gold war mask"
        ],
        2500: [
            "Fine gold chain set with a fire opal",
            "Old masterpiece painting",
            "Embroidered silk and velvet mantle set with numerous moonstones",
            "Platinum bracelet set with a sapphire",
            "Embroidered glove set with jewel chips",
            "Jeweled anklet",
            "Gold music box",
            "Gold circlet set with four aquamarines",
            "Eye patch with a mock eye set in blue sapphire and moonstone",
            "A necklace string of small pink pearls"
        ],
        7500: [
            "Jeweled gold crown",
            "Jeweled platinum ring",
            "Small gold statuette set with rubies",
            "Gold cup set with emeralds",
            "Gold jewelry box with platinum filigree",
            "Painted gold child's sarcophagus",
            "Jade game board with solid gold playing pieces",
            "Bejeweled ivory drinking horn with gold filigree"
        ]
    },

    // Trade goods (mundane valuable items)
    tradeGoods: [
        { name: "Barrel of ale", value: 2 },
        { name: "Bolt of canvas", value: 1 },
        { name: "Bolt of cotton cloth", value: 5 },
        { name: "Bolt of linen", value: 5 },
        { name: "Bolt of silk", value: 10 },
        { name: "Cask of wine", value: 10 },
        { name: "Chest of tea", value: 25 },
        { name: "Crate of spices (common)", value: 15 },
        { name: "Crate of spices (exotic)", value: 50 },
        { name: "Barrel of flour", value: 1 },
        { name: "Barrel of salt", value: 5 },
        { name: "Bundle of furs", value: 10 },
        { name: "Bundle of rare furs", value: 50 },
        { name: "Crate of iron ingots", value: 20 },
        { name: "Pouch of saffron", value: 15 },
        { name: "Pouch of cloves", value: 3 },
        { name: "Bundle of incense sticks", value: 10 },
        { name: "Jar of perfume", value: 25 },
        { name: "Bag of coffee beans", value: 15 },
        { name: "Cask of honey", value: 10 }
    ],

    // Coinage types for flavor
    coinageDescriptions: [
        "loose coins scattered about",
        "coins in a rotting leather pouch",
        "coins in a small iron strongbox",
        "coins in a clay pot",
        "coins wrapped in oilcloth",
        "coins in a velvet drawstring bag",
        "coins spilling from a torn sack",
        "coins hidden in a false-bottom chest",
        "ancient coins of unfamiliar mint",
        "freshly minted coins",
        "tarnished coins covered in verdigris",
        "coins mixed with bone fragments"
    ]
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TreasureTables;
}
