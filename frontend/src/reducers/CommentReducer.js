import {
  GET_ALL_COMMENTS,
  EDIT_COMMENT,
  ADD_COMMENT,
  GET_DETAILS_OF_COMMENT,
  VOTE_FOR_COMMENT,
  DELETE_COMMENT
} from '../actions/types';

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

export default (state = initialComments, action) => {
  switch(action.type) {
    case GET_ALL_COMMENTS:
      console.log('Comments response = ', action.payload.data)
      return state;
    case EDIT_COMMENT:
      return state;
    case ADD_COMMENT:
      return state;
    case GET_DETAILS_OF_COMMENT:
      return state;
    case VOTE_FOR_COMMENT:
      return state;
    case DELETE_COMMENT:
      return state;
    default:
      return state;
  }
}
