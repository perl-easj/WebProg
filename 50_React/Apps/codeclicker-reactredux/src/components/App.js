import React from "react";
import { connect } from "react-redux";

import GamePres from "./presenters/GamePres";
import { tickEvent } from "../actions";
import { tickInterval } from "./data/GameData";

var tickStarted = false;

var startTick = (func) => {
    if (!tickStarted) {
        setInterval(() => { func()}, tickInterval);
        tickStarted = true;
    }
}

const App = props => {
  startTick(props.tickEvent);
  return (
    <div style={{ marginTop: '20px' }}>
      <div className="ui container">
        <GamePres />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, { tickEvent })(App);