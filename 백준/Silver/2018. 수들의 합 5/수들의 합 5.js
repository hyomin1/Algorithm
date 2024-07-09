const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = parseInt(input[0]);

let s = 1,
  e = 1;
let sum = 1;

// N이 15일때 15만 뽑는 경우
let count = 1;
while (e != N) {
  if (sum < N) {
    e++;
    sum += e;
  } else if (sum > N) {
    sum -= s;
    s++;
  } else {
    count++;
    e++;
    sum += e;
  }
}
console.log(count);
