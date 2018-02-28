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
    /* Return new state with all posts from GET request */
    case GET_ALL_POSTS:
      console.log('Get_all_posts action:', action.payload.data);
    //  return [ ...action.payload.data ];
      console.log('state: ', state);
      console.log('action payload', action.payload.data);
    ///...state returns new post values, action.payload.data returns what was in backend server. TODO - Need to merge the two returns.
      return {...state, ...action.payload.data}; //action.payload.data; //[...state, ...action.payload.data]; //state;
    //  return _.mapKeys(action.payload.data, 'id');
    /* Return state after POST to update server state */
    case ADD_POST:
      console.log('Add_post action:', action.payload.data);
      console.log('old state?', [...state, action.payload.data]);
      return state;//[...state, action.payload.data];
    /* Return state after DELETE to update server state */
    case DELETE_POST:
      return state;
    /* Return state after PUT updates a post and updates the server state */
    case EDIT_POST:
      return state;
    /* Return new state with details of post form GET request */
    case GET_DETAILS_OF_POST:
      return [...state, action.payload.data];
    /* Return state after POST to update server state */
    case VOTE_FOR_POST:
      return state;
    default:
      return state;
  }
}
