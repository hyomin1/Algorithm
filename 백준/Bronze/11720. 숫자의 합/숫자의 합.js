const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = parseInt(input[0]);

let arr = input[1].split("").map(Number);

let answer = arr.reduce((prev, cur) => {
  return (prev += cur);
});
console.log(answer);
