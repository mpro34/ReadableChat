import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getAllPosts, getAllCategories, getPostsForCategory } from '../actions';
import { Link } from 'react-router-dom';

// import Categories from '../components/Categories';
import Posts from '../components/Posts';
import shortid from 'shortid';


class MainContainer extends Component {
  componentDidMount() {
    this.props.get_posts();
    this.props.get_categories();
  }

  render() {
    return (
      <div>
        {/* <h1>Main Container!</h1> */}
        <div className="row">
          <div className="col s12">

            <Link className='dropdown-button btn' href='#' to="/" data-activates='dropdown1'>Filter By Category</Link>
            <ul id='dropdown1' className='dropdown-content'>
              {Object.keys(this.props.categories).map(catKey => {
                let category = this.props.categories[catKey];
                return (
                <li key={shortid.generate()}>
                  <Link onClick={() => this.props.get_posts_for_category(this.props.name)} to="/">
                    {category.name}
                  </Link>
                </li>
              )})}
            </ul>

            <Link className='dropdown-button btn' href='#' to="/" data-activates='dropdown2'>Sort By</Link>
            <ul id='dropdown2' className='dropdown-content'>
                <li><Link onClick={() => console.log("Sort by VoteScore")} to="/">
                    Vote Score
                </Link></li>
                <li><Link onClick={() => console.log("Sort by Timestamp")} to="/">
                    Timestamp
                </Link></li>
            </ul>


            <Posts
              posts={this.props.posts}
            />
          </div>
        </div>
        {/* <button onClick={() => this.props.get_posts()}> Posts</button>
        <button onClick={() => this.props.get_categories()}> Categories</button> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
