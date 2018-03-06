import React, { Component } from 'react';

// import { Link } from 'react-router-dom';
import PostNew from '../containers/Posts/PostNew';

class CreatePost extends Component {
  render() {
    return (
      <div>
        <PostNew history={this.props.history}/>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch, values) => {
//   return {
//     add_post(): () => dispatch(addPost(values))
//   }
// }

export default CreatePost;

//  connect(null, { addPost })(PostsNew)
