import React from 'react';
import { connect } from 'tls';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => this.props.removeAction(this.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    feature: ''
  };
};

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
