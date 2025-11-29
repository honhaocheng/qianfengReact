import React from 'react';
import { Redirect, useLocation } from 'umi';

const Film = (props: any) => {
  const location = useLocation()
  // console.log(`location`, location)
  if (location.pathname === '/film' || location.pathname === '/film/') {
    return <Redirect to="/film/nowplaying" />
  }
  return (
    <div>
      <div style={{height: '200px', background: 'yellow'}}>大轮播</div>
      {props.children}
    </div>
  );
}

export default Film;
