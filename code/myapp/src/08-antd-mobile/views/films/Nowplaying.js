import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
// import { NavLink } from 'react-router-dom';
import { useHistory, withRouter } from 'react-router-dom';
import { Image, List, InfiniteScroll } from 'antd-mobile'
export default function NowPlaying(props) {
  const [list, setlist] = useState([])
  const [hasMore, setHasMore] = useState(true)

  const count = useRef(0)

  // useEffect(() => {
  //   axios({
  //     url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4749453',
  //     headers: {
  //       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17160383014443989776269313"}',
  //       'X-Host': 'mall.film-ticket.film.list'
  //     }
  //   }).then(res => {
  //     console.log(res.data.data.films)
  //     setlist(res.data.data.films)
  //   })
  // }, [])

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

  const loadMore = () => {
    console.log('到底了')
    count.current++
    console.log('count.current', count.current)
    setHasMore(false)
    axios({
      url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=${count.current}&pageSize=10&type=1&k=4749453`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17160383014443989776269313"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      setlist([...list, ...res.data.data.films])
      setHasMore(res.data.data.films.length>0)
      // setHasMore(true)
    })
  }

  return (
    <div>
      <List>
        {list.map(item => (
          <List.Item
            onClick={() => handleChangePage(item.filmId)}
            key={item.filmId}
            prefix={
              <Image
                src={item.poster}
                // style={{ borderRadius: 20 }}
                // fit='cover'
                width={80}
                // height={40}
              />
            }
            description={<div>
              {
                item.grade ? 
                <div>观众评分：{item.grade}</div>
                :
                <div style={{visibility: 'hidden'}}>观众评分：</div>
              }
              <div>主演：********</div>
              <div>{item.nation}|{item.runtime}分钟</div>
            </div>}
          >
            {item.name}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}
