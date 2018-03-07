import React, { Component } from 'react';

// import { Link } from 'react-router-dom';
import CommentNew from '../containers/Comments/CommentNew';

class CreateComment extends Component {
  render() {
    console.log("CreateComment props params:", this.props)
    return (
      <div>
        <CommentNew parentId={this.props.match.params.pid} history={this.props.history}/>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch, values) => {
//   return {
//     add_post(): () => dispatch(addPost(values))
//   }
// }

export default CreateComment;

//  connect(null, { addPost })(PostsNew)
