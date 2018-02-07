import React from 'react';
import { connect } from 'react-redux';

const NoMatch = () => (
  <div> Page cannot be found!! </div>
);

// TODO: Add mapStateToProps & mapStateToDispatch after reducers are ready
export default connect()(NoMatch);
