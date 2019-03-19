// Import of external libraries
import React from "react";
import { connect } from "react-redux";

import { shortLOCSText } from "../logic/NumbersToText";
import { withDecimals } from "../logic/NumbersToText";

const CounterPres = props => {
  return (
    <div>
      <h2>{shortLOCSText(props.counters.locsInBank)} LOCs in bank</h2>
      <h3>{withDecimals(props.workers.getTotalLOCS(props.boosters))} total LOC/s</h3>
    </div>
  );
};

const mapStateToProps = state => {
    return { 
        counters : state.counters,
        workers : state.workers,
        boosters : state.boosters 
    };
};

export default connect(mapStateToProps)(CounterPres);