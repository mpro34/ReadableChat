import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostDetail extends Component {
  render() {
    return (
      <div>Post Detail Page!</div>
    )
  };
};

// TODO: Add mapStateToProps & mapStateToDispatch after reducers are ready
export default connect()(PostDetail);
