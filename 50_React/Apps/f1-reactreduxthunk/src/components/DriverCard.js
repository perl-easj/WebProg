import React from 'react';

const DriverCard = props => {
    return (
        <div className="ui card">
            <div className="content">
                <div className="header" >{props.theDriver.givenName + " " + props.theDriver.familyName}</div>
                <div className="meta">{props.theDriver.nationality}</div>
            </div>
        </div>
    );
};

export default DriverCard;