import { ADD_POST, SET_POSTS } from './types';

const defaultState = {
  posts: [
    { id: 8787, title: 'blabla' },
    { id: 876447, title: 'хо-хо-хо' },
  ],

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


