import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface IParam {
  myid: string
}
// RouteComponentProps<IParam>里面的<IParam>是自定义params的类型
export default class Detail extends Component<RouteComponentProps<IParam>> {
  componentDidMount() {
    // console.log((this.props.match.params as any).myid)
    console.log(this.props.match.params.myid)
  }
  render() {
    return (
      <div>Detail</div>
    )
  }
}
