import { combineReducers } from 'redux';
import { GET_ALL_POSTS } from '../actions';

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

const initialCategories = {
  scifi: [
    'post1',
    'post2'
  ]
}

function post(state = initialPosts, action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      return { ...state };
    default:
      return state;
  }
}

function category(state = initialCategories, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  post,
  category
});
