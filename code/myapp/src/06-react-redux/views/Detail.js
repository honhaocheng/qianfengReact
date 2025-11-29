import React, { useEffect } from 'react'
import { hide, show } from '../redux/actionCreator/TabbarActionCreator'
import {connect} from 'react-redux'
function Detail(props) {
  // 有时候会更新1次到2次，因为它要确保一下数据是否已经更新完了，所以有时候会执行多于1次，所以axios不能放在这个位置
  // console.log(props.location.query?.myid, '利用id去后端拿数据。')
  // console.log(props.location.state?.myid, '利用id去后端拿数据。')
  console.log('props', props)
  const {match, hide, show} = props
  useEffect(() => {
    // console.log('create')
    console.log(match.params.myid, '利用id去后端拿数据。')
    // store.dispatch 通知
    // store.dispatch(hide())
    hide()
    return () => {
      console.log('destory')
      // store.dispatch(show())
      show()
    }
  }, [match.params.myid, show, hide])
  return (
    <div>Detail</div>
  )
}
// 将dispatch这个方法映射到属性
const mapDispatchToProps = {
  show,
  hide
}
// connect组件会帮忙dispatch这个action
// connect(将来给孩子传的属性, 将来给孩子传的回调函数)
// connect的功能就是把我们的UI组件变成了一个容器组件
export default connect(null, mapDispatchToProps)(Detail)