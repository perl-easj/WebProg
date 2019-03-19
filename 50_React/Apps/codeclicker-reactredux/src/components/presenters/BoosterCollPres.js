import React from "react";
import { connect } from "react-redux";

import BoosterPres from "./BoosterPres";

const BoosterCollPres = ({ boosters }) => {
    return (
        <div className="ui segments">
            {boosters.map((b, index) => {
                return <BoosterPres boosterType={b.boosterType} key={index} />
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { boosters: state.boosters.boostersInGame };
};

export default connect(mapStateToProps)(BoosterCollPres);