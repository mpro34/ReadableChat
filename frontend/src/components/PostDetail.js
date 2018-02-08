import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

class PostDetail extends Component {
  render() {
    return (
      <div>
        <h1>Post Title</h1>
        <ol>
        {
          this.props.comments.map(comment => (
            <li key={shortid.generate()}>
              {comment.title}
            </li>
          ))
        }
      </ol>
      </div>
    )
  };
};

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}
// TODO: Add mapStateToProps & mapStateToDispatch after reducers are ready
export default connect(mapStateToProps, null)(PostDetail);
