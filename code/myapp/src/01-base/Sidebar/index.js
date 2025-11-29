import React from 'react'
import kerwinPropTypes from 'prop-types'
export default function Sidebar(props) {
  console.log('props', props)
  let {bg, position} = props
  const obj1 = {
    left: 0
  }
  const obj2 = {
    right: 0
  }
  const obj = {
    background: bg,
    width: '200px',
    position: 'fixed'
  }
  const styleObj = position === 'left' ? {...obj, ...obj1} : {...obj, ...obj2}
  return (
    <div style={styleObj}>
      <ul>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
      </ul>
    </div>
  )
}
// 函数式组价属性验证、默认属性，挂在函数身上去写
// Sidebar.defaultProps
// Sidebar.propTypes
Sidebar.propTypes = {
  bg: kerwinPropTypes.string
}