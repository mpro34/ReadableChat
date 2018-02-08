import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Category from './components/Category';
import PostDetail from './components/PostDetail';
import NoMatch from './components/NoMatch';
import Root from './components/Root';

class App extends Component {
  render() {
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

// TODO: Add mapStateToProps & mapStateToDispatch after reducers are ready
export default App;

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
