import React, { useRef, useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  // useState 记忆函数，记住状态

  // 存储变量的值，也就是保存临时变量，永远不丢失
  var mycount = useRef(0)

  // var handleClick = () => {

  // }

  return (
    <div>
      <button onClick={() => {
        setCount(count+1)
        mycount.current++
      }}>add</button>
      {count}-{mycount.current}
    </div>
  )
}
