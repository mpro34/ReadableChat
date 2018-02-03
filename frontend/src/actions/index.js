export const GET_ALL_POSTS = 'GET_ALL_POSTS';

export function getAllPosts({ post }) {
  return {
    type: GET_ALL_POSTS,
    post
  }
}
