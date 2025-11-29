import React, { useState } from 'react'

export default function App() {
  const [isShow, setisShow] = useState(true);
  return (
    <div>
      <Navbar cb={() => {
        setisShow(!isShow)
      }}/>
      {isShow && <Sidebar/>}
    </div>
  )
}

interface IProps {
  title?: string, // 可选
  cb: () => void
}

function Navbar(props: IProps) {
  return <div>
    navbar-<button onClick={() => {
      props.cb()
    }}>click</button>
  </div>
}

function Sidebar() {
  return <div>
    sidebar
  </div>
}