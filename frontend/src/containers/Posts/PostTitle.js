import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts, deletePost } from '../../actions';
//import shortid from 'shortid';

class PostTitle extends Component {
  componentDidMount() {
    this.props.get_all_posts();
  }
  render() {
    console.log("PostTitle: id of post = ", this.props);
    //console.log("Comments in Post Detail: ", this.props.comments);
    let currentPost = null;
    // let currentPost = this.props.posts[Object.keys(this.props.posts).filter(postKey => (
    //   (this.props.posts[postKey].id) === this.props.match.params.id
    // ))]
    let postDate = new Date(currentPost ? currentPost.timestamp : 0);
    //console.log("DATE = ", postDate);
    //console.log("current Post = ", currentPost);
    return (
      <div className="row">
        <div className="left-align">
          <Link className="btn waves-effect waves-light blue" to="/">
            <i className="material-icons">arrow_back</i>
          </Link>
        </div>
        <h3>{currentPost ? currentPost.title : "Undefined Title"}</h3>

        <div className="fixed-action-btn horizontal">
           <a className="btn-floating btn-large red" to="/"> <i className="large material-icons">settings</i> </a>
           <ul>
             <li><Link title="Edit Post" className="btn-floating green" to="/"><i className="material-icons">edit</i></Link></li>
             <li><Link to="/"><button title="Delete Post" className="btn-floating red" onClick={() => this.props.delete_post(currentPost.id)}><i className="material-icons">block</i></button></Link></li>
           </ul>
         </div>

        <div className="col s12">
            Submitted by {currentPost ? currentPost.author : "Undefined Author"} at {postDate.toUTCString()}
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
    get_all_posts: () => dispatch(getAllPosts()),
    delete_post: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostTitle);
