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

const initialPosts = [
  {
    title: 'first post!',
    author: 'chris',
    body: 'This is the body of my first post'
  },
  {
    title: 'less important post!',
    author: 'John Smith',
    body: 'This is John smith\'s post body'
  }
];

const initialCategories = [
  {
    "name": "Chris",
    "path": "www"
  },
  {
    "name": "Joel",
    "path": "gov"
  }
]

const initialComments = [
  {
    body: 'This is the body of my first comment',
    author: 'the thing'
  },
  {
    body: 'COMMENT by patrick star!!!',
    author: 'spongebob'
  }
];

//TODO: use Postman to simulate all actions below

// TODO: Use postman results to fill out the return for each case in post!
function posts(state = initialPosts, action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      console.log('Get_all_posts action:', action.payload.data);
      return [ ...state, ...action.payload.data ];
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
function categories(state = initialCategories, action) {
  const { categories } = action;
  switch(action.type) {
    case 'SELECT_CATEGORY':
      return action.payload;

    case GET_ALL_CATEGORIES:
      return {
        ...state,
        name: "BillyBob"
      };
    case GET_ONE_CATEGORY:
      return {};
    default:
      return state;
  }
}

// TODO: Use postman results to fill out the return for each case in comment!
function comments(state = initialComments, action) {
  switch(action.type) {
    case GET_ALL_COMMENTS:
      return state;
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
