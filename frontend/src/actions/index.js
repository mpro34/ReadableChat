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

//Action Creators for Posts
export function getAllPosts({ posts }) {
  return {
    type: GET_ALL_POSTS,
    posts
  }
}
export function addPost({ post }) {
  return {
    type: ADD_POST,
    post
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
export function getAllCategories({ categories }) {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  }
}
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
