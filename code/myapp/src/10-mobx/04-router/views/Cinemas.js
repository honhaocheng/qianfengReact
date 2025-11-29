import React, {useEffect} from 'react'
import store from '../mobx/store'
import { autorun } from 'mobx'
// 此处的Observer可以自动订阅（autorun，也就是数据有变化自动执行回调函数更新页面）和取消订阅
import {Observer} from 'mobx-react'


export default function Cinemas(props) {
  // const [cityName] = useState("")
  // const [cinemaList, setCinemaList] = useState([])
  useEffect(() => {
    if (store.list.length === 0) {
      store.getList()
    }
    // 返回一个取消订阅的函数
    // const unsubscribe = autorun(() => {
    //   console.log(store.list, store.isTabbarShow)
    //   setCinemaList(store.list)
    // })
    return () => {
      // 取消订阅？
      // unsubscribe()
    }
  }, [])
  return (
    <div>
      <Observer>
        {
          () => {
            return store.list.map(item =>
              <dl key={item.cinemaId} style={{padding: '10px'}}>
                <dt>{item.name}</dt>
                <dd style={{fontSize: '12px', color: 'gray'}}>{item.address}</dd>
              </dl>
            )
          }
        }
      </Observer>
    </div>
  )
}
