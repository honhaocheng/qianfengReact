import React, {useEffect, useState, useMemo} from 'react'
import {store} from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import { SearchBar } from 'antd-mobile'

export default function Search() {
  const [mytext, setmytext] = useState('')
  const [cinemaList, setCinemaList] = useState(store.getState().CinemaListCityReducer.list)
  useEffect(() => {
    if (store.getState().CinemaListCityReducer.list.length === 0) {
      // 去后台取数据
      // actionCreator 里写异步
      store.dispatch(getCinemaListAction())
    } else {
      console.log('store 缓存')
    }
    // 订阅，会返回一个取消订阅的函数
    const unsubscribe = store.subscribe(() => {
      console.log('cinema 中订阅', store.getState().CinemaListCityReducer.list)
      setCinemaList(store.getState().CinemaListCityReducer.list)
    })
    return () => {
      // 取消订阅？
      unsubscribe()
    }
  }, [])

  // useMemo和useCallback的用法几乎一致，但useMemo更加灵活，此处的用法相当于vue中的计算属性
  const getCinemaList = useMemo(() => cinemaList.filter(item => 
    item.name.toUpperCase().includes(mytext.toUpperCase()) ||
    item.address.toUpperCase().includes(mytext.toUpperCase())
  ), [cinemaList, mytext])

  return (
    <div>
      {/* <input onChange={(evt) => {
        setmytext(evt.target.value)
      }} value={mytext} /> */}
      <div style={{padding: '10px'}}>
        <SearchBar 
          placeholder='请输入内容' 
          showCancelButton={() => true} 
          onChange={(value) => {
            setmytext(value)
          }} 
          value={mytext}
        />
      </div>
      {
        getCinemaList.map(item =>
          <dl key={item.cinemaId} style={{padding: '10px'}}>
            <dt>{item.name}</dt>
            <dd style={{fontSize: '12px', color: 'gray'}}>{item.address}</dd>
          </dl>
        )
      }
    </div>
  )
}
