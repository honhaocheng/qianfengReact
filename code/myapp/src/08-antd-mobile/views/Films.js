import React, { useEffect, useState } from "react";
import { Route, Redirect, Switch, NavLink } from "react-router-dom";
import Nowplaying from "./films/Nowplaying";
import Comingsoon from "./films/Comingsoon";
import style from "./css/Film.module.css";
import { Swiper, Image, Tabs } from "antd-mobile";
import axios from "axios";

console.log("style", style);

export default function Films(props) {
  console.log("Films props", props);
  const [looplist, setlooplist] = useState([]);
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9881647",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"17160383014443989776269313","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    })
      .then((res) => {
        console.log("res.data.data.films", res.data.data.films);
        // 由于原网址接口数据为空，只能利用以前的接口数据重新包装一下模拟该接口数据
        const mapList = res.data.data.films.slice(0, 3).map((item) => ({
          bannerId: item.filmId,
          name: item.name,
          imgUrl: item.poster,
        }));
        console.log("mapList", mapList);
        setlooplist(mapList);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className={style.film + " aaaa"}>
        {/* <div style={{height: '200px', background: 'yellow'}}>轮播</div> */}
        <Swiper autoplay={true} loop={true}>
          {looplist.map((item) => (
            <Swiper.Item key={item.bannerId}>
              {/* <img src={item.imgUrl} alt={item.name} style={{width: '100%'}}/> */}
              <Image
                src={item.imgUrl}
                fit="cover"
                style={{ width: "100%", height: "200px" }}
              />
            </Swiper.Item>
          ))}
        </Swiper>
        {/* 使用声明式导航跳转 */}
        {/* <ul>
        <li>
          <NavLink to="/films/nowplaying" activeClassName={style.kerwinactive}>正在热映</NavLink>
        </li> 
        <li>
          <NavLink to="/films/comingsoon" activeClassName={style.kerwinactive}>即将上映</NavLink>
        </li> 
      </ul> */}
        <div style={{ position: "sticky", top: 0, background: "white", zIndex: 999 }}>
          <Tabs
            onChange={(value) => {
              props.history.push(value);
            }}
            activeKey={props.location.pathname}
          >
            <Tabs.Tab title="正在热映" key="/films/nowplaying"></Tabs.Tab>
            <Tabs.Tab title="即将上映" key="/films/comingsoon"></Tabs.Tab>
          </Tabs>
        </div>
        {/* 路由配置 嵌套路由 */}
        <Switch>
          <Route path="/films/nowplaying" component={Nowplaying} />
          <Route path="/films/comingsoon" component={Comingsoon} />
          <Redirect from="/films" to="/films/nowplaying" />
        </Switch>
      </div>
    </div>
  );
}
