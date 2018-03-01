import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../actions';

class Post extends Component {
  render() {
    return (
      // <div>
      //   {this.props.name}
      //   <Link className="flow-text" to={"/post/" + this.props.id}>
      //     {this.props.title}
      //   </Link>
      // </div>
      <li className="collection-item left flow-text">
        <div className="left-align">
          <button type="submit" onClick={() => this.props.delete_post(this.props.id)} className="btn btn-primary">Delete</button>
          <Link to={"/post/" + this.props.id} className="secondary-content">
            {this.props.title}
          </Link>
        </div>
      </li>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    delete_post: (id) => dispatch(deletePost(id))
  }
}

export default connect(null, mapDispatchToProps)(Post);
