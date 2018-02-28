import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Post extends Component {
  render() {
    console.log(this.props);
    return (
      // <div>
      //   {this.props.name}
      //   <Link className="flow-text" to={"/post/" + this.props.id}>
      //     {this.props.title}
      //   </Link>
      // </div>
      <li className="collection-item left flow-text">
        <div className="left-align">
          <Link to={"/post/" + this.props.id} className="secondary-content">
            {this.props.title}
          </Link>
        </div>
      </li>
    );
  };
}

export default Post;
