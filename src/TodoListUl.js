import React, { Component } from "react";
import {Button, Input, List} from "antd";

class TodoListUl extends Component {
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
            value={this.props.inputValue}
            style={{
              width: '300px',
              margin: '0 30px'
            }}
            onChange={this.props.handleInputChange}
          />
          <Button
            type='primary'
            onClick={this.props.handleBtnClick}
          >primary</Button>
        </div>
        <List
          style={{
            marginTop: '10px',
            width: '300px',
            marginLeft: '30px'
          }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {this.props.handleDeleteClick(index)}}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default TodoListUl