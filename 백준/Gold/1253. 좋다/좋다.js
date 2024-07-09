const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = parseInt(input[0]);

let arr = input[1].split(" ").map(Number);

let last = arr.length - 1;
let num = arr[last];
let answer = 0;

arr.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  const findNum = arr[i];

  let s = 0,
    e = N - 1;
  let sum = 0;
  while (s < e) {
    sum = arr[s] + arr[e];
    //수의 위치가 다르면 값이 같아도 다른 수이다.
    if (sum === findNum) {
      if (s !== i && e !== i) {
        answer++;
        break;
      } else if (s === i) {
        s++;
      } else if (e === i) {
        e--;
      }
    } else if (sum < findNum) {
      s++;
    } else {
      e--;
    }
  }
}
console.log(answer);
