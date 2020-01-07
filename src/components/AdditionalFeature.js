import React from 'react';
import { purchase } from '../actions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
      onClick={() => props.purchase(props.feature)} 
      className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(()=> {},{purchase: purchase})(AdditionalFeature);
