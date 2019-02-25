function increaseBy(aVal, aInc) {
  return aVal + aInc;
}

function increaseByFuncFactoryV1() {
  return (aVal) => {
    return aVal + theInc;
  }
}

function increaseByFuncFactoryV2(aInc) {
  return (aVal) => {
    return aVal + aInc;
  }
}

function increaseByFuncFactoryV3() {
  var aInc = theInc;
  return (aVal) => {
    return aVal + aInc;
  }
}

var theInc = 35;

function closureTestInc(incFunc) {
  var aVal = 60;

  // Reset of global variable
  theInc = 35;

  // First test
  trueLogWithCompare(95, incFunc(aVal));

  // Update of global variable
  theInc = 80;

  // Second test (expecting the SAME result...)
  trueLogWithCompare(95, incFunc(aVal));
}

var incFuncV1 = increaseByFuncFactoryV1();
var incFuncV2 = increaseByFuncFactoryV2(theInc);
var incFuncV3 = increaseByFuncFactoryV3();


trueLog("Testing incFuncV1...");
closureTestInc(incFuncV1);

trueLog("Testing incFuncV2...");
closureTestInc(incFuncV2);

trueLog("Testing incFuncV3...");
closureTestInc(incFuncV3);




class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}

class Rectangle {
  constructor(tlx, tly, brx, bry) {
    this.topLeft = new Point(tlx, tly);
    this.botRight = new Point(brx, bry);
  }
}

function inside(aRect, aPoint) {
  return  aPoint.x >= aRect.topLeft.x &&
          aPoint.x <= aRect.botRight.x &&
          aPoint.y <= aRect.topLeft.y &&
          aPoint.y >= aRect.botRight.y;
}

function insideFuncFactoryV1() {
  return (aPoint) => {
    return inside(theRect, aPoint);
  }
}

function insideFuncFactoryV2(aRect) {
  return (aPoint) => {
    return inside(aRect, aPoint);
  }
}

function insideFuncFactoryV3() {
  let localRect = theRect;
  return (aPoint) => {
    return inside(localRect, aPoint);
  }
}

function insideFuncFactoryV4() {
  let localRect = new Rectangle(theRect.topLeft.x, theRect.topLeft.y, theRect.botRight.x, theRect.botRight.y);
  return (aPoint) => {
    return inside(localRect, aPoint);
  }
}

var theRect = new Rectangle(2, 10, 10, 2);

function closureTestInside(insideFunc) {
  var p_3_3 = new Point (3, 3);
  var p_12_12 = new Point (12, 12);

  // Reset of global variable
  theRect = new Rectangle(2, 10, 10, 2);

  // First test
  trueLogWithCompare(true, insideFunc( p_3_3));
  trueLogWithCompare(false , insideFunc(p_12_12));

  // Update of global variable
  // theRect = new Rectangle(20, 30, 30, 20);
  theRect.topLeft.x = 20;
  theRect.topLeft.y = 30;
  theRect.botRight.x = 30;
  theRect.botRight.y = 20;

  // Second test (expecting the SAME result...)
  trueLogWithCompare(true, insideFunc(p_3_3));
  trueLogWithCompare(false , insideFunc(p_12_12));
}

var insideFuncV1 = insideFuncFactoryV1();
var insideFuncV2 = insideFuncFactoryV2(theRect);
var insideFuncV3 = insideFuncFactoryV3();
var insideFuncV4 = insideFuncFactoryV4();

trueLog("Testing insideFuncV1...");
closureTestInside(insideFuncV1);

trueLog("Testing insideFuncV2...");
closureTestInside(insideFuncV2);

trueLog("Testing insideFuncV3...");
closureTestInside(insideFuncV3);

trueLog("Testing insideFuncV4...");
closureTestInside(insideFuncV4);




// NB: This function fixes a problem with using console.log with newer browsers.
// See: https://developer.mozilla.org/en-US/docs/Web/API/Console/log
function trueLog(obj) {
  console.log(JSON.parse(JSON.stringify(obj))); 
}

function trueLogWithComment(comment, obj) {
  console.log(comment + " " + JSON.parse(JSON.stringify(obj))); 
}

function trueLogWithCompare(expected, actual) {
  if (expected === actual) console.log("Expected " + expected + ", got " + actual + "...OK");
  if (expected !== actual) console.log("Expected " + expected + ", got " + actual + "...ERROR");
}

