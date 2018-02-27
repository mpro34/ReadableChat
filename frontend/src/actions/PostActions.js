import * as ServerAPIUtil from '../utils/server_api_fetch';
import axios from 'axios';
import uniqid from 'uniqid';
import {
  GET_ALL_POSTS,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_DETAILS_OF_POST,
  VOTE_FOR_POST,
} from './types';

/*
 * Action Creators for Posts
 */
let axiosConfig = {
  headers: {
    'Authorization': 'Basic Y2hyaXM6cGFzc3dvcmQ=',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
};
//GET /posts
export function getAllPosts() {
  const request = axios.get('http://localhost:3001/posts', {
    headers: {
      Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
    }
  });
  return {
    type: GET_ALL_POSTS,
    payload: request
  }
};
//POST /posts
export function addPost(values) {
  const request = axios.post('http://localhost:3001/posts', {
    "id": uniqid(),
    "timestamp": Date.now(),
    "title": values.title,
    "body": values.body,
    "author": values.author,
    "category": "redux",
    // "voteScore": 1,
    // "deleted": false,
    // "commentCount": 0
  }, axiosConfig);
  console.log('request in addPost: ', request);
  return {
    type: ADD_POST,
    payload: request
  }
};
//DELETE /posts/:id
export function deletePost() {
  return {
    type: DELETE_POST,
    payload: ''
  }
};
//PUT /posts/:id
export function editPost() {
  return {
    type: EDIT_POST,
    payload: ''
  }
};
export function getDetailsOfPost() {
  return {
    type: GET_DETAILS_OF_POST,
    payload: ''
  }
};
export function voteForPost() {
  return {
    type: VOTE_FOR_POST,
    payload: ''
  }
};
