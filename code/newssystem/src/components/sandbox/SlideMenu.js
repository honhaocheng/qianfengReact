import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import styles from './SlideMenu.module.css'
import axios from 'axios'
const { Sider } = Layout;

const { SubMenu } = Menu;

// 模拟数组结构
const menuList = [
  {
    key: '/home',
    title: '首页',
    icon: <UserOutlined />,
  },
  {
    key: '/user-manage',
    title: '用户管理',
    icon: <UserOutlined />,
    children: [
      {
        key: '/user-manage/list',
        title: '用户列表',
        icon: <UserOutlined />,
      },
    ]
  },
  {
    key: '/right-manage',
    title: '权限管理',
    icon: <UserOutlined />,
    children: [
      {
        key: '/right-manage/role/list',
        title: '角色限表',
        icon: <UserOutlined />,
      },
      {
        key: '/right-manage/right/list',
        title: '权限列表',
        icon: <UserOutlined />,
      },
    ]
  },
]

const iconList = {
  '/home': <UserOutlined />,
  '/user-manage': <UserOutlined />,
  '/user-manage/list': <UserOutlined />,
  '/right-manage': <UserOutlined />,
  '/right-manage/role/list': <UserOutlined />,
  '/right-manage/right/list': <UserOutlined />,
  // ........
}

const SlideMenu = (props) => {
  const { collapsed } = props
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/rights?_embed=children').then(res => {
      console.log(`res.data`, res.data)
      setMenu(res.data);
    })
  }, [])

  const checkPagePermission = (item) => {
    return item.pagepermisson
  }

  const renderMenu = (menuList) => {
    return menuList.map(item => {
      if (item.children?.length && checkPagePermission(item)) {
        return <SubMenu key={item.key} icon={iconList[item.key]} title={item.title}>
          {renderMenu(item.children)}
        </SubMenu>
      }
      return checkPagePermission(item) && <Menu.Item key={item.key} icon={iconList[item.key]} onClick={() => {
        // console.log(`props`, props)
        props.history.push(item.key)
      }}>{item.title}</Menu.Item>
    })
  }
  console.log(`props.location`, props.location)
  const selectKeys = [props.location.pathname]
  const openKeys = ['/' + props.location.pathname.split('/')[1]]

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div style={{display: 'flex', height: '100%', flexDirection: 'column' }}>
        <div className={styles.logo}>全球新闻发布管理系统</div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectKeys}
            defaultOpenKeys={openKeys}
          >
            {renderMenu(menu)}
          </Menu>
        </div>
      </div>
    </Sider>
  );
}

export default withRouter(SlideMenu);
