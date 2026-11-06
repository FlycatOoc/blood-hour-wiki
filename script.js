
const characters = [
  // ==========================================
  // UITM STUDENT GROUP
  // ==========================================
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

  // ==========================================
  // TRUTH SEEKER
  // ==========================================
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

  // ==========================================
  // BLOOD CULT
  // ==========================================
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

  // ==========================================
  // BLOOD HOUR NPCs
  // ==========================================
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

// ==========================================
// CHARACTER ARCHIVE
// ==========================================

const grid = document.getElementById("characterGrid");
const searchInput = document.getElementById("characterSearch");
const countDisplay = document.getElementById("characterCount");

const groups = [
  "All",
  "UiTM Student Group",
  "Truth Seeker",
  "Blood Cult",
  "Blood Hour NPCs"
];

let activeGroup = "All";

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function createFilterButtons() {
  if (!grid) return;

  const tools = document.querySelector(".character-tools");
  if (!tools || document.getElementById("characterFilters")) return;

  const filterContainer = document.createElement("div");
  filterContainer.id = "characterFilters";
  filterContainer.className = "character-filters";

  groups.forEach(group => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = group;
    button.dataset.group = group;
    button.className = group === activeGroup ? "active" : "";

    button.addEventListener("click", () => {
      activeGroup = group;

      filterContainer.querySelectorAll("button").forEach(item => {
        item.classList.toggle(
          "active",
          item.dataset.group === activeGroup
        );
      });

      renderCharacters();
    });

    filterContainer.appendChild(button);
  });

  tools.insertAdjacentElement("afterend", filterContainer);
}

function renderCharacters() {
  if (!grid) return;

  const query = (searchInput?.value || "").trim().toLowerCase();

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
      ...(character.traits || [])
    ].join(" ").toLowerCase();

    const matchesSearch = searchable.includes(query);
    const matchesGroup =
      activeGroup === "All" || character.group === activeGroup;

    return matchesSearch && matchesGroup;
  });

  grid.innerHTML = filtered.map((character, index) => {
    const epithet = character.epithet
      ? `<p class="character-epithet">${escapeHTML(character.epithet)}</p>`
      : "";

    const age = character.age !== null
      ? `<span>${character.age} years old</span>`
      : "";

    const traits = character.traits
      .map(trait => `<span class="character-tag">${escapeHTML(trait)}</span>`)
      .join("");

    return `
      <article class="character-card">
        <div class="character-meta">
          <small>${escapeHTML(character.group)} · ${escapeHTML(character.role)}</small>

          <h3>${escapeHTML(character.name)}</h3>

          ${epithet}

          <div class="character-information">
            ${age}
            <span>Ability: ${escapeHTML(character.ability)}</span>
            <span>Weapon: ${escapeHTML(character.weapon)}</span>
          </div>

          <p class="character-description">
            ${escapeHTML(character.description)}
          </p>

          <div class="character-tags">
            ${traits}
          </div>

          <details class="character-details">
            <summary>READ FULL PROFILE</summary>
            <p>${escapeHTML(character.details)}</p>
          </details>
        </div>
      </article>
    `;
  }).join("");

  if (countDisplay) {
    countDisplay.textContent =
      `${filtered.length} ${filtered.length === 1 ? "PROFILE" : "PROFILES"}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-character-results">
        <h3>No matching profiles found.</h3>
        <p>Try another name, ability or faction.</p>
      </div>
    `;
  }
}

// ==========================================
// NAVIGATION
// ==========================================

function initialiseNavigation() {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (!menuToggle || !mainNav) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ==========================================
// INITIALISE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // Remove the old artwork gallery completely.
  const oldGallery = document.getElementById("galleryModal");
  if (oldGallery) oldGallery.remove();

  // Remove any old static character cards.
  if (grid) grid.innerHTML = "";

  createFilterButtons();
  renderCharacters();
  initialiseNavigation();

  if (searchInput) {
    searchInput.addEventListener("input", renderCharacters);
  }
});
