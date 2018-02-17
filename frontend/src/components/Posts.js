import React, { Component } from 'react';
import shortid from 'shortid';
import Post from './Post';

class Posts extends Component {
  render() {
    return (
      <div>
        <h2>Posts Component</h2>
        {this.props.posts.map(post => (
          <div key={shortid.generate()} className="row">
              <Post
                key={shortid.generate()}
                title={post.title}
              />
        </div>
        ))}
      </div>
    )
  };
};

export default Posts;
