import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getAllPosts } from '../containers/Posts/PostActions';
import { getAllCategories, getPostsForCategory } from '../containers/Categories/CategoryActions';
import SortBy from '../containers/SortBy/SortBy';
import Categories from '../containers/Categories/Categories';
import { Link } from 'react-router-dom';

// import Categories from '../components/Categories';
import Posts from '../containers/Posts/Posts';
// import shortid from 'shortid';


class Main extends Component {
  componentDidMount() {
    this.props.get_posts();
    this.props.get_categories();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">

            <Categories categories={this.props.categories}/>
            <SortBy />
            <Posts posts={this.props.posts} />

          </div>
        </div>
        <div className="text-xs-right">
          <Link className="btn-floating btn-large waves-effect waves-light red" to="/posts/new">
            <i className="material-icons">add</i>
          </Link>
        </div>
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
    get_categories: () => dispatch(getAllCategories()),
    get_posts_for_category: (category) => dispatch(getPostsForCategory(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
