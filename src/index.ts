function add(a: number, b: number) {
  return a + b;
}

function sum(numbers: number[]) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

function greet() {
  console.log("Hi, there!");
}

export = { add, sum, greet };
