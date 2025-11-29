import React, { Component } from 'react'
import { Button } from 'antd';
export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary" onClick={() => {
          console.log('click')
        }} danger ghost={true} loading={true}>Primary Button</Button>
      </div>
    )
  }
}
