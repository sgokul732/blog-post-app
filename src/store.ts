

import { createStore,  applyMiddleware, compose } from 'redux'
import { rootReducer } from './rootReducer'
import logger from 'redux-logger'

const store = createStore(rootReducer, compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : args => args,
  ));
export default store

