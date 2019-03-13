// Import React libraries
import React from 'react';

// Import components from the application itself.
import DriverCard from './DriverCard';

// Since this component does not have any state, 
// using a functional component is just fine...
// The componenent just returns a filtered version of
// the list provided in the "drivers" property, by 
// applying the "searchterm" property to the list.
const DriverList = props => {
  const drivers = props
    .drivers
    .filter(driver => {
      return (driver.givenName + driver.familyName)
        .toLowerCase()
        .includes(props.searchTerm.toLowerCase());
    })
    .map(driver => {
      return <DriverCard key={driver.permanentNumber} theDriver={driver} />;
    });

  // Once the list has been filtered, the actual JSX
  // code is very simple.
  return (
    <div>
      <h2>Got {drivers.length} driver(s)</h2>
      <div>
        {drivers}
      </div>
    </div>
  );
};

export default DriverList;