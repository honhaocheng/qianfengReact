import React, { Component } from 'react'
import './App.css'
import PortalDialog from './components/PortalDialog'
// import Dialog from './components/Dialog'
export default class App extends Component {
  state = {
    isShow: false
  }
  render() {
    return (
      <div className="box" onClick={() => {
        console.log(`box身上监听的事件`)
      }}>
        <div className="left"></div>
        <div className="right">
          <button onClick={() => {
            this.setState({
              isShow: true
            })
          }}>ajax</button>
          {
            // this.state.isShow && <Dialog></Dialog>
            this.state.isShow && <PortalDialog onClose={() => {
              this.setState({
                isShow: false
              })
            }}>
              <div>111111</div>
              <div>222222</div>
              <div>333333</div>
            </PortalDialog>
          }
        </div>
      </div>
    )
  }
}
