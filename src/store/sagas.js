import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from "./actionTypes"
import axios from 'axios'
import {initListAction} from "./actionCreators";

function* getInitList() {
  try {
    const res = yield axios.get('/list.json');
    const action = initListAction(res.data);
    yield put(action)
  } catch (e) {
    console.log('list.json网络请求失败')
  }
}

// generator函数
// redux-saga监控到type为GET_INIT_LIST的action时，执行getInitList方法
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;