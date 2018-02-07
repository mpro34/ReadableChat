import { combineReducers } from 'redux';
import {
  GET_ALL_POSTS,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_ONE_POST,

  GET_ALL_CATEGORIES,
  GET_ONE_CATEGORY,

  GET_ALL_COMMENTS,
  EDIT_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT
} from '../actions';

const initialPosts = {
  post1: {
    title: 'first post!',
    author: 'chris',
    body: 'This is the body of my first post'
  },
  post2: {
    title: 'less important post!',
    author: 'John Smith',
    body: 'This is John smith\'s post body'
  }
};
//
// const initialCategories = {
//   scifi: [
//     'post1',
//     'post2'
//   ]
// }

//TODO: use Postman to simulate all actions below

// TODO: Use postman results to fill out the return for each case in post!
function posts(state = initialPosts, action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      console.log(`GET_ALL_POSTS reducer called: ${JSON.stringify(state)}`)
      console.log(`GET_ALL_POSTS actions: ${JSON.stringify(action)}`)
      return [...state];
    case ADD_POST:
      return {};
    case DELETE_POST:
      return {};
    case EDIT_POST:
      return {};
    case GET_ONE_POST:
      return {};
    default:
      return state;
  }
}

// TODO: Use postman results to fill out the return for each case in category!
function categories(state = {}, action) {
  switch(action.type) {
    case GET_ALL_CATEGORIES:
      return { ...state };
    case GET_ONE_CATEGORY:
      return {};
    default:
      return state;
  }
}

// TODO: Use postman results to fill out the return for each case in comment!
function comments(state = {}, action) {
  switch(action.type) {
    case GET_ALL_COMMENTS:
      return {};
    case EDIT_COMMENT:
      return {};
    case ADD_COMMENT:
      return {};
    case DELETE_COMMENT:
      return {};
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  categories,
  comments
});
