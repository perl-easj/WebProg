// Import React libraries
import React from 'react';

// The DriverCard component just returns a div which is
// styled as a "ui card". The component uses a couple of
// properties from the "props" parameter.
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