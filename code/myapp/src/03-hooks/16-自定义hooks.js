import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
// 只要是咱们以use开头的自定义函数，你就可以在里面使用useEffect, useMemo, useState等官方提供的这些hook
// 自定义hook只是复用了逻辑而已，或是把逻辑抽出来让结构更加清晰了，它是咱们函数式编程的一种思想
function useCinemaList() {
  const [cinemaList, setcinemaList] = useState([])

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6827298',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17166198764757367770054657"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
        setcinemaList(res.data.data.cinemas)
    }).catch(err => console.log(err))
  }, [])

  return {
    cinemaList
  }
}

function useFilter(cinemaList, mytext) {
  const getCinemaList = useMemo(() => cinemaList.filter(item => 
    item.name.toUpperCase().includes(mytext.toUpperCase()) ||
    item.address.toUpperCase().includes(mytext.toUpperCase())
  ), [cinemaList, mytext])

  return {
    getCinemaList
  }
}

export default function Cinema() {
  const [mytext, setmytext] = useState('')
  const {cinemaList} = useCinemaList()
  const {getCinemaList} = useFilter(cinemaList, mytext)

  return (
    <div>
      <input onChange={(evt) => {
        setmytext(evt.target.value)
      }} value={mytext} />
      {
        getCinemaList.map(item =>
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        )
      }
    </div>
  )
}