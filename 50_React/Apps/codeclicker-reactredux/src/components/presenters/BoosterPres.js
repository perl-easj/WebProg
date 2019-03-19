import React from "react";
import { connect } from "react-redux";

import { buyBoosterClick } from "../../actions";
import { shortPriceText } from "../logic/NumbersToText";
import { withDecimals } from "../logic/NumbersToText";
import { buyBoosterButtonState } from "../logic/ButtonState";
import { buyBoosterButtonText } from "../logic/ButtonState";

const BoosterPres = (props) => {
    return (
        <div className="ui segment">
            <div className="ui grid">
                <div className="four wide column">
                    <h4>{props.boosterType}</h4>                
                </div>
                <div className="nine wide column">
                    <div>
                        <span>
                            {withDecimals(props.boosters.getBoostFactor(props.boosterType), 1)}
                        </span>
                        <span>
                            x boost for {props.boosters.getBooster(props.boosterType).workerType}
                        </span>
                        <span>
                            <strong>
                                {" "}({shortPriceText(props.boosters.getPrice(props.boosterType))} LOCs)
                            </strong>
                        </span>
                    </div>
                </div>
                <div className="three wide column">
                    <div className={buyBoosterButtonState(props.counters.locsInBank, props.boosters.getPrice(props.boosterType), props.boosters.isOwned(props.boosterType))} 
                        onClick={() => props.buyBoosterClick(props.boosterType)}>
                        {buyBoosterButtonText(props.boosters.isOwned(props.boosterType))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { 
        boosters: state.boosters, 
        counters : state.counters, 
        boosterType: ownProps.boosterType };
};

export default connect(mapStateToProps, { buyBoosterClick })(BoosterPres);