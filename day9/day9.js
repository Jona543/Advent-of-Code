const fs = require("fs");
const actual = fs.readFileSync("./day9/data9.txt", "utf-8");

const data = actual.split("").map(Number);

const unpackedDisk = [];

for (let i = 0; i < data.length; i++) {
  for (let j = data[i]; j > 0; j--) {
    if (i % 2 === 0) {
      unpackedDisk.push(i / 2);
    } else {
      unpackedDisk.push(".");
    }
  }
}

// defrag
unpackedDisk.forEach((block, index) => {
  if (block === ".") {
    while (true) {
      const temp = unpackedDisk.pop();
      if (temp === ".") {
        continue;
      } else {
        unpackedDisk[index] = temp;
        break;
      }
    }
  }
});

let checksum = 0;

unpackedDisk.forEach((block, id) => {
  checksum += block * id;
});

console.log(checksum);
