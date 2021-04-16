const ADD_POST = 'ADD_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
// export const REQEST_POSTS = 'REQEST__POSTS';
const SET_POSTS = 'SET_POSTS';

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

export const addPostAC = (payload) => {
  return {
    type: ADD_POST,
    payload,
  };
};

export const setUsers = (payload) => ({ type: SET_POSTS, payload });
export const fetchUsers = () => ({ type: FETCH_POSTS });
