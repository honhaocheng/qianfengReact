class Bus {
  public name = "kerwin" // 共有属性
  private _list: any = []; // 私有变量
  protected age = 100 // 受保护的属性，只能在本类及其子类中访问
  // public写不写都是一个意思，公共的，可以省略
  public subscribe(cb: any) {
    this._list.push(cb);
  }
  public dispatch() {
    this._list.forEach((cb: any) => {
      cb && cb()
    })
  }
}

class Child extends Bus {
  aaa() {
    // console.log(this._list)
    console.log(this.name, this.age)
  }
}

var obj = new Bus()
obj.subscribe(() => {

})
// obj._list = []
// console.log(obj._list)
console.log(obj.name)
// console.log(obj.age)

export default {};