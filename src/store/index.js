import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import TodoSagas from './sagas'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

// thunk是redux的中间件
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer)

sagaMiddleware.run(TodoSagas);

export default store