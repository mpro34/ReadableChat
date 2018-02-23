import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Post extends Component {
  render() {
  //  console.log("Props inside Post Component: ", this.props);
    return (
      <div>
        <Link className="flow-text" to={"/post/" + this.props.id}>
          {this.props.title}
        </Link>
      </div>
    );
  };
}

export default Post;
