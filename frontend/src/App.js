import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Category from './components/Category';
import PostDetail from './components/PostDetail';
import NoMatch from './components/NoMatch';
import { connect } from 'react-redux';
import fetch from 'node-fetch';

const App = ({posts, getPosts}) => {
    console.log(`Within App - state: ${JSON.stringify(posts)}`)
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => (
            <div>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <button onClick={getPosts}> ClickMe </button>
          </div>
          )}/>
          <Route path='/category' component={Category} />
          <Route path='/postdetail' component={PostDetail} />
          <Route component={NoMatch} status={404} />
        </Switch>
      </div>
    );
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
    posts: {...state}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch({
      type: 'GET_ALL_POSTS'
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
