const fs = require("fs");
actual = fs.readFileSync("./day8/data8.txt", "utf-8");

const grid = actual.split("\n");
const gridSize = grid.length;

const antennas = [];
for (let x = 0; x < gridSize; x++) {
  for (let y = 0; y < gridSize; y++) {
    if (grid[x][y] !== ".") {
      antennas.push({
        char: grid[x][y],
        x: x,
        y: y,
      });
    }
  }
}

const antiNodes = new Set();
antennas.forEach((a) => {
  antennas.forEach((b) => {
    if (a.char !== b.char || a === b) return;

    const dY = b.y - a.y;
    const dX = b.x - a.x;
    const newPoint = {
      y: a.y,
      x: a.x,
    };

    while (true) {
      newPoint.y += dY;
      newPoint.x += dX;

      if (
        newPoint.y < 0 ||
        newPoint.x < 0 ||
        newPoint.x >= gridSize ||
        newPoint.y >= gridSize
      )
        return;

      antiNodes.add(`${newPoint.x}|${newPoint.y}`);
    }
  });
});

console.log(antiNodes.size);
