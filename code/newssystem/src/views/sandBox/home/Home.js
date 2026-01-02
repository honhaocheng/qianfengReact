import React from 'react';
import { Button } from 'antd';
import axios from 'axios'

const Home = () => {
  const ajax = () => {
    // 取数据
    // axios.get('http://localhost:8000/posts').then(res => {
    //   console.log(`res.data`, res.data);
    // })

    // 增
    axios.post('http://localhost:8000/posts', {
      title: '33333',
      author: 'xiaoming',
    })
  }
  return (
    <div>
      <Button type="primary" onClick={ajax}>Button</Button>
    </div>
  );
}

export default Home;
