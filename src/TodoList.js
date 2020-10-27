import React, { Component } from "react";
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class TodoList extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: '10px',
          marginLeft: '10px'
        }}>
        <div>
          <Input placeholder='todoList'
                 style={{
                   width: '300px',
                   margin: '0 30px'
                 }}/>
          <Button type='primary'>primary</Button>
        </div>
        <List
          style={{
            marginTop: '10px',
            width: '300px',
            marginLeft: '30px'
          }}
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default TodoList