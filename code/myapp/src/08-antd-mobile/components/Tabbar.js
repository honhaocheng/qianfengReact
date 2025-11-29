import React from 'react'
// import { NavLink } from 'react-router-dom'
import style from './Tabbar.module.css'
import { TabBar } from 'antd-mobile'
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import { withRouter } from 'react-router-dom'

function KerwinTabbar(props) {
  const tabs = [
    {
      key: '/films',
      title: '电影',
      icon: <AppOutline />
    },
    {
      key: '/cinemas',
      title: '影院',
      icon: <UnorderedListOutline />
    },
    {
      key: '/center',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  return (
    <div className={style.tabbar}>
      {/* <ul>
        <li>
          <NavLink to="/films" activeClassName={style.kerwinactive}>电影</NavLink>
        </li>
        <li>
          <NavLink to="/cinemas" activeClassName={style.kerwinactive}>影院</NavLink>

        </li>
        <li>
          <NavLink to="/center" activeClassName={style.kerwinactive}>我的</NavLink>
        </li>
      </ul> */}
      <TabBar onChange={(value) => {
        // console.log('value', value)
        console.log('props', props)
        props.history.push(value)
      }} activeKey={'/' + props.location.pathname.split('/')[1]}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
    </div>
  )
}

export default withRouter(KerwinTabbar)