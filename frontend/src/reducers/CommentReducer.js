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
      return {};
    case ADD_COMMENT:
      return {};
    case DELETE_COMMENT:
      return {};
    default:
      return state;
  }
}
