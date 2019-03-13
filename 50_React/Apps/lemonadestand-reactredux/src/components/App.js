// Import of external libraries
import React from "react";

// Import from App itself 
import Inventory from "./Inventory";
import UI from "./UI";

// Defines the top-level component in the React App.
// Note that NO attributes/callbacks are used, only
// a bit of SemanticUI styling.
const App = () => {
  return (
    <div className="ui container">
      <div className="ui segment">
        <UI/>
      </div>
      <div className="ui segment">
        <Inventory/>
      </div>
    </div>
  );
};

export default App;
