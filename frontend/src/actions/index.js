import * as ServerAPIUtil from '../utils/server_api_fetch';
import axios from 'axios';
import uniqid from 'uniqid';

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
    'Authorization': 'Basic Y2hyaXM6cGFzc3dvcmQ=',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
};

// id(pin): "8xf0y6ziyjabvozdd253nd"
// timestamp(pin): 1467166872634
// title(pin): "Udacity is the best place to learn React"
// body(pin): "Everyone says so after all."
// author(pin): "thingtwo"
// category(pin): "react"
// voteScore(pin): 6
// deleted(pin): false
// commentCount(pin): 2

// let postData = {
//   id: '8xf0y6ziyjabvozddggggg',
//   timestamp: Date.now(),
//   title: 'Post created by action title',
//   body: 'This post was created by an action!!',
//   author: 'Chris Whiting G',
//   category: 'react1'
// };

export function addPost(values) {
  const request = axios.post('http://localhost:3001/posts', {
    "id": uniqid(),
    "timestamp": Date.now(),
    "title": values.title,
    "body": values.body,
    "author": values.author,
    "category": "redux",
    "voteScore": 1,
    "deleted": false,
    "commentCount": 0
  }, axiosConfig);

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
