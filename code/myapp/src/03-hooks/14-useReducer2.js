import React, {useContext, useReducer} from 'react'
// 外部的对象
const intialState = {
  a: '1111',
  b: '1111'
}
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
    case 'change-a':
      newState.a = action.value
      // 返回newState后导致App组件重新渲染，state再次往我们的App里面的孩子进行传
      return newState
    case 'change-b':
      newState.b = action.value
      return newState
    default:
      return prevState
  }
}

const GlobalContext = React.createContext()  // 创建context对象
export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <GlobalContext.Provider value={
      {
        state,
        dispatch
      }
    }>
      <div>
        <Child1/>
        <Child2/>
        <Child3/>
      </div>
    </GlobalContext.Provider>
  )
}

function Child1() {
  const {dispatch} = useContext(GlobalContext)
  return <div style={{background: 'red'}}>
    <button onClick={() => {
      dispatch({
        type: 'change-a',
        value: '222222'
      })
    }}>改变a</button>
    <button onClick={() => {
      dispatch({
        type: 'change-b',
        value: '333333'
      })
    }}>改变b</button>
  </div>
}

function Child2() {
  const {state} = useContext(GlobalContext)
  return <div style={{background: 'yellow'}}>
    Child2-{state.a}
  </div>
}

function Child3() {
  const {state} = useContext(GlobalContext)
  return <div style={{background: 'gray'}}>
    Child3-{state.b}
  </div>
}