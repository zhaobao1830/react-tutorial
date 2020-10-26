import React, { Component, Fragment } from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      inputValue1: '',
      list: ['学英语', '学语文']
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleInputChanges = this.handleInputChanges.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleBtnDelete = this.handleBtnDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            className='pp'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(insertArea) => {this.insertArea1 = insertArea}}
          />
          <input
            className='pptt'
            value={this.state.inputValue}
            onChange={this.handleInputChanges}
            ref={(insertArea) => {this.insertArea = insertArea}}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
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
    console.log(this.insertArea1)
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  // handleInputChanges(e) {
  //   console.log(this.insertArea)
  //   const value = e.target.value
  //   this.setState(() => ({
  //     inputValue: value
  //   }))
  // }

  handleInputChanges = (e) => {
    console.log(this.insertArea)
  }

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