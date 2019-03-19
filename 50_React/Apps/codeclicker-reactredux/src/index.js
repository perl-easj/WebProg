// Import of external libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Import from App itself 
import App from './components/App';
import reducers from './reducers';

// Wrap up App in a Provider.
// 100 % boilerplate code...
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);