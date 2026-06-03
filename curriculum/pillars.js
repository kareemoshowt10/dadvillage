// Dad Village — The Compounding Pillars
// ─────────────────────────────────────────────────────────────────────────
// THESIS: Generational wealth isn't transferred. It's built — one small
// decision at a time. Decades of research point to a single childhood
// capacity that predicts adult income, health, and life satisfaction better
// than IQ or family wealth: EXECUTIVE FUNCTION — the ability to focus, wait,
// hold a plan, adapt, and regulate. It is not inherited. It is built, in
// thousands of tiny moments between you and your child.
//
// Character IS the wealth. Money is downstream of these six traits.
// Every lesson in Dad Village builds at least one of them.

window.DV_WEALTH = {
    headline: "The real inheritance",
    thesis: "Generational wealth isn't handed down — it's built, one small decision at a time. The strongest childhood predictor of adult income, health, and life satisfaction isn't IQ or family money. It's executive function: the capacity to focus, wait, hold a plan, adapt, and self-regulate. You build it in thousands of tiny daily moments. This is the edge that compounds.",
    closer: "You're not raising a child who's entertained today. You're building the six traits that generate every advantage for the next fifty years."
};

// The six compounding pillars (executive-function components, made dad-readable).
window.DV_PILLARS = [
    { id: "focus",      label: "Focus",                 icon: "fa-bullseye",        color: "#2563eb",
      short: "Sustained attention",
      desc: "The ability to go deep and stay there. In a world engineered for distraction, deep focus is the rarest and most valuable skill there is.",
      compounds: "Deep work, mastery, and the patience to build things that take years." },
    { id: "impulse",    label: "Impulse Control",       icon: "fa-hand",            color: "#dc2626",
      short: "Inhibitory control",
      desc: "The pause between feeling and acting. The capacity to NOT do the easy thing. This single trait, measured at age 4, predicts adult outcomes for decades.",
      compounds: "Discipline, integrity, and the self-command that money can't buy." },
    { id: "memory",     label: "Working Memory",        icon: "fa-brain",           color: "#7c3aed",
      short: "Hold & use information",
      desc: "Keeping a plan in mind while acting on it. Following multi-step directions. The mental workspace where thinking, reasoning, and learning happen.",
      compounds: "Complex problem-solving, planning, and the ability to execute a vision." },
    { id: "flexibility",label: "Flexibility",           icon: "fa-shuffle",         color: "#0d9488",
      short: "Cognitive flexibility",
      desc: "Adapting when the plan breaks. Seeing a problem from a new angle. Switching strategies without melting down. The engine of resilience and creativity.",
      compounds: "Resilience, creativity, and the adaptability every elite career demands." },
    { id: "regulation", label: "Self-Regulation",       icon: "fa-water",           color: "#0891b2",
      short: "Emotional control",
      desc: "Riding the wave of a big feeling without being knocked over. Built first through your co-regulation, then internalized. The foundation of every relationship.",
      compounds: "Composure under pressure, leadership, and durable relationships." },
    { id: "delayed",    label: "Delayed Gratification", icon: "fa-seedling",        color: "#d97706",
      short: "Bigger-later over smaller-now",
      desc: "Choosing the bigger reward later over the smaller one now. This is the literal psychology of wealth-building — and it's trainable from toddlerhood.",
      compounds: "Saving, investing, long-term thinking — the core habit of every fortune." }
];

window.DV_PILLAR_BY_ID = {};
window.DV_PILLARS.forEach(p => { window.DV_PILLAR_BY_ID[p.id] = p; });

// Fallback mapping: any lesson without an explicit `pillar` inherits one from
// its Montessori skillDomain, so all existing lessons get tagged automatically.
window.DV_DOMAIN_TO_PILLAR = {
    "Practical Life": "focus",
    "Sensorial":      "focus",
    "Language":       "memory",
    "Math":           "memory",
    "Motor":          "impulse",
    "Emotional":      "regulation",
    "Social":         "impulse",
    "Bonding":        "regulation",
    "Cultural":       "flexibility"
};

window.dvPillarForLesson = function (lesson) {
    if (lesson && lesson.pillar && window.DV_PILLAR_BY_ID[lesson.pillar]) return window.DV_PILLAR_BY_ID[lesson.pillar];
    const mapped = lesson && window.DV_DOMAIN_TO_PILLAR[lesson.skillDomain];
    return mapped ? window.DV_PILLAR_BY_ID[mapped] : null;
};
