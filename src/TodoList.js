import React, { Component } from "react";
import 'antd/dist/antd.css'
import store from "./store";
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList} from "./store/actionCreators";
import TodoListUl from "./TodoListUl";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  componentDidMount() {
    const action = getInitList()
    console.log(action)
    // axios.get('/list.json').then((res) => {
    //   const data = res.data;
    //   const action = initListAction(data);
    //   store.dispatch(action);
    // })
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