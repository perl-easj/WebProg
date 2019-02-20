
var a = 12;
var b = 20;

function f1(val) {
    var b = 14;
    a = a + 6;
    b = b + 2;
    var c = a * b + val;
    return c;
}

var res1 = f1(a);
var res2 = f1(b);
var res3 = f1(f1(a - b));

console.log("res1 = " + res1);
console.log("res2 = " + res2);
console.log("res3 = " + res3);