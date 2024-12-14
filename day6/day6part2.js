const fs = require("fs");
const actual = fs.readFileSync("./day6/data6.txt", "utf-8");

const getStartingPosition = () => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] !== "." && grid[i][j] !== "#") return [i, j];
    }
  }
};

const grid = actual.split("\n").map((row) => row.split(""));
const rows = grid.length;
const cols = grid[0].length;
let [x, y] = getStartingPosition();
