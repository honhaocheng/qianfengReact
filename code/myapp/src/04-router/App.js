import React from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
export default function App() {
  // store.subscribe 订阅
  return (
    <div>
      {/* 其他的内容 */}
      <MRouter>
        <Tabbar/>
      </MRouter>
    </div>
  )
}

/* 
  /films ===> Films
  /cinemas ===> Cinemas
  /center ===> Center
*/