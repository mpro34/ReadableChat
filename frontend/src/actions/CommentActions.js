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
export function addComment(values, parentId) {
  const request = axios.post('http://localhost:3001/comments', {
    "id": uniqid(),
    "timestamp": Date.now(),
    "body": values.body,
    "author": values.author,
    "parentId": parentId
  }, {
    headers: {
      'Authorization': 'Basic Y2hyaXM6cGFzc3dvcmQ=',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
  return {
    type: ADD_COMMENT,
    payload: request
  }
};

//GET /comments/:id
export function getDetailsOfComment(id) {
  const request = axios.get('http://localhost:3001/comments/' + id, {
    headers: {
      Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
    }
  });
  return {
    type: GET_DETAILS_OF_COMMENT,
    payload: request
  }
};

//POST /comments/:id
export function voteForComment({ comment }) {
  return {
    type: VOTE_FOR_COMMENT,
    comment
  }
};

//DELETE /comments/:id
export function deleteComment(id) {
  const request = axios.delete('http://localhost:3001/comments/' + id, {
    headers: {
      Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
    }
  });
  return {
    type: DELETE_COMMENT,
    payload: request
  }
};