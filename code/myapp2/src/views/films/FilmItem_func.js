import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function FilmItem(item) {
  const navigate = useNavigate()
    const handleChangePage = (id) => {
      // 跳转页面
      // navigate(`/detail?id=${id}`)
      navigate(`/detail/${id}`)
      // query (URLSearch)传参 /detail?id=1000
      // 路由传参 /detail/1000
    }
  return (
    <li onClick={() => handleChangePage(item.filmId)}>{item.name}</li>
  )
}
