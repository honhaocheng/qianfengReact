import React, { useEffect } from 'react'

export default function Comingsoon() {
  useEffect(() => {
    fetch('/api/mmdb/movie/v3/list/hot.json?ct=%E6%B7%B1%E5%9C%B3&ci=30&channelId=4')
    .then(res => res.json())
    .then(res => {
      console.log(`res`, res)
    })
  }, [])
  return (
    <div>Comingsoon</div>
  )
}
