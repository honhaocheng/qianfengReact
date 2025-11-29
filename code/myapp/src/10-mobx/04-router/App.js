import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
// import {autorun, observe} from 'mobx'
// import store from './mobx/store'
import {inject, observer} from 'mobx-react'
// 构建一个 父组件 -高阶组件mobx-react
// 使用inject注入这个store到props
@inject('store')
// 使用observer高阶组件将App包裹（构建当前组件的高阶组件父组件）
@observer
class App extends Component {
  // store.subscribe 订阅
  // state = {
  //   isShow: false
  // }
  componentDidMount() { 
    // autorun(() => {
    //   console.log(store.isTabbarShow)
    //   this.setState({
    //     isShow: store.isTabbarShow
    //   })
    // })
    // console.log(this.props.store.isTabbarShow)
   }
  render() {
    return (
      <div>
        {/* 其他的内容 */}
        <MRouter>
          {this.props.store.isTabbarShow && <Tabbar/>}
        </MRouter>
      </div>
    )
  }
}

export default App
/* 
  /films ===> Films
  /cinemas ===> Cinemas
  /center ===> Center
*/