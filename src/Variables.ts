// function f() {
//   var a = 10;
//   console.log("a=", a);
//   return function g() {
//     var b = a + 1;
//     console.log("b=", b);
//     return b;
//   };
// }

// var g = f();
// g(); // 오류 '11'

// let : 렉시컬-스코프 또는 블록-스코프를 사용
function f(input: boolean) {
  let a = 100;

  if (input) {
    // 'a'는 이곳에서 가능
    let b = a + 1;
    return b;
  }

  // 오류: 'b'는 여기에 존재하지 않습니다.
  //return b;
}
