const CinemaListCityReducer = (prevState = {
  list: []
}, action) => {
  console.log('prevState', prevState, 'action', action)
  const newState = {...prevState}
  switch (action.type) {
    case 'change-list':
      newState.list = action.payload
      return newState
    case 'change-cinemalist':
      newState.list = action.payload
      return newState
    default:
      return prevState
  }
}

export default CinemaListCityReducer