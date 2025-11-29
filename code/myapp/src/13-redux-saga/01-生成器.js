function *test() {
    console.log('111111');
    var input1 = yield "1111-输出";
    console.log('222222', input1);
    var input2 = yield "2222-输出";
    console.log('333333', input2);
    var input3 = yield "3333-输出";
    console.log('444444', input3);
}

var kerwintest = test();
var res1 = kerwintest.next();
console.log(res1);
var res2 = kerwintest.next('aaaa');
console.log(res2);
var res3 = kerwintest.next('bbbb');
console.log(res3);
var res4 = kerwintest.next('cccc');
console.log(res4);

// async function A() {
//     var res1 = await fetch()
//     var res2 = await fetch()
//     var res3 = await fetch()
//     console.log(res3);
// }

function *test1() {
    setTimeout(() => {
        console.log('11111-success')
        kerwintest1.next();
    }, 1000);
    yield;

    setTimeout(() => {
        console.log('22222-success')
        kerwintest1.next();
    }, 1000);
    yield;

    setTimeout(() => {
        console.log('33333-success')
    }, 1000);
    yield;
}

var kerwintest1 = test1();
kerwintest1.next();