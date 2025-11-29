// 新版包导入，和视频的旧导入略有差异
import ShallowRender from 'react-shallow-renderer';
import App from '../App'
import ReactTestUtil from 'react-dom/test-utils'
describe('react-test-renderer', () => {
  it('app 的名字是kerwin-todo', () => {
    const renderer = new ShallowRender();
    renderer.render(<App/>)
    // console.log(renderer.getRenderOutput().props.children[0].type)
    expect(renderer.getRenderOutput().props.children[0].type).toBe('h1')
    expect(renderer.getRenderOutput().props.children[0].props.children).toBe('kerwin-todo')
  });
  
  it('删除功能', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const app = ReactTestUtil.renderIntoDocument(<App/>)
    // eslint-disable-next-line testing-library/render-result-naming-convention
    let todoitems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')
    console.log(todoitems.length)
    let deleteButton = todoitems[0].querySelector('button')
    ReactTestUtil.Simulate.click(deleteButton)
    // eslint-disable-next-line testing-library/render-result-naming-convention
    let todoitemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')
    expect(todoitemsAfterClick.length).toBe(todoitems.length - 1)
  });
  
  it('添加功能', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const app = ReactTestUtil.renderIntoDocument(<App/>)
    // eslint-disable-next-line testing-library/render-result-naming-convention
    let todoitems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')
    console.log(todoitems.length)

    // eslint-disable-next-line testing-library/render-result-naming-convention
    let addInput = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'input')
    addInput.value = 'kerwinaaaaaa'
    // eslint-disable-next-line testing-library/render-result-naming-convention
    let addButton  = ReactTestUtil.findRenderedDOMComponentWithClass(app, 'add')

    ReactTestUtil.Simulate.click(addButton)
    // eslint-disable-next-line testing-library/render-result-naming-convention
    let todoitemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')
    expect(todoitemsAfterClick.length).toBe(todoitems.length + 1)
  });
  
});
