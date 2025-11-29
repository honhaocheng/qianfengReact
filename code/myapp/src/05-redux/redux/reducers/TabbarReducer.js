const TabbarReducer = (prevState = {
  show: true
}, action) => {
  console.log('prevState', prevState, 'action', action)
  const newState = {...prevState}
  switch (action.type) {
    case 'kerwinhide-tabbar':
      newState.show = false
      return newState
    case 'kerwinshow-tabbar':
      newState.show = true
      return newState
    default:
      return prevState
  }
}

export default TabbarReducer