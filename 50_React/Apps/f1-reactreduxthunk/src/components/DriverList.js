import React from 'react';
import { connect } from 'react-redux';
import DriverCard from './DriverCard';
import { fetchF1Data } from '../actions';

class DriverList extends React.Component {
  componentDidMount() {
    this.props.fetchF1Data();
  }

  render() {
    const drivers = this.props.Drivers.map(driver => {
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
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fetchF1Data } )(DriverList);
