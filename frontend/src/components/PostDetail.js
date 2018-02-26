import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllComments } from '../actions';

class PostsDetail extends Component {
  componentDidMount() {
    console.log('PostDetail inside componentDidMount = ', this.props.match.params.id);
    this.props.get_comments(this.props.match.params.id);
  }

  render() {
    console.log("ID of Post Detail: ", this.props.match.params.id);
    console.log("**Posts from Store within Post Detail: ", this.props.posts.filter(post => (post.id === this.props.match.params.id)) );
    console.log("--* Comments for this post: ", this.props.comments);
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
            {
              this.props.comments.map((comment, idx) => {
                return (
                  <div>
                    <h5> Comment {idx} </h5>
                    <p> From: {comment.author} </p>
                    <p> {comment.body} </p>
                  </div>
                )
              })
            }
          </span>

      </div>
    )
  };
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get_comments: (id) => dispatch(getAllComments(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsDetail);
