import React, { useEffect } from 'react'
import Child from './Child'
import './App.css'
import axios from 'axios'

function App() {
  useEffect(() => {
    axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=9095F930BD4B11F09DA3ABC5A1A6DDE00C52F8DFCC514875B939DBD4FBDB7DCD&optimus_risk_level=71&optimus_code=10')
    .then(res => {
      console.log(`res`, res)
    })
  } , [])
  return (
    <div>
      App
      <ul>
        <li>11111</li>
        <li>22222</li>
      </ul>
      <Child />
    </div>
  )
}

export default App