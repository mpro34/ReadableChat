import React, { Component } from 'react';

class Posts extends Component {
  render() {
    return (
      <div>
        <h1>Posts Component</h1>
        {this.props.posts}
      </div>
    );
  };
}

export default Posts;
