// Dad Village — Curriculum: 12–24 months, Week 1.
// The toddler band. Walking, first words, and the birth of executive function.
// This is the flagship "small decisions → generational wealth" band: every
// lesson is tagged to one of the six Compounding Pillars (see pillars.js) and
// carries a `compounds` note — the long-game payoff of the tiny daily decision.
//
// Schema = lessons-2-3y.js + two fields:
//   pillar    — one of DV_PILLARS ids: focus | impulse | memory | flexibility | regulation | delayed
//   compounds — one sentence: what this small habit compounds into over decades

window.DV_LESSON_PLANS = window.DV_LESSON_PLANS || {};

window.DV_LESSON_PLANS["12-24mo"] = {
    version: 1,
    ageBand: "12-24mo",
    weekLabel: "Week 1 — The First Compounding",
    lessons: [
        // ───── DAY 1 ─────
        { id: "L-12-24mo-W1-D1-S1", ageBand: "12-24mo", day: 1, slot: "morning",
          skillDomain: "Language", format: "noscreen", pillar: "memory",
          title: "Point & name book",
          rationale: "Naming pictures and pausing for their attempt builds vocabulary and the mental workspace of working memory.",
          compounds: "The verbal fluency and recall that underpins every later academic and professional advantage.",
          duration: 8, repetition: { cadence: "daily", weeks: 4 },
          contentRefs: ["toddler-naming"],
          fallback: "Any picture book. Point, name, pause, let them try the word.",
          science: {
              notes: [
                  "Pausing after you name something ('this is a... ?') forces retrieval — that's working memory being built.",
                  "Toddlers who are labeled-to often hit a vocabulary explosion around 18 months.",
                  "Follow their pointing finger — child-led naming sticks far better than adult-led quizzing."
              ],
              citation: "Working-memory & vocabulary research; Hart & Risley on talk-rich environments.",
              alternative: "Name objects on a walk and pause for their echo." } },

        { id: "L-12-24mo-W1-D1-S2", ageBand: "12-24mo", day: 1, slot: "midmorning",
          skillDomain: "Sensorial", format: "noscreen", pillar: "flexibility",
          title: "Shape sorter — let them struggle",
          rationale: "Trying, failing, rotating, and finally succeeding is cognitive flexibility being forged in real time.",
          compounds: "The resilience and problem-solving that separates people who quit from people who figure it out.",
          duration: 8, repetition: { cadence: "alternating", weeks: 6 },
          contentRefs: ["toddler-shapesorter"],
          fallback: "Drop blocks into a box with a cut hole. Don't rush to help.",
          science: {
              notes: [
                  "The struggle IS the lesson — jumping in to solve it robs them of the flexibility rep.",
                  "Count to ten before offering help. Productive struggle builds persistence.",
                  "Celebrate the effort and strategy ('you turned it!'), not just the success."
              ],
              citation: "Dweck on process praise; cognitive-flexibility development research.",
              alternative: "Nesting cups — which fits inside which? Same trial-and-error." } },

        { id: "L-12-24mo-W1-D1-S3", ageBand: "12-24mo", day: 1, slot: "afternoon",
          skillDomain: "Motor", format: "noscreen", pillar: "impulse",
          title: "Freeze dance (stop & go)",
          rationale: "Dancing then freezing on cue is the single best impulse-control game in early childhood.",
          compounds: "The pause between impulse and action — the trait that, measured at age 4, predicts decades of outcomes.",
          duration: 8, repetition: { cadence: "alternating", weeks: 8 },
          contentRefs: ["toddler-freeze"],
          fallback: "Play music, dance, stop it suddenly — 'FREEZE!' Start again.",
          science: {
              notes: [
                  "Stop-and-go games directly train inhibitory control — the core of executive function.",
                  "It's joyful, so they build the hardest skill while laughing.",
                  "Gradually make the freezes longer to raise the challenge."
              ],
              citation: "Diamond, A. (2013) on executive function; Tools of the Mind research on self-regulation games.",
              alternative: "'Red light / green light' walking across the room." } },

        { id: "L-12-24mo-W1-D1-S4", ageBand: "12-24mo", day: 1, slot: "evening",
          skillDomain: "Bonding", format: "dad", pillar: "regulation",
          title: "Read aloud + wind-down",
          rationale: "Your calm voice and the same closing sequence teach a toddler nervous system how to downshift.",
          compounds: "Internalized self-regulation — the composure that leads rooms and weathers storms.",
          duration: 10, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["read-aloud"],
          fallback: "Same two books, soft voice, dim light. No phone in the room.",
          science: {
              notes: [
                  "Co-regulation now becomes self-regulation later — they borrow your calm until it's theirs.",
                  "A predictable wind-down lowers cortisol and signals safety.",
                  "Repeated books build the comfort of mastery and the rhythm of language."
              ],
              citation: "Co-regulation research; Mindell on bedtime routines.",
              alternative: "Recite a familiar rhyme in the dark while rocking." } },

        // ───── DAY 2 ─────
        { id: "L-12-24mo-W1-D2-S1", ageBand: "12-24mo", day: 2, slot: "morning",
          skillDomain: "Language", format: "dad", pillar: "memory",
          title: "Narrate + first directions",
          rationale: "Simple one-step directions ('bring me the cup') exercise working memory and language together.",
          compounds: "The ability to hold a plan in mind and execute it — the root of follow-through.",
          duration: 8, repetition: { cadence: "daily", weeks: 6 },
          contentRefs: ["infant-narrate"],
          fallback: "Give one simple, doable instruction and celebrate the follow-through.",
          science: {
              notes: [
                  "Following a one-step direction requires holding it in working memory — a real cognitive rep.",
                  "Keep it concrete and achievable; success builds willingness.",
                  "Build to two-step directions over the coming weeks ('get your shoes and bring them here')."
              ],
              citation: "Working-memory development; Vygotsky on language as a tool of self-direction.",
              alternative: "Turn cleanup into directions: 'put the ball in the basket.'" } },

        { id: "L-12-24mo-W1-D2-S2", ageBand: "12-24mo", day: 2, slot: "midmorning",
          skillDomain: "Practical Life", format: "noscreen", pillar: "focus",
          title: "Stacking & nesting",
          rationale: "Building a tower demands sustained attention and steady hands — concentration you can watch deepen.",
          compounds: "The capacity for deep work — the rarest, highest-paid skill in a distracted economy.",
          duration: 10, repetition: { cadence: "alternating", weeks: 6 },
          contentRefs: ["toddler-stacking"],
          fallback: "Plastic cups or blocks. Stack, topple, repeat. Let them lead.",
          science: {
              notes: [
                  "Watch the length of their concentration grow week over week — that's trainable focus.",
                  "Knocking it down is part of the joy and the cause-and-effect learning.",
                  "Resist over-helping; let the tower wobble and fall."
              ],
              citation: "Montessori on concentration; attention-span development research.",
              alternative: "Stack books or tupperware. Anything stackable counts." } },

        { id: "L-12-24mo-W1-D2-S3", ageBand: "12-24mo", day: 2, slot: "afternoon",
          skillDomain: "Motor", format: "noscreen", pillar: "regulation",
          title: "Carry & heavy work",
          rationale: "Carrying something with weight gives deep proprioceptive input that calms and organizes the nervous system.",
          compounds: "A body that can self-soothe and stay regulated under physical and emotional load.",
          duration: 8, repetition: { cadence: "alternating", weeks: 8 },
          contentRefs: ["toddler-heavywork"],
          fallback: "Let them carry a small basket of books or push the laundry bin.",
          science: {
              notes: [
                  "'Heavy work' (carrying, pushing, pulling) is a proven regulation tool used by OTs.",
                  "It satisfies the toddler drive to be useful and capable.",
                  "Great reset before a transition or when they're wound up."
              ],
              citation: "Occupational-therapy literature on proprioceptive input and regulation.",
              alternative: "Carry groceries in, push a chair, haul a water jug." } },

        { id: "L-12-24mo-W1-D2-S4", ageBand: "12-24mo", day: 2, slot: "evening",
          skillDomain: "Practical Life", format: "noscreen", pillar: "impulse",
          title: "Toys-away ritual",
          rationale: "Stopping play to put things back is a small daily act of impulse control and contribution.",
          compounds: "The discipline of finishing — and the identity of someone who contributes, not just consumes.",
          duration: 6, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["toddler-cleanup"],
          fallback: "One basket, one cleanup song, do it together every night.",
          science: {
              notes: [
                  "Ending the fun to clean up is a real inhibitory-control rep, done daily.",
                  "Doing it WITH them (not for them) builds the contribution habit.",
                  "A consistent song makes it a ritual, not a battle."
              ],
              citation: "Inhibitory control research; family-contribution & later success studies (Rossmann).",
              alternative: "Race to put all the red things away first." } },

        // ───── DAY 3 ─────
        { id: "L-12-24mo-W1-D3-S1", ageBand: "12-24mo", day: 3, slot: "morning",
          skillDomain: "Language", format: "noscreen", pillar: "memory",
          title: "Point & name book",
          rationale: "Repetition of the naming ritual is where the vocabulary actually consolidates.",
          compounds: "A deep vocabulary — the strongest single correlate of later reading and earning.",
          duration: 8, repetition: { cadence: "daily", weeks: 4 },
          contentRefs: ["toddler-naming"],
          fallback: "Same favorite book. Repetition is the feature, not the bug.",
          science: {
              notes: [
                  "Re-reading the same book builds anticipation and lets them 'fill in' words — pure retrieval practice.",
                  "Let them turn the pages and control the pace.",
                  "Add one new word per reading to stretch them gently."
              ],
              citation: "Repeated-reading and vocabulary consolidation research.",
              alternative: "Name body parts in the mirror together." } },

        { id: "L-12-24mo-W1-D3-S2", ageBand: "12-24mo", day: 3, slot: "midmorning",
          skillDomain: "Sensorial", format: "noscreen", pillar: "memory",
          title: "Hide & find games",
          rationale: "Remembering where a toy was hidden under a cloth is object permanence becoming working memory.",
          compounds: "The mental workspace for planning, reasoning, and holding complex ideas in mind.",
          duration: 6, repetition: { cadence: "alternating", weeks: 6 },
          contentRefs: ["toddler-peekaboo"],
          fallback: "Hide a toy under a cloth while they watch; ask 'where did it go?'",
          science: {
              notes: [
                  "Finding a hidden object requires holding its location in mind — a working-memory rep.",
                  "Increase difficulty: two cloths, then hide it without them watching the spot.",
                  "The delight when they find it is dopamine reinforcing the skill."
              ],
              citation: "Object-permanence and working-memory development (Piaget, Diamond).",
              alternative: "Hide yourself behind a door and pop out — peekaboo scaled up." } },

        { id: "L-12-24mo-W1-D3-S3", ageBand: "12-24mo", day: 3, slot: "afternoon",
          skillDomain: "Cultural", format: "noscreen", pillar: "flexibility",
          title: "Outdoor explore",
          rationale: "New terrain, new textures, new problems to navigate — flexibility built in the real world.",
          compounds: "Adaptability and curiosity — the disposition that thrives when circumstances change.",
          duration: 25, repetition: { cadence: "alternating", weeks: 12 },
          contentRefs: ["outdoor-walk"],
          fallback: "Walk somewhere with things to climb, step over, and pick up.",
          science: {
              notes: [
                  "Uneven natural terrain challenges balance, planning, and adaptation.",
                  "Let them set the pace and direction — autonomy builds engagement.",
                  "Narrate the novelty to layer language onto experience."
              ],
              citation: "Research on outdoor play, motor planning, and executive function.",
              alternative: "An indoor obstacle course of cushions and tunnels." } },

        { id: "L-12-24mo-W1-D3-S4", ageBand: "12-24mo", day: 3, slot: "evening",
          skillDomain: "Bonding", format: "dad", pillar: "regulation",
          title: "Read aloud + wind-down",
          rationale: "The nightly anchor — your calm transferred, the day closed the same way.",
          compounds: "Self-regulation and a secure base — the platform every other trait is built on.",
          duration: 10, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["read-aloud"],
          fallback: "Same books, soft voice, dim light.",
          science: {
              notes: [
                  "The sameness is the medicine — predictability is what calms.",
                  "Secure attachment formed now is the foundation EF compounds on.",
                  "Phone out of the room; presence is the active ingredient."
              ],
              citation: "Attachment theory; co-regulation research.",
              alternative: "Slow rocking and a hummed lullaby." } },

        // ───── DAY 4 ─────
        { id: "L-12-24mo-W1-D4-S1", ageBand: "12-24mo", day: 4, slot: "morning",
          skillDomain: "Bonding", format: "dad", pillar: "delayed",
          title: "The tiny wait",
          rationale: "A few seconds of 'wait... wait... now!' before a snack is the very first rep of delayed gratification.",
          compounds: "The literal psychology of wealth — choosing the bigger later over the smaller now.",
          duration: 5, repetition: { cadence: "daily", weeks: 8 },
          contentRefs: ["toddler-waiting"],
          fallback: "Snack in hand: 'wait... wait... NOW.' Start with 2 seconds.",
          science: {
              notes: [
                  "Waiting is trainable — start with 2–3 seconds and stretch slowly.",
                  "Make the wait playful and always honor it — trust that the reward comes is what makes waiting possible.",
                  "This is the toddler ancestor of the marshmallow test."
              ],
              citation: "Mischel's delayed-gratification research and its decades-long predictive power.",
              alternative: "'In a minute' during play, then reliably deliver — predictability builds the skill." } },

        { id: "L-12-24mo-W1-D4-S2", ageBand: "12-24mo", day: 4, slot: "midmorning",
          skillDomain: "Practical Life", format: "noscreen", pillar: "focus",
          title: "Pouring & transferring",
          rationale: "Moving water or beans between cups demands total concentration and careful hands.",
          compounds: "Sustained focus and the dignity of doing real things well.",
          duration: 8, repetition: { cadence: "alternating", weeks: 6 },
          contentRefs: ["practical-pouring"],
          fallback: "Two small cups + dry beans or water. Expect spills — that's fine.",
          science: {
              notes: [
                  "The intense focus toddlers bring to pouring is concentration being trained.",
                  "Spilling and noticing is part of the cause-and-effect learning.",
                  "A small sponge nearby lets them own the cleanup too."
              ],
              citation: "Montessori practical-life research on concentration.",
              alternative: "Spoon beans from one bowl to another." } },

        { id: "L-12-24mo-W1-D4-S3", ageBand: "12-24mo", day: 4, slot: "afternoon",
          skillDomain: "Motor", format: "noscreen", pillar: "impulse",
          title: "Freeze dance (stop & go)",
          rationale: "Back to the best impulse-control game — longer freezes now to raise the bar.",
          compounds: "The self-command to stop on a dime — discipline you can feel building.",
          duration: 8, repetition: { cadence: "alternating", weeks: 8 },
          contentRefs: ["toddler-freeze"],
          fallback: "Music on, dance, sudden 'FREEZE!' Hold it a beat longer each time.",
          science: {
              notes: [
                  "Extending the freeze gradually increases the inhibitory-control demand.",
                  "Add 'fast/slow' dancing to layer in cognitive flexibility.",
                  "Laughter keeps the hardest skill enjoyable."
              ],
              citation: "Diamond (2013); Tools of the Mind.",
              alternative: "Marching that stops on 'stop.'" } },

        { id: "L-12-24mo-W1-D4-S4", ageBand: "12-24mo", day: 4, slot: "evening",
          skillDomain: "Practical Life", format: "noscreen", pillar: "impulse",
          title: "Toys-away ritual",
          rationale: "The nightly stop-and-tidy — small, repeated, identity-forming.",
          compounds: "The finish-what-you-start discipline that separates the consistent from the talented.",
          duration: 6, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["toddler-cleanup"],
          fallback: "One basket, one song, together.",
          science: {
              notes: [
                  "By day four the ritual is forming; resistance is normal, hold it gently.",
                  "Narrate the identity: 'we're a family that puts things back.'",
                  "Done together, never as punishment."
              ],
              citation: "Family-contribution research; habit-formation literature.",
              alternative: "Sort toys into the right bins as a game." } },

        // ───── DAY 5 ─────
        { id: "L-12-24mo-W1-D5-S1", ageBand: "12-24mo", day: 5, slot: "morning",
          skillDomain: "Language", format: "screen", pillar: "memory",
          title: "Ms. Rachel — words & signs",
          rationale: "High-quality, co-viewed language content reinforces the week's vocabulary work.",
          compounds: "Verbal capital — fluency and recall that compound across every future conversation and negotiation.",
          duration: 12, repetition: { cadence: "alternating", weeks: 4 },
          contentRefs: ["ms-rachel-morning"],
          fallback: "Sing the same songs and do the signs yourself — you're the best content.",
          science: {
              notes: [
                  "Co-viewing (watching WITH them and repeating back) roughly doubles language uptake from screens.",
                  "Pause and imitate the signs together — interaction is what makes screen time useful.",
                  "Keep it short and intentional; the screen is the assistant, you're the teacher."
              ],
              citation: "AAP 2024 media guidance on co-viewing; research on screens vs. interaction.",
              alternative: "Sing the songs and sign at breakfast — no screen needed." } },

        { id: "L-12-24mo-W1-D5-S2", ageBand: "12-24mo", day: 5, slot: "midmorning",
          skillDomain: "Sensorial", format: "noscreen", pillar: "focus",
          title: "Sensory bin exploration",
          rationale: "Open-ended scooping and pouring in a bin can hold a toddler's focus longer than almost anything.",
          compounds: "Extended attention span — the muscle behind every form of mastery.",
          duration: 12, repetition: { cadence: "weekly", weeks: 8 },
          contentRefs: ["sensory-bin"],
          fallback: "Bin of dry beans/rice + cups and scoops. Sit near, don't direct.",
          science: {
              notes: [
                  "Time it — uninterrupted sensory play often reveals surprisingly long attention.",
                  "Don't interrupt a focused child; protecting concentration is the lesson.",
                  "Rotate the materials weekly to renew interest."
              ],
              citation: "Montessori on the 'normalized' concentrating child.",
              alternative: "A water bin in the bath with cups." } },

        { id: "L-12-24mo-W1-D5-S3", ageBand: "12-24mo", day: 5, slot: "afternoon",
          skillDomain: "Sensorial", format: "noscreen", pillar: "flexibility",
          title: "Shape sorter — let them struggle",
          rationale: "Second flexibility session — watch their strategy improve from last time.",
          compounds: "The adaptive problem-solving that turns obstacles into puzzles instead of stop signs.",
          duration: 8, repetition: { cadence: "alternating", weeks: 6 },
          contentRefs: ["toddler-shapesorter"],
          fallback: "Blocks into a cut box. Hold back your help; let them rotate and retry.",
          science: {
              notes: [
                  "Notice if they now rotate the shape before forcing it — that's a flexibility gain.",
                  "Name the strategy out loud so they can internalize it.",
                  "The frustration tolerance built here is grit in miniature."
              ],
              citation: "Cognitive-flexibility research; productive-struggle pedagogy.",
              alternative: "Posting coins (large, safe) into a slot." } },

        { id: "L-12-24mo-W1-D5-S4", ageBand: "12-24mo", day: 5, slot: "evening",
          skillDomain: "Bonding", format: "dad", pillar: "regulation",
          title: "Read aloud + wind-down",
          rationale: "Close the week the way you'll close the next thousand nights.",
          compounds: "A regulated nervous system and a secure bond — the bedrock of a stable, confident adult.",
          duration: 10, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["read-aloud"],
          fallback: "Same books, soft voice, dim light.",
          science: {
              notes: [
                  "Five consistent nights makes the wind-down a reliable internal cue.",
                  "Your steady presence is teaching their body what calm feels like.",
                  "This bond is the platform everything else compounds on."
              ],
              citation: "Attachment & co-regulation research.",
              alternative: "Rocking and a hummed song." } },

        // ───── DAY 6 (weekend) ─────
        { id: "L-12-24mo-W1-D6-S1", ageBand: "12-24mo", day: 6, slot: "morning",
          skillDomain: "Bonding", format: "dad", pillar: "regulation",
          title: "Protected 1:1 floor time",
          rationale: "Phone away, fully present, following their lead — the highest-leverage Dad slot of the week.",
          compounds: "Felt security and self-worth — the quiet confidence money can't manufacture.",
          duration: 15, repetition: { cadence: "weekly", weeks: 12 },
          contentRefs: ["dad-morning"],
          fallback: "On the floor, follow their play, narrate, no agenda. Phone in another room.",
          science: {
              notes: [
                  "Child-led, undistracted attention is the rarest and most powerful input you can give.",
                  "Following (not directing) builds agency and secure attachment.",
                  "Twenty distracted minutes is worth less than ten fully present ones."
              ],
              citation: "Harvard CDC on responsive caregiving; father-involvement research.",
              alternative: "Get on the floor and let them climb on you." } },

        { id: "L-12-24mo-W1-D6-S2", ageBand: "12-24mo", day: 6, slot: "midmorning",
          skillDomain: "Math", format: "screen", pillar: "memory",
          title: "Counting songs",
          rationale: "Number names through music — the first pegs of numerical working memory.",
          compounds: "Early number sense — the on-ramp to the quantitative confidence elite paths require.",
          duration: 12, repetition: { cadence: "alternating", weeks: 4 },
          contentRefs: ["super-simple-numbers"],
          fallback: "Count stairs, count fingers, count snacks out loud.",
          science: {
              notes: [
                  "Number names come before number sense — the song is the scaffold.",
                  "Count real things together to attach quantity to the words.",
                  "Co-view: count along, don't just play it."
              ],
              citation: "Early-numeracy research.",
              alternative: "Count everything: steps, buttons, bites." } },

        { id: "L-12-24mo-W1-D6-S3", ageBand: "12-24mo", day: 6, slot: "afternoon",
          skillDomain: "Motor", format: "noscreen", pillar: "regulation",
          title: "Carry & heavy work",
          rationale: "Weekend big-body work — carrying, pushing, hauling. Regulation through the body.",
          compounds: "A body that downshifts itself — the somatic basis of staying cool under pressure.",
          duration: 10, repetition: { cadence: "alternating", weeks: 8 },
          contentRefs: ["toddler-heavywork"],
          fallback: "Carry firewood-sized objects, push a loaded laundry basket across the room.",
          science: {
              notes: [
                  "Proprioceptive 'heavy work' is a go-to regulation strategy for a reason.",
                  "It channels toddler energy into useful, calming effort.",
                  "Pair with a real job ('help me carry these in') for contribution too."
              ],
              citation: "OT literature on proprioception and self-regulation.",
              alternative: "Help carry groceries from the car." } },

        { id: "L-12-24mo-W1-D6-S4", ageBand: "12-24mo", day: 6, slot: "evening",
          skillDomain: "Practical Life", format: "noscreen", pillar: "impulse",
          title: "Toys-away ritual",
          rationale: "Weekends are where routines slip — hold the nightly tidy.",
          compounds: "Consistency itself — the unglamorous habit that beats raw talent over a lifetime.",
          duration: 6, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["toddler-cleanup"],
          fallback: "One basket, one song, together — weekend included.",
          science: {
              notes: [
                  "Holding the routine on weekends is what makes it a true habit.",
                  "Model it cheerfully; your attitude becomes theirs.",
                  "Small daily reps beat occasional big cleanups."
              ],
              citation: "Habit-formation research.",
              alternative: "Tidy one zone together before bath." } },

        // ───── DAY 7 (reset) ─────
        { id: "L-12-24mo-W1-D7-S1", ageBand: "12-24mo", day: 7, slot: "morning",
          skillDomain: "Bonding", format: "dad", pillar: "delayed",
          title: "The tiny wait",
          rationale: "End the week reinforcing the most valuable trait of all — the willingness to wait.",
          compounds: "The long-game patience behind every fortune, degree, and lasting relationship.",
          duration: 5, repetition: { cadence: "daily", weeks: 8 },
          contentRefs: ["toddler-waiting"],
          fallback: "'Wait... wait... NOW.' Stretch it a second longer than day one.",
          science: {
              notes: [
                  "Compare to day 4 — most toddlers can wait a beat longer after a week.",
                  "Always deliver on the wait; reliability is what makes patience rational.",
                  "Name it: 'you waited! Good waiting.'"
              ],
              citation: "Mischel; trust-and-delay research (Kidd et al., reliability shapes waiting).",
              alternative: "A short wait before a favorite song starts." } },

        { id: "L-12-24mo-W1-D7-S2", ageBand: "12-24mo", day: 7, slot: "midmorning",
          skillDomain: "Practical Life", format: "noscreen", pillar: "focus",
          title: "Stacking & nesting",
          rationale: "Bookend the week with a focus session — measure the concentration gain.",
          compounds: "Deep-focus capacity — the compounding asset behind mastery in any field.",
          duration: 10, repetition: { cadence: "alternating", weeks: 6 },
          contentRefs: ["toddler-stacking"],
          fallback: "Cups or blocks, stack and topple, let them lead.",
          science: {
              notes: [
                  "Note how much taller and longer they build vs. day two.",
                  "Protect the focus — don't interrupt a child mid-build.",
                  "Offer a gentle 'next challenge' only once they've mastered the current one."
              ],
              citation: "Attention-span and concentration research.",
              alternative: "Build with anything stackable in the house." } },

        { id: "L-12-24mo-W1-D7-S3", ageBand: "12-24mo", day: 7, slot: "afternoon",
          skillDomain: "Cultural", format: "noscreen", pillar: "flexibility",
          title: "Outdoor explore",
          rationale: "Second outdoor session — new route, new problems to adapt to.",
          compounds: "Curiosity and adaptability — the engine of lifelong learning.",
          duration: 25, repetition: { cadence: "alternating", weeks: 12 },
          contentRefs: ["outdoor-walk"],
          fallback: "A different walk than midweek. Let them lead and explore.",
          science: {
              notes: [
                  "A new route forces fresh adaptation — flexibility in action.",
                  "Following their curiosity builds intrinsic motivation.",
                  "Name what's new to layer language onto exploration."
              ],
              citation: "Outdoor-play and executive-function research.",
              alternative: "Rearrange a cushion obstacle course indoors." } },

        { id: "L-12-24mo-W1-D7-S4", ageBand: "12-24mo", day: 7, slot: "evening",
          skillDomain: "Bonding", format: "dad", pillar: "regulation",
          title: "Read aloud + wind-down",
          rationale: "Close week one the way you'll close every week — calm, connected, consistent.",
          compounds: "The secure, regulated base from which a confident, capable adult is eventually built.",
          duration: 10, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["read-aloud"],
          fallback: "Same books, soft voice, dim light. Phone in another room.",
          science: {
              notes: [
                  "Seven straight nights — the wind-down is now a genuine anchor.",
                  "Carry it into week two unchanged; the gains are cumulative.",
                  "This nightly bond is the quiet foundation of everything else."
              ],
              citation: "Attachment, co-regulation, and bedtime-routine research.",
              alternative: "Rocking and a familiar lullaby." } }
    ]
};
