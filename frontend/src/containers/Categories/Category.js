import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPostsForCategory } from '../../actions';


class Category extends Component {
  render() {
    return <Link className="categories" to="/category/:id">{this.props.name}</Link>
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
