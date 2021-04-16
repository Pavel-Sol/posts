import { ADD_POST, SET_POSTS } from './types';

const defaultState = {
  posts: [],

  asyncPosts: [],
};

export const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    case SET_POSTS:
      return { ...state, asyncPosts: action.payload };

    default:
      return state;
  }
};
