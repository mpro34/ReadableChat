import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <span className="flow-text">
        {this.props.name}
      </span>
    )
  };
};

export default Category;
