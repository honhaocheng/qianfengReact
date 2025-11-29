import React, { Component, useEffect } from 'react'

export default class App extends Component {
  state = {
    isCreated: true
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            isCreated: !this.state.isCreated
          })
        }}>click</button>
        {/* {this.state.isCreated ? <Child/> : ''} */}
        {this.state.isCreated && <Child/>}
      </div>
    )
  }
}
function Child() {
  // useEffect和useLayoutEffect绝大部分99%的使用场景都是一样，只有极少的差异
  useEffect(() => {
    window.onresize = () => {
      console.log('resize')
    } 
    var timer = setInterval(() => {
      console.log('111')
    }, 1000)
    return () => { // 相当于类组件的销毁生命周期componentWillUnmount
      // 组件销毁，前提是传的空数组，没有依赖的情况
      // 这个回调函数如果有依赖的情况下，在更新还有销毁的时候会执行，如果没有依赖的情况下，就说明它这一辈子整个也就执行这么一次
      console.log('组件销毁')
      window.onresize = null
      clearInterval(timer)
    }
  }, [])

  return (
    <div>Child</div>
  )
}
