const fs = require("fs");
actual = fs.readFileSync("./day5/data5.txt", "utf-8");
test = fs.readFileSync("./day5/data5example.txt", "utf-8");

const lines = actual.split("\n");

const rules = lines.slice(0, 1176).map((rule) => {
  return rule.split("|").map((num) => Number(num));
});

const testers = lines.slice(1177).map((tester) => {
  return tester.split(",").map((num) => Number(num));
});

const failedtesters = [];

function rulescheck(tester) {
  let pass = true;
  //   console.log(tester);
  tester.forEach((num, index, array) => {
    const before = [];
    const after = [];
    rules.forEach((rule) => {
      if (rule[1] === num) {
        before.push(rule[0]);
      } else if (rule[0] === num) {
        after.push(rule[1]);
      }
    });
    // console.log(before, after);

    for (let i = 0; i < index; i++) {
      if (after.includes(array[i])) {
        // console.log("here1", array[i], num);
        pass = false;
      }
    }
    for (let j = index + 1; j < array.length; j++) {
      if (before.includes(array[j])) {
        // console.log("here2");
        pass = false;
      }
    }
  });
  const ans = pass ? tester[Math.floor(tester.length / 2)] : 0;
  //   console.log(answer);
  return ans;
}

let total = 0;
// console.log(total);

testers.forEach((tester) => {
  //   console.log(rulescheck(tester));
  total += rulescheck(tester);
});
console.log(total);
