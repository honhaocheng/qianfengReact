import React, { useReducer } from 'react'
/**
 * @desc 处理函数
 * @param prevState 老的状态
 * @param action 相关action动作
 * @date 2024/06/27 00:31:08
 * @author honhaocheng
 */
const reducer = (prevState, action) => {
  console.log('reducer', prevState, action)
  const newState = {...prevState}
  switch (action.type) {
    case 'kerwin-minus':
      newState.count--
      return newState
    case 'kerwin-add':
      newState.count++
      return newState
    default:
      return prevState
  }
}
// 外部的对象
const intialState = {
  count: 0,
  // list: []
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <div>
      <button onClick={() => {
        // dispatch相当于发了个通知，通知reducer根据类型的不同进行相应的操作
        dispatch({
          type: 'kerwin-minus'
        })
      }}>-</button>
      {state.count}
      <button onClick={() => {
        dispatch({
          type: 'kerwin-add'
        })
      }}>+</button>
    </div>
  )
}
