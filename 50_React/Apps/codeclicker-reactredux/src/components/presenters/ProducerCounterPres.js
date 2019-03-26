import React from "react";

import CounterPres from "./CounterPres";
import ProducerPres from "./ProducerPres";

const ProducerCounterPres = () => {
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

export default ProducerCounterPres;