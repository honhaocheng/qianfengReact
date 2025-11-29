import React, { useEffect } from 'react'
import store from '../redux/store'
import { hide, show } from '../redux/actionCreator/TabbarActionCreator'

export default function Detail(props) {
  // 有时候会更新1次到2次，因为它要确保一下数据是否已经更新完了，所以有时候会执行多于1次，所以axios不能放在这个位置
  // console.log(props.location.query?.myid, '利用id去后端拿数据。')
  // console.log(props.location.state?.myid, '利用id去后端拿数据。')
  useEffect(() => {
    // console.log('create')
    console.log(props.match.params.myid, '利用id去后端拿数据。')
    // store.dispatch 通知
    store.dispatch(hide())
    return () => {
      console.log('destory')
      store.dispatch(show())
    }
  }, [])
  return (
    <div>Detail</div>
  )
}
