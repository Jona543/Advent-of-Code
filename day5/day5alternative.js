const fs = require("fs/promises");

let niceMiddleTotal = 0;

fs.readFile("./day5/data5.txt", "utf-8").then((d) => {
  const rules = d.split("\n\n")[0].split("\n");
  const updates = d
    .split("\n\n")[1]
    .split("\n")
    .map((str) => {
      return str.split(",").map((x) => {
        return Number(x);
      });
    });

  let newList = sortPrinter(updates, rules);

  niceMiddleTotal = 0;

  while (newList.length !== 0) {
    newList = sortPrinter(newList, rules);
  }

  console.log(niceMiddleTotal);
});

function sortPrinter(updates, rules) {
  const niceList = [];
  const naughtyList = [];

  for (let i = 0; i < updates.length; i++) {
    let pass = true;
    for (let j = 0; j < rules.length; j++) {
      [num1, num2] = rules[j].split("|").map((x) => {
        return Number(x);
      });

      const index1 = updates[i].indexOf(num1);
      const index2 = updates[i].indexOf(num2);

      if (index1 > index2 && index2 !== -1) {
        pass = false;
      }
    }
    if (pass) {
      niceList.push(updates[i]);
    } else {
      naughtyList.push(updates[i]);
    }
  }

  for (let i = 0; i < niceList.length; i++) {
    niceMiddleTotal += Number(niceList[i][Math.floor(niceList[i].length / 2)]);
  }

  naughtyList.map((x) => {
    return fixUpdate(x, rules);
  });

  return naughtyList;
}

function fixUpdate(update, rules) {
  for (let i = 0; i < rules.length; i++) {
    [num1, num2] = rules[i].split("|").map((x) => {
      return Number(x);
    });

    const index1 = update.indexOf(num1);
    const index2 = update.indexOf(num2);

    if (index1 !== -1 && index2 !== -1 && index1 > index2) {
      updateCopy = [...update];
      update[index1] = updateCopy[index2];
      update[index2] = updateCopy[index1];
    }
  }

  return update;
}
