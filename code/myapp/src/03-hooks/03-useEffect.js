import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('/test.json').then(res => {
      console.log(res.data)
      setList(res.data.data.films)
    })
  }, []) // 传空数组的意思，就是说明我们这个副作用函数它不依赖于任何东西，所以在这里它只会执行一次

  // 可以注册多次
  useEffect(() => {
    // axios.get
  }, [])

  return (
    <ul>
      {
        list.map(item => 
          <li key={item.filmId}>{item.name}</li>
        )
      }
    </ul>
  )
}
