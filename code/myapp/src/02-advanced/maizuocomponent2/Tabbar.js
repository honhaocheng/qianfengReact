import React, { Component } from "react";

// export default class Tabbar extends Component {
//   state = {
//     // current: this.props.defaultValue
//   };
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.list.map((item, index) => (
//             <li
//               className={this.props.current === index ? "active" : ""}
//               key={item.id}
//               onClick={() => this.handleClick(index)}
//             >
//               {item.text}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
//   handleClick(index) {
//     console.log("index", index);
//     // this.setState({
//     //   current: index
//     // })
//     // 通知一下父组件，该修改父组件那个状态了
//     this.props.myevent(index);
//   }
// }

const Tabbar = (props) => {
  // function handleClick(index) {
  //   props.myevent(index);
  // }
  return (
    <div>
      <ul>
        {props.list.map((item, index) => (
          <li
            className={props.current === index ? "active" : ""}
            key={item.id}
            onClick={() => props.myevent(index)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabbar