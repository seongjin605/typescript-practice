function test() {
    const fullName = `Bob Bobbington`;
    const age = 37;
    const sentence = `Hello, my name is ${fullName}.
  I'll be ${age + 1} years old next month.`;
    return sentence;
}
console.log(test());
function test2() {
    const list = [1, 2, 3];
    return list.map(n => n);
}
console.log(test2());
const states = [
    { name: 'test', capital: 'seoul' },
    { name: 'test1', capital: 'tokyo' },
    { name: 'test2', capital: 'beijing' }
];
for (const state of states) {
    console.log(state.capital);
}
function add(a, b) {
    return a + b;
}
// const kk: number = null;
//# sourceMappingURL=Variables.js.map