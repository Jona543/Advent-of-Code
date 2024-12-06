const fs = require("fs");
const actual = fs.readFileSync("./day3/data.txt", "utf-8");

function extract(data) {
  const regex = /mul\(\d{1,3},\d{1,3}\)/g;
  const arr = data.match(regex);
  const regex2 = /\d{1,3},\d{1,3}/g;
  const numsArr = [];
  arr.forEach((item) => {
    numsArr.push(item.match(regex2));
  });
  let total = 0;
  numsArr.forEach((pair) => {
    const ind = pair[0].split(",");
    const sum = ind[0] * ind[1];
    total += sum;
  });
  return total;
}

console.log(extract(actual));
