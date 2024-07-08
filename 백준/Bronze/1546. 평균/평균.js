const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = parseInt(input[0]);

let arr = input[1].split(" ").map(Number);

const max = Math.max(...arr);
let answer = 0;
arr.forEach((num) => {
  answer += (num / max) * 100;
});
answer /= N;
console.log(answer);
