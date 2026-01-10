/**
 * D&D 5e Legendary, Mythic, and Lair Actions Data
 */

const LegendaryData = {
    /**
     * Legendary action templates by monster type
     */
    legendaryActions: {
        universal: [
            { name: 'Detect', cost: 1, description: 'The {name} makes a Wisdom (Perception) check.' },
            { name: 'Move', cost: 1, description: 'The {name} moves up to half its speed without provoking opportunity attacks.' },
            { name: 'Attack', cost: 2, description: 'The {name} makes one attack.' }
        ],
        aberration: [
            { name: 'Tentacle', cost: 1, description: 'The {name} makes one tentacle attack.' },
            { name: 'Mind Blast (Costs 2 Actions)', cost: 2, description: 'The {name} uses its Mind Blast if available.' },
            { name: 'Psychic Pulse', cost: 1, description: 'Each creature within 20 feet must succeed on a DC {dc} Intelligence saving throw or take {damage} psychic damage.' },
            { name: 'Warp Reality', cost: 2, description: 'The {name} teleports up to 60 feet to an unoccupied space it can see.' },
            { name: 'Dominate', cost: 3, description: 'The {name} targets one creature it can see within 60 feet. The target must succeed on a DC {dc} Wisdom saving throw or be charmed until the end of its next turn.' }
        ],
        beast: [
            { name: 'Pounce', cost: 1, description: 'The {name} moves up to its speed toward a creature and makes one attack.' },
            { name: 'Savage', cost: 2, description: 'The {name} makes two melee attacks.' },
            { name: 'Roar', cost: 1, description: 'Each creature within 30 feet must succeed on a DC {dc} Wisdom saving throw or be frightened until the end of its next turn.' }
        ],
        celestial: [
            { name: 'Healing Touch (Costs 2 Actions)', cost: 2, description: 'The {name} touches another creature. The target magically regains 20 hit points.' },
            { name: 'Blinding Gaze', cost: 1, description: 'The {name} targets one creature within 30 feet. The target must succeed on a DC {dc} Constitution saving throw or be blinded until the end of its next turn.' },
            { name: 'Teleport', cost: 1, description: 'The {name} teleports up to 120 feet to an unoccupied space it can see.' },
            { name: 'Searing Burst (Costs 2 Actions)', cost: 2, description: 'Each creature within 10 feet must succeed on a DC {dc} Dexterity saving throw or take {damage} radiant damage.' }
        ],
        construct: [
            { name: 'Stomp', cost: 1, description: 'The {name} makes a slam attack against a creature within reach that is prone.' },
            { name: 'Repair (Costs 2 Actions)', cost: 2, description: 'The {name} regains 20 hit points.' },
            { name: 'Overcharge', cost: 2, description: 'The {name}\'s next attack deals an extra {damage} damage.' }
        ],
        dragon: [
            { name: 'Detect', cost: 1, description: 'The {name} makes a Wisdom (Perception) check.' },
            { name: 'Tail Attack', cost: 1, description: 'The {name} makes a tail attack.' },
            { name: 'Wing Attack (Costs 2 Actions)', cost: 2, description: 'The {name} beats its wings. Each creature within 15 feet must succeed on a DC {dc} Dexterity saving throw or take {damage} bludgeoning damage and be knocked prone. The {name} can then fly up to half its flying speed.' },
            { name: 'Frightful Presence', cost: 1, description: 'Each creature within 120 feet must succeed on a DC {dc} Wisdom saving throw or become frightened for 1 minute.' }
        ],
        elemental: [
            { name: 'Elemental Burst', cost: 1, description: 'Each creature within 10 feet must succeed on a DC {dc} Constitution saving throw or take {damage} elemental damage.' },
            { name: 'Reform', cost: 2, description: 'If the {name} has at least 1 hit point, it regains 15 hit points.' },
            { name: 'Engulf (Costs 2 Actions)', cost: 2, description: 'The {name} moves up to its speed. While doing so, it can enter Medium or smaller creatures\' spaces.' }
        ],
        fey: [
            { name: 'Charm', cost: 1, description: 'The {name} targets one creature within 30 feet. The target must succeed on a DC {dc} Wisdom saving throw or be charmed until the end of its next turn.' },
            { name: 'Misty Step', cost: 1, description: 'The {name} teleports up to 30 feet to an unoccupied space it can see.' },
            { name: 'Confusing Gaze (Costs 2 Actions)', cost: 2, description: 'The {name} targets one creature within 30 feet. The target must succeed on a DC {dc} Wisdom saving throw or use its reaction to move up to its speed in a random direction.' }
        ],
        fiend: [
            { name: 'Claw', cost: 1, description: 'The {name} makes one claw attack.' },
            { name: 'Teleport', cost: 1, description: 'The {name} teleports up to 120 feet to an unoccupied space it can see.' },
            { name: 'Fire Breath (Costs 2 Actions)', cost: 2, description: 'The {name} exhales fire in a 30-foot cone. Each creature in that area must succeed on a DC {dc} Dexterity saving throw or take {damage} fire damage.' },
            { name: 'Corruption', cost: 2, description: 'The {name} targets one creature within 30 feet. The target must succeed on a DC {dc} Charisma saving throw or have disadvantage on attack rolls and ability checks until the end of its next turn.' }
        ],
        giant: [
            { name: 'Attack', cost: 1, description: 'The {name} makes one weapon attack.' },
            { name: 'Rock', cost: 2, description: 'The {name} hurls a rock at a creature it can see within 60 feet.' },
            { name: 'Stomp', cost: 1, description: 'The {name} stomps. Each creature within 10 feet must succeed on a DC {dc} Dexterity saving throw or take {damage} bludgeoning damage and be knocked prone.' }
        ],
        humanoid: [
            { name: 'Attack', cost: 1, description: 'The {name} makes one weapon attack.' },
            { name: 'Move', cost: 1, description: 'The {name} moves up to half its speed without provoking opportunity attacks.' },
            { name: 'Command Ally', cost: 1, description: 'The {name} targets one ally within 30 feet. That ally can use its reaction to make one weapon attack.' },
            { name: 'Parry', cost: 1, description: 'The {name} adds its proficiency bonus to its AC against one melee attack that would hit it.' }
        ],
        monstrosity: [
            { name: 'Bite', cost: 1, description: 'The {name} makes one bite attack.' },
            { name: 'Tail Swipe', cost: 1, description: 'The {name} makes a tail attack.' },
            { name: 'Petrifying Gaze (Costs 2 Actions)', cost: 2, description: 'The {name} uses its petrifying gaze if available.' },
            { name: 'Charge', cost: 2, description: 'The {name} moves up to its speed and makes one attack. If it moved at least 20 feet, the attack deals an extra {damage} damage.' }
        ],
        ooze: [
            { name: 'Pseudopod', cost: 1, description: 'The {name} makes one pseudopod attack.' },
            { name: 'Split', cost: 2, description: 'If the {name} has at least 10 hit points, it splits into two new oozes.' },
            { name: 'Engulf', cost: 2, description: 'The {name} moves up to its speed. It can enter the space of any Medium or smaller creature.' }
        ],
        plant: [
            { name: 'Vine', cost: 1, description: 'The {name} makes one vine attack.' },
            { name: 'Spore Cloud (Costs 2 Actions)', cost: 2, description: 'The {name} releases spores. Each creature within 20 feet must succeed on a DC {dc} Constitution saving throw or be poisoned for 1 minute.' },
            { name: 'Regenerate', cost: 1, description: 'The {name} regains 10 hit points if it has at least 1 hit point.' }
        ],
        undead: [
            { name: 'Attack', cost: 1, description: 'The {name} makes one weapon attack.' },
            { name: 'Move', cost: 1, description: 'The {name} moves up to half its speed without provoking opportunity attacks.' },
            { name: 'Life Drain (Costs 2 Actions)', cost: 2, description: 'The {name} uses its life drain if available.' },
            { name: 'Frightening Glare', cost: 1, description: 'The {name} targets one creature within 30 feet. The target must succeed on a DC {dc} Wisdom saving throw or be frightened until the end of its next turn.' },
            { name: 'Disrupt Life (Costs 3 Actions)', cost: 3, description: 'Each living creature within 20 feet must succeed on a DC {dc} Constitution saving throw or take {damage} necrotic damage.' }
        ]
    },

    /**
     * Mythic traits by type
     */
    mythicTraits: {
        universal: {
            name: 'Mythic Resilience',
            description: 'If {Name} is reduced to 0 hit points, it doesn\'t die or fall unconscious. Instead, it regains {hp} hit points, and its mythic trait becomes active. While its mythic trait is active, {Name} gains access to additional legendary actions.'
        },
        dragon: {
            name: 'Draconic Rebirth',
            description: 'If {Name} is reduced to 0 hit points, it doesn\'t die or fall unconscious. Instead, the damage creates a massive explosion of elemental energy. Each creature within 60 feet must make a DC {dc} Dexterity saving throw, taking {damage} damage on a failed save. {Name} then regains {hp} hit points, and its scales begin to glow with inner fire.'
        },
        fiend: {
            name: 'Infernal Resurrection',
            description: 'If {Name} is reduced to 0 hit points, it doesn\'t die. Instead, its form dissolves into hellfire and reforms at the start of its next turn with {hp} hit points. While in this state, {Name} can\'t be targeted by any attack or spell.'
        },
        celestial: {
            name: 'Divine Intervention',
            description: 'If {Name} is reduced to 0 hit points, divine power floods through it. Each hostile creature within 30 feet takes {damage} radiant damage. {Name} regains {hp} hit points, and for the next minute, its attacks deal an extra 2d6 radiant damage.'
        },
        undead: {
            name: 'Undying Will',
            description: 'If {Name} is reduced to 0 hit points, necrotic energy erupts from its form. Each creature within 20 feet must succeed on a DC {dc} Constitution saving throw or take {damage} necrotic damage and gain one level of exhaustion. {Name} then regains {hp} hit points.'
        }
    },

    /**
     * Mythic actions (available after mythic trait triggers)
     */
    mythicActions: {
        universal: [
            { name: 'Devastating Strike (Costs 2 Actions)', cost: 2, description: 'The {name} makes one attack that deals an extra {damage} damage on a hit.' },
            { name: 'Rally', cost: 1, description: 'The {name} regains 20 hit points and ends one condition affecting it.' },
            { name: 'Empowered Ability (Costs 3 Actions)', cost: 3, description: 'The {name} uses one of its special abilities. This use doesn\'t count against daily or recharge limits.' }
        ],
        dragon: [
            { name: 'Cataclysmic Breath (Costs 3 Actions)', cost: 3, description: 'The {name} uses its breath weapon in a 120-foot cone. This use ignores the recharge requirement.' },
            { name: 'Ancient Fury', cost: 2, description: 'The {name} makes three attacks instead of one.' },
            { name: 'Draconic Roar', cost: 1, description: 'Each creature within 60 feet that can hear the {name} must succeed on a DC {dc} Wisdom saving throw or be frightened and deafened until the end of its next turn.' }
        ],
        fiend: [
            { name: 'Infernal Blast (Costs 2 Actions)', cost: 2, description: 'The {name} releases a wave of hellfire. Each creature within 30 feet must succeed on a DC {dc} Dexterity saving throw or take {damage} fire damage.' },
            { name: 'Corrupt Soul (Costs 3 Actions)', cost: 3, description: 'The {name} targets one creature within 60 feet. The target must succeed on a DC {dc} Charisma saving throw or be dominated as if by the dominate person spell until the end of its next turn.' }
        ],
        celestial: [
            { name: 'Divine Smite (Costs 2 Actions)', cost: 2, description: 'The {name}\'s next attack deals an extra {damage} radiant damage and the target must succeed on a DC {dc} Constitution saving throw or be blinded for 1 minute.' },
            { name: 'Mass Heal (Costs 3 Actions)', cost: 3, description: 'Each ally within 60 feet regains 30 hit points.' }
        ],
        undead: [
            { name: 'Death Knell (Costs 2 Actions)', cost: 2, description: 'Each creature within 30 feet that has 50 hit points or fewer must succeed on a DC {dc} Constitution saving throw or drop to 0 hit points.' },
            { name: 'Army of the Dead (Costs 3 Actions)', cost: 3, description: 'The {name} summons 2d4 skeletons or zombies that appear in unoccupied spaces within 60 feet.' }
        ]
    },

    /**
     * Lair actions by monster type
     */
    lairActions: {
        aberration: [
            { description: 'The {name} creates a zone of madness in a 20-foot radius centered on a point it can see within 120 feet. Each creature in that area must succeed on a DC {dc} Wisdom saving throw or use its reaction to make a melee attack against a randomly determined creature within reach.' },
            { description: 'Walls of the lair sprout grasping tentacles. Each creature within 10 feet of a wall must succeed on a DC {dc} Dexterity saving throw or be restrained until initiative count 20 on the next round.' },
            { description: 'The {name} targets one creature it can see within 60 feet. The target must succeed on a DC {dc} Intelligence saving throw or take {damage} psychic damage and be stunned until initiative count 20 on the next round.' }
        ],
        dragon: [
            { description: 'Magma erupts from a point the {name} can see within 120 feet, creating a 20-foot-high, 5-foot-radius geyser. Each creature in the area must succeed on a DC {dc} Dexterity saving throw or take {damage} fire damage.' },
            { description: 'A tremor shakes the lair. Each creature on the ground must succeed on a DC {dc} Dexterity saving throw or be knocked prone.' },
            { description: 'Volcanic gases form a cloud in a 20-foot-radius sphere centered on a point the {name} can see within 120 feet. The sphere spreads around corners. Each creature that starts its turn in the cloud must succeed on a DC {dc} Constitution saving throw or be poisoned until the end of its turn.' }
        ],
        fiend: [
            { description: 'The {name} causes flames to erupt from a point it can see within 120 feet. Each creature within 10 feet of that point must succeed on a DC {dc} Dexterity saving throw or take {damage} fire damage.' },
            { description: 'The ground in a 20-foot radius centered on a point the {name} can see within 120 feet becomes difficult terrain as chains erupt from below. Any creature that starts its turn in the area must succeed on a DC {dc} Strength saving throw or be restrained until initiative count 20 on the next round.' },
            { description: 'One creature the {name} can see within 60 feet must succeed on a DC {dc} Charisma saving throw or be pulled up to 30 feet toward the {name}.' }
        ],
        undead: [
            { description: 'The {name} targets one corpse within 120 feet that it can see. The corpse rises as a skeleton or zombie (the {name}\'s choice) at initiative count 20, losing initiative ties, and acts as the {name}\'s ally.' },
            { description: 'The {name} targets one creature within 60 feet. The target must succeed on a DC {dc} Constitution saving throw or be cursed. While cursed, the target can\'t regain hit points.' },
            { description: 'A cold wind blows through the lair. Each creature the {name} can see within 60 feet must succeed on a DC {dc} Constitution saving throw or take {damage} cold damage. A creature that fails this save by 5 or more is also paralyzed until initiative count 20 on the next round.' }
        ],
        elemental: [
            { description: 'The element of the lair surges. Each creature within 20 feet of a wall, floor, or ceiling must succeed on a DC {dc} Dexterity saving throw or take {damage} damage of the lair\'s elemental type.' },
            { description: 'The {name} creates a vortex in a 30-foot cube centered on a point it can see within 60 feet. Each creature in that area must succeed on a DC {dc} Strength saving throw or be pulled 20 feet toward the center of the cube.' },
            { description: 'The lair fills with elemental energy. Until initiative count 20 on the next round, all creatures other than the {name} have disadvantage on saving throws against the {name}\'s abilities.' }
        ],
        fey: [
            { description: 'The {name} creates a magical light. One creature it can see within 60 feet must succeed on a DC {dc} Wisdom saving throw or be charmed until initiative count 20 on the next round.' },
            { description: 'The lair shifts and changes. The {name} and up to three creatures of its choice teleport up to 60 feet to unoccupied spaces of the {name}\'s choice.' },
            { description: 'Thick fog fills a 20-foot radius sphere centered on a point the {name} can see within 60 feet. The sphere spreads around corners, and its area is heavily obscured. It lasts until initiative count 20 on the next round.' }
        ],
        giant: [
            { description: 'The {name} causes boulders to fall from the ceiling. Each creature in a 20-foot-radius area must succeed on a DC {dc} Dexterity saving throw or take {damage} bludgeoning damage and be knocked prone.' },
            { description: 'The ground shakes violently. Each creature standing on the ground must succeed on a DC {dc} Strength saving throw or fall prone.' },
            { description: 'The {name} causes a wall section to collapse. Each creature within 20 feet of the wall must succeed on a DC {dc} Dexterity saving throw or take {damage} bludgeoning damage.' }
        ],
        monstrosity: [
            { description: 'The {name} causes the terrain in a 20-foot square it can see within 120 feet to become difficult terrain until initiative count 20 on the next round.' },
            { description: 'The {name}\'s presence causes fear. Each creature within 60 feet must succeed on a DC {dc} Wisdom saving throw or be frightened until initiative count 20 on the next round.' },
            { description: 'The {name} targets one creature it can see within 60 feet. The target must succeed on a DC {dc} Constitution saving throw or be poisoned until initiative count 20 on the next round.' }
        ],
        celestial: [
            { description: 'Healing light fills the lair. The {name} and up to three creatures of its choice within 60 feet regain 15 hit points.' },
            { description: 'A beam of radiant energy strikes a point the {name} can see within 120 feet. Each creature within 10 feet of that point must succeed on a DC {dc} Dexterity saving throw or take {damage} radiant damage.' },
            { description: 'The {name} dispels one spell of 5th level or lower affecting a creature or object it can see within 60 feet.' }
        ]
    },

    /**
     * Get legendary actions for a type
     */
    getLegendaryActions(type, cr, count = 3) {
        const typeActions = this.legendaryActions[type] || [];
        const universalActions = this.legendaryActions.universal;

        // Combine type-specific and universal actions
        const allActions = [...typeActions, ...universalActions];

        // Shuffle and select
        const shuffled = [...allActions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count + 1, shuffled.length));
    },

    /**
     * Get mythic trait for a type
     */
    getMythicTrait(type, cr) {
        const typeTrait = this.mythicTraits[type] || this.mythicTraits.universal;
        return typeTrait;
    },

    /**
     * Get mythic actions for a type
     */
    getMythicActions(type, cr, count = 3) {
        const typeActions = this.mythicActions[type] || [];
        const universalActions = this.mythicActions.universal;

        const allActions = [...typeActions, ...universalActions];
        const shuffled = [...allActions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, shuffled.length));
    },

    /**
     * Get lair actions for a type
     */
    getLairActions(type, cr, count = 3) {
        const typeActions = this.lairActions[type] || this.lairActions.monstrosity;
        const shuffled = [...typeActions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LegendaryData;
}
