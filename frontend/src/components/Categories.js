import React, { Component } from 'react';
import shortid from 'shortid';
import Category from './Category';

class Categories extends Component {
  render() {
    return (
      <div>
        {/*<h5>Categories Component</h5>
        <div className="divider"></div>

         {this.props.categories.map(category => (
          <div key={shortid.generate()} className="row">
              <Category
                key={shortid.generate()}
                name={category.name}
              />
          </div>
        ))} */}
        <ul className="collection with-header flow-text">
          <li className="collection-header"><h4>Categories</h4></li>
          {Object.keys(this.props.categories).map(catKey => {
            let category = this.props.categories[catKey];
            return <div key={shortid.generate()} className="row">
                    <Category
                      key={shortid.generate()}
                      name={category.name}
                    />
                  </div>
          })}
          {/* {this.props.categories.map(category => (
           <div key={shortid.generate()} className="row">
               <Category
                 key={shortid.generate()}
                 name={category.name}
               />
           </div>
         ))} */}
        </ul>

      </div>
    )
  };
};

export default Categories;
