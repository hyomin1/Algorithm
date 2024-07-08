const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let A = input[1].split(" ").map(Number);

// 합 배열 S 만들기
let S = new Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  S[i] = S[i - 1] + A[i - 1];
}

let answer = [];
for (let i = 2; i < M + 2; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  // 구간 합 구하기
  let res = S[b] - S[a - 1];
  answer.push(res);
}
console.log(answer.join("\n"));
