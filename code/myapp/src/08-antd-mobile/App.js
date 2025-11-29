import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
// import store from './redux/store'
// react-redux必须依赖于redux来工作
import {connect} from 'react-redux'
// import { Button } from 'antd-mobile'
import './util/request'

class App extends Component {
  componentDidMount() {
    console.log('this.props', this.props)
  }
  render() {
    return (
      <div>
        {/* <Button color='danger'>click</Button> */}
        {/* 其他的内容 */}
        <MRouter>
          {this.props.isShow && <Tabbar/>}
        </MRouter>
      </div>
    )
  }
}
// 映射我们的状态到属性
const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    a: 1,
    b: 1,
    isShow: state.TabbarReducer.show
  }
}
// 高阶组件：就是我们一个低阶组件经过我们的高阶函数处理生成的高阶组件，你也可以认为是一个能力不太强的组件经过我们这个高阶函数处理完之后，它变成了一个能力特别强的一个组件了
// connect()的返回值是一个函数
// connect会自动进行订阅和取消订阅，connect中的回调函数执行了，并把a、b、isShow这两个属性传给App
// 如果isShow发生了改变，connect作为包装组件订阅到了以后会立即给子组件App再传一遍，App再次得到新的属性
export default connect(mapStateToProps)(App)

// withRouter(FileItem)

/* 
  /films ===> Films
  /cinemas ===> Cinemas
  /center ===> Center
*/