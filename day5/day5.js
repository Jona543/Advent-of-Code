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

// testers.forEach((tester) => {
//   //   console.log(rulescheck(tester));
//   total += rulescheck(tester);
// });
// console.log(total);

function sorter(before, after, array, index) {
  for (let i = 0; i < index; i++) {
    if (after.includes(array[i])) {
      const newArr = array.slice(0, i) + array.slice(i, array.length);
      return sorter(
        before,
        after,
        newArr.splice(i - 1, 0, array[i]),
        index - 1
      );
    }
  }
  for (let j = index + 1; j < array.length; j++) {
    if (before.includes(array[j])) {
      // console.log("here2");
      const newArr = array.slice(0, i) + array.slice(i, array.length);
      return sorter(
        before,
        after,
        newArr.splice(i + 1, 0, array[i]),
        index + 1
      );
    }
  }
  return array;
}

function useSorter(tester) {
  let index = 0;
  while (index < tester.length) {
    const before = [];
    const after = [];
    rules.forEach((rule) => {
      if (rule[1] === num) {
        before.push(rule[0]);
      } else if (rule[0] === num) {
        after.push(rule[1]);
      }
    });
    const sortedArr = sorter(before, after, array, index);
  }

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
    sorter(before, after, array, index);
  });
}

function solution2() {
  const failedtesters = [];
  testers.forEach((tester) => {
    if (!rulescheck(tester)) {
      failedtesters.push(tester);
    }
  });
}

// solution2();

const bubbleSort = (arr) => {
  const myArray = [...arr];
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < myArray.length - 1; i++) {
      const before = [];
      const after = [];
      rules.forEach((rule) => {
        if (rule[1] === myArray[i]) {
          before.push(rule[0]);
        } else if (rule[0] === myArray[i]) {
          after.push(rule[1]);
        }
      });
      if (myArray[i] > myArray[i + 1]) {
        [myArray[i], myArray[i + 1]] = [myArray[i + 1], myArray[i]];
        swapped = true;
      }
    }
    console.log(myArray);
  } while (swapped);

  return myArray;
};

let array = [12, 10, 3, 7, 4];
console.log(bubbleSort(array)); // returns [3, 4, 7, 10, 12]
console.log(array);
