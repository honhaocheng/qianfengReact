import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

export default function Cinema() {
  const [mytext, setmytext] = useState('')
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
  // useMemo和useCallback的用法几乎一致，但useMemo更加灵活，此处的用法相当于vue中的计算属性
  const getCinemaList = useMemo(() => cinemaList.filter(item => 
    item.name.toUpperCase().includes(mytext.toUpperCase()) ||
    item.address.toUpperCase().includes(mytext.toUpperCase())
  ), [cinemaList, mytext])

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