import React, { Component, Fragment } from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      inputValue1: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleBtnDelete = this.handleBtnDelete.bind(this);
  }

  // 组件即将被挂载到页面的时候执行(只会执行一次)
  componentWillMount() {
    console.log('componentWillMount')
  }

  render() {
    console.log('parent render')
    return (
      <Fragment>
        <div>
          <input
            className='pp'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(insertArea) => {this.insertArea1 = insertArea}}
          />
          {/*<input*/}
          {/*  className='pptt'*/}
          {/*  value={this.state.inputValue}*/}
          {/*  onChange={this.handleInputChanges}*/}
          {/*  ref={(insertArea) => {this.insertArea = insertArea}}*/}
          {/*/>*/}
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  // 组件被挂载到页面后自动执行(只会执行一次)
  componentDidMount() {
    console.log('componentDidMount')
  }

  // 组件被更新之前，它会自动执行
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate')
    return true;
  }

  // 组件被更新之前，它会自动执行，在shouldComponentUpdate只会执行；
  // 如果shouldComponentUpdate返回true，才会执行；
  // 如果shouldComponentUpdate返回false，不会执行；
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('componentWillUpdate')
  }

  // 组件更新以后执行
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div
          key={index}
        >
          <TodoItem
            content={item}
            index={index}
            deleteItem={this.handleBtnDelete}
          />
        </div>
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  // handleInputChanges = (e) => {
  //   console.log(this.insertArea)
  // }

  handleBtnClick(e) {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleBtnDelete(index) {
    console.log(index)
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }
}

export default TodoList