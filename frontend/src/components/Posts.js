import React, { Component } from 'react';
import shortid from 'shortid';
import Post from './Post';

class Posts extends Component {
  render() {
    return (
      <div>
        <h2>Posts Component</h2>
        {this.props.posts.map(post => (
          <ul className="list-group">
            <Post
              key={shortid.generate()}
              title={post.title}
            />
        </ul>
        ))}
      </div>
    )
  };
};

export default Posts;
