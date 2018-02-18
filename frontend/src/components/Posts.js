import React, { Component } from 'react';
import shortid from 'shortid';
import Post from './Post';

class Posts extends Component {
  render() {
    return (
      <div>
        <h5>Posts Component</h5>
        <div class="divider"></div>
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
