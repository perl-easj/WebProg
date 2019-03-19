import React from "react";
import { connect } from "react-redux";

import CounterPres from "./CounterPres";
import ProducerPres from "./ProducerPres";

const ProducerCounterPres = props => {
  return (
    <div className="ui segment">
      <div className="ui grid">
        <div className="six wide column">
            <ProducerPres/>
        </div>
        <div className="ten wide column">
            <CounterPres/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(ProducerCounterPres);