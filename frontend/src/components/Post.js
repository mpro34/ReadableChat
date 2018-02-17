import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <span className="flow-text">
        {this.props.title}
      </span>
    );
  };
}

export default Post;
