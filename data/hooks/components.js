/**
 * Hook Components Data for Quest Hook Generator
 * Catalysts, Complications, Stakes, Loot Teasers, and Moral Dilemmas
 */

const HookComponents = {
    /**
     * Catalysts - What draws the players in
     * Organized by category for variety
     */
    catalysts: {
        noticeBoard: [
            'A weathered bounty notice, the ink still wet from being re-posted for the dozenth time',
            'A desperate plea written in a child\'s handwriting, pinned beneath other notices',
            'An official guild contract with an unusually high reward and few details',
            'A torn notice that only shows half the message—the other half was ripped away',
            'A notice written in blood on human skin, appearing overnight',
            'A bounty that matches the description of someone the party just met',
            'An ancient notice that no one remembers posting, sealed with an extinct noble\'s crest',
            'A notice offering reward for information, not action—someone is hunting the hunters'
        ],
        dyingNpc: [
            'A courier collapses at the party\'s feet, whispering coordinates before dying',
            'A former adventurer, gut-wound fresh, begs the party to finish what they started',
            'A child stumbles from the wilderness, speaking of horrors before falling unconscious',
            'A doppelganger dies in the party\'s arms, reverting to its true form mid-sentence',
            'A ghostly figure manifests, re-living their final moments on loop until acknowledged',
            'A merchant dies mid-transaction, their last words a warning about their cargo',
            'An assassin, poisoned by their own employer, offers secrets for a merciful end',
            'A soldier from a forgotten war staggers in, speaking of enemies that should be long dead'
        ],
        strangeOmen: [
            'Animals flee the region in unnatural silence, leaving an eerie calm',
            'The stars rearrange themselves into a symbol the party\'s wizard recognizes',
            'A solar eclipse occurs weeks ahead of schedule, lasting exactly thirteen minutes',
            'All mirrors in the area show the same reflection—someone who isn\'t there',
            'Every sleeper in town shares the same nightmare, waking with identical wounds',
            'Rain falls upward for one hour, carrying whispers in a dead language',
            'A comet appears that matches an ancient prophecy the cleric knows',
            'All fires in the region burn a sickly green for three nights'
        ],
        personalConnection: [
            'A letter arrives bearing the seal of a relative thought long dead',
            'The party discovers their employer is actually someone from their past, disguised',
            'A bounty is posted for a party member\'s childhood friend',
            'An inheritance arrives—a deed to property in a place of dark reputation',
            'A party member\'s old mentor sends a cryptic warning after years of silence',
            'Someone is murdering people connected to a party member\'s backstory',
            'A debt comes due that a party member\'s family incurred generations ago',
            'The party member\'s family crest appears on artifacts from an ancient evil cult'
        ],
        discovered: [
            'During a routine dungeon clear, the party finds evidence of something far worse below',
            'A pickpocket returns the party\'s stolen goods with a note: "You\'ll need these"',
            'The party stumbles upon a massacre with a single, too-convenient survivor',
            'A map falls from a slain enemy revealing their true mission',
            'While camping, the party overhears conspirators who don\'t know they\'re not alone',
            'A purchased item turns out to be a key—and someone wants it back badly',
            'The party witnesses an event they weren\'t meant to see and are now targets',
            'Deciphering an old text reveals the party\'s current location has a dark history'
        ],
        supernatural: [
            'A patron deity sends a vision demanding action, threatening withdrawal of favor',
            'A cursed item in the party\'s possession begins compelling them toward a location',
            'The party is summoned through a portal by a desperate mage mid-ritual',
            'A ghost possesses a party member briefly to deliver an urgent message',
            'Prophetic dreams plague the party, growing more vivid and painful each night',
            'A dying god\'s whisper reaches the party, begging for champions',
            'The party\'s shadows begin acting independently, pointing toward danger',
            'A magical tattoo appears on a party member overnight, pulling them somewhere'
        ],
        authority: [
            'The local lord demands the party investigate or face imprisonment',
            'A guild the party belongs to calls in a long-standing favor',
            'The crown offers a pardon for past crimes in exchange for one mission',
            'A temple hierarchy assigns a sacred duty that cannot be refused',
            'Military conscription is enforced—the party must serve or flee',
            'A powerful mage offers payment in forbidden knowledge',
            'The party is deputized during an emergency with authority they didn\'t ask for',
            'An ancient pact made by a party member\'s ancestor binds them to service'
        ]
    },

    /**
     * Complications - Twists that make the quest harder
     * Organized by type for mixing and matching
     */
    complications: {
        betrayal: [
            'The quest giver is actually the villain, using the party to eliminate rivals',
            'An ally switches sides when the enemy offers something they desperately need',
            'The "victim" they\'re rescuing is the true mastermind',
            'Their employer planned for them to fail all along—they\'re a distraction',
            'A party member\'s contact sold them out before the mission began',
            'The reward was a lie; the real payment was always their deaths',
            'The enemy knows every detail of their plan from an inside source',
            'The "ancient evil" they\'re hunting was summoned by their employer'
        ],
        moralGray: [
            'The monster is intelligent and begging for mercy, with a sympathetic reason for its crimes',
            'Destroying the target will doom an innocent population that depends on it',
            'The "villain" is fighting against something far worse than themselves',
            'Success requires sacrificing something precious—but whose sacrifice?',
            'The enemy offers a better deal than the party\'s employer',
            'The "rescue target" doesn\'t want to be saved and will fight the party',
            'Completing the mission means breaking a sacred oath or law',
            'The party must choose which of two innocent groups survives'
        ],
        escalation: [
            'The enemy was a scout—the main force arrives mid-mission',
            'Killing the target triggers a deadman\'s switch releasing something worse',
            'The problem is a symptom; the disease is far more dangerous',
            'Victory attracts attention from powers that dwarf the original threat',
            'The enemy has allies the party didn\'t know about, and they\'re angry',
            'What seemed like a local problem is actually a regional conspiracy',
            'The timeline accelerates—what they had weeks to do must happen in hours',
            'A third faction arrives, hostile to everyone'
        ],
        environmental: [
            'A natural disaster strikes mid-mission, trapping everyone together',
            'The location is collapsing/sinking/burning with everyone inside',
            'Magical contamination is spreading, transforming the landscape',
            'The path back is destroyed—they must find another way out',
            'Day/night cycle is corrupted, affecting rests and abilities',
            'The terrain itself is alive and hostile',
            'Resources (water, food, air) are scarce or poisoned',
            'Navigation is impossible—they\'re lost with the enemy'
        ],
        timeConstraint: [
            'A hostage will be executed at dawn—no time for stealth',
            'The ritual completes at midnight whether they\'re ready or not',
            'Poison/curse gives them 48 hours before someone dies',
            'The portal home only opens once, and the window is closing',
            'Reinforcements arrive at a set time—they must be gone by then',
            'The evidence they need will be destroyed in hours',
            'A disease is spreading—every hour means more dead',
            'The celestial alignment that makes victory possible fades soon'
        ],
        identity: [
            'The party can\'t identify their target among identical suspects',
            'Shapeshifters have replaced key NPCs—trust no one',
            'The enemy looks exactly like someone the party loves',
            'Disguises are mandatory, but their covers are compromised',
            'The party\'s reputation precedes them—and it\'s lies',
            'They\'re mistaken for someone else with powerful enemies',
            'Memory modification magic has rewritten the truth',
            'Multiple factions claim the party promised allegiance to them'
        ],
        resources: [
            'Their equipment is stolen/destroyed before the mission proper',
            'Magic doesn\'t work correctly in this location',
            'They\'re cut off from resupply with limited resources',
            'The reward was already paid to someone else impersonating them',
            'Critical information was lies—their intel is worthless',
            'Their transport is destroyed—they\'re stranded',
            'Key allies are incapacitated and can\'t help',
            'The artifact they need is in enemy hands'
        ]
    },

    /**
     * Stakes - What happens if the party fails
     * High drama consequences
     */
    stakes: {
        personal: [
            'A party member\'s family/loved ones will be the first victims',
            'The curse will spread to the party, transforming them slowly',
            'Their reputation will be destroyed—they\'ll be hunted as villains',
            'A party member\'s soul is collateral in this bargain',
            'Failure means watching someone they saved before die again',
            'Their homeland will fall without this mission\'s success',
            'A party member will be possessed by the entity they failed to stop',
            'They\'ll be trapped in this location forever if they fail'
        ],
        regional: [
            'The nearest city will be razed within the week',
            'A plague will sweep the countryside, killing thousands',
            'The local economy will collapse, causing famine and war',
            'A dormant volcano/earthquake will be triggered',
            'Trade routes will be permanently closed, isolating communities',
            'A generations-old peace will shatter into brutal warfare',
            'The land itself will become cursed and uninhabitable',
            'A portal will open, flooding the region with extraplanar horrors'
        ],
        cosmic: [
            'A seal holding back an elder evil will break',
            'The barrier between planes will weaken permanently',
            'A deity will die, destabilizing divine magic worldwide',
            'Time itself will begin unraveling from this point',
            'The dead will stop staying dead—everywhere',
            'A celestial body will fall from the sky',
            'Magic will begin failing across the world',
            'An age of darkness will begin, lasting centuries'
        ],
        immediate: [
            'Everyone in the building/cave/ship will die in minutes',
            'The hostages will be executed one by one',
            'The poison spreads with every heartbeat',
            'The explosion will level everything within a mile',
            'The summoning will complete, and the entity cannot be stopped',
            'The dam will break, drowning the valley below',
            'The assassination will succeed, starting a war',
            'The evidence will be destroyed, and the innocent will hang'
        ]
    },

    /**
     * Loot Teasers - Unique non-gold rewards
     * Interesting items that hint at deeper stories
     */
    lootTeasers: [
        'A map etched on dragon scale showing a location that doesn\'t exist on any other map',
        'A key made of frozen time, cold to the touch and never melting',
        'A speaking skull that knows one secret about each party member',
        'Boots that leave no tracks but whisper the name of everyone who\'s died where you walk',
        'A mirror that shows how you\'ll look at the moment of your death',
        'A compass that points toward your greatest fear',
        'An hourglass containing sand from a destroyed world',
        'A music box that plays a song only the dead can hear',
        'A quill that writes prophecy but only in languages you don\'t speak',
        'A locket containing a portrait of someone who hasn\'t been born yet',
        'A flask that fills with the last liquid that touched the holder\'s lips',
        'A stone that hums when pointed toward buried treasure or buried bodies',
        'A cloak woven from shadow that makes you invisible to the dying',
        'A bell that, when rung, summons the ghost of whoever you\'re thinking about',
        'A book that adds new pages whenever someone nearby tells a lie',
        'A crown that lets you command those who genuinely fear you',
        'A lantern that reveals invisible things but attracts invisible predators',
        'An amulet carved from a god\'s tooth, warm with residual divinity',
        'A vial of water from the River Styx, dangerous to everyone',
        'A coin that always lands on the side that will bring you the most trouble',
        'A sword that can only harm those who have broken an oath',
        'A mask that lets you take the face of your most recent kill',
        'Seeds that grow into plants bearing fruit with random magical effects',
        'A tattoo needle that can transfer magical tattoos between creatures',
        'A rope that ties itself into knots that tell the future',
        'A jar containing a bottled scream from a dying god',
        'A lens that reveals the true form of anything viewed through it',
        'A ring that grants a wish but transfers your consciousness into the ring',
        'A painting that depicts a different location each day—all locations are real',
        'A chalice that transmutes any liquid into the drinker\'s most needed potion',
        'A dagger that kills instantly but only works once per victim—ever',
        'A tome containing the true names of thirteen devils',
        'A fossil of a creature that shouldn\'t exist according to any natural history',
        'A candle that, when lit, freezes time for everyone except the holder',
        'A thread from a fate-weaver\'s loom, capable of altering destiny',
        'An eye preserved in amber that grants visions when held against your own',
        'A flute carved from the bone of a phoenix, with three songs remaining',
        'A scale model of a city that exists on another plane',
        'A bottle containing the last breath of a saint',
        'A gem that glows brighter the closer you get to where you\'ll die'
    ],

    /**
     * Moral Dilemmas - Difficult choices beyond combat
     * For 1 in 5 hooks as specified
     */
    moralDilemmas: [
        {
            situation: 'The monster is the last of its kind, hunted to near extinction by the "victims" who want you to finish the job',
            choice: 'Commit extinction or let a dangerous predator live',
            consequence: 'Either choice haunts you—genocide or enabling future deaths'
        },
        {
            situation: 'The villain offers to surrender if you let them kill one specific, genuinely evil person who the law protects',
            choice: 'Allow vigilante justice for a clean resolution or refuse and fight',
            consequence: 'The evil person will harm others if they live; the villain becomes a martyr if you refuse'
        },
        {
            situation: 'The cure for the plague requires a sapient sacrifice—and there\'s a volunteer',
            choice: 'Accept the willing sacrifice or seek another way (that may not exist)',
            consequence: 'Hundreds die while you search, or you carry a life on your conscience'
        },
        {
            situation: 'The stolen artifact belongs to a museum, but returning it means a small village loses its only protection',
            choice: 'Uphold property law or community survival',
            consequence: 'Either betray your employer or doom innocents to vulnerability'
        },
        {
            situation: 'The hostages include a war criminal hiding among innocents—the captors will release everyone if you identify them',
            choice: 'Turn over the criminal (to certain death) or risk everyone',
            consequence: 'Justice vs. survival, with no clean hands either way'
        },
        {
            situation: 'A child is possessed by a demon, but the exorcism will kill the child; the demon offers to leave peacefully if given one year to enjoy mortality',
            choice: 'Kill an innocent child or let a demon walk free for a year',
            consequence: 'The demon will cause suffering during that year, but the child gets to live'
        },
        {
            situation: 'The rebellion you\'re helping is fighting genuine tyrants, but their victory will cause a famine that kills more than the tyrants ever did',
            choice: 'Support freedom fighters whose victory brings starvation, or prop up oppressors who maintain stability',
            consequence: 'Neither side deserves full support; neither outcome is good'
        },
        {
            situation: 'An ancient sleeping guardian will wake and protect the realm if activated—but activating it requires erasing someone\'s entire existence from history',
            choice: 'Sacrifice not just a life but all memory of someone ever existing',
            consequence: 'The volunteer\'s family will never have known them; they\'ll cease to have ever been real'
        },
        {
            situation: 'The dragon terrorizing the region is protecting eggs; kill it and the eggs hatch as feral monsters, let it live and raids continue',
            choice: 'Orphan dangerous creatures or let a community suffer',
            consequence: 'Feral dragons in a decade or continuous death now—there\'s no relocation option'
        },
        {
            situation: 'Breaking the curse requires forgiving the one who cast it—but they murdered the party member\'s family',
            choice: 'Demand genuine forgiveness from a grieving party member or leave the curse in place',
            consequence: 'The curse spreads if not broken; the forgiveness must be real'
        },
        {
            situation: 'The ghost haunting the town was murdered by the beloved mayor; exposing the truth will destroy the community\'s faith',
            choice: 'Give the ghost peace and destroy a community\'s hope, or let the ghost rage and keep the secret',
            consequence: 'Truth brings justice but ruins lives; silence enables continued haunting'
        },
        {
            situation: 'The only way to save the prisoners is to take their place—someone must stay trapped forever',
            choice: 'Ask for volunteers, choose someone, or leave the prisoners to their fate',
            consequence: 'Any choice involves sacrificing someone—the only question is who and how'
        },
        {
            situation: 'The artifact powering the city is actually a trapped soul; freeing them destroys civilization, leaving them enslaved powers millions',
            choice: 'Free one suffering being or maintain the status quo that depends on their torment',
            consequence: 'Millions will die without power, or one soul suffers eternally'
        },
        {
            situation: 'The truth serum confirms the suspect is innocent of this crime—but guilty of an unrelated atrocity no one knows about',
            choice: 'Report what you learned about the other crime or honor that it was obtained under false pretenses',
            consequence: 'Justice is complicated when the method of discovery was itself unjust'
        },
        {
            situation: 'The dying enemy offers intelligence that will save lives—but only if you swear to protect their family, including a son who\'s currently planning an attack',
            choice: 'Swear the oath (and mean it) or let soldiers die',
            consequence: 'The oath is magically binding; breaking it has severe consequences'
        },
        {
            situation: 'The revolution\'s leader is a tyrant-in-waiting, but exposing them will doom the rebellion and leave the current tyrant in power',
            choice: 'Enable a future dictator to overthrow a current one, or protect the status quo',
            consequence: 'Neither ruler is good; the only question is which evil triumphs'
        },
        {
            situation: 'The plague cure exists but was created through torturous experiments on prisoners; using it validates the horror',
            choice: 'Use the tainted cure or let people die while developing an ethical alternative',
            consequence: 'The dead can\'t appreciate your moral principles'
        },
        {
            situation: 'You can save your mentor OR save five strangers—there\'s no time for both, and your mentor is begging you to save the strangers',
            choice: 'Honor your mentor\'s wish and let them die, or save them against their will',
            consequence: 'Respecting autonomy means accepting a terrible outcome'
        },
        {
            situation: 'The treaty requires handing over the refugee to face execution; breaking it means war',
            choice: 'One life versus potentially thousands in a conflict',
            consequence: 'There\'s no guarantee war would actually happen, but no guarantee it wouldn\'t'
        },
        {
            situation: 'The orphanage survives on donations from a crime lord; exposing him means the children starve',
            choice: 'Let crime fund charity or destroy both',
            consequence: 'The crime lord specifically uses the orphanage as a shield against heroes'
        }
    ],

    /**
     * Hook Titles - Templates for generating catchy names
     */
    titleTemplates: [
        'The {adjective} {noun} of {place}',
        '{verb}ing the {noun}',
        'The Last {noun} of {group}',
        'When {noun}s {verb}',
        'The {noun} {preposition} {place}',
        '{adjective} {noun}',
        'The {noun}\'s {noun}',
        '{number} {noun}s for {noun}',
        'Blood on the {noun}',
        'The {noun} Conspiracy',
        'Shadows {preposition} {place}',
        'The {adjective} Hunt',
        'What {verb}s in {place}',
        'The {noun} of {noun}s',
        'A {noun} Too Far',
        '{verb} No More',
        'The Price of {noun}',
        'Whispers of {noun}',
        'The {noun}breaker',
        '{place}\'s Secret'
    ],

    titleWords: {
        adjective: ['Crimson', 'Forgotten', 'Silent', 'Burning', 'Frozen', 'Hollow', 'Sacred', 'Cursed', 'Lost', 'Final', 'Broken', 'Endless', 'Shadowed', 'Golden', 'Iron', 'Bleeding', 'Stolen', 'Hidden', 'Ancient', 'Dying'],
        noun: ['Crown', 'Blade', 'Heart', 'Flame', 'Shadow', 'Storm', 'Beast', 'King', 'Oath', 'Grave', 'Throne', 'Child', 'Prophet', 'Mask', 'Eye', 'Hand', 'Gate', 'Legacy', 'Silence', 'Dawn'],
        verb: ['Hunt', 'Wake', 'Fall', 'Burn', 'Rise', 'Crawl', 'Whisper', 'Bleed', 'Break', 'Feast', 'Watch', 'Dream', 'Scream', 'Die', 'Wait'],
        place: ['Ashenvale', 'the Deep', 'Thornhold', 'the Wastes', 'Nighthaven', 'the Reaches', 'Grimwater', 'the Hollows', 'Dragonspire', 'the Mire'],
        group: ['the Fallen', 'House Valorian', 'the Order', 'the Marked', 'the Forsaken', 'the Bloodline', 'the Exiled', 'the Chosen'],
        preposition: ['Beneath', 'Beyond', 'Within', 'Above', 'Among', 'Before'],
        number: ['Three', 'Seven', 'Nine', 'Thirteen', 'A Thousand']
    }
};

// Helper functions
HookComponents.getRandomCatalyst = function() {
    const categories = Object.keys(this.catalysts);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const catalysts = this.catalysts[category];
    return {
        type: category,
        text: catalysts[Math.floor(Math.random() * catalysts.length)]
    };
};

HookComponents.getRandomComplication = function() {
    const categories = Object.keys(this.complications);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const complications = this.complications[category];
    return {
        type: category,
        text: complications[Math.floor(Math.random() * complications.length)]
    };
};

HookComponents.getRandomStake = function() {
    const categories = Object.keys(this.stakes);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const stakes = this.stakes[category];
    return {
        type: category,
        text: stakes[Math.floor(Math.random() * stakes.length)]
    };
};

HookComponents.getRandomLootTeaser = function() {
    return this.lootTeasers[Math.floor(Math.random() * this.lootTeasers.length)];
};

HookComponents.getRandomMoralDilemma = function() {
    return this.moralDilemmas[Math.floor(Math.random() * this.moralDilemmas.length)];
};

HookComponents.generateTitle = function() {
    const template = this.titleTemplates[Math.floor(Math.random() * this.titleTemplates.length)];
    return template.replace(/\{(\w+)\}/g, (match, type) => {
        const words = this.titleWords[type];
        return words ? words[Math.floor(Math.random() * words.length)] : match;
    });
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HookComponents;
}
