import {
  GET_ALL_CATEGORIES,
  GET_POSTS_FOR_CATEGORY,
} from '../../actions/types';

export default (state = {}, action) => {
  switch(action.type) {

    case GET_ALL_CATEGORIES:
      return {...state, ...action.payload.data.categories};
    case GET_POSTS_FOR_CATEGORY:
    console.log("Action Returns = ", action.payload.data);
      return {...state, ...action.payload.data.categories};
    default:
      return state;
  }
}
