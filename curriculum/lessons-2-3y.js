// Dad Village — Sample curriculum: 2–3 years, Week 1.
// Vertical slice to validate the lesson data model.
//
// Lesson schema:
//   id              — stable unique key
//   ageBand         — taxonomy.ageBands[].id
//   day             — 1..7 (Mon..Sun)
//   slot            — taxonomy.slots[].id
//   skillDomain     — taxonomy.skillDomains[].id
//   format          — "screen" | "noscreen" | "dad"
//   title           — short, dad-readable
//   rationale       — *why* this matters at this age. One sentence.
//   duration        — minutes
//   repetition      — { cadence, weeks }  (see taxonomy.cadences)
//   contentRefs     — array of contentLibrary IDs to fulfill the lesson (optional)
//   fallback        — what to do if no screen / content unavailable
//   science         — { notes: string[], citation: string, alternative: string }  (optional)
//                     Surfaces in the "Why this works" expandable on cards.

window.DV_LESSON_PLANS = window.DV_LESSON_PLANS || {};

window.DV_LESSON_PLANS["2-3y"] = {
    version: 1,
    ageBand: "2-3y",
    weekLabel: "Week 1 — Foundations",
    lessons: [
        // ───── DAY 1 ─────
        { id: "L-2-3y-W1-D1-S1", ageBand: "2-3y", day: 1, slot: "morning",
          skillDomain: "Language", format: "screen",
          title: "Morning greeting + first signs",
          rationale: "Repetition of greeting + 1–2 signs builds receptive language and predictable rhythm.",
          duration: 12, repetition: { cadence: "daily", weeks: 2 },
          contentRefs: ["ms-rachel-morning"],
          fallback: "Dad signs Hello / More / All done at breakfast.",
          science: {
              notes: [
                  "Receptive language develops ~6 months ahead of expressive — signs unlock communication before speech is ready.",
                  "Predictable morning routines lower cortisol and increase attention for the rest of the day (Felitti, Pediatrics).",
                  "Co-viewing (you watching with them, naming things back) doubles the language uptake vs. solo viewing."
              ],
              citation: "Acredolo & Goodwyn, 2000 (Pediatric Research) on baby signs; AAP 2024 Media Use guidance on co-viewing.",
              alternative: "If you don't have a screen handy: sing the same hello song while signing Hello / More / All done at breakfast. The repetition matters more than the medium."
          } },

        { id: "L-2-3y-W1-D1-S2", ageBand: "2-3y", day: 1, slot: "midmorning",
          skillDomain: "Practical Life", format: "noscreen",
          title: "Pouring station",
          rationale: "Pouring builds wrist control, focus, and the dignity of doing it themselves.",
          duration: 8, repetition: { cadence: "daily", weeks: 2 },
          contentRefs: ["practical-pouring"],
          fallback: "Two small pitchers + dry rice or water at the table.",
          science: {
              notes: [
                  "Fine-motor pincer + wrist-rotation work in toddlers correlates with later handwriting readiness (Montessori, AMI research summary).",
                  "Real work (not pretend) drops behavior-disruption rates in this age band — they feel useful, not entertained.",
                  "Same task daily for 2 weeks beats novel tasks — this is the foundation of focused attention."
              ],
              citation: "Lillard, A. (2017) Montessori: The Science Behind the Genius. Chapter 4 on practical life.",
              alternative: "Buttoning a shirt, scooping rice with a spoon, wiping a spill — any controlled hand-motion job done by them, not for them."
          } },

        { id: "L-2-3y-W1-D1-S3", ageBand: "2-3y", day: 1, slot: "afternoon",
          skillDomain: "Motor", format: "screen",
          title: "Movement break — full body",
          rationale: "Cross-body movement after lunch resets focus and burns the wiggles.",
          duration: 10, repetition: { cadence: "alternating", weeks: 4 },
          contentRefs: ["jack-hartmann-move"],
          fallback: "5 min animal walks around the living room.",
          science: {
              notes: [
                  "Cross-lateral movement (left arm + right leg, etc.) activates corpus-callosum traffic — measurable focus boost lasts 30–45 min.",
                  "Vestibular input (spinning, jumping) regulates the nervous system better than time-out for an over-stimulated toddler.",
                  "Alternating-day cadence (vs. daily) keeps novelty high — daily becomes background, alternating stays engaging."
              ],
              citation: "Hannaford, C. (2005) Smart Moves: Why Learning Is Not All in Your Head.",
              alternative: "Animal walks across the living room (bear crawl, frog hop, crab walk). 5 min beats none."
          } },

        { id: "L-2-3y-W1-D1-S4", ageBand: "2-3y", day: 1, slot: "evening",
          skillDomain: "Bonding", format: "dad",
          title: "Read aloud with Dad",
          rationale: "Your voice + a book is the highest-leverage 12 minutes of the day.",
          duration: 12, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["read-aloud"],
          fallback: "Any board book. Sit on the floor. No phone in the room.",
          science: {
              notes: [
                  "Children read to daily by a parent hear ~1.4 million more words by kindergarten than children read to weekly.",
                  "Dad reading specifically (vs. mom) shows stronger correlation with later academic engagement — possibly because it's rarer and feels special.",
                  "Phone in the room — even face-down — measurably reduces conversational turn-taking. Leave it in another room."
              ],
              citation: "Logan, J. et al. (2019) The Million Word Gap, Journal of Developmental & Behavioral Pediatrics.",
              alternative: "Same book three nights in a row. Repetition is where the vocabulary actually lands."
          } },

        // ───── DAY 2 ─────
        { id: "L-2-3y-W1-D2-S1", ageBand: "2-3y", day: 2, slot: "morning",
          skillDomain: "Language", format: "screen",
          title: "Morning greeting + first signs",
          rationale: "Same as Day 1 — repetition is the lesson, not a bug.",
          duration: 12, repetition: { cadence: "daily", weeks: 2 },
          contentRefs: ["ms-rachel-morning"],
          fallback: "Dad signs Hello / More / All done at breakfast." },

        { id: "L-2-3y-W1-D2-S2", ageBand: "2-3y", day: 2, slot: "midmorning",
          skillDomain: "Practical Life", format: "noscreen",
          title: "Wiping tables & shelves",
          rationale: "Care-of-environment work builds belonging and gross motor control.",
          duration: 6, repetition: { cadence: "alternating", weeks: 4 },
          contentRefs: ["practical-wiping"],
          fallback: "Damp cloth + a low surface. Let them lead." },

        { id: "L-2-3y-W1-D2-S3", ageBand: "2-3y", day: 2, slot: "afternoon",
          skillDomain: "Sensorial", format: "noscreen",
          title: "Sensory bin exploration",
          rationale: "Open-ended sensory play extends attention span and supports regulation.",
          duration: 12, repetition: { cadence: "weekly", weeks: 8 },
          contentRefs: ["sensory-bin"],
          fallback: "Bin of dry beans + cups + spoons. Sit nearby, don't direct." },

        { id: "L-2-3y-W1-D2-S4", ageBand: "2-3y", day: 2, slot: "evening",
          skillDomain: "Emotional", format: "screen",
          title: "Naming feelings",
          rationale: "Giving feelings names is the foundation of self-regulation.",
          duration: 14, repetition: { cadence: "alternating", weeks: 6 },
          contentRefs: ["ms-rachel-emotions", "gracies-corner-feelings"],
          fallback: "Dad names his own feelings out loud during dinner." },

        // ───── DAY 3 ─────
        { id: "L-2-3y-W1-D3-S1", ageBand: "2-3y", day: 3, slot: "morning",
          skillDomain: "Language", format: "screen",
          title: "Morning greeting + first signs",
          rationale: "Day 3 of the same lesson. Watch for them anticipating the next sign.",
          duration: 12, repetition: { cadence: "daily", weeks: 2 },
          contentRefs: ["ms-rachel-morning"],
          fallback: "Dad signs Hello / More / All done at breakfast." },

        { id: "L-2-3y-W1-D3-S2", ageBand: "2-3y", day: 3, slot: "midmorning",
          skillDomain: "Math", format: "screen",
          title: "Counting songs",
          rationale: "Number names through music — pre-quantity, but the foundation.",
          duration: 15, repetition: { cadence: "alternating", weeks: 4 },
          contentRefs: ["super-simple-numbers"],
          fallback: "Count stairs out loud on the way down." },

        { id: "L-2-3y-W1-D3-S3", ageBand: "2-3y", day: 3, slot: "afternoon",
          skillDomain: "Cultural", format: "noscreen",
          title: "Family nature walk",
          rationale: "Fresh air, shared discovery, real-world vocabulary in context.",
          duration: 25, repetition: { cadence: "alternating", weeks: 12 },
          contentRefs: ["outdoor-walk"],
          fallback: "Walk around the block. Name 5 things they point at." },

        { id: "L-2-3y-W1-D3-S4", ageBand: "2-3y", day: 3, slot: "evening",
          skillDomain: "Bonding", format: "dad",
          title: "Evening wind-down ritual",
          rationale: "Same calm sequence every night makes bedtime a cue, not a fight.",
          duration: 12, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["dad-evening"],
          fallback: "Dim lights, soft voice, one song, one book." },

        // ───── DAY 4 ─────
        { id: "L-2-3y-W1-D4-S1", ageBand: "2-3y", day: 4, slot: "morning",
          skillDomain: "Language", format: "screen",
          title: "Morning greeting + first signs",
          rationale: "Day 4 of the same lesson. Watch for first independent sign attempts.",
          duration: 12, repetition: { cadence: "daily", weeks: 2 },
          contentRefs: ["ms-rachel-morning"],
          fallback: "Dad signs Hello / More / All done at breakfast." },

        { id: "L-2-3y-W1-D4-S2", ageBand: "2-3y", day: 4, slot: "midmorning",
          skillDomain: "Practical Life", format: "noscreen",
          title: "Pouring station",
          rationale: "Second pouring exposure of the week — repetition is what makes it stick.",
          duration: 8, repetition: { cadence: "daily", weeks: 2 },
          contentRefs: ["practical-pouring"],
          fallback: "Two small pitchers + dry rice or water at the table." },

        { id: "L-2-3y-W1-D4-S3", ageBand: "2-3y", day: 4, slot: "afternoon",
          skillDomain: "Motor", format: "screen",
          title: "Movement break — full body",
          rationale: "Alternating-day cadence keeps it novel without overstimulating.",
          duration: 10, repetition: { cadence: "alternating", weeks: 4 },
          contentRefs: ["jack-hartmann-move"],
          fallback: "5 min animal walks around the living room." },

        { id: "L-2-3y-W1-D4-S4", ageBand: "2-3y", day: 4, slot: "evening",
          skillDomain: "Bonding", format: "dad",
          title: "Read aloud with Dad",
          rationale: "Your voice + a book. Twelve minutes that outperforms anything on a screen.",
          duration: 12, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["read-aloud"],
          fallback: "Any board book. Sit on the floor. No phone in the room." },

        // ───── DAY 5 ─────
        { id: "L-2-3y-W1-D5-S1", ageBand: "2-3y", day: 5, slot: "morning",
          skillDomain: "Language", format: "screen",
          title: "Morning greeting + first signs",
          rationale: "End-of-week reinforcement — anticipation is now part of the lesson.",
          duration: 12, repetition: { cadence: "daily", weeks: 2 },
          contentRefs: ["ms-rachel-morning"],
          fallback: "Dad signs Hello / More / All done at breakfast." },

        { id: "L-2-3y-W1-D5-S2", ageBand: "2-3y", day: 5, slot: "midmorning",
          skillDomain: "Practical Life", format: "noscreen",
          title: "Wiping tables & shelves",
          rationale: "Second exposure this week. Less guidance, more autonomy.",
          duration: 6, repetition: { cadence: "alternating", weeks: 4 },
          contentRefs: ["practical-wiping"],
          fallback: "Damp cloth + a low surface. Let them lead." },

        { id: "L-2-3y-W1-D5-S3", ageBand: "2-3y", day: 5, slot: "afternoon",
          skillDomain: "Motor", format: "screen",
          title: "Cosmic Kids yoga — short story",
          rationale: "Movement inside a calm narrative — supports regulation post-lunch.",
          duration: 12, repetition: { cadence: "weekly", weeks: 8 },
          contentRefs: ["cosmic-kids-yoga"],
          fallback: "Lay down, slow belly breaths together for 2 minutes." },

        { id: "L-2-3y-W1-D5-S4", ageBand: "2-3y", day: 5, slot: "evening",
          skillDomain: "Emotional", format: "screen",
          title: "Naming feelings",
          rationale: "Second feelings exposure — pairs with whatever big emotion shows up this week.",
          duration: 14, repetition: { cadence: "alternating", weeks: 6 },
          contentRefs: ["ms-rachel-emotions", "gracies-corner-feelings"],
          fallback: "Dad names his own feelings out loud during dinner." },

        // ───── DAY 6 (Saturday — slower, more Dad-time) ─────
        { id: "L-2-3y-W1-D6-S1", ageBand: "2-3y", day: 6, slot: "morning",
          skillDomain: "Bonding", format: "dad",
          title: "Morning 1:1 time",
          rationale: "Weekend mornings are the highest-leverage Dad slot of the week.",
          duration: 15, repetition: { cadence: "weekly", weeks: 12 },
          contentRefs: ["dad-morning"],
          fallback: "Phone in another room. Floor time, no agenda, 15 min." },

        { id: "L-2-3y-W1-D6-S2", ageBand: "2-3y", day: 6, slot: "midmorning",
          skillDomain: "Math", format: "screen",
          title: "Counting songs",
          rationale: "Light, joyful number exposure. Number names before number sense.",
          duration: 15, repetition: { cadence: "alternating", weeks: 4 },
          contentRefs: ["super-simple-numbers"],
          fallback: "Count stairs out loud on the way down." },

        { id: "L-2-3y-W1-D6-S3", ageBand: "2-3y", day: 6, slot: "afternoon",
          skillDomain: "Cultural", format: "noscreen",
          title: "Family nature walk",
          rationale: "Weekend pace — longer walk, more pointing, more naming.",
          duration: 25, repetition: { cadence: "alternating", weeks: 12 },
          contentRefs: ["outdoor-walk"],
          fallback: "Walk around the block. Name 5 things they point at." },

        { id: "L-2-3y-W1-D6-S4", ageBand: "2-3y", day: 6, slot: "evening",
          skillDomain: "Bonding", format: "dad",
          title: "Evening wind-down ritual",
          rationale: "Same calm sequence every night, weekend or not — the consistency is the work.",
          duration: 12, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["dad-evening"],
          fallback: "Dim lights, soft voice, one song, one book." },

        // ───── DAY 7 (Sunday — reset day) ─────
        { id: "L-2-3y-W1-D7-S1", ageBand: "2-3y", day: 7, slot: "morning",
          skillDomain: "Language", format: "screen",
          title: "Morning greeting + first signs",
          rationale: "Final repetition of the week. Note which signs they now do unprompted.",
          duration: 12, repetition: { cadence: "daily", weeks: 2 },
          contentRefs: ["ms-rachel-morning"],
          fallback: "Dad signs Hello / More / All done at breakfast." },

        { id: "L-2-3y-W1-D7-S2", ageBand: "2-3y", day: 7, slot: "midmorning",
          skillDomain: "Sensorial", format: "noscreen",
          title: "Sensory bin exploration",
          rationale: "Open-ended sensorial work — bookend the week with calm focus.",
          duration: 12, repetition: { cadence: "weekly", weeks: 8 },
          contentRefs: ["sensory-bin"],
          fallback: "Bin of dry beans + cups + spoons. Sit nearby, don't direct." },

        { id: "L-2-3y-W1-D7-S3", ageBand: "2-3y", day: 7, slot: "afternoon",
          skillDomain: "Cultural", format: "noscreen",
          title: "Family nature walk",
          rationale: "Second outdoor exposure this week. Different route if possible.",
          duration: 25, repetition: { cadence: "alternating", weeks: 12 },
          contentRefs: ["outdoor-walk"],
          fallback: "Walk around the block. Name 5 things they point at." },

        { id: "L-2-3y-W1-D7-S4", ageBand: "2-3y", day: 7, slot: "evening",
          skillDomain: "Bonding", format: "dad",
          title: "Read aloud with Dad",
          rationale: "Close the week the way it should always close. Your voice, their book.",
          duration: 12, repetition: { cadence: "daily", weeks: 12 },
          contentRefs: ["read-aloud"],
          fallback: "Any board book. Sit on the floor. No phone in the room." }
    ]
};
