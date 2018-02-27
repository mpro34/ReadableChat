import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Category extends Component {
  getPostsforCategory() {
    console.log("posts for this category request")
  }

  render() {
    return (
      <li className="collection-item">
        <div>
          {this.props.name}
          <button onClick={this.getPostsforCategory} className="secondary-content">
            <i className="material-icons">
              filter_list
            </i>
          </button>
        </div>
      </li>
    )
  };
};

export default Category;
