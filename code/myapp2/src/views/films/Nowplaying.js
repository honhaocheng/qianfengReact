import React, {useEffect, useState} from 'react'
import axios from 'axios'
import FilmItem from './FilmItem_func';

export default function Nowplaying() {
  const [list, setlist] = useState([]);
  useEffect(() => {
    console.log(`111`)
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=2209740',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17360656201093829386043393"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data.data.films)
      setlist(res.data.data.films)
    })
  }, [])
  
  return (
    <div>
      <ul>
        {
          list.map(item => (
            <FilmItem key={item.filmId} {...item}></FilmItem>
          ))
        }
      </ul>
    </div>
  )
}
