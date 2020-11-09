import React from "react";
import { connect } from "react-redux";
import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'

const TodoList = (props) => {
  const { inputValue, changeInputValue, handleClick, list, handleDelete } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue}/>
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
              return (
                <li onClick={() => {handleDelete(index)}} key={index}>{item}</li>
              )
            }
          )
        }
      </ul>
    </div>
  )
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
        type: CHANGE_INPUT_VALUE,
        value: e.target.value
      };
      dispatch(action);
    },
    handleClick() {
      const action = {
        type: ADD_ITEM
      };
      dispatch(action)
    },
    handleDelete(index) {
      console.log(index)
      const action = {
        type: DELETE_ITEM,
        index: index
      }
      dispatch(action)
    }
  }
}

// connect的意思就是连接展示组件与容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);