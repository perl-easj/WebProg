// Redux library is included in index.html, 
// as reference to redux.js CDN

const initialState = "ui label massive red";


// STEP #1 - create three action creators named 'red', 'blue' and 'green'.
// Each action creator should just return an object with a 'type' property,
// since we do not need any payload.
const red = () => { return { type: 'RED'}}; 
const blue = () => { return { type: 'BLUE'}};
const green = () => { return { type: 'GREEN'}};


// STEP #2 - implement a reducer named 'colorReducer', which should return
// a string defining the new styling for the <a> tag. 
// Remember that a reducer must take two arguments: the current state and the action, 
// and must return the new state.
const colorReducer = (colorStyle = initialState, action) => {
    if (action.type === 'RED') { return "ui label massive red"; }
    if (action.type === 'BLUE') { return "ui label massive blue"; }
    if (action.type === 'GREEN') { return "ui label massive green"; }
    return colorStyle;
};


// STEP #3 - Create the Redux store with colorReducer as parameter
const store = Redux.createStore(colorReducer);


// STEP #4 - implement a method named 'renderNow', which will
// update the 'className' attribute for the element with id = 'value'
function renderNow() {
   document.querySelector("#value").className = store.getState();
}


// STEP #5 - Set renderNow as subscriber on changes to the stored state
store.subscribe(renderNow);

