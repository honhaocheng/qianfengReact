
interface Iobj {
  name: string
  age: number,
  location?: string, // 可选属性
  [propName:string]: any  // 其它不关心的属性这样声明为any类型
}

var obj1: Iobj = {
  name: 'kerwin',
  age: 100,
  location: '大连'
}

console.log(obj1.location)
export default {}
