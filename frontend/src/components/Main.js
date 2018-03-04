import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import SortBy from '../containers/SortBy/SortBy';
import Categories from '../containers/Categories/Categories';
import Posts from '../containers/Posts/Posts';


class Main extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">

            <Categories />
            <SortBy />
            <Posts />

          </div>
        </div>
        <div className="text-xs-right">
          <Link className="btn-floating btn-large waves-effect waves-light red" to="/posts/new">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  };
}

export default Main;
