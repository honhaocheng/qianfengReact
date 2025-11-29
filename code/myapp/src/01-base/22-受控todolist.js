import React, { Component } from "react";
import './css/01-index.css' //导入css模块，webpack的支持

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        mytext: 'aaa',
        isChecked: false
      },
      {
        id: 2,
        mytext: 'bbb',
        isChecked: false
      },
      {
        id: 3,
        mytext: 'ccc',
        isChecked: false
      }
    ],
    mytext: ''
  }
  render() {
    return (
      <div>
        <input value={this.state.mytext} onChange={(evt) => {
          this.setState({
            mytext: evt.target.value
          })
        }}/>
        <button onClick={this.handleClick2}>add2</button>
        <ul>
          {
            this.state.list.map((item, index) => 
            <li key={item.id}>
              {/* {item.mytext} */}
              <input type="checkbox" checked={item.isChecked} onChange={() => this.handleChecked(index)}/>
              {/* 富文本展示 */}
              <span style={{textDecoration: item.isChecked ? 'line-through' : ''}} dangerouslySetInnerHTML={{
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

  handleChecked = (index) => {
    let newList = [...this.state.list]
    newList[index].isChecked = !newList[index].isChecked
    this.setState({
      list: newList
    })
  }

  handleClick2 = () => {
    let newList = [...this.state.list]
    newList.push({
      id: Math.random()*10000000,
      mytext: this.state.mytext,
      isChecked: false
    })
    this.setState({
      list: newList,
      mytext: ''
    })
  }
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
