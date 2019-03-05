// Import of React libraries
import React from 'react';
import ReactDOM from 'react-dom';

const greetingText = "Hello everybody!";

// Create a React component
const App = () => { 
    return <div>{greetingText}</div>; 
}

// Render the React component in the browser
ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
);