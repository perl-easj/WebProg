import React from "react";
import { connect } from "react-redux";

import { buyWorkerClick } from "../../actions";
import { buyWorkerButtonState } from "../logic/ButtonState";
import { withDecimals } from "../logic/NumbersToText";
import { shortPriceText } from "../logic/NumbersToText";

const WorkerPres = (props) => {
    return (
        <div className="ui segment">
            <div className="ui grid">
                <div className="six wide column">
                    <h2>{props.workerType}</h2>
                    <h3>{withDecimals(props.workers.getBoostedLOCS(props.workerType, props.boosters), 1)} total LOC/s</h3>
                </div>
                <div className="six wide column">
                    <p><strong>Price: {shortPriceText(props.workers.getPrice(props.workerType))} LOC</strong></p>
                    <p>Productivity {withDecimals(props.workers.getBoostedBaseLOCS(props.workerType, props.boosters), 1)} LOC/s</p>
                    <p>{props.workers.getNoOwned(props.workerType)} owned</p>
                </div>
                <div className="middle aligned column">
                    <button className={buyWorkerButtonState(props.counters.locsInBank, props.workers.getPrice(props.workerType))} onClick={() => props.buyClick(props.workerType)}>
                        BUY!
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { 
        workers: state.workers, 
        boosters : state.boosters, 
        counters : state.counters, 
        workerType: ownProps.workerType 
    };
};

export default connect(mapStateToProps, { buyClick: buyWorkerClick })(WorkerPres);