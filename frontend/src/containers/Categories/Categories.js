import React, { Component } from 'react';
import shortid from 'shortid';
import Category from './Category';

class Categories extends Component {
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

export default Categories;
