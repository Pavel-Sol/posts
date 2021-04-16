import { ADD_POST, FETCH_POSTS, SET_POSTS } from './types';

export const addPostAC = (payload) => {
  return { type: ADD_POST, payload };
};

export const setUsers = (payload) => ({ type: SET_POSTS, payload });
export const fetchUsers = () => ({ type: FETCH_POSTS });
