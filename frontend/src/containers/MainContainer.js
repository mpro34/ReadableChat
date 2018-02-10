import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getAllPosts, getAllCategories } from '../actions';

import Categories from '../components/Categories';
import Posts from '../components/Posts';

class MainContainer extends Component {
  componentDidMount() {
    this.props.get_posts();
    this.props.get_categories();
  }

  render() {
    return (
      <div>
        <h1>Main Container!</h1>
        <Categories
          categories={this.props.categories}
        />
        <Posts
          posts={this.props.posts}
        />
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get_posts: () => dispatch(getAllPosts()),
    get_categories: () => dispatch(getAllCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
