import React, { useEffect } from 'react'

function NotFound(props) {
  useEffect(() => {
    console.log('props', props)
  }, [props])
  return (
    <div>404 not found</div>
  )
}

function kerwinconnect(cb, obj) {
  let value = cb()
  return (MyComponent) => {
    return (props) => {
      return <div style={{color: 'red'}}>
        <MyComponent {...value} {...props} {...obj}/>
      </div>
    }
  }
}

export default kerwinconnect(() => {
  return {
    a: 1,
    b: 2
  }
}, {
  aa() {},
  bb() {}
})(NotFound)