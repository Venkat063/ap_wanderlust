/* ============================================================
   ANDHRA PRADESH — DISTRICT DATA
   26 districts (2022 reorganisation), grouped by cultural zone:
   Uttarandhra (North) · Kostaandhra (Coastal) · Rayalaseema (South-west)
   Node coordinates are percentages on the stylised coastline map
   in #map-svg (viewBox 0 0 380 760) — not literal GIS boundaries.
   ============================================================ */

const ZONES = {
  UA: { label: "Uttarandhra", color: "var(--leaf)" },
  KA: { label: "Kostaandhra", color: "var(--indigo)" },
  RS: { label: "Rayalaseema", color: "var(--rust)" }
};

const DISTRICTS = [
  {
    id: "srikakulam", name: "Srikakulam", telugu: "శ్రీకాకుళం", zone: "UA", hq: "Srikakulam",
    x: 68, y: 4, tagline: "Where the coast meets Odisha",
    geography: "AP's northernmost district, a narrow coastal strip on the Bay of Bengal bordering Odisha, fed by the Nagavali and Vamsadhara rivers.",
    history: "An ancient seat of the Kalinga–Andhra cultural overlap; Srikurmam and Arasavalli carry temple inscriptions going back over a thousand years.",
    festivals: "Srikurmam car festival and Arasavalli Ratha Saptami draw large crowds timed to the sun's alignment with the temple sanctum.",
    cuisine: "Bongulo chicken (bamboo-smoked), Srikakulam-style fish curry, and jaggery-based sweets from the district's cane belt.",
    personalities: "Home ground of several modern Telugu poets and the freedom-era publisher Gurajada Apparao's literary circle.",
    industries: "Paddy, cashew and jute cultivation, with a growing fisheries and small-port economy at Kalingapatnam.",
    places: [
      { name: "Arasavalli Sun Temple", type: "Temple", desc: "Rare temple where the sanctum faces the rising sun on both equinoxes." },
      { name: "Srikurmam Temple", type: "Temple", desc: "One of the few shrines worshipping Vishnu's Kurma (tortoise) avatar." },
      { name: "Kalingapatnam Beach", type: "Beach", desc: "Quiet river-mouth beach where the Vamsadhara meets the sea." }
    ],
    transport: "Linked by NH16 and the Howrah–Chennai rail line; nearest airport is Visakhapatnam (~110 km)."
  },
  {
    id: "manyam", name: "Parvathipuram Manyam", telugu: "పార్వతీపురం మన్యం", zone: "UA", hq: "Parvathipuram",
    x: 58, y: 8, tagline: "Eastern Ghats hill country",
    geography: "A hilly agency district in the Eastern Ghats bordering Odisha, drained by the Nagavali river valley.",
    history: "Long a tribal heartland; Parvathipuram grew as a handloom and trading town under the Vizianagaram estate.",
    festivals: "Tribal jatras and Sammakka-style forest deity festivals mark the agricultural calendar in the hill mandals.",
    cuisine: "Millet-based tribal cooking — ragi sankati, bamboo shoot curry — alongside mainstream Andhra fare in the towns.",
    personalities: "Known for its handloom weaver community whose Parvathipuram cotton sarees carry a GI-linked reputation.",
    industries: "Handloom weaving, minor forest produce, and hill agriculture including millets and turmeric.",
    places: [
      { name: "Kurupam Hills", type: "Hills", desc: "Forested Eastern Ghats terrain popular for tribal-village day trips." },
      { name: "Parvathipuram Handloom Cluster", type: "Craft", desc: "Weaving town known for traditional cotton sarees." }
    ],
    transport: "Connected via NH26 and the Rayagada–Vizianagaram rail link."
  },
  {
    id: "vizianagaram", name: "Vizianagaram", telugu: "విజయనగరం", zone: "UA", hq: "Vizianagaram",
    x: 66, y: 11, tagline: "The City of Victory",
    geography: "A coastal-to-inland district between the Eastern Ghats and the Bay of Bengal, once the seat of a princely estate.",
    history: "Capital of the Vizianagaram Maharajas, patrons of Telugu literature and Carnatic music through the 18th–19th centuries.",
    festivals: "The Pydithalli Ammavaru Sirimanotsavam, where a priest is carried on a spiked wooden platform, is unique to the town.",
    cuisine: "Known for its royal-kitchen-style biryanis and traditional Andhra thali fare served in the old town.",
    personalities: "Birthplace of Gidugu Ramamurthy, the linguist who championed spoken-Telugu ('Vyavaharika Bhasha') reform.",
    industries: "Textile and handloom trade, steel-plant ancillary units, and agriculture in the surrounding delta lands.",
    places: [
      { name: "Vizianagaram Fort", type: "History", desc: "18th-century fort at the heart of the former princely capital." },
      { name: "Pydithalli Ammavaru Temple", type: "Temple", desc: "Site of the district's signature Sirimanotsavam festival." }
    ],
    transport: "Major junction on the Howrah–Chennai main rail line; NH16 runs through the town."
  },
  {
    id: "visakhapatnam", name: "Visakhapatnam", telugu: "విశాఖపట్నం", zone: "UA", hq: "Visakhapatnam",
    x: 70, y: 16, tagline: "The City of Destiny",
    geography: "A natural harbour city where the Eastern Ghats meet the Bay of Bengal, giving it both a working port and a hill-and-beach skyline.",
    history: "A key colonial-era port that grew into independent India's major naval base and steel-and-shipbuilding centre.",
    festivals: "The Visakha Utsav and Navy Day fleet review bring the beach road to life with cultural and maritime events.",
    cuisine: "Fresh-catch seafood — pandu mirapakaya royyalu (prawns), fish pulusu — and Andhra-style street food along the beach road.",
    personalities: "Home city of several Indian Navy commanders and modern Telugu cinema and sporting figures.",
    industries: "Port and shipping, steel, petrochemicals, and a fast-growing IT and pharma corridor.",
    places: [
      { name: "RK Beach", type: "Beach", desc: "The city's iconic promenade, lined with the INS Kurusura submarine museum." },
      { name: "Kailasagiri", type: "Hill Park", desc: "Hilltop park with a cable car and panoramic bay views." },
      { name: "Simhachalam Temple", type: "Temple", desc: "Ancient hill shrine to Varaha Narasimha, blending Odishan and Dravidian styles." }
    ],
    transport: "Visakhapatnam Airport and a major rail junction; the city anchors NH16 on the east coast route."
  },
  {
    id: "anakapalli", name: "Anakapalli", telugu: "అనకాపల్లి", zone: "UA", hq: "Anakapalli",
    x: 68, y: 20, tagline: "Andhra's jaggery town",
    geography: "A fertile belt just inland from Visakhapatnam, straddling the Sarada and Varaha rivers.",
    history: "Long known as a sugarcane and jaggery trading centre feeding the wider Godavari–Vizag economy.",
    festivals: "Local temple jatras and harvest-season celebrations tied to the sugarcane crushing season.",
    cuisine: "Famous for bellam (jaggery) sweets and a strong tradition of Andhra-style pickles.",
    personalities: "A traditional trading-community town that has produced several regional industrialists.",
    industries: "Jaggery and sugar processing, sugarcane farming, and growing ancillary industry linked to nearby Visakhapatnam.",
    places: [
      { name: "Thotlakonda", type: "Heritage", desc: "Excavated 2nd-century Buddhist monastery complex overlooking the coast." },
      { name: "Anakapalli Jaggery Market", type: "Craft", desc: "One of Asia's largest jaggery trading markets." }
    ],
    transport: "On NH16 and the main coastal rail line, roughly 40 km from Visakhapatnam."
  },
  {
    id: "asr", name: "Alluri Sitharama Raju", telugu: "అల్లూరి సీతారామరాజు", zone: "UA", hq: "Paderu",
    x: 52, y: 17, tagline: "Coffee, cloud forests and waterfalls",
    geography: "A rugged Eastern Ghats agency district of high plateaus, coffee-growing slopes and deep valleys around Araku.",
    history: "Named for freedom fighter Alluri Sitarama Raju, who led the 1922 Rampa Rebellion against colonial forest laws from these hills.",
    festivals: "Tribal harvest festivals and weekly Girijan (tribal) markets remain central to community life across the valley.",
    cuisine: "Bamboo-cooked chicken and forest-vegetable curries, plus Araku's now well-known Arabica coffee.",
    personalities: "The district's namesake, Alluri Sitarama Raju, remains one of Andhra's most revered anti-colonial leaders.",
    industries: "Coffee cultivation, tribal handicrafts, and a fast-growing eco-tourism economy.",
    places: [
      { name: "Araku Valley", type: "Hill Station", desc: "Cool coffee-growing valley reached by a scenic train ride through 58 tunnels." },
      { name: "Borra Caves", type: "Caves", desc: "Million-year-old limestone caves with dramatic stalactite formations." },
      { name: "Katiki Waterfalls", type: "Waterfall", desc: "A seasonal cascade tucked into the forest near Borra." }
    ],
    transport: "The Kirandul rail line's Araku toy-train route is the signature approach; also reachable via NH45."
  },
  {
    id: "kakinada", name: "Kakinada", telugu: "కాకినాడ", zone: "KA", hq: "Kakinada",
    x: 72, y: 27, tagline: "Port town of the Godavari delta",
    geography: "A delta-coast district where the Godavari river system meets the Bay of Bengal, including Hope Island's natural harbour shelter.",
    history: "Grew as a major colonial-era port exporting rice and oilseed, and remains a centre for the region's fertiliser and gas industries.",
    festivals: "Godavari Pushkaram, held once every 12 years, sees millions bathe along the delta's ghats.",
    cuisine: "Kakinada khaja (a layered sweet) and delta-fresh seafood define the local table.",
    personalities: "A historic centre of Telugu theatre and early 20th-century social-reform movements.",
    industries: "Port and shipping, natural gas processing, and fine Uppada handloom weaving.",
    places: [
      { name: "Kakinada Beach", type: "Beach", desc: "Long working-town beach popular for evening walks." },
      { name: "Hope Island", type: "Coast", desc: "A narrow sand spit that shelters Kakinada's natural harbour." },
      { name: "Uppada", type: "Craft Village", desc: "Weaving village famous for gossamer-light jamdani sarees." }
    ],
    transport: "Kakinada Port and rail connect to the Chennai–Howrah line; NH16 runs along the coast."
  },
  {
    id: "eastgodavari", name: "East Godavari", telugu: "తూర్పు గోదావరి", zone: "KA", hq: "Rajamahendravaram",
    x: 66, y: 30, tagline: "Andhra's cultural capital",
    geography: "Centred on Rajamahendravaram (Rajahmundry) on the banks of the Godavari, with the river's gorge and the Papikondalu hills upstream.",
    history: "Regarded as the cradle of Telugu literature — poet Nannaya began the first Telugu Mahabharatam translation here in the 11th century.",
    festivals: "The Godavari Pushkaram and river arati ceremonies anchor the district's religious calendar.",
    cuisine: "Pesarattu (green-gram crepe) and Godavari-style pulasa fish curry, made from a prized seasonal river fish.",
    personalities: "Home to reformer Kandukuri Veeresalingam, a pioneer of Telugu prose and women's education.",
    industries: "Agriculture along the delta, a river-cruise tourism economy, and light manufacturing around Rajahmundry.",
    places: [
      { name: "Papikondalu", type: "River Gorge", desc: "A forested Godavari gorge explored by day-long boat cruises." },
      { name: "Kotilingeswara & Markandeya Ghats", type: "Temple", desc: "River-front temple ghats central to Godavari Pushkaram." }
    ],
    transport: "Rajahmundry Airport, a major rail junction, and the Godavari road-and-rail bridges on NH16."
  },
  {
    id: "konaseema", name: "Konaseema", telugu: "కోనసీమ", zone: "KA", hq: "Amalapuram",
    x: 72, y: 33, tagline: "God's own delta",
    geography: "A lush deltaic island region cradled between the Godavari's distributary branches, laced with backwaters and coconut groves.",
    history: "Long celebrated in Telugu literature as an idyllic riverine landscape, and home to Draksharamam, one of the five Pancharama Kshetras.",
    festivals: "Vasantha Navaratri at Draksharamam and delta boat festivals mark the region's calendar.",
    cuisine: "Coconut-rich cooking, Konaseema-style chicken curry, and delta fish preparations.",
    personalities: "A region that has shaped generations of Telugu poets drawn to its backwater landscapes.",
    industries: "Coconut and areca-nut farming, backwater tourism, and paddy cultivation.",
    places: [
      { name: "Draksharamam Temple", type: "Temple", desc: "One of the five Pancharama Kshetras dedicated to Shiva." },
      { name: "Konaseema Backwaters", type: "Backwaters", desc: "Coconut-fringed canals explored by houseboat and country boat." }
    ],
    transport: "Reached via Amalapuram's road network off NH216, with rail access through Rajahmundry."
  },
  {
    id: "westgodavari", name: "West Godavari", telugu: "పశ్చిమ గోదావరి", zone: "KA", hq: "Bhimavaram",
    x: 60, y: 33, tagline: "The rice bowl of Andhra",
    geography: "A flat, intensely irrigated delta district between the Godavari and Krishna river systems.",
    history: "One of the original 11 districts of Andhra State, long central to the region's rice economy.",
    festivals: "Temple jatras at Bhimavaram's Someswara temple and delta harvest festivals mark the year.",
    cuisine: "Delta rice dishes, prawn and fish curries, and a strong aquaculture-driven seafood tradition.",
    personalities: "A district that has produced numerous Telugu film and television figures based around Bhimavaram.",
    industries: "Rice milling, aquaculture and shrimp farming, and agro-processing.",
    places: [
      { name: "Bhimavaram Someswara Temple", type: "Temple", desc: "A twin-linga Shiva shrine central to the town's identity." },
      { name: "Kolleru Lake (edge)", type: "Wetland", desc: "One of Asia's largest freshwater lakes and a major bird habitat." }
    ],
    transport: "Bhimavaram junction connects to the coastal rail line; NH216 runs through the district."
  },
  {
    id: "eluru", name: "Eluru", telugu: "ఏలూరు", zone: "KA", hq: "Eluru",
    x: 54, y: 35, tagline: "Lakes, lace and lacquer",
    geography: "A delta-edge district anchored by Eluru town and the shallow wetlands of Kolleru Lake.",
    history: "An old trading and craft town known historically for its handmade carpets and lacquerware.",
    festivals: "Dasara processions and lake-adjacent harvest festivals are the district's major public celebrations.",
    cuisine: "Delta rice-and-fish cooking similar to its Godavari neighbours, with local sweets from the town's old bazaars.",
    personalities: "Historically a centre for artisans and craftspeople rather than any single famous figure.",
    industries: "Rice milling, aquaculture, and traditional lacquerware and carpet weaving.",
    places: [
      { name: "Kolleru Lake", type: "Wetland", desc: "Ramsar-listed wetland and winter home to migratory birds." },
      { name: "Eluru Tank", type: "Lake", desc: "A scenic town lake popular for evening walks." }
    ],
    transport: "On the Chennai–Howrah rail line and NH16, roughly midway between Vijayawada and Rajahmundry."
  },
  {
    id: "krishna", name: "Krishna", telugu: "కృష్ణా", zone: "KA", hq: "Machilipatnam",
    x: 55, y: 40, tagline: "Home of Kalamkari art",
    geography: "A coastal delta district straddling the mouth of the Krishna river, historically one of India's busiest ports.",
    history: "Machilipatnam (Masulipatnam) was a major Mughal-era and colonial trading port, famed for its painted-cotton exports to Europe.",
    festivals: "Local temple jatras and coastal fishing-community festivals mark the calendar around Machilipatnam.",
    cuisine: "Bandar laddu, a dense ghee-and-gram sweet, originates here, alongside classic delta seafood.",
    personalities: "The birthplace of the Kalamkari textile tradition that still shapes Andhra's craft identity.",
    industries: "Kalamkari hand-painted and block-printed textiles, fishing, and delta agriculture.",
    places: [
      { name: "Pedana Kalamkari Village", type: "Craft", desc: "Workshops still hand block-print cotton using vegetable dyes." },
      { name: "Bhavani Island", type: "River Island", desc: "A landscaped island retreat on the Krishna river near Vijayawada." }
    ],
    transport: "Machilipatnam Port and rail link connect to the Vijayawada hub 65 km inland."
  },
  {
    id: "ntr", name: "NTR", telugu: "ఎన్టీఆర్", zone: "KA", hq: "Vijayawada",
    x: 50, y: 39, tagline: "Andhra's commercial heart",
    geography: "Centred on Vijayawada at the Krishna river's Prakasam Barrage, framed by the Indrakeeladri and Bhavani hills.",
    history: "Named for actor-turned-chief-minister N.T. Rama Rao; Vijayawada has long been the state's key commercial and transit hub.",
    festivals: "Dasara Navaratri at Kanaka Durga temple is one of Andhra's largest annual religious gatherings.",
    cuisine: "A crossroads food scene — Andhra thalis, street-side chaat, and riverside snack stalls.",
    personalities: "Namesake N.T. Rama Rao remains one of Telugu cinema and politics' most influential figures.",
    industries: "Trade and logistics, education, and a dense small-manufacturing base around the city.",
    places: [
      { name: "Kanaka Durga Temple", type: "Temple", desc: "Hilltop shrine overlooking the Krishna, the city's spiritual anchor." },
      { name: "Undavalli Caves", type: "Caves", desc: "Rock-cut Gupta-era cave temples with a large reclining Vishnu." },
      { name: "Prakasam Barrage", type: "Landmark", desc: "A colonial-era barrage that doubles as a scenic river crossing." }
    ],
    transport: "Vijayawada Airport, a major national rail junction, and the NH16/NH65 interchange."
  },
  {
    id: "guntur", name: "Guntur", telugu: "గుంటూరు", zone: "KA", hq: "Guntur",
    x: 46, y: 43, tagline: "Chilli country and ancient Amaravati",
    geography: "A fertile delta-and-upland district on the Krishna river, home to Amaravati, AP's designated capital region.",
    history: "Amaravati was once the capital of the ancient Satavahana dynasty and a major centre of early Buddhism in India.",
    festivals: "Local Dasara and harvest festivals coincide with the district's chilli and cotton trading season.",
    cuisine: "Guntur is synonymous with fiery Andhra chilli — guntur mirapakaya — used across the region's pickles and curries.",
    personalities: "A trading and agrarian hub that has produced many of Andhra's business and political figures.",
    industries: "One of Asia's largest chilli and cotton trading markets, alongside tobacco and grain trade.",
    places: [
      { name: "Amaravati Stupa & Museum", type: "Heritage", desc: "Remains of a 2,000-year-old Buddhist stupa and archaeological museum." },
      { name: "Undavalli Caves (edge)", type: "Caves", desc: "Rock-cut caves on the district's border with NTR." }
    ],
    transport: "NH16 and NH544 cross at Guntur, with rail links to Vijayawada 30 km away."
  },
  {
    id: "palnadu", name: "Palnadu", telugu: "పల్నాడు", zone: "KA", hq: "Narasaraopeta",
    x: 40, y: 44, tagline: "Land of the Palnati Yuddham",
    geography: "An upland district along the Nagarjuna Sagar reservoir, drier and more rugged than the coastal delta to its east.",
    history: "Famous for the 12th-century Palnati Yuddham, a chivalric civil war retold in Telugu folk ballads for centuries.",
    festivals: "Folk-ballad performances (Palnati Veerula Katha) keep the region's warrior epic alive at local fairs.",
    cuisine: "Hearty upland Andhra cooking built around ragi, jowar and slow-cooked mutton curries.",
    personalities: "The legendary warriors of the Palnati Yuddham remain central to the region's folk identity.",
    industries: "Dryland and reservoir-fed agriculture, with cement and limestone quarrying in parts of the district.",
    places: [
      { name: "Nagarjuna Sagar Dam", type: "Dam", desc: "One of the world's tallest masonry dams, on the Krishna river." },
      { name: "Nagarjunakonda", type: "Heritage Island", desc: "A reservoir island preserving ancient Buddhist university remains." }
    ],
    transport: "Connected via NH565 with rail access through Guntur and Macherla."
  },
  {
    id: "bapatla", name: "Bapatla", telugu: "బాపట్ల", zone: "KA", hq: "Bapatla",
    x: 46, y: 48, tagline: "Coastal handloom country",
    geography: "A narrow coastal strip south of the Krishna delta, with sandy beaches and salt-tolerant paddy fields.",
    history: "The nearby town of Chirala grew as one of coastal Andhra's most important handloom weaving centres.",
    festivals: "Coastal temple jatras and fishing-community festivals mark the calendar along the shoreline.",
    cuisine: "Simple coastal fare — fresh fish fry and delta-style rice dishes.",
    personalities: "Chirala-Perala's weaving families carry forward one of the coast's oldest textile traditions.",
    industries: "Handloom weaving (Chirala), fishing, and paddy cultivation.",
    places: [
      { name: "Bapatla Beach", type: "Beach", desc: "A quiet, less-visited stretch of coast good for sunrise walks." },
      { name: "Chirala Handloom Cluster", type: "Craft", desc: "Historic weaving town known for cotton sarees and dhotis." }
    ],
    transport: "On the Chennai–Howrah coastal rail line and NH16."
  },
  {
    id: "prakasam", name: "Prakasam", telugu: "ప్రకాశం", zone: "KA", hq: "Ongole",
    x: 44, y: 52, tagline: "Home of the Ongole cattle breed",
    geography: "A long coastal-to-inland district stretching from the Bay of Bengal into the dry Nallamala foothills.",
    history: "Named for Andhra Kesari Tanguturi Prakasam, a leading freedom-movement figure and the region's first chief minister.",
    festivals: "Kotappakonda's Shivaratri jatra is one of the district's largest annual gatherings.",
    cuisine: "Robust upland Andhra cooking, with cotton and chilli-belt produce shaping the local kitchen.",
    personalities: "Namesake Tanguturi Prakasam remains a defining figure of the freedom movement in Andhra.",
    industries: "The globally recognised Ongole cattle breed, cotton farming, and coastal fishing.",
    places: [
      { name: "Kotappakonda", type: "Temple", desc: "A Shiva shrine on a scenic hill, the site of a major Shivaratri fair." },
      { name: "Ongole Cattle Farms", type: "Heritage", desc: "Home ground of the muscular Ongole breed, exported worldwide." }
    ],
    transport: "NH16 and the coastal rail line run through Ongole town."
  },
  {
    id: "nellore", name: "SPSR Nellore", telugu: "నెల్లూరు", zone: "KA", hq: "Nellore",
    x: 42, y: 58, tagline: "Shrimp capital on Pulicat's shore",
    geography: "AP's southernmost coastal district, bordered by Pulicat Lake, a major brackish-water lagoon shared with Tamil Nadu.",
    history: "Named for freedom-movement leader Potti Sriramulu, whose fast unto death led to the linguistic formation of Andhra State.",
    festivals: "Local temple festivals along the Penna river and Pulicat's migratory-bird season anchor the calendar.",
    cuisine: "Nellore is famous across India for its shrimp and prawn dishes, grown in the district's extensive aquaculture ponds.",
    personalities: "Namesake Potti Sriramulu is honoured as a founding figure of the modern Telugu-speaking state.",
    industries: "India's leading shrimp and aquaculture export hub, plus rice and mica mining.",
    places: [
      { name: "Pulicat Lake", type: "Wetland", desc: "India's second-largest brackish lagoon and a flamingo wintering ground." },
      { name: "Mypadu Beach", type: "Beach", desc: "A calm, casuarina-lined beach near Nellore town." }
    ],
    transport: "On NH16 and the main Chennai–Howrah rail line."
  },
  {
    id: "kurnool", name: "Kurnool", telugu: "కర్నూలు", zone: "RS", hq: "Kurnool",
    x: 26, y: 55, tagline: "Gateway to Rayalaseema",
    geography: "A dry, rocky district on the Tungabhadra river, opening south-west into the Rayalaseema plateau.",
    history: "Served as the capital of Andhra State from 1953–56, before the capital moved to Hyderabad.",
    festivals: "The Mantralayam Aradhana festival honouring saint Raghavendra Swamy draws pilgrims from across South India.",
    cuisine: "Rayalaseema's famously spicy cooking — natu kodi (country chicken) curry and fiery non-veg thalis.",
    personalities: "Home to the Mantralayam mutt associated with the revered 17th-century saint Raghavendra Swamy.",
    industries: "Cotton and groundnut farming, limestone and cement production.",
    places: [
      { name: "Belum Caves", type: "Caves", desc: "India's second-longest cave system, with dramatic natural formations." },
      { name: "Mantralayam", type: "Pilgrimage", desc: "Shrine of Sri Raghavendra Swamy on the Tungabhadra's banks." },
      { name: "Konda Reddy Fort", type: "History", desc: "A river-front fort overlooking Kurnool town." }
    ],
    transport: "NH40 and NH67 cross here; Kurnool has rail links to Hyderabad and Bengaluru."
  },
  {
    id: "nandyal", name: "Nandyal", telugu: "నంద్యాల", zone: "RS", hq: "Nandyal",
    x: 32, y: 51, tagline: "Jyotirlinga country in the Nallamala hills",
    geography: "A forested district in the Nallamala hill range, cradling the Srisailam reservoir on the Krishna river.",
    history: "Srisailam has been a major pilgrimage and temple-building centre for over a thousand years.",
    festivals: "Maha Shivaratri at Srisailam is one of Andhra's largest temple festivals, drawing pilgrims for days.",
    cuisine: "Forest-adjacent Rayalaseema cooking, with tamarind- and chilli-forward curries.",
    personalities: "The Srisailam temple complex has drawn devotion from rulers across South Indian dynasties for centuries.",
    industries: "Forestry, limestone mining, and pilgrimage-driven tourism around Srisailam.",
    places: [
      { name: "Srisailam Temple", type: "Temple", desc: "One of India's 12 Jyotirlingas, sacred to both Shaiva and Shakta traditions." },
      { name: "Nallamala Tiger Reserve", type: "Wildlife", desc: "Part of the Nagarjunsagar–Srisailam Tiger Reserve, one of India's largest." },
      { name: "Ahobilam", type: "Temple", desc: "A cluster of nine Narasimha shrines set across forested hills." }
    ],
    transport: "Nandyal is a rail junction town on NH40, with ghat roads leading up to Srisailam."
  },
  {
    id: "anantapur", name: "Anantapur", telugu: "అనంతపురం", zone: "RS", hq: "Anantapur",
    x: 20, y: 60, tagline: "Semi-arid plains of Rayalaseema",
    geography: "A dry, semi-arid plateau district bordering Karnataka, historically dependent on tank irrigation.",
    history: "The nearby Penukonda fort was a Vijayanagara-era stronghold and briefly a capital after the fall of Hampi.",
    festivals: "Local temple jatras and cattle fairs mark the agricultural calendar across the district's dry belt.",
    cuisine: "Groundnut features heavily in local cooking, alongside classic Rayalaseema spice levels.",
    personalities: "A district long associated with pastoral and agrarian communities central to Rayalaseema identity.",
    industries: "Groundnut farming (one of India's largest producing districts) and emerging solar-power projects.",
    places: [
      { name: "Lepakshi (nearby)", type: "Temple", desc: "Vijayanagara-era temple famed for its hanging pillar and giant monolithic Nandi." },
      { name: "Penukonda Fort", type: "History", desc: "A Vijayanagara-era hill fort with palace and temple ruins." }
    ],
    transport: "On NH44, with rail links toward Bengaluru and Guntakal junction."
  },
  {
    id: "srisathyasai", name: "Sri Sathya Sai", telugu: "శ్రీ సత్యసాయి", zone: "RS", hq: "Puttaparthi",
    x: 24, y: 66, tagline: "A spiritual pilgrimage district",
    geography: "A dry Rayalaseema plateau district carved out around Puttaparthi, on the Chitravathi river.",
    history: "Grew around the ashram of spiritual teacher Sri Sathya Sai Baba, which turned a small village into a global pilgrimage town.",
    festivals: "Sai Baba's birthday and Guru Purnima bring large gatherings of devotees to Prasanthi Nilayam.",
    cuisine: "Simple satvik (vegetarian) ashram cuisine alongside standard Rayalaseema fare in the town.",
    personalities: "Namesake Sri Sathya Sai Baba remains one of modern India's most widely followed spiritual figures.",
    industries: "Pilgrimage tourism, education (Sri Sathya Sai institutions), and Hindupur's silk and handloom trade.",
    places: [
      { name: "Prasanthi Nilayam", type: "Ashram", desc: "The main ashram and spiritual centre founded by Sri Sathya Sai Baba." },
      { name: "Lepakshi Temple", type: "Temple", desc: "Renowned 16th-century temple on the district's northern edge." }
    ],
    transport: "Puttaparthi has its own airport; also linked by rail and NH44."
  },
  {
    id: "kadapa", name: "YSR Kadapa", telugu: "వైయస్సార్ కడప", zone: "RS", hq: "Kadapa",
    x: 30, y: 64, tagline: "Gateway to Tirupati's hills",
    geography: "A rugged district of gorges and hill ranges along the Penna river, opening a historic route toward Tirumala.",
    history: "Long served as a trade corridor linking the Rayalaseema plateau to the temple towns of the south.",
    festivals: "Pushpagiri's temple festivals and local river-bank celebrations mark the calendar.",
    cuisine: "Classic Rayalaseema spice — ragi sankati with fiery non-veg curries.",
    personalities: "A district whose barytes mining and trading families shaped much of its modern economy.",
    industries: "Barytes and mineral mining, cement production, and dryland agriculture.",
    places: [
      { name: "Gandikota", type: "Gorge", desc: "A dramatic Penna river canyon often called 'the Grand Canyon of India'." },
      { name: "Pushpagiri Temple", type: "Temple", desc: "A riverside Shiva-Vishnu temple complex on the Penna's banks." }
    ],
    transport: "Kadapa Airport, a rail junction, and NH67/NH716 pass through the district."
  },
  {
    id: "annamayya", name: "Annamayya", telugu: "అన్నమయ్య", zone: "RS", hq: "Rayachoti",
    x: 34, y: 68, tagline: "Named for the poet-saint of Tirumala",
    geography: "A hilly Rayalaseema district bordering Tamil Nadu and Karnataka, including the cool Horsley Hills.",
    history: "Named for Annamacharya, the 15th-century saint-composer whose devotional songs to Venkateswara shaped Telugu music.",
    festivals: "Local festivals celebrate Annamacharya's compositions alongside standard Rayalaseema temple calendars.",
    cuisine: "Hill-belt Rayalaseema cooking, similar in spice profile to neighbouring Kadapa and Chittoor.",
    personalities: "Namesake Annamacharya is revered as the first great composer of Telugu devotional (sankeertana) music.",
    industries: "Fruit and vegetable farming in the hill belt, plus mineral mining.",
    places: [
      { name: "Horsley Hills", type: "Hill Station", desc: "A cool-climate hill retreat in the Rayalaseema plateau." },
      { name: "Gandikota (edge)", type: "Gorge", desc: "Shares the dramatic Penna river gorge with neighbouring Kadapa." }
    ],
    transport: "Reached via NH71 and NH716, with rail access through Kadapa."
  },
  {
    id: "chittoor", name: "Chittoor", telugu: "చిత్తూరు", zone: "RS", hq: "Chittoor",
    x: 32, y: 74, tagline: "Mango orchards at the Tamil Nadu border",
    geography: "A hilly southern district bordering both Tamil Nadu and Karnataka, known for its mango belt and Horsley Hills fringe.",
    history: "A historic frontier region between the Telugu, Tamil and Kannada cultural zones, with numerous old temple towns.",
    festivals: "The Kanipakam Vinayaka temple's Brahmotsavam is among the district's largest annual festivals.",
    cuisine: "Renowned for its mango orchards, plus classic Rayalaseema spice in everyday cooking.",
    personalities: "A district that has produced numerous figures in Telugu cinema and classical arts.",
    industries: "Mango and horticulture, silk weaving, and light manufacturing near the Tamil Nadu border.",
    places: [
      { name: "Kanipakam Vinayaka Temple", type: "Temple", desc: "A Ganesha shrine famous for its self-manifested idol and a well of legend." },
      { name: "Horsley Hills", type: "Hill Station", desc: "A nearby hill-station retreat shared with Annamayya district." }
    ],
    transport: "Linked by NH71 and rail to both Tirupati and Bengaluru."
  },
  {
    id: "sribalaji", name: "Sri Balaji (Tirupati)", telugu: "శ్రీ బాలాజీ", zone: "RS", hq: "Tirupati",
    x: 38, y: 78, tagline: "Home to the world's richest temple",
    geography: "A coastal-to-hill district where the Eastern Ghats' Seshachalam range meets the Bay of Bengal near Sriharikota.",
    history: "Tirumala's Venkateswara Temple has drawn continuous pilgrimage and royal patronage for well over a thousand years.",
    festivals: "The nine-day Brahmotsavam at Tirumala is one of the largest temple festivals in the world.",
    cuisine: "The temple's famous laddu prasadam, alongside classic South Indian pilgrim-town vegetarian fare.",
    personalities: "Composer-saint Annamacharya dedicated thousands of songs to the district's presiding deity, Lord Venkateswara.",
    industries: "Pilgrimage tourism at enormous scale, alongside India's Satish Dhawan Space Centre at Sriharikota.",
    places: [
      { name: "Tirumala Venkateswara Temple", type: "Temple", desc: "One of the world's most-visited pilgrimage sites, atop the Tirumala hills." },
      { name: "Chandragiri Fort", type: "History", desc: "A former Vijayanagara-era capital fort near Tirupati." },
      { name: "Sriharikota", type: "Space Centre", desc: "ISRO's principal satellite launch centre, on a coastal barrier island." }
    ],
    transport: "Tirupati Airport, a major rail junction, and NH71/NH716 all converge here."
  }
];
