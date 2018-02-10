import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getAllPosts } from '../actions';

import Categories from '../components/Categories';
import Posts from '../components/Posts';

class MainContainer extends Component {
  componentDidMount() {
    this.props.get_posts();
  }

  render() {
    return (
      <div> Main Container! </div>
      <Categories
        categories={this.props.categories}
      />
      <Posts
        posts={this.props.posts}
      />
    );
  };
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    posts: state.posts
  }
}

const mapDispatchToProps = state => {
  return {
    get_posts: () => dispatch(getAllPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
