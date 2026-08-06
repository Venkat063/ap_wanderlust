/* ============================================================
   STATE-LEVEL CONTENT — Andhra Pradesh overview sections
   ============================================================ */

const STATE = {
  name: "Andhra Pradesh",
  telugu: "ఆంధ్రప్రదేశ్",
  motto: "Kondalu · Kadalu · Devalayalu — Hills, Sea, Temples",
  intro: "Stretching along India's second-longest coastline, Andhra Pradesh runs from the Eastern Ghats' coffee-covered hills down through the Godavari–Krishna delta to the dry granite plains of Rayalaseema — 26 districts across three distinct cultural regions.",

  history: {
    summary: "Andhra Pradesh's story runs from the Satavahana and Ikshvaku dynasties, who made Amaravati and Nagarjunakonda centres of early Buddhist learning, through the Vijayanagara and Golconda periods, to the linguistic-reorganisation movement that made it India's first state formed on linguistic lines in 1953 (as Andhra State), later merging with Telangana in 1956 and separating again in 2014.",
    points: [
      "Amaravati and Nagarjunakonda were major hubs of Buddhist scholarship over 2,000 years ago.",
      "The Vijayanagara Empire (14th–17th century) left temple architecture across Rayalaseema, notably at Lepakshi.",
      "Potti Sriramulu's 1952 fast unto death led directly to the creation of Andhra State in 1953.",
      "The state bifurcated in 2014, with Amaravati later designated as Andhra Pradesh's capital."
    ]
  },

  geography: {
    summary: "Three regions define the state: Uttarandhra's forested Eastern Ghats and northern coast, Kostaandhra's fertile Godavari–Krishna delta, and Rayalaseema's dry granite plateau to the south-west.",
    points: [
      "India's second-longest coastline (about 974 km) runs the length of the state.",
      "The Godavari and Krishna rivers form two of India's richest deltas, earning the coast the title 'rice bowl of India'.",
      "The Eastern Ghats rise sharply inland, hosting hill stations like Araku and Horsley Hills.",
      "Rayalaseema's Nallamala hills shelter one of India's largest tiger reserves."
    ]
  },

  festivals: [
    { name: "Ugadi", desc: "The Telugu New Year, marked by the bittersweet ugadi pachadi eaten to symbolise life's mixed flavours." },
    { name: "Sankranti", desc: "A three-day harvest festival with kite-flying, bullock-cart races, and rangoli-decorated courtyards." },
    { name: "Tirumala Brahmotsavam", desc: "A nine-day festival at the Venkateswara Temple, among the largest temple gatherings in the world." },
    { name: "Godavari & Krishna Pushkaram", desc: "A once-every-12-years river festival where millions bathe along the ghats of each sacred river." },
    { name: "Dasara / Vijayadashami", desc: "Ten days of Durga worship, celebrated with particular scale at Vijayawada's Kanaka Durga temple." }
  ],

  cuisine: [
    { name: "Gongura Pachadi", desc: "A tangy chutney made from sorrel leaves, one of Andhra's signature flavours." },
    { name: "Pesarattu", desc: "A crisp green-gram crepe from the Godavari belt, often served with upma." },
    { name: "Pulihora", desc: "Tamarind rice, a festival and temple-prasadam staple across the state." },
    { name: "Royyala Iguru", desc: "A thick, spiced prawn curry typical of the coastal delta districts." },
    { name: "Bobbatlu / Pulusu Pesarapappu", desc: "Sweet lentil-stuffed flatbread, a festive-meal favourite across Telugu households." }
  ],

  personalities: [
    { name: "Alluri Sitarama Raju", field: "Freedom Movement", desc: "Led the 1922 Rampa Rebellion against colonial forest law from the Eastern Ghats agency." },
    { name: "Potti Sriramulu", field: "Freedom Movement", desc: "His 1952 fast unto death led to the creation of Andhra State on linguistic lines." },
    { name: "Annamacharya", field: "Music & Devotion", desc: "15th-century saint-composer who wrote over 30,000 devotional songs to Lord Venkateswara." },
    { name: "N. T. Rama Rao", field: "Cinema & Politics", desc: "Iconic Telugu film actor who became Andhra Pradesh's chief minister and founded the TDP." },
    { name: "Kandukuri Veeresalingam", field: "Social Reform", desc: "Pioneering 19th-century reformer and writer who championed widow remarriage and women's education." },
    { name: "Gidugu Ramamurthy", field: "Linguistics", desc: "Championed the shift to spoken, everyday Telugu ('Vyavaharika Bhasha') in modern writing." }
  ],

  industries: [
    { name: "Agriculture & Aquaculture", desc: "The Godavari–Krishna delta is one of India's great rice bowls; SPSR Nellore leads national shrimp exports." },
    { name: "Ports & Shipping", desc: "Visakhapatnam, Kakinada and Machilipatnam anchor one of India's busiest stretches of working coastline." },
    { name: "Handloom & Craft", desc: "Kalamkari (Machilipatnam/Pedana), Uppada jamdani, and Mangalagiri weaves are nationally recognised textile crafts." },
    { name: "Pilgrimage Tourism", desc: "Tirumala alone draws tens of thousands of pilgrims daily, anchoring one of the world's largest temple economies." },
    { name: "Steel, Energy & Space", desc: "Visakhapatnam's steel plant, coastal power projects, and ISRO's Sriharikota launch centre drive heavy industry." }
  ],

  temples: [
    { name: "Tirumala Venkateswara Temple", district: "sribalaji", desc: "One of the world's most-visited and wealthiest pilgrimage sites." },
    { name: "Srisailam Mallikarjuna", district: "nandyal", desc: "One of India's 12 Jyotirlingas, set deep in the Nallamala forest." },
    { name: "Simhachalam", district: "visakhapatnam", desc: "A hilltop Varaha Narasimha shrine blending Odishan and Dravidian styles." },
    { name: "Kanaka Durga Temple", district: "ntr", desc: "Vijayawada's hilltop goddess shrine on the Krishna river." },
    { name: "Draksharamam", district: "konaseema", desc: "One of the five sacred Pancharama Kshetras of Andhra." },
    { name: "Arasavalli Sun Temple", district: "srikakulam", desc: "A rare temple aligned so sunlight falls on the deity at equinox." }
  ],

  beaches: [
    { name: "RK Beach", district: "visakhapatnam", desc: "Visakhapatnam's landmark promenade beach with a submarine museum." },
    { name: "Bapatla Beach", district: "bapatla", desc: "A quiet, uncrowded stretch of coast ideal for sunrise walks." },
    { name: "Kakinada Beach", district: "kakinada", desc: "A working-town beach sheltered by the Hope Island sand spit." },
    { name: "Mypadu Beach", district: "nellore", desc: "A calm, casuarina-lined beach near Nellore town." }
  ],

  waterfalls: [
    { name: "Katiki Waterfalls", district: "asr", desc: "A seasonal cascade near Borra Caves in the Araku hills." }
  ],

  wildlife: [
    { name: "Nallamala Tiger Reserve", district: "nandyal", desc: "Part of the Nagarjunsagar–Srisailam Tiger Reserve, among India's largest." },
    { name: "Kolleru Lake", district: "eluru", desc: "A Ramsar wetland and major migratory bird habitat." },
    { name: "Pulicat Lake", district: "nellore", desc: "India's second-largest brackish lagoon, a flamingo wintering ground." },
    { name: "Coringa Wildlife Sanctuary", district: "kakinada", desc: "A mangrove sanctuary in the Godavari delta, second-largest mangrove cover in India." }
  ],

  transport: {
    summary: "Andhra Pradesh is threaded by the Chennai–Howrah trunk rail line and coastal NH16, with international airports at Visakhapatnam and Tirupati and a domestic airport at Puttaparthi.",
    points: [
      "NH16 runs the length of the coast, linking almost every coastal district.",
      "Visakhapatnam is the state's largest port and a major naval base.",
      "Tirupati and Visakhapatnam airports handle the bulk of the state's air traffic.",
      "The Araku toy train, crossing 58 tunnels through the Eastern Ghats, is a heritage rail journey in its own right."
    ]
  }
};
