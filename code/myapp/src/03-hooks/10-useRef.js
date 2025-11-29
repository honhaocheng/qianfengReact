import React, {useRef, useState} from 'react'
const ChildInputComponent = React.forwardRef((props, ref) => {
  console.log('props', props)
  return <div>
      <input className="child-input" ref={ref} {...props} />
  </div>
})
export default function App() {
  const [list, setList] = useState(['aa', 'bb', 'cc'])
  const mytext = useRef() // 相当于类组件中的React.createRef()
  const myChildRef = useRef()
  
  const handleAdd = () => {
    console.log(mytext.current.value)
    setList([...list, mytext.current.value])
    // 清空
    // setText('')
    mytext.current.value = ''
  }
  const handleDel = (index) => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }
  const handleChild = () => {
    console.log('myChildRef', myChildRef.current)
    myChildRef.current.focus()
  }
  return (
    <div>
      <input ref={mytext} />
      <button onClick={handleAdd}>add</button>
      <ul>
        {
          list.map((item, index) => 
            <li key={item}>
              {item}
              <button onClick={() => handleDel(index)}>del</button>
            </li>
          )
        }
      </ul>
      {
        !list.length && <div>暂无待办事项</div>
      }
      <button onClick={handleChild}>点击让子组件input聚焦</button>
      <ChildInputComponent ref={myChildRef} />
    </div>
  )
}
