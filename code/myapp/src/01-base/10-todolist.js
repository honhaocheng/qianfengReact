import React, { Component } from "react";
import './css/01-index.css' //导入css模块，webpack的支持

export default class App extends Component {
  a = 100;
  myref = React.createRef()
  state = {
    list: [
      {
        id: 1,
        mytext: 'aaa'
      },
      {
        id: 2,
        mytext: 'bbb'
      },
      {
        id: 3,
        mytext: 'ccc'
      }
    ]
  }
  render() {
    return (
      <div>
        <input ref={this.myref} />
        <button onClick={this.handleClick2}>add2</button>
        <ul>
          {
            this.state.list.map((item, index) => 
            <li key={item.id}>
              {/* {item.mytext} */}
              {/* 富文本展示 */}
              <span dangerouslySetInnerHTML={{
                __html: item.mytext
              }}></span>
              {/* <button onClick={this.handleDelClick.bind(this, index)}>del</button> */}
              {/* <button onClick={() => this.handleDel(item.id)}>del</button> */}
              <button onClick={() => this.handleDelClick(index)}>del</button>
            </li>
            )
          }
        </ul>
        {/* {this.state.list.length === 0 ? <div>暂无待办事项</div> : null} */}
        {/* {this.state.list.length === 0 && <div>暂无待办事项</div>} */}
        {<div className={this.state.list.length === 0 ? '' : 'hidden'}>暂无待办事项</div>}
      </div>
    );
  }

  handleClick2 = () => {
    console.log("click2", this.myref.current.value);

    //this.setState

    //不用直接修改状态，可能会造成不可预期的问题
    // this.state.list.push(this.myref.current.value)

    // let newList = this.state.list.slice()
    let newList = [...this.state.list]
    newList.push({
      id: Math.random()*10000000,
      mytext: this.myref.current.value
    })
    this.setState({
      list: newList
    })
    this.myref.current.value = ''
  }

  // handleDel(id) {
  //   let newList = [...this.state.list]
  //   const index = newList.findIndex(n => n.id === id)
  //   newList.splice(index, 1)
  //   this.setState({
  //     list: newList
  //   })
  // }
  handleDelClick(index) {
    console.log('del-click',index)

    //不用直接修改状态，可能会造成不可预期的问题

    let newList = this.state.list.concat()

    console.log('newList', newList)

    newList.splice(index, 1)

    this.setState({
      list: newList
    })
  }
  
}
