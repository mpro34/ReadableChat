import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
  render() {
    return (
      <Link className="flow-text" to="/posts/new">
        {this.props.name}
      </Link>
    )
  };
};

export default Category;
