// Import React and Axios libraries
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Import components from the application itself.
import DriverList from './DriverList';

// Implementation of the top-level App class, which will
// be used as a parameter to ReactDOM.render (see below)
class App extends React.Component {
    // We are using a class because we need to maintain a state.
    // The state consists of a list of driver objects, plus the 
    // search term entered in the input form
    state = { drivers: [], term: '' };

    // This function makes an async call to an external Web API, using axios.
    // Once the result is available, we use it to update the state.
    // Note that the state is updated using this.setState(...).
    getData = async () => {
        const response = await axios.get("https://ergast.com/api/f1/2018/drivers.json");
        this.setState({ drivers: response.data.MRData.DriverTable.Drivers });
    };

    // Implementation of the central render() method. Note that this 
    // method just uses the current state. Whenever the state changes, 
    // render() is "automatically" invoked again.
    render() {
        return (
            <div className="ui two column container">
                <div className="column"
                    style={{ marginTop: '20px' }}>
                    <div>
                        <form className="ui form">
                            <div className="field">
                                <label>Name filter</label>
                                {/* Note that the onChange callback is used to update the state */}
                                {/* The (changed) state value is then used to set "value" for the input form */}
                                <input
                                    type="text"
                                    value={this.state.term}
                                    onChange={e => this.setState({ term: e.target.value })}
                                />
                            </div>
                        </form>
                    </div>
                    <div>
                        {/* Note that clicking on the button invokes getData */}
                        <button className="ui green button"
                            style={{ marginBottom: '20px', marginTop: '20px', fontSize: '24px' }}
                            onClick={this.getData}>
                            Get F1 Drivers
                        </button>
                    </div>
                </div>
                {/* Uses values from state as parameters to DriverList */}
                <div className="column">
                    <DriverList drivers={this.state.drivers} searchTerm={this.state.term} />
                </div>
            </div>
        );
    }
}


// Render the App component in the browser
ReactDOM.render(<App/>, document.querySelector('#root'));