const ADD_POST = 'ADD_POST';

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

    default:
      return state;
  }
};

export const addPostAC = (payload) => {
  return {
    type: ADD_POST,
    payload,
  };
};
