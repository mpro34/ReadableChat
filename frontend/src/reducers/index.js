import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//import _ from 'lodash';
import {
  GET_ALL_POSTS,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_ONE_POST,

  GET_ALL_CATEGORIES,
  GET_POSTS_FOR_CATEGORY,

  GET_ALL_COMMENTS,
  EDIT_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT
} from '../actions';

// const initialPosts = [
//   {
//     title: 'first post!',
//     author: 'chris',
//     body: 'This is the body of my first post'
//   },
//   {
//     title: 'less important post!',
//     author: 'John Smith',
//     body: 'This is John smith\'s post body'
//   }
// ];
//
// const initialCategories = [
//   {
//     "name": "Chris",
//     "path": "www"
//   },
//   {
//     "name": "Joel",
//     "path": "gov"
//   }
// ]

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
function posts(state = [], action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      console.log('Get_all_posts action:', action.payload.data);
    //  return [ ...action.payload.data ];
      console.log('state: ', state);
      console.log('action payload', action.payload.data);
    ///...state returns new post values, action.payload.data returns what was in backend server. TODO - Need to merge the two returns.
      return action.payload.data; //[...state, ...action.payload.data]; //state;
    //  return _.mapKeys(action.payload.data, 'id');
    case ADD_POST:
      console.log('Add_post action:', action.payload.data);
      console.log('old state?', [...state, action.payload.data]);
      return [...state, action.payload.data];
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
function categories(state = [], action) {
  switch(action.type) {
    case 'SELECT_CATEGORY':
      return action.payload;
    case GET_ALL_CATEGORIES:
    console.log('Get_all_categories action:', action.payload.data);
      return [ ...action.payload.data.categories ];
    case GET_POSTS_FOR_CATEGORY:
      return state;
    default:
      return state;
  }
}

// TODO: Use postman results to fill out the return for each case in comment!
function comments(state = initialComments, action) {
  switch(action.type) {
    case GET_ALL_COMMENTS:
      console.log('Comments response = ', action.payload.data)
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
  comments,
  form: formReducer
});
