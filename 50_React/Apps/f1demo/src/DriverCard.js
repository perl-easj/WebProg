import React from 'react';

class DriverCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: props.theDriver.givenName + " " + props.theDriver.familyName,
            country: props.theDriver.nationality
        };
    }

    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <div className="header" >{this.state.fullName}</div>
                    <div className="meta">{this.state.country}</div>
                </div>
            </div>
        );
    }
}

export default DriverCard;