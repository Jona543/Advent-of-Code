const fs = require("fs");
const actual = fs.readFileSync("./day6/data6.txt", "utf-8");

const detectInfiniteLoop = (grid, startX, startY, startDirection) => {
  const directions = [
    { dx: -1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: 1, dy: 0 },
    { dx: 0, dy: -1 },
  ];

  const rows = grid.length;
  const cols = grid[0].length;

  let x = startX;
  let y = startY;
  let direction = startDirection;
  const visited = new Set();

  while (true) {
    const state = `${x}, ${y}, ${direction}`;

    if (visited.has(state)) {
      return true;
    }
    visited.add(state);

    const nextX = x + directions[direction].dx;
    const nextY = y + directions[direction].dy;

    if (nextX < 0 || nextX >= rows || nextY < 0 || nextY >= cols) {
      return false;
    }

    if (grid[nextX][nextY] === "#") {
      direction = (direction + 1) % 4;
    } else {
      x = nextX;
      y = nextY;
    }
  }
};

const getStartingPosition = () => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] !== "." && grid[i][j] !== "#") return [i, j];
    }
  }
};

const grid = actual.split("\n").map((row) => row.split(""));

function answer() {
  const [startX, startY] = getStartingPosition();
  const startDirection = 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] !== ".") continue;

      grid[i][j] = "#";

      if (detectInfiniteLoop(grid, startX, startY, startDirection)) {
        count++;
      }

      grid[i][j] = ".";
    }
  }
  console.log(count);
}

answer();
