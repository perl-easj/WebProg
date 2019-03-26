export const workerTypes = [
    "Novice Coders",
    "Trained Coders",
    "Geek Coders",
    "Guru Coders",
    "AI Coders"
];

let id = 0;
export const workerData = [
    {workerType: workerTypes[id++], price: 10, locs : 0.2},
    {workerType: workerTypes[id++], price: 50, locs : 0.5},
    {workerType: workerTypes[id++], price: 200, locs : 2.0},
    {workerType: workerTypes[id++], price: 1000, locs : 5.0},
    {workerType: workerTypes[id++], price: 5000, locs : 20.0}
];
