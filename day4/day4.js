const fs = require("fs");
const actual = fs.readFileSync("./day4/data4.txt", "utf-8");

const grid = [...actual.split("\n")].map((line) => {
  return line.split("");
});

let total = 0;

const dir = {
  0: [0, 1],
  1: [1, 1],
  2: [1, 0],
  3: [1, -1],
  4: [0, -1],
  5: [-1, -1],
  6: [-1, 0],
  7: [-1, 1],
};

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    if (grid[i][j] === "X") {
      for (let k = 0; k < 8; k++) {
        const x = dir[k][0];
        const y = dir[k][1];
        try {
          if (
            (grid[i + x][j + y] ?? ".") === "M" &&
            (grid[i + 2 * x][j + 2 * y] ?? ".") === "A" &&
            (grid[i + 3 * x][j + 3 * y] ?? ".") === "S"
          ) {
            total++;
          }
        } catch {}
      }
    }
    // console.log(total);
  }
}

function solution2() {
  const dir = {
    0: [1, 1],
    1: [1, -1],
    2: [-1, -1],
    3: [-1, 1],
  };

  let total2 = 0;

  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      let leftdownright = "";
      let rightdownleft = "";
      if (grid[i][j] === "A") {
        for (let k = 0; k < 4; k++) {
          const x = dir[k][0];
          const y = dir[k][1];
          const letter = grid[i + x][j + y] ?? ".";
          if (!(k % 2)) {
            rightdownleft += letter;
          } else {
            leftdownright += letter;
          }
        }
        if (
          (rightdownleft === "MS" || rightdownleft === "SM") &&
          (leftdownright === "MS" || leftdownright === "SM")
        ) {
          total2++;
        }
      }
    }
  }
  console.log(total2);
}

solution2();
