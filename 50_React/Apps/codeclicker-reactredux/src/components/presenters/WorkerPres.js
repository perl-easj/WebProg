import React from "react";
import { connect } from "react-redux";

import { buyWorkerClick } from "../../actions";
import { buyWorkerButtonState } from "../logic/ButtonState";
import { toText } from "../logic/NumbersToText";

const WorkerPres = (props) => {
    let worker = props.workers.getWorker(props.id);
    if (!worker) return <div>NOT FOUND</div>;

    return (
        <div className="ui segment">
            <div className="ui grid">
                <div className="six wide column">
                    <h2>{worker.workerType}</h2>
                    <h3>{toText(worker.getBoostedLOCS(props.boosters))} total LOC/s</h3>
                </div>
                <div className="six wide column">
                    <p><strong>Price: {toText(worker.getPrice())} LOC</strong></p>
                    <p>Productivity {toText(worker.getBoostedBaseLOCS(props.boosters))} LOC/s</p>
                    <p>{worker.noOwned} owned</p>
                </div>
                <div className="four wide middle aligned column">
                    <button className={buyWorkerButtonState(props.counters.locsInBank, worker.getPrice())} onClick={() => props.buyClick(props.id)}>
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
        id: ownProps.id 
    };
};

export default connect(mapStateToProps, { buyClick: buyWorkerClick })(WorkerPres);