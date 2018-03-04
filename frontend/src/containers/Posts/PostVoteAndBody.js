import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions';
import shortid from 'shortid';

class PostVoteAndBody extends Component {
  render() {
    console.log("PostVoteAndBody: id of post = ", this.props.root_id);
    //console.log("Comments in Post Detail: ", this.props.comments);
    let currentPost = null;
    // let currentPost = this.props.posts[Object.keys(this.props.posts).filter(postKey => (
    //   (this.props.posts[postKey].id) === this.props.match.params.id
    // ))]
    //let postDate = new Date(currentPost ? currentPost.timestamp : 0);
    // console.log("DATE = ", postDate);
    // console.log("current Post = ", currentPost);
    return (
      <div className="row">

        <div className="col s12">
          <p>Score: {currentPost ? currentPost.voteScore : "0.0"}</p>
          <button className="btn waves-effect waves-light blue" onClick={() => this.props.vote_for_post("upVote", currentPost.id)}>
            <i className="material-icons">expand_less</i>
          </button>
          <button className="btn waves-effect waves-light blue" onClick={() => this.props.vote_for_post("downVote", currentPost.id)}>
            <i className="material-icons">expand_more</i>
          </button>
          <div className="divider"></div>
        </div>
        <div className="row" key={shortid.generate()}>
          <div className="col s8 offset-s2">
            <div className="card-panel teal">
              <span className="white-text">
                <p>{currentPost ? currentPost.body : "Undefined Body"}</p>
              </span>
            </div>
          </div>
        </div>

      </div>

    );
  };
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get_all_posts: () => dispatch(getAllPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostVoteAndBody);
