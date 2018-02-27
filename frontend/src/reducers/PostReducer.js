import {
  GET_ALL_POSTS,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_DETAILS_OF_POST,
  VOTE_FOR_POST,
} from '../actions/types';

export default (state = [], action) => {
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
    case GET_DETAILS_OF_POST:
      return {};
    case VOTE_FOR_POST:
      return {};
    default:
      return state;
  }
}
