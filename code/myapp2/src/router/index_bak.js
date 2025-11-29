import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import Films from '../views/Films';
// import Cinemas from '../views/Cinemas';
// import Center from '../views/Center';
import Redirect from '../components/Redirect';
// import NotFound from '../views/NotFound';
// import Search from '../views/Search';
// import Nowplaying from '../views/films/Nowplaying';
// import Comingsoon from '../views/films/Comingsoon';
// import Detail from '../views/Detail';
// import Login from '../views/Login';

export default function MRouter() {
  return (
    <Routes>
      {/* <Route path='/' element={<Films/>}/> */}
      {/* 本项目的父路径就是咋们的根路径也就是'/' */}
      {/* <Route index element={<Films/>}/> */}
      <Route path='/films' element={LazyLoad('Films')}>
        {/* index的意思是，如果我们没有指定好孩子路由，没有指定好这个子路由要加载哪一个，那就会走index，
        而这个index它跟我们这个父的这个是同享受同样的路径的，其实就是/films子路由这边没有匹配到，就会走index，
        说白了就是匹配到/films默认加载的子路由 */}
        {/* <Route index element={<Nowplaying/>}/> */}
        {/* path=''也能和index一样匹配到 */}
        <Route path='' element={<Redirect to='/films/nowplaying' />}/>
        {/* 和上一行效果一样 */}
        {/* <Route index element={<Redirect to='/films/nowplaying' />}/> */}
        {/* 绝对路径写法 */}
        {/* <Route path='/films/nowplaying' element={<Nowplaying />}/>
        <Route path='/films/comingsoon' element={<Comingsoon />}/> */}
        {/* 相对路径写法（推荐大家使用的） */}
        <Route path='nowplaying' element={LazyLoad('films/Nowplaying')}/>
        <Route path='comingsoon' element={LazyLoad('films/Comingsoon')}/>
      </Route>
      <Route path='/cinemas' element={LazyLoad('Cinemas')}/>
      <Route path='/cinemas/search' element={LazyLoad('Search')}/>
      <Route path='/center' element={<AuthComponent>
        {LazyLoad('Center')}
      </AuthComponent>}/>
      {/* render={isAuth() ? <Center/> : <Redirect to="/login" />} */}
      <Route path='/login' element={LazyLoad('Login')}/>
      {/* 动态路由 /detail/***** */}
      <Route path='/detail/:myid' element={LazyLoad('Detail')}/>

      {/* <Route path='/' element={<Navigate to='/films' />}/> */}
      {/* <Route path='*' element={<Navigate to='/films' />}/> */}
      <Route path='/' element={<Redirect to='/films' />}/>
      <Route path='*' element={LazyLoad('NotFound')}/>
    </Routes>
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