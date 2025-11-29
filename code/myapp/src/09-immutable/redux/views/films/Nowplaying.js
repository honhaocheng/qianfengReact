import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { NavLink } from 'react-router-dom';
import { useHistory, withRouter } from 'react-router-dom';
export default function NowPlaying(props) {
  const [list, setlist] = useState([]);
  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4749453',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17160383014443989776269313"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      setlist(res.data.data.films)
    })
  }, [])

  const history = useHistory() // 等价于props.history

  const handleChangePage = (id) => {
    console.log('click', id)
    // window.location.href = '#/detail/' + id
    // console.log(props)
    // props.history.push(`/detail/${id}`) // 函数组件中使用
    // this.props.history.push(`/detail/${id}`) // 类组件中使用

    // 1、动态路由传参，存在路径中，刷新不会丢失
    history.push(`/detail/${id}`) // 函数组件中使用

    // 2、query传参，存在内存中，刷新会丢失
    // history.push({pathname: '/detail', query: {myid: id}})

    // 3、state传参，存在内存中，刷新会丢失
    // history.push({pathname: '/detail', state: {myid: id}})
  }

  return (
    <div>
      <ul>
        {
          list.map(item => 
            <WithFilmItem key={item.filmId} {...item}/>
          )
        }
      </ul>
    </div>
  )
}

function FilmItem(props) {
  let {filmId, name, poster} = props
  return <li onClick={() => {
    console.log(filmId)
    console.log(props)
    props.history.push(`/detail/${filmId}`)
  }}>
  {/* <NavLink to={'/detail/' + item.filmId}>{item.name}</NavLink> */}
  {/* <img src={poster} alt="图片" /> */}
  {name}
</li>
}
// withRouter函数提供history、match、location等等这些属性
const WithFilmItem = withRouter(FilmItem)