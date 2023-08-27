function add(a, b) {
  return a + b;
}

function sum(numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

function greet() {
  console.log("Hi, there!");
}

module.exports = { add, sum, greet };
