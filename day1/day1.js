const fs = require("fs");
const actual = fs.readFileSync("./day1/list.txt", "utf-8");
const example = `3   4
4   3
2   5
1   3
3   9
3   3`;

function createLists(data) {
  const items = data.match(/[0-9]+/g);
  const lists = [[], []];
  items.forEach((element, i) => {
    lists[i % 2].push(+element);
  });
  return lists;
}
function sortList(list) {
  return list.sort((a, b) => {
    return a - b;
  });
}
function totalDistanceBetweenLists(listA, listB) {
  let total = 0;
  let listLength =
    (listA.length >= listB.length ? listA.length : listB.length) - 1;
  while (listLength >= 0) {
    const a = listA[listLength];
    const b = listB[listLength];
    total += Math.abs(a - b);
    listLength--;
  }
  return total;
}
function totalList(list) {
  return list.reduce((totals, item) => {
    if (!totals[item]) totals[item] = 1;
    else totals[item]++;
    return totals;
  }, {});
}
function calculateSimilarities(list, listMap) {
  let total = 0;
  let listLength = list.length - 1;
  while (listLength >= 0) {
    const item = list[listLength];
    const multiplier = listMap[item] || 0;
    total += item * multiplier;
    listLength--;
  }
  return total;
}
const solution1 = (data) => {
  const [listA, listB] = createLists(data);
  sortList(listA);
  sortList(listB);
  return totalDistanceBetweenLists(listA, listB);
};
const solution2 = (data) => {
  const [listA, listB] = createLists(data);
  const listBMap = totalList(listB);
  return calculateSimilarities(listA, listBMap);
};

console.log(solution2(actual));
solution2(actual);
