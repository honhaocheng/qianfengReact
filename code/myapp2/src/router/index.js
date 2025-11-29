import React from 'react'
import { useRoutes } from 'react-router-dom'

import Redirect from '../components/Redirect';


export default function MRouter() {
  const element = useRoutes([
    {
      path: '/films',
      element: LazyLoad('Films'),
      children: [
        {
          path: '',
          element: <Redirect to="/films/nowplaying" />
        },
        {
          path: 'nowplaying',
          element: LazyLoad('films/Nowplaying')
        },
        {
          path: 'comingsoon',
          element: LazyLoad('films/Comingsoon')
        }
      ]
    },
    {
      path: '/cinemas',
      element: LazyLoad('Cinemas')
    },
    {
      path: '/cinemas/search',
      element: LazyLoad('Search')
    },
    {
      path: 'login',
      element: LazyLoad('Login')
    },
    {
      path: '/center',
      element: <AuthComponent>
        {LazyLoad('Center')}
      </AuthComponent>
    },
    {
      path: '/detail/:myid',
      element: LazyLoad('Detail')
    },
    {
      path: '/',
      element: <Redirect to='/films' />
    },
    {
      path: '*',
      element: LazyLoad('NotFound')
    },
  ])
  return (
    element
  )
}

// 路由拦截组件的封装
function AuthComponent ({ children }) {
  const isLogin = localStorage.getItem("token")
  return isLogin ? children : <Redirect to='/login'/>;
}

// 路由懒加载的封装
const LazyLoad = (path) => {
  const Comp = React.lazy(() => import(`../views/${path}`))
  return (
    <React.Suspense fallback={<>加载中...</>}>
      <Comp/>
    </React.Suspense>
  )
}