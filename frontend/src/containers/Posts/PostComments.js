import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts, getAllComments } from '../../actions';
import shortid from 'shortid';

class PostComments extends Component {
  componentDidMount() {
    this.props.get_all_posts();
    this.props.get_all_comments(this.props.root_id);
  }
  render() {
    console.log("PostComments: id of post = ", this.props.root_id);
    console.log("Comments in Post Detail: ", this.props.comments);
    // let currentPost = this.props.posts[Object.keys(this.props.posts).filter(postKey => (
    //   (this.props.posts[postKey].id) === this.props.root_id
    // ))]
    return (
      <div>
        <div className="divider"></div>
        {/* Loop through comments and render them */}
        <h5>Comments</h5>
        <Link className="waves-effect waves-light btn" to="/">
          <i className="material-icons left">add_box</i>
          Add Comment
        </Link>
        {Object.keys(this.props.comments).map(comKey => {
            let comment=this.props.comments[comKey];
            let resp = (comment.parentId === this.props.root_id) ?
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
    );
  };
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get_all_posts: () => dispatch(getAllPosts()),
    get_all_comments: (id) => dispatch(getAllComments(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);
