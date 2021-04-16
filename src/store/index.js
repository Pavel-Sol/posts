import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { sagaWatcher } from './sagas';

const saga = createSagaMiddleware();

export let store = createStore(rootReducer, applyMiddleware(saga));

saga.run(sagaWatcher);
