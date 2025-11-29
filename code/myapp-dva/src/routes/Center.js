import React, { Component } from 'react'
import { withRouter } from 'dva/router'
import request from '../utils/request';

export default class Center extends Component {
  render() {
    return (
      <div>
        Center
        <WithChild/>
      </div>
    )
  }
}

class Child extends Component {
  componentDidMount() { 
    request('/api/mmdb/movie/v3/list/hot.json?ct=%E6%B7%B1%E5%9C%B3&ci=30&channelId=4').then(res => {
      console.log(`res`, res)
    })

    request('/users').then(res => {
      console.log(`res123`, res.data)
    })
    
   }
  render() {
    return (
      <div>
        <button onClick={() => {
          console.log(this.props)
          localStorage.removeItem("token")
          this.props.history.push(`/login`)
        }}>退出登录</button>
      </div>
    )
  }
}

const WithChild = withRouter(Child)