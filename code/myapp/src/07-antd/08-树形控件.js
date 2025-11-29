import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Tree } from 'antd';
import './css/03-layout.css'
const { Header, Sider, Content } = Layout;

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        // disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            // disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: (
              <span
                style={{
                  color: '#1677ff',
                }}
              >
                sss111
              </span>
            ),
            key: '0-0-1-0',
          },
          {
            title: (
              <span
                style={{
                  color: 'red',
                }}
              >
                sss222
              </span>
            ),
            key: '0-0-1-1',
          },
        ],
      },
    ],
  },
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

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
          <Tree
            checkable
            // defaultExpandedKeys={['0-0-0', '0-0-1']}
            // defaultSelectedKeys={['0-0-0', '0-0-1']}
            // defaultCheckedKeys={['0-0-0', '0-0-1']}
            // onSelect={onSelect}
            onCheck={onCheck}
            treeData={treeData}
          />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;