import React, { Component } from 'react'
import withRouter from '../../components/withRouter'

class FilmItem extends Component {
  render() {
    // console.log(`this.props`, this.props)
    return (
      <li onClick={() => this.handleClick(this.props.filmId)}>{this.props.name}</li>
    )
  }

  handleClick(id) {
    // console.log(this.props.history)
    this.props.history.push(`/detail/${id}`);
    // this.props.history.push 跳转页面
    // this.props.history.match 获取参数
    // this.props.history.location 获取当前路由
  }
}

export default withRouter(FilmItem)