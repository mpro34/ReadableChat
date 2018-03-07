import axios from 'axios';
import uniqid from 'uniqid';
import {
  GET_ALL_POSTS,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_DETAILS_OF_POST,
  GET_COMMENTS_OF_POST,
  VOTE_FOR_POST,
} from '../../actions/types';

/*
 * Action Creators for Posts
 */

//GET /posts
export function getAllPosts() {
  const request = axios.get('http://localhost:3001/posts', {
    headers: {
      Authorization: 'Basic Y2hyaXM6cGFzc3dvcmQ='
    }
  });
  console.log("Request from GET ALL POSTS: ", request);
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
    "category": "react",//values.category,
     // "voteScore": 0,
     // "deleted": false,
     // "commentCount": 0
  }, {
    headers: {
      'Authorization': 'Basic Y2hyaXM6cGFzc3dvcmQ=',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
  console.log('request in addPost: ', request);
  return {
    type: ADD_POST,
    payload: request
  }
};

//DELETE /posts/:id
export function deletePost(id) {
  const request = axios.delete('http://localhost:3001/posts/' + id, {
    headers: {
      Authorization: 'Basic Y2hyaXM6cGFzc3dvcmQ='
    }
  });
  return {
    type: DELETE_POST,
    payload: request
  }
};

//PUT /posts/:id
export function editPost(values, id) {
  const request = axios.put('http://localhost:3001/posts/' + id, {
    "title": values.title,
    "body": values.body
  }, {
    headers: {
      'Authorization': 'Basic Y2hyaXM6cGFzc3dvcmQ=',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
  return {
    type: EDIT_POST,
    payload: request
  }
};

//GET /posts/:id
export function getDetailsOfPost(id) {
  const request = axios.get('http://localhost:3001/posts/' + id, {
    headers: {
      Authorization: 'Basic Y2hyaXM6cGFzc3dvcmQ='
    }
  });
  console.log("Request values = ", request);
  return {
    type: GET_DETAILS_OF_POST,
    payload: request
  }
};

//GET /posts/:id/comments
export function getCommentsOfPost(id) {
  const request = axios.get('http://localhost:3001/posts/' + id + '/comments', {
    headers: {
      Authorization: 'Basic Y2hyaXM6cGFzc3dvcmQ='
    }
  });
  console.log("Request values = ", request);
  return {
    type: GET_COMMENTS_OF_POST,
    payload: request
  }
};

//POST /posts/:id
//vote = "upVote" or "downVote"
export function voteForPost(vote, id) {
  const request = axios.post('http://localhost:3001/posts/' + id, {
    "option": vote
  }, {
    headers: {
      'Authorization': 'Basic Y2hyaXM6cGFzc3dvcmQ=',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
  console.log("Voting for Post: ", request);
  return {
    type: VOTE_FOR_POST,
    payload: request
  }
};
