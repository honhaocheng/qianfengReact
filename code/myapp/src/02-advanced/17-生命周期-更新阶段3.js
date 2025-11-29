import React, { Component } from 'react'

class Child extends Component {
  state = {
    title: ''
  }
  render() {
    console.log('child render')
    return (
      <div>Child-{this.state.title}</div>
    )
  }
  // 子组件这个生命周期才有意义
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', this.props.text) // 旧的属性
    console.log('nextProps', nextProps) // 新的属性
    // 最先获得父组件传来的属性，可以利用属性进行Ajax或者逻辑处理
    // 把属性转化成孩子自己的状态
    this.setState({
      title: nextProps.text + 'kerwin'
    })
  }
}

export default class App extends Component {
  state = {
    text: '111111111'
  }
  render() {
    return (
      <div>
        {this.state.text}
        <button onClick={() => {
          this.setState({
            text: '222222222'
          })
        }}>click</button>
        <Child text={this.state.text}/>
      </div>
    )
  }
}
