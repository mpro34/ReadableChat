import React, { Component } from 'react';
import shortid from 'shortid';
import Category from './Category';

class Categories extends Component {
  render() {
    return (
      <div>
        <h5>Categories Component</h5>
        <div class="divider"></div>
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
