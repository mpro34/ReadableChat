import React, { Component } from 'react';

// import { Link } from 'react-router-dom';
import PostEdit from '../containers/Posts/PostEdit';

class EditPost extends Component {
  render() {
    console.log("Edit Post Props = ", this.props);
    return (
      <div>
        <PostEdit root_id={this.props.match.params.id} history={this.props.history}/>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch, values) => {
//   return {
//     add_post(): () => dispatch(addPost(values))
//   }
// }

export default EditPost;

//  connect(null, { addPost })(PostsNew)
