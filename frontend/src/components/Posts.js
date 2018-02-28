import React, { Component } from 'react';
import shortid from 'shortid';
import Post from './Post';

class Posts extends Component {
  render() {
    return (
      <div>
        <h5>Posts Component</h5>
        <div className="divider"></div>
        <ul className="collection with-header">
          <li className="collection-header"><h4>Posts</h4></li>
          {/* {this.props.posts.map(post => (
            <div key={shortid.generate()} className="row">
                <Post
                  key={shortid.generate()}
                  id={post.id}
                  title={post.title}
                  author={post.author}
                  body={post.body}
                  timestamp={post.timestamp}
                  voteScore={post.voteScore}
                />
          </div>
          ))} */}
          {Object.keys(this.props.posts).map(postKey => {
            let post = this.props.posts[postKey];
            return <div key={shortid.generate()} className="row">
                <Post
                  key={shortid.generate()}
                  id={post.id}
                  title={post.title}
                  author={post.author}
                  body={post.body}
                  timestamp={post.timestamp}
                  voteScore={post.voteScore}
                />
          </div>
          })}
        </ul>
      </div>
    )
  };
};

export default Posts;
