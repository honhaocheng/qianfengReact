import React, {useEffect, useState} from 'react'
import store from '../redux/store';
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction';

export default function Cinemas(props) {
  const [cityName] = useState(store.getState().CityReducer.cityName)
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
  return (
    <div>
      <div style={{overflow: 'hidden'}}>
        <div onClick={() => {
          props.history.push(`/city`)
        }} style={{float: 'left'}}>{cityName}</div>
        <div onClick={() => {
          props.history.push(`/cinemas/search`)
        }} style={{float: 'right'}}>搜索</div>
      </div>
      {
        cinemaList.map(item =>
          <dl key={item.cinemaId} style={{padding: '10px'}}>
            <dt>{item.name}</dt>
            <dd style={{fontSize: '12px', color: 'gray'}}>{item.address}</dd>
          </dl>
        )
      }
    </div>
  )
}
