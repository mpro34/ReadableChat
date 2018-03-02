import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { getAllComments, voteForPost, deletePost } from '../actions';

class PostsDetail extends Component {
  componentDidMount() {
    console.log('PostDetail inside componentDidMount = ', this.props.match.params.id);
    this.props.get_comments(this.props.match.params.id);
  }

  render() {
    console.log("Posts: ", this.props.posts);
    console.log("Comments in Post Detail: ", this.props.comments);

    let currentPost = this.props.posts[Object.keys(this.props.posts).filter(postKey => (
      (this.props.posts[postKey].id) === this.props.match.params.id
    ))]
    let postDate = new Date(currentPost ? currentPost.timestamp : 0);
    console.log("DATE = ", postDate);
    console.log("current Post = ", currentPost);
    return (
      <div className="row">
        <div className="left-align">
          <Link className="btn waves-effect waves-light blue" to="/">
            <i className="material-icons">arrow_back</i>
          </Link>
        </div>
        <h3>{currentPost ? currentPost.title : "Undefined Title"}</h3>

        <div className="fixed-action-btn horizontal">
           <a className="btn-floating btn-large red" to="/">
             <i className="large material-icons">settings</i>
           </a>
           <ul>
             <li><Link title="Edit Post" className="btn-floating green" to="/"><i className="material-icons">edit</i></Link></li>
             <li><Link to="/"><button title="Delete Post" className="btn-floating red" onClick={() => this.props.delete_post(currentPost.id)}><i className="material-icons">block</i></button></Link></li>
           </ul>
         </div>

        <div className="col s12">
            Submitted by {currentPost ? currentPost.author : "Undefined Author"} at {postDate.toUTCString()}
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

        <div className="divider"></div>

        {/* Loop through comments and render them */}
        <h5>Comments</h5>
        <Link className="waves-effect waves-light btn" to="/">
          <i className="material-icons left">add_box</i>
          Add Comment
        </Link>
        {Object.keys(this.props.comments).map(comKey => {
            let comment=this.props.comments[comKey];
            let resp = (comment.parentId === this.props.match.params.id) ?
                (<div className="row" key={shortid.generate()}>
                  <div className="col s8 offset-s2">
                    <div className="card-panel white">
                      <span className="black-text">
                        <p>From: {comment.author}</p>
                        <p>{comment.body}</p>
                      </span>
                    </div>
                  </div>
                </div>) : <div key={shortid.generate()}/>
            return resp
          })}
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
    get_comments: (id) => dispatch(getAllComments(id)),
    vote_for_post: (vote, id) => dispatch(voteForPost(vote, id)),
    delete_post: (id) => dispatch(deletePost(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsDetail);
