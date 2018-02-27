import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//import _ from 'lodash';
import PostReducer from './PostReducer';
import CategoryReducer from './CategoryReducer';
import CommentReducer from './CommentReducer';

export default combineReducers({
  posts: PostReducer,
  categories: CategoryReducer,
  comments: CommentReducer,
  form: formReducer
});
