import React, { Component } from 'react';
import shortid from 'shortid';
import Post from './Post';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

class Posts extends Component {
  render() {
    return (
      <div>
        <h2>Posts Component</h2>
        {this.props.posts.map(post => (
          <ul key={shortid.generate()} className="list-group">
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
