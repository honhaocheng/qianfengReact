import React, {useState} from 'react'
import { connect } from 'react-redux'

function City(props) {
  console.log(props)
  const [list] = useState(['北京','上海','深圳','广州'])
  return (
    <div>
      City
      {
        list.map(item => <li key={item} onClick={() => {
          props.change(item)
          // props.history.push(`/cinemas`)
          // 退回到上一页面
          props.history.goBack()
        }}>{item}</li>)
      }
    </div>
  )
}
// 将dispatch这个方法映射到属性
const mapDispatchToProps = {
  change(item) {
    return {
      type: 'change-city',
      payload: item
    }
  }
}
export default connect(null, mapDispatchToProps)(City)