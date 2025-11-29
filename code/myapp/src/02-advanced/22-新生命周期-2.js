import React, { Component } from 'react'

export default class App extends Component {
  state = {
    mytext: '1111111'
  }
  render() {
    console.log('render')
    return (
      <div>
        app
        <button onClick={() => {
          this.setState({
            mytext: '222222'
          })
        }}>click</button>
        {this.state.mytext}
      </div>
    )
  }
  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }
  componentDidUpdate(prevProps, prevState, value) {
    console.log('componentDidUpdate', value)
  }
  // 用来替代componentWillUpdate，在render之后执行，上树前进行最后一次快照，非常准确
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    return 100
  }
}
