const fs = require("fs");
const actual = fs.readFileSync("./day13/data13.txt", "utf-8");

const machines = actual.split("\n\n").map((m) => m.match(/\d+/g).map(Number));

function tokens([aX, aY, bX, bY, pX, pY]) {
  // aX * a + bX * b = pX
  // aY * a + bY * b = pY
  const a = (pX * bY - pY * bX) / (aX * bY - aY * bX);
  const b = (aX * pY - aY * pX) / (aX * bY - aY * bX);
  return Number.isInteger(a) && Number.isInteger(b) ? a * 3 + b : 0;
}

const e = machines.reduce((acc, machine) => acc + tokens(machine), 0);

console.log(e);
