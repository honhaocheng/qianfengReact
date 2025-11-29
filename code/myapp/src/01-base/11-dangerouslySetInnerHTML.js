import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myhtml: `
      <div>
        <h1>你好，我叫<span style="color: red">uason</span></h1>
        <p>是一名前端开发程序员</p>
      </div>
    `
  }
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{
          __html: this.state.myhtml
        }}></div>
      </div>
    )
  }
}
