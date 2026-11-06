
const characters = [
  {
    name: "Keisha Ellyana",
    group: "UiTM Student Group",
    role: "UiTM Student · Social Media Influencer",
    age: 21,
    ability: "Echo Projection",
    weapon: "Resonance Twin Daggers",
    epithet: "The Charming Deceiver",
    description: "A charismatic and fashionable Mass Communication student who enjoys attention and knows how to command a room. Playful, ambitious and observant, Keisha often hides her insecurities behind confidence and humour.",
    traits: ["Charismatic", "Confident", "Playful", "Observant"],
    details: "Creates lifestyle, fashion, beauty and university-related content on social media. She enjoys being seen, although that does not always mean she wants people to see who she really is."
  },
  {
    name: "Isyirah Amara",
    group: "UiTM Student Group",
    role: "UiTM Student · Law",
    age: 22,
    ability: "Lucky Shift",
    weapon: "Twin Crescent Blades",
    epithet: "The Lucky Troublemaker",
    description: "A cheerful, outgoing and mischievous law student. Isyirah is spontaneous, competitive, affectionate and outspoken, often acting before thinking things through.",
    traits: ["Cheerful", "Impulsive", "Mischievous", "Outgoing"],
    details: "She enjoys humour, playful teasing and spontaneous adventures. Her natural confidence sometimes makes her underestimate the consequences of her decisions."
  },
  {
    name: "Khairun Amara",
    group: "UiTM Student Group",
    role: "UiTM Student · Law",
    age: 22,
    ability: "Vector Thread",
    weapon: "Threadbound Rapier",
    epithet: "The Tactical Tease",
    description: "A composed, intelligent and witty law student. Khairun is observant, practical and independent, with a sharp sense of humour and a tendency to use sarcasm.",
    traits: ["Intelligent", "Composed", "Witty", "Protective"],
    details: "She is more analytical and controlled than her twin sister, Isyirah. Khairun prefers having a plan, although she knows that not everything can be controlled."
  },
  {
    name: "Badrul Aktar",
    group: "UiTM Student Group",
    role: "UiTM Student · Accountancy",
    age: 23,
    ability: "Iron Guard",
    weapon: "Bastion Warhammer",
    epithet: "The Unyielding Guardian",
    description: "A responsible, disciplined and practical accountancy student. Badrul is reserved and blunt, but dependable when others need help.",
    traits: ["Disciplined", "Responsible", "Patient", "Protective"],
    details: "He tends to show concern through practical assistance rather than emotional words. He takes responsibility seriously and dislikes unnecessary complications."
  },
  {
    name: "Hani Marissa",
    group: "UiTM Student Group",
    role: "UiTM Student · Computer Science",
    age: 21,
    ability: "System Interface",
    weapon: "Arc-Tech Staff",
    epithet: "The System Whisperer",
    description: "An intelligent, technically minded and detail-oriented student. Hani is reserved around unfamiliar people but becomes enthusiastic and expressive when discussing technology.",
    traits: ["Intelligent", "Curious", "Methodical", "Patient"],
    details: "She enjoys understanding how complicated systems work. Despite her technical confidence, she can sometimes struggle with social situations and expressing her own emotional needs."
  },
  {
    name: "Putri Imelda",
    group: "UiTM Student Group",
    role: "UiTM Student · Sport Science",
    age: 22,
    ability: "Kinetic Burst",
    weapon: "Impact Tonfas",
    epithet: "The Kinetic Brawler",
    description: "An athletic, competitive and outspoken sport science student. Putri is straightforward, energetic and protective of people she cares about.",
    traits: ["Athletic", "Competitive", "Straightforward", "Protective"],
    details: "She dislikes unnecessary drama and prefers direct communication. Although she can be short-tempered, she usually cools down quickly."
  },
  {
    name: "Arifin Badar",
    group: "Truth Seeker",
    role: "Leader · TS01 · UiTM Law Lecturer",
    age: 46,
    ability: "Tactical Sight",
    weapon: "Tactical Baton",
    epithet: "The Unyielding Strategist",
    description: "A highly analytical and composed law lecturer who leads the Truth Seekers. Arifin is disciplined, authoritative, observant and strategic.",
    traits: ["Analytical", "Strategic", "Disciplined", "Authoritative"],
    details: "He values preparation, reliable information and responsible decision-making. His leadership style is professional and demanding."
  },
  {
    name: "Madeline Ong",
    group: "Truth Seeker",
    role: "Vice Leader · TS02 · Police Officer",
    age: 31,
    ability: "Resonance Voice",
    weapon: "Reinforced Police Baton",
    epithet: "The Resonant Mediator",
    description: "A friendly, approachable and empathetic police officer. Madeline is cheerful, diplomatic and observant, balancing Arifin's serious leadership style.",
    traits: ["Friendly", "Empathetic", "Diplomatic", "Responsible"],
    details: "She values cooperation and tries to prevent unnecessary conflict. Her humour and approachable personality help maintain team morale."
  },
  {
    name: "Intan Najwa",
    group: "Truth Seeker",
    role: "Combat Specialist · TS03 · Grab Rider",
    age: 29,
    ability: "Momentum Drive",
    weapon: "Kinetic Knuckle Guards",
    epithet: "The Relentless Rider",
    description: "A fearless, independent and street-smart Grab rider. Intan is competitive, outspoken, resourceful and fiercely protective of her companions.",
    traits: ["Fearless", "Independent", "Competitive", "Resourceful"],
    details: "She prefers action over unnecessary discussion and is accustomed to handling difficult situations. Her impatience can sometimes get the better of her."
  },
  {
    name: "Ravin Kumar",
    group: "Truth Seeker",
    role: "Healer Specialist · TS04 · Restaurant Manager",
    age: 26,
    ability: "Vital Touch",
    weapon: "Rescue Combat Knife",
    epithet: "The Gentle Lifeline",
    description: "A patient, caring and easygoing restaurant manager. Ravin is empathetic, practical and reliable, often putting other people's needs before his own.",
    traits: ["Caring", "Patient", "Reliable", "Selfless"],
    details: "He provides emergency support and helps injured companions. He prefers resolving problems peacefully and can sometimes neglect his own well-being."
  },
  {
    name: "Afiq Ahnaf",
    group: "Truth Seeker",
    role: "Member · TS05 · Secondary School Student",
    age: 17,
    ability: "Flash Step",
    weapon: "Twin Tactical Knives",
    epithet: "The Flashing Rookie",
    description: "An energetic and adventurous teenager. Afiq is curious, impulsive, competitive and occasionally overconfident, but loyal to his companions.",
    traits: ["Energetic", "Adventurous", "Curious", "Impulsive"],
    details: "His youthful enthusiasm sometimes leads him into situations beyond his experience. He is still learning how to judge risks and responsibilities."
  },
  {
    name: "Izzati Syafiqah",
    group: "Truth Seeker",
    role: "Member · TS06 · Secondary School Student",
    age: 17,
    ability: "Danger Sense",
    weapon: "Tactical Short Spear",
    epithet: "The Silent Warning",
    description: "A thoughtful, observant and cautious teenager. Izzati is quiet around unfamiliar people but possesses a curious mind and a strong sense of empathy.",
    traits: ["Observant", "Thoughtful", "Cautious", "Empathetic"],
    details: "She prefers to understand a situation before acting. Despite occasional self-doubt, she can demonstrate considerable courage when others are in danger."
  },
  {
    name: "Dato' Samad Said",
    group: "Blood Cult",
    role: "Core Member · BS01 · Politician",
    age: 33,
    ability: "Authority Seal",
    weapon: "Ceremonial Tactical Cane",
    epithet: "The Crimson Authority",
    description: "A charismatic and calculating politician. Samad is ambitious, persuasive, authoritative and highly conscious of power and influence.",
    traits: ["Ambitious", "Charismatic", "Calculating", "Manipulative"],
    details: "He presents himself as polished and professional. His patience and ability to read social situations make him a formidable political operator."
  },
  {
    name: "Amelia Erina",
    group: "Blood Cult",
    role: "Core Member · BS02 · Bar Owner",
    age: 31,
    ability: "Allure Veil",
    weapon: "Concealed Stiletto Dagger",
    epithet: "The Velvet Siren",
    description: "An elegant, charismatic and socially intelligent bar owner. Amelia is confident, observant, adaptable and skilled at navigating social situations.",
    traits: ["Charismatic", "Confident", "Observant", "Secretive"],
    details: "She uses charm and social awareness to influence conversations and manage interactions. She rarely reveals more about herself than necessary."
  },
  {
    name: "Maria Akesah",
    group: "Blood Cult",
    role: "Core Member · BS03 · Security Operations Manager",
    age: 35,
    ability: "Blood Manipulation",
    weapon: "Tactical Kukri",
    epithet: "The Crimson Reaper",
    description: "A disciplined and intimidating private security operations manager. Maria is decisive, pragmatic, independent and resourceful.",
    traits: ["Disciplined", "Decisive", "Resilient", "Pragmatic"],
    details: "She values efficiency, preparation and practical results. Her suspicious nature makes her cautious about trusting unfamiliar people."
  },
  {
    name: "Dr. Ishvana Rai",
    group: "Blood Cult",
    role: "Core Member · BS04 · Medical Doctor",
    age: 28,
    ability: "Biological Analysis",
    weapon: "Medical Tactical Scalpel Set",
    epithet: "The Biological Observer",
    description: "An intelligent, methodical and clinical medical doctor. Ishvana is calm, observant, curious and professionally reserved.",
    traits: ["Intelligent", "Logical", "Methodical", "Observant"],
    details: "She approaches unfamiliar biological phenomena with scientific curiosity. She prefers careful examination and reliable observations over assumptions."
  },
  {
    name: "Liora Venn",
    group: "Blood Hour NPCs",
    role: "Neutral Entity · Trader",
    age: null,
    ability: "Ledger Sight",
    weapon: "Not publicly established",
    epithet: null,
    description: "A friendly and business-minded merchant operating The Red Exchange in Section 7, Shah Alam.",
    traits: ["Friendly", "Professional", "Business-minded"],
    details: "Liora trades Blood Hour goods and monster materials, evaluates material quality and facilitates transactions. Her market is known as The Red Exchange."
  },
  {
    name: "Maera Veyr",
    group: "Blood Hour NPCs",
    role: "Neutral Entity · Blacksmith",
    age: null,
    ability: "Forge Resonance",
    weapon: "Not publicly established",
    epithet: null,
    description: "A stern and focused blacksmith operating The Ember Anvil, connected to The Red Exchange.",
    traits: ["Stern", "Focused", "Direct", "Professional"],
    details: "Maera repairs and enhances equipment, evaluates materials and crafts weapons using suitable Blood Hour materials. She values quality craftsmanship and dislikes time-wasting."
  }
];

const groups = [
  "All",
  "UiTM Student Group",
  "Truth Seeker",
  "Blood Cult",
  "Blood Hour NPCs"
];

let activeGroup = "All";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

// ==========================================
// UNIVERSAL READING PANEL
// ==========================================

function createReadingPanel() {
  if ($("#readingModal")) return;

  document.body.insertAdjacentHTML("beforeend", `
    <div class="reading-modal" id="readingModal" aria-hidden="true">
      <div class="reading-backdrop" data-close-modal></div>
      <section class="reading-panel" role="dialog" aria-modal="true" aria-labelledby="readingTitle">
        <button class="reading-close" type="button" aria-label="Close" data-close-modal>×</button>
        <div class="reading-content" id="readingContent"></div>
      </section>
    </div>
  `);

  const modal = $("#readingModal");

  $$("[data-close-modal]", modal).forEach(button => {
    button.addEventListener("click", closeReadingPanel);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeReadingPanel();
  });
}

function openReadingPanel(content) {
  const modal = $("#readingModal");
  const panelContent = $("#readingContent");

  if (!modal || !panelContent) return;

  panelContent.innerHTML = content;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  $(".reading-close", modal)?.focus();
}

function closeReadingPanel() {
  const modal = $("#readingModal");
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

// ==========================================
// CHARACTER DATABASE
// ==========================================

function createFilterButtons() {
  const tools = $(".character-tools");
  if (!tools || $("#characterFilters")) return;

  const container = document.createElement("div");
  container.id = "characterFilters";
  container.className = "character-filters";

  groups.forEach(group => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = group;
    button.dataset.group = group;
    button.className = group === activeGroup ? "active" : "";

    button.addEventListener("click", () => {
      activeGroup = group;

      $$("#characterFilters button").forEach(item => {
        item.classList.toggle("active", item.dataset.group === group);
      });

      renderCharacters();
    });

    container.appendChild(button);
  });

  tools.insertAdjacentElement("afterend", container);
}

function characterCard(character) {
  const ageText = character.age === null
    ? "Age not publicly established"
    : `${character.age} years old`;

  const traits = character.traits.map(trait =>
    `<span class="character-tag">${escapeHTML(trait)}</span>`
  ).join("");

  return `
    <article class="character-card">
      <button class="character-open" type="button" data-character="${escapeHTML(character.name)}">
        <span class="character-group">${escapeHTML(character.group)}</span>
        <span class="character-role">${escapeHTML(character.role)}</span>
        <span class="character-name">${escapeHTML(character.name)}</span>
        ${character.epithet
          ? `<span class="character-epithet">${escapeHTML(character.epithet)}</span>`
          : ""}
        <span class="character-age">${escapeHTML(ageText)}</span>
        <span class="character-ability">${escapeHTML(character.ability)}</span>
        <span class="character-read">READ PROFILE <span>↗</span></span>
      </button>
    </article>
  `;
}

function characterProfile(character) {
  const ageText = character.age === null
    ? "Not publicly established"
    : `${character.age} years old`;

  const traits = character.traits.map(trait =>
    `<span class="character-tag">${escapeHTML(trait)}</span>`
  ).join("");

  return `
    <p class="modal-eyebrow">${escapeHTML(character.group)}</p>
    <h2 id="readingTitle">${escapeHTML(character.name)}</h2>
    ${character.epithet
      ? `<p class="modal-epithet">${escapeHTML(character.epithet)}</p>`
      : ""}
    <div class="profile-divider"></div>

    <div class="profile-facts">
      <div><small>ROLE</small><span>${escapeHTML(character.role)}</span></div>
      <div><small>AGE</small><span>${escapeHTML(ageText)}</span></div>
      <div><small>ABILITY</small><span>${escapeHTML(character.ability)}</span></div>
      <div><small>WEAPON</small><span>${escapeHTML(character.weapon)}</span></div>
    </div>

    <h3>PERSONALITY & OVERVIEW</h3>
    <p class="modal-description">${escapeHTML(character.description)}</p>

    <h3>PERSONALITY TRAITS</h3>
    <div class="character-tags modal-tags">${traits}</div>

    <h3>ADDITIONAL INFORMATION</h3>
    <p class="modal-description">${escapeHTML(character.details)}</p>
  `;
}

function renderCharacters() {
  const grid = $("#characterGrid");
  const search = $("#characterSearch");
  const count = $("#characterCount");

  if (!grid) return;

  const query = (search?.value || "").trim().toLowerCase();

  const filtered = characters.filter(character => {
    const searchable = [
      character.name,
      character.group,
      character.role,
      character.ability,
      character.weapon,
      character.epithet,
      character.description,
      character.details,
      ...character.traits
    ].join(" ").toLowerCase();

    return searchable.includes(query) &&
      (activeGroup === "All" || character.group === activeGroup);
  });

  grid.innerHTML = filtered.map(characterCard).join("");

  if (count) {
    count.textContent = `${filtered.length} PROFILES`;
  }

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No matching profiles found.</h3>
        <p>Try another name, ability or faction.</p>
      </div>
    `;
  }

  $$(".character-open", grid).forEach(button => {
    button.addEventListener("click", () => {
      const character = characters.find(item => item.name === button.dataset.character);
      if (character) openReadingPanel(characterProfile(character));
    });
  });
}

// ==========================================
// CLICK-TO-READ FOR INFORMATION CARDS
// ==========================================

function makeCardsClickable() {
  const cardSelectors = [
    ".info-card",
    ".stage-card",
    ".tower-card",
    ".faction-card",
    ".reference-card"
  ];

  cardSelectors.forEach(selector => {
    $$(selector).forEach(card => {
      if (card.dataset.readable === "true") return;

      card.dataset.readable = "true";
      card.classList.add("readable-card");

      const title = $("h3", card)?.textContent?.trim() || "Information";
      const content = $$("p", card)
        .map(p => `<p class="modal-description">${escapeHTML(p.textContent.trim())}</p>`)
        .join("");

      const number = $(".card-number, .stage-number, .tower-index", card)?.textContent || "";

      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Read ${title}`);

      const openCard = () => {
        openReadingPanel(`
          <p class="modal-eyebrow">BLOOD HOUR FIELD ARCHIVE</p>
          <h2 id="readingTitle">${escapeHTML(title)}</h2>
          ${number ? `<p class="modal-epithet">${escapeHTML(number)}</p>` : ""}
          <div class="profile-divider"></div>
          ${content}
        `);
      };

      card.addEventListener("click", event => {
        if (event.target.closest("a, button")) return;
        openCard();
      });

      card.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openCard();
        }
      });
    });
  });
}

// ==========================================
// NAVIGATION
// ==========================================

function initialiseNavigation() {
  const toggle = $("#menuToggle");
  const nav = $("#mainNav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  $$("a", nav).forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ==========================================
// INITIALISE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  createReadingPanel();
  createFilterButtons();
  renderCharacters();
  makeCardsClickable();
  initialiseNavigation();

  $("#characterSearch")?.addEventListener("input", renderCharacters);
});
