import React, { Component } from 'react'
import './css/04-clear.css'
export default class App extends Component {
  state = {
    list: [1,2,3,4,5,6,7,8,9]
  }
  myref = React.createRef()
  getSnapshotBeforeUpdate() {
    // 获取容器高度
    console.log(this.myref.current.scrollHeight)
    console.log(this.myref.current.scrollTop)
    return {
      startHeight: this.myref.current.scrollHeight,
      startTop: this.myref.current.scrollTop
    }
  }
  componentDidUpdate(prevProps, prevState, obj) {
    console.log(this.myref.current.scrollHeight)
    console.log(this.myref.current.scrollTop)
    console.log('obj', obj)
    this.myref.current.scrollTop = this.myref.current.scrollHeight - obj.startHeight + obj.startTop
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            list: [...[11,12,13,14,15,16,17,18,19], ...this.state.list]
          })
        }}>来邮件</button>
        <h1>邮箱应用</h1>
        <div style={{height: '200px', overflow: 'auto'}} ref={this.myref}>
          <ul>
            {
              this.state.list.map(item => <li style={{height: '100px', background: 'yellow'}} key={item}>{item}</li>)
            }
          </ul>
        </div>
      </div>
    )
  }
}
