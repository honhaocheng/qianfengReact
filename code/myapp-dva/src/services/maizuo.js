import request from '../utils/request';
 export function getCinemaListService() {
  return request('https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6827298', {
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17166198764757367770054657"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  })
 }