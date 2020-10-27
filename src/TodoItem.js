import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }


  render() {
    console.log('child render')
    const { content } = this.props
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    )
  }

  // 从父组件接收参数
  // 只要父组件的render函数被执行了，子组件的这个生命周期函数就会被执行
  // 如果这个组件第一次存在于父组件中，不会执行
  // 如果这个组件之前已经存在于父组件中，才会执行
  componentWillReceiveProps(nextProps, nextContext) {
    console.log('child componentWillReceiveProps')
  }

  // 当这个组件即将被从页面中剔除的时候，会被执行
  componentWillUnmount() {
    console.log('child componentWillUnmount')
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'sssss'
}

export default TodoItem