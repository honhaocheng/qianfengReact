import React, {useCallback, useMemo, useState} from 'react'

export default function App() {
  const [myname, setName] = useState('kerwin')
  const [text, setText] = useState('')
  const [list, setList] = useState(['aa', 'bb', 'cc'])
  const handleChange = useCallback((evt) => {
    console.log('handleChange', evt.target.value)
    setText(evt.target.value)
  }, [])
  // useCallback记忆函数，起到缓存优化作用，当自身的依赖发生改变的时候，函数才会重新创建
  // 如果不是自身依赖发生改变，函数不会重新创建则会读取缓存中的旧函数
  const handleAdd = useCallback(() => {
    console.log(text)
    setList([...list, text])
    // 清空
    setText('')
  }, [list, text])
  // useMemo和useCallback的用法几乎一致，但useMemo更加灵活
  const handleDel = useMemo(
    () => (index) => {
      const newList = [...list]
      newList.splice(index, 1)
      setList(newList)
    }, 
    [list]
  )
  return (
    <div>
      {myname} - <button onClick={() => {
        setName('xiaoming')
      }}>change-myname</button>
      <br/>
      <input onChange={handleChange} value={text}/>
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
    </div>
  )
}
