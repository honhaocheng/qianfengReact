import {observable, configure, action, runInAction} from 'mobx'
import axios from 'axios'
// always代表使用严格模式（总是强制action检查），never代表不使用严格模式
configure({
  enforceActions: 'always'
})
// observable把一个普通对象转化成一个复杂的可观察对象
// const store = observable({
//   isTabbarShow: true,
//   list: [],
//   cityName: '北京',
//   changeShow() {
//     this.isTabbarShow = true
//   },
//   changeHide() {
//     this.isTabbarShow = false
//   }
// }, {
//   changeHide: action,
//   changeShow: action // 标记两个方法是action，专门修改可观察的value值的地方
// })

class Store {
  // @代表装饰器（吸入进去的是一个能耐不太强的，吐出来的是一个能耐比较强的东西，这就是装饰器的作用）
  @observable isTabbarShow = true
  @observable list = []

  @action changeShow() {
    this.isTabbarShow = true
  }
  @action changeHide() {
    this.isTabbarShow = false
  }
  @action async getList() {
    const list = await axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6827298',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17166198764757367770054657"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      // console.log('res.data.data.cinemas', res.data.data.cinemas);
      return res.data.data.cinemas
    }).catch(err => console.log(err))
    // 使用runInAction处理异步问题（可观察的value值的更新）
    runInAction(() => {
      this.list = list
    })
  }
}

// export default store
const store = new Store()
export default store