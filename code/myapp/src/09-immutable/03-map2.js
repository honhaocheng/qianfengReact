import React, { Component } from 'react'
import {Map} from 'immutable'

export default class App extends Component {
  state = {
    info: Map({
      name: 'kerwin',
      select: 'aa',
      filter: Map({
        text: '',
        up: true,
        down: false
      })
    })
  }

  componentDidMount() { 
    console.log(this.state.info.get('filter'))
   }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            info: this.state.info.set('name', 'xiaoming').set('select', 'abcdefg')
          })
        }}>click</button>
        {this.state.info.get('name')}---
        {this.state.info.get('select')}
        <Child filter={this.state.info.get('filter')} />
      </div>
    )
  }
}

class Child extends Component {
  shouldComponentUpdate(nextProps, nextState) { 
    // Map对象可以直接判断，不用像普通对象一样先转成对象字符串才能判断
    if (this.props.filter === nextProps.filter) {
      return false
    }
    return true
   }
  render() {
    return <div>
      Child
    </div>
  }
  componentDidUpdate() {
    console.log('Child componentDidUpdate')
  }
  
}