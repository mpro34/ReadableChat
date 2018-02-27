import * as ServerAPIUtil from '../utils/server_api_fetch';
import axios from 'axios';
import uniqid from 'uniqid';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const GET_ONE_POST = 'GET_ONE_POST';

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_POSTS_FOR_CATEGORY = 'GET_POSTS_FOR_CATEGORY';

export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export function selectCategory({ categories }) {
  return {
    type: 'SELECT_CATEGORY',
    payload: categories
  }
}

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
export function deletePost({ post }) {
  return {
    type: DELETE_POST,
    post
  }
};
//PUT /posts/:id
export function editPost({ post }) {
  return {
    type: EDIT_POST,
    post
  }
};
export function getOnePost({ post }) {
  return {
    type: GET_ONE_POST,
    post
  }
};

/*
 * Action Creators for Categories
 */
//GET /categories
export function getAllCategories () {
  const request = axios.get('http://localhost:3001/categories', {
    headers: {
      Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
    }
  });
  return {
    type: GET_ALL_CATEGORIES,
    payload: request
  }
};
export const fetchCategories = () => dispatch => (
  ServerAPIUtil
  .fetchCategories()
  .then(categories => {
    dispatch(getAllCategories(categories))
  })
);
//GET /:category/posts
export function getPostsForCategory(cat) {
  console.log(cat);
  const request = axios.get('http://localhost:3001/' + cat + '/posts', {
    headers: {
      Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
    }
  });
  console.log("Response from getPosts for Category: ", request);
  return {
    type: GET_POSTS_FOR_CATEGORY,
    payload: request
  }
};

//Action Creators for Comments
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
