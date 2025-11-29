import React, { Component } from 'react'
import kerwinPropTypes from 'prop-types'
console.log('kerwinPropTypes', kerwinPropTypes)
export default class Navbar extends Component {
  state = {
    // 只能内部自己用的，外面无法改变
  }
  // 类属性
  static propTypes = {
    title: kerwinPropTypes.string,
    leftShow: kerwinPropTypes.bool
  }
  // 默认值
  static defaultProps = {
    leftShow: true
  }
  
  // 属性是父组件传来的，this.props
  render() {
    console.log('this.props', this.props)
    const {title, leftShow} = this.props
    // 接受属性 做验证？？？？?
    return (
      <div>
        { leftShow && <button>返回</button> }
        Navbar-{title}
      </div>
    )
  }
}
// 类属性
// Navbar.propTypes = {
//   title: kerwinPropTypes.string,
//   leftShow: kerwinPropTypes.bool
// }

// 默认值
// Navbar.defaultProps = {
//   leftShow: true
// }

class Test {
  a = 1 // 对象属性
  static a = 100 // 类属性
}
// Test.a = 100 和 上述里面的static a = 100等价
var obj = new Test()
console.log('Test.a', Test.a, 'obj.a', obj.a)