import React, { Component } from 'react'

import './css/02-maizuo.css'
import Film from './maizuocomponent2/Film'
import Cinema from './maizuocomponent2/Cinema'
import Center from './maizuocomponent2/Center'
import Tabbar from './maizuocomponent2/Tabbar'
import Navbar from './maizuocomponent2/Navbar'

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: '电影'
      },
      {
        id: 2,
        text: '影院'
      },
      {
        id: 3,
        text: '我的'
      },
    ],
    current: 0
  }
  which() {
    switch (this.state.current) {
      case 0:
        return <Film></Film>
      case 1:
        return <Cinema></Cinema>
      case 2:
        return <Center></Center>
      default:
        return null
    }
  }
  render() {
    return (
      <div>
        <Navbar myevent={() => {
          console.log('navbar-center','告诉tabbar去切换到center组件，高亮？')
          this.setState({
            current: 2
          })
        }}/>
        {/* {this.state.current === 0 && <Film></Film>}
        {this.state.current === 1 && <Cinema></Cinema>}
        {this.state.current === 2 && <Center></Center>} */}
        {
          // 表达式--支持函数表达式
          this.which()
        }
        <Tabbar 
        myevent={(index) => {
          console.log('父组件定义')
          this.setState({
            current: index
          })
        }}
        current={this.state.current}
        list={this.state.list}
        />
      </div>
    )
  }
}
