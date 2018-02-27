import * as ServerAPIUtil from '../utils/server_api_fetch';
import axios from 'axios';
import uniqid from 'uniqid';
import {
  GET_ALL_COMMENTS,
  EDIT_COMMENT,
  ADD_COMMENT,
  GET_DETAILS_OF_COMMENT,
  VOTE_FOR_COMMENT,
  DELETE_COMMENT
} from './types';

/*
 * Action Creators for Comments
 */
//GET /posts/:id/comments
export function getAllComments(id) {
  console.log('Comment input id = ', id);
  const request = axios.get('http://localhost:3001/posts/' + id + '/comments', {
    headers: {
      Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
    }
  });
  return {
    type: GET_ALL_COMMENTS,
    payload: request
  }
};
//PUT /comments/:id
export function editComment({ comment }) {
  return {
    type: EDIT_COMMENT,
    comment
  }
};
//POST /comments
export function addComment({ comment }) {
  return {
    type: ADD_COMMENT,
    comment
  }
};
//DELETE /comments/:id
export function deleteComment({ comment }) {
  return {
    type: DELETE_COMMENT,
    comment
  }
};
