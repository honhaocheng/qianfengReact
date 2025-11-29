import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myname: 'keywin'
  }
  // 报警告的写法：componentWillMount
  UNSAFE_componentWillMount() { // 不报警告的写法
    // 将要把我们的状态挂载到我们真实的dom中，开始准备渲染dom
    console.log('第一次will mount',this.state.myname, document.getElementById('myname'))
    // 第一次上树前的 最后一次修改状态机会
    this.setState({
      myname: 'Kerwin'
    })
    // 初始化数据的作用
  }
  componentDidMount() {
    // 已经渲染完了，你可以在这里面拿到真实的dom节点
    console.log('第一次did mount', document.getElementById('myname'))
    // 数据请求axios
    // 订阅函数调用
    // setInterval
    // 基于创建完的dom进行初始化，，，，BetterScroll
  }
  render() {
    // 正在开始渲染
    console.log('render')
    return (
      <div>
        <span id="myname">{this.state.myname}</span>
      </div>
    )
  }
}
