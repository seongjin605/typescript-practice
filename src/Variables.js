function f() {
    var a = 10;
    console.log("a=", a);
    return function g() {
        var b = a + 1;
        console.log("b=", b);
        return b;
    };
}
var g = f();
g(); // 오류 '11'
//# sourceMappingURL=Variables.js.map