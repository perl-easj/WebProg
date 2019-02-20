// forEach callback
var numbers = [ 12, 45, 8, 3, 21, 88, 71 ];

console.log(numbers);

numbers.forEach((item, index, array) => console.log(index + " -> " + item));

numbers.forEach((item, index, array) => array[index] = item*2);
console.log(numbers);


var employees = [
    {name: "Ib", salary: 45000},
    {name: "Bo", salary: 35000},
    {name: "Per", salary: 50000}
]

var increaseSalary = function(employees, amount){
    employees.forEach(employee => employee.salary+=amount);
}

increaseSalary(employees, 1000);
console.log(employees);


let names = ['HenriK', 'JAMshid', 'AndERS', 'EBBe', 'pER', 'MicHAel', 'PETEr'];

names.forEach((name, index, array) => {
    if (name.toLowerCase() === 'henrik' || name.toLowerCase() === 'per') name = name.toUpperCase(); 
    else name = name.toLowerCase();
    array[index]=name;
})
console.log(names);


// map examples

numbers = [ 12, 45, 8, 3, 21, 88, 71 ];
const numbersMult7 = numbers.map(x => x * 7);
console.log(numbersMult7);

numbers = [ 12, 45, 8, 3, 21, 88, 71 ];
var roots = numbers.map(Math.sqrt);
console.log(roots);


let cars = [
    {brand: 'VW', model: 'Passat', fuel: 'diesel', owner_tax: 5550 },
    {brand: 'VW', model: 'Passat', fuel: 'gasoline', owner_tax: 460},
    {brand: 'VW', model: 'Passat', fuel: 'hybrid', owner_tax: 150},
    {brand: 'BMW', model: '320i', fuel: 'diesel', owner_tax: 4280},
    {brand: 'BMW', model: '320i', fuel: 'gasoline', owner_tax: 430},
    {brand: 'BMW', model: '320i', fuel: 'hybrid', owner_tax: 210},
    {brand: 'Tesla', model: 'S', fuel: 'electric', owner_tax: 0 }
]

var carModels = cars.map(car => car.model);
console.log(carModels);



// filter examples

names = ['Henrik', 'Per', 'Anders', 'Peter', 'Poul', 'Ebbe', 'Michael'];
var longNames = names.filter(name => name.length > 5);
console.log(longNames); // expected output: Array ["Henrik", "Anders", "Michael"]

cars = [
    {brand: 'VW', model: 'Passat', fuel: 'diesel', owner_tax: 5550 },
    {brand: 'VW', model: 'Passat', fuel: 'gasoline', owner_tax: 460},
    {brand: 'VW', model: 'Passat', fuel: 'hybrid', owner_tax: 150},
    {brand: 'BMW', model: '320i', fuel: 'diesel', owner_tax: 4280},
    {brand: 'BMW', model: '320i', fuel: 'gasoline', owner_tax: 430},
    {brand: 'BMW', model: '320i', fuel: 'hybrid', owner_tax: 210},
    {brand: 'Tesla', model: 'S', fuel: 'electric', owner_tax: 0 }
]

let dieselCars = cars.filter(car => car.fuel === 'diesel');
console.log(dieselCars);

let hybridCars = cars.filter(car => car.fuel === 'hybrid' && car.owner_tax < 200);
console.log(hybridCars);

function fuelCriterium(car, fuel){return car.fuel === fuel;};
let gasolineCars = cars.filter(car => fuelCriterium(car, "gasoline"));
console.log(gasolineCars);



// find, every and some examples
let gasolineCarLowTax = cars.find(car => car.fuel === 'gasoline' && car.owner_tax < 450);
console.log(gasolineCarLowTax);

var resEvery = cars.every(car => car.owner_tax > 0);
console.log(resEvery);

var resSome = cars.some(car => car.owner_tax < 200);
console.log(resSome);



// reduce examples
numbers = [ 12, 45, 8, 3, 21, 88, 71 ];
var resSumA = numbers.reduce(function(sum, number) {
    sum += number; 
    return sum
}, 0);
console.log(resSumA);

var resSumB = numbers.reduce((sum, number) => sum += number , 0); 
console.log(resSumB);


var trips = [{distance : 48}, {distance : 12}, {distance : 6}];
var totalDistance = trips.reduce((sum,trip) => sum+=trip.distance, 0);
console.log(totalDistance);


var desk = [
  {type: 'sitting'},
  {type: 'standing'},
  {type: 'sitting'},
  {type: 'sitting'},
  {type: 'standing'}
];
var deskTypes = desk.reduce((acc, desk) => {
  if (desk.type==='sitting') acc.sitting++;
  if (desk.type==='standing') acc.standing++;
  return acc;
}, {sitting : 0, standing : 0});
console.log(deskTypes);


numbers = [1, 1, 2, 3, 4, 4];
function unique(array) {
  return array.reduce((acc, item) =>{
    if(!acc.find(priv => priv===item))
      acc.push(item);
    return acc;
  }, []);
}
console.log(unique(numbers));

