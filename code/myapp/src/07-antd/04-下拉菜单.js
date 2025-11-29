import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DownOutlined, 
  SmileOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Dropdown, Space } from 'antd';
import './css/03-layout.css'
const { Header, Sider, Content } = Layout;
const items = [
  {
    key: '1',
    label: (
      <span>1111111</span>
    ),
  },
  {
    key: '2',
    label: (
      <span>22222</span>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <span>333333333</span>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: '44444444',
  },
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'nav 4',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Dropdown
            menu={{
              items,
              onClick: (value) => {
                console.log(value)
              }
            }}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Hover me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;