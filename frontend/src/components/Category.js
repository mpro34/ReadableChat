import React, { Component } from 'react';
import { connect } from 'react-redux';

class Category extends Component {
  render() {
    return (
      <div>Category Page!!</div>
    )
  };
};

// TODO: Add mapStateToProps & mapStateToDispatch after reducers are ready
export default connect()(Category);
