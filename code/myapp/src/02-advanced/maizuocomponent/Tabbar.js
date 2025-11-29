import React, { Component } from 'react'

export default class Tabbar extends Component {
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
    current: this.props.defaultValue
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((item, index) => 
              <li 
                className={this.state.current === index ? 'active' : ''} 
                key={item.id} 
                onClick={() => this.handleClick(index)}>{item.text}</li>
            )
          }
        </ul>
      </div>
    )
  }
  handleClick(index) {
    console.log('index', index);
    this.setState({
      current: index
    })
    // 通知一下父组件，该修改父组件那个状态了
    this.props.myevent(index)
  }
}
