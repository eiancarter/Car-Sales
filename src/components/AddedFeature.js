import React from 'react';
import { connect } from 'tls';
import { removeFeature } from '../actions/removeAction';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => this.props.removeFeature(this.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    feature: state.removeReducer.feature
  };
};

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
