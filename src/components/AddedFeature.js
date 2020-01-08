import React from 'react';
import { remove } from '../actions';
import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
      onClick={()=> props.remove(props.feature)}
       className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(()=> {},{remove: remove})(AddedFeature);
