import React, { useEffect, useContext, useReducer } from 'react'
import axios from 'axios'
import './css/index.css'
// 外部的对象
const intialState = {
  info: '',
  filmList: []
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
    case 'change-info':
      newState.info = action.value
      // 返回newState后导致App组件重新渲染，state再次往我们的App里面的孩子进行传
      return newState
    case 'change-filmlist':
      newState.filmList = action.value
      return newState
    default:
      return prevState
  }
}

const GlobalContext = React.createContext()  // 创建context对象

export default function App() {
  // useReducer异步无法处理
  const [state, dispatch] = useReducer(reducer, intialState)
  useEffect(() => {
    axios.get(`/test.json`).then(res => {
      // console.log('filmList', res.data.data.films)
      dispatch({
        type: 'change-filmlist',
        value: res.data.data.films
      })
    })
  }, [])
  return (
    <GlobalContext.Provider value={{
      state,
      dispatch
    }}>
      <div>
        {
          state.filmList.map(item => <FilmItem key={item.filmId} {...item} />)
        }
        <FilmDetail/>
      </div>
    </GlobalContext.Provider>
  )
}

// 受控组件
function FilmItem(props) {
  let {name, poster, grade, synopsis} = props
  const {dispatch} = useContext(GlobalContext)
  return (
    <div className='filmitem' onClick={() => {
      dispatch({
        type: 'change-info',
        value: synopsis
      })
    }}>
      <img src={poster} alt={name} />
      <h4>{name}</h4>
      <div>观众评分：{grade}</div>
    </div>
  )
}

function FilmDetail() {
  const {state} = useContext(GlobalContext)
  return (
    <div className='filmdetail'>
      filmdetail-{state.info}
    </div>
  )
}