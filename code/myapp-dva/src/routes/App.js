import React, { Component } from 'react'
import Tabbar from '../components/Tabbar'
import { connect } from 'dva'
class App extends Component {
  componentDidMount() { 
    // console.log(this.props)
   }
  render() {
    return (
      <div>
        App
        {this.props.children}
        {this.props.isShow && <Tabbar />}
      </div>
    )
  }
}

export default connect((state) => {
  // console.log(state)
  return {
    a: 1,
    isShow: state.maizuo.isShow
  }
})(App)