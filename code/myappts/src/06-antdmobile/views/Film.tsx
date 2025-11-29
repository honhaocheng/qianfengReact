import React, { Component } from 'react'
import axios from 'axios'
import { RouteComponentProps } from 'react-router-dom'
import { Button, Swiper, Image } from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'

interface IItem {
  filmId: number,
  name: string
}

export default class Film extends Component<RouteComponentProps, any> {
  state = {
    list: [],
    looplist: []
  }

  ref = React.createRef<SwiperRef>()

  componentDidMount() {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8109129",
      headers: {
        'x-client-info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1732341005108645492719617"}',
        'x-host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      this.setState({
        list: res.data.data.films
      })
    })
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9881647",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"17160383014443989776269313","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    })
      .then((res) => {
        console.log("res.data.data.films", res.data.data.films);
        // 由于原网址接口数据为空，只能利用以前的接口数据重新包装一下模拟该接口数据
        const mapList = res.data.data.films.slice(0, 4).map((item:any) => ({
          bannerId: item.filmId,
          name: item.name,
          imgUrl: item.poster,
        }));
        console.log("mapList", mapList);
        this.setState({
          looplist: mapList
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Swiper loop autoplay ref={this.ref}>
          {
            this.state.looplist.map((item:any) => 
              <Swiper.Item key={item.bannerId}>
                {/* <img src={item.imgUrl} alt="图片" style={{width: '100%'}}/> */}
                <Image
                  src={item.imgUrl}
                  fit="cover"
                  style={{ width: "100%", height: "200px" }}
                />
              </Swiper.Item>
            )
          }
        </Swiper>
        <Button color="danger" onClick={() => {
          this.ref.current?.swipePrev()
        }}>上一个</Button>
        <Button color="primary" onClick={() => {
          (this.ref.current as SwiperRef).swipeNext()
        }}>下一个</Button>
        <ul>
            {
              this.state.list.map((item:IItem) => (
                <li key={item.filmId} onClick={() => {
                  this.props.history.push(`/detail/${item.filmId}`)
                }}>{item.name}</li>
              ))
            }
        </ul>
      </div>
    )
  }
}
