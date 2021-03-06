import React from "react";
import { connect } from "react-redux";

import { toText, toTextFixedDecBelowCutoff } from "../logic/NumbersToText";

const CounterPres = props => {
  return (
    <div>
      <h2>{toTextFixedDecBelowCutoff(props.counters.locsInBank, 0, 100000)} LOCs in bank</h2>
      <h3>{toText(props.workers.getTotalLOCS(props.boosters))} total LOC/s</h3>
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