import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  // const middlewares = [thunk];
  const middlewares = [thunk, logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = compose(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
}
