import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return (
                <li onClick={this.props.handleDelete} key={index}>{item}</li>
                )
              }
            )
          }
        </ul>
      </div>
    )
  }
}

// 负责将通过state获得的数据映射到展示组件的this.props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch
// 负责将用户操作转化为Action的功能函数映射到展示组件的this.props
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      };
      dispatch(action);
    },
    handleClick() {
      const action = {
        type: 'add_item'
      };
      dispatch(action)
    },
    handleDelete(index) {
      console.log(index)
    }
  }
}

// connect的意思就是连接展示组件与容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);