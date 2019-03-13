// Import of external libraries
import React from 'react';
import { connect } from 'react-redux';

// The Inventory component is only interested in displaying 
// part of the state, i.e. NOT creating any actions.
const Inventory = ({cashAmount, lemonCount}) => {
    return (
        <div>
            <h3>Cash :   {cashAmount}</h3>
            <h3>Lemons :   {lemonCount}</h3>
        </div>
    );
};

// Use this state-to-props mapper when using 
// the cash- and lemonReducer
// const mapStateToProps = state => {
//     return state;
// };

// Use this state-to-props mapper when using 
// the stateReducer
const mapStateToProps = state => {
    return { cashAmount : state.allState.cashAmount, 
             lemonCount : state.allState.lemonCount };
};

// Connect the state-to-props mapper to the Redux store
// Only one parameter, since no action creators are used.
export default connect(mapStateToProps)(Inventory);