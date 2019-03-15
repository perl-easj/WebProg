// Reducer
// This reducer will be used by the Provider 
// (used in index.js in the root folder),
// as a parameter to createStore.

import { combineReducers } from 'redux';

const initialState = "ui label massive red";

// The single reducer used in this App
const colorReducer = (colorStyle = initialState, action) => {
    if (action.type === 'RED') { return "ui label massive red"; }
    if (action.type === 'BLUE') { return "ui label massive blue"; }
    if (action.type === 'GREEN') { return "ui label massive green"; }
    return colorStyle;
};


// Due to this definition, the counter value will be 
// available as a "count" property on the state object.
export default combineReducers({
    colorStyle : colorReducer,
});