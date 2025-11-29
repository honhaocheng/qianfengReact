import axios from "axios";
// 使用redux-thunk之后，dispatch调用函数后，它判断你源码中的返回值是js对象，交给redux默认去处理，判断你的返回值是一个function，它就
// 知道这个就要应用redux-thunk的流程，所以它会帮你执行这个返回的函数，并将dispatch作为参数传入这个函数
// redux-thunk风格
// function getCinemaListAction() {
//   return (dispatch) => {
//     axios({
//       url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6827298',
//       method: 'get',
//       headers: {
//         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17166198764757367770054657"}',
//         'X-Host': 'mall.film-ticket.cinema.list'
//       }
//     }).then(res => {
//       // console.log('res.data.data.cinemas', res.data.data.cinemas);
//       dispatch({
//         type: 'change-list',
//         payload: res.data.data.cinemas
//       })
//     }).catch(err => console.log(err))
//   }
// }
// redux-promise风格
// function getCinemaListAction() {
//   return axios({
//     url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6827298',
//     method: 'get',
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17166198764757367770054657"}',
//       'X-Host': 'mall.film-ticket.cinema.list'
//     }
//   }).then(res => {
//     // console.log('res.data.data.cinemas', res.data.data.cinemas);
//     return { // 自动dispatch
//       type: 'change-list',
//       payload: res.data.data.cinemas
//     }
//   }).catch(err => console.log(err))
// }
// async写法
async function getCinemaListAction() {
  const result = await axios({
    url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6827298',
    method: 'get',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17166198764757367770054657"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  }).then(res => {
    // console.log('res.data.data.cinemas', res.data.data.cinemas);
    return {
      type: 'change-list',
      payload: res.data.data.cinemas
    }
  }).catch(err => console.log(err))
  console.log('result', result)
  // return后自动dispatch
  return result
}

export default getCinemaListAction