import React, { Component } from "react";
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from "./store";
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from "./store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <div
        style={{
          marginTop: '10px',
          marginLeft: '10px'
        }}>
        <div>
          <Input
            placeholder='todoList'
            value={this.state.inputValue}
            style={{
              width: '300px',
              margin: '0 30px'
            }}
            onChange={this.handleInputChange}
          />
          <Button
            type='primary'
            onClick={this.handleBtnClick}
          >primary</Button>
        </div>
        <List
          style={{
            marginTop: '10px',
            width: '300px',
            marginLeft: '30px'
          }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={this.handleDeleteClick.bind(this, index)}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
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
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList