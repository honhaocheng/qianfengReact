import React from 'react';
import { Button } from 'antd';
// import axios from 'axios'

const Home = () => {
  const ajax = () => {
    // 取数据
    // axios.get('http://localhost:8000/posts').then(res => {
    //   console.log(`res.data`, res.data);
    // })

    // 增
    // axios.post('http://localhost:8000/posts', {
    //   title: '33333',
    //   author: 'xiaoming',
    // })

    // 更新 put（替换式更新） 
    // axios.put('http://localhost:8000/posts/1', {
    //   title: '1111-修改',
    // })

    // 更新 patch（补丁式更新）
    // axios.patch('http://localhost:8000/posts/1', {
    //   title: '1111-修改-11111',
    // })

    // 删除 delete
    // axios.delete('http://localhost:8000/posts/1')

    // _embed
    // axios.get('http://localhost:8000/posts?_embed=comments').then(res => {
    //   console.log(`res.data`, res.data)
    // })

    // _expand
    // axios.get('http://localhost:8000/comments?_expand=post').then(res => {
    //   console.log(`res.data`, res.data)
    // })
  }
  return (
    <div>
      <Button type="primary" onClick={ajax}>Button</Button>
    </div>
  );
}

export default Home;
