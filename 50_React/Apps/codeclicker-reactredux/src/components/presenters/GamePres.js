import React from "react";

import ProducerCounterPres from "./ProducerCounterPres";
import BoosterCollPres from "./BoosterCollPres";
import WorkerCollPres from "./WorkerCollPres";


const GamePres = () => {
    return (
        <div className="ui grid">
            <div className="top aligned row">
                <div className="eight wide column">
                    <ProducerCounterPres />
                    <BoosterCollPres/>
                </div>
                <div className="eight wide column">
                    <WorkerCollPres />
                </div>
            </div>
        </div>
    );
};

export default GamePres;