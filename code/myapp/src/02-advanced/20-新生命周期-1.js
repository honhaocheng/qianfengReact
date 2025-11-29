import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myname: 'kerwin',
    myage: 100
  }
  // componentWillMount 初始化
  static getDerivedStateFromProps(nextProps, nextState) { // 初始化、调用setState、父传子都会执行
    console.log('getDerivedStateFromProps')
    console.log('nextProps', nextProps)
    console.log('nextState', nextState)
    return {
      myname: nextState.myname.substring(0, 1).toUpperCase() + nextState.myname.substring(1)
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            myname: 'xiaoming'
          })
        }}>click</button>
        App - {this.state.myname} - {this.state.myage}
      </div>
    )
  }
}
