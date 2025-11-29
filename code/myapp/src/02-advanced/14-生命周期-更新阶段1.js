import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class App extends Component {
  state = {
    myname: 'kerwin',
    list: []
  }

  componentDidMount() {
    axios.get('/test.json').then(res => {
      console.log(res.data.data.films)
      this.setState({
        list: res.data.data.films
      })
    })
  }

  render() {
    console.log('render')
    return (
      <div>
        <button onClick={() => {
          this.setState({
            myname: 'tiechui'
          })
        }}>click</button>
        <span id="myname">{this.state.myname}</span>
        <div id="wrapper" style={{height: '100px', background: 'yellow', overflow: 'hidden'}}>
          <ul>
            {
              this.state.list.map(item => {
                return <li key={item.filmId}>{item.name}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
  // 报警告的写法：componentWillUpdate
  UNSAFE_componentWillUpdate() { // 不报警告的写法
    console.log('componentWillUpdate', document.getElementById("myname").innerHTML, this.state.myname)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', document.getElementById("myname").innerHTML, this.state.myname)
    // 更新后，想要获取dom节点，更新
    console.log('prevState.list', prevState.list)
    if (prevState.list.length === 0) {
      new BetterScroll('#wrapper')
    }
  }
}
