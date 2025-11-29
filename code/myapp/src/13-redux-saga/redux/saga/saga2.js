import {call,put, takeEvery} from 'redux-saga/effects'
function *watchSaga2() {
    // while (true) {
    //     // take 监听 组件发来的action
    //     yield take("get-list2")
    //     // fork 非阻塞调用的形式执行fn（getList2）
    //     yield fork(getList2)
    // }
    
    yield takeEvery("get-list2", getList2)
}

function *getList2() {
    // 异步处理的，
    // call函数发异步请求
    let res1 = yield call(getListAction2_1) // 阻塞的调用fn（getListAction2）
    let res2 = yield call(getListAction2_2, res1) // 阻塞的调用fn（getListAction2）
    yield put({
        type: "change-list2",
        payload: res2
    })
    // put函数发出新的action
}

function getListAction2_1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['4444', '5555', '6666']) 
        }, 2000)
    })
}

function getListAction2_2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([...data, '7777', '8888', '9999']) 
        }, 2000)
    })
}

export default watchSaga2;
export {
    getList2
}