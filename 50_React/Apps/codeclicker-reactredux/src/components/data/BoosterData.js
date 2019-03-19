import {workerTypes} from "./WorkerData";

export const boosterTypes = [
    "Discount Cola",
    "Brand Cola",
    "Decaf Coffee",
    "Black Coffee",
    "Single Espresso",
    "Triple Espresso",
    "Caffeine Pills",
    "Adderall Pills",
    "Liquid Cooling",
    "Quantum CPUs"
];

export const boosterData = [
    {boosterType: boosterTypes[0], workerType: workerTypes[0], lid : 1, price: 100, factor : 2},
    {boosterType: boosterTypes[1], workerType: workerTypes[0], lid : 2, price: 2000, factor : 2.5},
    {boosterType: boosterTypes[2], workerType: workerTypes[1], lid : 1, price: 400, factor : 2},
    {boosterType: boosterTypes[3], workerType: workerTypes[1], lid : 2, price: 8000, factor : 2.5},
    {boosterType: boosterTypes[4], workerType: workerTypes[2], lid : 1, price: 1500, factor : 2.5},
    {boosterType: boosterTypes[5], workerType: workerTypes[2], lid : 2, price: 30000, factor : 4},
    {boosterType: boosterTypes[6], workerType: workerTypes[3], lid : 1, price: 6000, factor : 3},
    {boosterType: boosterTypes[7], workerType: workerTypes[3], lid : 2, price: 150000, factor : 5},
    {boosterType: boosterTypes[8], workerType: workerTypes[4], lid : 1, price: 25000, factor : 4},
    {boosterType: boosterTypes[9], workerType: workerTypes[4], lid : 2, price: 800000, factor : 5}
];

