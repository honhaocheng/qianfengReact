import React, { Component } from 'react'
import './css/01-index.css' //导入css模块，webpack的支持

export default class App extends Component {
  render() {
    var myname = 'kerwin'
    var obj = {
      backgroundColor: 'yellow',
      fontSize: '30px'
    }
    return (
      <div>
        {10+20}-{myname}
        {10>20?'aaa':'bbb'}
        <div style={obj}>111111111111</div>
        <div style={{background: 'red'}}>2222222222</div>
        {/* React推荐我们使用行内样式，因为React觉得每一个组件都是一个独立的整体 */}
        <div className="active">333333333</div>
        <div id="myapp">5555555555</div>
        <label htmlFor="username">用户名：</label>
        <input type="text" id="username" />
      </div>
    )
  }
}
