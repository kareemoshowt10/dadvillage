// Dad Village — Curriculum Taxonomy
// Source of truth for age bands and Montessori-aligned skill domains.
// Loaded as a plain global so it works from file:// (no fetch/CORS issues).

window.DV_TAXONOMY = {
    version: 1,

    ageBands: [
        { id: "0-12mo",  label: "0–12 months",  focus: ["Bonding", "Sensorial", "Motor"] },
        { id: "12-24mo", label: "12–24 months", focus: ["Language", "Motor", "Practical Life"] },
        { id: "2-3y",    label: "2–3 years",    focus: ["Language", "Practical Life", "Sensorial", "Motor", "Emotional"] },
        { id: "3-4y",    label: "3–4 years",    focus: ["Language", "Math", "Practical Life", "Cultural", "Emotional"] },
        { id: "4-5y",    label: "4–5 years",    focus: ["Language", "Math", "Cultural", "Practical Life", "Social"] },
        { id: "5-6y",    label: "5–6 years",    focus: ["Language", "Math", "Cultural", "Social", "Emotional"] }
    ],

    // Montessori-aligned skill domains. Order intentional — practical life first.
    skillDomains: [
        { id: "Practical Life", description: "Real-world independence: pouring, dressing, cleaning, food prep." },
        { id: "Sensorial",      description: "Refining the senses through deliberate exploration of textures, sounds, shapes." },
        { id: "Language",       description: "Spoken language, vocabulary, phonics, reading readiness." },
        { id: "Math",           description: "Number sense, counting, quantity, early operations." },
        { id: "Cultural",       description: "Geography, science, art, music, nature, the wider world." },
        { id: "Motor",          description: "Gross and fine motor coordination." },
        { id: "Emotional",      description: "Naming feelings, self-regulation, empathy." },
        { id: "Social",         description: "Turn-taking, cooperation, manners." },
        { id: "Bonding",        description: "Connection rituals between Dad and child." }
    ],

    // Daily slot grid — every lesson gets dropped into one of these.
    slots: [
        { id: "morning",     label: "Morning",     defaultHour: 8  },
        { id: "midmorning",  label: "Mid-morning", defaultHour: 10 },
        { id: "afternoon",   label: "Afternoon",   defaultHour: 14 },
        { id: "evening",     label: "Evening",     defaultHour: 17 }
    ],

    // Format affects how content is delivered and how screen time is counted.
    formats: ["screen", "noscreen", "dad"],

    // Codified repetition cadences. Repetition is core — Miss Rachel works *because* of it.
    cadences: [
        { id: "daily",        description: "Same lesson, every day for N weeks. Strongest learning." },
        { id: "alternating",  description: "Every other day. Lower intensity, broader coverage." },
        { id: "weekly",       description: "Once per week. Novelty / cultural exposure." },
        { id: "as-needed",    description: "Triggered by mood, weather, or context." }
    ]
};
