
// Variable and function are
// 1) Defined in "global" Lex. Env.
// 2) Added to the global object (this)

var msgA = 'Hello World!';

function myFuncA() {
    console.log('Hello Moon');  
}



// Variable and function are
// 1) Defined in "global" Lex. Env.
// 2) Added to the global object (this)

var msgB = 'Hello World!';

function myFuncB() {
    // Variable is
    // 1) Defined in a non-global Lex. Env.
    // 2) not added to anything yet...
    var msgAinFuncB = "Hello Mars";
    console.log(msgAinFuncB);  
}



// Why is this possible...?
// I'm calling a function BEFORE it is defined...?
// Answer: Hoisting!

myFuncC(msgB);

function myFuncC(msg) {
    console.log(msg + " (from myFuncC)");  
}



// Will this cause an error, or will it run...?
// If it runs, what will it print...?

myFuncC(msgC);
var msgC = 'Hello World!';



// How many lexical environments?
// How many execution contexts are created?

function myFuncD() {
    var msgAinFuncD = "Hello All";
    console.log(msgAinFuncD);
}

function myFuncE() {
    var msgAinFuncE = "Goodbye All";
    myFuncD();
    console.log(msgAinFuncE);
}

var msgD = 'Hello Sun!';
myFuncE();



// Will myFuncF print "Hello Moon", "Hello Sun" or "undefined"?
// What happens if we remove the "var" from theMsg in myFuncG?

function myFuncF() {
    console.log(theMsg);
}

function myFuncG() {
    var theMsg = 'Hello Moon!';
    myFuncF();
}

var theMsg = 'Hello Sun!';
myFuncG();



