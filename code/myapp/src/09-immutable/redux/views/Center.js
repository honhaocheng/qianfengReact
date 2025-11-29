import React from 'react'
import { withRouter } from 'react-router-dom'

function Center(props) {
  return (
    <div>
      Center
      <div onClick={() => {
        props.history.push(`/filmsorder`)
        console.log(props)
      }}>电影订单</div>
    </div>
  )
}
export default withRouter(Center)
// 下面这就是一段对于Route组件一串非常简单的一个源码上的解析
// class Route extends Component {
//   ...
//   render() {
//     var MyComponent = this.props.component
//     return <div>
//       <MyComponent history={} match={} .../>
//     </div>
//   }
// }