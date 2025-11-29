import React, { Component } from 'react'
import axios from 'axios'
import { RouteComponentProps } from 'react-router-dom'

interface IItem {
  filmId: number,
  name: string
}

export default class Film extends Component<RouteComponentProps, any> {
  state = {
    list: []
  }
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
  }

  render() {
    return (
      <div>
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
