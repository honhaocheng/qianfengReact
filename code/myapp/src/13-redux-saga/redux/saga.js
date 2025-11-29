/*
import {take,fork,call,put} from 'redux-saga/effects'
function *watchSaga() {
    while (true) {
        // take 监听 组件发来的action
        yield take("get-list")
        // fork 非阻塞调用的形式执行fn（getList）
        yield fork(getList)
    }
}

function *getList() {
    // 异步处理的，
    // call函数发异步请求
    let res = yield call(getListAction) // 阻塞的调用fn（getListAction）
    yield put({
        type: "change-list",
        payload: res
    })
    // put函数发出新的action
}

function getListAction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['1111', '2222', '3333']) 
        }, 2000)
    })
}

export default watchSaga;
*/
// 将多个saga进行聚合
import {all} from 'redux-saga/effects'
import watchSaga1 from './saga/saga1'
import watchSaga2 from './saga/saga2'

function *watchSaga() {
    yield all([watchSaga1(), watchSaga2()])
}

export default watchSaga