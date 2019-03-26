export const boosterTypes = [
    "Cold Water",
    "Discount Cola",
    "Plain Cola",
    "Brand Cola",

    "Lipton Tea",
    "Latte Coffee",
    "Plain Coffee",
    "Black Coffee",

    "Grape Juice",
    "Weak Espresso",
    "Plain Espresso",
    "Double Espresso",

    "Chewing Gum",
    "Caffeine Pills",
    "Adderall Pills",
    "Extacy Pills",

    "Extra RAM",
    "Liquid Cooling",
    "DeepMind OS",
    "Quantum CPUs"
];

let id = 0;
export const boosterData = [
    {boosterType: boosterTypes[id++], wid: 0, price: 100, factor : 2.5},
    {boosterType: boosterTypes[id++], wid: 0, price: 2000, factor : 4},
    {boosterType: boosterTypes[id++], wid: 0, price: 50000, factor : 5},
    {boosterType: boosterTypes[id++], wid: 0, price: 2000000, factor : 10},

    {boosterType: boosterTypes[id++], wid: 1, price: 400, factor : 4},
    {boosterType: boosterTypes[id++], wid: 1, price: 8000, factor : 4},
    {boosterType: boosterTypes[id++], wid: 1, price: 200000, factor : 5},
    {boosterType: boosterTypes[id++], wid: 1, price: 8000000, factor : 10},

    {boosterType: boosterTypes[id++], wid: 2, price: 1500, factor : 4},
    {boosterType: boosterTypes[id++], wid: 2, price: 30000, factor : 5},
    {boosterType: boosterTypes[id++], wid: 2, price: 700000, factor : 5},
    {boosterType: boosterTypes[id++], wid: 2, price: 30000000, factor : 10},

    {boosterType: boosterTypes[id++], wid: 3, price: 6000, factor : 4},
    {boosterType: boosterTypes[id++], wid: 3, price: 150000, factor : 5},
    {boosterType: boosterTypes[id++], wid: 3, price: 4000000, factor : 7.5},
    {boosterType: boosterTypes[id++], wid: 3, price: 150000000, factor : 10},

    {boosterType: boosterTypes[id++], wid: 4, price: 25000, factor : 5},
    {boosterType: boosterTypes[id++], wid: 4, price: 800000, factor : 5},
    {boosterType: boosterTypes[id++], wid: 4, price: 20000000, factor : 8},
    {boosterType: boosterTypes[id++], wid: 4, price: 800000000, factor : 10}
];
