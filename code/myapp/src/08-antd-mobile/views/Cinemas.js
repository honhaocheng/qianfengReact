import React, {useEffect} from 'react'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction';
import { connect } from 'react-redux';
import { NavBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'

function Cinemas(props) {
  const {cityName, list, getCinemaListAction} = props
  useEffect(() => {
    if (list.length === 0) {
      // 去后台取数据
      // actionCreator 里写异步
      getCinemaListAction()
    } else {
      console.log('store 缓存')
    }
  }, [list, getCinemaListAction])
  return (
    <div>
      {/* <div style={{overflow: 'hidden'}}>
        <div onClick={() => {
          props.history.push(`/city`)
        }} style={{float: 'left'}}>{cityName}</div>
        <div onClick={() => {
          props.history.push(`/cinemas/search`)
        }} style={{float: 'right'}}>搜索</div>
      </div> */}

      <NavBar 
        right={<SearchOutline onClick={() => {
          props.history.push(`/cinemas/search`)
        }}/>} 
        left={<div onClick={() => {
          props.history.push(`/city`)
        }}>{props.cityName}</div>}
        back={null}
      >
        影院
      </NavBar>
      {
        list.map(item =>
          <dl key={item.cinemaId} style={{padding: '10px'}}>
            <dt>{item.name}</dt>
            <dd style={{fontSize: '12px', color: 'gray'}}>{item.address}</dd>
          </dl>
        )
      }
    </div>
  )
}
// 映射我们的状态到属性
const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    cityName: state.CityReducer.cityName,
    list: state.CinemaListCityReducer.list
  }
}
// 将dispatch这个方法映射到属性
const mapDispatchToProps = {
  getCinemaListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)