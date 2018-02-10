import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <li className="list-group-item">
        {this.props.name}
      </li>
    )
  };
};

export default Category;
