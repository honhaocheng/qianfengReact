import {fromJS} from 'immutable'

const CityReducer = (prevState = {
  cityName: '北京'
}, action) => {
  console.log('prevState', prevState, 'action', action)
  // const newState = {...prevState}
  const newState = fromJS(prevState)
  switch (action.type) {
    case 'change-city':
      // newState.cityName = action.payload
      return newState.set('cityName', action.payload).toJS()
    default:
      return prevState
  }
}

export default CityReducer