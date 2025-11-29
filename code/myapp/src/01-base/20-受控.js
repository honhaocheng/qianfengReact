import React, { Component } from 'react'

export default class App extends Component {
  state = {
    username: 'kerwin'
  }
  render() {
    return (
      <div>
        <h1>登录页</h1>
        <input type="text" value={this.state.username} onChange={(e) => {
          // console.log('onChange', e.target.value)
          this.setState({
            username: e.target.value
          })
        }}/>
        <button onClick={() => {
          console.log('username', this.state.username)
        }}>登录</button>
        <button onClick={() => {
          this.setState({
            username: ''
          })
        }}>重置</button>
        {/* <Child myvalue={this.state.username} /> */}
      </div>
    )
  }
}
