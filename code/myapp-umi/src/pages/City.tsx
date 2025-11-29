import { IndexBar, List } from 'antd-mobile';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'umi';
import { connect } from 'dva';

function City(props: any) {
  console.log(`props`, props)
  const history = useHistory()
  const [list, setlist] = useState<any>([]);
  const filterCity = (cities: any) => {
    // console.log(`cities`, cities)
    const letterArr: Array<string> = []
    const newList = []
    for (let i = 65; i < 91; i++) {
      letterArr.push(String.fromCharCode(i))
    }
    // console.log(`letterArr`, letterArr)
    for (const m in letterArr) {
      const cityItems = cities.filter((item: any) => item.pinyin.substring(0, 1).toUpperCase() === letterArr[m])
      cityItems.length && newList.push({
        title: letterArr[m],
        items: cityItems
      })
    }
    // console.log(`newList`, newList)
    return newList;
  }
  useEffect(() => {
    fetch('https://m.maizuo.com/gateway?k=4871973', {
      headers: {
        'x-client-info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17360656201093829386043393"}',
        'x-host': 'mall.film-ticket.city.list'
      }
    })
    .then(res => res.json())
    .then(res => {
      // console.log(`res.data`, res.data.cities)
      setlist(filterCity(res.data.cities))
    })
  }, [])

  const changeCity = (item: any) => {
    console.log(item.name, item.cityId)
    // 修改store state中的状态
    props.dispatch({
      type: 'city/changeCity',
      payload: {
        cityName: item.name,
        cityId: item.cityId,
      }
    })
    history.push('/cinema')
  }

  return (
    <div style={{ height: window.innerHeight }}>
      <IndexBar>
        {list.map((item: any) => {
          const { title, items } = item
          return (
            <IndexBar.Panel
              index={title}
              title={title}
              key={title}
            >
              <List>
                {items.map((item: any, index: number) => (
                  <List.Item key={index} onClick={() => changeCity(item)}>{item.name}</List.Item>
                ))}
              </List>
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
    </div>
  )
}

export default connect(() => ({}))(City);