import React from 'react';
import DriverCard from './DriverCard';

// Since this component does not have any state, 
// using a functional component is just fine...
const DriverList = props => {
  const drivers = props
    .drivers
    .filter(driver => { return (driver.givenName + driver.familyName)
      .toLowerCase()
      .includes(props.searchTerm.toLowerCase()); })
    .map(driver => {
    return <DriverCard key={driver.permanentNumber} theDriver={driver} />;
  });

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