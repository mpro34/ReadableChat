import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PostsDetail extends Component {
  render() {
    console.log("ID of Post Detail: ", this.props.match.params.id);
    console.log("**Posts from Store within Post Detail: ", this.props.posts.filter(post => (post.id === this.props.match.params.id)) );
    let currentPost = (this.props.posts.filter(post => (post.id === this.props.match.params.id)))[0];
    return (
      <div className="row">
        <div className="left-align">
          <Link className="btn waves-effect waves-light blue" to="/">
            <i className="material-icons">arrow_back</i>
          </Link>
        </div>
        <h2>{currentPost ? currentPost.title : "Undefined Title"}</h2>
        <div className="col s12">
          <h4 className="flow-text">
            By: {currentPost ? currentPost.author : "Undefined Author"}
          </h4>
          <div className="divider"></div>
        </div>

        <div className="col s12">
          <p className="flow-text-small">
            {currentPost ? currentPost.body : "Undefined Body"}
          </p>
          <div className="divider"></div>
        </div>

      {/* Loop through comments and render them */}
          <span className="flow-text">
            Comments
          </span>

      </div>
    )
  };
};

const mapStateToProps = state => {
//  console.log("State from inside Post Detail: ", state.posts.filter(post => (post.id !== this.props.match.params.id)));
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(PostsDetail);
