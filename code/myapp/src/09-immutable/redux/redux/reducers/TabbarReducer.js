import {fromJS} from 'immutable'
const TabbarReducer = (prevState = fromJS({
  show: true
}), action) => {
  console.log('prevState', prevState, 'action', action)
  // const newState = {...prevState}
  switch (action.type) {
    case 'kerwinhide-tabbar':
      // newState.show = false
      return prevState.set('show', false)
    case 'kerwinshow-tabbar':
      // newState.show = true
      return prevState.set('show', true)
    default:
      return prevState
  }
}

export default TabbarReducer