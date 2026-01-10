/**
 * D&D 5e Spells Data
 * Spell lists by class and level for spellcasting monsters
 */

const SpellsData = {
    /**
     * Spell slot progression
     */
    spellSlotTable: {
        1: { 1: 2 },
        2: { 1: 3 },
        3: { 1: 4, 2: 2 },
        4: { 1: 4, 2: 3 },
        5: { 1: 4, 2: 3, 3: 2 },
        6: { 1: 4, 2: 3, 3: 3 },
        7: { 1: 4, 2: 3, 3: 3, 4: 1 },
        8: { 1: 4, 2: 3, 3: 3, 4: 2 },
        9: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
        10: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
        11: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
        12: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
        13: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
        14: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
        15: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
        16: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
        17: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 },
        18: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 },
        19: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 },
        20: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 }
    },

    /**
     * Cantrips by class
     */
    cantrips: {
        wizard: ['fire bolt', 'ray of frost', 'shocking grasp', 'chill touch', 'acid splash', 'poison spray', 'mage hand', 'prestidigitation', 'light', 'minor illusion', 'message', 'true strike', 'dancing lights', 'friends', 'blade ward', 'mending', 'toll the dead', 'frostbite', 'infestation', 'create bonfire', 'control flames', 'shape water', 'mold earth', 'gust', 'thunderclap', 'sword burst', 'booming blade', 'green-flame blade', 'lightning lure', 'mind sliver'],
        sorcerer: ['fire bolt', 'ray of frost', 'shocking grasp', 'chill touch', 'acid splash', 'poison spray', 'mage hand', 'prestidigitation', 'light', 'minor illusion', 'message', 'true strike', 'dancing lights', 'friends', 'blade ward', 'mending', 'toll the dead', 'frostbite', 'infestation', 'create bonfire', 'control flames', 'shape water', 'mold earth', 'gust', 'thunderclap', 'sword burst', 'booming blade', 'green-flame blade', 'lightning lure', 'mind sliver'],
        warlock: ['eldritch blast', 'chill touch', 'mage hand', 'minor illusion', 'prestidigitation', 'true strike', 'friends', 'blade ward', 'poison spray', 'toll the dead', 'frostbite', 'infestation', 'create bonfire', 'thunderclap', 'booming blade', 'green-flame blade', 'lightning lure', 'mind sliver', 'magic stone'],
        bard: ['vicious mockery', 'mage hand', 'prestidigitation', 'light', 'minor illusion', 'message', 'dancing lights', 'friends', 'blade ward', 'mending', 'thunderclap'],
        cleric: ['sacred flame', 'toll the dead', 'thaumaturgy', 'light', 'guidance', 'mending', 'resistance', 'spare the dying', 'word of radiance'],
        druid: ['produce flame', 'thorn whip', 'shillelagh', 'druidcraft', 'guidance', 'mending', 'resistance', 'poison spray', 'frostbite', 'infestation', 'create bonfire', 'control flames', 'shape water', 'mold earth', 'gust', 'thunderclap', 'primal savagery', 'magic stone'],
        artificer: ['acid splash', 'fire bolt', 'frostbite', 'light', 'mage hand', 'mending', 'message', 'poison spray', 'prestidigitation', 'ray of frost', 'resistance', 'shocking grasp', 'spare the dying', 'thorn whip', 'thunderclap', 'create bonfire'],
        aberration: ['minor illusion', 'mage hand', 'message', 'chill touch', 'toll the dead', 'mind sliver'],
        fiend: ['fire bolt', 'chill touch', 'thaumaturgy', 'produce flame', 'toll the dead'],
        celestial: ['sacred flame', 'light', 'thaumaturgy', 'guidance', 'spare the dying'],
        fey: ['minor illusion', 'dancing lights', 'druidcraft', 'friends', 'vicious mockery'],
        undead: ['chill touch', 'toll the dead', 'spare the dying', 'thaumaturgy', 'minor illusion']
    },

    /**
     * Spells by level
     */
    spellsByLevel: {
        1: {
            wizard: ['magic missile', 'shield', 'mage armor', 'burning hands', 'thunderwave', 'sleep', 'charm person', 'detect magic', 'identify', 'fog cloud', 'grease', 'false life', 'ray of sickness', 'witch bolt', 'chromatic orb', 'ice knife', 'earth tremor', 'absorb elements', 'catapult', 'cause fear', 'find familiar'],
            sorcerer: ['magic missile', 'shield', 'mage armor', 'burning hands', 'thunderwave', 'sleep', 'charm person', 'detect magic', 'fog cloud', 'false life', 'ray of sickness', 'witch bolt', 'chromatic orb', 'ice knife', 'earth tremor', 'absorb elements', 'catapult', 'chaos bolt'],
            warlock: ['armor of agathys', 'arms of hadar', 'charm person', 'comprehend languages', 'expeditious retreat', 'hellish rebuke', 'hex', 'illusory script', 'protection from evil and good', 'unseen servant', 'witch bolt', 'cause fear'],
            bard: ['charm person', 'cure wounds', 'detect magic', 'disguise self', 'dissonant whispers', 'faerie fire', 'feather fall', 'healing word', 'heroism', 'hideous laughter', 'identify', 'longstrider', 'silent image', 'sleep', 'speak with animals', 'thunderwave'],
            cleric: ['bless', 'command', 'create or destroy water', 'cure wounds', 'detect evil and good', 'detect magic', 'detect poison and disease', 'guiding bolt', 'healing word', 'inflict wounds', 'protection from evil and good', 'purify food and drink', 'sanctuary', 'shield of faith'],
            druid: ['animal friendship', 'charm person', 'create or destroy water', 'cure wounds', 'detect magic', 'detect poison and disease', 'entangle', 'faerie fire', 'fog cloud', 'goodberry', 'healing word', 'jump', 'longstrider', 'purify food and drink', 'speak with animals', 'thunderwave', 'absorb elements', 'earth tremor', 'ice knife'],
            aberration: ['detect magic', 'dissonant whispers', 'sleep', 'charm person', 'cause fear', 'ray of sickness'],
            fiend: ['burning hands', 'hellish rebuke', 'charm person', 'command', 'inflict wounds', 'cause fear'],
            celestial: ['bless', 'cure wounds', 'guiding bolt', 'healing word', 'protection from evil and good', 'shield of faith'],
            fey: ['charm person', 'faerie fire', 'sleep', 'entangle', 'disguise self', 'silent image'],
            undead: ['false life', 'ray of sickness', 'inflict wounds', 'cause fear', 'detect magic']
        },
        2: {
            wizard: ['misty step', 'scorching ray', 'shatter', 'hold person', 'invisibility', 'mirror image', 'web', 'darkness', 'blur', 'suggestion', 'levitate', 'flaming sphere', 'acid arrow', 'blindness/deafness', 'ray of enfeeblement', 'cloud of daggers', 'crown of madness', 'phantasmal force', 'shadow blade', 'mind spike', 'dragon\'s breath'],
            sorcerer: ['misty step', 'scorching ray', 'shatter', 'hold person', 'invisibility', 'mirror image', 'web', 'darkness', 'blur', 'suggestion', 'levitate', 'blindness/deafness', 'cloud of daggers', 'crown of madness', 'phantasmal force', 'shadow blade', 'mind spike', 'dragon\'s breath', 'enhance ability', 'maximilian\'s earthen grasp'],
            warlock: ['darkness', 'enthrall', 'hold person', 'invisibility', 'mirror image', 'misty step', 'ray of enfeeblement', 'shatter', 'spider climb', 'suggestion', 'cloud of daggers', 'crown of madness', 'shadow blade', 'mind spike'],
            bard: ['animal messenger', 'blindness/deafness', 'calm emotions', 'cloud of daggers', 'crown of madness', 'detect thoughts', 'enhance ability', 'enthrall', 'heat metal', 'hold person', 'invisibility', 'knock', 'lesser restoration', 'locate animals or plants', 'locate object', 'magic mouth', 'phantasmal force', 'see invisibility', 'shatter', 'silence', 'suggestion', 'zone of truth'],
            cleric: ['aid', 'augury', 'blindness/deafness', 'calm emotions', 'continual flame', 'enhance ability', 'find traps', 'gentle repose', 'hold person', 'lesser restoration', 'locate object', 'prayer of healing', 'protection from poison', 'silence', 'spiritual weapon', 'warding bond', 'zone of truth'],
            druid: ['animal messenger', 'barkskin', 'beast sense', 'darkvision', 'enhance ability', 'find traps', 'flame blade', 'flaming sphere', 'gust of wind', 'heat metal', 'hold person', 'lesser restoration', 'locate animals or plants', 'locate object', 'moonbeam', 'pass without trace', 'protection from poison', 'spike growth'],
            aberration: ['hold person', 'crown of madness', 'detect thoughts', 'phantasmal force', 'darkness', 'mind spike'],
            fiend: ['darkness', 'scorching ray', 'hold person', 'blindness/deafness', 'suggestion'],
            celestial: ['lesser restoration', 'aid', 'prayer of healing', 'spiritual weapon', 'calm emotions'],
            fey: ['invisibility', 'suggestion', 'calm emotions', 'enthrall', 'phantasmal force', 'moonbeam'],
            undead: ['blindness/deafness', 'darkness', 'ray of enfeeblement', 'hold person', 'silence']
        },
        3: {
            wizard: ['fireball', 'lightning bolt', 'counterspell', 'dispel magic', 'fly', 'haste', 'slow', 'fear', 'hypnotic pattern', 'major image', 'bestow curse', 'vampiric touch', 'animate dead', 'blink', 'protection from energy', 'thunder step', 'erupting earth', 'enemies abound', 'summon lesser demons'],
            sorcerer: ['fireball', 'lightning bolt', 'counterspell', 'dispel magic', 'fly', 'haste', 'slow', 'fear', 'hypnotic pattern', 'major image', 'blink', 'protection from energy', 'thunder step', 'erupting earth', 'enemies abound', 'water breathing'],
            warlock: ['counterspell', 'dispel magic', 'fear', 'fly', 'gaseous form', 'hunger of hadar', 'hypnotic pattern', 'magic circle', 'remove curse', 'tongues', 'vampiric touch', 'thunder step', 'summon lesser demons', 'enemies abound'],
            bard: ['bestow curse', 'clairvoyance', 'dispel magic', 'fear', 'feign death', 'glyph of warding', 'hypnotic pattern', 'leomund\'s tiny hut', 'major image', 'nondetection', 'plant growth', 'sending', 'slow', 'speak with dead', 'speak with plants', 'stinking cloud', 'tongues'],
            cleric: ['animate dead', 'beacon of hope', 'bestow curse', 'clairvoyance', 'create food and water', 'daylight', 'dispel magic', 'feign death', 'glyph of warding', 'magic circle', 'mass healing word', 'meld into stone', 'protection from energy', 'remove curse', 'revivify', 'sending', 'speak with dead', 'spirit guardians', 'tongues', 'water walk'],
            druid: ['call lightning', 'conjure animals', 'daylight', 'dispel magic', 'feign death', 'meld into stone', 'plant growth', 'protection from energy', 'sleet storm', 'speak with plants', 'water breathing', 'water walk', 'wind wall', 'erupting earth', 'tidal wave'],
            aberration: ['fear', 'hypnotic pattern', 'slow', 'bestow curse', 'hunger of hadar', 'enemies abound'],
            fiend: ['fireball', 'fear', 'bestow curse', 'vampiric touch', 'summon lesser demons'],
            celestial: ['revivify', 'mass healing word', 'beacon of hope', 'daylight', 'dispel magic', 'spirit guardians'],
            fey: ['hypnotic pattern', 'plant growth', 'dispel magic', 'fear', 'major image', 'conjure animals'],
            undead: ['animate dead', 'vampiric touch', 'bestow curse', 'fear', 'speak with dead']
        },
        4: {
            wizard: ['banishment', 'dimension door', 'greater invisibility', 'ice storm', 'polymorph', 'wall of fire', 'blight', 'confusion', 'phantasmal killer', 'evard\'s black tentacles', 'storm sphere', 'vitriolic sphere', 'sickening radiance', 'summon greater demon'],
            sorcerer: ['banishment', 'dimension door', 'greater invisibility', 'ice storm', 'polymorph', 'wall of fire', 'blight', 'confusion', 'storm sphere', 'vitriolic sphere', 'sickening radiance'],
            warlock: ['banishment', 'blight', 'dimension door', 'hallucinatory terrain', 'shadow of moil', 'sickening radiance', 'summon greater demon'],
            bard: ['compulsion', 'confusion', 'dimension door', 'freedom of movement', 'greater invisibility', 'hallucinatory terrain', 'locate creature', 'polymorph', 'charm monster'],
            cleric: ['banishment', 'control water', 'death ward', 'divination', 'freedom of movement', 'guardian of faith', 'locate creature', 'stone shape'],
            druid: ['blight', 'confusion', 'conjure minor elementals', 'conjure woodland beings', 'control water', 'dominate beast', 'freedom of movement', 'giant insect', 'grasping vine', 'hallucinatory terrain', 'ice storm', 'locate creature', 'polymorph', 'stone shape', 'stoneskin', 'wall of fire', 'charm monster'],
            aberration: ['confusion', 'phantasmal killer', 'evard\'s black tentacles', 'banishment', 'sickening radiance'],
            fiend: ['wall of fire', 'banishment', 'blight', 'summon greater demon', 'fire shield'],
            celestial: ['banishment', 'death ward', 'guardian of faith', 'freedom of movement'],
            fey: ['greater invisibility', 'polymorph', 'confusion', 'conjure woodland beings', 'hallucinatory terrain'],
            undead: ['blight', 'phantasmal killer', 'banishment', 'evard\'s black tentacles']
        },
        5: {
            wizard: ['cone of cold', 'wall of force', 'cloudkill', 'dominate person', 'hold monster', 'telekinesis', 'animate objects', 'bigby\'s hand', 'teleportation circle', 'scrying', 'synaptic static', 'steel wind strike', 'danse macabre', 'enervation', 'negative energy flood', 'infernal calling'],
            sorcerer: ['cone of cold', 'cloudkill', 'dominate person', 'hold monster', 'telekinesis', 'animate objects', 'teleportation circle', 'synaptic static', 'enervation'],
            warlock: ['contact other plane', 'dream', 'hold monster', 'scrying', 'synaptic static', 'danse macabre', 'enervation', 'negative energy flood', 'infernal calling'],
            bard: ['animate objects', 'awaken', 'dominate person', 'dream', 'geas', 'greater restoration', 'hold monster', 'legend lore', 'mass cure wounds', 'mislead', 'modify memory', 'planar binding', 'raise dead', 'scrying', 'seeming', 'teleportation circle', 'synaptic static'],
            cleric: ['commune', 'contagion', 'dispel evil and good', 'flame strike', 'geas', 'greater restoration', 'hallow', 'insect plague', 'legend lore', 'mass cure wounds', 'planar binding', 'raise dead', 'scrying', 'dawn', 'holy weapon'],
            druid: ['antilife shell', 'awaken', 'commune with nature', 'conjure elemental', 'contagion', 'geas', 'greater restoration', 'insect plague', 'mass cure wounds', 'planar binding', 'reincarnate', 'scrying', 'tree stride', 'wall of stone', 'maelstrom', 'transmute rock'],
            aberration: ['dominate person', 'hold monster', 'synaptic static', 'telekinesis', 'modify memory'],
            fiend: ['flame strike', 'cloudkill', 'dominate person', 'infernal calling', 'wall of force'],
            celestial: ['flame strike', 'greater restoration', 'mass cure wounds', 'raise dead', 'dispel evil and good'],
            fey: ['dominate person', 'dream', 'mislead', 'geas', 'awaken'],
            undead: ['danse macabre', 'negative energy flood', 'contagion', 'cloudkill', 'dominate person']
        },
        6: {
            wizard: ['chain lightning', 'disintegrate', 'globe of invulnerability', 'mass suggestion', 'true seeing', 'circle of death', 'eyebite', 'flesh to stone', 'create undead', 'soul cage', 'mental prison', 'scatter'],
            sorcerer: ['chain lightning', 'disintegrate', 'globe of invulnerability', 'mass suggestion', 'true seeing', 'circle of death', 'eyebite', 'mental prison', 'scatter'],
            warlock: ['arcane gate', 'circle of death', 'create undead', 'eyebite', 'flesh to stone', 'mass suggestion', 'true seeing', 'soul cage', 'mental prison', 'scatter'],
            bard: ['eyebite', 'find the path', 'guards and wards', 'mass suggestion', 'otto\'s irresistible dance', 'programmed illusion', 'true seeing'],
            cleric: ['blade barrier', 'create undead', 'find the path', 'forbiddance', 'harm', 'heal', 'heroes\' feast', 'planar ally', 'true seeing', 'word of recall'],
            druid: ['conjure fey', 'find the path', 'heal', 'heroes\' feast', 'move earth', 'sunbeam', 'transport via plants', 'wall of thorns', 'wind walk', 'bones of the earth', 'primordial ward', 'investiture of flame', 'investiture of ice', 'investiture of stone', 'investiture of wind'],
            aberration: ['mass suggestion', 'eyebite', 'mental prison', 'true seeing'],
            fiend: ['circle of death', 'create undead', 'harm', 'flesh to stone'],
            celestial: ['heal', 'blade barrier', 'heroes\' feast', 'true seeing'],
            fey: ['mass suggestion', 'eyebite', 'conjure fey', 'otto\'s irresistible dance'],
            undead: ['circle of death', 'create undead', 'harm', 'eyebite', 'soul cage']
        },
        7: {
            wizard: ['finger of death', 'forcecage', 'prismatic spray', 'teleport', 'plane shift', 'reverse gravity', 'power word pain', 'crown of stars'],
            sorcerer: ['finger of death', 'plane shift', 'prismatic spray', 'reverse gravity', 'teleport', 'power word pain', 'crown of stars'],
            warlock: ['finger of death', 'forcecage', 'plane shift', 'power word pain', 'crown of stars'],
            bard: ['etherealness', 'forcecage', 'mirage arcane', 'mordenkainen\'s magnificent mansion', 'mordenkainen\'s sword', 'plane shift', 'project image', 'regenerate', 'resurrection', 'symbol', 'teleport', 'power word pain'],
            cleric: ['conjure celestial', 'divine word', 'etherealness', 'fire storm', 'plane shift', 'regenerate', 'resurrection', 'symbol', 'temple of the gods'],
            druid: ['fire storm', 'mirage arcane', 'plane shift', 'regenerate', 'reverse gravity', 'whirlwind'],
            aberration: ['plane shift', 'finger of death', 'power word pain', 'forcecage'],
            fiend: ['finger of death', 'plane shift', 'fire storm', 'forcecage'],
            celestial: ['resurrection', 'regenerate', 'divine word', 'conjure celestial', 'plane shift'],
            fey: ['plane shift', 'mirage arcane', 'project image', 'etherealness'],
            undead: ['finger of death', 'plane shift', 'power word pain', 'forcecage']
        },
        8: {
            wizard: ['power word stun', 'dominate monster', 'maze', 'incendiary cloud', 'sunburst', 'feeblemind', 'clone', 'demiplane', 'maddening darkness', 'illusory dragon'],
            sorcerer: ['power word stun', 'dominate monster', 'incendiary cloud', 'sunburst', 'demiplane', 'maddening darkness'],
            warlock: ['demiplane', 'dominate monster', 'feeblemind', 'glibness', 'power word stun', 'maddening darkness'],
            bard: ['dominate monster', 'feeblemind', 'glibness', 'mind blank', 'power word stun'],
            cleric: ['antimagic field', 'control weather', 'earthquake', 'holy aura'],
            druid: ['animal shapes', 'antipathy/sympathy', 'control weather', 'earthquake', 'feeblemind', 'sunburst', 'tsunami'],
            aberration: ['feeblemind', 'dominate monster', 'maddening darkness', 'power word stun'],
            fiend: ['incendiary cloud', 'dominate monster', 'power word stun'],
            celestial: ['holy aura', 'sunburst'],
            fey: ['dominate monster', 'feeblemind', 'antipathy/sympathy'],
            undead: ['feeblemind', 'dominate monster', 'maddening darkness']
        },
        9: {
            wizard: ['power word kill', 'meteor swarm', 'wish', 'time stop', 'prismatic wall', 'gate', 'true polymorph', 'foresight', 'psychic scream', 'blade of disaster'],
            sorcerer: ['power word kill', 'meteor swarm', 'wish', 'time stop', 'gate', 'psychic scream'],
            warlock: ['astral projection', 'foresight', 'imprisonment', 'power word kill', 'true polymorph', 'psychic scream', 'blade of disaster'],
            bard: ['foresight', 'mass polymorph', 'power word heal', 'power word kill', 'true polymorph', 'psychic scream'],
            cleric: ['astral projection', 'gate', 'mass heal', 'true resurrection'],
            druid: ['foresight', 'shapechange', 'storm of vengeance', 'true resurrection'],
            aberration: ['power word kill', 'psychic scream', 'gate', 'true polymorph'],
            fiend: ['meteor swarm', 'power word kill', 'gate'],
            celestial: ['mass heal', 'true resurrection', 'gate'],
            fey: ['true polymorph', 'foresight', 'shapechange'],
            undead: ['power word kill', 'gate', 'astral projection']
        }
    },

    /**
     * Get spell slots for a level
     */
    getSpellSlots(level) {
        return this.spellSlotTable[Math.min(level, 20)] || this.spellSlotTable[1];
    },

    /**
     * Get spells for a caster level and type
     */
    getSpellsForLevel(level, type) {
        const spells = {
            cantrips: [],
            level1: [],
            level2: [],
            level3: [],
            level4: [],
            level5: [],
            level6: [],
            level7: [],
            level8: [],
            level9: [],
            atWill: [],
            '3day': [],
            '2day': [],
            '1day': []
        };

        // Determine spell source
        const spellSource = this.cantrips[type] ? type : 'wizard';

        // Get cantrips
        const availableCantrips = this.cantrips[spellSource] || this.cantrips.wizard;
        const numCantrips = Math.min(level < 4 ? 2 : level < 10 ? 3 : 4, availableCantrips.length);
        spells.cantrips = this.selectRandomSpells(availableCantrips, numCantrips);

        // Get leveled spells
        const maxSpellLevel = level < 3 ? 1 : level < 5 ? 2 : level < 7 ? 3 : level < 9 ? 4 : level < 11 ? 5 : level < 13 ? 6 : level < 15 ? 7 : level < 17 ? 8 : 9;

        for (let spellLevel = 1; spellLevel <= maxSpellLevel; spellLevel++) {
            const availableSpells = this.spellsByLevel[spellLevel]?.[spellSource] || this.spellsByLevel[spellLevel]?.wizard || [];
            const numSpells = Math.max(1, Math.min(4, Math.floor(level / 3)));
            spells[`level${spellLevel}`] = this.selectRandomSpells(availableSpells, numSpells);
        }

        return spells;
    },

    /**
     * Select random spells from a list
     */
    selectRandomSpells(spellList, count) {
        if (!spellList || spellList.length === 0) return [];
        const shuffled = [...spellList].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpellsData;
}
