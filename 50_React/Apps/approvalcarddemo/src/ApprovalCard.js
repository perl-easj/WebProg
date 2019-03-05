import React from 'react';

// NB: all the classname=... is just styling!
// using the Semantic UI library
const ApprovalCard = props => {
    return (
        <div className="ui card">
            <div className="content">
                {props.children}
            </div>
            <div className="Extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">OK</div>
                    <div className="ui basic red button">No...</div>
                </div>
            </div>
        </div>
    );    
}

export default ApprovalCard;