import React, { Component } from "react";
import 'antd/dist/antd.css'
import store from "./store";
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTododList } from "./store/actionCreators";
import TodoListUl from "./TodoListUl";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  // 挂载完成，类似vue的mounted
  componentDidMount() {
    const action = getTododList()
    store.dispatch(action)
  }

  render() {
    return (
      <TodoListUl
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDeleteClick={this.handleDeleteClick}
      />
    )
  }

  handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }

  handleBtnClick = () => {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleDeleteClick = (index) => {
    console.log(index)
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList