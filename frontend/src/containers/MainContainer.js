import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getAllPosts, getAllCategories } from '../actions';
import { Link } from 'react-router-dom';

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
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h1>Main Container!</h1>
        <button onClick={() => this.props.get_posts()}> Posts</button>
        <button onClick={() => this.props.get_categories()}> Categories</button>
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
