import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getAllPosts, getAllCategories } from '../actions';
import { Link } from 'react-router-dom';

import Categories from '../components/Categories';
import Posts from '../components/Posts';
import {Button, Icon} from 'react-materialize';

class MainContainer extends Component {
  componentDidMount() {
    this.props.get_posts();
    this.props.get_categories();
  }

  render() {
    return (
      <div>
        <h1>Main Container!</h1>
        <div className="row">
          <div class="col s6">
            <Categories
              categories={this.props.categories}
            />
          </div>
          <div class="col s6">
            <Posts
              posts={this.props.posts}
            />
          </div>
        </div>
        {/* <button onClick={() => this.props.get_posts()}> Posts</button>
        <button onClick={() => this.props.get_categories()}> Categories</button> */}
        <div className="text-xs-right">
          <Link className="btn-floating btn-large waves-effect waves-light red" to="/posts/new">
            <i class="material-icons">add</i>
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
    get_categories: () => dispatch(getAllCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
