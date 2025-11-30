import React from 'react';
import SlideMenu from '../../components/sandbox/SlideMenu';
import TopHeader from '../../components/sandbox/TopHeader';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './home/Home';
import UserList from './user-manage/UserList';
import RoleList from './right-manage/RoleList';
import RightList from './right-manage/RightList';
import NoPermission from './nopermission/NoPermission';

const NewsSandBox = () => {
  return (
    <div>
      <SlideMenu />
      <TopHeader />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/user-manage/list" component={UserList} />
        <Route path="/right-manage/role/list" component={RoleList} />
        <Route path="/right-manage/right/list" component={RightList} />

        <Redirect from="/" to="/home" exact />
        <Route path="*" component={NoPermission} />
      </Switch>
    </div>
  );
}

export default NewsSandBox;
