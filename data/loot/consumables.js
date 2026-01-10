/**
 * Consumables Data
 * Potions, scrolls, and other one-use magical items
 */

const ConsumablesData = {
    // Potions by rarity
    potions: {
        common: [
            { name: "Potion of Climbing", desc: "Gain climbing speed equal to walking speed for 1 hour", value: 50 },
            { name: "Potion of Healing", desc: "Regain 2d4+2 hit points", value: 50 },
            { name: "Antitoxin", desc: "Advantage on saves vs poison for 1 hour", value: 50 }
        ],
        uncommon: [
            { name: "Potion of Greater Healing", desc: "Regain 4d4+4 hit points", value: 150 },
            { name: "Potion of Fire Breath", desc: "Exhale fire 3 times (4d6 damage each)", value: 150 },
            { name: "Potion of Resistance (random)", desc: "Resistance to one damage type for 1 hour", value: 150 },
            { name: "Potion of Animal Friendship", desc: "Cast Animal Friendship (save DC 13)", value: 100 },
            { name: "Potion of Growth", desc: "Grow one size larger for 1d4 hours", value: 150 },
            { name: "Potion of Water Breathing", desc: "Breathe underwater for 1 hour", value: 150 },
            { name: "Philter of Love", desc: "Charmed by first creature seen for 1 hour", value: 100 },
            { name: "Potion of Poison", desc: "3d6 poison damage, poisoned 1 hour (DC 13)", value: 100 },
            { name: "Oil of Slipperiness", desc: "Freedom of movement for 8 hours", value: 200 },
            { name: "Potion of Diminution", desc: "Shrink one size smaller for 1d4 hours", value: 150 }
        ],
        rare: [
            { name: "Potion of Superior Healing", desc: "Regain 8d4+8 hit points", value: 500 },
            { name: "Potion of Clairvoyance", desc: "Cast Clairvoyance", value: 500 },
            { name: "Potion of Gaseous Form", desc: "Gaseous form for 1 hour", value: 500 },
            { name: "Potion of Heroism", desc: "10 temp HP, bless effect for 1 hour", value: 500 },
            { name: "Potion of Invulnerability", desc: "Resistance to all damage for 1 minute", value: 750 },
            { name: "Potion of Mind Reading", desc: "Cast Detect Thoughts (save DC 13)", value: 500 },
            { name: "Potion of Flying", desc: "Fly 60 ft for 1 hour", value: 500 },
            { name: "Potion of Hill Giant Strength", desc: "Strength 21 for 1 hour", value: 500 },
            { name: "Potion of Frost Giant Strength", desc: "Strength 23 for 1 hour", value: 750 },
            { name: "Oil of Etherealness", desc: "Ethereal for 1 hour", value: 750 }
        ],
        veryRare: [
            { name: "Potion of Supreme Healing", desc: "Regain 10d4+20 hit points", value: 1500 },
            { name: "Potion of Fire Giant Strength", desc: "Strength 25 for 1 hour", value: 2500 },
            { name: "Potion of Cloud Giant Strength", desc: "Strength 27 for 1 hour", value: 3000 },
            { name: "Potion of Invisibility", desc: "Invisible for 1 hour", value: 2000 },
            { name: "Potion of Speed", desc: "Haste effect for 1 minute", value: 2500 },
            { name: "Potion of Vitality", desc: "Remove exhaustion, cure disease/poison, max HP rolls for 24h", value: 2500 },
            { name: "Oil of Sharpness", desc: "+3 weapon for 1 hour", value: 3000 }
        ],
        legendary: [
            { name: "Potion of Storm Giant Strength", desc: "Strength 29 for 1 hour", value: 10000 },
            { name: "Potion of Longevity", desc: "Reduce age by 1d6+6 years (10% chance to age instead)", value: 5000 }
        ]
    },

    // Scrolls by spell level (with sample spells)
    scrolls: {
        cantrip: {
            value: 15,
            spells: ["Light", "Mending", "Message", "Prestidigitation", "Thaumaturgy", "Fire Bolt", "Ray of Frost", "Minor Illusion", "Guidance", "Resistance"]
        },
        1: {
            value: 50,
            spells: ["Cure Wounds", "Detect Magic", "Magic Missile", "Shield", "Sleep", "Charm Person", "Identify", "Healing Word", "Thunderwave", "Bless", "Guiding Bolt", "Mage Armor", "Disguise Self", "Faerie Fire"]
        },
        2: {
            value: 150,
            spells: ["Hold Person", "Invisibility", "Lesser Restoration", "Misty Step", "Scorching Ray", "Web", "Shatter", "Silence", "Darkness", "Enhance Ability", "Spiritual Weapon", "Aid", "Blindness/Deafness"]
        },
        3: {
            value: 300,
            spells: ["Fireball", "Lightning Bolt", "Counterspell", "Dispel Magic", "Fly", "Haste", "Revivify", "Spirit Guardians", "Hypnotic Pattern", "Fear", "Bestow Curse", "Remove Curse", "Water Breathing"]
        },
        4: {
            value: 500,
            spells: ["Banishment", "Dimension Door", "Greater Invisibility", "Polymorph", "Wall of Fire", "Ice Storm", "Death Ward", "Freedom of Movement", "Guardian of Faith", "Blight"]
        },
        5: {
            value: 1000,
            spells: ["Cone of Cold", "Hold Monster", "Raise Dead", "Teleportation Circle", "Wall of Force", "Mass Cure Wounds", "Flame Strike", "Greater Restoration", "Cloudkill", "Animate Objects"]
        },
        6: {
            value: 2500,
            spells: ["Chain Lightning", "Disintegrate", "Globe of Invulnerability", "Heal", "Heroes' Feast", "True Seeing", "Sunbeam", "Word of Recall", "Harm", "Blade Barrier"]
        },
        7: {
            value: 5000,
            spells: ["Finger of Death", "Fire Storm", "Plane Shift", "Regenerate", "Resurrection", "Teleport", "Forcecage", "Divine Word"]
        },
        8: {
            value: 10000,
            spells: ["Earthquake", "Feeblemind", "Power Word Stun", "Sunburst", "Antimagic Field", "Control Weather", "Holy Aura"]
        },
        9: {
            value: 25000,
            spells: ["Gate", "Mass Heal", "Meteor Swarm", "Power Word Kill", "True Resurrection", "Wish", "Prismatic Wall", "Foresight"]
        }
    },

    // Other consumables
    otherConsumables: {
        common: [
            { name: "Candle of the Deep", desc: "Cannot be extinguished by water", value: 25 },
            { name: "Dust of Dryness (1 pellet)", desc: "Absorbs 15 ft cube of water", value: 50 },
            { name: "Rope of Mending", desc: "50 ft rope that repairs itself", value: 50 }
        ],
        uncommon: [
            { name: "Dust of Disappearance", desc: "Invisible for 2d4 minutes", value: 300 },
            { name: "Dust of Sneezing and Choking", desc: "DC 15 Con save or incapacitated", value: 200 },
            { name: "Elemental Gem (random)", desc: "Summon elemental for 1 hour", value: 500 },
            { name: "Necklace of Fireballs (3 beads)", desc: "3 fireballs, 8d6 damage each", value: 1000 },
            { name: "Necklace of Fireballs (1 bead)", desc: "1 fireball, 8d6 damage", value: 400 },
            { name: "Bead of Force", desc: "5d4 force damage, sphere of force", value: 500 },
            { name: "Chime of Opening", desc: "Opens one lock, latch, or lid", value: 200 },
            { name: "Feather Token (Anchor)", desc: "Immovable anchor in water", value: 100 },
            { name: "Feather Token (Bird)", desc: "Delivers small message to location", value: 100 },
            { name: "Feather Token (Fan)", desc: "Creates huge fan, moves sails", value: 100 },
            { name: "Feather Token (Tree)", desc: "Creates 60 ft oak tree", value: 200 },
            { name: "Feather Token (Whip)", desc: "+1 whip that moves on its own", value: 300 },
            { name: "Horn of Blasting", desc: "120 ft cone, 5d6 thunder damage (20% shatter)", value: 400 },
            { name: "Javelin of Lightning", desc: "4d6 lightning in 5x120 ft line", value: 400 },
            { name: "Keoghtom's Ointment (dose)", desc: "Heals 2d8+2, cures disease/poison", value: 200 },
            { name: "Arrow of Slaying (random creature type)", desc: "6d10 extra damage vs creature type", value: 600 }
        ],
        rare: [
            { name: "Bead of Refreshment", desc: "Purifies container of liquid", value: 25 },
            { name: "Necklace of Fireballs (6 beads)", desc: "6 fireballs, 8d6 damage each", value: 2000 },
            { name: "Nolzur's Marvelous Pigments", desc: "Create real objects from paintings", value: 3000 },
            { name: "Universal Solvent", desc: "Dissolves any adhesive", value: 1000 },
            { name: "Sovereign Glue", desc: "Permanently bonds objects", value: 1000 },
            { name: "Restorative Ointment", desc: "5 doses, heals 2d8+2 each", value: 1000 }
        ],
        veryRare: [
            { name: "Iron Flask (empty)", desc: "Capture and release creatures", value: 5000 },
            { name: "Candle of Invocation", desc: "8 hours, Gate spell at end", value: 8000 },
            { name: "Manual of Bodily Health", desc: "+2 Constitution permanently", value: 10000 },
            { name: "Manual of Gainful Exercise", desc: "+2 Strength permanently", value: 10000 },
            { name: "Manual of Quickness of Action", desc: "+2 Dexterity permanently", value: 10000 },
            { name: "Tome of Clear Thought", desc: "+2 Intelligence permanently", value: 10000 },
            { name: "Tome of Leadership and Influence", desc: "+2 Charisma permanently", value: 10000 },
            { name: "Tome of Understanding", desc: "+2 Wisdom permanently", value: 10000 }
        ]
    },

    // Ammunition
    magicAmmunition: {
        uncommon: [
            { name: "+1 Ammunition (20)", desc: "+1 to attack and damage", value: 100 },
            { name: "Walloping Ammunition (5)", desc: "DC 10 Str or knocked prone", value: 75 }
        ],
        rare: [
            { name: "+2 Ammunition (10)", desc: "+2 to attack and damage", value: 500 },
            { name: "Arrow of Slaying", desc: "6d10 extra vs specific creature type", value: 600 }
        ],
        veryRare: [
            { name: "+3 Ammunition (5)", desc: "+3 to attack and damage", value: 1500 }
        ]
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ConsumablesData;
}
