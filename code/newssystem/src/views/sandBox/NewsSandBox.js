import React from 'react';
import { Layout, theme } from 'antd';
import SlideMenu from '../../components/sandbox/SlideMenu';
import TopHeader from '../../components/sandbox/TopHeader';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './home/Home';
import UserList from './user-manage/UserList';
import RoleList from './right-manage/RoleList';
import RightList from './right-manage/RightList';
import NoPermission from './nopermission/NoPermission';
const { Content } = Layout;

const NewsSandBox = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <SlideMenu />
      <Layout>
        <TopHeader />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/user-manage/list" component={UserList} />
            <Route path="/right-manage/role/list" component={RoleList} />
            <Route path="/right-manage/right/list" component={RightList} />

            <Redirect from="/" to="/home" exact />
            <Route path="*" component={NoPermission} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default NewsSandBox;
