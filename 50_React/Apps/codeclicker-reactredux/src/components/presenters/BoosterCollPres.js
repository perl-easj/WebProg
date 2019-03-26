import React from "react";
import { connect } from "react-redux";

import BoosterPres from "./BoosterPres";

const BoosterCollPres = ({ boosters, workers }) => {
    let topNotOwnedBoosters = workers.map(w => {
        let notOwnedBooster = boosters.filter(b => { return (!b.owned) && (b.wid === w.id); });
        return notOwnedBooster ? notOwnedBooster.sort((b1, b2) => {return b1.price - b2.price})[0] : null;
    });

    return (
        <div className="ui segments">
            {topNotOwnedBoosters.filter(b => { return b; } ).map((b, index) => {
                return <BoosterPres id={b.id} key={index} />
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { boosters: state.boosters.boostersInGame, workers: state.workers.workersInGame };
};

export default connect(mapStateToProps)(BoosterCollPres);