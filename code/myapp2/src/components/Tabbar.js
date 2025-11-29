import React from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'

export default function Tabbar() {
  return (
    <footer>
      <ul>
        <li>
          <NavLink to="/films" className={({isActive}) => isActive ? 'kerwinactive' : ''}>电影</NavLink>
        </li>
        <li>
          <NavLink to="/cinemas" className={({isActive}) => isActive ? 'kerwinactive' : ''}>影院</NavLink>
        </li>
        <li>
          <NavLink to="/center" className={({isActive}) => isActive ? 'kerwinactive' : ''}>我的</NavLink>
        </li>
      </ul>
    </footer>
  )
}
