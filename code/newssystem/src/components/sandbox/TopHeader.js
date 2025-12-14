import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, theme, Dropdown, Avatar } from 'antd';
const { Header } = Layout;

const TopHeader = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const items = [
    {
      key: '1',
      label: '超级管理员',
    },
    {
      key: '4',
      danger: true,
      label: '退出',
    },
  ];
  return (
    <Header style={{ padding: '0 16px 0 0', background: colorBgContainer }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={changeCollapsed}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
      <div style={{ float: 'right' }}>
        <span>欢迎admin回来</span>
        <Dropdown menu={{ items }}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
}

export default TopHeader;
