import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPostsForCategory } from '../actions';



class Category extends Component {
  getPostsforCategory() {
    console.log("posts for this category request")
  }

  render() {
    return (
      <li className="collection-item">
        <div>
          {this.props.name}
          <button onClick={() => this.props.get_posts_for_category(this.props.name)} className="secondary-content">
            <i className="material-icons">
              filter_list
            </i>
          </button>
        </div>
      </li>
    )
  };
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = dispatch => {
  return {
    get_posts_for_category: (name) => dispatch(getPostsForCategory(name))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
