// ============================================
// BLOOD HOUR — PUBLIC FIELD ARCHIVE
// Public information only. Tower spoilers excluded.
// ============================================

const rules = [
  {
    number: "01",
    title: "Daily Activation",
    text: "Blood Hour begins every day at exactly 19:00:00. The phenomenon is a recurring event rather than a random occurrence. Its activation marks the beginning of twelve additional hours experienced by Awakened individuals and associated entities.",
    extra: "Blood Hour first appeared in 2016. By 2026, the phenomenon has existed for approximately ten years."
  },
  {
    number: "02",
    title: "Time Suspension",
    text: "When Blood Hour begins, ordinary time comes to a complete standstill. Participants experience twelve hours while the ordinary world experiences only one second. Normal time resumes at exactly 19:00:01.",
    extra: "This difference allows Awakened individuals to carry out activities during the additional period without the ordinary world progressing at the same rate."
  },
  {
    number: "03",
    title: "The Crimson Sky",
    text: "The sky turns blood red whenever Blood Hour begins. This change marks the transition from ordinary time into the supernatural period. It is one of the most recognisable signs of the phenomenon.",
    extra: "The crimson sky is part of the established activation conditions and is not an ordinary weather event."
  },
  {
    number: "04",
    title: "Frozen Environment",
    text: "Ordinary environmental activity stops during Blood Hour. Vehicles remain frozen, water and other liquids stop moving, fire does not continue spreading, and weather conditions remain suspended.",
    extra: "Awakened individuals and Blood Hour entities can still move and interact with their surroundings. The ordinary environment does not continue operating normally."
  },
  {
    number: "05",
    title: "The Coffin System",
    text: "Every ordinary human transforms into an identical coffin when Blood Hour begins. Each coffin carries an identity plate containing the person's full name, age, date of birth, biological sex and nationality.",
    extra: "The external appearance of the coffins is identical regardless of the identity recorded on the plate. Ordinary means cannot open them."
  },
  {
    number: "06",
    title: "Permanent Death",
    text: "Destroying an ordinary person's coffin during Blood Hour causes that person's permanent death. When normal time resumes, the person's body is discovered dead. The official classification of such deaths is cardiac arrest.",
    extra: "An Awakened individual who dies during Blood Hour also dies permanently. Their body becomes a coffin during the phenomenon, and their human corpse appears when ordinary time resumes. Resurrection is not possible through the established system."
  },
  {
    number: "07",
    title: "The Awakened",
    text: "Awakened individuals possess supernatural potential that allows them to remain active while ordinary time is suspended. They can move, interact, use abilities and enter the Seven Towers.",
    extra: "Not every Awakened is a dedicated fighter. Abilities may provide offence, defence, mobility, healing, awareness, support or other useful forms of survival."
  },
  {
    number: "08",
    title: "Independent Activity",
    text: "Blood Hour does not force every participant into combat or tower exploration. Awakened individuals can use the additional time according to their own circumstances and ambitions.",
    extra: "They may investigate, train, work, study, trade, socialise, rest or pursue personal objectives. Ordinary responsibilities and personal relationships remain meaningful."
  }
];

const stages = [
  {
    number: "I",
    name: "Awakening",
    description: "The initial manifestation of an individual's supernatural ability. This is the first recognised stage in an Awakened person's development.",
    progression: "Experience: 0–100",
    detail: "An ability becomes available to its owner and begins to establish its basic functions. The individual can learn how the ability behaves, identify its practical uses and develop familiarity through genuine activation and experience."
  },
  {
    number: "II",
    name: "Emergence",
    description: "The ability develops beyond its initial manifestation, allowing its existing characteristics to become more established.",
    progression: "Experience: 0–100",
    detail: "Existing functions may become more reliable or effective. The ability may gain improved control, efficiency or additional techniques that remain consistent with its original nature."
  },
  {
    number: "III",
    name: "Ascension",
    description: "A higher stage of ability development in which the individual's established power gains greater capability.",
    progression: "Experience: 0–100",
    detail: "The ability can develop more advanced applications. Depending on its nature, improvements may involve range, precision, control, defensive utility, output or the ability to handle more complex situations."
  },
  {
    number: "IV",
    name: "Apex",
    description: "An advanced stage preceding the final recognised stage of ability progression.",
    progression: "Experience: 0–100",
    detail: "The ability approaches its highest ordinary developmental stage. Existing functions may become significantly more sophisticated, and the owner may develop advanced techniques consistent with the original ability."
  },
  {
    number: "V",
    name: "True Awakening",
    description: "The final recognised ability stage. Unlike the previous stages, it requires a specific item and a manual activation process.",
    progression: "Apex + 300 Ability Uses + Orb of Awakening",
    detail: "True Awakening requires the Awakened individual to have reached Apex, accumulated 300 genuine ability uses and obtained one Orb of Awakening. The owner must manually activate the Orb, which is consumed immediately. This stage never activates automatically."
  }
];

const towers = [
  {
    number: "01",
    name: "Tower of Ruins",
    location: "UiTM Shah Alam",
    theme: "Ancient Civilisation · Ruins · Decay · Undead Warriors",
    overview: "The Tower of Ruins stands within the UiTM Shah Alam area. Its identity is built around the remains of an ancient civilisation, combining weathered architecture, forgotten structures and an atmosphere of decay.",
    atmosphere: "Its public visual identity centres on collapsed stonework, old architectural forms, damaged structures and the imagery of an abandoned civilisation. The tower's theme is strongly associated with ancient ruins and undead warriors.",
    note: "This archive entry describes only the tower's public identity and general theme."
  },
  {
    number: "02",
    name: "Tower of Glass",
    location: "i-City, Section 7, Shah Alam",
    theme: "Glass · Reflections · Crystals · Illusions",
    overview: "The Tower of Glass is located in the i-City area of Section 7. Its identity revolves around reflective surfaces, crystal structures and the uncertain boundary between what is real and what is perceived.",
    atmosphere: "Glass architecture, crystal-like formations, reflections and visual distortions define its public theme. Its identity suggests an environment where appearances and perception are important elements."
  },
  {
    number: "03",
    name: "Tower of Verdant",
    location: "Taman Botani Negara Shah Alam",
    theme: "Nature · Mutated Plants · Roots · Parasites",
    overview: "The Tower of Verdant is associated with Taman Botani Negara Shah Alam. Its theme transforms familiar natural imagery into something unfamiliar, with emphasis on plant life, aggressive vegetation and biological growth.",
    atmosphere: "Its visual identity centres on dense greenery, tangled roots, mutated plants and parasitic growth. Nature is presented as an active and potentially hostile environment rather than a peaceful landscape."
  },
  {
    number: "04",
    name: "Tower of Depths",
    location: "Taman Tasik Shah Alam, Section 14",
    theme: "Deep Sea · Aquatic Creatures · Underwater Ruins · Abyss",
    overview: "The Tower of Depths is located near Taman Tasik Shah Alam in Section 14. Its identity draws from deep-sea environments, submerged structures and the unfamiliar world beneath the water.",
    atmosphere: "Its public theme combines aquatic life, underwater architecture, deep-water imagery and the feeling of descending into an environment beyond ordinary human experience."
  },
  {
    number: "05",
    name: "Tower of Judgement",
    location: "Dataran Shah Alam",
    theme: "Gothic Architecture · Infernal Themes",
    overview: "The Tower of Judgement stands at Dataran Shah Alam. Its identity is defined by gothic architectural imagery and infernal symbolism, giving it a darker and more imposing character than an ordinary structure.",
    atmosphere: "Its public theme evokes monumental gothic design, severe architecture and imagery associated with judgement and punishment. Its appearance is intended to feel imposing and unsettling."
  },
  {
    number: "06",
    name: "Tower of Iron",
    location: "Kompleks Sukan Shah Alam",
    theme: "Ancient Fortress · Mechanical Industry · War Machines",
    overview: "The Tower of Iron is associated with Kompleks Sukan Shah Alam. Its public identity combines the defensive appearance of an ancient fortress with the visual language of mechanical industry and military machinery.",
    atmosphere: "Its theme centres on heavy structures, industrial mechanisms, reinforced architecture and the imagery of ancient war machines. The overall identity is mechanical, fortified and imposing."
  },
  {
    number: "07",
    name: "Tower of Silence",
    location: "Setia City, Setia Alam",
    theme: "Forgotten World · Endless Void · Distorted Reality",
    overview: "The Tower of Silence is located in Setia City, Setia Alam. Its public identity is built around absence, forgotten places, endless emptiness and environments that appear disconnected from ordinary reality.",
    atmosphere: "Its theme evokes silent landscapes, distorted surroundings, forgotten architecture and the imagery of an endless void. The tower is associated with an atmosphere of isolation and uncertainty."
  }
];

const characters = [
  {
    name: "Keisha Ellyana",
    group: "UiTM Student Group",
    role: "Mass Communication Student · Social Media Influencer",
    age: "21",
    epithet: "The Charming Deceiver",
    appearance: "Female, 164 cm, slim build, long wavy dark-brown hair, warm brown eyes and light tan skin. Her usual style is fashionable and casual.",
    personality: "Extroverted, charismatic, confident, attention-loving, slightly vain and observant.",
    ability: "Echo Projection",
    abilityDetail: "Creates convincing auditory and visual projections. She can produce decoys, reproduce sounds and voices she has previously heard, and create several misleading positions to confuse attackers. At higher stages, her projections may become increasingly convincing and briefly interact with physical surroundings.",
    survival: "Her decoys can redirect enemy attention, conceal her actual position and create emergency sensory distractions that help her escape.",
    limitations: "Complex projections require concentration. Strong enemies may identify inconsistencies, and projections cannot independently inflict substantial physical damage.",
    weapon: "Resonance Twin Daggers",
    weaponDetail: "A pair of lightweight daggers with vibration-conducting edges, suitable for quick attacks, close combat and rapid repositioning.",
    background: "A Mass Communication student who creates lifestyle, fashion, beauty and university-related content on social media. She enjoys attention and knows how to command a room, although confidence does not always reveal what she is genuinely feeling.",
    traits: ["Charismatic", "Confident", "Playful", "Observant"]
  },
  {
    name: "Isyirah Amara",
    group: "UiTM Student Group",
    role: "Law Student",
    age: "22",
    epithet: "The Lucky Troublemaker",
    appearance: "Female, 160 cm, petite build, shoulder-length black hair with bangs and dark-brown eyes. Her usual clothing includes oversized shirts, jeans and sneakers.",
    personality: "Playful, cheerful, outgoing, mischievous, spontaneous and outspoken. She is the twin sister of Khairun Amara.",
    ability: "Lucky Shift",
    abilityDetail: "Slightly alters the probability of minor events in her immediate surroundings. It can turn an uncertain movement into a fortunate escape, cause an enemy's attack to narrowly miss under suitable circumstances or improve the likelihood of a favourable outcome during a short sequence of actions.",
    survival: "Her ability can help her avoid dangerous situations and create small opportunities to escape or counterattack.",
    limitations: "She cannot freely control major events or guarantee victory. Strong probability alterations become increasingly difficult.",
    weapon: "Twin Crescent Blades",
    weaponDetail: "Two short curved blades designed for agile close combat.",
    background: "A law student who enjoys humour, playful teasing and spontaneous adventures. Her natural confidence and competitive nature can sometimes lead her to act before considering the consequences.",
    traits: ["Cheerful", "Impulsive", "Mischievous", "Outgoing"]
  },
  {
    name: "Khairun Amara",
    group: "UiTM Student Group",
    role: "Law Student",
    age: "22",
    epithet: "The Tactical Tease",
    appearance: "Female, 160 cm, petite build, long straight black hair and dark-brown eyes. Her usual clothing includes blouses, fitted jeans and simple accessories.",
    personality: "Playful, sarcastic, witty, argumentative and calm under pressure. She is the twin sister of Isyirah Amara.",
    ability: "Vector Thread",
    abilityDetail: "Creates invisible directional force threads. She can redirect moving objects, restrain enemies by manipulating their movement, change the trajectory of incoming attacks and pull herself towards nearby structures.",
    survival: "Her threads can redirect certain projectiles, disrupt enemy movement and provide controlled evasive movement.",
    limitations: "Accurate directional control is required. Very heavy targets are difficult to manipulate, and multiple simultaneous threads increase concentration requirements.",
    weapon: "Threadbound Rapier",
    weaponDetail: "A lightweight rapier with a specialised channel for her directional force threads.",
    background: "A law student who is more analytical and controlled than her twin sister. She prefers having a plan and often uses sarcasm and wit in conversation, while remaining aware that not every situation can be controlled.",
    traits: ["Intelligent", "Composed", "Witty", "Protective"]
  },
  {
    name: "Badrul Aktar",
    group: "UiTM Student Group",
    role: "Accountancy Student",
    age: "23",
    epithet: "The Unyielding Guardian",
    appearance: "Male, 175 cm, average athletic build, neat short black hair, dark-brown eyes and medium tan skin. He usually dresses neatly and wears a wristwatch.",
    personality: "Stern, disciplined, responsible, practical, blunt and protective.",
    ability: "Iron Guard",
    abilityDetail: "Generates reinforced defensive armour around his body, creates temporary protective barriers, strengthens physical resistance and concentrates defence on specific body parts. He can also shield nearby allies with reduced defensive efficiency.",
    survival: "His ability offers exceptional defensive potential, allowing him to withstand attacks that would seriously injure ordinary Awakened individuals and provide protection for teammates.",
    limitations: "Heavy defensive reinforcement reduces mobility. Large barriers require greater ability control, and his defence is not absolute.",
    weapon: "Bastion Warhammer",
    weaponDetail: "A heavy warhammer designed for powerful defensive counters and close-range combat.",
    background: "An accountancy student who tends to show concern through practical assistance rather than emotional words. He takes responsibility seriously, dislikes unnecessary complications and is dependable when others need help.",
    traits: ["Disciplined", "Responsible", "Patient", "Protective"]
  },
  {
    name: "Hani Marissa",
    group: "UiTM Student Group",
    role: "Computer Science Student",
    age: "21",
    epithet: "The System Whisperer",
    appearance: "Female, 157 cm, slim build, black hair usually tied in a ponytail, round glasses and dark-brown eyes. Her usual clothing includes hoodies, loose pants and sneakers.",
    personality: "Intelligent, technically minded, introverted with strangers, passionate about programming and technology, and sometimes socially awkward.",
    ability: "System Interface",
    abilityDetail: "Analyses nearby mechanical and electronic systems, establishes temporary connections with compatible technology, detects structural weaknesses in machinery, creates simple autonomous interface drones and produces temporary digital maps of explored areas.",
    survival: "Interface drones can provide limited defensive interception. Environmental sensors can detect approaching threats, while system analysis can help identify escape routes and dangerous structures.",
    limitations: "She cannot automatically control every machine. Complex systems require more time to analyse, and biological monsters cannot simply be hacked.",
    weapon: "Arc-Tech Staff",
    weaponDetail: "A compact technical staff capable of releasing controlled electrical and kinetic bursts.",
    background: "A Computer Science student who enjoys understanding complicated systems. She may be reserved around unfamiliar people but becomes enthusiastic and expressive when discussing programming and technology.",
    traits: ["Intelligent", "Curious", "Methodical", "Patient"]
  },
  {
    name: "Putri Imelda",
    group: "UiTM Student Group",
    role: "Sport Science Student",
    age: "22",
    epithet: "The Kinetic Brawler",
    appearance: "Female, 169 cm, athletic build, short sporty black hair, dark-brown eyes and medium tan skin. Her usual clothing is sporty casual wear, track pants and running shoes.",
    personality: "Tomboyish, straightforward, outspoken, competitive, active and protective. She dislikes drama and usually cools down quickly after losing her temper.",
    ability: "Kinetic Burst",
    abilityDetail: "Stores a portion of incoming kinetic force and releases it through strikes, kicks or movement. It enhances acceleration and physical impact, creates short-range kinetic shockwaves and allows controlled bursts to change direction rapidly.",
    survival: "She can absorb and redirect some physical impacts, use powerful evasive movement and interrupt approaching enemies.",
    limitations: "Storage capacity is finite. Excessive force can overwhelm her control, and non-kinetic attacks are not automatically absorbed.",
    weapon: "Impact Tonfas",
    weaponDetail: "A pair of reinforced tonfas designed to channel stored kinetic energy.",
    background: "A Sport Science student who prefers direct communication and physical activity. She is competitive and energetic, and tends to protect people she cares about.",
    traits: ["Athletic", "Competitive", "Straightforward", "Protective"]
  },
  {
    name: "Arifin Badar",
    group: "Truth Seeker",
    role: "Leader · UiTM Law Lecturer",
    age: "46",
    epithet: "The Unyielding Strategist",
    appearance: "Male, 178 cm, lean build with broad shoulders, short black hair with grey temples and sharp dark eyes. Usually wears formal clothing.",
    personality: "Composed, analytical, strategic, emotionally restrained, demanding and difficult to panic.",
    ability: "Tactical Sight",
    abilityDetail: "Analyses combat patterns, identifies structural and defensive weaknesses, predicts likely enemy movements through observed behaviour, tracks several nearby combatants and improves tactical decision-making.",
    survival: "Detects dangerous attack patterns, helps identify escape opportunities and reduces the likelihood of being surprised.",
    limitations: "Predictions rely on available information. Unknown abilities can disrupt his assessment, and he cannot guarantee accurate predictions against unpredictable enemies.",
    weapon: "Commander's Saber",
    weaponDetail: "A balanced military-style saber designed for controlled attacks and defensive counters.",
    background: "A UiTM law lecturer who leads the Truth Seeker. He values preparation, reliable information and responsible decisions. His leadership style is professional and demanding.",
    traits: ["Analytical", "Strategic", "Disciplined", "Authoritative"]
  },
  {
    name: "Madeline Ong",
    group: "Truth Seeker",
    role: "Vice Leader · Police Officer",
    age: "31",
    epithet: "The Resonant Mediator",
    appearance: "Female, 166 cm, fit build, shoulder-length dark hair, dark-brown eyes and fair-medium skin. Usually wears professional casual clothing.",
    personality: "Cheerful, friendly, sociable, humorous and diplomatic, while remaining authoritative when necessary.",
    ability: "Resonance Voice",
    abilityDetail: "Produces controlled sound waves through her voice. She can communicate over extended distances, create concussive sound bursts, disrupt enemy balance and concentration, and generate short-lived resonance barriers.",
    survival: "Can interrupt enemy attacks, create defensive sound barriers and support coordinated team movement.",
    limitations: "Strong effects require controlled breathing. Excessive use strains her vocal system, while specialised countermeasures can reduce sound-based effects.",
    weapon: "Resonance Baton",
    weaponDetail: "A reinforced baton that amplifies controlled vibration and defensive resonance.",
    background: "A police officer who balances Arifin's serious leadership style with humour and approachability. She values cooperation and tries to prevent unnecessary conflict.",
    traits: ["Friendly", "Empathetic", "Diplomatic", "Responsible"]
  },
  {
    name: "Intan Najwa",
    group: "Truth Seeker",
    role: "Combat Specialist · Grab Rider",
    age: "29",
    epithet: "The Relentless Rider",
    appearance: "Female, 168 cm, 58 kg, athletic build, dark-brown ponytail, dark-brown eyes, medium tan skin and sharp features. Usually wears a riding jacket, dark T-shirt, cargo pants, boots or sneakers and a crossbody bag. Uses a full-face helmet when working.",
    personality: "Fearless, direct, hot-headed, independent, protective, competitive and street-smart. She dislikes sitting still and prefers travelling by motorcycle.",
    ability: "Impact Drive",
    abilityDetail: "Builds kinetic force through continuous movement, channels force into punches, kicks and weapon strikes, performs explosive directional charges, releases concentrated impact waves and maintains momentum through difficult terrain.",
    survival: "Rapid movement helps her avoid attacks, break through enemy encirclement and escape dangerous positions using accumulated momentum.",
    limitations: "Substantial force requires movement to build. Sudden stops reduce accumulated momentum, while poorly controlled charges can leave her vulnerable.",
    weapon: "Breaker Spear",
    weaponDetail: "A reinforced spear designed for thrusting attacks, controlled charges and impact release.",
    background: "A Grab rider who prefers action over unnecessary discussion. She is resourceful and protective of her companions, although impatience can sometimes get the better of her.",
    traits: ["Fearless", "Independent", "Competitive", "Resourceful"]
  },
  {
    name: "Ravin Kumar",
    group: "Truth Seeker",
    role: "Healer Specialist · Restaurant Manager",
    age: "26",
    epithet: "The Gentle Lifeline",
    appearance: "Male, 172 cm, average build, short black hair, dark-brown eyes and medium-brown skin. Has a friendly expression and usually wears simple clothing.",
    personality: "Patient, caring, easygoing, humorous, calming, practical and self-sacrificing.",
    ability: "Vital Touch",
    abilityDetail: "Accelerates natural recovery, closes wounds, stabilises injured allies, restores limited physical stamina, detects serious biological damage through touch and creates a temporary vitality field around nearby allies.",
    survival: "Can stabilise himself and teammates, reduce the consequences of non-lethal injuries and provide support during prolonged exploration.",
    limitations: "Cannot resurrect the dead or restore lost limbs. Severe injuries require substantial effort and time. Healing places demands on his concentration and stamina.",
    weapon: "Vitalis Staff",
    weaponDetail: "A reinforced medical combat staff capable of channelling his healing ability and delivering defensive strikes.",
    background: "A McDonald's manager in Seksyen 3. He is often willing to put other people's needs before his own and prefers resolving problems peacefully.",
    traits: ["Caring", "Patient", "Reliable", "Selfless"]
  },
  {
    name: "Afiq Ahnaf",
    group: "Truth Seeker",
    role: "Member · Secondary School Student",
    age: "17",
    epithet: "The Flashing Rookie",
    appearance: "Male, 170 cm, slim build, messy black hair and dark-brown eyes. Usually wears casual clothing, a backpack and sneakers.",
    personality: "Curious, impulsive, adventurous, sometimes overconfident and excitable, with teenage maturity.",
    ability: "Flash Step",
    abilityDetail: "Performs short bursts of extremely rapid movement, changes position before an opponent can react, creates brief afterimages, performs rapid directional evasions and can carry a limited amount of equipment during movement.",
    survival: "Excellent emergency evasion. He can escape surrounding enemies and reposition to safer locations.",
    limitations: "Requires awareness of the destination. He cannot freely pass through solid objects, and repeated rapid movement causes physical strain.",
    weapon: "Twin Flash Knives",
    weaponDetail: "Two compact knives designed for rapid close-range attacks.",
    background: "A high school student whose youthful enthusiasm sometimes leads him into situations beyond his experience. He is still learning how to judge risks and responsibilities.",
    traits: ["Energetic", "Adventurous", "Curious", "Impulsive"]
  },
  {
    name: "Izzati Syafiqah",
    group: "Truth Seeker",
    role: "Member · Secondary School Student",
    age: "17",
    epithet: "The Silent Warning",
    appearance: "Female, 156 cm, petite build, long black hair usually tied back and dark-brown eyes. Usually wears simple casual clothing and carries a backpack.",
    personality: "Observant, thoughtful, cautious, quiet around strangers, curious and sometimes brave.",
    ability: "Danger Sense",
    abilityDetail: "Detects hostile intent and imminent threats, senses dangerous movement before an attack reaches her, identifies hidden enemies through supernatural warning signals, distinguishes levels of immediate danger and may eventually extend warnings to nearby allies.",
    survival: "Provides early warning, helps avoid ambushes and allows safer exploration and navigation.",
    limitations: "Does not reveal every detail about a threat and cannot automatically prevent an attack. Multiple simultaneous threats may overwhelm her senses.",
    weapon: "Silent Recurve Bow",
    weaponDetail: "A compact supernatural bow with specialised arrows designed for accurate ranged combat.",
    background: "A high school student who prefers to understand a situation before acting. Despite occasional self-doubt, she can demonstrate considerable courage when others are in danger.",
    traits: ["Observant", "Thoughtful", "Cautious", "Empathetic"]
  },
  {
    name: "Dato' Samad Said",
    group: "Blood Cult",
    role: "Core Member · Politician",
    age: "33",
    epithet: "The Crimson Authority",
    appearance: "Male, 181 cm, athletic build, neat black hair and sharp dark eyes. Usually wears expensive tailored suits and a luxury wristwatch.",
    personality: "Ruthless, ambitious, calculating, manipulative, publicly charming and professional, and unforgiving of betrayal.",
    ability: "Authority Seal",
    abilityDetail: "Creates supernatural command seals on selected surfaces or targets, establishes temporary restrictions within marked areas, weakens movement through designated zones, creates defensive boundaries and reinforces his physical resistance through a personal seal.",
    survival: "Defensive zones restrict enemy approach. Personal reinforcement improves resistance, and controlled boundaries can provide retreat routes.",
    limitations: "Seals require deliberate placement. Strong enemies can break or resist them, and multiple active seals require concentration.",
    weapon: "Sovereign Cane-Saber",
    weaponDetail: "A formal cane concealing a balanced blade, designed for controlled combat and defensive techniques.",
    background: "A politician who presents himself as polished and professional. His ambition, patience and ability to read social situations make him a calculating figure.",
    traits: ["Ambitious", "Charismatic", "Calculating", "Manipulative"]
  },
  {
    name: "Amelia Erina",
    group: "Blood Cult",
    role: "Core Member · Bar Owner",
    age: "31",
    epithet: "The Velvet Siren",
    appearance: "Female, 168 cm, curvaceous build, long wavy dark-brown hair and expressive dark eyes. Her fashion style is glamorous and mature.",
    personality: "Seductive, charismatic, socially intelligent, flirtatious but difficult to read, skilled at identifying weaknesses and patient in planning.",
    ability: "Allure Veil",
    abilityDetail: "Alters the perception of nearby observers, creates convincing visual distractions, conceals her movement, produces temporary false images of herself and interferes with enemy target recognition.",
    survival: "Makes it difficult for enemies to track her accurately, provides opportunities to retreat and can confuse multiple attackers.",
    limitations: "Does not provide complete invisibility. Strong perception abilities may detect inconsistencies, and direct physical attacks remain dangerous.",
    weapon: "Velvet Fang Daggers",
    weaponDetail: "A pair of elegant, narrow daggers designed for precise close combat.",
    background: "A bar owner who uses charm and social awareness to navigate conversations and influence interactions. She rarely reveals more about herself than necessary.",
    traits: ["Charismatic", "Confident", "Observant", "Secretive"]
  },
  {
    name: "Maria Akesah",
    group: "Blood Cult",
    role: "Core Member · Unemployed",
    age: "25",
    epithet: "The Crimson Reaper",
    appearance: "Female, 159 cm, average build, messy long black hair and half-lidded dark eyes. Usually wears an oversized hoodie, loose pants and slippers.",
    personality: "Lazy, unmotivated, enjoys sleeping and resting, casual, blunt and dislikes being controlled. She may be sharper than she first appears.",
    ability: "Dream Fold",
    abilityDetail: "Creates temporary dream-like spaces within a limited area, distorts enemy spatial perception, produces temporary defensive dream constructs, creates short-range displacement through folded dream space and can trap an opponent's perception in a controlled illusion.",
    survival: "Can create emergency defensive barriers, reposition through short-range displacement and make herself more difficult to target.",
    limitations: "Strong effects require concentration. Large dream spaces are difficult to maintain, and physical damage remains dangerous if her defensive constructs are broken.",
    weapon: "Somnolent Scythe",
    weaponDetail: "A compact supernatural scythe with a curved blade, designed for sweeping attacks and defensive spacing.",
    background: "An unemployed member who values rest and personal freedom. Her casual attitude can make her appear less serious than she actually is.",
    traits: ["Casual", "Blunt", "Independent", "Unpredictable"]
  },
  {
    name: "Dr. Ishvana Rai",
    group: "Blood Cult",
    role: "Core Member · Medical Doctor",
    age: "28",
    epithet: "The Biological Observer",
    appearance: "Female, 165 cm, slim build, shoulder-length black hair, dark-brown eyes and medium complexion. Wears professional clothing and spectacles when reading or working.",
    personality: "Intelligent, observant, calm, logical, clinical and professional, with a strong interest in the human body.",
    ability: "Biological Analysis",
    abilityDetail: "Analyses biological structures through observation and proximity, identifies injuries and abnormal biological functions, detects toxins and biological abnormalities, develops temporary adaptive resistance to previously analysed biological threats and can disrupt certain biological functions through controlled contact.",
    survival: "Can detect internal injuries, identify biological threats and develop limited resistance to recognised toxins and biological attacks.",
    limitations: "Requires sufficient biological information. She cannot instantly understand every unknown species, and adaptive resistance does not provide universal immunity.",
    weapon: "Anatomist's Glaive",
    weaponDetail: "A specialised polearm with a narrow reinforced blade, designed for controlled reach and precise attacks.",
    background: "A doctor who approaches unfamiliar biological phenomena with scientific curiosity. She prefers careful examination and reliable observations over assumptions.",
    traits: ["Intelligent", "Logical", "Methodical", "Observant"]
  },
  {
    name: "Liora Venn",
    group: "Blood Hour Entities",
    role: "Neutral Entity · Trader",
    age: "Not publicly established",
    epithet: "The Merchant of the Red Exchange",
    appearance: "Female non-human entity with long silver-white hair, golden eyes with a subtle spiral pattern and pale skin with a faint supernatural glow. She wears elegant dark merchant clothing. Her shadow occasionally moves independently.",
    personality: "Friendly, communicative, business-smart, enjoys negotiating, slightly mischievous but professional.",
    ability: "Ledger Sight",
    abilityDetail: "Perceives the nature, quality and approximate value of Blood Hour materials. She can identify monster materials, detect material quality and rarity, recognise unusual crafting properties, maintain supernatural transaction records and prevent ordinary fraudulent transactions within her market.",
    survival: "Her role is primarily commercial and informational. She evaluates materials and facilitates transactions rather than acting as a conventional combatant.",
    limitations: "She cannot control the minds or decisions of customers.",
    weapon: "Not publicly established",
    weaponDetail: "No personal weapon has been established in the public record.",
    background: "A non-human entity created by the Blood Hour phenomenon as a commercial intermediary. She has no ordinary human history and operates The Red Exchange, a supernatural market inside an abandoned commercial building in Section 7, Shah Alam.",
    services: "Buys and sells monster materials, sells equipment and Blood Hour goods, evaluates materials and facilitates trading. The market contains trading counters, equipment stalls, storage facilities, negotiation areas and a connection to Maera's workshop.",
    traits: ["Friendly", "Professional", "Business-minded", "Mischievous"]
  },
  {
    name: "Maera Veyr",
    group: "Blood Hour Entities",
    role: "Neutral Entity · Blacksmith",
    age: "Not publicly established",
    epithet: "The Forge-Born Blacksmith",
    appearance: "Female non-human entity with long black-red hair, amber eyes resembling glowing embers, subtle iron-like markings on her skin and an athletic, sturdy build. She wears practical dark clothing and a blacksmith apron, with an occasional ember-like glow around her skin.",
    personality: "Stern, serious, direct, focused, dislikes time-wasters, values quality materials and takes pride in craftsmanship.",
    ability: "Forge Resonance",
    abilityDetail: "Understands the internal structure of monster materials, combines compatible supernatural materials, repairs damaged Blood Hour weapons, enhances equipment, detects crafting instability and produces special weapons from rare materials.",
    survival: "Her role is centred on equipment creation, repair and enhancement. Her knowledge of supernatural materials makes her an important service provider to Awakened individuals.",
    limitations: "Her ability is not unlimited. She cannot create valuable materials from nothing.",
    weapon: "Not publicly established",
    weaponDetail: "No personal weapon has been established in the public record.",
    background: "A Forge-Born entity created through the supernatural nature of Blood Hour. She has no ordinary human history and exists to process Blood Hour materials and create equipment suitable for Awakened individuals.",
    services: "Operates The Ember Anvil, a supernatural blacksmith workshop connected to The Red Exchange. Services include weapon crafting, repairs, enhancement, special weapon creation and material evaluation.",
    traits: ["Stern", "Focused", "Direct", "Professional"]
  }
];

const factions = [
  {
    number: "01",
    name: "UiTM Student Group",
    type: "Independent Awakened Group",
    summary: "Six Awakened students from UiTM Shah Alam who form an independent group rather than initially joining either the Truth Seeker or the Blood Cult.",
    overview: "The UiTM Student Group consists of six students whose ordinary university lives have become connected to Blood Hour. Their backgrounds, courses and personalities differ, meaning that their responses to the phenomenon are not identical. They are not initially affiliated with the Truth Seeker or the Blood Cult.",
    purpose: "Their group identity is based on their shared connection as UiTM students. The public record does not establish them as a formal organisation with a wider political or institutional structure.",
    members: ["Keisha Ellyana", "Isyirah Amara", "Khairun Amara", "Badrul Aktar", "Hani Marissa", "Putri Imelda"],
    note: "The group is independent. Its members should not automatically be treated as members of another faction."
  },
  {
    number: "02",
    name: "Truth Seeker",
    type: "Investigation and Opposition Group",
    summary: "Six Awakened dedicated to uncovering the truth behind Blood Hour and ultimately stopping the phenomenon.",
    overview: "The Truth Seeker is a group of six Awakened individuals with a shared objective: understand the mystery behind Blood Hour and find a way to stop it. Its members come from different occupations and backgrounds, bringing different skills and perspectives to the group's work.",
    purpose: "The group seeks reliable information about the phenomenon. Its activities are centred on investigation, cooperation, survival and the pursuit of answers rather than personal exploitation.",
    leadership: "Arifin Badar serves as the leader, while Madeline Ong is the vice leader. Their roles provide the group with a leadership structure that combines strategic direction with communication and coordination.",
    members: ["Arifin Badar", "Madeline Ong", "Intan Najwa", "Ravin Kumar", "Afiq Ahnaf", "Izzati Syafiqah"],
    note: "The Truth Seeker strongly opposes the Blood Cult's established activities."
  },
  {
    number: "03",
    name: "Blood Cult",
    type: "Hostile Awakened Group",
    summary: "Four Awakened who exploit Blood Hour for personal interests through manipulation, sabotage and murder.",
    overview: "The Blood Cult is a group of four Awakened whose activities exploit the unusual conditions created by Blood Hour. Their methods include manipulation, sabotage and murder, placing them in direct opposition to the Truth Seeker.",
    purpose: "Unlike groups seeking to understand or stop the phenomenon, the Blood Cult uses the circumstances of Blood Hour to pursue personal interests. Its members have different occupations and personalities, but their established activities create a serious threat to others.",
    leadership: "The public record identifies four core members. A formal leadership hierarchy beyond their established membership has not been confirmed in this archive.",
    members: ["Dato' Samad Said", "Amelia Erina", "Maria Akesah", "Dr. Ishvana Rai"],
    note: "The Blood Cult is not the same organisation as the Truth Seeker and should not be treated as a neutral group."
  },
  {
    number: "04",
    name: "Blood Hour Entities",
    type: "Non-Human Neutral Entities",
    summary: "Individuals who exist specifically within Blood Hour and disappear when the phenomenon ends.",
    overview: "Blood Hour entities are not ordinary humans and are not Awakened. They exist specifically within the supernatural period and disappear when Blood Hour ends. Their functions are connected to the environment and services available during the phenomenon.",
    purpose: "The known entities in this archive provide specialised services to Awakened individuals. Liora Venn operates as a trader, while Maera Veyr provides blacksmithing, repairs and equipment-related services.",
    leadership: "No faction leadership structure is established. The known entities maintain a professional relationship and operate independently of the human factions.",
    members: ["Liora Venn", "Maera Veyr"],
    note: "Both known entities are neutral and do not belong to the UiTM Student Group, Truth Seeker or Blood Cult."
  }
];

// ============================================
// HELPERS
// ============================================

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

// ============================================
// STATIC RULES
// ============================================

function renderRules() {
  const grid = $("#rulesGrid");
  if (!grid) return;

  grid.innerHTML = rules.map(rule => `
    <article class="info-card">
      <span class="card-number">${escapeHTML(rule.number)}</span>
      <h3>${escapeHTML(rule.title)}</h3>
      <p>${escapeHTML(rule.text)}</p>
      <p class="rule-extra">${escapeHTML(rule.extra)}</p>
    </article>
  `).join("");
}

// ============================================
// STATIC ABILITY STAGES
// ============================================

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

// ============================================
// TOWER ARCHIVE — CLICK TO READ
// ============================================

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
      <p>${escapeHTML(tower.note || "This entry contains public information only.")}</p>
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

// ============================================
// CHARACTER ARCHIVE — CLICK TO READ
// ============================================

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
      data-group="${escapeHTML(group)}">
      ${escapeHTML(group)}
    </button>
  `).join("");

  container.addEventListener("click", event => {
    const button = event.target.closest("button[data-group]");
    if (!button) return;

    activeCharacterGroup = button.dataset.group;

    $$("#characterFilters button").forEach(item => {
      item.classList.toggle("active", item.dataset.group === activeCharacterGroup);
    });

    renderCharacters();
  });
}

function characterCard(character) {
  const ageText = character.age === "Not publicly established"
    ? "Age not publicly established"
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
    ["GROUP", character.group],
    ["ROLE", character.role],
    ["AGE", character.age],
    ["ABILITY", character.ability],
    ["PERSONAL WEAPON", character.weapon]
  ];

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

    <section class="modal-section">
      <h3>Ability · ${escapeHTML(character.ability)}</h3>
      <p>${escapeHTML(character.abilityDetail)}</p>
    </section>

    <section class="modal-section">
      <h3>Survival Applications</h3>
      <p>${escapeHTML(character.survival)}</p>
    </section>

    <section class="modal-section">
      <h3>Limitations</h3>
      <p>${escapeHTML(character.limitations)}</p>
    </section>

    <section class="modal-section">
      <h3>Personal Weapon · ${escapeHTML(character.weapon)}</h3>
      <p>${escapeHTML(character.weaponDetail)}</p>
    </section>

    ${character.services ? `
      <section class="modal-section">
        <h3>Services and Operations</h3>
        <p>${escapeHTML(character.services)}</p>
      </section>
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

  if (count) {
    count.textContent = `${filtered.length} PROFILES`;
  }

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

// ============================================
// FACTION ARCHIVE — CLICK TO READ
// ============================================

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

// ============================================
// NAVIGATION
// ============================================

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

// ============================================
// MODAL CONTROLS
// ============================================

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

// ============================================
// INITIALISE
// ============================================

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