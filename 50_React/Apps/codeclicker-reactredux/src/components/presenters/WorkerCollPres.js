import React from "react";
import { connect } from "react-redux";

import WorkerPres from "./WorkerPres";

const WorkerCollPres = ({workers}) => {
    return (
        <div className="ui segment">
            {workers.map((w, index) => {
                return <WorkerPres workerType={w.workerType} key={index}/>
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { workers: state.workers.workersInGame };
};

export default connect(mapStateToProps)(WorkerCollPres);