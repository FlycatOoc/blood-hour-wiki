"use strict";

/* =========================================
   BLOOD HOUR — PUBLIC FIELD ARCHIVE
   Canon source: Blood Hour Master Lore v1.1
   ========================================= */

const rules = [
  {
    number: "01",
    title: "Daily Activation",
    text: "Blood Hour begins every day at exactly 19:00:00. Ordinary time stops and the sky turns blood red."
  },
  {
    number: "02",
    title: "Twelve Additional Hours",
    text: "Blood Hour lasts twelve hours from the perspective of those who experience it. Ordinary time resumes at exactly 19:00:01."
  },
  {
    number: "03",
    title: "The Coffin Transformation",
    text: "Every ordinary human transforms into an identical coffin when Blood Hour begins. Each coffin carries an identifying plate."
  },
  {
    number: "04",
    title: "The Frozen Environment",
    text: "Animals, vehicles, water, fire, weather and ordinary environmental activities remain frozen during Blood Hour."
  },
  {
    number: "05",
    title: "Who Remains Active",
    text: "Only Awakened individuals and Blood Hour entities can move and act normally during the phenomenon."
  },
  {
    number: "06",
    title: "Permanent Death",
    text: "An Awakened who dies during Blood Hour remains dead. Resurrection is impossible through the established system."
  },
  {
    number: "07",
    title: "Coffin Destruction",
    text: "Destroying an ordinary person's coffin causes permanent death. The person's body is discovered dead when normal time resumes."
  },
  {
    number: "08",
    title: "Ability Development",
    text: "Awakened abilities progress through five stages. Abilities do not have F–EX ranks; monster ranks are a separate system."
  },
  {
    number: "09",
    title: "Personal Weapons",
    text: "Established personal weapons materialise during Blood Hour and dematerialise when it ends. They cannot be carried into ordinary time."
  },
  {
    number: "10",
    title: "Independent Lives",
    text: "Awakened individuals are not automatically fighters. They may study, work, trade, investigate, socialise or rest during their additional hours."
  }
];

const stages = [
  {
    number: "I",
    name: "Awakening",
    description: "The first recognised stage of an Awakened individual's ability.",
    progression: "Experience: 0–100"
  },
  {
    number: "II",
    name: "Emergence",
    description: "The ability develops beyond its initial stage and gains further potential.",
    progression: "Experience: 0–100"
  },
  {
    number: "III",
    name: "Ascension",
    description: "A further stage of ability development, allowing more advanced evolution.",
    progression: "Experience: 0–100"
  },
  {
    number: "IV",
    name: "Apex",
    description: "The final experience-based stage before the special True Awakening requirement.",
    progression: "Experience: 0–100"
  },
  {
    number: "V",
    name: "True Awakening",
    description: "The final stage. It requires Apex, 300 Ability Uses and one Orb of Awakening.",
    progression: "Manual Orb activation"
  }
];

const towers = [
  {
    number: "01",
    name: "Tower of Ruins",
    location: "UiTM Shah Alam",
    theme: "Ancient Civilisation · Ruins · Decay",
    overview: "The Tower of Ruins is associated with UiTM Shah Alam. Its public identity draws on the remains of an ancient civilisation, forgotten structures and the atmosphere of a place left behind.",
    atmosphere: "Its general visual identity centres on weathered architecture, old stone structures and the imagery of an abandoned civilisation."
  },
  {
    number: "02",
    name: "Tower of Glass",
    location: "i-City, Section 7, Shah Alam",
    theme: "Glass · Reflections · Crystals · Illusions",
    overview: "The Tower of Glass is located in the i-City area of Section 7. Its identity revolves around reflective surfaces, crystal structures and the uncertain boundary between appearance and reality.",
    atmosphere: "Glass architecture, crystal-like formations, reflections and visual distortions define its public theme."
  },
  {
    number: "03",
    name: "Tower of Verdant",
    location: "Taman Botani Negara Shah Alam",
    theme: "Nature · Mutated Plants · Roots · Parasites",
    overview: "The Tower of Verdant is associated with Taman Botani Negara Shah Alam. Its theme transforms familiar natural imagery into something unfamiliar, with emphasis on plant life and biological growth.",
    atmosphere: "Its public identity centres on dense greenery, tangled roots and aggressive vegetation."
  },
  {
    number: "04",
    name: "Tower of Depths",
    location: "Taman Tasik Shah Alam, Section 14",
    theme: "Deep Sea · Aquatic Environment · Underwater Ruins",
    overview: "The Tower of Depths is located near Taman Tasik Shah Alam in Section 14. Its identity draws from deep-sea environments, submerged structures and the unfamiliar world beneath the water.",
    atmosphere: "Its public theme combines aquatic imagery, underwater architecture and the feeling of descending into an unfamiliar environment."
  },
  {
    number: "05",
    name: "Tower of Judgement",
    location: "Dataran Shah Alam",
    theme: "Gothic Architecture · Infernal Imagery",
    overview: "The Tower of Judgement stands at Dataran Shah Alam. Its identity is defined by gothic architectural imagery and infernal symbolism.",
    atmosphere: "Its public theme evokes monumental gothic design, severe architecture and imagery associated with judgement."
  },
  {
    number: "06",
    name: "Tower of Iron",
    location: "Kompleks Sukan Shah Alam",
    theme: "Ancient Fortress · Mechanical Industry · War Machines",
    overview: "The Tower of Iron is associated with Kompleks Sukan Shah Alam. Its identity combines the defensive appearance of an ancient fortress with mechanical industry and military machinery.",
    atmosphere: "Its theme centres on heavy structures, industrial mechanisms, reinforced architecture and ancient war-machine imagery."
  },
  {
    number: "07",
    name: "Tower of Silence",
    location: "Setia City, Setia Alam",
    theme: "Forgotten World · Endless Void · Distorted Reality",
    overview: "The Tower of Silence is located in Setia City, Setia Alam. Its identity is built around forgotten places, emptiness and environments disconnected from ordinary reality.",
    atmosphere: "Its public theme evokes silent landscapes, distorted surroundings, forgotten architecture and the imagery of an endless void."
  }
];

/* =========================================
   CHARACTER ARCHIVE
   Only established v1.1 information is used.
   ========================================= */

const characters = [
  {
    name: "Keisha Ellyana",
    fullName: "Keisha Ellyana binti Azlan",
    group: "UiTM Student Group",
    role: "First-Year Mass Communication Student · Social Media Influencer",
    age: "21",
    dateOfBirth: "14 February 2005",
    height: "164 cm",
    weight: "52 kg",
    epithet: "The Charming Deceiver",
    appearance: "Long wavy dark-brown hair, warm brown eyes, light tan complexion and a slim feminine build. Her established style includes black-and-gold streetwear, a white crop top, a black-and-white varsity jacket with gold details, black cargo trousers, sunglasses, hairpins, geometric dangling earrings, a necklace, wristwatch and rings.",
    personality: "Extroverted, charismatic, attention-loving, confident, image-conscious, playful, observant, ambitious, slightly vain and adaptable. She hides insecurity behind humour and confidence.",
    background: "A UiTM Shah Alam Mass Communication student from a comfortable middle-class family. She works as a social media influencer, creating content about fashion, university lifestyle, cafés and food, beauty, entertainment and daily activities. Her main platforms are TikTok and Instagram.",
    family: "Father: Azlan Firdaus, 49, corporate sales manager. Mother: Nadia Farhana, 47, senior administrative executive. Younger brother: Adam Hakimi, 17, secondary school student.",
    education: "Bachelor of Mass Communication, First Year, UiTM Shah Alam.",
    speech: "Expressive, confident and casual. Uses teasing, playful sarcasm and humour. In-game dialogue is in English.",
    ability: "Echo Projection",
    abilityDetail: "Creates auditory and visual projections, including convincing decoys and reproduced sounds or voices she has previously heard. She can create several misleading positions to confuse attackers and conceal her actual location. At higher progression stages, projections may become increasingly convincing and briefly interact with physical surroundings.",
    survival: "Decoys redirect enemy attention, conceal her position and create opportunities for emergency escape.",
    limitations: "Complex projections require concentration. Strong enemies may identify inconsistencies. Projections cannot independently inflict substantial physical damage.",
    weapon: "Resonance Twin Daggers",
    weaponDetail: "A pair of lightweight daggers with vibration-conducting edges, suitable for quick attacks and close combat.",
    core: "She enjoys being seen, but does not always want people to see who she really is.",
    traits: ["Charismatic", "Confident", "Playful", "Observant", "Ambitious"]
  },
  {
    name: "Isyirah Amara",
    fullName: "Isyirah Amara binti Zulkifli",
    group: "UiTM Student Group",
    role: "Second-Year Law Student",
    age: "22",
    dateOfBirth: "8 August 2004",
    height: "160 cm",
    weight: "49 kg",
    epithet: "The Lucky Troublemaker",
    appearance: "Short black bob with straight bangs, dark-brown eyes, youthful cheerful and expressive face, light-to-medium complexion and petite slim build. Usually wears an oversized white graphic T-shirt, loose light-blue jeans, headphones, shoulder bag and sneakers.",
    personality: "Cheerful, playful, outgoing, mischievous, spontaneous, outspoken, curious, competitive, impulsive and affectionate. More expressive and impulsive than her twin sister.",
    background: "A UiTM Shah Alam Law student from a stable middle-class family. She is the twin sister of Khairun Amara.",
    family: "Father: Zulkifli Rahman, 51, senior civil servant. Mother: Noraini Hamid, 48, primary school teacher. Twin sister: Khairun Amara.",
    education: "Bachelor of Laws, Second Year, UiTM Shah Alam.",
    speech: "Casual, energetic and expressive, with teasing and exaggeration. In-game dialogue is in English.",
    ability: "Lucky Shift",
    abilityDetail: "Subtly alters probability in her immediate surroundings. It may turn an uncertain movement into a fortunate escape, cause an enemy's attack to narrowly miss under suitable circumstances or improve the likelihood of a favourable outcome during a short sequence of actions.",
    survival: "Helps her avoid dangerous situations and creates small opportunities to escape or counterattack.",
    limitations: "It cannot guarantee victory, freely control major events or make impossible outcomes happen. It does not grant absolute control over reality.",
    weapon: "Twin Crescent Blades",
    weaponDetail: "Two short curved blades designed for agile close combat.",
    core: "She relies on luck because she dislikes overthinking, but the people she loves deserve more than lucky decisions.",
    traits: ["Cheerful", "Playful", "Mischievous", "Spontaneous", "Competitive"]
  },
  {
    name: "Khairun Amara",
    fullName: "Khairun Amara binti Zulkifli",
    group: "UiTM Student Group",
    role: "Second-Year Law Student",
    age: "22",
    dateOfBirth: "8 August 2004",
    height: "160 cm",
    weight: "50 kg",
    epithet: "The Tactical Tease",
    appearance: "Long straight black hair, dark-brown eyes, mature composed features, light-to-medium complexion and petite slim build. Usually wears a burgundy button-up shirt, fitted black jeans, hoop earrings, necklace and wristwatch.",
    personality: "Witty, sarcastic, playful, observant, composed, intelligent, argumentative, independent, practical and protective. More composed and analytical than Isyirah.",
    background: "A UiTM Shah Alam Law student from a stable middle-class family. She is the twin sister of Isyirah Amara.",
    family: "Father: Zulkifli Rahman, 51, senior civil servant. Mother: Noraini Hamid, 48, primary school teacher. Twin sister: Isyirah Amara.",
    education: "Bachelor of Laws, Second Year, UiTM Shah Alam.",
    speech: "Calm, witty and dry, often using sarcasm. In-game dialogue is in English.",
    ability: "Vector Thread",
    abilityDetail: "Creates invisible directional force threads. She can redirect moving objects, restrain enemies by manipulating their movement, change the trajectory of incoming attacks and pull herself towards nearby structures.",
    survival: "Redirects certain projectiles, disrupts enemy movement and enables controlled evasive movement.",
    limitations: "Requires accurate directional control. Very heavy targets are difficult to manipulate. Multiple simultaneous threads increase concentration and coordination requirements. It is not unrestricted telekinesis.",
    weapon: "Threadbound Rapier",
    weaponDetail: "A lightweight rapier with a specialised channel for her force threads.",
    core: "She prefers control, but important things cannot always be controlled.",
    traits: ["Witty", "Composed", "Analytical", "Independent", "Protective"]
  },
  {
    name: "Badrul Aktar",
    fullName: "Badrul Aktar",
    group: "UiTM Student Group",
    role: "Second-Year Accountancy Student",
    age: "23",
    dateOfBirth: "19 November 2002",
    height: "175 cm",
    weight: "78 kg",
    epithet: "The Unyielding Guardian",
    appearance: "Short neat black hair, dark-brown eyes, medium tan complexion and an average athletic build with a solid frame. Usually wears practical, neat casual clothing and a wristwatch.",
    personality: "Stern, disciplined, responsible, practical, blunt, patient, protective, reliable, observant, reserved and stubborn. Shows care through actions and practical support.",
    background: "A UiTM Shah Alam Accountancy student from a working middle-class family.",
    family: "Father: Mohd Aktar Hassan, 54, technical supervisor at an industrial manufacturing company. Mother: Salmah Ismail, 51, administrative assistant at a private company. Younger sister: Nur Aina Aktar, 19, diploma student.",
    education: "Bachelor of Accountancy, Second Year, UiTM Shah Alam.",
    speech: "Direct, firm, mature and concise, with occasional dry humour. In-game dialogue is in English.",
    ability: "Iron Guard",
    abilityDetail: "Generates reinforced defensive protection around his body, creates temporary barriers, strengthens physical resistance and allows him to concentrate defence on a specific body part. He can shield nearby allies, though with reduced defensive efficiency.",
    survival: "Provides strong defensive potential and allows him to protect nearby teammates.",
    limitations: "Heavy reinforcement reduces mobility. Large barriers require greater control. Defence is not absolute and can be overwhelmed.",
    weapon: "Bastion Warhammer",
    weaponDetail: "A heavy warhammer designed for powerful defensive counters and close-range combat.",
    core: "He wants to protect everyone, but must learn to share responsibility.",
    traits: ["Disciplined", "Responsible", "Patient", "Protective", "Reliable"]
  },
  {
    name: "Hani Marissa",
    fullName: "Hani Marissa binti Rahman",
    group: "UiTM Student Group",
    role: "First-Year Computer Science Student",
    age: "21",
    dateOfBirth: "27 September 2005",
    height: "157 cm",
    weight: "47 kg",
    epithet: "The System Whisperer",
    appearance: "Black hair in a high ponytail with bangs, dark-brown eyes, youthful gentle and reserved face, light-to-medium complexion and petite slim build. Wears round thin-framed glasses, an oversized black hoodie with a futuristic graphic, backpack and tech accessories.",
    personality: "Intelligent, technically minded, introverted around unfamiliar people, curious, detail-oriented, patient, methodical and reserved. Can be socially awkward, but becomes enthusiastic and talkative when discussing technology.",
    background: "A Computer Science student from a financially stable middle-class family.",
    family: "Father: Rahman Iskandar, 52, electrical engineer. Mother: Siti Norhayati, 49, secondary school teacher. Older brother: Amir Hakim, 25, junior software developer.",
    education: "Bachelor of Computer Science, First Year, UiTM Shah Alam.",
    speech: "Soft and thoughtful, sometimes hesitant. More fluent and expressive when discussing technology. In-game dialogue is in English.",
    ability: "System Interface",
    abilityDetail: "Analyses nearby mechanical and electronic systems, establishes temporary connections with compatible technology, detects structural weaknesses in machinery, interfaces with compatible devices and supports temporary digital mapping of explored areas.",
    survival: "Can use compatible sensors or devices to monitor surroundings, identify structural weaknesses and find escape routes.",
    limitations: "Cannot automatically control every machine. Complex systems require more time to analyse. Biological monsters cannot simply be hacked. Supernatural systems may not follow conventional technological rules.",
    weapon: "Arc-Tech Staff",
    weaponDetail: "A technical staff capable of releasing controlled electrical and kinetic bursts. It supports ranged combat and distance management.",
    core: "She understands complicated systems, but struggles to understand her own social and emotional needs.",
    traits: ["Intelligent", "Introverted", "Curious", "Methodical", "Technical"]
  },
  {
    name: "Putri Imelda",
    fullName: "Putri Imelda",
    group: "UiTM Student Group",
    role: "Second-Year Sport Science Student",
    age: "22",
    dateOfBirth: "3 June 2004",
    height: "169 cm",
    weight: "61 kg",
    epithet: "The Kinetic Brawler",
    appearance: "Short sporty black hair, dark-brown eyes, medium tan skin and an athletic toned build. Her established appearance includes sporty black clothing, a purple-and-black jacket, sunglasses and fingerless gloves.",
    personality: "Sporty, straightforward, outspoken, competitive, active, protective and dislikes drama. She can be short-tempered but cools down quickly.",
    background: "A UiTM Shah Alam Sport Science student from a working middle-class family.",
    family: "Father: Imran Hakimi, 52, logistics operations supervisor. Mother: Noraini Zaleha, 49, government hospital administrative officer. Younger brother: Imran Danish, 18, pre-university student.",
    education: "Bachelor of Sport Science, Second Year, UiTM Shah Alam.",
    ability: "Kinetic Burst",
    abilityDetail: "Stores a portion of incoming kinetic force and releases it through strikes, kicks or movement. It enhances acceleration and physical impact, creates short-range kinetic shockwaves and allows controlled bursts to change direction rapidly.",
    survival: "Can absorb and redirect some physical impacts, perform evasive movement and interrupt approaching enemies.",
    limitations: "Storage capacity is finite. Excessive force can overwhelm her control. Non-kinetic attacks are not automatically absorbed. Poor timing can waste stored energy or affect balance.",
    weapon: "Impact Tonfas",
    weaponDetail: "A pair of reinforced tonfas designed to channel kinetic energy.",
    core: "She sees strength as pushing forward, but must learn when to stop.",
    traits: ["Sporty", "Outspoken", "Competitive", "Protective", "Active"]
  },
  {
    name: "Arifin Badar",
    fullName: "Arifin Badar",
    group: "Truth Seeker",
    role: "Leader · TS01 · UiTM Law Lecturer",
    age: "46",
    dateOfBirth: "12 January 1980",
    height: "178 cm",
    weight: "76 kg",
    epithet: "The Unyielding Strategist",
    appearance: "Mature appearance, short black hair with grey strands at the temples, sharp dark eyes, medium complexion and a lean build with slightly broad shoulders. Dresses in understated professional and formal clothing.",
    personality: "Extremely composed, analytical, strategic, disciplined, observant, authoritative, reserved, sceptical and responsible. Can be demanding and distrustful.",
    background: "A UiTM Law lecturer with extensive legal education. He leads the Truth Seeker in its investigation of Blood Hour.",
    family: "Father: Badaruddin Hassan, 73, retired government legal administrative officer. Mother: Zainab Abdullah, 70, former secondary school teacher. Wife: Faridah Mahmud, 43, secondary school counsellor. Daughter: Amani Arifin, 17, secondary school student.",
    education: "LL.B., LL.M. and PhD in Law.",
    speech: "Calm, measured, professional and precise. In-game dialogue is in English.",
    ability: "Tactical Sight",
    abilityDetail: "Analyses combat patterns, identifies structural and defensive weaknesses, tracks nearby combatants and evaluates likely enemy movements using observed behaviour.",
    survival: "Helps detect dangerous attack patterns, identify escape opportunities and reduce the likelihood of being surprised.",
    limitations: "Predictions rely on available information. Unknown abilities and unpredictable behaviour can disrupt his assessment. It is not future sight or mind reading.",
    weapon: "Tactical Baton",
    weaponDetail: "A practical tactical baton used for controlled defence, interruption and close-range protection.",
    core: "He plans to minimise uncertainty, but faces situations no plan can fully control.",
    traits: ["Strategic", "Disciplined", "Analytical", "Authoritative", "Reserved"]
  },
  {
    name: "Madeline Ong",
    fullName: "Madeline Ong",
    group: "Truth Seeker",
    role: "Vice Leader · TS02 · Police Officer",
    age: "31",
    dateOfBirth: "21 April 1995",
    height: "166 cm",
    weight: "58 kg",
    epithet: "The Resonant Mediator",
    appearance: "Shoulder-length dark hair, dark-brown eyes, fair-medium complexion, fit healthy build and friendly features. Dresses in practical professional casual clothing.",
    personality: "Cheerful, friendly, approachable, humorous, empathetic, diplomatic, observant, responsible, assertive and adaptable. Balances Arifin's serious leadership.",
    background: "A Malaysian police officer and vice leader of the Truth Seeker.",
    family: "Father: Ong Wei Kiat, 64, retired civil engineer. Mother: Lim Siew Ling, 61, former primary school teacher. Older brother: Ong Wei Jian, 35, financial analyst.",
    speech: "Warm, cheerful, natural and expressive, often using humour. In-game dialogue is in English.",
    ability: "Resonance Voice",
    abilityDetail: "Projects her voice with controlled resonance. It can support communication, calming effects and disruption of an opponent's concentration.",
    survival: "Can interrupt concentration, coordinate allies and create opportunities to disengage.",
    limitations: "It is not mind control. It cannot guarantee calmness, obedience or attraction. The target must be able to hear her. Environmental noise and barriers reduce effectiveness. Excessive use can strain her vocal cords. No physical soundwave knockback or concussive barrier is established.",
    weapon: "Reinforced Police Baton",
    weaponDetail: "A reinforced police baton suited to controlled defensive fighting and law-enforcement-style techniques.",
    core: "She wants nobody left behind, but cannot protect everyone.",
    traits: ["Friendly", "Empathetic", "Diplomatic", "Responsible", "Adaptable"]
  },
  {
    name: "Intan Najwa",
    fullName: "Intan Najwa binti Mohd Faizal",
    group: "Truth Seeker",
    role: "Combat Specialist · TS03 · Grab Rider",
    age: "29",
    dateOfBirth: "17 July 1997",
    height: "168 cm",
    weight: "58 kg",
    epithet: "The Relentless Rider",
    appearance: "Medium-length dark-brown hair usually tied in a ponytail, dark-brown eyes, sharp confident features, medium tan skin and athletic toned build. Wears a black motorcycle riding jacket, dark fitted T-shirt, cargo pants, motorcycle boots or sneakers and a sling bag. Uses a full-face helmet when working.",
    personality: "Fearless, straightforward, hot-headed, independent, protective, competitive, street-smart, active, confident, impatient, loyal and resourceful.",
    background: "Works as a Grab Rider and is the Truth Seeker's combat specialist.",
    family: "Father: Mohd Faizal Rahman, 57, self-employed motorcycle mechanic. Mother: Norhayati Hassan, 54, food stall operator. Younger brother: Amirul Hakim, 24, technical assistant.",
    speech: "Confident and direct. Folds her arms when disagreeing, taps her fingers when thinking, dislikes sitting still and prefers travelling by motorcycle.",
    ability: "Momentum Drive",
    abilityDetail: "Manipulates her own physical movement momentum to amplify, maintain or redirect movement. It supports acceleration, powerful strikes, redirection and preservation of momentum.",
    survival: "Enables rapid repositioning, evasive movement and breaking through enemy encirclement.",
    limitations: "Primarily affects her own body, not unrestricted external objects. It requires movement and coordination. Poor timing, loss of balance and physical strain can reduce effectiveness.",
    weapon: "Kinetic Knuckle Guards",
    weaponDetail: "Reinforced knuckle guards designed for close-range striking. Her combat style combines punches, elbows, kicks and rapid repositioning.",
    core: "She wants to be strong enough to protect everyone, but must accept that she also needs protection.",
    traits: ["Fearless", "Independent", "Street-smart", "Competitive", "Loyal"]
  },
  {
    name: "Ravin Kumar",
    fullName: "Ravin Kumar",
    group: "Truth Seeker",
    role: "Healer Specialist · TS04 · Restaurant Manager",
    age: "26",
    dateOfBirth: "9 October 2000",
    height: "172 cm",
    weight: "70 kg",
    epithet: "The Gentle Lifeline",
    appearance: "Short neat black hair, dark-brown eyes, friendly features, medium-brown complexion and average build. Usually wears simple casual clothing.",
    personality: "Patient, caring, easygoing, humorous, practical, empathetic, protective, reliable, adaptable and self-sacrificing. He may neglect his own needs.",
    background: "McDonald's Restaurant Manager in Seksyen 3, Shah Alam. His Truth Seeker responsibilities focus on injury assessment, stabilisation and emergency support.",
    family: "Father: Kumar Rajan, 57, factory maintenance supervisor. Mother: Meena Devi, 54, administrative assistant. Younger sister: Priya Kumar, 22, university student.",
    speech: "Friendly, warm, conversational and reassuring, with light humour. In-game dialogue is in English.",
    ability: "Vital Touch",
    abilityDetail: "Operates during Blood Hour. Through direct physical contact, Ravin can detect physical injuries and temporarily stabilise bleeding, pain and certain shock symptoms.",
    survival: "Allows him to assess injuries, stabilise himself or allies and support emergency casualty evacuation.",
    limitations: "It does not regenerate tissue, regrow limbs, cure diseases or infections, reverse permanent damage, resurrect the dead or guarantee survival. Direct contact is required. Prolonged use causes exhaustion.",
    weapon: "Rescue Combat Knife",
    weaponDetail: "A compact rescue and utility knife for emergency tasks and basic self-defence. He is not a dedicated frontline fighter.",
    core: "He wants to help everyone, but must learn that he cannot sacrifice himself every time.",
    traits: ["Patient", "Caring", "Practical", "Empathetic", "Reliable"]
  },
  {
    name: "Afiq Ahnaf",
    fullName: "Afiq Ahnaf",
    group: "Truth Seeker",
    role: "TS05 · Form 5 Student",
    age: "17",
    dateOfBirth: "16 May 2009",
    height: "170 cm",
    weight: "58 kg",
    epithet: "The Flashing Rookie",
    appearance: "Messy black hair, dark-brown eyes, youthful face, medium complexion and slim teenage build. Usually wears graphic T-shirts, hoodies, casual trousers or jeans, sneakers, backpack and lightweight jacket.",
    personality: "Curious, impulsive, adventurous, excitable, competitive, sometimes overconfident, energetic, inexperienced, loyal and independent-minded. His maturity remains appropriate for a teenager.",
    background: "A Form 5 secondary school student in Shah Alam and member TS05 of the Truth Seeker.",
    family: "Father: Ahmad Zulkarnain, 47, electrical technician. Mother: Siti Mariam, 45, administrative officer. Older sister: Nurul Aina, 21, university student.",
    speech: "Energetic, casual, expressive and youthful. In-game dialogue is in English.",
    ability: "Flash Step",
    abilityDetail: "Enables rapid physical movement over short distances. He physically traverses the path rather than teleporting.",
    survival: "Allows emergency evasion, escape from surrounding enemies and rapid repositioning.",
    limitations: "Cannot pass through solid obstacles. Repeated use causes dizziness and muscle strain. It does not increase durability or provide invulnerability. He needs awareness of his destination.",
    weapon: "Twin Tactical Knives",
    weaponDetail: "Two lightweight tactical knives for close-range combat and opportunistic attacks.",
    traits: ["Curious", "Impulsive", "Adventurous", "Energetic", "Loyal"]
  },
  {
    name: "Izzati Syafiqah",
    fullName: "Izzati Syafiqah",
    group: "Truth Seeker",
    role: "TS06 · Form 5 Student",
    age: "17",
    dateOfBirth: "22 January 2009",
    height: "156 cm",
    weight: "47 kg",
    epithet: "The Silent Warning",
    appearance: "Long black hair usually tied back, dark-brown eyes, youthful soft features, light-medium complexion and petite slim build. Usually wears simple comfortable tops, trousers or jeans, lightweight jackets or cardigans, sneakers and a practical backpack.",
    personality: "Observant, thoughtful, cautious, quiet around strangers, curious, analytical, empathetic, patient, independent, brave and sensitive. Sometimes self-doubting.",
    background: "A Form 5 secondary school student in Shah Alam and member TS06 of the Truth Seeker.",
    family: "Father: Mohd Syafiq Rahman, 48, bank administrative officer. Mother: Nor Azlina Hassan, 45, primary school teacher. Younger brother: Danish Hakim, 13, secondary school student.",
    ability: "Danger Sense",
    abilityDetail: "Provides an intuitive warning about nearby physical threats and may indicate the general direction of danger.",
    survival: "Helps her recognise ambushes, anticipate dangerous movement and make safer decisions.",
    limitations: "Does not reveal an attacker's identity, read minds or provide a detailed view of the future. It does not guarantee evasion; her physical reaction speed remains relevant. Multiple or unpredictable threats may confuse or overwhelm the warning.",
    weapon: "Tactical Short Spear",
    weaponDetail: "A lightweight short spear for maintaining distance, intercepting attacks and exploiting openings.",
    traits: ["Observant", "Thoughtful", "Cautious", "Analytical", "Empathetic"]
  },
  {
    name: "Dato' Samad Said",
    fullName: "Dato' Samad Said",
    group: "Blood Cult",
    role: "Core Member · BS01 · Politician",
    age: "33",
    dateOfBirth: "12 December 1992",
    height: "181 cm",
    weight: "79 kg",
    epithet: "The Crimson Authority",
    appearance: "Neatly styled black hair, dark sharp eyes, handsome mature features, medium complexion and athletic, well-maintained build. Wears tailored formal suits, a luxury watch, polished shoes and refined accessories.",
    personality: "Ruthless, ambitious, calculating, manipulative, charismatic, authoritative, patient, opportunistic, secretive, controlling, unforgiving and pragmatic.",
    background: "A politician and core member BS01 of the Blood Cult.",
    family: "Father: Dato' Ahmad Zainuddin, 65, retired senior government officer. Mother: Datin Salmah Iskandar, 62, retired school principal. Younger brother: Farid Zainuddin, 29, corporate legal executive.",
    speech: "Polished, persuasive, measured, controlled and professional. In-game dialogue is in English.",
    ability: "Authority Seal",
    abilityDetail: "During Blood Hour, marks an individual or object within his field of vision. Short verbal commands apply temporary psychological pressure that can disrupt concentration or movement.",
    survival: "Can interfere with an opponent's ability to act and create opportunities for controlled retreat or counteraction.",
    limitations: "It is not absolute control. It cannot force complex actions or self-harm. Targets can resist, and effects are temporary.",
    weapon: "Ceremonial Tactical Cane",
    weaponDetail: "A reinforced ceremonial cane suitable for controlled defensive and close-range techniques.",
    traits: ["Ruthless", "Ambitious", "Calculating", "Charismatic", "Manipulative"]
  },
  {
    name: "Amelia Erina",
    fullName: "Amelia Erina",
    group: "Blood Cult",
    role: "Core Member · BS02 · Bar Owner",
    age: "31",
    dateOfBirth: "6 April 1995",
    height: "168 cm",
    weight: "58 kg",
    epithet: "The Velvet Siren",
    appearance: "Long dark-brown wavy hair, expressive dark eyes, elegant mature features, light-medium complexion and curvaceous, well-maintained build. Wears sophisticated glamorous fashion, dresses, fitted tops and skirts, heels and jewellery.",
    personality: "Seductive, charismatic, socially intelligent, flirtatious, observant, manipulative, patient, secretive, adaptable, confident, calculating and self-controlled.",
    background: "A bar owner and core member BS02 of the Blood Cult.",
    family: "Father: Erina Hamzah, 63, retired hotel operations manager. Mother: Mariam Abdullah, 60, former boutique owner. Younger sister: Alya Erina, 26, marketing executive.",
    speech: "Smooth, warm, confident and charming, often with playful teasing. In-game dialogue is in English.",
    ability: "Allure Veil",
    abilityDetail: "During Blood Hour, subtly alters how noticeable her presence is. It can attract or suppress attention and help her move without drawing notice.",
    survival: "Can reduce the likelihood of drawing attention and create opportunities to reposition or withdraw.",
    limitations: "It is not invisibility, appearance alteration, mind control, forced attraction or obedience. Concentration is required; close scrutiny and familiar observers can reduce effectiveness.",
    weapon: "Concealed Stiletto Dagger",
    weaponDetail: "A compact close-range defensive weapon. She avoids prolonged confrontation.",
    traits: ["Charismatic", "Socially Intelligent", "Manipulative", "Confident", "Secretive"]
  },
  {
    name: "Maria Akesah",
    fullName: "Maria Akesah",
    group: "Blood Cult",
    role: "Core Member · BS03 · Private Security Operations Manager",
    age: "35",
    dateOfBirth: "18 August 1991",
    height: "170 cm",
    weight: "63 kg",
    epithet: "The Crimson Reaper",
    appearance: "Shoulder-length dark black hair, usually in a practical ponytail, dark-brown eyes, mature sharp features, medium tan complexion and athletic sturdy build. Wears dark fitted shirts, tactical trousers, durable boots, lightweight jackets, practical belts and a wristwatch.",
    personality: "Disciplined, pragmatic, intimidating, independent, decisive, observant, resourceful, suspicious, competitive, resilient, ruthless and private.",
    background: "A private security company operations manager and core member BS03 of the Blood Cult.",
    family: "Father: Akbar Hassan, 67, retired factory supervisor. Mother: Zaleha Osman, 63, former food stall operator. Older brother: Azman Akesah, 39, lorry fleet supervisor.",
    speech: "Firm, controlled, authoritative, direct and practical. In-game dialogue is in English.",
    ability: "Blood Manipulation",
    abilityDetail: "During Blood Hour, controls available blood as material to form temporary shapes, projectiles, restraints and weapon reinforcement.",
    survival: "Can form temporary defensive or offensive constructs from available blood material.",
    limitations: "Cannot create unlimited blood or control blood inside living bodies. Available quantity determines scale. Constructs are temporary and require concentration; fatigue limits prolonged use.",
    weapon: "Tactical Kukri",
    weaponDetail: "A robust forward-curved close-range weapon. Her style combines direct, disciplined kukri techniques with Blood Manipulation.",
    traits: ["Disciplined", "Pragmatic", "Decisive", "Resourceful", "Private"]
  },
  {
    name: "Dr. Ishvana Rai",
    fullName: "Dr. Ishvana Rai",
    group: "Blood Cult",
    role: "Core Member · BS04 · Medical Doctor",
    age: "28",
    dateOfBirth: "11 November 1997",
    height: "165 cm",
    weight: "53 kg",
    epithet: "The Biological Observer",
    appearance: "Shoulder-length black hair, dark-brown eyes, mature intelligent features, medium complexion and slim build. Wears spectacles when reading or performing detailed work and neat professional clothing.",
    personality: "Intelligent, observant, calm, logical, clinical, professional, curious, methodical, patient, independent, reserved, pragmatic and emotionally restrained.",
    background: "A medical doctor and core member BS04 of the Blood Cult.",
    family: "Father: Rajan Rai, 61, retired university lecturer. Mother: Kavitha Raman, 58, pharmacist. Younger brother: Arjun Rai, 24, biomedical laboratory assistant.",
    speech: "Calm, precise, professional and clinical. In-game dialogue is in English.",
    ability: "Biological Analysis",
    abilityDetail: "Examines biological subjects, physical conditions and certain abnormalities or weaknesses through close observation or contact. It can assist with injury assessment and monster analysis.",
    survival: "Can help assess biological conditions and provide information useful for evaluating a subject.",
    limitations: "It does not heal, read minds or guarantee weaknesses. Unfamiliar or complex biology may require time and produce incomplete information.",
    weapon: "Medical Tactical Scalpel Set",
    weaponDetail: "A compact set of medical and utility instruments adapted for emergency self-defence. It is not a dedicated combat weapon.",
    traits: ["Intelligent", "Observant", "Logical", "Methodical", "Clinical"]
  },
  {
    name: "Liora Venn",
    fullName: "Liora Venn",
    group: "Blood Hour Entities",
    role: "Neutral Entity · Trader · The Red Exchange",
    age: "Not established",
    epithet: "Not established",
    appearance: "Long silver-white hair, golden eyes with a subtle spiral pattern, pale skin with a faint supernatural glow and elegant dark merchant clothing. Her shadow occasionally moves independently.",
    personality: "Friendly, communicative, business-smart, enjoys negotiating, slightly mischievous but professional in transactions.",
    background: "A non-human Blood Hour entity created by the phenomenon as a commercial intermediary. She is not an ordinary human and does not belong to any faction. Her expanded personal history, relationships, motivations and epithet have not been established.",
    ability: "Ledger Sight",
    abilityDetail: "Perceives the nature, quality and approximate value of Blood Hour materials. She can identify monster materials, detect quality and rarity, recognise unusual crafting properties and maintain supernatural transaction records.",
    survival: "Her ability supports material evaluation and legitimate transactions within her market.",
    limitations: "She cannot control the minds or decisions of customers.",
    weapon: "No confirmed personal weapon",
    weaponDetail: "No personal weapon has been established in the current canon.",
    services: "Operates The Red Exchange, a supernatural market inside an abandoned commercial building in Seksyen 7. Services include buying and selling monster materials, selling equipment and Blood Hour goods, evaluating materials and facilitating trading.",
    traits: ["Friendly", "Communicative", "Business-Smart", "Mischievous", "Professional"],
    status: "Baseline canon established. Expanded personal details and epithet are pending."
  },
  {
    name: "Maera Veyr",
    fullName: "Maera Veyr",
    group: "Blood Hour Entities",
    role: "Neutral Entity · Blacksmith · The Ember Anvil",
    age: "Not established",
    epithet: "Not established",
    appearance: "Long black-red hair, amber eyes resembling glowing embers, subtle iron-like markings on her skin, athletic sturdy build, practical dark clothing and a blacksmith apron. Her skin occasionally has an ember-like glow.",
    personality: "Stern, serious, direct and focused. Dislikes time-wasters, values quality materials and takes pride in craftsmanship.",
    background: "A non-human Forge-Born entity created through the supernatural nature of Blood Hour. She has no ordinary human history. Her expanded personal details, relationships, motivations and epithet have not been established.",
    ability: "Forge Resonance",
    abilityDetail: "Understands the internal structure of monster materials, combines compatible supernatural materials, repairs damaged Blood Hour weapons, enhances equipment, detects crafting instability and produces special weapons from rare materials.",
    survival: "Her ability supports equipment repair, enhancement and the production of suitable equipment for Awakened individuals.",
    limitations: "She cannot create valuable materials from nothing. Suitable materials, compatibility and legitimate crafting processes are required.",
    weapon: "No confirmed personal weapon",
    weaponDetail: "No personal weapon has been established in the current canon.",
    services: "Operates The Ember Anvil, a supernatural blacksmith workshop connected to The Red Exchange. Services include weapon crafting, repairs, enhancement, special weapon creation and material evaluation.",
    traits: ["Stern", "Serious", "Direct", "Focused", "Professional"],
    status: "Baseline canon established. Expanded personal details and epithet are pending."
  }
];

/* =========================================
   FACTION ARCHIVE
   ========================================= */

const factions = [
  {
    number: "01",
    name: "UiTM Student Group",
    type: "Independent Awakened Group",
    summary: "Six Awakened students from UiTM Shah Alam who are not initially affiliated with the Truth Seeker or Blood Cult.",
    overview: "The UiTM Student Group consists of six Awakened students from UiTM Shah Alam. They are an independent group and are not initially affiliated with either the Truth Seeker or the Blood Cult.",
    purpose: "Their group identity is based on their shared connection as UiTM students. Their members have different backgrounds, studies and personalities.",
    members: ["Keisha Ellyana", "Isyirah Amara", "Khairun Amara", "Badrul Aktar", "Hani Marissa", "Putri Imelda"],
    note: "The group is independent. Its members should not automatically be treated as members of another faction."
  },
  {
    number: "02",
    name: "Truth Seeker",
    type: "Investigation and Opposition Group",
    summary: "Six Awakened dedicated to uncovering the truth behind Blood Hour and ultimately stopping it.",
    overview: "The Truth Seeker is a group of six Awakened individuals with a shared objective: understand the mystery behind Blood Hour and find a way to stop it.",
    purpose: "The group investigates Blood Hour, seeks reliable information, protects people from exploitation and opposes the Blood Cult.",
    leadership: "Arifin Badar serves as the leader (TS01), while Madeline Ong is the vice leader (TS02).",
    members: ["Arifin Badar", "Madeline Ong", "Intan Najwa", "Ravin Kumar", "Afiq Ahnaf", "Izzati Syafiqah"],
    note: "The Truth Seeker strongly opposes the established activities of the Blood Cult."
  },
  {
    number: "03",
    name: "Blood Cult",
    type: "Hostile Awakened Group",
    summary: "Four Awakened who exploit Blood Hour through manipulation, sabotage and murder.",
    overview: "The Blood Cult consists of four Awakened individuals whose activities exploit the unusual conditions created by Blood Hour.",
    purpose: "Their established activities include manipulation, sabotage and murder. They strongly obstruct the Truth Seeker.",
    leadership: "The current public record confirms four core members. A formal leadership hierarchy beyond the established membership has not been confirmed.",
    members: ["Dato' Samad Said", "Amelia Erina", "Maria Akesah", "Dr. Ishvana Rai"],
    note: "The Blood Cult is a hostile group and is not affiliated with the Truth Seeker."
  },
  {
    number: "04",
    name: "Blood Hour Entities",
    type: "Non-Human Neutral Entities",
    summary: "Non-human entities who exist specifically within Blood Hour and disappear when the phenomenon ends.",
    overview: "Blood Hour entities are not ordinary humans and are not Awakened. They exist specifically within Blood Hour and disappear when it ends.",
    purpose: "The known entities provide specialised services to Awakened individuals. Liora Venn operates as a trader, while Maera Veyr provides blacksmithing and equipment-related services.",
    leadership: "No faction leadership structure is established. The known entities maintain a professional relationship and operate independently of the human factions.",
    members: ["Liora Venn", "Maera Veyr"],
    note: "Both known entities are neutral and do not belong to the UiTM Student Group, Truth Seeker or Blood Cult."
  }
];

/* =========================================
   HELPERS
   ========================================= */

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

function listHTML(items) {
  if (!items || !items.length) return "";
  return `<ul>${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}

function openModal(content) {
  const modal = $("#readingModal");
  const container = $("#modalContent");
  if (!modal || !container) return;

  container.innerHTML = content;
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

/* =========================================
   STATIC RULES
   ========================================= */

function renderRules() {
  const grid = $("#rulesGrid");
  if (!grid) return;

  grid.innerHTML = rules.map(rule => `
    <article class="info-card">
      <span class="card-number">${escapeHTML(rule.number)}</span>
      <h3>${escapeHTML(rule.title)}</h3>
      <p>${escapeHTML(rule.text)}</p>
    </article>
  `).join("");
}

/* =========================================
   STATIC ABILITY STAGES
   ========================================= */

function renderStages() {
  const grid = $("#stagesGrid");
  if (!grid) return;

  grid.innerHTML = stages.map(stage => `
    <article class="stage-card">
      <span class="stage-number">${escapeHTML(stage.number)}</span>
      <h3>${escapeHTML(stage.name)}</h3>
      <p>${escapeHTML(stage.description)}</p>
      <p class="stage-progression">${escapeHTML(stage.progression)}</p>
    </article>
  `).join("");
}

/* =========================================
   TOWER ARCHIVE — CLICK TO READ
   ========================================= */

function towerProfile(tower) {
  return `
    <p class="modal-eyebrow">PUBLIC TOWER ARCHIVE · ${escapeHTML(tower.number)}</p>
    <h2 id="modalTitle">${escapeHTML(tower.name)}</h2>
    <p class="modal-subtitle">${escapeHTML(tower.theme)}</p>
    <div class="modal-divider"></div>

    <div class="modal-facts">
      <div class="modal-fact">
        <small>LOCATION</small>
        <span>${escapeHTML(tower.location)}</span>
      </div>
      <div class="modal-fact">
        <small>PUBLIC CLASSIFICATION</small>
        <span>One of the Seven Towers</span>
      </div>
    </div>

    <section class="modal-section">
      <h3>Overview</h3>
      <p>${escapeHTML(tower.overview)}</p>
    </section>

    <section class="modal-section">
      <h3>Environment and Atmosphere</h3>
      <p>${escapeHTML(tower.atmosphere)}</p>
    </section>

    <div class="modal-callout">
      <p>This public entry intentionally excludes tower progression and undisclosed story information.</p>
    </div>
  `;
}

function renderTowers() {
  const grid = $("#towerGrid");
  if (!grid) return;

  grid.innerHTML = towers.map(tower => `
    <article class="tower-card" tabindex="0" role="button"
      data-tower="${escapeHTML(tower.number)}"
      aria-label="Read ${escapeHTML(tower.name)}">
      <span class="tower-index">${escapeHTML(tower.number)}</span>
      <h3>${escapeHTML(tower.name)}</h3>
      <p class="tower-location">${escapeHTML(tower.location)}</p>
      <p class="tower-theme">${escapeHTML(tower.theme)}</p>
      <span class="card-read">READ TOWER ARCHIVE <span>↗</span></span>
    </article>
  `).join("");

  grid.addEventListener("click", event => {
    const card = event.target.closest("[data-tower]");
    if (!card) return;
    const tower = towers.find(item => item.number === card.dataset.tower);
    if (tower) openModal(towerProfile(tower));
  });

  grid.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest("[data-tower]");
    if (!card) return;

    event.preventDefault();
    const tower = towers.find(item => item.number === card.dataset.tower);
    if (tower) openModal(towerProfile(tower));
  });
}

/* =========================================
   CHARACTER ARCHIVE — CLICK TO READ
   ========================================= */

const characterGroups = [
  "All",
  "UiTM Student Group",
  "Truth Seeker",
  "Blood Cult",
  "Blood Hour Entities"
];

let activeCharacterGroup = "All";

function renderCharacterFilters() {
  const container = $("#characterFilters");
  if (!container) return;

  container.innerHTML = characterGroups.map(group => `
    <button type="button"
      class="${group === activeCharacterGroup ? "active" : ""}"
      data-group="${escapeHTML(group)}"
      aria-pressed="${group === activeCharacterGroup}">
      ${escapeHTML(group)}
    </button>
  `).join("");

  container.addEventListener("click", event => {
    const button = event.target.closest("button[data-group]");
    if (!button) return;

    activeCharacterGroup = button.dataset.group;

    $$("#characterFilters button").forEach(item => {
      const isActive = item.dataset.group === activeCharacterGroup;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    renderCharacters();
  });
}

function characterCard(character) {
  const ageText = character.age === "Not established"
    ? "Age not established"
    : `${character.age} years old`;

  return `
    <article class="character-card">
      <button class="character-open" type="button"
        data-character="${escapeHTML(character.name)}">
        <span class="character-group">${escapeHTML(character.group)}</span>
        <span class="character-role">${escapeHTML(character.role)}</span>
        <span class="character-name">${escapeHTML(character.name)}</span>
        <span class="character-epithet">${escapeHTML(character.epithet)}</span>
        <span class="character-age">${escapeHTML(ageText)}</span>
        <span class="character-ability">Ability · ${escapeHTML(character.ability)}</span>
        <span class="character-read">READ FULL PROFILE <span>↗</span></span>
      </button>
    </article>
  `;
}

function characterProfile(character) {
  const facts = [
    ["FULL NAME", character.fullName],
    ["GROUP", character.group],
    ["ROLE", character.role],
    ["AGE", character.age],
    ["DATE OF BIRTH", character.dateOfBirth],
    ["HEIGHT", character.height],
    ["WEIGHT", character.weight],
    ["ABILITY", character.ability],
    ["PERSONAL WEAPON", character.weapon]
  ].filter(([, value]) => value);

  return `
    <p class="modal-eyebrow">${escapeHTML(character.group)}</p>
    <h2 id="modalTitle">${escapeHTML(character.name)}</h2>
    <p class="modal-subtitle">${escapeHTML(character.epithet)}</p>
    <div class="modal-divider"></div>

    <div class="modal-facts">
      ${facts.map(([label, value]) => `
        <div class="modal-fact">
          <small>${escapeHTML(label)}</small>
          <span>${escapeHTML(value)}</span>
        </div>
      `).join("")}
    </div>

    <section class="modal-section">
      <h3>Appearance</h3>
      <p>${escapeHTML(character.appearance)}</p>
    </section>

    <section class="modal-section">
      <h3>Personality</h3>
      <p>${escapeHTML(character.personality)}</p>
      <div class="character-tags">
        ${character.traits.map(trait => `
          <span class="character-tag">${escapeHTML(trait)}</span>
        `).join("")}
      </div>
    </section>

    <section class="modal-section">
      <h3>Background</h3>
      <p>${escapeHTML(character.background)}</p>
    </section>

    ${character.family ? `
      <section class="modal-section">
        <h3>Family</h3>
        <p>${escapeHTML(character.family)}</p>
      </section>
    ` : ""}

    ${character.education ? `
      <section class="modal-section">
        <h3>Education</h3>
        <p>${escapeHTML(character.education)}</p>
      </section>
    ` : ""}

    ${character.speech ? `
      <section class="modal-section">
        <h3>Speech and Behaviour</h3>
        <p>${escapeHTML(character.speech)}</p>
      </section>
    ` : ""}

    <section class="modal-section">
      <h3>Ability · ${escapeHTML(character.ability)}</h3>
      <p>${escapeHTML(character.abilityDetail)}</p>
    </section>

    ${character.survival ? `
      <section class="modal-section">
        <h3>Survival Applications</h3>
        <p>${escapeHTML(character.survival)}</p>
      </section>
    ` : ""}

    <section class="modal-section">
      <h3>Limitations</h3>
      <p>${escapeHTML(character.limitations)}</p>
    </section>

    <section class="modal-section">
      <h3>Personal Weapon · ${escapeHTML(character.weapon)}</h3>
      <p>${escapeHTML(character.weaponDetail)}</p>
    </section>

    ${character.core ? `
      <div class="modal-callout">
        <strong>CORE CONTRADICTION</strong>
        <p>${escapeHTML(character.core)}</p>
      </div>
    ` : ""}

    ${character.services ? `
      <section class="modal-section">
        <h3>Services and Operations</h3>
        <p>${escapeHTML(character.services)}</p>
      </section>
    ` : ""}

    ${character.status ? `
      <div class="modal-callout">
        <strong>CANON STATUS</strong>
        <p>${escapeHTML(character.status)}</p>
      </div>
    ` : ""}
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
      character.fullName,
      character.group,
      character.role,
      character.age,
      character.ability,
      character.weapon,
      character.epithet,
      character.appearance,
      character.personality,
      character.background,
      character.abilityDetail,
      character.traits.join(" ")
    ].join(" ").toLowerCase();

    const matchesSearch = searchable.includes(query);
    const matchesGroup = activeCharacterGroup === "All" ||
      character.group === activeCharacterGroup;

    return matchesSearch && matchesGroup;
  });

  if (count) count.textContent = `${filtered.length} PROFILES`;

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No matching profiles found.</h3>
        <p>Try another name, ability or group.</p>
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
      if (character) openModal(characterProfile(character));
    });
  });
}

/* =========================================
   FACTION ARCHIVE — CLICK TO READ
   ========================================= */

function factionProfile(faction) {
  return `
    <p class="modal-eyebrow">FACTION ARCHIVE · ${escapeHTML(faction.number)}</p>
    <h2 id="modalTitle">${escapeHTML(faction.name)}</h2>
    <p class="modal-subtitle">${escapeHTML(faction.type)}</p>
    <div class="modal-divider"></div>

    <section class="modal-section">
      <h3>Overview</h3>
      <p>${escapeHTML(faction.overview)}</p>
    </section>

    <section class="modal-section">
      <h3>Purpose and Activities</h3>
      <p>${escapeHTML(faction.purpose)}</p>
    </section>

    ${faction.leadership ? `
      <section class="modal-section">
        <h3>Leadership and Structure</h3>
        <p>${escapeHTML(faction.leadership)}</p>
      </section>
    ` : ""}

    <section class="modal-section">
      <h3>Known Members</h3>
      ${listHTML(faction.members)}
    </section>

    <div class="modal-callout">
      <p>${escapeHTML(faction.note)}</p>
    </div>
  `;
}

function renderFactions() {
  const grid = $("#factionGrid");
  if (!grid) return;

  grid.innerHTML = factions.map(faction => `
    <article class="faction-card" tabindex="0" role="button"
      data-faction="${escapeHTML(faction.number)}"
      aria-label="Read about ${escapeHTML(faction.name)}">
      <span class="faction-index">FACTION · ${escapeHTML(faction.number)}</span>
      <h3>${escapeHTML(faction.name)}</h3>
      <p>${escapeHTML(faction.summary)}</p>
      <span class="card-read">READ FACTION ARCHIVE <span>↗</span></span>
    </article>
  `).join("");

  grid.addEventListener("click", event => {
    const card = event.target.closest("[data-faction]");
    if (!card) return;
    const faction = factions.find(item => item.number === card.dataset.faction);
    if (faction) openModal(factionProfile(faction));
  });

  grid.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest("[data-faction]");
    if (!card) return;

    event.preventDefault();
    const faction = factions.find(item => item.number === card.dataset.faction);
    if (faction) openModal(factionProfile(faction));
  });
}

/* =========================================
   NAVIGATION
   ========================================= */

function initialiseNavigation() {
  const toggle = $("#menuToggle");
  const nav = $("#mainNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$("a", nav).forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* =========================================
   MODAL CONTROLS
   ========================================= */

function initialiseModal() {
  const modal = $("#readingModal");
  if (!modal) return;

  $$("[data-close-modal]", modal).forEach(element => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
  });
}

/* =========================================
   INITIALISE
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderRules();
  renderStages();
  renderTowers();

  renderCharacterFilters();
  renderCharacters();

  renderFactions();

  initialiseNavigation();
  initialiseModal();

  $("#characterSearch")?.addEventListener("input", renderCharacters);
});