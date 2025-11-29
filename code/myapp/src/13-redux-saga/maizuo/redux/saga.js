import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

function *watchSaga() {
  yield takeEvery("get-cinemalist", getCinemalist)
}

function *getCinemalist() {
  // 异步处理的，
  // call函数发异步请求
  let res = yield call(getListAction) // 阻塞的调用fn（getListAction）
  yield put({
      type: "change-cinemalist",
      payload: res
  })
  // put函数发出新的action
}

function getListAction() {
  return axios({
    url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6827298',
    method: 'get',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17166198764757367770054657"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  }).then(res => {
    // console.log('res.data.data.cinemas', res.data.data.cinemas);
    return res.data.data.cinemas;
  })
}

export default watchSaga;