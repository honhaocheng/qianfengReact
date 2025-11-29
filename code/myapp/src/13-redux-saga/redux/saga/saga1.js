import {call,put, takeEvery} from 'redux-saga/effects'
function *watchSaga1() {
    // while (true) {
    //     // take 监听 组件发来的action
    //     yield take("get-list1")
    //     // fork 非阻塞调用的形式执行fn（getList1）
    //     yield fork(getList1)
    // }

    yield takeEvery("get-list1", getList1)
}

function *getList1() {
    // 异步处理的，
    // call函数发异步请求
    let res = yield call(getListAction1) // 阻塞的调用fn（getListAction1）
    yield put({
        type: "change-list1",
        payload: res
    })
    // put函数发出新的action
}

function getListAction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['1111', '2222', '3333']) 
        }, 2000)
    })
}

export default watchSaga1;
export {
    getList1
}