import React, { Component } from 'react';
import shortid from 'shortid';
import Category from './Category';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

class Categories extends Component {
  render() {
    return (
      <div>
        <h2>Categories Component</h2>
        {this.props.categories.map(category => (
          <ul key={shortid.generate()} className="list-group">
            <Category
              key={shortid.generate()}
              name={category.name}
            />
          </ul>
        ))}
      </div>
    )
  };
};

export default Categories;
