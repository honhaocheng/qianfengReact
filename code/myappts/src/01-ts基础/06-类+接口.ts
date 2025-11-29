interface Ifunc {
  getName: () => string,
  getAge: () => number
}
class A implements Ifunc {
  a1() {}
  a2() {}
  getName() {
    return "AAA";
  }
  getAge() {
    return 100
  }
}
class B implements Ifunc {
  b1() {}
  b2() {}
  getName() {
    return "CCC";
  }
  getAge() {
    return 200
  }
}
class C implements Ifunc{
  getName() {
    return "DDD";
  }
  getAge() {
    return 300
  }
}
function init(obj: Ifunc) {
  console.log(obj.getName())
  console.log(obj.getAge())
}
var objA = new A()
var objB = new B()
var objC = new C()
init(objA)
init(objB)
init(objC)
export default {};
