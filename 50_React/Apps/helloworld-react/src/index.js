// Import of React libraries
import React from 'react';
import ReactDOM from 'react-dom';

const greetingText = "Hello all";

// Create a React component
const App = () => { 
    return <div className="bold">{greetingText}</div>; 
}

// Render the React component in the browser
ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
);