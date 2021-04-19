import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_POSTS } from './types';
import { setPosts } from './actions';
import { showLoader, hideLoader } from './actions';

export function* sagaWatcher() {
  yield takeEvery(FETCH_POSTS, sagaWorker);
}

export function* sagaWorker() {
  yield put(showLoader());
  const payload = yield call(fetchPosts);
  yield put(setPosts(payload));
  yield put(hideLoader());
}

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  return await response.json();
}
