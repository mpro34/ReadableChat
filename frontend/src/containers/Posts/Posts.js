import React, { Component } from 'react';
import shortid from 'shortid';
import Post from './Post';
import { getAllPosts } from './PostActions';
import { connect } from 'react-redux';

class Posts extends Component {
  componentDidMount() {
    this.props.get_all_posts();
  }
  render() {
    return (
      <div>
        {/* <div className="divider"></div> */}
        <ul className="collection with-header">
          <li className="collection-header"><h4>Readable Chat</h4></li>
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

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = dispatch => {
  return {
    get_all_posts: () => dispatch(getAllPosts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
