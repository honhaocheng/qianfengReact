import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import App from './routes/App';
import Center from './routes/Center';
import Film from './routes/Film';
import Cinema from './routes/Cinema';
import Detail from './routes/Detail';
import Login from './routes/Login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/" render={() =>
          <App>
            <Switch>
              <Route path="/film" component={Film}></Route>
              <Route path="/cinema" component={Cinema}></Route>
              <Route path="/center" render={() => localStorage.getItem("token") ? <Center/> : <Redirect to="login" />}></Route>
              <Route path="/detail/:myid" component={Detail}></Route>

              <Redirect from="/" to="/film"></Redirect>
            </Switch>
          </App>
        }/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
