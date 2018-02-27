import * as ServerAPIUtil from '../utils/server_api_fetch';
import axios from 'axios';
import uniqid from 'uniqid';
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
