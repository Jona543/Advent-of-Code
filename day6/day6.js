const fs = require("fs");

fs.readFile("data6.txt", "utf-8", (err, data) => {
  console.log(data);
  const getStartingPosition = () => {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] !== "." && grid[i][j] !== "#") return [i, j];
      }
    }
  };

  const grid = data.split("\n").map((row) => row.split(""));
  const rows = grid.length;
  const cols = grid[0].length;
  let [x, y] = getStartingPosition();

  const directions = [
    { dx: -1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: 1, dy: 0 },
    { dx: 0, dy: -1 },
  ];
  let direction = 0;

  const visited = new Set();

  while (true) {
    visited.add(`${x}, ${y}`);

    const nextX = x + directions[direction].dx;
    const nextY = y + directions[direction].dy;

    if (nextX < 0 || nextX >= rows || nextY < 0 || nextY >= cols) {
      break;
    }

    if (grid[nextX][nextY] === "#") {
      direction = (direction + 1) % 4;
    } else {
      x = nextX;
      y = nextY;
    }
  }
  console.log({ part1: visited.size });
});
