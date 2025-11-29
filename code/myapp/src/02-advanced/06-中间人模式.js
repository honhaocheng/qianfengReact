import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communication.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      filmList: [],
      info: ''
    }
    // axios.get(`/test.json`).then(res => {
    //   console.log('filmList', res.data.data.films)
    //   this.setState({
    //     filmList: res.data.data.films
    //   })
    // })
  }
  componentDidMount() {
    axios.get(`/test.json`).then(res => {
      console.log('filmList', res.data.data.films)
      this.setState({
        filmList: res.data.data.films
      })
    })
  }
  render() {
    return (
      <div>
        {
          this.state.filmList.map(item => <FilmItem key={item.filmId} {...item} onEvent={(value) => {
            this.setState({
              info: value
            })
          }}/>)
        }
        <FilmDetail info={this.state.info}/>
      </div>
    )
  }
}

// 受控组件
class FilmItem extends Component {
  render() {
    // console.log('this.props', this.props)
    let {name, poster, grade, synopsis} = this.props
    return <div className='filmitem' onClick={() => {
      // console.log(synopsis)
      this.props.onEvent(synopsis)
    }}>
        <img src={poster} alt={name} />
        <h4>{name}</h4>
        <div>观众评分：{grade}</div>
      </div>
  }
}

class FilmDetail extends Component {
  render() {
    return <div className='filmdetail'>
        {this.props.info}
      </div>
  }
}