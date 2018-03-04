import React, { Component } from 'react';

import PostTitle from '../containers/Posts/PostTitle';
import PostVoteAndBody from '../containers/Posts/PostVoteAndBody';
import PostComments from '../containers/Posts/PostComments';

class PostsDetail extends Component {
  render() {
    return (
    <div>
      <PostTitle root_id={this.props.match.params.id}/>
      <PostVoteAndBody root_id={this.props.match.params.id}/>
      <PostComments root_id={this.props.match.params.id}/>
    </div>
    )
  };
};

export default PostsDetail;
