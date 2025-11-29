import React, { Component } from 'react'
import KSwiper from './swiper/Swiper'
import KSwiperItem from './swiper/SwiperItem'
import axios from 'axios'
export default class App extends Component {
  state = {
    list: []
  }
  componentDidMount() { 
    // setTimeout(() => {
    //   this.setState({
    //     list: ['aaa', 'bbb', 'ccc', 'ddd']
    //   })
    // }, 1000)
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9881647',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17160383014443989776269313","bc":"110100"}',
        'X-Host':'mall.film-ticket.film.list'
      }
    }).then(res => {
        console.log('res.data.data.films', res.data.data.films)
        // 由于原网址接口数据为空，只能利用以前的接口数据重新包装一下模拟该接口数据
        const mapList = res.data.data.films.slice(0, 3).map(item => ({
          bannerId: item.filmId,
          name: item.name,
          imgUrl: item.poster
        }))
        console.log('mapList', mapList)
        this.setState({
          list: mapList
        })
    }).catch(err => console.log(err))
   }
  render() {
    return (
      <div>
        <KSwiper loop={false}>
          {/* <div className="swiper-slide">111</div> */}
          {
            this.state.list.map(item => 
              <KSwiperItem key={item.bannerId}>
                <img src={item.imgUrl} alt={item.name} style={{width: '100%'}}/>
              </KSwiperItem>
            )
          }
        </KSwiper>
      </div>
    )
  }
}
