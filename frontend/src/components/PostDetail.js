import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PostsDetail extends Component {
  render() {
    console.log("ID of Post Detail: ", this.props.match.params.id);
    console.log("**Posts from Store within Post Detail: ", this.props.posts.filter(post => (post.id === this.props.match.params.id)) );
    return (
      <div className="row">
        <div className="left-align">
          <Link className="btn waves-effect waves-light blue" to="/">
            <i className="material-icons">arrow_back</i>
          </Link>
        </div>
        <h2>Title of Post</h2>
        <div className="col s12">
          <h4 className="flow-text">
            Author of Post
          </h4>
        </div>

        <div className="col s12">
          <span className="flow-text">
            Post Content
          </span>
        </div>

      {/* Loop through comments and render them */}
          <span className="flow-text">
            Post Comments
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
