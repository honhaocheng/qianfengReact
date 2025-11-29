// 1. 引入redux
// 2. createStore( reducer )
import {applyMiddleware, combineReducers,createStore, compose } from 'redux'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListCityReducer from './reducers/CinemaListCityReducer'
import { thunk } from 'redux-thunk'
import reduxPromise from 'redux-promise'
import createSagaMiddleware from 'redux-saga'
import watchSaga from './saga'
// 合并子reducer
const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListCityReducer
})
/* 
// 修改数据后，更改后的state数据存在内存中，刷新会丢失
const reducer = (prevState = {
  show: true,
  cityName: '北京'
}, action) => {
  console.log('prevState', prevState, 'action', action)
  const newState = {...prevState}
  switch (action.type) {
    case 'kerwinhide-tabbar':
      newState.show = false
      return newState
    case 'kerwinshow-tabbar':
      newState.show = true
      return newState
    case 'change-city':
      newState.cityName = action.payload
      return newState
    default:
      return prevState
  }
} 
  */
// 参考：https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store  = createStore(reducer, composeEnhancers(applyMiddleware(thunk, reduxPromise, sagaMiddleware)));

sagaMiddleware.run(watchSaga);
/* 
  store.dispatch
  store.subscribe
  store.getState
*/
// 简易源码分析和实现（订阅发布者模式）
// function createKerwinStore(reducer) {
//   var list = []
//   var state = reducer(undefined, {})
//   function subscribe(callback) {
//     list.push(callback)
//   }
//   function dispatch(action) {
//     state = reducer(state, action)
//     for (var i in list) {
//       list[i] && list[i]()
//     }
//   }
//   function getState() {
//     return state
//   }
//   return {
//     subscribe,
//     dispatch,
//     getState
//   }
// }
export default store

/* 
var obj = {
  myname: 'kerwin'
}
function test(obj2) {
  var newobj = {...obj2}
  newobj.myname = 'xiaoming'
  return newobj
}
test(obj) 

纯函数：
1、对外界没有副作用
2、同样的输入得到同样的输出
*/