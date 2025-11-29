import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 1
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleAdd1}>add1</button>
        <button onClick={this.handleAdd2}>add2</button>
      </div>
    )
  }
  // handleAdd1 = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  //   console.log(this.state.count);
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  //   console.log(this.state.count);
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  //   console.log(this.state.count);
  // }
  handleAdd1 = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count);
    })
    
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count);
    })
    
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count);
      // 状态和真实dom已经更新完了
    })
    
  }
  handleAdd2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count);
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count);
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count);
    }, 0)
  }
}
/*
  setState处在同步的逻辑中，异步更新状态，更新真实dom
  setState处在异步的逻辑中，同步更新状态，同步更新真实dom（此处和视频讲的不一致，在当前版本react中不管是否是在异步逻辑中，结果都和在同步中的逻辑结果一样）
*/

/*
  setState 接受第二个参数，第二个参数式回调函数，状态和dom更新完后就会被触发
*/