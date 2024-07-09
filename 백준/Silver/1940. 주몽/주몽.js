const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = parseInt(input[0]);
const M = parseInt(input[1]);

let arr = input[2].split(" ").map(Number);

arr.sort((a, b) => a - b);

let answer = 0;
s = 0;
e = arr.length - 1;
while (s < e) {
  sum = arr[s] + arr[e];
  if (sum < M) {
    sum -= arr[s];
    s++;
  } else if (sum > M) {
    sum -= arr[e];
    e--;
  } else {
    answer++;
    s++;
    e--;
  }
}
console.log(answer);
