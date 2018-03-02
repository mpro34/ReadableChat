import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../actions';

class Post extends Component {
  render() {
    let postDate = new Date(this.props ? this.props.timestamp : 0);
    return (
      // <div>
      //   {this.props.name}
      //   <Link className="flow-text" to={"/post/" + this.props.id}>
      //     {this.props.title}
      //   </Link>
      // </div>
      <div>
      <li className="collection-item left flow-text">
        <div className="left-align">
          <button type="submit" onClick={() => this.props.delete_post(this.props.id)} className="btn-floating btn-tiny waves-effect waves-light red">
            <i className="material-icons tiny">close</i>
          </button>
          <div className="width-divider"/>
          <Link to={"/post/" + this.props.id} className="secondary-content">
            {this.props.title}
          </Link>
        </div>
      </li>
      <p>Submitted by {this.props ? this.props.author : "Undefined Author"} at {postDate.toUTCString()}</p>
    </div>

    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    delete_post: (id) => dispatch(deletePost(id))
  }
}

export default connect(null, mapDispatchToProps)(Post);
