import React, { Component } from 'react';
import shortid from 'shortid';
import Category from './Category';

class Categories extends Component {
  render() {
    return (
      <div>
        <h2>Categories Component</h2>
        {this.props.categories.map(category => (
          <div key={shortid.generate()} className="row">
              <Category
                key={shortid.generate()}
                name={category.name}
              />
          </div>
        ))}
      </div>
    )
  };
};

export default Categories;
