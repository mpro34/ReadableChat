import {
  GET_ALL_CATEGORIES,
  GET_POSTS_FOR_CATEGORY,
} from '../actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case 'SELECT_CATEGORY':
      return action.payload;
    case GET_ALL_CATEGORIES:
    console.log('Get_all_categories action:', action.payload.data);
      return [ ...action.payload.data.categories ];
    case GET_POSTS_FOR_CATEGORY:
      console.log('action payload: ', action.payload.data);
      return state;
    default:
      return state;
  }
}
