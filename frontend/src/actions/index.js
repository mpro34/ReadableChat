import * as ServerAPIUtil from '../utils/server_api_fetch';
import axios from 'axios';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const GET_ONE_POST = 'GET_ONE_POST';

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_ONE_CATEGORY = 'GET_ONE_CATEGORY';

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

//Action Creators for Posts
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
}

let axiosConfig = {
  headers: {
    'Authorization': 'Basic YWxhZGRpbjpvcGVuc2VzYW1l',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
  }
};

// let postData = {
//   id: '8xf0y6ziyjabvozddggggg',
//   timestamp: Date.now(),
//   title: 'Post created by action title',
//   body: 'This post was created by an action!!',
//   author: 'Chris Whiting G',
//   category: 'react1'
// };

export function addPost(values) {
  const request = axios.post('http://localhost:3001/posts', values, axiosConfig);

  console.log('request in addPost: ', request);
  return {
    type: ADD_POST,
    payload: request
  }
}

export function deletePost({ post }) {
  return {
    type: DELETE_POST,
    post
  }
}
export function editPost({ post }) {
  return {
    type: EDIT_POST,
    post
  }
}
export function getOnePost({ post }) {
  return {
    type: GET_ONE_POST,
    post
  }
}

//Action Creators for Categories
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
//

export function getOneCategory({ category }) {
  return {
    type: GET_ONE_CATEGORY,
    category
  }
}

//Action Creators for Comments
export function getAllComments({ comments }) {
  return {
    type: GET_ALL_COMMENTS,
    comments
  }
}
export function editComment({ comment }) {
  return {
    type: EDIT_COMMENT,
    comment
  }
}
export function addComment({ comment }) {
  return {
    type: ADD_COMMENT,
    comment
  }
}
export function deleteComment({ comment }) {
  return {
    type: DELETE_COMMENT,
    comment
  }
}
