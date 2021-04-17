import { ADD_POST, FETCH_POSTS, SET_POSTS, SHOW_LOADER, HIDE_LOADER } from './types';

export const addPost = (payload) => {
  return { type: ADD_POST, payload };
};

export const setUsers = (payload) => ({ type: SET_POSTS, payload });
export const fetchUsers = () => ({ type: FETCH_POSTS });
export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
