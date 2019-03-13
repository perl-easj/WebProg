// Reducer
// This reducer will be used by the Provider 
// (used in index.js in the root folder),
// as a parameter to createStore.

import { combineReducers } from 'redux';

// The single reducer used in this App
const countReducer = (count = 0, action) => {
    if (action.type === 'INCREMENT') { return count + 1; }
    if (action.type === 'DECREMENT') { return count - 1; }
    return count;
};

// Due to this definition, the counter value will be 
// available as a "count" property on the state object.
export default combineReducers({
    count : countReducer
});