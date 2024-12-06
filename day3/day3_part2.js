const fs = require("fs");
const actual = fs.readFileSync("./day3/data.txt", "utf-8");

function extract(data) {
  const dontregex = /don\'t\(\)/g;
  const doregex = /do\(\)/g;

  const dontArr = data.split(dontregex);
  //   console.log(dontArr);
  let total = 0;
  for (let i = 1; i < dontArr.length; i++) {
    const string = dontArr[i];
    const splitString = string.split(doregex);
    let allDonts = 0;
    if (splitString.length > 0) {
      const regex = /mul\(\d{1,3},\d{1,3}\)/g;
      const array = splitString[0].match(regex);
      const regex2 = /\d{1,3},\d{1,3}/g;
      const numsArr = [];
      array.forEach((item) => {
        numsArr.push(item.match(regex2));
      });
      numsArr.forEach((pair) => {
        const ind = pair[0].split(",");
        const sum = ind[0] * ind[1];
        allDonts += sum;
      });
    } else {
      const regex = /mul\(\d{1,3},\d{1,3}\)/g;
      const array = splitString.match(regex);
      const regex2 = /\d{1,3},\d{1,3}/g;
      const numsArr = [];
      array.forEach((item) => {
        numsArr.push(item.match(regex2));
      });
      numsArr.forEach((pair) => {
        const ind = pair[0].split(",");
        const sum = ind[0] * ind[1];
        allDonts += sum;
      });
    }
    total += allDonts;
    // doArr.forEach((string) => {
    //   const regex = /mul\(\d{1,3},\d{1,3}\)/g;
    //   const array = string.match(regex);
    //   //   console.log(array);
    //   const regex2 = /\d{1,3},\d{1,3}/g;
    //   const numsArr = [];
    //   array.forEach((item) => {
    //     numsArr.push(item.match(regex2));
    //   });

    //   numsArr.forEach((pair) => {
    //     const ind = pair[0].split(",");
    //     const sum = ind[0] * ind[1];
    //     total += sum;
    //   });

    //   return total;
    // });
    // console.log(total);
  }
  console.log(total);
}

extract(actual);

//   const charArr = [];
//   for (let i = 0; i < data.length; i++) {
//     charArr.push(data[i]);
//   }
//   let doDont = 1
//   for (let i = 0; i < charArr.length; i++) {
//     if (
//       charArr[i] === "d" &&
//       charArr[i + 1] === "o" &&
//       charArr[i + 2] === "(" &&
//       charArr[i + 3] === ")"
//     ) {

//     }
//   }
