import { ADD_POST, FETCH_POSTS, SET_POSTS, SHOW_LOADER, HIDE_LOADER } from './types';

export const addPost = (payload) => {
  return { type: ADD_POST, payload };
};

export const setPosts = (payload) => ({ type: SET_POSTS, payload });
export const fetchPosts = () => ({ type: FETCH_POSTS });
export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
