import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';

import { sagaWatcher } from './sagas';

const saga = createSagaMiddleware();

export let store = createStore(rootReducer, applyMiddleware(saga));

saga.run(sagaWatcher);
