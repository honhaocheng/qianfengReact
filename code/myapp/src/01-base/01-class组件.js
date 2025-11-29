// class Test {
//   constructor() {
//     this.a = 1;
//   }
//   testa() {
//     console.log("testa")
//   }
// }

// class ChildTest extends Test{
//   testb() {
//     console.log('tsestb');
//   }
// }

// var obj = new ChildTest();
// obj.testb();
// console.log(obj.a)
import React from "react";
class App extends React.Component {
  render() {
    return (
      <section>
        hello react Component
        <ul>
          <li>111</li>
          <li>222</li>
        </ul>
        <div>新的内容1</div>
        <div>新的内容2</div>
      </section>
    )
  }
}
export default App;