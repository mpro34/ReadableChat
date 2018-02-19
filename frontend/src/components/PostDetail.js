import React, { Component } from 'react';

class PostsDetail extends Component {
  render() {
    console.log("this.props of Post Detail: ", this.props.match.params.id);
    return (
      <div className="row">
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
