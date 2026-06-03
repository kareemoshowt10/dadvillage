// Dad Village — Curriculum: 0–12 months, Week 1.
// Screen-free by design — AAP recommends no screen media under 18–24 months
// (except live video chat). This band is built almost entirely on noscreen +
// dad activities, which is the point: the most important early input is YOU.
//
// Schema matches lessons-2-3y.js (see that file for the full contract).

window.DV_LESSON_PLANS = window.DV_LESSON_PLANS || {};

window.DV_LESSON_PLANS["0-12mo"] = {
    version: 1,
    ageBand: "0-12mo",
    weekLabel: "Week 1 — Connection & Senses",
    lessons: [
        // ───── DAY 1 ─────
        { id: "L-0-12mo-W1-D1-S1", ageBand: "0-12mo", day: 1, slot: "morning",
          skillDomain: "Bonding", format: "dad",
          title: "Skin-to-skin + narration",
          rationale: "Skin-to-skin regulates heart rate and temperature while your voice builds the language foundation.",
          duration: 15, repetition: { cadence: "daily", weeks: 8 },
          contentRefs: ["dad-bonding"],
          fallback: "Shirt off, baby on chest, narrate what you see for 10 minutes.",
          science: {
              notes: [
                  "Skin-to-skin ('kangaroo care') measurably stabilizes infant heart rate, breathing, and temperature — and lowers dad's stress hormones too.",
                  "Fathers who do skin-to-skin in the first months show stronger long-term involvement and bonding.",
                  "Your lower-pitched voice is novel and attention-grabbing to an infant — narration here is pure language input."
              ],
              citation: "Feldman, R. et al. (2014) on kangaroo care and parent-infant bonding; WHO newborn care guidance.",
              alternative: "If skin-to-skin isn't possible, hold baby close and chest-facing while you talk through your morning."
          } },

        { id: "L-0-12mo-W1-D1-S2", ageBand: "0-12mo", day: 1, slot: "midmorning",
          skillDomain: "Sensorial", format: "noscreen",
          title: "Tummy time + voice",
          rationale: "Tummy time builds the neck, back, and core strength every later motor milestone depends on.",
          duration: 8, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["newborn-tummy"],
          fallback: "Lay baby on a firm surface, get down at eye level, and talk to them.",
          science: {
              notes: [
                  "Daily tummy time correlates with earlier rolling, sitting, and crawling — and reduces flat-head (plagiocephaly) risk.",
                  "Start with 1–2 minutes and build up. Crying just means it's hard work, like a baby push-up.",
                  "Getting down at their eye level turns it into face-to-face social time, not just exercise."
              ],
              citation: "AAP 'Back to Sleep, Tummy to Play' guidance; Pediatric Physical Therapy reviews on tummy time.",
              alternative: "Tummy-to-tummy: recline back and lay baby on your chest so they lift their head to see your face." } },

        { id: "L-0-12mo-W1-D1-S3", ageBand: "0-12mo", day: 1, slot: "afternoon",
          skillDomain: "Sensorial", format: "noscreen",
          title: "High-contrast visual time",
          rationale: "Newborn vision is blurry; bold black-and-white patterns are the first thing they can truly focus on.",
          duration: 6, repetition: { cadence: "alternating", weeks: 8 },
          contentRefs: ["infant-highcontrast"],
          fallback: "Hold a black-and-white patterned object 8–12 inches from their face and move it slowly.",
          science: {
              notes: [
                  "Newborns see best at 8–12 inches — about the distance to your face during feeding.",
                  "High-contrast patterns drive visual cortex development and teach visual tracking.",
                  "Slow side-to-side movement builds the eye-muscle control needed for later reading."
              ],
              citation: "AAP infant vision development milestones; research on contrast sensitivity in neonates.",
              alternative: "Your own face is the best high-contrast target there is — make slow exaggerated expressions." } },

        { id: "L-0-12mo-W1-D1-S4", ageBand: "0-12mo", day: 1, slot: "evening",
          skillDomain: "Bonding", format: "dad",
          title: "Bedtime wind-down + lullaby",
          rationale: "The same calm sequence every night teaches a tiny nervous system that sleep is coming.",
          duration: 12, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["dad-evening"],
          fallback: "Dim lights, quiet voice, one song, same order every night.",
          science: {
              notes: [
                  "Consistent bedtime routines from infancy are linked to better sleep onset and longer sleep duration.",
                  "Predictability lowers cortisol — the routine itself becomes the sleep cue.",
                  "Dad doing bedtime builds a distinct bond and gives mom a real break."
              ],
              citation: "Mindell, J. et al. (2009) on bedtime routines and infant sleep, Sleep journal.",
              alternative: "Even 5 minutes of the same dim-lights-and-humming sequence counts. Consistency over length." } },

        // ───── DAY 2 ─────
        { id: "L-0-12mo-W1-D2-S1", ageBand: "0-12mo", day: 2, slot: "morning",
          skillDomain: "Language", format: "dad",
          title: "Narrate your day",
          rationale: "Every word you say out loud is vocabulary banked for the language explosion to come.",
          duration: 10, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["infant-narrate"],
          fallback: "Talk through everything — 'Now we're changing your diaper, here's a clean one.'",
          science: {
              notes: [
                  "Infants in talk-rich homes hear millions more words by age 3 — the gap predicts later vocabulary and reading.",
                  "Pause after you speak as if waiting for a reply — this 'serve and return' wires conversational turn-taking.",
                  "Parentese (sing-song, exaggerated) genuinely accelerates uptake — it's not baby talk, it's effective."
              ],
              citation: "Hart & Risley word-gap research; Ferjan Ramírez et al. on parentese and language outcomes.",
              alternative: "Narrate a walk: name the dog, the tree, the bus. Real-world nouns in context." } },

        { id: "L-0-12mo-W1-D2-S2", ageBand: "0-12mo", day: 2, slot: "midmorning",
          skillDomain: "Sensorial", format: "noscreen",
          title: "Tummy time + voice",
          rationale: "Second session of the day — the strength gains come from frequency, not length.",
          duration: 8, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["newborn-tummy"],
          fallback: "Firm surface, eye level, talk and encourage. Stop before full meltdown.",
          science: {
              notes: [
                  "Several short sessions beat one long one for building tolerance and strength.",
                  "Place a toy just out of reach to motivate lifting and reaching.",
                  "Track progress — head higher, held longer — week over week."
              ],
              citation: "Pediatric Physical Therapy on tummy-time frequency.",
              alternative: "Lay them across your lap on their tummy and gently rub their back." } },

        { id: "L-0-12mo-W1-D2-S3", ageBand: "0-12mo", day: 2, slot: "afternoon",
          skillDomain: "Bonding", format: "dad",
          title: "Infant massage",
          rationale: "Calm, predictable touch lowers stress hormones and deepens your bond.",
          duration: 8, repetition: { cadence: "alternating", weeks: 8 },
          contentRefs: ["infant-massage"],
          fallback: "Warm hands, gentle strokes on legs and back, narrate as you go.",
          science: {
              notes: [
                  "Infant massage is associated with lower cortisol, better sleep, and improved weight gain in some studies.",
                  "It's a powerful bonding tool for dads specifically — touch builds attachment.",
                  "Watch their cues: relaxed = continue, turning away = stop."
              ],
              citation: "Field, T. on infant massage and stress reduction, Infant Behavior & Development.",
              alternative: "Gentle hand-over-hand pressure on arms and legs during a diaper change." } },

        { id: "L-0-12mo-W1-D2-S4", ageBand: "0-12mo", day: 2, slot: "evening",
          skillDomain: "Bonding", format: "dad",
          title: "Bedtime wind-down + lullaby",
          rationale: "Same calm sequence — repetition is what turns a routine into a sleep cue.",
          duration: 12, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["dad-evening"],
          fallback: "Dim lights, quiet voice, one song, same order.",
          science: {
              notes: [
                  "By night two the brain is already beginning to anticipate the sequence.",
                  "Singing the same lullaby nightly creates a strong, portable sleep association.",
                  "Keep it boring on purpose — bedtime is not playtime."
              ],
              citation: "Mindell, J. et al. (2009), Sleep.",
              alternative: "Hum the same tune while swaying. The melody is the anchor." } },

        // ───── DAY 3 ─────
        { id: "L-0-12mo-W1-D3-S1", ageBand: "0-12mo", day: 3, slot: "morning",
          skillDomain: "Bonding", format: "dad",
          title: "Skin-to-skin + narration",
          rationale: "Day 3 — the regulation benefits compound with consistency.",
          duration: 15, repetition: { cadence: "daily", weeks: 8 },
          contentRefs: ["dad-bonding"],
          fallback: "Shirt off, baby on chest, narrate for 10 minutes.",
          science: {
              notes: [
                  "Consistent skin-to-skin builds a secure attachment base that supports later independence.",
                  "It triggers oxytocin in both of you — the bonding hormone.",
                  "Morning is ideal — calm, alert, before the day's demands."
              ],
              citation: "Feldman, R. et al. (2014).",
              alternative: "Babywearing chest-facing while you move around the house." } },

        { id: "L-0-12mo-W1-D3-S2", ageBand: "0-12mo", day: 3, slot: "midmorning",
          skillDomain: "Sensorial", format: "noscreen",
          title: "Treasure basket exploration",
          rationale: "Safe natural objects to grasp and mouth feed the senses and build fine motor control.",
          duration: 10, repetition: { cadence: "weekly", weeks: 8 },
          contentRefs: ["infant-treasure"],
          fallback: "A wooden spoon, a soft brush, a metal cup — safe household objects, supervised.",
          science: {
              notes: [
                  "Mouthing is how infants 'see' texture and shape — it's exploration, not just teething.",
                  "Varied natural materials (wood, metal, fabric) give richer sensory data than plastic toys.",
                  "Always supervise; choke-test every object (no smaller than a toilet-paper tube)."
              ],
              citation: "Goldschmied & Jackson, 'People Under Three' on heuristic play / treasure baskets.",
              alternative: "Hand them one safe object at a time and name it as they explore." } },

        { id: "L-0-12mo-W1-D3-S3", ageBand: "0-12mo", day: 3, slot: "afternoon",
          skillDomain: "Cultural", format: "noscreen",
          title: "Outdoor stroll + narration",
          rationale: "Fresh air, new light and sound, and your running commentary on the world.",
          duration: 20, repetition: { cadence: "alternating", weeks: 12 },
          contentRefs: ["outdoor-walk"],
          fallback: "Walk around the block. Name the dog, the tree, the breeze.",
          science: {
              notes: [
                  "Natural light exposure helps regulate developing circadian rhythms (better night sleep).",
                  "Novel sights and sounds are rich sensory input — narrate them to layer language on top.",
                  "Outdoor time lowers stress for the parent too, which the baby feels."
              ],
              citation: "Research on infant light exposure and circadian development.",
              alternative: "Sit by an open window and describe what you both can see and hear." } },

        { id: "L-0-12mo-W1-D3-S4", ageBand: "0-12mo", day: 3, slot: "evening",
          skillDomain: "Language", format: "dad",
          title: "Read aloud with Dad",
          rationale: "It's never too early. Your voice + a simple board book is pure connection and language.",
          duration: 8, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["read-aloud"],
          fallback: "Any high-contrast board book. They're listening to your voice, not the plot.",
          science: {
              notes: [
                  "Reading to infants daily is linked to stronger later vocabulary and reading readiness.",
                  "Babies bond to the rhythm and closeness — comprehension comes later, the habit starts now.",
                  "Let them grab and mouth the book; that's engagement, not misbehavior."
              ],
              citation: "Logan, J. et al. (2019) The Million Word Gap, JDBP.",
              alternative: "Recite a nursery rhyme from memory while holding them close." } },

        // ───── DAY 4 ─────
        { id: "L-0-12mo-W1-D4-S1", ageBand: "0-12mo", day: 4, slot: "morning",
          skillDomain: "Language", format: "dad",
          title: "Narrate your day",
          rationale: "Keep the words flowing — frequency is everything at this age.",
          duration: 10, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["infant-narrate"],
          fallback: "Narrate breakfast, the weather, your plans. Pause for their 'replies.'",
          science: {
              notes: [
                  "Serve-and-return — pausing for their coos — literally builds brain architecture (Harvard CDC).",
                  "Respond to babbles as if they're words; this teaches that communication works.",
                  "Quality of interaction matters as much as quantity of words."
              ],
              citation: "Harvard Center on the Developing Child, serve-and-return framework.",
              alternative: "Copy their sounds back to them and wait — a real back-and-forth." } },

        { id: "L-0-12mo-W1-D4-S2", ageBand: "0-12mo", day: 4, slot: "midmorning",
          skillDomain: "Sensorial", format: "noscreen",
          title: "Tummy time + voice",
          rationale: "Daily strength work — by now you may see steadier head control.",
          duration: 8, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["newborn-tummy"],
          fallback: "Firm surface, eye level, encourage and celebrate small lifts.",
          science: {
              notes: [
                  "Watch for milestones: steadier head, pushing up on forearms.",
                  "A small mirror in front can motivate longer lifts.",
                  "Consistency beats duration — keep it daily."
              ],
              citation: "AAP tummy-time guidance.",
              alternative: "Tummy-down across your forearm ('football hold') for a change of position." } },

        { id: "L-0-12mo-W1-D4-S3", ageBand: "0-12mo", day: 4, slot: "afternoon",
          skillDomain: "Emotional", format: "noscreen",
          title: "Mirror play",
          rationale: "Faces — even their own — are endlessly fascinating and build social-emotional wiring.",
          duration: 5, repetition: { cadence: "alternating", weeks: 8 },
          contentRefs: ["infant-mirror"],
          fallback: "Hold baby in front of a mirror, point, smile, name 'That's you!'",
          science: {
              notes: [
                  "Face processing is a major early developmental task; mirrors give endless practice.",
                  "Shared smiles in the mirror build the foundation of social connection.",
                  "True self-recognition comes later (~18mo) — for now it's joyful face study."
              ],
              citation: "Developmental research on infant face preference and the mirror self-recognition timeline.",
              alternative: "Make slow exaggerated faces close up and let them study and copy you." } },

        { id: "L-0-12mo-W1-D4-S4", ageBand: "0-12mo", day: 4, slot: "evening",
          skillDomain: "Bonding", format: "dad",
          title: "Bedtime wind-down + lullaby",
          rationale: "Same sequence, every night. The boredom is the feature.",
          duration: 12, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["dad-evening"],
          fallback: "Dim lights, quiet voice, one song, same order.",
          science: {
              notes: [
                  "Four nights in — the routine is becoming a reliable cue.",
                  "Avoid screens in the hour before; blue light suppresses melatonin even in infants.",
                  "A consistent dad-led bedtime is a gift to the whole household."
              ],
              citation: "Mindell, J. et al. (2009); AAP on screens and sleep.",
              alternative: "Same lullaby, swaying in the dark. Keep it identical." } },

        // ───── DAY 5 ─────
        { id: "L-0-12mo-W1-D5-S1", ageBand: "0-12mo", day: 5, slot: "morning",
          skillDomain: "Bonding", format: "dad",
          title: "Skin-to-skin + narration",
          rationale: "End the week the way it started — calm chest time and a stream of words.",
          duration: 15, repetition: { cadence: "daily", weeks: 8 },
          contentRefs: ["dad-bonding"],
          fallback: "Shirt off, baby on chest, narrate for 10 minutes.",
          science: {
              notes: [
                  "By now skin-to-skin may visibly calm a fussy baby within minutes.",
                  "The oxytocin boost supports your own mood and bonding.",
                  "This is the single highest-ROI infant activity — protect it."
              ],
              citation: "Feldman, R. et al. (2014).",
              alternative: "Chest-facing carrier while you talk through the morning." } },

        { id: "L-0-12mo-W1-D5-S2", ageBand: "0-12mo", day: 5, slot: "midmorning",
          skillDomain: "Sensorial", format: "noscreen",
          title: "High-contrast visual time",
          rationale: "Revisit the bold patterns — track how much longer they focus now.",
          duration: 6, repetition: { cadence: "alternating", weeks: 8 },
          contentRefs: ["infant-highcontrast"],
          fallback: "Black-and-white object 8–12 inches away, moved slowly side to side.",
          science: {
              notes: [
                  "Visual tracking improves week over week — notice the gains.",
                  "Pair with naming: 'black… white… stripes.' Language rides along.",
                  "Color vision matures over the first months; high contrast stays engaging meanwhile."
              ],
              citation: "AAP infant vision milestones.",
              alternative: "Slow-moving ceiling fan or window blinds also captivate — narrate them." } },

        { id: "L-0-12mo-W1-D5-S3", ageBand: "0-12mo", day: 5, slot: "afternoon",
          skillDomain: "Bonding", format: "dad",
          title: "Infant massage",
          rationale: "Second massage of the week — wind-down and connection through touch.",
          duration: 8, repetition: { cadence: "alternating", weeks: 8 },
          contentRefs: ["infant-massage"],
          fallback: "Warm hands, gentle legs-and-back strokes, narrate softly.",
          science: {
              notes: [
                  "Routine massage can ease fussiness and support digestion (gentle tummy strokes).",
                  "It teaches your baby that touch is safe and loving.",
                  "Great pre-bath or pre-nap wind-down."
              ],
              citation: "Field, T., Infant Behavior & Development.",
              alternative: "Gentle bicycle-legs and tummy circles to help with gas." } },

        { id: "L-0-12mo-W1-D5-S4", ageBand: "0-12mo", day: 5, slot: "evening",
          skillDomain: "Bonding", format: "dad",
          title: "Bedtime wind-down + lullaby",
          rationale: "Close the week with the same trusted sequence.",
          duration: 12, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["dad-evening"],
          fallback: "Dim lights, quiet voice, one song, same order.",
          science: {
              notes: [
                  "Five consistent nights builds a genuinely reliable cue.",
                  "Resist the urge to vary it — sameness is the medicine.",
                  "You're laying sleep habits that pay off for years."
              ],
              citation: "Mindell, J. et al. (2009).",
              alternative: "Same lullaby, same chair, same dim light." } },

        // ───── DAY 6 (weekend — more Dad presence) ─────
        { id: "L-0-12mo-W1-D6-S1", ageBand: "0-12mo", day: 6, slot: "morning",
          skillDomain: "Bonding", format: "dad",
          title: "Protected 1:1 floor time",
          rationale: "Weekend mornings are the highest-leverage Dad slot — phone away, fully present.",
          duration: 15, repetition: { cadence: "weekly", weeks: 12 },
          contentRefs: ["dad-morning"],
          fallback: "On the floor, baby's eye level, follow their lead. No phone in the room.",
          science: {
              notes: [
                  "Following the baby's lead (vs. directing) builds secure attachment and self-agency.",
                  "Undistracted attention is the rarest, highest-value input you can give.",
                  "Weekend presence from dad is strongly protective for development."
              ],
              citation: "Harvard CDC on responsive caregiving; father-involvement research.",
              alternative: "Lie on the floor and let them crawl/roll to and over you." } },

        { id: "L-0-12mo-W1-D6-S2", ageBand: "0-12mo", day: 6, slot: "midmorning",
          skillDomain: "Sensorial", format: "noscreen",
          title: "Treasure basket exploration",
          rationale: "Weekend pace — more time to let them lead the sensory exploration.",
          duration: 10, repetition: { cadence: "weekly", weeks: 8 },
          contentRefs: ["infant-treasure"],
          fallback: "A few safe natural objects, supervised, let them choose.",
          science: {
              notes: [
                  "Self-directed exploration builds concentration and decision-making, even in infancy.",
                  "Sit back and observe — resist the urge to demonstrate.",
                  "Rotate objects weekly to keep novelty high."
              ],
              citation: "Goldschmied & Jackson on heuristic play.",
              alternative: "A kitchen drawer of safe items (wooden spoons, silicone cups)." } },

        { id: "L-0-12mo-W1-D6-S3", ageBand: "0-12mo", day: 6, slot: "afternoon",
          skillDomain: "Cultural", format: "noscreen",
          title: "Outdoor stroll + narration",
          rationale: "A longer weekend walk — more sights, more words, more shared calm.",
          duration: 25, repetition: { cadence: "alternating", weeks: 12 },
          contentRefs: ["outdoor-walk"],
          fallback: "A longer walk. Stop and let them watch trees, dogs, people.",
          science: {
              notes: [
                  "Afternoon daylight reinforces day/night rhythm for better sleep.",
                  "New environments are rich, free sensory curriculum.",
                  "Narrating the walk layers language onto novel experience."
              ],
              citation: "Infant circadian and sensory development research.",
              alternative: "Sit in a park and describe everything that moves." } },

        { id: "L-0-12mo-W1-D6-S4", ageBand: "0-12mo", day: 6, slot: "evening",
          skillDomain: "Bonding", format: "dad",
          title: "Bedtime wind-down + lullaby",
          rationale: "Weekend or not, the sequence stays identical.",
          duration: 12, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["dad-evening"],
          fallback: "Dim lights, quiet voice, one song, same order.",
          science: {
              notes: [
                  "Weekends are where routines usually slip — hold the line.",
                  "Consistency across all 7 days is what makes the cue reliable.",
                  "Travel-proof your routine by keeping it simple and portable."
              ],
              citation: "Mindell, J. et al. (2009).",
              alternative: "Same lullaby, wherever you are." } },

        // ───── DAY 7 (reset day) ─────
        { id: "L-0-12mo-W1-D7-S1", ageBand: "0-12mo", day: 7, slot: "morning",
          skillDomain: "Bonding", format: "dad",
          title: "Skin-to-skin + narration",
          rationale: "Begin the reset day with the anchor activity.",
          duration: 15, repetition: { cadence: "daily", weeks: 8 },
          contentRefs: ["dad-bonding"],
          fallback: "Shirt off, baby on chest, narrate calmly.",
          science: {
              notes: [
                  "A full week of daily skin-to-skin builds a strong attachment base.",
                  "Notice how much faster they settle now.",
                  "Carry the habit into week two — the gains are cumulative."
              ],
              citation: "Feldman, R. et al. (2014).",
              alternative: "Quiet chest time with soft humming." } },

        { id: "L-0-12mo-W1-D7-S2", ageBand: "0-12mo", day: 7, slot: "midmorning",
          skillDomain: "Sensorial", format: "noscreen",
          title: "Tummy time + voice",
          rationale: "Bookend the week with strength work — celebrate the week's progress.",
          duration: 8, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["newborn-tummy"],
          fallback: "Firm surface, eye level, encourage. Note how they've grown.",
          science: {
              notes: [
                  "Compare to Day 1 — most babies hold their head higher and longer after a week.",
                  "Keep building minutes gradually into week two.",
                  "Frequency remains the key variable."
              ],
              citation: "Pediatric Physical Therapy.",
              alternative: "Tummy time on your chest while you recline." } },

        { id: "L-0-12mo-W1-D7-S3", ageBand: "0-12mo", day: 7, slot: "afternoon",
          skillDomain: "Emotional", format: "noscreen",
          title: "Mirror play",
          rationale: "End the week with joyful face study and shared smiles.",
          duration: 5, repetition: { cadence: "alternating", weeks: 8 },
          contentRefs: ["infant-mirror"],
          fallback: "Mirror time — point, smile, name 'That's you!'",
          science: {
              notes: [
                  "Repeated mirror play deepens social engagement and shared joy.",
                  "Watch for them brightening at the reflection — early social awareness.",
                  "Pair with their name to start building self-concept."
              ],
              citation: "Infant social-emotional development research.",
              alternative: "Peekaboo — the original object-permanence game." } },

        { id: "L-0-12mo-W1-D7-S4", ageBand: "0-12mo", day: 7, slot: "evening",
          skillDomain: "Language", format: "dad",
          title: "Read aloud with Dad",
          rationale: "Close the week the way you'll close every day for years — your voice, a book, closeness.",
          duration: 8, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["read-aloud"],
          fallback: "One board book, slow and warm. The habit is the point.",
          science: {
              notes: [
                  "A nightly book builds both language and a powerful sleep association.",
                  "Same few books on repeat is ideal — familiarity is comforting and educational.",
                  "You're starting a habit that compounds for a decade."
              ],
              citation: "Logan, J. et al. (2019), JDBP.",
              alternative: "A recited rhyme in the dark works just as well." } }
    ]
};
