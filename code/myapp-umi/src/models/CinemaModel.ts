export default {
  namespace: 'cinema',
  state: {
    list: []
  },
  reducers: {
    clearList(prevState: any, action: any) {
      return {
        ...prevState,
        list: []
      }
    },
    changeList(prevState: any, action: any) {
      return {
        ...prevState,
        list: action.payload
      }
    }
  },
  // 
  effects: {
    *getList(action: any, obj: any): any {
      console.log(`getList`, action, obj)
      const { put, call } = obj
      var res = yield call(getListForCinema, action.payload.cityId)
      // console.log(`res111`, res)
      yield put({
        type: 'changeList',
        payload: res
      })
    }
  }
}

async function getListForCinema(cityId) {
  var res = await fetch(`https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=5763227`, {
    headers: {
      'x-client-info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17360656201093829386043393","bc":"110100"}',
      'x-host': 'mall.film-ticket.cinema.list'
    }
  }).then(res => res.json())
  // console.log(`res`, res)
  return res.data.cinemas
}