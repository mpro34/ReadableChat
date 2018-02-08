import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

class Category extends Component {
  render() {
    return (
      <div>
        <h1>Category Title</h1>
        <ol>
          {
            this.props.posts.map(post => (
              <li key={shortid.generate()}>
                {post.title}
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
    posts: state.posts
  }
}

// TODO: Add mapStateToProps & mapStateToDispatch after reducers are ready
export default connect(mapStateToProps, null)(Category);
