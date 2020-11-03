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

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer)

// 具体执行方法在TodoSagas文件中
sagaMiddleware.run(TodoSagas);

export default store