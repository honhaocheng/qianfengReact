import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {
  constructor() {
    super()

    this.state = {
      cinemaList: [],
      mytext: ''
      // bakcinemaList: []
    }
    
    // axios 第三方的库，专门用于请求数据
    // axios.get("请求地址").then(res => {}).catch(err => console.log(err))
    // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6827298").then(res => {
    //   console.log('res', res);
    // }).catch(err => console.log(err))
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6827298',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17166198764757367770054657"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
        console.log('res.data.data.cinemas', res.data.data.cinemas);
        this.setState({
          cinemaList: res.data.data.cinemas,
          // bakcinemaList: res.data.data.cinemas
        })
        console.log('this.state.cinemaList', this.state.cinemaList);
    }).catch(err => console.log(err))
  }
  // 后面讲的生命周期函数，更适合发送ajax
  render() {
    return (
      <div>
        <input onChange={(evt) => {
          this.setState({
            mytext: evt.target.value
          })
        }} value={this.state.mytext} />
        {
          this.getCinemaList().map(item =>
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>
          )
        }
      </div>
    )
  }
  getCinemaList = () => {
    return this.state.cinemaList.filter(item => 
      item.name.toUpperCase().includes(this.state.mytext.toUpperCase()) ||
      item.address.toUpperCase().includes(this.state.mytext.toUpperCase())
    )
  }
}