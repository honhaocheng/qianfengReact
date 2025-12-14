import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import styles from './SlideMenu.module.css'
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

const SlideMenu = (props) => {
  const { collapsed } = props
  const renderMenu = (menuList) => {
    return menuList.map(item => {
      if (item.children) {
        return <SubMenu key={item.key} icon={item.icon} title={item.title}>
          {renderMenu(item.children)}
        </SubMenu>
      }
      return <Menu.Item key={item.key} icon={item.icon} onClick={() => {
        console.log(`props`, props)
        props.history.push(item.key)
      }}>{item.title}</Menu.Item>
    })
  }
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo}>全球新闻发布管理系统</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          {renderMenu(menuList)}
        </Menu>
      </Sider>
  );
}

export default withRouter(SlideMenu);
