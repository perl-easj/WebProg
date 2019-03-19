// Implement the top-level component named 'App' here.

// Import of external libraries
import React from "react";
import { connect } from "react-redux";

// Import of action creators from App itself
import { red } from "../actions";
import { green } from "../actions";
import { blue } from "../actions";

// Defines the top-level component in the React App.
// Note how it uses the state (props.count) AND the
// two action creators (increment and decrement).
const App = props => {
  return (
    <div className="ui segment">
      <h1 id="value" className={props.colorStyle}>;-)</h1>
      <br/><br/>
      <button className="ui red button" onClick={() => props.red()}>Red</button>
      <button className="ui blue button" onClick={() => props.blue()}>Blue</button>
      <button className="ui green button" onClick={() => props.green()}>Green</button>
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
export default connect(mapStateToProps, { red, green, blue })(App);