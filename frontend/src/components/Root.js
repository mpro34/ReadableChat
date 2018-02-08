import React, { Component } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import Category from './Category';
import { Link } from 'react-router-dom';

class Root extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Readable</h1>
        </div>
        <div>
          <h3>Categories</h3>
          {
            this.props.categories.map(category => (
              <div key={shortid.generate()} className="section">
                <Category title={category.name}/>
              </div>
            ))
          }
        </div>

        <div>
          <Link to="/category">Category</Link>
        </div>
        <div>
          <Link to="/postdetail">PostDetail</Link>
        </div>

      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(Root)
