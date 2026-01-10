/**
 * D&D 5e Monster Abilities Data
 * Contains special abilities/traits for different monster types
 */

const AbilitiesData = {
    /**
     * Universal abilities that can apply to any creature type
     */
    universal: [
        {
            name: 'Keen Senses',
            variants: ['Keen Smell', 'Keen Hearing', 'Keen Sight', 'Keen Hearing and Smell'],
            description: 'The {name} has advantage on Wisdom (Perception) checks that rely on {sense}.',
            minCR: 0
        },
        {
            name: 'Pack Tactics',
            description: 'The {name} has advantage on an attack roll against a creature if at least one of the {name}\'s allies is within 5 feet of the creature and the ally isn\'t incapacitated.',
            minCR: 0
        },
        {
            name: 'Magic Resistance',
            description: 'The {name} has advantage on saving throws against spells and other magical effects.',
            minCR: 3
        },
        {
            name: 'Legendary Resistance',
            uses: 3,
            description: 'If the {name} fails a saving throw, it can choose to succeed instead.',
            minCR: 10
        },
        {
            name: 'Limited Magic Immunity',
            description: 'The {name} is immune to spells of {level}th level or lower unless it wishes to be affected. It has advantage on saving throws against all other spells and magical effects.',
            minCR: 15
        },
        {
            name: 'Damage Threshold',
            threshold: 10,
            description: 'The {name} has immunity to all damage unless it takes {threshold} damage or more from a single attack or effect, in which case it takes damage as normal.',
            minCR: 5
        }
    ],

    /**
     * Abilities by monster type
     */
    byType: {
        aberration: [
            {
                name: 'Telepathy',
                description: 'The {name} can magically transmit simple messages and images to any creature within {range} feet of it that can understand a language. This form of telepathy doesn\'t allow the receiving creature to telepathically respond.',
                range: 120,
                minCR: 0
            },
            {
                name: 'Magic Resistance',
                description: 'The {name} has advantage on saving throws against spells and other magical effects.',
                minCR: 2
            },
            {
                name: 'Alien Mind',
                description: 'If a creature tries to read the {name}\'s thoughts or communicate with it telepathically, that creature must succeed on a DC {dc} Intelligence saving throw or be stunned for 1 minute.',
                minCR: 5
            },
            {
                name: 'Innate Spellcasting (Psionics)',
                description: 'The {name}\'s innate spellcasting ability is Intelligence (spell save DC {dc}). It can innately cast the following spells, requiring no components:',
                minCR: 3
            },
            {
                name: 'Maddening Presence',
                description: 'Any creature that starts its turn within {range} feet of the {name} must succeed on a DC {dc} Wisdom saving throw or be incapacitated until the start of its next turn.',
                minCR: 8
            },
            {
                name: 'Thought Shield',
                description: 'The {name}\'s thoughts can\'t be read, and any creature that tries to do so takes {damage} psychic damage.',
                minCR: 4
            },
            {
                name: 'Reality Warp',
                description: 'The {name} can use a bonus action to teleport up to {distance} feet to an unoccupied space it can see.',
                minCR: 6
            },
            {
                name: 'Mind Probe',
                description: 'The {name} can use an action to magically probe the mind of one creature it can see within 60 feet. The target must make a DC {dc} Intelligence saving throw. On a failure, the {name} learns the creature\'s surface thoughts.',
                minCR: 3
            }
        ],

        beast: [
            {
                name: 'Keen Smell',
                description: 'The {name} has advantage on Wisdom (Perception) checks that rely on smell.',
                minCR: 0
            },
            {
                name: 'Pack Tactics',
                description: 'The {name} has advantage on an attack roll against a creature if at least one of the {name}\'s allies is within 5 feet of the creature and the ally isn\'t incapacitated.',
                minCR: 0
            },
            {
                name: 'Pounce',
                description: 'If the {name} moves at least {distance} feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC {dc} Strength saving throw or be knocked prone. If the target is prone, the {name} can make one bite attack against it as a bonus action.',
                minCR: 1
            },
            {
                name: 'Charge',
                description: 'If the {name} moves at least {distance} feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra {damage} damage. If the target is a creature, it must succeed on a DC {dc} Strength saving throw or be knocked prone.',
                minCR: 1
            },
            {
                name: 'Rampage',
                description: 'When the {name} reduces a creature to 0 hit points with a melee attack on its turn, the {name} can take a bonus action to move up to half its speed and make a bite attack.',
                minCR: 2
            },
            {
                name: 'Relentless',
                description: 'If the {name} takes {threshold} damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.',
                minCR: 1
            },
            {
                name: 'Spider Climb',
                description: 'The {name} can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.',
                minCR: 0
            },
            {
                name: 'Standing Leap',
                description: 'The {name}\'s long jump is up to {distance} feet and its high jump is up to {halfDistance} feet, with or without a running start.',
                minCR: 0
            },
            {
                name: 'Hold Breath',
                description: 'The {name} can hold its breath for {duration} minutes.',
                minCR: 0
            },
            {
                name: 'Echolocation',
                description: 'The {name} can\'t use its blindsight while deafened.',
                minCR: 0
            }
        ],

        celestial: [
            {
                name: 'Angelic Weapons',
                description: 'The {name}\'s weapon attacks are magical. When the {name} hits with any weapon, the weapon deals an extra {damage} radiant damage (included in the attack).',
                minCR: 4
            },
            {
                name: 'Divine Awareness',
                description: 'The {name} knows if it hears a lie.',
                minCR: 5
            },
            {
                name: 'Magic Resistance',
                description: 'The {name} has advantage on saving throws against spells and other magical effects.',
                minCR: 3
            },
            {
                name: 'Healing Touch',
                uses: 3,
                description: 'The {name} touches another creature. The target magically regains {healing} hit points and is freed from any curse, disease, poison, blindness, or deafness.',
                minCR: 5
            },
            {
                name: 'Aura of Protection',
                description: 'Friendly creatures within {range} feet of the {name} can\'t be charmed, frightened, or possessed by celestials, fiends, or undead.',
                minCR: 7
            },
            {
                name: 'Immortal Nature',
                description: 'The {name} doesn\'t require food, drink, or sleep.',
                minCR: 0
            },
            {
                name: 'Innate Spellcasting',
                description: 'The {name}\'s innate spellcasting ability is Charisma (spell save DC {dc}). It can innately cast the following spells, requiring only verbal components:',
                minCR: 3
            },
            {
                name: 'Shielded Mind',
                description: 'The {name} is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location.',
                minCR: 10
            }
        ],

        construct: [
            {
                name: 'Immutable Form',
                description: 'The {name} is immune to any spell or effect that would alter its form.',
                minCR: 2
            },
            {
                name: 'Magic Resistance',
                description: 'The {name} has advantage on saving throws against spells and other magical effects.',
                minCR: 4
            },
            {
                name: 'Magic Weapons',
                description: 'The {name}\'s weapon attacks are magical.',
                minCR: 3
            },
            {
                name: 'Siege Monster',
                description: 'The {name} deals double damage to objects and structures.',
                minCR: 5
            },
            {
                name: 'Antimagic Susceptibility',
                description: 'The {name} is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the {name} must succeed on a Constitution saving throw against the caster\'s spell save DC or fall unconscious for 1 minute.',
                minCR: 0
            },
            {
                name: 'False Appearance',
                description: 'While the {name} remains motionless, it is indistinguishable from {appearance}.',
                minCR: 0
            },
            {
                name: 'Bound',
                description: 'The {name} is magically bound to {object}. As long as the {name} and {object} are on the same plane of existence, the {name} can be summoned to any location within 5 feet of it.',
                minCR: 3
            },
            {
                name: 'Regeneration',
                description: 'The {name} regains {healing} hit points at the start of its turn if it has at least 1 hit point.',
                minCR: 5
            }
        ],

        dragon: [
            {
                name: 'Legendary Resistance',
                uses: 3,
                description: 'If the {name} fails a saving throw, it can choose to succeed instead.',
                minCR: 8
            },
            {
                name: 'Frightful Presence',
                description: 'Each creature of the {name}\'s choice that is within {range} feet of the {name} and aware of it must succeed on a DC {dc} Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.',
                minCR: 5
            },
            {
                name: 'Magic Resistance',
                description: 'The {name} has advantage on saving throws against spells and other magical effects.',
                minCR: 8
            },
            {
                name: 'Amphibious',
                description: 'The {name} can breathe air and water.',
                minCR: 0
            },
            {
                name: 'Innate Spellcasting',
                description: 'The {name}\'s innate spellcasting ability is Charisma (spell save DC {dc}). It can innately cast the following spells, requiring no material components:',
                minCR: 7
            },
            {
                name: 'Shape Change',
                description: 'The {name} can use its action to polymorph into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form.',
                minCR: 10
            },
            {
                name: 'Damage Absorption',
                description: 'Whenever the {name} is subjected to {damageType} damage, it takes no damage and instead regains a number of hit points equal to the {damageType} damage dealt.',
                minCR: 10
            }
        ],

        elemental: [
            {
                name: 'Elemental Nature',
                description: 'The {name} doesn\'t require air, food, drink, or sleep.',
                minCR: 0
            },
            {
                name: 'Water Form',
                description: 'The {name} can enter a hostile creature\'s space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.',
                minCR: 3
            },
            {
                name: 'Air Form',
                description: 'The {name} can enter a hostile creature\'s space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.',
                minCR: 3
            },
            {
                name: 'Earth Glide',
                description: 'The {name} can burrow through nonmagical, unworked earth and stone. While doing so, the {name} doesn\'t disturb the material it moves through.',
                minCR: 3
            },
            {
                name: 'Fire Form',
                description: 'The {name} can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the {name} or hits it with a melee attack while within 5 feet of it takes {damage} fire damage. In addition, the {name} can enter a hostile creature\'s space and stop there. The first time it enters a creature\'s space on a turn, that creature takes {damage} fire damage and catches fire.',
                minCR: 3
            },
            {
                name: 'Freeze',
                description: 'If the {name} takes cold damage, it partially freezes; its speed is reduced by 20 feet until the end of its next turn.',
                minCR: 0
            },
            {
                name: 'Illumination',
                description: 'The {name} sheds bright light in a {brightRadius}-foot radius and dim light for an additional {dimRadius} feet.',
                minCR: 0
            },
            {
                name: 'Siege Monster',
                description: 'The {name} deals double damage to objects and structures.',
                minCR: 5
            }
        ],

        fey: [
            {
                name: 'Fey Ancestry',
                description: 'The {name} has advantage on saving throws against being charmed, and magic can\'t put the {name} to sleep.',
                minCR: 0
            },
            {
                name: 'Magic Resistance',
                description: 'The {name} has advantage on saving throws against spells and other magical effects.',
                minCR: 3
            },
            {
                name: 'Innate Spellcasting',
                description: 'The {name}\'s innate spellcasting ability is Charisma (spell save DC {dc}). It can innately cast the following spells, requiring no material components:',
                minCR: 1
            },
            {
                name: 'Speak with Beasts and Plants',
                description: 'The {name} can communicate with beasts and plants as if they shared a language.',
                minCR: 0
            },
            {
                name: 'Tree Stride',
                description: 'Once on its turn, the {name} can use 10 feet of its movement to step magically into one living tree within its reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree.',
                minCR: 2
            },
            {
                name: 'Invisible Passage',
                description: 'The {name} magically turns invisible until it attacks, casts a spell, or until its concentration ends. Any equipment the {name} wears or carries is invisible with it.',
                minCR: 1
            },
            {
                name: 'Shapechanger',
                description: 'The {name} can use its action to polymorph into a {forms}, or back into its true form. Its statistics, other than its size, are the same in each form.',
                minCR: 2
            },
            {
                name: 'Heart Sight',
                description: 'The {name} touches a creature and magically knows the creature\'s current emotional state. If the target fails a DC {dc} Charisma saving throw, the {name} also knows the creature\'s alignment.',
                minCR: 1
            }
        ],

        fiend: [
            {
                name: 'Devil\'s Sight',
                description: 'Magical darkness doesn\'t impede the {name}\'s darkvision.',
                minCR: 0
            },
            {
                name: 'Magic Resistance',
                description: 'The {name} has advantage on saving throws against spells and other magical effects.',
                minCR: 3
            },
            {
                name: 'Magic Weapons',
                description: 'The {name}\'s weapon attacks are magical.',
                minCR: 3
            },
            {
                name: 'Hellish Rejuvenation',
                description: 'If the {name} dies outside the Nine Hells, its body reforms in the Nine Hells in {time}.',
                minCR: 8
            },
            {
                name: 'Innate Spellcasting',
                description: 'The {name}\'s innate spellcasting ability is Charisma (spell save DC {dc}). It can innately cast the following spells, requiring no material components:',
                minCR: 3
            },
            {
                name: 'Fear Aura',
                description: 'Any creature hostile to the {name} that starts its turn within {range} feet must make a DC {dc} Wisdom saving throw, unless the {name} is incapacitated. On a failed save, the creature is frightened until the start of its next turn.',
                minCR: 5
            },
            {
                name: 'Telepathic Bond',
                description: 'The {name} ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don\'t even need to be on the same plane of existence.',
                minCR: 5
            },
            {
                name: 'Shapechanger',
                description: 'The {name} can use its action to polymorph into {forms}, or back into its true form. Its statistics are the same in each form.',
                minCR: 4
            }
        ],

        giant: [
            {
                name: 'Keen Smell',
                description: 'The {name} has advantage on Wisdom (Perception) checks that rely on smell.',
                minCR: 0
            },
            {
                name: 'Stone Camouflage',
                description: 'The {name} has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.',
                minCR: 0
            },
            {
                name: 'Rock Catching',
                description: 'If a rock or similar object is hurled at the {name}, the {name} can, with a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it.',
                minCR: 5
            },
            {
                name: 'Siege Monster',
                description: 'The {name} deals double damage to objects and structures.',
                minCR: 5
            },
            {
                name: 'Innate Spellcasting',
                description: 'The {name}\'s innate spellcasting ability is Charisma (spell save DC {dc}). It can innately cast the following spells, requiring no material components:',
                minCR: 7
            },
            {
                name: 'Amphibious',
                description: 'The {name} can breathe air and water.',
                minCR: 0
            },
            {
                name: 'Two Heads',
                description: 'The {name} has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.',
                minCR: 4
            }
        ],

        humanoid: [
            {
                name: 'Brave',
                description: 'The {name} has advantage on saving throws against being frightened.',
                minCR: 0
            },
            {
                name: 'Cunning Action',
                description: 'On each of its turns, the {name} can use a bonus action to take the Dash, Disengage, or Hide action.',
                minCR: 1
            },
            {
                name: 'Sneak Attack',
                description: 'Once per turn, the {name} deals an extra {damage} damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the {name} that isn\'t incapacitated and the {name} doesn\'t have disadvantage on the attack roll.',
                minCR: 1
            },
            {
                name: 'Pack Tactics',
                description: 'The {name} has advantage on an attack roll against a creature if at least one of the {name}\'s allies is within 5 feet of the creature and the ally isn\'t incapacitated.',
                minCR: 0
            },
            {
                name: 'Martial Advantage',
                description: 'Once per turn, the {name} can deal an extra {damage} damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the {name} that isn\'t incapacitated.',
                minCR: 1
            },
            {
                name: 'Leadership',
                recharge: 'Short Rest',
                description: 'For 1 minute, the {name} can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the {name}.',
                minCR: 2
            },
            {
                name: 'Parry',
                description: 'The {name} adds {bonus} to its AC against one melee attack that would hit it. To do so, the {name} must see the attacker and be wielding a melee weapon.',
                minCR: 1
            },
            {
                name: 'Nimble Escape',
                description: 'The {name} can take the Disengage or Hide action as a bonus action on each of its turns.',
                minCR: 0
            },
            {
                name: 'Sunlight Sensitivity',
                description: 'While in sunlight, the {name} has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.',
                minCR: 0
            }
        ],

        monstrosity: [
            {
                name: 'Keen Senses',
                description: 'The {name} has advantage on Wisdom (Perception) checks that rely on sight and smell.',
                minCR: 0
            },
            {
                name: 'Pounce',
                description: 'If the {name} moves at least {distance} feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC {dc} Strength saving throw or be knocked prone.',
                minCR: 1
            },
            {
                name: 'Rampage',
                description: 'When the {name} reduces a creature to 0 hit points with a melee attack on its turn, the {name} can take a bonus action to move up to half its speed and make a bite attack.',
                minCR: 2
            },
            {
                name: 'Petrifying Gaze',
                description: 'If a creature starts its turn within 30 feet of the {name} and the two of them can see each other, the {name} can force the creature to make a DC {dc} Constitution saving throw if the {name} isn\'t incapacitated. On a failed save, the creature is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified.',
                minCR: 6
            },
            {
                name: 'Flyby',
                description: 'The {name} doesn\'t provoke opportunity attacks when it flies out of an enemy\'s reach.',
                minCR: 1
            },
            {
                name: 'Blood Frenzy',
                description: 'The {name} has advantage on melee attack rolls against any creature that doesn\'t have all its hit points.',
                minCR: 1
            },
            {
                name: 'Mimicry',
                description: 'The {name} can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC {dc} Wisdom (Insight) check.',
                minCR: 0
            },
            {
                name: 'Tunneler',
                description: 'The {name} can burrow through solid rock at half its burrow speed and leaves a {size}-foot-diameter tunnel in its wake.',
                minCR: 5
            }
        ],

        ooze: [
            {
                name: 'Amorphous',
                description: 'The {name} can move through a space as narrow as 1 inch wide without squeezing.',
                minCR: 0
            },
            {
                name: 'Corrosive Form',
                description: 'A creature that touches the {name} or hits it with a melee attack while within 5 feet of it takes {damage} acid damage. Any nonmagical weapon made of metal or wood that hits the {name} corrodes.',
                minCR: 2
            },
            {
                name: 'False Appearance',
                description: 'While the {name} remains motionless, it is indistinguishable from {appearance}.',
                minCR: 0
            },
            {
                name: 'Spider Climb',
                description: 'The {name} can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.',
                minCR: 0
            },
            {
                name: 'Split',
                description: 'When a {name} that is Medium or larger is subjected to lightning or slashing damage, it splits into two new {name}s if it has at least 10 hit points. Each new {name} has hit points equal to half the original\'s, rounded down.',
                minCR: 2
            },
            {
                name: 'Transparent',
                description: 'Even when the {name} is in plain sight, it takes a successful DC {dc} Wisdom (Perception) check to spot a {name} that has neither moved nor attacked. A creature that tries to enter the {name}\'s space while unaware of the {name} is surprised.',
                minCR: 2
            },
            {
                name: 'Engulf',
                description: 'The {name} moves up to its speed. While doing so, it can enter Large or smaller creatures\' spaces. Whenever the {name} enters a creature\'s space, the creature must make a DC {dc} Dexterity saving throw.',
                minCR: 3
            }
        ],

        plant: [
            {
                name: 'False Appearance',
                description: 'While the {name} remains motionless, it is indistinguishable from {appearance}.',
                minCR: 0
            },
            {
                name: 'Regeneration',
                description: 'The {name} regains {healing} hit points at the start of its turn. If the {name} takes fire damage, this trait doesn\'t function at the start of the {name}\'s next turn.',
                minCR: 3
            },
            {
                name: 'Fire Vulnerability',
                description: 'The {name} has vulnerability to fire damage.',
                minCR: 0
            },
            {
                name: 'Lightning Absorption',
                description: 'Whenever the {name} is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt.',
                minCR: 5
            },
            {
                name: 'Siege Monster',
                description: 'The {name} deals double damage to objects and structures.',
                minCR: 5
            },
            {
                name: 'Speak with Plants',
                description: 'The {name} can communicate with plants as if they shared a language.',
                minCR: 0
            },
            {
                name: 'Tree Stride',
                description: 'Once on its turn, the {name} can use 10 feet of its movement to step magically into one living tree within its reach and emerge from a second living tree within 60 feet of the first tree.',
                minCR: 3
            },
            {
                name: 'Animate Trees',
                recharge: 'Long Rest',
                description: 'The {name} magically animates {count} trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1.',
                minCR: 9
            }
        ],

        undead: [
            {
                name: 'Undead Fortitude',
                description: 'If damage reduces the {name} to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the {name} drops to 1 hit point instead.',
                minCR: 1
            },
            {
                name: 'Turn Resistance',
                description: 'The {name} has advantage on saving throws against any effect that turns undead.',
                minCR: 3
            },
            {
                name: 'Sunlight Sensitivity',
                description: 'While in sunlight, the {name} has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.',
                minCR: 0
            },
            {
                name: 'Regeneration',
                description: 'The {name} regains {healing} hit points at the start of its turn. If the {name} takes radiant damage or damage from holy water, this trait doesn\'t function at the start of the {name}\'s next turn.',
                minCR: 5
            },
            {
                name: 'Incorporeal Movement',
                description: 'The {name} can move through other creatures and objects as if they were difficult terrain. It takes {damage} force damage if it ends its turn inside an object.',
                minCR: 4
            },
            {
                name: 'Shadow Stealth',
                description: 'While in dim light or darkness, the {name} can take the Hide action as a bonus action.',
                minCR: 1
            },
            {
                name: 'Life Drain',
                description: 'The target\'s hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.',
                minCR: 4
            },
            {
                name: 'Create Spawn',
                description: 'A humanoid slain by the {name} rises {time} later as a {spawnType} under the {name}\'s control, unless the humanoid is restored to life or its body is destroyed.',
                minCR: 5
            },
            {
                name: 'Rejuvenation',
                description: 'If the {name} is destroyed, it regains all its hit points in {time} unless {condition}.',
                minCR: 8
            }
        ]
    },

    /**
     * Get abilities for a creature type scaled to CR
     */
    getAbilitiesForType(type, cr, count = 2) {
        const typeAbilities = this.byType[type] || [];
        const validAbilities = typeAbilities.filter(a => a.minCR <= cr);

        if (validAbilities.length === 0) return [];

        // Shuffle and take 'count' abilities
        const shuffled = [...validAbilities].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, shuffled.length));
    },

    /**
     * Get universal abilities scaled to CR
     */
    getUniversalAbilities(cr) {
        return this.universal.filter(a => a.minCR <= cr);
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AbilitiesData;
}
