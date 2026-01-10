/**
 * Mundane Items
 * Trinkets, curios, flavor items, and improv hooks for the Mundane Trinkets hoard type
 */

const MundaneItems = {
    // Trinkets - small curiosities with no mechanical value
    trinkets: [
        { item: "A mummified goblin hand", hook: "Who did this belong to and why was it preserved?" },
        { item: "A piece of crystal that faintly glows in the moonlight", hook: "What ritual once used this focus?" },
        { item: "A gold coin minted in an unknown land", hook: "What distant kingdom still uses this currency?" },
        { item: "A diary written in a language you can't read", hook: "What secrets does it contain?" },
        { item: "A brass ring that never tarnishes", hook: "Is it truly non-magical, or just subtle?" },
        { item: "A chess piece carved from red glass", hook: "Where is the rest of the set?" },
        { item: "A pair of knucklebone dice with skulls on the 1s", hook: "What games of chance cost someone their life?" },
        { item: "A small portrait of a goblin in a locket", hook: "Who treasured this creature's image?" },
        { item: "A vial of liquid that glows faintly", hook: "Alchemical remnant or something stranger?" },
        { item: "A lock of silver hair tied with a black ribbon", hook: "A memento of love or a component for dark magic?" },
        { item: "A tiny mechanical crab that doesn't work", hook: "What gnome artificer made this, and can it be repaired?" },
        { item: "A glass orb filled with moving smoke", hook: "Trapped air elemental or clever parlor trick?" },
        { item: "A petrified mouse", hook: "Victim of a basilisk or a medusa's pet?" },
        { item: "An old key made of bone", hook: "What door does this open, and is it still standing?" },
        { item: "A tiny cage with no door", hook: "How did something get in—or out?" },
        { item: "A scroll case carved with demonic faces", hook: "What message was important enough for this container?" },
        { item: "A single boot sized for a child", hook: "What happened to its owner?" },
        { item: "A music box that plays an unfamiliar tune", hook: "What culture created this melody?" },
        { item: "A black candle that won't light", hook: "Does it only light under special conditions?" },
        { item: "A preserved eyeball in a jar", hook: "Human, monster, or something between?" },
        { item: "A wanted poster for someone who looks like a party member", hook: "Coincidence or ancestor?" },
        { item: "A tiny silver bell that makes no sound", hook: "Broken or designed for non-human ears?" },
        { item: "A piece of map showing an unrecognized coastline", hook: "Undiscovered land or ancient geography?" },
        { item: "A doll made of bundled sticks and twine", hook: "Child's toy or folk magic effigy?" },
        { item: "A half-eaten journal, pages chewed by rats", hook: "What information was lost?" },
        { item: "A compass that always points to the same spot", hook: "What lies at that location?" },
        { item: "A sealed letter addressed to 'The One Who Finds This'", hook: "What desperate message awaits?" },
        { item: "A small wooden box containing a human tooth", hook: "Trophy, relic, or spell component?" },
        { item: "A bloodstained playing card (the Ace of Swords)", hook: "Did this card seal someone's fate?" },
        { item: "A tiny painting of a tower that doesn't exist anymore", hook: "What destroyed it, and when?" }
    ],

    // Curios - slightly more substantial flavor items
    curios: [
        { item: "A taxidermied pseudodragon posed mid-flight", hook: "Beloved pet or hunting trophy?" },
        { item: "A collection of pressed flowers from different climates", hook: "A botanist's life work?" },
        { item: "A set of false teeth made of ivory", hook: "Noble's dentures or disguise tool?" },
        { item: "A book of nursery rhymes with disturbing illustrations", hook: "Children's book or coded warnings?" },
        { item: "A jar of pickled faerie (probably fake)", hook: "Hoax or actual preserved creature?" },
        { item: "A wedding dress stained with old blood", hook: "Murder or tragic accident?" },
        { item: "A collection of 23 different keys on a ring", hook: "What doors await opening?" },
        { item: "A ship in a bottle with tiny moving figures", hook: "Masterwork craft or trapped souls?" },
        { item: "A love letter written in code", hook: "Whose forbidden romance hides within?" },
        { item: "A clay tablet with ancient accounting records", hook: "What civilization kept these books?" },
        { item: "A bundle of letters tied with faded ribbon", hook: "Correspondence worth keeping—but why?" },
        { item: "A set of surgeon's tools, well-used", hook: "Healer's instruments or torturer's kit?" },
        { item: "A jar of teeth from various creatures", hook: "Trophy collection or material components?" },
        { item: "A deed to property in a town that no longer exists", hook: "What destroyed it, and is the land still valuable?" },
        { item: "A hand-drawn map of a dungeon with notes in the margins", hook: "Previous adventurer's guide—how far did they get?" },
        { item: "A collection of pressed monster scales", hook: "Scholar's research or hunter's mementos?" },
        { item: "A small shrine to an unknown god", hook: "Forgotten deity or foreign religion?" },
        { item: "A set of loaded dice", hook: "Did these belong to a cheater who got caught?" },
        { item: "A locket containing two portraits facing away from each other", hook: "Estranged lovers or feuding family?" },
        { item: "A list of names with most crossed out", hook: "Hit list, guest list, or something else?" }
    ],

    // Documents and papers
    documents: [
        { item: "A receipt for a large shipment of weapons", hook: "Who's arming up, and for what?" },
        { item: "A marriage certificate between two noble houses", hook: "Political alliance or love match?" },
        { item: "A confession written but never delivered", hook: "What guilt drove someone to write this?" },
        { item: "A bounty notice for a creature presumed mythical", hook: "Does this thing actually exist?" },
        { item: "A page from a spellbook, torn out", hook: "What spell was worth destroying?" },
        { item: "A contract signed in blood", hook: "Infernal bargain or theatrical flourish?" },
        { item: "A map with a location marked 'DO NOT DIG HERE'", hook: "Warning or reverse psychology?" },
        { item: "A letter from a dead relative", hook: "How long has this been lost?" },
        { item: "A recipe for an unknown potion", hook: "Miracle cure or dangerous poison?" },
        { item: "A schedule of guard rotations for a nearby keep", hook: "Who was planning an infiltration?" },
        { item: "A child's drawing of a monster", hook: "Imaginary creature or something they witnessed?" },
        { item: "A promissory note worth 500 gold", hook: "Will the debtor honor it?" },
        { item: "A list of ingredients for an unknown ritual", hook: "What was being summoned—or banished?" },
        { item: "A torn page from a historical text", hook: "What was written on the missing section?" },
        { item: "A theater playbill from 100 years ago", hook: "What famous actor performed that night?" }
    ],

    // Personal effects
    personalEffects: [
        { item: "A well-worn holy symbol of a common god", hook: "Faithful servant's keepsake" },
        { item: "A child's toy soldier, lovingly carved", hook: "Parent's last gift to a lost child?" },
        { item: "A pocket watch that runs backwards", hook: "Broken or intentionally designed this way?" },
        { item: "A pipe with strange residue in the bowl", hook: "What was being smoked?" },
        { item: "A comb with strands of unusual colored hair", hook: "What creature was groomed with this?" },
        { item: "A half-written song with tear stains on the page", hook: "What inspired such emotion?" },
        { item: "A set of marked cards", hook: "How many games were won dishonestly?" },
        { item: "A locket with a miniature painted poorly", hook: "Beloved despite the artist's lack of skill" },
        { item: "A collection of tavern tokens from across the realm", hook: "Well-traveled drinker's souvenirs" },
        { item: "A pair of spectacles with one cracked lens", hook: "Did their owner die before replacing them?" },
        { item: "A flask engraved with 'For Courage'", hook: "Did liquid courage fail someone?" },
        { item: "A ribbon from a tournament, faded but carefully preserved", hook: "Glory days remembered" },
        { item: "A lucky rabbit's foot (not very lucky for the rabbit)", hook: "How much luck did it actually bring?" },
        { item: "A bundle of incense that smells of memories", hook: "What scent triggers nostalgia?" },
        { item: "A signet ring with the seal filed off", hook: "Disgraced noble or stolen identity?" }
    ],

    // Creature parts and natural oddities
    creatureParts: [
        { item: "A large iridescent feather", hook: "What magnificent bird lost this?" },
        { item: "A fang as long as a dagger", hook: "What predator did this come from?" },
        { item: "A piece of shell covered in strange patterns", hook: "Giant turtle or something stranger?" },
        { item: "A tuft of fur that feels like silk", hook: "What creature has such luxurious coat?" },
        { item: "A claw that seems to absorb light", hook: "Shadow creature's remnant?" },
        { item: "A piece of amber with something moving inside", hook: "Preserved or still alive?" },
        { item: "A perfectly spherical stone found in a creature's gullet", hook: "Gizzard stone or magical focus?" },
        { item: "A scale that changes color in different light", hook: "Chameleon creature's shed scale?" },
        { item: "A small horn, spiraled and pearlescent", hook: "Baby unicorn or elderly fairy?" },
        { item: "A pinch of dust that glitters like stars", hook: "Pixie dust or celestial residue?" },
        { item: "A vial of viscous black liquid", hook: "Poison, ink, or something alive?" },
        { item: "A fossilized claw of enormous size", hook: "What ancient beast left this behind?" },
        { item: "A cocoon that occasionally twitches", hook: "What's gestating inside?" },
        { item: "A preserved tentacle in alcohol", hook: "Aberration anatomy sample?" },
        { item: "An egg of unknown origin, cold to the touch", hook: "Will it ever hatch?" }
    ],

    // Random mundane equipment (non-valuable but potentially useful)
    mundaneGear: [
        { item: "A slightly rusty crowbar", hook: "Tool or improvised weapon?" },
        { item: "50 feet of frayed rope", hook: "Still usable in a pinch" },
        { item: "A dented but functional lantern", hook: "Previous owner met a violent end?" },
        { item: "A set of worn playing cards", hook: "Entertainment on long journeys" },
        { item: "A bedroll that smells of campfire", hook: "Well-traveled adventurer's gear" },
        { item: "A cooking pot with a suspicious stain", hook: "What was last cooked in this?" },
        { item: "A bundle of torches, half-used", hook: "Exploration cut short?" },
        { item: "A waterskin patched multiple times", hook: "Desert survivor's lifeline" },
        { item: "A fishing line and hooks", hook: "Survival gear or hobby?" },
        { item: "A tinderbox with unusual striker marks", hook: "Started many fires—intentional or not?" },
        { item: "A small hand mirror, slightly warped", hook: "Does it show the truth?" },
        { item: "A belt pouch containing lint and a copper piece", hook: "Someone's life savings?" },
        { item: "A blank journal with a nice leather cover", hook: "Ready for someone's story" },
        { item: "A set of clothes, bloodstained but fine quality", hook: "What happened to the previous owner?" },
        { item: "A walking stick carved with trail markers", hook: "Guide's tool or memory aid?" }
    ],

    // Improv hooks - standalone story seeds
    improvHooks: [
        "This once belonged to someone important who disappeared",
        "There are initials carved into this that match a local noble family",
        "This appears in several old paintings of famous historical figures",
        "A merchant would pay handsomely for this—but why?",
        "This matches a description in a recent wanted poster",
        "Someone has been asking around town about this exact item",
        "This bears the mark of a guild thought to be disbanded",
        "The previous owner died under mysterious circumstances",
        "This is identical to something in a party member's backstory",
        "A sage claims this is connected to an ancient prophecy",
        "This was clearly hidden on purpose—but by whom?",
        "The craftsmanship suggests it was made by a specific individual",
        "This appears to be part of a larger set",
        "Strange, this shouldn't exist according to historical records",
        "Someone went to great lengths to acquire this"
    ]
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MundaneItems;
}
