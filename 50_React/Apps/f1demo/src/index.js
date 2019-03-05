// Import the React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DriverList from './DriverList';


class App extends React.Component {
    state = { drivers: [], term: '' };

    getData = async () => {
        const response = await axios.get("https://ergast.com/api/f1/2018/drivers.json");
        this.setState({ drivers: response.data.MRData.DriverTable.Drivers });
    };

    render() {
        return (
            <div className="ui two column container">
                <div className="column"
                    style={{ marginTop: '20px' }}>
                    <div>
                        <form className="ui form">
                            <div className="field">
                                <label>Name filter</label>
                                <input
                                    type="text"
                                    value={this.state.term}
                                    onChange={e => this.setState({ term: e.target.value })}
                                />
                            </div>
                        </form>
                    </div>
                    <div>
                        <button className="ui green button"
                            style={{ marginBottom: '20px', marginTop: '20px', fontSize: '24px' }}
                            onClick={this.getData}>
                            Get F1 Drivers
                        </button>
                    </div>
                </div>
                <div className="column">
                    <DriverList drivers={this.state.drivers} searchTerm={this.state.term} />
                </div>
            </div>
        );
    }
}


// Take the React component and show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root')
);