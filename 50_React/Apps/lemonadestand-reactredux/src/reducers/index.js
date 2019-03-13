// Reducers
// These will be used by the Provider 
// (used in index.js in the root folder),
// as a parameter to createStore

import { combineReducers } from 'redux';

// Just some constants which define the 
// initial state of the App.
const initialCash = 30;
const initialLemons = 10;
const priceOfGlassOfLemonade = 5;
const priceOfLemon = 3;
const initialState = { cashAmount : initialCash, lemonCount : initialLemons };

// Reducer responsible for managing the 'cash'
// part of the state.
const cashReducer = (cash = initialCash, action) => {
    // Selling lemonade increases cash
    if (action.type === 'SELL_LEMONADE') {
        return cash + (action.payload * priceOfGlassOfLemonade);
    }

    // Buying lemons decreases cash
    if (action.type === 'BUY_LEMONS') {
        return cash - (action.payload * priceOfLemon);
    }

    return cash;
};

// Reducer responsible for managing the 'lemons'
// part of the state.
const lemonReducer = (lemons = initialLemons, action) => {
    // Selling lemonade decreases the number of lemons
    if (action.type === 'SELL_LEMONADE') {
        return lemons - action.payload;
    }

    // Buying lemons increases the number of lemons
    if (action.type === 'BUY_LEMONS') {
        return lemons + action.payload;
    }

    return lemons;
};

// Alternative reducer; will manage the entire state,
// and take business rules into account.
const stateReducer = (state = initialState, action) => {
    if (actionIsValid(state, action)) {
        return { cashAmount : cashReducer(state.cashAmount, action), 
                 lemonCount : lemonReducer(state.lemonCount, action) };
    }

    return state;
};

// Business rules for deciding if an action is valid,
// given the current state of the App.
function actionIsValid(state = initialState, action) {
    return ((action.type === 'SELL_LEMONADE' && state.lemonCount >= action.payload) ||
            (action.type === 'BUY_LEMONS' && state.cashAmount >= (priceOfLemon * action.payload)));
}

// Use this combined reducer when using cash- and lemonReducer,
// which do NOT take business rules into account
// export default combineReducers({
//     cashAmount: cashReducer,
//     lemonCount: lemonReducer
// });


// Use this combiner when using stateReducer,
// which do take business rules into account
export default combineReducers({
    allState : stateReducer
});
