// promise = new Promise((resolve, reject)  => {
//    // reject();
//   setTimeout(() => { resolve(); }, 3000);
// });

// promise
//   .then(()=>console.log("I am done"))          //callback, done when resolved
//   .then(()=>console.log("I was also called"))  
//   .catch(() => console.log("uh oh!!"))


var f1URL = "https://ergast.com/api/f1/2018/drivers.json"

function processData(arr) {
  var ulElem = document.querySelector("#driverList");

  arr.forEach(elem => { 
    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.appendChild(document.createTextNode(elem.givenName + " " + elem.familyName + "  (" +  elem.nationality + ")"));
    ulElem.appendChild(li);
  });
};

function getF1DriversPromise(url, processFunc) {
  fetch(url)
  .then(res => { 
    console.log("Got data in getF1DriversPromise");
    res.json().then(data => {
        processFunc(data.MRData.DriverTable.Drivers); 
      }) 
  });
  console.log("Done getF1DriversPromise");
}

async function getF1DriversAwait(url, processFunc) {
  var response = await fetch(url);
  console.log("Got data in getF1DriversAwait");
  var data = await response.json();
  processFunc(data.MRData.DriverTable.Drivers);
  console.log("Done getF1DriversAwait");
}

function PromiseWrapper() {
  getF1DriversPromise(f1URL, processData);
  console.log("Done PromiseWrapper");
}

function AwaitWrapper() {
  getF1DriversAwait(f1URL, processData);
  console.log("Done AwaitWrapper");
}

// PromiseWrapper();
AwaitWrapper();




    

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

