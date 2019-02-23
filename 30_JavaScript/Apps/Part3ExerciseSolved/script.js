// #1
// The maxTemps array contains maximal temperature measurements (in Celsius) for one week.
// Use forEach to change the values to the Fahrenheit scale instead
// Formula: Tf = 32 + 1.8*Tc
//
var maxTemps = [12, 16, 9, 11, 14, 15, 17];
trueLog(maxTemps);
// Add your code here
trueLog(maxTemps);



// This array of "loot objects" is used in several exercises below.
var loot = [
    { type: "gun", name: "The Decider", value: 45 },
    { type: "sword", name: "Stinger", value: 30 },
    { type: "gun", name: "Bean Shooter", value: 10 },
    { type: "gun", name: "Skull Seeker", value: 35 },
    { type: "mace", name: "Heavy Wood Club", value: 20 },
    { type: "sword", name: "Avenger", value: 70 },
    { type: "mace", name: "Iron-clad Crusher", value: 55 }
];



// #2
// Use map to create an array which only contains the name of each item in loot
//
var lootNames = {};
// Add your code here
lootNames = loot.map(item => item.name);
trueLog(lootNames);



// #3
// Use map to create an array which contains the name and value for each item in loot.
var lootNamesAndValues = {};
// Add your code here
lootNamesAndValues = loot.map(item => { return {name: item.name, item: item.value}});
trueLog(lootNamesAndValues);



// #4
// Use filter to create an array which only contains loot items of type 'gun'
//
var lootGuns = {};
// Add your code here
lootGuns = loot.filter(item => item.type === 'gun');
trueLog(lootGuns);



// #5
// Use filter to create an array which only contains loot items for which
//   1) the value is more than 30
//   2) the name contains the letter 's' or 'S'
var lootStrange = {};
// Add your code here
lootStrange = loot.filter(item => item.value > 30 && item.name.toLowerCase().includes('s'));
trueLog(lootStrange);



// #6
// Use reduce to calculate the total value of the loot
var lootTotalValue = 0;
// Add your code here
lootTotalValue = loot.reduce((total, lootItem) => total += lootItem.value, 0);
trueLog(lootTotalValue);



// #7
// Use reduce to calculate an object with one property for each loot type.
// The value of each property should then be the number of loot items for this type. 
// A result could thus look like : { gunCount: 3, maceCount: 2, swordCount: 2 }
var lootTypeCounts = {};
// Add your code here
lootTypeCounts = loot.reduce((counts, lootItem) =>{
    if (lootItem.type === 'gun') counts.gunCount++;
    if (lootItem.type === 'mace') counts.maceCount++;
    if (lootItem.type === 'sword') counts.swordCount++;
    return counts;
}, { gunCount: 0, maceCount: 0, swordCount: 0 });
trueLog(lootTypeCounts);



// NB: This function fixes a problem with using console.log with newer browsers.
// See: https://developer.mozilla.org/en-US/docs/Web/API/Console/log
function trueLog(obj) {
    console.log(JSON.parse(JSON.stringify(obj))); 
}