// Import of external libraries
import React from "react";
import { connect } from "react-redux";

// Import of action creators from App itself
import { sellLemonade } from "../actions";
import { buyLemons } from "../actions";

// The UI component is only interested in creating actions, 
// i.e. NOT in using the current state.
// Action creators are called in onClick event handlers.
const UI = props => {
  return (
      <div className="ui grid">
          <div className="row">
              <button className="ui green button" onClick={() => props.sellLemonade(1)}>Sell Lemonade (1)</button>
              <button className="ui red button" onClick={() => props.buyLemons(1)}>Buy Lemon (1)</button>
          </div>
          <div className="row">
              <button className="ui green button" onClick={() => props.sellLemonade(4)}>Sell Lemonade (4)</button>
              <button className="ui red button" onClick={() => props.buyLemons(3)}>Buy Lemon (3)</button>
          </div>
      </div>    
  );
};

// Trivial implementation of state-to-props mapper,
// since this component does NOT use the state.
const mapStateToProps = state => {
  return state;
};

// Connect the state-to-props mapper to the Redux store, AND
// also connect the two action creators (second parameter).
export default connect(mapStateToProps, { sellLemonade, buyLemons })(UI);
