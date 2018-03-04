import React, { Component } from 'react';
import shortid from 'shortid';
import Category from './Category';
import { connect } from 'react-redux';
import { getAllCategories, getPostsForCategory } from './CategoryActions';

class Categories extends Component {
  componentDidMount() {
    this.props.get_categories();
  }

  render() {
    return (
      <div className="flow-text">
          <span>Categories:</span>
          {Object.keys(this.props.categories).map(catKey => {
            let category = this.props.categories[catKey];
            return <Category key={shortid.generate()} name={category.name}
                    />
          })}
      </div>
    )
  };
};

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get_categories: () => dispatch(getAllCategories()),
    get_post_for_category: (category) => dispatch(getPostsForCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
