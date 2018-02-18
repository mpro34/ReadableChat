import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Post extends Component {
  render() {
    return (
      <Link className="flow-text" to="/posts/new">
        {this.props.title}
      </Link>
    );
  };
}

export default Post;
