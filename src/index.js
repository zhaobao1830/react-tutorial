import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./TodoList";
import { Provider } from 'react-redux'
import store from './store'

const App = (
  // Provider组件接受store做为props，子组件可以通过mapStateToProps方法里的state获取到stroe值
  <Provider store={store}>
    <TodoList/>
  </Provider>
)

ReactDOM.render(
  App,
  document.getElementById('root')
);