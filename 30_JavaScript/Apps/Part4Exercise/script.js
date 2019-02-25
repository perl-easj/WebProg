// #1
// What is the expected output of the three funcArr[...] invocations?
// Many will probably expect 0,1 and 2, but that doesn't seem to be the case...
// Why did this happen?
// How can you fix the code, such that the invocations will produce 0, 1 and 2?
// (and, of course still use variables :-))
//
function buildFunctions () {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push( () => { console.log(i); })
    }
    return arr;
}

var funcArr = buildFunctions();
funcArr[0]();
funcArr[1]();
funcArr[2]();



// #2
// What is the expected output of the three greet__Func[...] invocations?
// Why does this happen? (hint: closures)
// How is this different from the scenario in #1?
//
function buildGreetingFunc(language) {
    return (first, last) => {
        if (language === 'dk') { console.log("Hej " + first + " " + last); }
        if (language === 'en') { console.log("Hello " + first + " " + last); }
        if (language === 'fr') { console.log("Bonjour " + first + " " + last); }
    }
}

var greetDkFunc = buildGreetingFunc("dk");
var greetEnFunc = buildGreetingFunc("en");
var greetFrFunc = buildGreetingFunc("fr");

greetDkFunc("Arne", "Bendtsen")
greetDkFunc("Carol", "Dalton");
greetFrFunc("Eric", "Favreaux");



// #3
// Create a "function factory" function, which will return an "adder" function.
// The "adder" function must take a single argument, and add the argument to a
// fixed value, which was decided when the "adder" function was built.
//
// Example: the factory function adderFactoryFunc takes a single argument, like this:
//    var add5Func = adderFactoryFunc(5);
//
// We can now invoke the returned function, like this:
//    var result = add5Func(10);
//
// After this invocation, result should be 15.
//
// Test your code with these cases:
//    var add5Func = adderFactoryFunc(5);
//    var add42Func = adderFactoryFunc(42);
//    var addGreetingFunc = adderFactoryFunc("Hello ");
//    console.log(add5Func(2));  // -> 7
//    console.log(add42Func(24)); // -> 66
//    console.log(addGreetingFunc("World")); // -> "Hello World"
// 

// TODO: write function adderFactoryFunc

var add5Func = adderFactoryFunc(5);
var add42Func = adderFactoryFunc(42);
var addGreetingFunc = adderFactoryFunc("Hello ");
console.log(add5Func(2));  // -> 7
console.log(add42Func(24)); // -> 66
console.log(addGreetingFunc("World")); // -> "Hello World"



// #4
// Create a "function factory" function, which will return an "apply" function.
// The "apply" function must take a single argument, which is an array of functions.
// These functions must all take a single argument, and return a value.
// Some example are given below: 
//    doubleUp, square and notOver50 functions for numbers
//    prepend..., body and append... functions for text
//
// Example: the factory function applyFactoryFunc takes a single argument, like this:
//    var applyNumberFuncs = applyFactoryFunc(numberFuncs);
//
// We can now invoke the returned function, like this:
//    var result = applyNumberFuncs(1);
//
// After this invocation, result should be 8.
//
// Test your code with these cases:
//    var apply1Result = applyNumberFuncs(1); // -> 8
//    var apply3Result = applyNumberFuncs(3); // -> 72
//    var apply6Result = applyNumberFuncs(6); // -> 100
//    var applyTextResult = applyTextFuncs("It's been a while..."); // Full letter text :-)
//
// BONUS QUESTION: The text methods seem to be an attempt at creating a mail generator.
// However, the current version is not very flexible, since the methods we're using are
// hard-coded to e.g. a fixed name and a fixed title (Mr.).
// See if you can generalise this code somehow. Hint: maybe we could add in some function
// factories for generating specific titles, greetings, etc..?
// 
function doubleUp(param) { return param * 2; }
function square(param) { return param * param; }
function notOver50(param) { return param <= 50 ? param : 50; }

function prependGreeting(param) { return "Dear " + param; }
function prependTitleMale(param) { return "Mr. " + param; }
function prependTo(param) { return "Allan Bolton" + param; }
function body(param) { return "\n\n"+ param +"\n"; }
function appendEnding(param) { return param + "\n\nBest regards,"; }
function appendSignature(param) { return param + "\nCarol Davies"; }

var numberFuncs = [];
numberFuncs.push(doubleUp);
numberFuncs.push(square);
numberFuncs.push(notOver50);
numberFuncs.push(doubleUp);

var textFuncs = [];
textFuncs.push(body);
textFuncs.push(prependTo);
textFuncs.push(prependTitleMale);
textFuncs.push(prependGreeting);
textFuncs.push(appendEnding);
textFuncs.push(appendSignature);

// TODO: write function applyFactoryFunc

var applyNumberFuncs = applyFactoryFunc(numberFuncs);
console.log(applyNumberFuncs(1));
console.log(applyNumberFuncs(3));
console.log(applyNumberFuncs(6));

var applyTextFuncs = applyFactoryFunc(textFuncs);
console.log("\n\n" + applyTextFuncs("It's been a while..."));
