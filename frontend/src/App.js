import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Category from './components/Category';
import PostDetail from './components/PostDetail';
import NoMatch from './components/NoMatch';
import Root from './components/Root';
import { connect } from 'react-redux';
import fetch from 'node-fetch';

class App extends Component {
  render() {
    console.log(`Within App - props: ${JSON.stringify(this.props)}`)
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Root} />
          {/*TODO: Pass in a single Category as a prop!!!*/}
          <Route path='/category' component={Category} />
          {/*TODO: Pass in a single Post as a prop!!!*/}
          <Route path='/postdetail' component={PostDetail} />
          <Route component={NoMatch} status={404} />
        </Switch>
      </div>
    );
  };
}

fetch('http://localhost:3001/categories', {
  headers: {
    Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
  }
}).then(res => res.json())
  .then(data => console.log(`output = ${JSON.stringify(data)}`))
  .catch(err => console.log(`error occ = ${err}`))


const mapStateToProps = state => {
  return {
    categories: state.categories,
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch({
      type: 'GET_ALL_CATEGORIES'
    })
  }
}

// TODO: Add mapStateToProps & mapStateToDispatch after reducers are ready
export default connect(mapStateToProps, mapDispatchToProps)(App);

/* GOOD example of connect redux
----------------------------------
import {connect} from 'react-redux'

const TodoItem = ({todo, destroyTodo}) => {
  return (
    <div>
      {todo.text}
      <span onClick={destroyTodo}> x </span>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todo : state.todos[0]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    destroyTodo : () => dispatch({
      type : 'DESTROY_TODO'
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem)
----------------------------------
*/
