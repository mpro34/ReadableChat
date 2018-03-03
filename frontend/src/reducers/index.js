import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//import _ from 'lodash';
import PostReducer from '../containers/Posts/PostReducer';
import CategoryReducer from '../containers/Categories/CategoryReducer';
import CommentReducer from '../containers/Comments/CommentReducer';

export default combineReducers({
  posts: PostReducer,
  categories: CategoryReducer,
  comments: CommentReducer,
  form: formReducer
});
