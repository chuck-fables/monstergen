/**
 * Magic Item Effects Data
 * Defines mechanical effects by rarity and type, balanced for D&D 5e
 */

const ItemEffects = {
    // Weapon effects by rarity
    weaponEffects: {
        common: [
            { id: 'gleaming', name: 'Gleaming', desc: 'This weapon never gets dirty.' },
            { id: 'warning', name: 'Warning', desc: 'While this weapon is on your person, you have advantage on initiative rolls.' },
            { id: 'guardian', name: 'Guardian', desc: 'This weapon floats beside you, ready to be drawn as a free action.' },
            { id: 'marker', name: 'Marker', desc: 'Wounds from this weapon glow faintly for 1 minute, making hidden creatures visible.' },
            { id: 'signal', name: 'Signal', desc: 'As a bonus action, you can make this weapon emit light as a torch or extinguish it.' }
        ],
        uncommon: [
            { id: 'plus1', name: '+1 Weapon', desc: 'You have a +1 bonus to attack and damage rolls made with this magic weapon.' },
            { id: 'returning', name: 'Returning', desc: 'This weapon returns to your hand immediately after a ranged attack.' },
            { id: 'vicious', name: 'Vicious', desc: 'When you roll a 20 on your attack roll, the target takes an extra 7 damage.' },
            { id: 'wounding', name: 'Wounding', desc: 'HP lost to this weapon can only be regained by a short or long rest.' },
            { id: 'moon-touched', name: 'Moon-Touched', desc: 'This weapon sheds bright light in a 15-foot radius and dim light for an additional 15 feet. It deals +1d6 damage to shapechangers.' }
        ],
        rare: [
            { id: 'plus2', name: '+2 Weapon', desc: 'You have a +2 bonus to attack and damage rolls made with this magic weapon.' },
            { id: 'lifeSteal', name: 'Life Stealing', desc: 'When you hit and roll a 20, the target takes an extra 10 necrotic damage, and you gain temporary HP equal to that damage.' },
            { id: 'dragonSlayer', name: 'Dragon Slayer', desc: 'You deal an extra 3d6 damage to dragons.' },
            { id: 'flameTounge', name: 'Flame Tongue', desc: 'You can use a bonus action to ignite the blade, dealing an extra 2d6 fire damage on a hit.' },
            { id: 'giantSlayer', name: 'Giant Slayer', desc: 'You deal an extra 2d6 damage to giants. When a giant hits you, it must succeed on a DC 15 Strength save or fall prone.' }
        ],
        veryRare: [
            { id: 'plus3', name: '+3 Weapon', desc: 'You have a +3 bonus to attack and damage rolls made with this magic weapon.' },
            { id: 'dancing', name: 'Dancing', desc: 'As a bonus action, you can release this weapon to hover and fight on its own for up to 1 minute.' },
            { id: 'frostBrand', name: 'Frost Brand', desc: 'Deals an extra 1d6 cold damage. You have resistance to fire. In freezing temperatures, it sheds bright light in a 10-foot radius.' },
            { id: 'nineKills', name: 'Nine Lives Stealer', desc: 'Has 9 charges. On a critical hit vs. a creature with fewer than 100 HP, it must succeed on a DC 15 Constitution save or be slain.' },
            { id: 'swordSharpness', name: 'Sharpness', desc: 'On a 20, deals an extra 14 slashing damage. On another 20, severs a limb.' }
        ],
        legendary: [
            { id: 'vorpal', name: 'Vorpal', desc: '+3 weapon. On a 20, severs a head if the target has one and fewer than 200 HP, killing it instantly.' },
            { id: 'hollyAvenger', name: 'Holy Avenger', desc: '+3 weapon. Deals +2d10 radiant damage to fiends and undead. Creates a 10-foot aura of spell resistance while held.' },
            { id: 'sunBlade', name: 'Sun Blade', desc: '+2 weapon. Deals radiant damage. +2d6 vs undead. Emits sunlight in a 15-foot radius.' },
            { id: 'defender', name: 'Defender', desc: '+3 weapon. You can transfer some or all of the bonus to AC instead.' },
            { id: 'luck', name: 'Luck Blade', desc: '+1 weapon. +1 to saving throws. Has 1d4-1 wishes when found.' }
        ]
    },

    // Armor effects by rarity
    armorEffects: {
        common: [
            { id: 'castOff', name: 'Cast-Off', desc: 'You can doff this armor as an action.' },
            { id: 'gleaming', name: 'Gleaming', desc: 'This armor never gets dirty.' },
            { id: 'smoldering', name: 'Smoldering', desc: 'Wisps of harmless smoke rise from this armor.' },
            { id: 'shifting', name: 'Shifting', desc: 'As a bonus action, you can change this armor\'s style and color.' },
            { id: 'waterborne', name: 'Waterborne', desc: 'This armor doesn\'t impose disadvantage on Stealth checks when wet.' }
        ],
        uncommon: [
            { id: 'plus1', name: '+1 Armor', desc: 'You have a +1 bonus to AC while wearing this armor.' },
            { id: 'resistance', name: 'Resistance', desc: 'You have resistance to one type of damage while wearing this armor.' },
            { id: 'glamoured', name: 'Glamoured', desc: 'As a bonus action, you can make it appear as normal clothing.' },
            { id: 'mithral', name: 'Mithral', desc: 'No Strength requirement. Doesn\'t impose disadvantage on Stealth.' },
            { id: 'adamantine', name: 'Adamantine', desc: 'Any critical hit against you becomes a normal hit.' }
        ],
        rare: [
            { id: 'plus2', name: '+2 Armor', desc: 'You have a +2 bonus to AC while wearing this armor.' },
            { id: 'arrowCatching', name: 'Arrow-Catching (Shield)', desc: '+2 AC against ranged attacks. As a reaction, impose disadvantage on ranged attacks against allies within 5 feet.' },
            { id: 'spellguard', name: 'Spellguard (Shield)', desc: 'Advantage on saves against spells. Spell attacks have disadvantage against you.' },
            { id: 'animated', name: 'Animated (Shield)', desc: 'As a bonus action, the shield floats to protect you, freeing your hands.' },
            { id: 'displacement', name: 'Displacement', desc: 'Illusion makes you appear slightly displaced. Attacks have disadvantage until you\'re hit.' }
        ],
        veryRare: [
            { id: 'plus3', name: '+3 Armor', desc: 'You have a +3 bonus to AC while wearing this armor.' },
            { id: 'demon', name: 'Demon Armor', desc: '+1 AC. Resistance to fire, cold, lightning, and poison. You can\'t remove it without Remove Curse.' },
            { id: 'dragon', name: 'Dragon Scale Mail', desc: '+1 AC. Advantage on saves vs dragon breath. Sense dragons within 30 miles.' },
            { id: 'etherealness', name: 'Armor of Etherealness', desc: 'Cast Etherealness targeting only yourself once per long rest.' },
            { id: 'resistance', name: 'Armor of Resistance', desc: '+1 AC and resistance to a specific damage type.' }
        ],
        legendary: [
            { id: 'invulnerability', name: 'Armor of Invulnerability', desc: 'Resistance to nonmagical damage. Action to become immune for 10 minutes once per long rest.' },
            { id: 'plate', name: 'Plate Armor of Etherealness', desc: '+3 AC. Cast Etherealness at will.' },
            { id: 'efreeti', name: 'Efreeti Chain', desc: '+3 AC. Immunity to fire. Understand and speak Primordial.' },
            { id: 'shieldWall', name: 'Shield of the Hidden Lord', desc: '+2 AC. Contains the spirit of a pit fiend. Various powerful abilities.' },
            { id: 'dragonplate', name: 'Dragonplate', desc: '+3 AC. Immunity to the corresponding dragon\'s breath weapon. Frightful presence.' }
        ]
    },

    // Accessory effects (footwear, handwear, headwear)
    accessoryEffects: {
        common: [
            { id: 'comfortable', name: 'Comfortable', desc: 'You never suffer from uncomfortable temperatures while wearing this.' },
            { id: 'selfCleaning', name: 'Self-Cleaning', desc: 'This item cleans itself and never stains.' },
            { id: 'featherWeight', name: 'Featherweight', desc: 'This item weighs almost nothing.' },
            { id: 'durability', name: 'Durable', desc: 'This item cannot be damaged by normal means.' },
            { id: 'waterproof', name: 'Waterproof', desc: 'This item and everything inside it stays completely dry.' }
        ],
        uncommon: [
            { id: 'striding', name: 'Striding and Springing (Boots)', desc: 'Your walking speed becomes 30 feet. You can jump three times the normal distance.' },
            { id: 'elvenkind', name: 'Elvenkind (Boots/Cloak)', desc: 'Advantage on Dexterity (Stealth) checks. Muffles your footsteps.' },
            { id: 'climbing', name: 'Climbing (Gloves)', desc: 'You gain a climbing speed equal to your walking speed.' },
            { id: 'ogre', name: 'Ogre Power (Gauntlets)', desc: 'Your Strength score is 19 while wearing these gauntlets.' },
            { id: 'night', name: 'Night Vision (Goggles)', desc: 'You have darkvision out to 60 feet.' }
        ],
        rare: [
            { id: 'flying', name: 'Flying (Boots)', desc: 'You gain a flying speed equal to your walking speed.' },
            { id: 'speed', name: 'Speed (Boots)', desc: 'Your walking speed increases by 10 feet. Click heels to cast Haste.' },
            { id: 'hillGiant', name: 'Hill Giant Strength (Gloves)', desc: 'Your Strength score becomes 21 while wearing these.' },
            { id: 'intellect', name: 'Intellect (Headband)', desc: 'Your Intelligence score becomes 19 while wearing this.' },
            { id: 'charming', name: 'Charming', desc: 'You have advantage on Charisma (Persuasion) checks.' }
        ],
        veryRare: [
            { id: 'levitation', name: 'Levitation (Boots)', desc: 'Cast Levitate at will targeting only yourself.' },
            { id: 'frostGiant', name: 'Frost Giant Strength (Gloves)', desc: 'Your Strength score becomes 23 while wearing these.' },
            { id: 'brilliance', name: 'Brilliance (Headband)', desc: 'Your Intelligence score becomes 21 while wearing this.' },
            { id: 'teleportation', name: 'Teleportation (Boots)', desc: 'While wearing these boots, you can teleport up to 15 feet as a bonus action.' },
            { id: 'trueSeeing', name: 'True Seeing (Goggles)', desc: 'You can see through illusions and into the Ethereal Plane.' }
        ],
        legendary: [
            { id: 'etherealness', name: 'Etherealness (Boots)', desc: 'Cast Etherealness at will.' },
            { id: 'storm', name: 'Storm Giant Strength (Gloves)', desc: 'Your Strength score becomes 29 while wearing these.' },
            { id: 'omniscience', name: 'Omniscience (Helm)', desc: 'You always know the direction to any specific object or creature you have seen.' },
            { id: 'teleportation', name: 'Greater Teleportation (Boots)', desc: 'Cast Teleport once per long rest. Can only target yourself and your equipment.' },
            { id: 'truesight', name: 'True Sight (Helm)', desc: 'You have truesight out to 120 feet.' }
        ]
    },

    // Jewelry effects (rings, amulets, etc.)
    jewelryEffects: {
        common: [
            { id: 'mood', name: 'Mood Ring', desc: 'Changes color based on your emotional state.' },
            { id: 'warmth', name: 'Warmth', desc: 'You feel comfortable in temperatures from 0 to 120 degrees Fahrenheit.' },
            { id: 'compass', name: 'Compass', desc: 'You always know which direction is north.' },
            { id: 'gleaming', name: 'Gleaming', desc: 'This jewelry never tarnishes or gets dirty.' },
            { id: 'minor_ward', name: 'Minor Ward', desc: 'Once per day, negate 1 point of damage from any source.' }
        ],
        uncommon: [
            { id: 'protection', name: 'Protection', desc: '+1 bonus to AC and saving throws.' },
            { id: 'swimming', name: 'Swimming', desc: 'You have a swimming speed of 40 feet.' },
            { id: 'waterbreathing', name: 'Water Breathing', desc: 'You can breathe underwater.' },
            { id: 'featherFall', name: 'Feather Falling', desc: 'When you fall, you descend 60 feet per round and take no falling damage.' },
            { id: 'mindShield', name: 'Mind Shielding', desc: 'You are immune to magic that reads your thoughts or determines if you\'re lying.' }
        ],
        rare: [
            { id: 'evasion', name: 'Evasion', desc: 'When you fail a Dexterity save, you can use your reaction to succeed instead (3 charges/day).' },
            { id: 'freeAction', name: 'Free Action', desc: 'Difficult terrain doesn\'t cost extra movement. Magic can\'t reduce your speed or paralyze you.' },
            { id: 'spellStoring', name: 'Spell Storing', desc: 'Can store a spell of 5th level or lower, which can be cast by the wearer.' },
            { id: 'fireResistance', name: 'Fire Resistance', desc: 'You have resistance to fire damage.' },
            { id: 'health', name: 'Health', desc: 'You are immune to disease. Your Constitution score becomes 19.' }
        ],
        veryRare: [
            { id: 'regeneration', name: 'Regeneration', desc: 'You regain 1d6 hit points every 10 minutes, provided you have at least 1 HP.' },
            { id: 'shooting_stars', name: 'Shooting Stars', desc: 'Multiple abilities including Ball Lightning, Faerie Fire, and Shooting Stars.' },
            { id: 'telekinesis', name: 'Telekinesis', desc: 'Cast Telekinesis at will.' },
            { id: 'xRay', name: 'X-Ray Vision', desc: 'You can see through solid matter for up to 30 feet.' },
            { id: 'spellturn', name: 'Spell Turning', desc: 'Advantage on saves vs. spells. Spells of 7th level or lower that target only you have a chance to reflect.' }
        ],
        legendary: [
            { id: 'threeWishes', name: 'Three Wishes', desc: 'Contains 1d3 charges. Each charge can be used to cast the Wish spell.' },
            { id: 'djinni', name: 'Djinni Summoning', desc: 'Once per day, summon a djinni to serve you for 1 hour.' },
            { id: 'airElemental', name: 'Air Elemental Command', desc: 'You can summon an air elemental, have resistance to lightning, and can fly.' },
            { id: 'invisibility', name: 'Invisibility', desc: 'You can become invisible at will as an action.' },
            { id: 'resistance', name: 'Legendary Resistance', desc: 'When you fail a saving throw, you can choose to succeed instead (3/day).' }
        ]
    },

    // Wondrous item effects
    wondrousEffects: {
        common: [
            { id: 'clockwork', name: 'Clockwork Amulet', desc: 'Once per day, when you make an attack roll, you can forgo rolling and treat it as a 10.' },
            { id: 'orb_direction', name: 'Orb of Direction', desc: 'Always know which way is north while holding this orb.' },
            { id: 'tankard', name: 'Tankard of Plenty', desc: 'Once per day, this vessel fills with ale or water when tapped three times.' },
            { id: 'pipe', name: 'Pipe of Smoke Shapes', desc: 'Smoke from this pipe takes whatever shape you desire.' },
            { id: 'cloak_billowing', name: 'Cloak of Billowing', desc: 'As a bonus action, make your cloak billow dramatically.' }
        ],
        uncommon: [
            { id: 'bag_holding', name: 'Bag of Holding', desc: 'This bag has an interior space considerably larger than its outside dimensions.' },
            { id: 'cloak_protection', name: 'Cloak of Protection', desc: '+1 bonus to AC and saving throws.' },
            { id: 'decanter', name: 'Decanter of Endless Water', desc: 'Produces fresh or salt water on command.' },
            { id: 'dust_sneezing', name: 'Dust of Disappearance', desc: 'When thrown, makes creatures within 10 feet invisible for 2d4 minutes.' },
            { id: 'immovable_rod', name: 'Immovable Rod', desc: 'When activated, this rod becomes magically fixed in place.' }
        ],
        rare: [
            { id: 'cloak_displacement', name: 'Cloak of Displacement', desc: 'Projects an illusion making you appear slightly displaced. Attacks have disadvantage.' },
            { id: 'cloak_bat', name: 'Cloak of the Bat', desc: 'Advantage on Stealth. Can transform into a bat once per day.' },
            { id: 'cube_force', name: 'Cube of Force', desc: 'Creates a barrier of force that blocks different things based on charges spent.' },
            { id: 'figurine', name: 'Figurine of Wondrous Power', desc: 'Becomes a creature when activated. Various types available.' },
            { id: 'portable_hole', name: 'Portable Hole', desc: 'Creates an extradimensional space 6 feet in diameter and 10 feet deep.' }
        ],
        veryRare: [
            { id: 'carpet_flying', name: 'Carpet of Flying', desc: 'This carpet hovers when activated and can carry passengers through the air.' },
            { id: 'mirror_life', name: 'Mirror of Life Trapping', desc: 'Can trap up to 12 creatures in extradimensional cells.' },
            { id: 'robe_stars', name: 'Robe of Stars', desc: '+1 AC and saves. Can enter the Astral Plane. Six stars can be thrown as Magic Missiles.' },
            { id: 'well_worlds', name: 'Well of Many Worlds', desc: 'Opens a portal to another plane of existence.' },
            { id: 'crystal_ball', name: 'Crystal Ball', desc: 'Cast Scrying at will while touching it.' }
        ],
        legendary: [
            { id: 'sphere_annihilation', name: 'Sphere of Annihilation', desc: 'A 2-foot void that obliterates all matter it touches.' },
            { id: 'tome_leadership', name: 'Tome of Leadership', desc: 'Increases your Charisma by 2, to a maximum of 30.' },
            { id: 'cloak_invisibility', name: 'Cloak of Invisibility', desc: 'You are invisible while wearing this cloak with the hood up.' },
            { id: 'iron_flask', name: 'Iron Flask', desc: 'Can trap any creature in the flask if it fails a DC 17 Wisdom save.' },
            { id: 'deck_many', name: 'Deck of Many Things', desc: 'Drawing cards from this deck can have wildly unpredictable effects.' }
        ]
    },

    // Artifact properties
    artifactProperties: {
        minorBeneficial: [
            { id: 'advantage_save', name: 'Advantage on Saves', desc: 'While attuned, you have advantage on saving throws against being charmed.' },
            { id: 'comprehend', name: 'Comprehend Languages', desc: 'While attuned, you can understand any spoken language.' },
            { id: 'darkness', name: 'Cast Darkness', desc: 'You can cast Darkness at will.' },
            { id: 'hp_start', name: 'Extra Hit Points', desc: 'You gain 1d6 extra hit points at the start of each day.' },
            { id: 'no_food', name: 'No Need for Food', desc: 'You don\'t need to eat or drink while attuned.' },
            { id: 'vision', name: 'Superior Vision', desc: 'You have darkvision out to 120 feet.' },
            { id: 'detect_magic', name: 'Detect Magic', desc: 'You can cast Detect Magic at will.' },
            { id: 'resistance', name: 'Damage Resistance', desc: 'You have resistance to one damage type (determined by the artifact).' },
            { id: 'no_sleep', name: 'No Need for Sleep', desc: 'You don\'t need to sleep while attuned.' },
            { id: 'language', name: 'Know Languages', desc: 'While attuned, you can speak and read one additional language.' }
        ],
        majorBeneficial: [
            { id: 'ac_bonus', name: '+2 AC', desc: 'While attuned, you gain a +2 bonus to AC.' },
            { id: 'stat_bonus', name: '+2 to Ability Score', desc: 'One of your ability scores increases by 2, to a maximum of 24.' },
            { id: 'hp_bonus', name: 'Extra Maximum HP', desc: 'When you attune, your hit point maximum increases by 2d10.' },
            { id: 'healing', name: 'Healing Power', desc: 'You regain 1d6 hit points at the start of your turn if you have at least 1 HP.' },
            { id: 'fly', name: 'Flight', desc: 'You gain a flying speed of 30 feet.' },
            { id: 'spell_level', name: 'Bonus Spell Level', desc: 'You gain one 5th-level spell slot. It returns after a long rest.' },
            { id: 'immunity', name: 'Damage Immunity', desc: 'You are immune to one damage type (determined by the artifact).' },
            { id: 'teleport', name: 'Teleportation', desc: 'You can cast Teleport once per day.' },
            { id: 'legendary_resist', name: 'Legendary Resistance', desc: 'Once per day, you can choose to succeed on a failed saving throw.' },
            { id: 'truesight', name: 'Truesight', desc: 'You have truesight out to 30 feet.' }
        ],
        detrimentalProperties: [
            { id: 'curse_wound', name: 'Wounds Won\'t Heal', desc: 'The first time you take damage each day, you lose 1d6 max HP until Remove Curse.' },
            { id: 'jealousy', name: 'Jealousy', desc: 'The artifact demands you not carry any other magic items.' },
            { id: 'vulnerability', name: 'Vulnerability', desc: 'You have vulnerability to one damage type while attuned.' },
            { id: 'possession', name: 'Possession', desc: 'An entity within the artifact can try to possess you when you attune.' },
            { id: 'corruption', name: 'Corruption', desc: 'Your alignment shifts one step toward the artifact\'s alignment while attuned.' },
            { id: 'aged', name: 'Aging', desc: 'Each time you attune, you age 3d10 years.' },
            { id: 'blind', name: 'Blinding Sickness', desc: 'When you first attune, you are blinded until Remove Curse is cast.' },
            { id: 'greed', name: 'Greed', desc: 'You must spend 1 hour each day polishing and admiring the artifact.' },
            { id: 'rivalry', name: 'Rivalry', desc: 'The artifact\'s creator is alerted when you attune and may seek to reclaim it.' },
            { id: 'cursed', name: 'Cursed', desc: 'You can\'t unattune until someone casts Remove Curse on you.' }
        ]
    },

    // Special biome-themed effects
    biomeEffects: {
        tundra: [
            { desc: 'You are immune to the effects of extreme cold.', rarity: 'uncommon' },
            { desc: 'You can cast Ray of Frost at will.', rarity: 'uncommon' },
            { desc: 'Once per day, you can cast Sleet Storm.', rarity: 'rare' },
            { desc: 'You can walk on ice and snow without leaving tracks.', rarity: 'uncommon' },
            { desc: 'Creatures you hit must make a DC 13 Con save or have their speed reduced by 10 feet until the end of their next turn.', rarity: 'rare' }
        ],
        taiga: [
            { desc: 'You have advantage on Wisdom (Survival) checks in forests.', rarity: 'uncommon' },
            { desc: 'You can speak with beasts once per short rest.', rarity: 'uncommon' },
            { desc: 'Once per day, you can cast Conjure Animals.', rarity: 'rare' },
            { desc: 'You leave no tracks in natural terrain.', rarity: 'uncommon' },
            { desc: 'You can cast Hunter\'s Mark without using a spell slot (3 charges/day).', rarity: 'rare' }
        ],
        temperateForest: [
            { desc: 'Fey creatures are friendly to you unless you harm them.', rarity: 'uncommon' },
            { desc: 'You can cast Minor Illusion at will.', rarity: 'uncommon' },
            { desc: 'Once per day, you can cast Charm Person as a 3rd-level spell.', rarity: 'rare' },
            { desc: 'You have advantage on saving throws against being charmed.', rarity: 'uncommon' },
            { desc: 'You can teleport up to 30 feet to an unoccupied space you can see that is near a tree (3 charges/day).', rarity: 'rare' }
        ],
        rainforest: [
            { desc: 'You are immune to poison and disease.', rarity: 'rare' },
            { desc: 'Your melee attacks deal an extra 1d4 poison damage.', rarity: 'uncommon' },
            { desc: 'You have a climbing speed equal to your walking speed.', rarity: 'uncommon' },
            { desc: 'Once per day, you can cast Polymorph on yourself, turning into a beast native to jungles.', rarity: 'rare' },
            { desc: 'You can perfectly blend into jungle foliage as an action, becoming invisible until you move.', rarity: 'rare' }
        ],
        grasslands: [
            { desc: 'Your walking speed increases by 10 feet.', rarity: 'uncommon' },
            { desc: 'You have advantage on initiative rolls.', rarity: 'uncommon' },
            { desc: 'Once per day, you can cast Call Lightning.', rarity: 'rare' },
            { desc: 'You can communicate telepathically with horses and similar creatures within 100 feet.', rarity: 'uncommon' },
            { desc: 'When you move at least 20 feet straight toward a target, your next attack deals an extra 2d6 damage.', rarity: 'rare' }
        ],
        desert: [
            { desc: 'You require only a quarter of the normal food and water.', rarity: 'uncommon' },
            { desc: 'You can see clearly through sandstorms and other desert obscurement.', rarity: 'uncommon' },
            { desc: 'Once per day, you can cast Create Food and Water (water only).', rarity: 'uncommon' },
            { desc: 'You have resistance to fire damage.', rarity: 'rare' },
            { desc: 'Once per day, you can cast Wall of Sand or Sunbeam.', rarity: 'veryRare' }
        ],
        savanna: [
            { desc: 'You have advantage on Wisdom (Perception) checks that rely on sight.', rarity: 'uncommon' },
            { desc: 'Your unarmed strikes deal 1d6 slashing damage.', rarity: 'uncommon' },
            { desc: 'Once per day, you can let out a roar. Each creature within 30 feet must make a DC 14 Wisdom save or be frightened for 1 minute.', rarity: 'rare' },
            { desc: 'You don\'t provoke opportunity attacks when you move at half speed or faster.', rarity: 'rare' },
            { desc: 'You can track creatures you\'ve damaged for 24 hours, always knowing their direction.', rarity: 'rare' }
        ],
        swamp: [
            { desc: 'You can breathe underwater.', rarity: 'uncommon' },
            { desc: 'Difficult terrain composed of mud, water, or plants doesn\'t slow you.', rarity: 'uncommon' },
            { desc: 'Once per day, you can cast Stinking Cloud.', rarity: 'rare' },
            { desc: 'You can see normally in fog, mist, and murky water.', rarity: 'uncommon' },
            { desc: 'When a creature hits you, they take 1d6 poison damage.', rarity: 'rare' }
        ],
        mountain: [
            { desc: 'You have a climbing speed equal to your walking speed.', rarity: 'uncommon' },
            { desc: 'You don\'t suffer from altitude sickness.', rarity: 'common' },
            { desc: 'Once per day, you can cast Earthquake.', rarity: 'legendary' },
            { desc: 'You can speak, read, and write Giant.', rarity: 'uncommon' },
            { desc: 'Your weight and the weight of objects you carry is halved while you wear this item.', rarity: 'rare' }
        ],
        coastal: [
            { desc: 'You have a swimming speed of 40 feet.', rarity: 'uncommon' },
            { desc: 'You can breathe air and water.', rarity: 'uncommon' },
            { desc: 'Once per day, you can cast Control Water.', rarity: 'rare' },
            { desc: 'You always know the direction to the nearest large body of water.', rarity: 'common' },
            { desc: 'You can walk on liquid water as if it were solid ground.', rarity: 'rare' }
        ],
        underwater: [
            { desc: 'You can breathe underwater and have a swimming speed of 60 feet.', rarity: 'rare' },
            { desc: 'You can communicate telepathically with any creature in water within 100 feet.', rarity: 'rare' },
            { desc: 'You are immune to the crushing pressure of deep water.', rarity: 'uncommon' },
            { desc: 'Once per day, you can cast Dominate Beast on aquatic creatures.', rarity: 'rare' },
            { desc: 'You can see clearly underwater, regardless of darkness or murk.', rarity: 'uncommon' }
        ],
        underdark: [
            { desc: 'You have darkvision out to 120 feet.', rarity: 'uncommon' },
            { desc: 'You have advantage on Stealth checks in dim light or darkness.', rarity: 'uncommon' },
            { desc: 'Once per day, you can cast Faerie Fire or Darkness.', rarity: 'rare' },
            { desc: 'You are immune to the poisoned condition.', rarity: 'rare' },
            { desc: 'You can climb difficult surfaces, including ceilings, without a check.', rarity: 'rare' }
        ],
        abyssal: [
            { desc: 'You deal an extra 1d6 necrotic damage with melee attacks, but take 1d4 necrotic damage when you do.', rarity: 'rare' },
            { desc: 'You have resistance to necrotic and poison damage.', rarity: 'rare' },
            { desc: 'Once per day, you can cast Summon Demon (CR 5 or lower).', rarity: 'veryRare' },
            { desc: 'When reduced to 0 HP, you can make a DC 15 Con save to drop to 1 HP instead (once per long rest).', rarity: 'rare' },
            { desc: 'You can sense the presence of celestials within 60 feet.', rarity: 'uncommon' }
        ],
        infernal: [
            { desc: 'You have resistance to fire damage.', rarity: 'rare' },
            { desc: 'You can speak, read, and write Infernal. Contracts you sign are magically binding.', rarity: 'uncommon' },
            { desc: 'Once per day, you can cast Hellish Rebuke at 3rd level.', rarity: 'rare' },
            { desc: 'When you make a Persuasion or Deception check, you can treat a roll of 9 or lower as a 10.', rarity: 'rare' },
            { desc: 'You can make a binding deal with another creature. If they break it, they take 8d6 psychic damage.', rarity: 'veryRare' }
        ],
        celestial: [
            { desc: 'You have resistance to radiant and necrotic damage.', rarity: 'rare' },
            { desc: 'Once per day, you can cast Cure Wounds at 3rd level.', rarity: 'uncommon' },
            { desc: 'You shed bright light in a 10-foot radius and dim light for an additional 10 feet.', rarity: 'uncommon' },
            { desc: 'Fiends and undead have disadvantage on attack rolls against you.', rarity: 'rare' },
            { desc: 'Once per day, you can cast Revivify without material components.', rarity: 'veryRare' }
        ],
        astral: [
            { desc: 'You have resistance to psychic damage.', rarity: 'uncommon' },
            { desc: 'You can communicate telepathically with any creature within 60 feet.', rarity: 'uncommon' },
            { desc: 'Once per day, you can cast Plane Shift (targeting only yourself).', rarity: 'veryRare' },
            { desc: 'You don\'t age while attuned to this item.', rarity: 'rare' },
            { desc: 'You can cast Detect Thoughts at will.', rarity: 'rare' }
        ],
        urban: [
            { desc: 'You can change your appearance as per the Disguise Self spell at will.', rarity: 'uncommon' },
            { desc: 'You have advantage on Charisma checks when interacting with city dwellers.', rarity: 'uncommon' },
            { desc: 'You can sense hidden doors and passages within 30 feet.', rarity: 'uncommon' },
            { desc: 'Once per day, you can cast Detect Thoughts without concentration.', rarity: 'rare' },
            { desc: 'You always know the exact value of gems, art, and coins you can see.', rarity: 'uncommon' },
            { desc: 'You can perfectly mimic any city guard uniform you\'ve seen.', rarity: 'uncommon' },
            { desc: 'You have advantage on checks to find black markets, thieves\' guilds, or illegal activities.', rarity: 'uncommon' },
            { desc: 'You can cast Suggestion once per day without verbal components.', rarity: 'rare' }
        ]
    }
};
