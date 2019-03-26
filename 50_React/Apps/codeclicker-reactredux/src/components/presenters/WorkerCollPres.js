import React from "react";
import { connect } from "react-redux";

import WorkerPres from "./WorkerPres";

const WorkerCollPres = ({workers}) => {
    return (
        <div className="ui segment">
            {workers.map((w, index) => {
                return <WorkerPres id={w.id} key={index}/>
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { workers: state.workers.workersInGame };
};

export default connect(mapStateToProps)(WorkerCollPres);