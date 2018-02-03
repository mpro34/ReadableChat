export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';

export function getAllPosts({ post }) {
  return {
    type: GET_ALL_POSTS,
    post
  }
}

export function getAllCategories({ category }) {
  return {
    type: GET_ALL_CATEGORIES,
    category
  }
}
