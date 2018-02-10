import React, { Component } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import Category from './Category';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../actions';

class Root extends Component {
  // doThing = () => {
  //   this.props.dispatch(fetchCategories({}))
  // }
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
        <button onClick={this.props.fetchCA}> Get Categories </button>
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
//
// fetch('http://localhost:3001/categories', {
//   headers: {
//     Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
//   }
// }).then(res => res.json())
//   .then(data => console.log(`output = ${JSON.stringify(data)}`))
//   .catch(err => console.log(`error occ = ${err}`))

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCA: () => dispatch(fetchCategories())
  }
}
// const mapDispatchToProps = dispatch => ({
//   apiGetCategories: () => dispatch(fetchCategories())
// });
// const mapDispatchToProps = dispatch => {
//   // return {
//     // apiGetCategories: () => dispatch({
//     //   type: 'GET_ALL_CATEGORIES'
//     // }),
// }

export default connect(mapStateToProps, mapDispatchToProps)(Root)
