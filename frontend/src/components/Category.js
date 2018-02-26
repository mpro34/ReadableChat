import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
  render() {
    return (
      <li className="collection-item">
        <div>
          {this.props.name}
          <Link to="/" className="secondary-content">
            <i className="material-icons">
              filter_list
            </i>
          </Link>
        </div>
      </li>
    )
  };
};

export default Category;
