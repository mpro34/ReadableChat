import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

class PostDetail extends Component {
  render() {
    console.log(`post detail props = ${JSON.stringify(this.props)}`)
    return (
      <div>
        <h1>Post Title</h1>
        <div className="container">
          {
            this.props.comments.map(comment => (
              <div key={shortid.generate()} className="flat-text small">
                <p> {comment.body} </p>
              </div>
            ))
          }
        </div>
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
