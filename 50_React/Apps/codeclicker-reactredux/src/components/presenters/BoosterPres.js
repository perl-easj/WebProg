import React from "react";
import { connect } from "react-redux";

import { buyBoosterClick } from "../../actions";
import { toText, toTextNoDec } from "../logic/NumbersToText";
import { buyBoosterButtonState } from "../logic/ButtonState";
import { buyBoosterButtonText } from "../logic/ButtonState";

const BoosterPres = (props) => {
    let booster = props.boosters.getBooster(props.id);
    if (!booster) return <div>NOT FOUND</div>;
    let boosterDesc = booster.boosterType.split(" ");

    return (
        <div className="ui segment">
            <div className="ui grid">
                <div className="three wide column">
                    <h4>{boosterDesc[0]} <br/> {boosterDesc[1]}</h4>
                </div>
                <div className="ten wide column">
                    <div>
                        <span>
                            {toText(booster.boostFactor)}
                        </span>
                        <span>
                            x boost for {props.workers.getWorker(booster.wid).workerType}
                        </span>
                        <span>
                            <strong>
                                {" "}({toTextNoDec(booster.price)} LOCs)
                            </strong>
                        </span>
                    </div>
                </div>
                <div className="three wide column">
                    <div className={buyBoosterButtonState(props.counters.locsInBank, booster.price, booster.owned)} 
                         onClick={() => props.buyBoosterClick(props.id)}>
                         {buyBoosterButtonText(booster.owned)}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { 
        boosters: state.boosters, 
        workers: state.workers, 
        counters : state.counters, 
        id: ownProps.id };
};

export default connect(mapStateToProps, { buyBoosterClick })(BoosterPres);