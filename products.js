
const products = [
    {
        "id": 1,
        "name": "Fakturační šablony – varianta 1",
        "cat": "Finance",
        "price": 179,
        "icon": "🧾",
        "desc": "Obrázkové ukázky: Fakturační šablony – varianta 1.",
        "format": "NÁHLED",
        "images": ["images/p001_01.jpeg", "images/p001_02.png"]
    },
    {
        "id": 2,
        "name": "Fakturační šablony – varianta 2",
        "cat": "Finance",
        "price": 179,
        "icon": "🧾",
        "desc": "Obrázkové ukázky: Fakturační šablony – varianta 2.",
        "format": "NÁHLED",
        "images": ["images/p002_01.png", "images/p002_02.png"]
    },
    {
        "id": 3,
        "name": "Fakturační šablony – varianta 3",
        "cat": "Finance",
        "price": 179,
        "icon": "🧾",
        "desc": "Obrázkové ukázky: Fakturační šablony – varianta 3.",
        "format": "NÁHLED",
        "images": ["images/p003_01.jpeg", "images/p003_02.png"]
    },
    {
        "id": 4,
        "name": "Fakturační šablony – varianta 4",
        "cat": "Finance",
        "price": 179,
        "icon": "🧾",
        "desc": "Obrázkové ukázky: Fakturační šablony – varianta 4.",
        "format": "NÁHLED",
        "images": ["images/p004_01.png", "images/p004_02.png"]
    },
    {
        "id": 5,
        "name": "Fakturační šablony – varianta 5",
        "cat": "Finance",
        "price": 179,
        "icon": "🧾",
        "desc": "Obrázkové ukázky: Fakturační šablony – varianta 5.",
        "format": "NÁHLED",
        "images": ["images/p005_01.png", "images/p005_02.png"]
    },
    {
        "id": 6,
        "name": "Finanční plánovače – varianta 1",
        "cat": "Finance",
        "price": 249,
        "icon": "💰",
        "desc": "Obrázkové ukázky: Finanční plánovače – varianta 1.",
        "format": "NÁHLED",
        "images": ["images/p006_01.png", "images/p006_02.png"]
    },
    {
        "id": 7,
        "name": "Finanční plánovače – varianta 2",
        "cat": "Finance",
        "price": 249,
        "icon": "💰",
        "desc": "Obrázkové ukázky: Finanční plánovače – varianta 2.",
        "format": "NÁHLED",
        "images": ["images/p007_01.png", "images/p007_02.jpeg"]
    },
    {
        "id": 8,
        "name": "Finanční plánovače – varianta 3",
        "cat": "Finance",
        "price": 249,
        "icon": "💰",
        "desc": "Obrázkové ukázky: Finanční plánovače – varianta 3.",
        "format": "NÁHLED",
        "images": ["images/p008_01.png", "images/p008_02.jpeg"]
    },
    {
        "id": 9,
        "name": "Finanční plánovače – varianta 4",
        "cat": "Finance",
        "price": 249,
        "icon": "💰",
        "desc": "Obrázkové ukázky: Finanční plánovače – varianta 4.",
        "format": "NÁHLED",
        "images": ["images/p009_01.jpeg", "images/p009_02.png"]
    },
    {
        "id": 10,
        "name": "Finanční plánovače – varianta 5",
        "cat": "Finance",
        "price": 249,
        "icon": "💰",
        "desc": "Obrázkové ukázky: Finanční plánovače – varianta 5.",
        "format": "NÁHLED",
        "images": ["images/p010_01.png", "images/p010_02.png"]
    },
    {
        "id": 11,
        "name": "Kalkulace nákladů a cen – varianta 1",
        "cat": "Finance",
        "price": 189,
        "icon": "🧮",
        "desc": "Obrázkové ukázky: Kalkulace nákladů a cen – varianta 1.",
        "format": "NÁHLED",
        "images": ["images/p011_01.jpeg", "images/p011_02.png"]
    },
    {
        "id": 12,
        "name": "Kalkulace nákladů a cen – varianta 2",
        "cat": "Finance",
        "price": 189,
        "icon": "🧮",
        "desc": "Obrázkové ukázky: Kalkulace nákladů a cen – varianta 2.",
        "format": "NÁHLED",
        "images": ["images/p012_01.png", "images/p012_02.png"]
    },
    {
        "id": 13,
        "name": "Kalkulace nákladů a cen – varianta 3",
        "cat": "Finance",
        "price": 189,
        "icon": "🧮",
        "desc": "Obrázkové ukázky: Kalkulace nákladů a cen – varianta 3.",
        "format": "NÁHLED",
        "images": ["images/p013_01.png", "images/p013_02.png"]
    },
    {
        "id": 14,
        "name": "Kalkulace nákladů a cen – varianta 4",
        "cat": "Finance",
        "price": 189,
        "icon": "🧮",
        "desc": "Obrázkové ukázky: Kalkulace nákladů a cen – varianta 4.",
        "format": "NÁHLED",
        "images": ["images/p014_01.jpeg", "images/p014_02.png"]
    },
    {
        "id": 15,
        "name": "Kalkulace nákladů a cen – varianta 5",
        "cat": "Finance",
        "price": 189,
        "icon": "🧮",
        "desc": "Obrázkové ukázky: Kalkulace nákladů a cen – varianta 5.",
        "format": "NÁHLED",
        "images": ["images/p015_01.png", "images/p015_02.jpeg"]
    },
    {
        "id": 16,
        "name": "Marketingové plány – varianta 1",
        "cat": "Marketing",
        "price": 249,
        "icon": "📣",
        "desc": "Obrázkové ukázky: Marketingové plány – varianta 1.",
        "format": "NÁHLED",
        "images": ["images/p016_01.webp", "images/p016_02.png"]
    },
    {
        "id": 17,
        "name": "Marketingové plány – varianta 2",
        "cat": "Marketing",
        "price": 249,
        "icon": "📣",
        "desc": "Obrázkové ukázky: Marketingové plány – varianta 2.",
        "format": "NÁHLED",
        "images": ["images/p017_01.webp", "images/p017_02.png"]
    },
    {
        "id": 18,
        "name": "Marketingové plány – varianta 3",
        "cat": "Marketing",
        "price": 249,
        "icon": "📣",
        "desc": "Obrázkové ukázky: Marketingové plány – varianta 3.",
        "format": "NÁHLED",
        "images": ["images/p018_01.webp", "images/p018_02.png"]
    },
    {
        "id": 19,
        "name": "Marketingové plány – varianta 4",
        "cat": "Marketing",
        "price": 249,
        "icon": "📣",
        "desc": "Obrázkové ukázky: Marketingové plány – varianta 4.",
        "format": "NÁHLED",
        "images": ["images/p019_01.webp", "images/p019_02.png"]
    },
    {
        "id": 20,
        "name": "Marketingové plány – varianta 5",
        "cat": "Marketing",
        "price": 249,
        "icon": "📣",
        "desc": "Obrázkové ukázky: Marketingové plány – varianta 5.",
        "format": "NÁHLED",
        "images": ["images/p020_01.webp", "images/p020_02.png"]
    },
    {
        "id": 21,
        "name": "Projektové a časové plánovače – varianta 1",
        "cat": "Podnikatelské plánování",
        "price": 219,
        "icon": "🗂️",
        "desc": "Obrázkové ukázky: Projektové a časové plánovače – varianta 1.",
        "format": "NÁHLED",
        "images": ["images/p021_01.png", "images/p021_02.png"]
    },
    {
        "id": 22,
        "name": "Projektové a časové plánovače – varianta 2",
        "cat": "Podnikatelské plánování",
        "price": 219,
        "icon": "🗂️",
        "desc": "Obrázkové ukázky: Projektové a časové plánovače – varianta 2.",
        "format": "NÁHLED",
        "images": ["images/p022_01.jpg", "images/p022_02.png"]
    },
    {
        "id": 23,
        "name": "Projektové a časové plánovače – varianta 3",
        "cat": "Podnikatelské plánování",
        "price": 219,
        "icon": "🗂️",
        "desc": "Obrázkové ukázky: Projektové a časové plánovače – varianta 3.",
        "format": "NÁHLED",
        "images": ["images/p023_01.png", "images/p023_02.png"]
    },
    {
        "id": 24,
        "name": "Projektové a časové plánovače – varianta 4",
        "cat": "Podnikatelské plánování",
        "price": 219,
        "icon": "🗂️",
        "desc": "Obrázkové ukázky: Projektové a časové plánovače – varianta 4.",
        "format": "NÁHLED",
        "images": ["images/p024_01.jpg", "images/p024_02.png"]
    },
    {
        "id": 25,
        "name": "Projektové a časové plánovače – varianta 5",
        "cat": "Podnikatelské plánování",
        "price": 219,
        "icon": "🗂️",
        "desc": "Obrázkové ukázky: Projektové a časové plánovače – varianta 5.",
        "format": "NÁHLED",
        "images": ["images/p025_01.jpg", "images/p025_02.png"]
    },
    {
        "id": 26,
        "name": "SWOT analýza – varianta 1",
        "cat": "Podnikatelské plánování",
        "price": 129,
        "icon": "🎯",
        "desc": "Obrázkové ukázky: SWOT analýza – varianta 1.",
        "format": "NÁHLED",
        "images": ["images/p026_01.png", "images/p026_02.png"]
    },
    {
        "id": 27,
        "name": "SWOT analýza – varianta 2",
        "cat": "Podnikatelské plánování",
        "price": 129,
        "icon": "🎯",
        "desc": "Obrázkové ukázky: SWOT analýza – varianta 2.",
        "format": "NÁHLED",
        "images": ["images/p027_01.png", "images/p027_02.png"]
    },
    {
        "id": 28,
        "name": "SWOT analýza – varianta 3",
        "cat": "Podnikatelské plánování",
        "price": 129,
        "icon": "🎯",
        "desc": "Obrázkové ukázky: SWOT analýza – varianta 3.",
        "format": "NÁHLED",
        "images": ["images/p028_01.jpeg", "images/p028_02.png"]
    },
    {
        "id": 29,
        "name": "SWOT analýza – varianta 4",
        "cat": "Podnikatelské plánování",
        "price": 129,
        "icon": "🎯",
        "desc": "Obrázkové ukázky: SWOT analýza – varianta 4.",
        "format": "NÁHLED",
        "images": ["images/p029_01.png", "images/p029_02.png"]
    },
    {
        "id": 30,
        "name": "SWOT analýza – varianta 5",
        "cat": "Podnikatelské plánování",
        "price": 129,
        "icon": "🎯",
        "desc": "Obrázkové ukázky: SWOT analýza – varianta 5.",
        "format": "NÁHLED",
        "images": ["images/p030_01.png", "images/p030_02.png"]
    },
    {
        "id": 31,
        "name": "Podnikatelský rozpočet – varianta 1",
        "cat": "Finance",
        "price": 199,
        "icon": "📊",
        "desc": "Obrázkové ukázky: Podnikatelský rozpočet – varianta 1.",
        "format": "NÁHLED",
        "images": ["images/p031_01.webp", "images/p031_02.png"]
    },
    {
        "id": 32,
        "name": "Podnikatelský rozpočet – varianta 2",
        "cat": "Finance",
        "price": 199,
        "icon": "📊",
        "desc": "Obrázkové ukázky: Podnikatelský rozpočet – varianta 2.",
        "format": "NÁHLED",
        "images": ["images/p032_01.webp", "images/p032_02.png"]
    },
    {
        "id": 33,
        "name": "Podnikatelský rozpočet – varianta 3",
        "cat": "Finance",
        "price": 199,
        "icon": "📊",
        "desc": "Obrázkové ukázky: Podnikatelský rozpočet – varianta 3.",
        "format": "NÁHLED",
        "images": ["images/p033_01.png", "images/p033_02.png"]
    },
    {
        "id": 34,
        "name": "Podnikatelský rozpočet – varianta 4",
        "cat": "Finance",
        "price": 199,
        "icon": "📊",
        "desc": "Obrázkové ukázky: Podnikatelský rozpočet – varianta 4.",
        "format": "NÁHLED",
        "images": ["images/p034_01.webp", "images/p034_02.png"]
    },
    {
        "id": 35,
        "name": "Podnikatelský rozpočet – varianta 5",
        "cat": "Finance",
        "price": 199,
        "icon": "📊",
        "desc": "Obrázkové ukázky: Podnikatelský rozpočet – varianta 5.",
        "format": "NÁHLED",
        "images": ["images/p035_01.webp", "images/p035_02.png"]
    },
    {
        "id": 36,
        "name": "Cash flow tabulky – varianta 1",
        "cat": "Finance",
        "price": 229,
        "icon": "💸",
        "desc": "Obrázkové ukázky: Cash flow tabulky – varianta 1.",
        "format": "NÁHLED",
        "images": ["images/p036_01.png", "images/p036_02.png"]
    },
    {
        "id": 37,
        "name": "Cash flow tabulky – varianta 2",
        "cat": "Finance",
        "price": 229,
        "icon": "💸",
        "desc": "Obrázkové ukázky: Cash flow tabulky – varianta 2.",
        "format": "NÁHLED",
        "images": ["images/p037_01.jpeg", "images/p037_02.png"]
    },
    {
        "id": 38,
        "name": "Cash flow tabulky – varianta 3",
        "cat": "Finance",
        "price": 229,
        "icon": "💸",
        "desc": "Obrázkové ukázky: Cash flow tabulky – varianta 3.",
        "format": "NÁHLED",
        "images": ["images/p038_01.png", "images/p038_02.jpeg"]
    },
    {
        "id": 39,
        "name": "Cash flow tabulky – varianta 4",
        "cat": "Finance",
        "price": 229,
        "icon": "💸",
        "desc": "Obrázkové ukázky: Cash flow tabulky – varianta 4.",
        "format": "NÁHLED",
        "images": ["images/p039_01.png", "images/p039_02.jpeg"]
    },
    {
        "id": 40,
        "name": "Cash flow tabulky – varianta 5",
        "cat": "Finance",
        "price": 229,
        "icon": "💸",
        "desc": "Obrázkové ukázky: Cash flow tabulky – varianta 5.",
        "format": "NÁHLED",
        "images": ["images/p040_01.png", "images/p040_02.png"]
    },
    {
        "id": 41,
        "name": "Šablony business plánu – varianta 1",
        "cat": "Podnikatelské plánování",
        "price": 299,
        "icon": "📑",
        "desc": "Obrázkové ukázky: Šablony business plánu – varianta 1.",
        "format": "NÁHLED",
        "images": ["images/p041_01.png", "images/p041_02.png"]
    },
    {
        "id": 42,
        "name": "Šablony business plánu – varianta 2",
        "cat": "Podnikatelské plánování",
        "price": 299,
        "icon": "📑",
        "desc": "Obrázkové ukázky: Šablony business plánu – varianta 2.",
        "format": "NÁHLED",
        "images": ["images/p042_01.webp", "images/p042_02.png"]
    },
    {
        "id": 43,
        "name": "Šablony business plánu – varianta 3",
        "cat": "Podnikatelské plánování",
        "price": 299,
        "icon": "📑",
        "desc": "Obrázkové ukázky: Šablony business plánu – varianta 3.",
        "format": "NÁHLED",
        "images": ["images/p043_01.webp", "images/p043_02.png"]
    },
    {
        "id": 44,
        "name": "Šablony business plánu – varianta 4",
        "cat": "Podnikatelské plánování",
        "price": 299,
        "icon": "📑",
        "desc": "Obrázkové ukázky: Šablony business plánu – varianta 4.",
        "format": "NÁHLED",
        "images": ["images/p044_01.png", "images/p044_02.png"]
    },
    {
        "id": 45,
        "name": "Šablony business plánu – varianta 5",
        "cat": "Podnikatelské plánování",
        "price": 299,
        "icon": "📑",
        "desc": "Obrázkové ukázky: Šablony business plánu – varianta 5.",
        "format": "NÁHLED",
        "images": ["images/p045_01.webp", "images/p045_02.png"]
    },
    {
        "id": 46,
        "name": "Evidence příjmů a výdajů – varianta 1",
        "cat": "Finance",
        "price": 149,
        "icon": "📋",
        "desc": "Obrázkové ukázky: Evidence příjmů a výdajů – varianta 1.",
        "format": "NÁHLED",
        "images": ["images/p046_01.png", "images/p046_02.png"]
    },
    {
        "id": 47,
        "name": "Evidence příjmů a výdajů – varianta 2",
        "cat": "Finance",
        "price": 149,
        "icon": "📋",
        "desc": "Obrázkové ukázky: Evidence příjmů a výdajů – varianta 2.",
        "format": "NÁHLED",
        "images": ["images/p047_01.png", "images/p047_02.jpeg"]
    },
    {
        "id": 48,
        "name": "Evidence příjmů a výdajů – varianta 3",
        "cat": "Finance",
        "price": 149,
        "icon": "📋",
        "desc": "Obrázkové ukázky: Evidence příjmů a výdajů – varianta 3.",
        "format": "NÁHLED",
        "images": ["images/p048_01.png", "images/p048_02.jpeg"]
    },
    {
        "id": 49,
        "name": "Evidence příjmů a výdajů – varianta 4",
        "cat": "Finance",
        "price": 149,
        "icon": "📋",
        "desc": "Obrázkové ukázky: Evidence příjmů a výdajů – varianta 4.",
        "format": "NÁHLED",
        "images": ["images/p049_01.webp", "images/p049_02.png"]
    },
    {
        "id": 50,
        "name": "Evidence příjmů a výdajů – varianta 5",
        "cat": "Finance",
        "price": 149,
        "icon": "📋",
        "desc": "Obrázkové ukázky: Evidence příjmů a výdajů – varianta 5.",
        "format": "NÁHLED",
        "images": ["images/p050_01.png", "images/p050_02.jpeg"]
    },
    {
        "id": 51,
        "name": "Zvýhodněné balíčky šablon",
        "cat": "Podnikatelské plánování",
        "price": 399,
        "icon": "🎁",
        "desc": "Obrázkové ukázky: Zvýhodněné balíčky šablon.",
        "format": "NÁHLED",
        "images": [
            "images/p051_01.jpg",
            "images/p051_02.jpg",
            "images/p051_03.jpg",
            "images/p051_04.jpg",
            "images/p051_05.jpg"
        ]
    }
];


// Balíčky: každá objednávka odemyká tři jednotlivé soubory DOCX a souhrnný ZIP.
const bundles = [
    {id: 1001, name: 'START', cat: 'Zvýhodněné balíčky', price: 399, icon: '🚀', bundle: true,
     desc: 'Podnikatelský plán + SWOT + plán cílů',
     items: ['Podnikatelský plán', 'SWOT', 'Plán cílů'], images: [], documents: [{name: 'Podnikatelský plán', file: 'balicek-1001-podnikatelsky-plan.docx'}, {name: 'SWOT', file: 'balicek-1001-swot-analyza.docx'}, {name: 'Plán cílů', file: 'balicek-1001-plan-cilu.docx'}]},
    {id: 1002, name: 'Finance pod kontrolou', cat: 'Zvýhodněné balíčky', price: 499, icon: '💰', bundle: true,
     desc: 'Rozpočet + příjmy a výdaje + finanční plánovač',
     items: ['Rozpočet', 'Příjmy a výdaje', 'Finanční plánovač'], images: [], documents: [{name: 'Rozpočet', file: 'balicek-1002-rozpocet.docx'}, {name: 'Příjmy a výdaje', file: 'balicek-1002-prijmy-a-vydaje.docx'}, {name: 'Finanční plánovač', file: 'balicek-1002-financni-planovac.docx'}]},
    {id: 1003, name: 'Marketing START', cat: 'Zvýhodněné balíčky', price: 449, icon: '📣', bundle: true,
     desc: 'Marketingový plán + obsahový kalendář + plán kampaní',
     items: ['Marketingový plán', 'Obsahový kalendář', 'Plán kampaní'], images: [], documents: [{name: 'Marketingový plán', file: 'balicek-1003-marketingovy-plan.docx'}, {name: 'Obsahový kalendář', file: 'balicek-1003-obsahovy-kalendar.docx'}, {name: 'Plán kampaní', file: 'balicek-1003-plan-kampani.docx'}]}
];
const allProducts = [...products, ...bundles];
