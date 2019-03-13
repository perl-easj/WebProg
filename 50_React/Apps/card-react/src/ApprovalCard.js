// Import React libraries
import React from 'react';

// NB: all the classname=... is just styling
// using the SemanticUI styling library
//
// ApprovalCard contains some content, available in the 
// "children" property in the "props" parameter.
// ApprovalCard also contains two buttons without functionality.
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