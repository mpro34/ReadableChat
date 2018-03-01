import axios from 'axios';
import {
  GET_ALL_CATEGORIES,
  GET_POSTS_FOR_CATEGORY,
} from './types';

/*
 * Action Creators for Categories
 */

//GET /categories
export function getAllCategories () {
  const request = axios.get('http://localhost:3001/categories', {
    headers: {
      Authorization: 'Basic Y2hyaXM6cGFzc3dvcmQ='
    }
  });
  return {
    type: GET_ALL_CATEGORIES,
    payload: request
  }
};

//GET /:category/posts
export function getPostsForCategory(category) {
  const request = axios.get('http://localhost:3001/' + category + '/posts', {
    headers: {
      Authorization: 'Basic Y2hyaXM6cGFzc3dvcmQ='
    }
  });
  return {
    type: GET_POSTS_FOR_CATEGORY,
    payload: request
  }
};
