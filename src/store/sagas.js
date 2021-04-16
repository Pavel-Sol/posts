import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_POSTS } from './types';
import { setUsers } from './actions';

export function* sagaWatcher() {
  yield takeEvery(FETCH_POSTS, sagaWorker);
}

export function* sagaWorker() {
  const payload = yield call(fetchPosts);
  yield put(setUsers(payload));
}

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  return await response.json();
}
