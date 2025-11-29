import React, { useEffect, useState } from 'react'
import { useHistory } from 'umi';

export default function Nowplaying(props: any) {
  const [list, setlist] = useState([]);
  const history = useHistory()
  useEffect(() => {
    fetch('https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8927007', {
      headers: {
        'x-client-info': '"a":"3000","ch":"1002","v":"5.2.1","e":"17360656201093829386043393"}',
        'x-host': 'mall.film-ticket.film.list'
      }
    }).then(res => res.json())
    .then(res => {
      console.log(`res`, res.data.films)
      setlist(res.data.films)
    })
  }, [])
  return (
    <div>
      {
        list.map((item: any) => 
          <li key={item.filmId} onClick={() => {
            // console.log(history)
            history.push(`/detail/${item.filmId}`)
          }}>{item.name}</li>
        )
      }
    </div>
  )
}
