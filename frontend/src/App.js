import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Category from './containers/Categories/Category';
import NoMatch from './components/NoMatch';

import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

import CreateComment from './components/CreateComment';

import PostDetail from './components/PostDetail';
// import Root from './components/Root';

// // import { getAllPosts, addPost } from './actions';
// // import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

import Main from './components/Main';

class App extends Component {
  render() {
    console.log("App props: ", this.props);
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main}/> {/*render={() => (
          <div>
            Root Page
            <PostList />
            <button onClick={() => this.props.getAllPosts()} className="btn btn-secondary">Fetch Posts</button>
            <button onClick={() => this.props.addPost()} className="btn btn-secondary">Create New Post</button>
          </div>
        )}/>*/}
          {/*TODO: Pass in a single Category as a prop!!!*/}
          <Route path='/categories/:name' component={Category} />
          <Route path='/posts/new' component={CreatePost} />
          <Route path='/post/edit/:id' component={EditPost} />
          <Route path='/comments/new/:pid' component={CreateComment} />
          <Route path='/post/:id' component={PostDetail} />
          {/*TODO: Pass in a single Post as a prop!!!*/}
          <Route component={NoMatch} status={404} /> */}
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
