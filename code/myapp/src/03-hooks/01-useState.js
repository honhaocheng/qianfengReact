import React, {useState} from 'react'

export default function App() {
  // 数组第1个元素就是你存的那个状态值，数组的第2个元素就是改变状态的唯一方法
  const [name, setName]= useState('kerwin')
  const [age, setAge]= useState(100)
  return (
    <div>
      <button onClick={() => {
        // console.log(name)
        setName('xiaoming')
        setAge(18)
      }}>click</button>
      app-{name}-{age}
    </div>
  )
}
