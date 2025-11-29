import React, { PureComponent } from 'react'
// PureComponent会自动比对状态或属性是否发生变更，来决定组件是否更新，如果state或props永远都会变（如秒杀倒计时），
// 那PureComponent并不会比较快，因为shallowEqual也需要花时间
export default class App extends PureComponent {
  state = {
    myname: 'kerwin'
  }
  render() {
    console.log('render')
    return (
      <div>
        <button onClick={() => {
          this.setState({
            myname: 'xiaoming'
          })
        }}>click</button>
        {this.state.myname}
      </div>
    )
  }
  // scu 性能优化函数
  // shouldComponentUpdate(nextProps, nextState) {
  //   // return true // 应该更新
  //   // return false // 阻止更新
  //   // this.state 老的状态
  //   // nextState 新的状态
  //   if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
  //     return true
  //   }
  //   return false
  // }
  UNSAFE_componentWillUpdate() {
    console.log('UNSAFE_componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
}
