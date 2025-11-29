import React from 'react'
import {Route, Redirect, Switch, NavLink} from 'react-router-dom'
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'
import style from './css/Film.module.css'
console.log('style', style)

export default function Films() {
  return (
    <div>
      <div className={style.film + " aaaa"}>
      <div style={{height: '200px', background: 'yellow'}}>轮播</div>
        <ul>
          <li>
            <NavLink to="/films/nowplaying" activeClassName={style.kerwinactive}>正在热映</NavLink>
          </li> 
          <li>
            <NavLink to="/films/comingsoon" activeClassName={style.kerwinactive}>即将上映</NavLink>
          </li> 
        </ul>
      </div>
      {/* 路由配置 嵌套路由 */}
      <Switch>
        <Route path="/films/nowplaying" component={Nowplaying}/>
        <Route path="/films/comingsoon" component={Comingsoon}/>
        <Redirect from="/films" to="/films/nowplaying"/>
      </Switch>
    </div>
  )
}
