
/* =========================================================
   BLOOD HOUR WIKI
   PUBLIC ARCHIVE — MASTER LORE v1.1
   Character artwork cards — Responsive background layout.

   Public archive restrictions:
   - No tower floor layouts or floor counts.
   - No monster, boss or encounter details.
   - No tower rewards or Truth Fragment spoilers.
   - Unestablished character details remain unspecified.
   ========================================================= */


/* =========================
   WORLD RULES
   ========================= */

const rules = [
  {
    title: "The Daily Transition",
    text: "Blood Hour begins every day at exactly 19:00:00. Ordinary time stops, the sky turns blood red and every ordinary human transforms into an identical coffin. Normal time resumes at exactly 19:00:01."
  },
  {
    title: "Twelve Additional Hours",
    text: "Blood Hour lasts exactly twelve hours from the perspective of those who experience it. The ordinary world experiences only one second."
  },
  {
    title: "The Frozen World",
    text: "Ordinary humans, animals, vehicles, water, fire, weather and other ordinary environmental activities remain frozen. Awakened individuals and Blood Hour entities can move and act normally."
  },
  {
    title: "The Coffin Transformation",
    text: "Every ordinary human transforms into an identical coffin. Each coffin has an identity plate containing the person's full name, age, date of birth, biological sex and nationality."
  },
  {
    title: "Permanent Death",
    text: "An Awakened who dies during Blood Hour becomes a coffin and remains permanently dead. Resurrection is impossible through the established system."
  },
  {
    title: "Coffin Destruction",
    text: "Destroying an ordinary person's coffin causes permanent death. When ordinary time resumes, the person's body is discovered dead. The official classification is cardiac arrest."
  },
  {
    title: "The Awakened",
    text: "Awakened individuals can move during Blood Hour, use supernatural abilities, enter the Seven Towers when eligible, fight, train, work, study, obtain materials, earn EXP and trade."
  },
  {
    title: "The First Appearance",
    text: "Blood Hour first appeared in 2016. By 2026, the phenomenon has existed for approximately ten years. Most ordinary people have no knowledge of it."
  },
  {
    title: "The Seven Towers",
    text: "Seven mysterious towers appear at established locations around Shah Alam during Blood Hour. Each has a distinct environment and identity. Their deeper information is not included in this public archive."
  },
  {
    title: "Ability Progression",
    text: "Awakened abilities develop through five stages: Awakening, Emergence, Ascension, Apex and True Awakening. Abilities do not have F–EX ranks."
  },
  {
    title: "Personal Weapons",
    text: "Established personal weapons are bound to their owners' Blood Hour identities. They materialise during Blood Hour and dematerialise when it ends."
  },
  {
    title: "Blood Hour Economy",
    text: "Blood Coin (BC) is the currency used during Blood Hour. Malaysian Ringgit can be exchanged into Blood Coin at RM100 for 1 BC. Blood Coin cannot be exchanged back into Ringgit."
  }
];


/* =========================
   ABILITY STAGES
   ========================= */

const stages = [
  {
    number: "I",
    name: "Awakening",
    description: "The first stage of an individual's supernatural ability.",
    progression: "Experience [Current/100]"
  },
  {
    number: "II",
    name: "Emergence",
    description: "The second stage of ability progression.",
    progression: "Experience [Current/100]"
  },
  {
    number: "III",
    name: "Ascension",
    description: "The third stage of ability progression.",
    progression: "Experience [Current/100]"
  },
  {
    number: "IV",
    name: "Apex",
    description: "The fourth stage of ability progression.",
    progression: "Experience [Current/100]"
  },
  {
    number: "V",
    name: "True Awakening",
    description: "The final stage. Requires Apex, 300 Ability Uses and one Orb of Awakening.",
    progression: "Manual Orb activation"
  }
];


/* =========================
   THE SEVEN TOWERS
   PUBLIC INFORMATION ONLY
   ========================= */

const towers = [
  {
    number: "01",
    name: "Tower of Ruins",
    location: "UiTM Shah Alam",
    theme: "Ancient Civilization, Ruins, Decay and Undead Warriors",
    overview: "A mysterious tower connected to UiTM Shah Alam. Its public identity is associated with ancient civilisation, decayed ruins and an ancient atmosphere.",
    atmosphere: "An ancient and weathered presence defines its public theme."
  },
  {
    number: "02",
    name: "Tower of Glass",
    location: "i-City, Seksyen 7, Shah Alam",
    theme: "Glass, Reflections, Crystals and Illusions",
    overview: "A mysterious tower associated with the glass and crystal environment of i-City, Seksyen 7.",
    atmosphere: "Its public identity centres on reflections, crystalline structures and illusion."
  },
  {
    number: "03",
    name: "Tower of Verdant",
    location: "Taman Botani Negara Shah Alam",
    theme: "Nature, Mutated Plants, Roots and Parasites",
    overview: "A tower connected to Taman Botani Negara Shah Alam and a supernatural natural environment.",
    atmosphere: "Its public identity is shaped by overgrown nature, mutated vegetation and living roots."
  },
  {
    number: "04",
    name: "Tower of Depths",
    location: "Taman Tasik Shah Alam, Seksyen 14",
    theme: "Deep Sea, Aquatic Creatures, Underwater Ruins and Abyss",
    overview: "A mysterious tower connected to Taman Tasik Shah Alam, Seksyen 14.",
    atmosphere: "Its public theme evokes submerged ruins and the deep sea."
  },
  {
    number: "05",
    name: "Tower of Judgement",
    location: "Dataran Shah Alam",
    theme: "Gothic and Infernal",
    overview: "A tower associated with Dataran Shah Alam and a gothic, infernal identity.",
    atmosphere: "Its public theme is dark, imposing and gothic."
  },
  {
    number: "06",
    name: "Tower of Iron",
    location: "Kompleks Sukan Shah Alam",
    theme: "Ancient Fortress, Mechanical Industry and Ancient War Machines",
    overview: "A tower connected to Kompleks Sukan Shah Alam.",
    atmosphere: "Its public theme combines fortress architecture, industrial structures and ancient machinery."
  },
  {
    number: "07",
    name: "Tower of Silence",
    location: "Setia City, Setia Alam",
    theme: "Forgotten World, Endless Void and Distorted Reality",
    overview: "A mysterious tower connected to Setia City, Setia Alam.",
    atmosphere: "Its public theme evokes silence, forgotten places and distorted reality."
  }
];


/* =========================
   CHARACTER ARCHIVE
   MASTER LORE v1.1
   ========================= */

const characters = [

  /* ----- UiTM STUDENT GROUP ----- */

  {
    name: "Keisha Ellyana",
    group: "UiTM Student Group",
    epithet: "The Charming Deceiver",
    age: "21",
    dob: "14 February 2005",
    occupation: "UiTM Shah Alam student and social media influencer",
    programme: "Bachelor of Mass Communication, First Year",
    ability: "Echo Projection",
    weapon: "Resonance Twin Daggers",
    appearance: "Long dark hair, expressive eyes and a polished, camera-ready appearance. Her established style is fashionable and carefully presented.",
    personality: "Charming and socially confident. She can be deceptive when circumstances demand it.",
    abilityDetail: "Echo Projection creates auditory and visual projections, including convincing decoys and reproduced sounds or voices she has previously heard. She can create several misleading positions to confuse attackers and conceal her actual location. At higher progression stages, projections may become increasingly convincing and briefly interact with physical surroundings.",
    limitations: "Complex projections require concentration. Strong enemies may identify inconsistencies. Projections cannot independently inflict substantial physical damage.",
    weaponDetail: "A pair of lightweight daggers with vibration-conducting edges, suitable for quick attacks and close combat."
  },

  {
    name: "Insyirah Amara",
    group: "UiTM Student Group",
    epithet: "The Lucky Troublemaker",
    age: "22",
    dob: "8 August 2004",
    occupation: "UiTM Shah Alam student",
    ability: "Lucky Shift",
    weapon: "Twin Crescent Blades",
    appearance: "A lively, sporty young woman with a casual style.",
    personality: "Playful, impulsive and sociable. She dislikes overthinking and often acts on instinct.",
    abilityDetail: "Lucky Shift subtly alters probability in her immediate surroundings. It may turn an uncertain movement into a fortunate escape, cause an enemy's attack to narrowly miss under suitable circumstances, or improve the likelihood of a favourable outcome during a short sequence of actions.",
    limitations: "It cannot guarantee victory, freely control major events or make impossible outcomes happen. It does not grant absolute control over reality.",
    weaponDetail: "Two short curved blades designed for agile close combat."
  },

  {
    name: "Khairun Amara",
    group: "UiTM Student Group",
    epithet: "The Tactical Tease",
    age: "22",
    dob: "8 August 2004",
    occupation: "UiTM Shah Alam student",
    programme: "Bachelor of Laws, Second Year",
    ability: "Vector Thread",
    weapon: "Threadbound Rapier",
    appearance: "Long straight black hair, dark brown eyes, mature composed features, light-to-medium complexion and petite slim build. Her established style includes a burgundy button-up shirt, fitted black jeans, hoop earrings, a necklace and a wristwatch.",
    personality: "Witty, sarcastic, playful, observant, composed, intelligent, argumentative, independent, practical and protective.",
    abilityDetail: "Vector Thread creates invisible directional force threads. She can redirect moving objects, restrain enemies by manipulating their movement, change the trajectory of incoming attacks and pull herself towards nearby structures.",
    limitations: "Requires accurate directional control. Very heavy targets are difficult to manipulate. Multiple simultaneous threads increase concentration and coordination requirements. It is not unrestricted telekinesis.",
    weaponDetail: "A lightweight rapier with a specialised channel for her force threads."
  },

  {
    name: "Badrul Aktar",
    group: "UiTM Student Group",
    epithet: "The Unyielding Guardian",
    age: "23",
    dob: "19 November 2002",
    occupation: "UiTM Shah Alam student",
    programme: "Bachelor of Accountancy, Second Year",
    ability: "Iron Guard",
    weapon: "Bastion Warhammer",
    appearance: "Short neat black hair, dark brown eyes, medium tan complexion and an average athletic build. Usually wears practical, neat casual clothing and a wristwatch.",
    personality: "Stern, disciplined, responsible, practical, blunt, patient, protective, reliable, observant, reserved and stubborn.",
    abilityDetail: "Iron Guard generates reinforced defensive protection around his body, creates temporary barriers, strengthens physical resistance and allows him to concentrate defence on a specific body part. He can shield nearby allies, though with reduced defensive efficiency.",
    limitations: "Heavy reinforcement reduces mobility. Large barriers require greater control. Defence is not absolute and can be overwhelmed.",
    weaponDetail: "A heavy warhammer designed for powerful defensive counters and close-range combat."
  },

  {
    name: "Hani Marissa",
    group: "UiTM Student Group",
    epithet: "The System Whisperer",
    age: "21",
    dob: "27 September 2005",
    occupation: "UiTM Shah Alam student",
    programme: "Bachelor of Computer Science, First Year",
    ability: "System Interface",
    weapon: "Arc-Tech Staff",
    appearance: "Black hair in a high ponytail with bangs, dark brown eyes, youthful gentle and reserved face, light-to-medium complexion and petite slim build. Wears round thin-framed glasses, an oversized black hoodie, backpack and tech accessories.",
    personality: "Intelligent, technically minded, introverted around unfamiliar people, curious, detail-oriented, patient, methodical and reserved.",
    abilityDetail: "System Interface analyses nearby mechanical and electronic systems, establishes temporary connections with compatible technology, detects structural weaknesses in machinery, interfaces with compatible devices and supports temporary digital mapping of explored areas.",
    limitations: "Cannot automatically control every machine. Complex systems require more time to analyse. Biological monsters cannot simply be hacked. Supernatural systems may not follow conventional technological rules.",
    weaponDetail: "A technical staff capable of releasing controlled electrical and kinetic bursts. It supports ranged combat and distance management."
  },

  {
    name: "Putri Imelda",
    group: "UiTM Student Group",
    epithet: "The Kinetic Brawler",
    dob: "3 June 2004",
    occupation: "UiTM Shah Alam student",
    ability: "Kinetic Burst",
    weapon: "Impact Tonfas",
    appearance: "Short sporty black hair, dark brown eyes, medium tan skin and an athletic toned build. Her established appearance includes sporty black clothing, a purple-and-black jacket, sunglasses and fingerless gloves.",
    personality: "Sporty, straightforward, outspoken, competitive, active and protective. She dislikes drama and can be short-tempered, but cools down quickly.",
    abilityDetail: "Kinetic Burst stores a portion of incoming kinetic force and releases it through strikes, kicks or movement. It enhances acceleration and physical impact, creates short-range kinetic shockwaves and allows controlled bursts to change direction rapidly.",
    limitations: "Storage capacity is finite. Excessive force can overwhelm her control. Non-kinetic attacks are not automatically absorbed. Poor timing can waste stored energy or affect balance.",
    weaponDetail: "A pair of reinforced tonfas designed to channel kinetic energy."
  },


  /* ----- TRUTH SEEKER ----- */

  {
    name: "Arifin Badar",
    group: "Truth Seeker",
    epithet: "The Unyielding Strategist",
    age: "46",
    dob: "12 January 1980",
    occupation: "UiTM Law Lecturer",
    role: "Leader",
    ability: "Tactical Sight",
    weapon: "Tactical Baton",
    appearance: "Mature appearance, short black hair with grey strands at the temples, sharp dark eyes, medium complexion and a lean build with slightly broad shoulders. Dresses in understated professional clothing.",
    personality: "Extremely composed, analytical, strategic, disciplined, observant, authoritative, reserved, sceptical and responsible. Can be demanding and distrustful.",
    abilityDetail: "Tactical Sight analyses combat patterns, identifies structural and defensive weaknesses, tracks nearby combatants and evaluates likely enemy movements using observed behaviour.",
    limitations: "Predictions rely on available information. Unknown abilities and unpredictable behaviour can disrupt his assessment. It is not future sight or mind reading.",
    weaponDetail: "A practical tactical baton used for controlled defence, interruption and close-range protection."
  },

  {
    name: "Madeline Ong",
    group: "Truth Seeker",
    epithet: "The Resonant Mediator",
    age: "31",
    dob: "21 April 1995",
    occupation: "Police Officer",
    role: "Vice Leader",
    ability: "Resonance Voice",
    weapon: "Reinforced Police Baton",
    appearance: "Shoulder-length dark hair, dark brown eyes, fair-medium complexion, fit healthy build and friendly features. Dresses in practical professional casual clothing.",
    personality: "Cheerful, friendly, approachable, humorous, empathetic, diplomatic, observant, responsible, assertive and adaptable.",
    abilityDetail: "Resonance Voice projects her voice with controlled resonance and can disrupt an opponent's concentration. It supports communication and can produce calming or distracting vocal effects.",
    limitations: "It is not mind control. It cannot guarantee that a target becomes calm or obedient. The target must be able to hear her. Environmental noise and barriers reduce effectiveness. Excessive use can strain her vocal cords. Physical soundwave knockback and concussive barriers are not established.",
    weaponDetail: "A reinforced police baton suited to controlled defensive fighting and law-enforcement-style techniques."
  },

  {
    name: "Intan Najwa",
    group: "Truth Seeker",
    epithet: "The Relentless Rider",
    age: "29",
    dob: "17 July 1997",
    occupation: "Grab Rider",
    role: "Combat Specialist",
    ability: "Momentum Drive",
    weapon: "Kinetic Knuckle Guards",
    appearance: "Medium-length dark brown hair usually tied in a ponytail, dark brown eyes, sharp confident features, medium tan skin and athletic toned build. Usually wears a black motorcycle riding jacket, dark fitted T-shirt, cargo pants, motorcycle boots or sneakers and a sling bag.",
    personality: "Fearless, straightforward, hot-headed, independent, protective, competitive, street-smart, active, confident, impatient, loyal and resourceful.",
    abilityDetail: "Momentum Drive manipulates her own physical movement momentum to amplify, maintain or redirect movement. It supports acceleration, powerful strikes, redirection and preservation of momentum.",
    limitations: "Primarily affects her own body, not unrestricted external objects. It requires movement and coordination. Poor timing, loss of balance and physical strain can reduce effectiveness.",
    weaponDetail: "Reinforced knuckle guards designed for close-range striking. Her combat style combines punches, elbows, kicks and rapid repositioning."
  },

  {
    name: "Ravin Kumar",
    group: "Truth Seeker",
    epithet: "The Gentle Lifeline",
    age: "26",
    dob: "9 October 2000",
    occupation: "McDonald's Restaurant Manager, Seksyen 3, Shah Alam",
    role: "Healer Specialist",
    ability: "Vital Touch",
    weapon: "Rescue Combat Knife",
    appearance: "Short neat black hair, dark brown eyes, friendly features, medium-brown complexion and average build. Usually wears simple casual clothing.",
    personality: "Patient, caring, easygoing, humorous, practical, empathetic, protective, reliable, adaptable and self-sacrificing.",
    abilityDetail: "Vital Touch operates during Blood Hour. Through direct physical contact, Ravin can detect physical injuries and temporarily stabilise bleeding, pain and certain shock symptoms.",
    limitations: "It does not regenerate tissue, regrow limbs, cure diseases or infections, reverse permanent damage, resurrect the dead or guarantee survival. Direct contact is required. Prolonged use causes exhaustion.",
    weaponDetail: "A compact rescue and utility knife for emergency tasks and basic self-defence. He is not a dedicated frontline fighter."
  },

  {
    name: "Afiq Ahnaf",
    group: "Truth Seeker",
    epithet: "The Flashing Rookie",
    age: "17",
    dob: "16 May 2009",
    occupation: "Form 5 secondary school student in Shah Alam",
    role: "Member",
    ability: "Flash Step",
    weapon: "Twin Tactical Knives",
    appearance: "Messy black hair, dark brown eyes, youthful face, medium complexion and slim teenage build. Usually wears graphic T-shirts, hoodies, casual trousers or jeans, sneakers, backpack and lightweight jacket.",
    personality: "Curious, impulsive, adventurous, excitable, competitive, sometimes overconfident, energetic, inexperienced, loyal and independent-minded.",
    abilityDetail: "Flash Step enables rapid physical movement over short distances. He physically traverses the path rather than teleporting.",
    limitations: "Cannot pass through solid obstacles. Repeated use causes dizziness and muscle strain. It does not increase durability or provide invulnerability. He needs awareness of his destination.",
    weaponDetail: "Two lightweight tactical knives for close-range combat and opportunistic attacks."
  },

  {
    name: "Izzati Syafiqah",
    group: "Truth Seeker",
    epithet: "The Silent Warning",
    age: "17",
    dob: "22 January 2009",
    occupation: "Form 5 secondary school student in Shah Alam",
    role: "Member",
    ability: "Danger Sense",
    weapon: "Tactical Short Spear",
    appearance: "Long black hair usually tied back, dark brown eyes, youthful soft features, light-medium complexion and petite slim build. Usually wears simple comfortable clothes, lightweight jackets or cardigans, sneakers and a practical backpack.",
    personality: "Observant, thoughtful, cautious, quiet around strangers, curious, analytical, empathetic, patient, independent, brave and sensitive. Sometimes self-doubting.",
    abilityDetail: "Danger Sense provides an intuitive warning about nearby physical threats and may indicate the general direction of danger.",
    limitations: "Does not reveal an attacker's identity, read minds or provide a detailed view of the future. It does not guarantee evasion; her physical reaction speed remains relevant. Multiple or unpredictable threats may confuse or overwhelm the warning.",
    weaponDetail: "A lightweight short spear for maintaining distance, intercepting attacks and exploiting openings."
  },


  /* ----- BLOOD CULT ----- */

  {
    name: "Dato' Samad Said",
    group: "Blood Cult",
    epithet: "The Crimson Authority",
    age: "33",
    dob: "12 December 1992",
    occupation: "Politician",
    role: "Core Member",
    ability: "Authority Seal",
    weapon: "Ceremonial Tactical Cane",
    appearance: "Neatly styled black hair, dark sharp eyes, handsome mature features, medium complexion and athletic, well-maintained build. Wears tailored formal suits, a luxury watch and refined accessories.",
    personality: "Ruthless, ambitious, calculating, manipulative, charismatic, authoritative, patient, opportunistic, secretive, controlling, unforgiving and pragmatic.",
    abilityDetail: "Authority Seal operates during Blood Hour. Samad can mark an individual or object within his field of vision. Short verbal commands apply temporary psychological pressure and can disrupt concentration or movement.",
    limitations: "It is not absolute control. It cannot force complex actions or self-harm. Targets can resist, and effects are temporary.",
    weaponDetail: "A reinforced ceremonial cane suitable for controlled defensive and close-range techniques."
  },

  {
    name: "Amelia Erina",
    group: "Blood Cult",
    epithet: "The Velvet Siren",
    occupation: "Bar Owner",
    role: "Core Member",
    ability: "Allure Veil",
    weapon: "Concealed Stiletto Dagger",
    appearance: "Her detailed physical appearance has not been established in the current public canon.",
    personality: "Her full personality profile has not been established in the current public canon.",
    abilityDetail: "Allure Veil operates during Blood Hour and subtly alters how noticeable Amelia's presence is to observers. It can attract or suppress attention and make it easier for her to move without being noticed.",
    limitations: "It is not invisibility, physical appearance alteration, mind control, forced attraction or obedience. It requires concentration and becomes less effective under close scrutiny. Familiar people may still recognise her.",
    weaponDetail: "A concealed compact stiletto dagger for close-range defensive use. She avoids prolonged confrontation."
  },

  {
    name: "Maria Akesah",
    group: "Blood Cult",
    epithet: "The Crimson Reaper",
    occupation: "Private Security Company Operations Manager",
    role: "Core Member",
    ability: "Blood Manipulation",
    weapon: "Tactical Kukri",
    appearance: "Her detailed physical appearance has not been established in the current public canon.",
    personality: "Her full personality profile has not been established in the current public canon.",
    abilityDetail: "Blood Manipulation operates during Blood Hour and controls available blood as a material. Maria can form temporary shapes, projectiles, restraints and weapon reinforcement.",
    limitations: "She cannot create unlimited blood or control blood circulating inside living bodies. The amount of available blood determines the scale of her constructs. Constructs are temporary and require concentration; fatigue limits prolonged use.",
    weaponDetail: "A robust forward-curved tactical kukri. Her fighting style is direct and disciplined, combining the weapon with Blood Manipulation."
  },

  {
    name: "Dr. Ishvana Rai",
    group: "Blood Cult",
    epithet: "The Biological Observer",
    occupation: "Medical Doctor",
    role: "Core Member",
    ability: "Biological Analysis",
    weapon: "Medical Tactical Scalpel Set",
    appearance: "Her detailed physical appearance has not been established in the current public canon.",
    personality: "Her full personality profile has not been established in the current public canon.",
    abilityDetail: "Biological Analysis examines biological subjects, physical conditions and certain abnormalities or weaknesses through close observation or contact.",
    limitations: "It does not heal, read minds or guarantee that a weakness will be found. Unfamiliar or complex biology may require time and produce incomplete information.",
    weaponDetail: "A compact medical and utility scalpel set adapted for emergency self-defence. It is not a dedicated combat weapon."
  },


  /* ----- NEUTRAL BLOOD HOUR ENTITIES ----- */

  {
    name: "Liora Venn",
    group: "Neutral Blood Hour Entities",
    epithet: "Not established",
    occupation: "Trader — The Red Exchange",
    role: "Neutral Blood Hour Entity",
    ability: "Ledger Sight",
    weapon: "No confirmed personal weapon",
    appearance: "Long silver-white hair, golden eyes with a subtle spiral pattern, pale skin with a faint supernatural glow and elegant dark merchant clothing. Her shadow occasionally moves independently.",
    personality: "Friendly, communicative, business-smart, enjoys negotiating, slightly mischievous but professional in transactions.",
    abilityDetail: "Ledger Sight allows Liora to perceive the nature, quality and approximate value of Blood Hour materials. She can identify monster materials, detect quality and rarity, recognise unusual crafting properties and maintain supernatural transaction records.",
    limitations: "She cannot control customers' minds or decisions. Further expanded personal details are not established.",
    weaponDetail: "No personal weapon has been confirmed.",
    services: "Operates The Red Exchange, a supernatural market in an abandoned commercial building in Seksyen 7. Buys and sells materials and equipment, evaluates materials and facilitates trading."
  },

  {
    name: "Maera Veyr",
    group: "Neutral Blood Hour Entities",
    epithet: "Not established",
    occupation: "Blacksmith — The Ember Anvil",
    role: "Neutral Blood Hour Entity",
    ability: "Forge Resonance",
    weapon: "No confirmed personal weapon",
    appearance: "Long black-red hair, amber eyes resembling glowing embers, subtle iron-like markings on her skin, athletic sturdy build and practical dark clothing with a blacksmith apron.",
    personality: "Stern, serious, direct and focused. Dislikes time-wasters, values quality materials and takes pride in craftsmanship.",
    abilityDetail: "Forge Resonance allows Maera to understand the internal structure of monster materials, combine compatible supernatural materials, repair damaged Blood Hour weapons, enhance equipment, detect crafting instability and produce special weapons from rare materials.",
    limitations: "She cannot create valuable materials from nothing. Suitable materials, compatibility and legitimate crafting processes are required.",
    weaponDetail: "No personal weapon has been confirmed.",
    services: "Operates The Ember Anvil, a supernatural blacksmith workshop connected to The Red Exchange. Provides crafting, repairs, enhancement and material evaluation."
  }

];


/* =========================
   FACTION ARCHIVE
   ========================= */

const factions = [
  {
    number: "01",
    name: "UiTM Student Group",
    type: "Independent Awakened Group",
    summary: "Six Awakened students from UiTM Shah Alam who are not initially affiliated with the Truth Seeker or Blood Cult.",
    overview: "An independent group of six Awakened students from UiTM Shah Alam. Its members share a university connection but have different backgrounds, studies and personalities.",
    purpose: "The group is independent. Its members are not initially affiliated with either the Truth Seeker or the Blood Cult.",
    members: [
      "Keisha Ellyana",
      "Insyirah Amara",
      "Khairun Amara",
      "Badrul Aktar",
      "Hani Marissa",
      "Putri Imelda"
    ],
    note: "The UiTM Student Group is an independent group. It is not initially affiliated with the Truth Seeker or the Blood Cult."
  },
  {
    number: "02",
    name: "Truth Seeker",
    type: "Investigation and Opposition Group",
    summary: "Six Awakened dedicated to uncovering the truth behind Blood Hour and ultimately stopping it.",
    overview: "The Truth Seeker investigates the mystery behind Blood Hour and seeks a way to stop it permanently.",
    purpose: "The group investigates Blood Hour, seeks reliable information, protects people from exploitation and opposes the Blood Cult.",
    leadership: "Arifin Badar is the leader. Madeline Ong is the vice leader.",
    members: [
      "Arifin Badar",
      "Madeline Ong",
      "Intan Najwa",
      "Ravin Kumar",
      "Afiq Ahnaf",
      "Izzati Syafiqah"
    ],
    note: "The Truth Seeker strongly opposes the established activities of the Blood Cult."
  },
  {
    number: "03",
    name: "Blood Cult",
    type: "Hostile Awakened Group",
    summary: "Four Awakened who exploit Blood Hour through manipulation, sabotage and murder.",
    overview: "The Blood Cult consists of four Awakened individuals whose activities exploit the unusual conditions created by Blood Hour.",
    purpose: "Their established activities include manipulation, sabotage and murder. They strongly obstruct the Truth Seeker.",
    members: [
      "Dato' Samad Said",
      "Amelia Erina",
      "Maria Akesah",
      "Dr. Ishvana Rai"
    ],
    note: "The Blood Cult is a hostile group and is not affiliated with the Truth Seeker."
  },
  {
    number: "04",
    name: "Neutral Blood Hour Entities",
    type: "Neutral Non-Human Entities",
    summary: "Non-human entities who exist specifically within Blood Hour and disappear when the phenomenon ends.",
    overview: "Blood Hour entities are not ordinary humans and are not Awakened. They exist specifically within Blood Hour and disappear when it ends.",
    purpose: "Known entities provide specialised services. Liora Venn operates as a trader, while Maera Veyr provides blacksmithing and equipment-related services.",
    members: [
      "Liora Venn",
      "Maera Veyr"
    ],
    note: "Both known entities are neutral and do not belong to the human factions."
  }
];


/* =========================
   CHARACTER IMAGES
   UiTM artwork uploaded to GitHub
   ========================= */

const characterImages = {
  "Keisha Ellyana": "assets/characters/uitm/keisha.png",
  "Insyirah Amara": "assets/characters/uitm/insyirah.png",
  "Khairun Amara": "assets/characters/uitm/khairun.png",
  "Badrul Aktar": "assets/characters/uitm/badrul.png",
  "Hani Marissa": "assets/characters/uitm/hani.png",
  "Putri Imelda": "assets/characters/uitm/putri.png"
};


/* =========================
   SHARED HELPERS
   ========================= */

const $ = (selector, root = document) =>
  root.querySelector(selector);

const $$ = (selector, root = document) =>
  [...root.querySelectorAll(selector)];

const esc = value =>
  String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);

const listHTML = items =>
  `<ul>${items.map(item => `<li>${esc(item)}</li>`).join("")}</ul>`;


/* =========================
   MODAL
   ========================= */

function openModal(content) {
  const modal = $("#readingModal");
  const box = $("#modalContent");

  if (!modal || !box) return;

  box.innerHTML = content;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  $(".modal-close", modal)?.focus();
}

function closeModal() {
  const modal = $("#readingModal");

  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}


/* =========================
   WORLD RULES RENDERER
   ========================= */

function renderRules() {
  const grid = $("#rulesGrid");

  if (!grid) return;

  grid.innerHTML = rules.map((rule, index) => `
    <article class="info-card">
      <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
      <h3>${esc(rule.title)}</h3>
      <p>${esc(rule.text)}</p>
    </article>
  `).join("");
}


/* =========================
   ABILITY STAGES RENDERER
   ========================= */

function renderStages() {
  const grid = $("#stagesGrid");

  if (!grid) return;

  grid.innerHTML = stages.map(stage => `
    <article class="stage-card">
      <span class="stage-number">${esc(stage.number)}</span>
      <h3>${esc(stage.name)}</h3>
      <p>${esc(stage.description)}</p>
      <p class="stage-progression">${esc(stage.progression)}</p>
    </article>
  `).join("");
}


/* =========================
   TOWER ARCHIVE
   ========================= */

function towerProfile(tower) {
  return `
    <p class="modal-eyebrow">PUBLIC TOWER ARCHIVE · ${esc(tower.number)}</p>

    <h2 id="modalTitle">${esc(tower.name)}</h2>

    <p class="modal-subtitle">${esc(tower.theme)}</p>

    <div class="modal-divider"></div>

    <div class="modal-facts">
      <div class="modal-fact">
        <small>LOCATION</small>
        <span>${esc(tower.location)}</span>
      </div>

      <div class="modal-fact">
        <small>PUBLIC CLASSIFICATION</small>
        <span>One of the Seven Towers</span>
      </div>

      <div class="modal-fact">
        <small>ACCESS</small>
        <span>Ground Floor Access</span>
      </div>
    </div>

    <section class="modal-section">
      <h3>Overview</h3>
      <p>${esc(tower.overview)}</p>
    </section>

    <section class="modal-section">
      <h3>Environment and Atmosphere</h3>
      <p>${esc(tower.atmosphere)}</p>
    </section>

    <div class="modal-callout">
      <p>
        This public entry intentionally excludes tower progression,
        floor details, encounters, rewards and undisclosed story information.
      </p>
    </div>
  `;
}

function renderTowers() {
  const grid = $("#towerGrid");

  if (!grid) return;

  grid.innerHTML = towers.map(tower => `
    <article
      class="tower-card"
      tabindex="0"
      role="button"
      data-tower="${esc(tower.number)}"
      aria-label="Read ${esc(tower.name)}"
    >
      <span class="tower-index">${esc(tower.number)}</span>
      <h3>${esc(tower.name)}</h3>
      <p class="tower-location">${esc(tower.location)}</p>
      <p class="tower-theme">${esc(tower.theme)}</p>
      <span class="card-read">READ TOWER ARCHIVE ↗</span>
    </article>
  `).join("");

  const openTower = card => {
    const tower = towers.find(item =>
      item.number === card.dataset.tower
    );

    if (tower) openModal(towerProfile(tower));
  };

  grid.addEventListener("click", event => {
    const card = event.target.closest("[data-tower]");

    if (card) openTower(card);
  });

  grid.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const card = event.target.closest("[data-tower]");

    if (card) {
      event.preventDefault();
      openTower(card);
    }
  });
}


/* =========================
   CHARACTER FILTERS
   ========================= */

const characterGroups = [
  "All",
  "UiTM Student Group",
  "Truth Seeker",
  "Blood Cult",
  "Neutral Blood Hour Entities"
];

let activeCharacterGroup = "All";

function renderCharacterFilters() {
  const container = $("#characterFilters");

  if (!container) return;

  container.innerHTML = characterGroups.map(group => `
    <button
      type="button"
      class="${group === activeCharacterGroup ? "active" : ""}"
      data-group="${esc(group)}"
      aria-pressed="${group === activeCharacterGroup}"
    >
      ${esc(group)}
    </button>
  `).join("");

  container.addEventListener("click", event => {
    const button = event.target.closest("button[data-group]");

    if (!button) return;

    activeCharacterGroup = button.dataset.group;

    $$("button[data-group]", container).forEach(item => {
      const active = item.dataset.group === activeCharacterGroup;

      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    renderCharacters();
  });
}


/* =========================
   CHARACTER CARDS
   Artwork is used as the card background.
   Text remains on the left side.
   ========================= */

function characterCard(character) {
  const image = characterImages[character.name] || "";
  const programme = character.programme || character.occupation || character.role || "";
  const age = character.age ? `${character.age} years old` : "";

  const imageStyle = image
    ? `style="--character-image: url('${esc(image)}')"`
    : "";

  return `
    <article class="character-card ${image ? "character-card-featured" : "character-card-standard"}">
      <button
        class="character-open"
        type="button"
        data-character="${esc(character.name)}"
        aria-label="Read the full profile of ${esc(character.name)}"
        ${imageStyle}
      >
        <span class="character-card-shade"></span>

        <span class="character-card-info">
          <span class="character-group">
            ${esc(character.group)}
          </span>

          ${programme ? `
            <span class="character-role">
              ${esc(programme)}
            </span>
          ` : ""}

          <span class="character-card-divider"></span>

          <span class="character-name">
            ${esc(character.name)}
          </span>

          <span class="character-epithet">
            ${esc(character.epithet)}
          </span>

          <span class="character-card-divider character-card-divider-small"></span>

          ${age ? `
            <span class="character-age">
              ${esc(age)}
            </span>
          ` : ""}

          <span class="character-ability">
            <strong>ABILITY</strong>
            <span>${esc(character.ability || "Not established")}</span>
          </span>

          <span class="character-read">
            READ FULL PROFILE <span aria-hidden="true">↗</span>
          </span>
        </span>
      </button>
    </article>
  `;
}


/* =========================
   CHARACTER PROFILE MODAL
   ========================= */

function characterProfile(character) {
  const facts = [
    ["GROUP", character.group],
    ["ROLE", character.role],
    ["AGE", character.age],
    ["DATE OF BIRTH", character.dob],
    ["OCCUPATION", character.occupation],
    ["PROGRAMME", character.programme],
    ["ABILITY", character.ability],
    ["PERSONAL WEAPON", character.weapon]
  ].filter(([, value]) => value);

  const section = (title, body) => {
    if (!body) return "";

    return `
      <section class="modal-section">
        <h3>${esc(title)}</h3>
        <p>${esc(body)}</p>
      </section>
    `;
  };

  return `
    <p class="modal-eyebrow">${esc(character.group)}</p>

    <h2 id="modalTitle">${esc(character.name)}</h2>

    <p class="modal-subtitle">${esc(character.epithet)}</p>

    <div class="modal-divider"></div>

    <div class="modal-facts">
      ${facts.map(([label, value]) => `
        <div class="modal-fact">
          <small>${esc(label)}</small>
          <span>${esc(value)}</span>
        </div>
      `).join("")}
    </div>

    ${section("Appearance", character.appearance)}

    ${section("Personality", character.personality)}

    ${section(
      "Ability · " + character.ability,
      character.abilityDetail
    )}

    ${section("Limitations", character.limitations)}

    ${section(
      "Personal Weapon · " + character.weapon,
      character.weaponDetail
    )}

    ${section("Services and Operations", character.services)}

    <div class="modal-callout">
      <p>
        Only details established in the current public canon are shown.
        Unestablished information is intentionally left unspecified.
      </p>
    </div>
  `;
}


/* =========================
   CHARACTER SEARCH AND RENDER
   ========================= */

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
      character.occupation,
      character.programme,
      character.ability,
      character.weapon,
      character.epithet,
      character.appearance,
      character.personality,
      character.abilityDetail
    ].filter(Boolean).join(" ").toLowerCase();

    const matchesSearch = searchable.includes(query);

    const matchesGroup =
      activeCharacterGroup === "All" ||
      character.group === activeCharacterGroup;

    return matchesSearch && matchesGroup;
  });

  if (count) {
    count.textContent = `${filtered.length} PROFILES`;
  }

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No matching profiles found.</h3>
        <p>Try another name, ability, weapon or group.</p>
      </div>
    `;

    return;
  }

  grid.innerHTML = filtered.map(characterCard).join("");

  $$(".character-open", grid).forEach(button => {
    button.addEventListener("click", () => {
      const character = characters.find(item =>
        item.name === button.dataset.character
      );

      if (character) {
        openModal(characterProfile(character));
      }
    });
  });
}


/* =========================
   FACTION ARCHIVE
   ========================= */

function factionProfile(faction) {
  return `
    <p class="modal-eyebrow">
      FACTION ARCHIVE · ${esc(faction.number)}
    </p>

    <h2 id="modalTitle">${esc(faction.name)}</h2>

    <p class="modal-subtitle">${esc(faction.type)}</p>

    <div class="modal-divider"></div>

    <section class="modal-section">
      <h3>Overview</h3>
      <p>${esc(faction.overview)}</p>
    </section>

    ${
      faction.purpose
        ? `
          <section class="modal-section">
            <h3>Purpose and Activities</h3>
            <p>${esc(faction.purpose)}</p>
          </section>
        `
        : ""
    }

    ${
      faction.leadership
        ? `
          <section class="modal-section">
            <h3>Leadership</h3>
            <p>${esc(faction.leadership)}</p>
          </section>
        `
        : ""
    }

    <section class="modal-section">
      <h3>Known Members</h3>
      ${listHTML(faction.members)}
    </section>

    <div class="modal-callout">
      <p>${esc(faction.note)}</p>
    </div>
  `;
}

function renderFactions() {
  const grid = $("#factionGrid");

  if (!grid) return;

  grid.innerHTML = factions.map(faction => `
    <article
      class="faction-card"
      tabindex="0"
      role="button"
      data-faction="${esc(faction.number)}"
      aria-label="Read ${esc(faction.name)}"
    >
      <span class="faction-index">
        FACTION · ${esc(faction.number)}
      </span>

      <h3>${esc(faction.name)}</h3>

      <p>${esc(faction.summary)}</p>

      <span class="card-read">
        READ FACTION ARCHIVE ↗
      </span>
    </article>
  `).join("");

  const openFaction = card => {
    const faction = factions.find(item =>
      item.number === card.dataset.faction
    );

    if (faction) {
      openModal(factionProfile(faction));
    }
  };

  grid.addEventListener("click", event => {
    const card = event.target.closest("[data-faction]");

    if (card) openFaction(card);
  });

  grid.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const card = event.target.closest("[data-faction]");

    if (card) {
      event.preventDefault();
      openFaction(card);
    }
  });
}


/* =========================
   NAVIGATION, MODAL AND EVENTS
   ========================= */

function initialise() {
  const toggle = $("#menuToggle");
  const nav = $("#mainNav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const opened = nav.classList.toggle("open");

      toggle.setAttribute("aria-expanded", String(opened));
    });

    $$("a", nav).forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const modal = $("#readingModal");

  if (modal) {
    $$("[data-close-modal]", modal).forEach(element => {
      element.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeModal();
      }
    });
  }

  $("#characterSearch")?.addEventListener(
    "input",
    renderCharacters
  );
}


/* =========================
   INITIALISE WEBSITE
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  renderRules();
  renderStages();
  renderTowers();
  renderCharacterFilters();
  renderCharacters();
  renderFactions();
  initialise();
});

/* =========================
   BLOOD HOUR MUSIC PLAYER
   ========================= */

function initialiseBloodHourMusic() {
  const songId = "4da7576d-320f-44f6-a06d-7b5d15acb3cd";

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "bh-music-toggle";
  toggle.innerHTML = `
    <span class="bh-music-icon">♫</span>
    <span class="bh-music-label">MUSIC: OFF</span>
  `;
  toggle.setAttribute("aria-expanded", "false");

  const panel = document.createElement("div");
  panel.className = "bh-music-panel";
  panel.hidden = true;

  panel.innerHTML = `
    <div class="bh-music-heading">BLOOD HOUR SOUNDTRACK</div>
    <iframe
      title="Blood Hour soundtrack"
      loading="lazy"
      allow="autoplay; encrypted-media"
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
    <p class="bh-music-note">
      Press Play in the player to listen.
    </p>
  `;

  document.body.append(toggle, panel);

  const label = toggle.querySelector(".bh-music-label");
  const iframe = panel.querySelector("iframe");

  toggle.addEventListener("click", () => {
    const isOpening = panel.hidden;

    if (isOpening) {
      iframe.src = `https://suno.com/embed/${songId}`;
      panel.hidden = false;
      label.textContent = "MUSIC: ON";
      toggle.classList.add("active");
      toggle.setAttribute("aria-expanded", "true");
    } else {
      iframe.src = "about:blank";
      panel.hidden = true;
      label.textContent = "MUSIC: OFF";
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initialiseBloodHourMusic
  );
} else {
  initialiseBloodHourMusic();
}
