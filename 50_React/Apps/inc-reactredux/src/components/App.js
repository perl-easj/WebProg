// Import of external libraries
import React from "react";
import { connect } from "react-redux";

// Import of action creators from App itself
import { increment } from "../actions";
import { decrement } from "../actions";

// Defines the top-level component in the React App.
// Note how it uses the state (props.count) AND the
// two action creators (increment and decrement).
const App = props => {
  return (
    <div className="ui container">
    <h1>Counter App</h1>

    <button className="ui huge button green" onClick={() => props.increment()}>
      Increment
    </button>

    <button className="ui huge button red" onClick={() => props.decrement()}>
      Decrement
    </button>

    <h2>Current count: <span id="value">{props.count}</span></h2>
  </div>       
  );
};

// Trivial implementation of state-to-props mapper,
// since this component just uses the state as-is
const mapStateToProps = state => {
    return state;
};
  
// Connect the state-to-props mapper to the Redux store, AND
// also connect the two action creators (second parameter).
export default connect(mapStateToProps, { increment, decrement })(App);