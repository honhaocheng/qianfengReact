import React, { Component } from 'react'
import Navbar from './Navbar'
export default class App extends Component {
  render() {
    var obj = {
      title: '首页',
      leftShow: false
    }
    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navbar title="首页" leftShow={false} />
        </div>
        <div>
          <h2>列表</h2>
          <Navbar title="列表"/>
        </div>
        <div>
          <h2>购物车</h2>
          <Navbar title="购物车"/>
        </div>
        <Navbar title={obj.title} leftShow={obj.leftShow}/>
        <Navbar {...obj}/>
      </div>
    )
  }
}
