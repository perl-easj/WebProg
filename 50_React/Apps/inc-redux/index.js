// Redux library is included in index.html, 
// as reference to redux.js CDN

const initialState = 0;


// Action creators
//increment action - no payload
const increment = () => { 
    return { type: 'INCREMENT'}
};

//decrement action - no  payload
const decrement = () => { 
    return { type: 'DECREMENT'}
};


// Reducers (well, only one reducer...)
const countReducer = (count = initialState, action) => {
    if (action.type === 'INCREMENT') { return count + 1; }
    if (action.type === 'DECREMENT') { return count - 1; }
    return count;
};


// Create the Redux store with countReducer as parameter
const store = Redux.createStore(countReducer); // REDUX


// Home-rolled render-like function 
// Will update the content of element with id = value
function renderNow() {
   document.querySelector("#value").innerHTML = store.getState(); // REDUX
}


// Set renderNow as subscriber on changes to the stored state
store.subscribe(renderNow); // REDUX

