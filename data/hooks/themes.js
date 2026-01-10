/**
 * Encounter Themes and Monster Type Data for Quest Hook Generator
 * Templates for different quest structures and monster-specific hooks
 */

const HookThemes = {
    /**
     * Encounter Theme Templates
     * Each theme has unique structure, objectives, and narrative beats
     */
    themes: {
        mystery: {
            id: 'mystery',
            name: 'Mystery',
            icon: '&#128269;',
            description: 'Uncover hidden truths, solve crimes, expose conspiracies',
            objectives: [
                'Discover who murdered {victim} before the killer strikes again',
                'Determine what really happened in {location} thirty years ago',
                'Uncover the connection between {number} seemingly unrelated disappearances',
                'Prove the innocence of {accused} before their execution at dawn',
                'Find out why {target} is lying about their identity',
                'Investigate the strange phenomena plaguing {location}',
                'Discover the true nature of the {artifact} before it\'s too late',
                'Expose the conspiracy hiding behind {organization}'
            ],
            clues: [
                'A journal with pages torn out at critical moments',
                'Witnesses who all tell slightly different versions of the same event',
                'A symbol that appears in unexpected places',
                'Physical evidence that shouldn\'t exist',
                'A pattern in the timing or locations of events',
                'A survivor who can\'t or won\'t speak about what they saw'
            ],
            redHerrings: [
                'An obvious suspect with iron-clad alibi',
                'Evidence that was deliberately planted',
                'A confession that doesn\'t match the facts',
                'A parallel investigation that leads nowhere',
                'Witnesses who were paid to lie',
                'A crime of passion that masks premeditation'
            ]
        },

        hunt: {
            id: 'hunt',
            name: 'Hunt',
            icon: '&#127993;',
            description: 'Track and eliminate dangerous prey across terrain',
            objectives: [
                'Track the {creature} to its lair before it strikes {location} again',
                'Hunt down the {creature} that massacred the caravan',
                'Capture the {creature} alive for the collector\'s menagerie',
                'Eliminate the alpha before the pack grows too large',
                'Find and destroy the {creature}\'s nest before the eggs hatch',
                'Pursue the wounded {creature} before it reaches sanctuary',
                'Corner the {creature} in its territory and end its reign',
                'Track the trophy {creature} that\'s eluded hunters for decades'
            ],
            trackingSigns: [
                'Claw marks that gouge deep into stone',
                'A trail of bodies, each killed differently as if the creature is learning',
                'Territorial markings in substances that shouldn\'t exist',
                'Abandoned lairs, each larger than the last',
                'Survivors who bear a mark that draws the creature back',
                'Patterns in attack timing tied to lunar or magical cycles'
            ],
            huntingComplications: [
                'The creature is hunting the party just as much',
                'Multiple creatures, and you\'ve only been tracking one',
                'The territory belongs to something worse',
                'The creature can\'t be tracked by conventional means',
                'Local guides refuse to enter the hunting ground',
                'The creature has protectors who sabotage the hunt'
            ]
        },

        survival: {
            id: 'survival',
            name: 'Survival',
            icon: '&#127759;',
            description: 'Endure hostile environments and outlast nature itself',
            objectives: [
                'Survive {number} days in {biome} until rescue arrives',
                'Cross the {hazard} before the window of opportunity closes',
                'Escape the {disaster} that\'s destroying everything in its path',
                'Find shelter before the {weather} kills everyone',
                'Reach civilization with limited supplies through hostile territory',
                'Keep the survivors alive until the way out is clear',
                'Outlast the siege without reinforcement or resupply',
                'Navigate through {location} where nothing should live'
            ],
            resources: [
                'Water sources are contaminated or guarded by predators',
                'Food is scarce and competition is desperate',
                'Shelter materials are flammable, unstable, or alive',
                'Heat and cold are both potential killers',
                'Medical supplies are exhausted or unsuitable',
                'Navigation tools are useless or misleading'
            ],
            survivalThreats: [
                'Other survivors who\'ve decided to thin the competition',
                'The environment is actively hunting them',
                'A pursuer who won\'t stop until they\'re all dead',
                'Time pressure from poison, disease, or curse',
                'The refuge they\'re heading toward no longer exists',
                'The group has a traitor rationing their failure'
            ]
        },

        diplomacy: {
            id: 'diplomacy',
            name: 'Diplomacy',
            icon: '&#129309;',
            description: 'Negotiate peace, forge alliances, prevent wars',
            objectives: [
                'Broker a treaty between {faction1} and {faction2} before war erupts',
                'Convince {faction} to support the alliance against {threat}',
                'Negotiate the release of hostages without paying the ransom',
                'Mediate the dispute over {object} before it turns violent',
                'Secure safe passage through {territory} for the refugees',
                'Prevent the assassination that would shatter the peace',
                'Unite the fractured {groups} against a common enemy',
                'Persuade {leader} to stand down from their destructive path'
            ],
            factions: [
                { name: 'ancient rivals', motivation: 'blood feud spanning generations' },
                { name: 'trade competitors', motivation: 'economic dominance' },
                { name: 'religious sects', motivation: 'theological interpretation' },
                { name: 'noble houses', motivation: 'succession claims' },
                { name: 'monster tribes', motivation: 'territory and resources' },
                { name: 'planar factions', motivation: 'cosmic balance' }
            ],
            negotiationHazards: [
                'Both sides are willing to kill the messengers',
                'A third party benefits from continued conflict',
                'The real grievance is hidden beneath pretense',
                'One side is negotiating in bad faith',
                'Personal grudges override political necessity',
                'The party\'s own reputation complicates matters'
            ]
        },

        heist: {
            id: 'heist',
            name: 'Heist',
            icon: '&#128176;',
            description: 'Plan and execute daring robberies and infiltrations',
            objectives: [
                'Steal {object} from {location} without anyone knowing it\'s gone',
                'Infiltrate {organization} and extract their secrets',
                'Replace {object} with a forgery before the switch is discovered',
                'Break into {vault} and retrieve what was stolen from your employer',
                'Kidnap {target} from their heavily guarded estate',
                'Plant evidence in {location} without leaving a trace',
                'Steal {object} during the brief window when security changes shifts',
                'Extract the prisoner from {prison} before their execution'
            ],
            obstacles: [
                'Magical wards that detect and trap intruders',
                'Guards who know the party\'s faces',
                'Traps that reset after being triggered',
                'The object is cursed to stay where it is',
                'Rival thieves with the same target',
                'The layout has changed since the plans were made'
            ],
            heistTwists: [
                'The object is not what it appears to be',
                'Someone on the team is an inside agent',
                'The "empty" vault has a guardian',
                'The escape route is compromised',
                'The party is being set up to take the fall',
                'The real target isn\'t the object at all'
            ]
        },

        siege: {
            id: 'siege',
            name: 'Siege',
            icon: '&#127984;',
            description: 'Defend positions against overwhelming force or break enemy lines',
            objectives: [
                'Hold {location} until reinforcements arrive in {number} days',
                'Break the siege of {city} before the defenders starve',
                'Sabotage the enemy siege engines before the final assault',
                'Evacuate civilians before the walls fall',
                'Assassinate the enemy commander to break the siege',
                'Hold the breach until the engineers seal it',
                'Defend the ritual site until the spell is complete',
                'Buy time for the evacuation fleet to launch'
            ],
            defenseElements: [
                'Walls with structural weaknesses',
                'Limited ammunition and supplies',
                'Unreliable allied troops',
                'Civilian refugees consuming resources',
                'Traitors within the walls',
                'Enemy artillery with superior range'
            ],
            siegeTactics: [
                'Mining tunnels under the walls',
                'Disease-spreading saboteurs',
                'Diplomatic pressure to surrender',
                'Psychological warfare targeting morale',
                'Diversionary attacks to spread defenders thin',
                'Summoned or constructed siege monsters'
            ]
        },

        dungeonCrawl: {
            id: 'dungeonCrawl',
            name: 'Dungeon Crawl',
            icon: '&#127769;',
            description: 'Delve into ancient ruins and deadly labyrinths',
            objectives: [
                'Clear {location} of its infestation before it spreads',
                'Recover {artifact} from the depths of {dungeon}',
                'Map the unexplored sections of the complex',
                'Find out what happened to the previous expedition',
                'Seal the portal that opened in the lower levels',
                'Destroy the source of corruption before it awakens',
                'Rescue the prisoners held in the dungeon depths',
                'Reach the heart of {dungeon} and claim its power'
            ],
            dungeonFeatures: [
                'Collapsing architecture that reshapes the map',
                'Magical darkness that defeats darkvision',
                'Traps that reset and reconfigure',
                'Intelligent dungeon design that funnels intruders',
                'Limited air supply in sealed sections',
                'Environmental hazards that escalate over time'
            ],
            dungeonDenizens: [
                'Territorial monsters in established pecking order',
                'A boss that hunts intruders throughout the complex',
                'Trapped adventurers who\'ve gone mad',
                'Rival parties competing for the same goal',
                'Indigenous creatures fighting the infestation',
                'The dungeon itself is alive and hostile'
            ]
        },

        escort: {
            id: 'escort',
            name: 'Escort',
            icon: '&#128694;',
            description: 'Protect valuable cargo or VIPs through dangerous territory',
            objectives: [
                'Escort {vip} safely through {territory} to {destination}',
                'Transport {cargo} before it expires, hatches, or awakens',
                'Guard the pilgrimage to {holy site} through lands of unbelievers',
                'Protect the caravan carrying {cargo} through bandit territory',
                'Deliver the prisoner to {destination} for trial',
                'Guide the refugees to safety across hostile borders',
                'Safeguard the ambassador through treaty negotiations',
                'Move the artifact without anyone knowing what you\'re carrying'
            ],
            escortTargets: [
                { type: 'VIP', examples: ['heir to the throne', 'star witness', 'prophet', 'defector', 'cursed noble', 'amnesiac mage'] },
                { type: 'Cargo', examples: ['dragon egg', 'sealed phylactery', 'unstable magical device', 'plague cure', 'evidence', 'tribute'] },
                { type: 'Group', examples: ['refugees', 'prisoners of war', 'religious pilgrims', 'merchant caravan', 'wounded soldiers', 'monster eggs'] }
            ],
            escortHazards: [
                'Assassins targeting the escort subject',
                'The subject is more trouble than they\'re worth',
                'Betrayal from within the escort group',
                'The destination doesn\'t want the delivery',
                'The cargo is more dangerous than advertised',
                'Pursuit by forces that cannot be outrun'
            ]
        }
    },

    /**
     * Monster Type Specific Hook Elements
     * Unique angles for each monster type
     */
    monsterTypes: {
        aberration: {
            id: 'aberration',
            name: 'Aberration',
            icon: '&#128065;',
            description: 'Alien minds from beyond reality',
            hookAngles: [
                'Its victims don\'t die—they become part of something larger',
                'It\'s not invading; it\'s waking up after eons of slumber',
                'The aberration is just a scout; its true form spans dimensions',
                'Those who see it become unable to perceive normal reality',
                'It doesn\'t want to kill—it wants to understand, invasively',
                'The aberration is fleeing something worse',
                'Its mere presence is mutating the landscape'
            ],
            lootTypes: ['psychic crystals', 'reality-warping fragments', 'thought-capturing gems', 'dimensional maps', 'alien technology'],
            environmentalEffects: ['reality distortions', 'psychic static', 'impossible geometry', 'gravity anomalies']
        },

        beast: {
            id: 'beast',
            name: 'Beast',
            icon: '&#128058;',
            description: 'Natural creatures of extraordinary danger',
            hookAngles: [
                'The beast is the last guardian of a dying ecosystem',
                'Something drove this normally peaceful creature to violence',
                'The beast is worshipped by locals who sacrifice travelers to it',
                'It\'s not a predator—it\'s a parent protecting young',
                'The beast carries a disease that threatens civilization',
                'An awakened animal with human intelligence seeks revenge',
                'The beast\'s territory contains something valuable it guards'
            ],
            lootTypes: ['rare pelts', 'alchemical components', 'primal essence', 'nesting materials', 'territorial markers'],
            environmentalEffects: ['predator presence', 'territorial markings', 'altered prey behavior', 'natural traps']
        },

        celestial: {
            id: 'celestial',
            name: 'Celestial',
            icon: '&#11088;',
            description: 'Divine servants with alien morality',
            hookAngles: [
                'The celestial is punishing a town for a sin they don\'t remember committing',
                'It\'s hunting a "demon" who\'s actually reformed and innocent',
                'The celestial\'s orders conflict with what mortals consider good',
                'A fallen celestial seeks redemption through mortal champions',
                'The celestial is dying and its death will have cosmic consequences',
                'It demands a test of faith that seems arbitrary or cruel',
                'The celestial is malfunctioning, its divine programming corrupted'
            ],
            lootTypes: ['blessed artifacts', 'feathers of power', 'divine essence', 'prophecy scrolls', 'absolution tokens'],
            environmentalEffects: ['hallowed ground', 'truth compulsion', 'aura of awe', 'radiant light']
        },

        construct: {
            id: 'construct',
            name: 'Construct',
            icon: '&#129302;',
            description: 'Created beings following ancient orders',
            hookAngles: [
                'The construct is following orders from a master who died centuries ago',
                'It\'s protecting something its creators meant to remain hidden forever',
                'The construct has achieved consciousness and is questioning its purpose',
                'A factory is producing war constructs for an army that no longer exists',
                'The construct\'s programming is degrading, making it unpredictable',
                'Someone has reprogrammed it for their own agenda',
                'The construct is the key to activating something larger'
            ],
            lootTypes: ['arcane cores', 'animation matrices', 'construct blueprints', 'rare metals', 'command sigils'],
            environmentalEffects: ['antimagic zones', 'mechanical hazards', 'pattern recognition', 'protocol enforcement']
        },

        dragon: {
            id: 'dragon',
            name: 'Dragon',
            icon: '&#128009;',
            description: 'Ancient powers with schemes spanning centuries',
            hookAngles: [
                'The dragon offers alliance against a greater threat—but at what price?',
                'A young dragon\'s recklessness threatens to expose dragon-kind\'s secrets',
                'The dragon is dying and has chosen the party to inherit its legacy',
                'Two dragons\' war is devastating the region as collateral damage',
                'The dragon was cursed into its current form and seeks release',
                'A dragon cult prepares to awaken their slumbering god-wyrm',
                'The dragon is protecting its territory from an extraplanar invasion'
            ],
            lootTypes: ['dragon scales', 'hoard items with history', 'draconic tomes', 'elemental organs', 'ancestral memories'],
            environmentalEffects: ['elemental saturation', 'dragonfear aura', 'lair actions', 'hoarded magic']
        },

        elemental: {
            id: 'elemental',
            name: 'Elemental',
            icon: '&#127754;',
            description: 'Incarnations of primal forces',
            hookAngles: [
                'The elemental was summoned for a purpose it has long forgotten',
                'A planar breach is flooding the region with elemental energy',
                'The elemental is the only thing preventing a natural disaster',
                'Elemental lords wage proxy wars through mortal champions',
                'A new elemental is being born, threatening balance',
                'The binding that controls the elemental is weakening',
                'The elemental offers power in exchange for freedom'
            ],
            lootTypes: ['elemental essences', 'planar anchors', 'pure elements', 'binding contracts', 'primal crystals'],
            environmentalEffects: ['elemental corruption', 'planar bleed', 'weather extremes', 'terrain transformation']
        },

        fey: {
            id: 'fey',
            name: 'Fey',
            icon: '&#127807;',
            description: 'Creatures of whimsy and ancient bargains',
            hookAngles: [
                'A fey bargain has come due, but the terms were never clear',
                'The fey is "helping" in ways that make everything worse',
                'Someone broke a promise to the fey and now a town pays',
                'The fey needs mortal help for something embarrassing',
                'A fey noble is recruiting for an otherworldly court intrigue',
                'The boundary between worlds is thinning at a fey crossing',
                'A mortal child was traded to the fey generations ago and now returns'
            ],
            lootTypes: ['glamour tokens', 'fey favors', 'memory crystals', 'dream essence', 'oath-binding contracts'],
            environmentalEffects: ['time distortion', 'emotion manipulation', 'illusion saturation', 'compulsion auras']
        },

        fiend: {
            id: 'fiend',
            name: 'Fiend',
            icon: '&#128520;',
            description: 'Evil incarnate with contracts and corruption',
            hookAngles: [
                'A devil offers a deal that seems too good—because the cost is hidden',
                'A demon cult is growing in influence, and legitimate authorities are complicit',
                'The fiend is trapped and bargaining, but who trapped it and why?',
                'Someone\'s soul was sold without their knowledge, and they want it back',
                'A fiend is hunting another fiend, and mortals are caught in between',
                'The fiend knows a secret that could save lives—for a price',
                'A fiend is possessing victims who volunteer, believing it\'s an angel'
            ],
            lootTypes: ['soul coins', 'infernal contracts', 'corruption essence', 'hellforged items', 'demon blood'],
            environmentalEffects: ['corruption spread', 'temptation effects', 'summoning weakpoints', 'evil detection']
        },

        giant: {
            id: 'giant',
            name: 'Giant',
            icon: '&#128170;',
            description: 'Ancient races with strict hierarchies',
            hookAngles: [
                'The giant ordning has shattered, and chaos threatens all smaller folk',
                'A giant seeks mortal help to rise in rank—or overthrow the hierarchy',
                'The giant\'s raids are actually tribute collection for an older debt',
                'A storm giant oracle has foreseen disaster and needs champions',
                'Giant civil war spills over, with villages as battlegrounds',
                'The giant is the last keeper of knowledge that must not be lost',
                'A hill giant has achieved enlightenment and seeks peace—but others don\'t believe it'
            ],
            lootTypes: ['giant-crafted items', 'ordning tokens', 'ancient runes', 'giant-sized treasure', 'cloud castle keys'],
            environmentalEffects: ['seismic activity', 'weather manipulation', 'territorial markers', 'ancient magic']
        },

        humanoid: {
            id: 'humanoid',
            name: 'Humanoid',
            icon: '&#128100;',
            description: 'People with complex motivations',
            hookAngles: [
                'The villain is sympathetic—their cause is just, their methods monstrous',
                'A faction war threatens to engulf the region in chaos',
                'The target is someone the party knows and respected',
                'The organization is legitimate on the surface, corrupt beneath',
                'The humanoid antagonist mirrors a party member\'s path',
                'Revolution is brewing, and both sides want the party\'s help',
                'The "monsters" are refugees defending their new home'
            ],
            lootTypes: ['political intelligence', 'blackmail material', 'organization resources', 'cultural artifacts', 'rare skills'],
            environmentalEffects: ['social pressure', 'reputation consequences', 'legal complications', 'alliance shifts']
        },

        monstrosity: {
            id: 'monstrosity',
            name: 'Monstrosity',
            icon: '&#128126;',
            description: 'Magical beasts and twisted creatures',
            hookAngles: [
                'The monstrosity was created as a weapon and escaped its masters',
                'It\'s the result of magical experimentation gone wrong',
                'The monstrosity is actually a cursed person seeking transformation\'s end',
                'Multiple monstrosities are converging on one location—why?',
                'The monstrosity\'s presence is a symptom of larger magical corruption',
                'Someone is deliberately breeding these creatures',
                'The monstrosity guards something valuable in its lair'
            ],
            lootTypes: ['magical organs', 'cursed items', 'transformation reagents', 'monster eggs', 'experimentation notes'],
            environmentalEffects: ['magical corruption', 'prey scarcity', 'territorial aggression', 'lair hazards']
        },

        ooze: {
            id: 'ooze',
            name: 'Ooze',
            icon: '&#129525;',
            description: 'Mindless hunger that dissolves all it touches',
            hookAngles: [
                'The ooze is growing exponentially, consuming everything in its path',
                'Someone is deliberately feeding the ooze to make it stronger',
                'The ooze preserves memories of what it consumes—including secrets',
                'An alchemist needs samples from a specific, dangerous ooze',
                'The ooze is actually a prison for something worse',
                'The city\'s sewers have become a connected ooze network',
                'The ooze is intelligent—and very, very hungry'
            ],
            lootTypes: ['preserved items', 'digestive acids', 'absorbed memories', 'pure samples', 'resistant materials'],
            environmentalEffects: ['surface corrosion', 'contaminated water', 'structural weakening', 'toxic atmosphere']
        },

        plant: {
            id: 'plant',
            name: 'Plant',
            icon: '&#127793;',
            description: 'Ancient vegetable horrors with alien patience',
            hookAngles: [
                'The forest is expanding, consuming farms and villages',
                'The plant is the last remnant of an ancient, intelligent species',
                'Someone is using the plants as biological weapons',
                'The plant network connects to something sleeping beneath the earth',
                'The plants are "healing" the land by removing civilization',
                'A corrupted druid commands the plants against former allies',
                'The plant offers symbiosis—but the cost is your humanity'
            ],
            lootTypes: ['rare seeds', 'ancient sap', 'living wood', 'symbiotic spores', 'nature essence'],
            environmentalEffects: ['overgrowth', 'pollen clouds', 'root networks', 'photosynthesis dependence']
        },

        undead: {
            id: 'undead',
            name: 'Undead',
            icon: '&#128128;',
            description: 'Those who refuse to stay dead',
            hookAngles: [
                'The undead are victims seeking justice against those who killed them',
                'A necromancer offers alliance against a greater evil—temporarily',
                'The undead army was created to defend, not attack, but its purpose is corrupted',
                'Someone the party buried has returned, but different',
                'The undead plague spreads through contact—quarantine is failing',
                'A ghost knows the location of something valuable, but can\'t rest',
                'The undead are pilgrims returning to a holy site for final judgment'
            ],
            lootTypes: ['phylacteries', 'soul vessels', 'grave goods', 'necromantic formulas', 'preserved memories'],
            environmentalEffects: ['negative energy', 'life draining', 'desecrated ground', 'spirit activity']
        }
    }
};

// Helper functions
HookThemes.getTheme = function(id) {
    return this.themes[id] || null;
};

HookThemes.getAllThemes = function() {
    return Object.values(this.themes);
};

HookThemes.getRandomTheme = function() {
    const themes = this.getAllThemes();
    return themes[Math.floor(Math.random() * themes.length)];
};

HookThemes.getMonsterType = function(id) {
    return this.monsterTypes[id] || null;
};

HookThemes.getAllMonsterTypes = function() {
    return Object.values(this.monsterTypes);
};

HookThemes.getRandomMonsterType = function() {
    const types = this.getAllMonsterTypes();
    return types[Math.floor(Math.random() * types.length)];
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HookThemes;
}
