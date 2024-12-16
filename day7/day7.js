const fs = require("fs");
const actual = fs.readFileSync("./day7/data7.txt", "utf-8");
const operators = ["+", "*"];

const list = actual
  .split("\n")
  .map((row) => row.replace(":", ""))
  .map((row) => row.split(" ").map(Number));

function checkCombinationsForTarget(numbers, target) {
  let operatorCombinations = operators.map((op) => [op]);
  for (let i = 1; i < numbers.length - 1; i++) {
    operatorCombinations = operatorCombinations.flatMap((combination) =>
      operators.map((op) => [...combination, op])
    );
  }

  for (let combination of operatorCombinations) {
    let result = numbers[0];
    for (let i = 0; i < combination.length; i++) {
      if (combination[i] === "+") {
        result += numbers[i + 1];
      } else if (combination[i] === "*") {
        result *= numbers[i + 1];
      }
    }
    if (result === target) {
      return true;
    }
  }
  return false;
}

let result = 0;
list.forEach((row) => {
  const target = row[0];
  const numbers = row.slice(1);
  if (checkCombinationsForTarget(numbers, target)) {
    result += target;
  }
});

console.log(result);
