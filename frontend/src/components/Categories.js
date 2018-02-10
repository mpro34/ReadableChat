import React, { Component } from 'react';

class Categories extends Component {
  render() {
    return (
      <div>
        <h1>Categories Component</h1>
        {this.props.categories}
      </div>
    );
  };
}

export default Categories;
