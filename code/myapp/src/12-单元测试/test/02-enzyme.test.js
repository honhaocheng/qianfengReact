import App from '../App'
import Enzyme, { shallow, mount } from 'enzyme' // 需要适配器
import adapter from '@wojtekmaj/enzyme-adapter-react-17'
// enzyme-adapter-react-17
 // 太旧了，当前版本无效，当前版本18，未能正确使用enzyme该测试模块，只是按视频敲了代码
Enzyme.configure({adapter: new adapter()})

describe('react-test-renderer', () => {
  it('app 的名字是kerwin-todo', () => {
    let app = shallow(<App/>)
    expect(app.find('h1').text()).toEqual('kerwin-todo')
  });
  
  it('删除功能', () => {
   let app = mount(<App/>)
   let todolength = app.find('li').length
   app.find('button.del').at(0).simulate('click')
   expect(app.find('li').length).toEqual(todolength - 1)
  });
  
  it('添加功能', () => {
    let app = mount(<App/>)
    let todolength = app.find('li').length
    let addInput = app.find('input')
    addInput.value = 'kerwinaaaaa'
    app.find('.add').simulate('click')
    expect(app.find('li').length).toEqual(todolength + 1)
  });
  
});
