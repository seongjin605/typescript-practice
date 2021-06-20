function test() {
  const fullName: string = `Bob Bobbington`;
  const age: number = 37;
  const sentence: string = `Hello, my name is ${fullName}.
  I'll be ${age + 1} years old next month.`;
  return sentence;
}

console.log(test());

function test2() {
  const list: Array<number> = [1, 2, 3];
  return list.map(n => n);
}

console.log(test2());

interface State {
  name: string;
  capital: string;
}

const states: State[] = [
  { name: 'test', capital: 'seoul' },
  { name: 'test1', capital: 'tokyo' },
  { name: 'test2', capital: 'beijing' }
];

for (const state of states) {
  console.log(state.capital);
}

function add(a: number, b: number) {
  return a + b;
}

// const kk: number = null;
