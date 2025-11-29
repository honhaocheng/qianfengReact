import React, { useEffect, useState } from 'react'
import { useHistory } from 'umi';

export default function Login() {
  const history = useHistory()
  // useEffect(() => {
    // fetch('/users').then(res => res.json())
    // .then(res => {
    //   console.log(`res`, res)
    // })
  // }, [])

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  return (
    <div>
      <input type="text" onChange={(evt) => setusername(evt.target.value)}/>
      <br />
      <input type="password" onChange={(evt) => setpassword(evt.target.value)}/>
      {/* {username} - {password} */}
      <button onClick={() => {
        fetch('/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password
          })
        }).then(res => res.json())
        .then(res => {
          console.log(`res`, res)
          if (res.ok) {
            localStorage.setItem('token', username)
            history.push('/center')
          } else {
            alert('用户名密码不匹配')
          }
        })
      }}>登录</button>
    </div>
  )
}
