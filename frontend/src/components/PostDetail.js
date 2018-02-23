import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsDetail extends Component {
  render() {
    console.log("this.props of Post Detail: ", this.props);
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

export default PostsDetail;
