const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let A = input[1].split(" ").map(Number);

let S = [];
S[0] = A[0] % M;
for (let i = 1; i < N; i++) {
  S[i] = (S[i - 1] + A[i]) % M;
}
let answer = 0;
//M으로 나누었을때 나머지는 0,1,..M-1까지 M-1개 존재
let C = new Array(M).fill(0);
for (let i = 0; i < N; i++) {
  if (S[i] === 0) answer++;
  C[S[i]]++;
}
for (let i = 0; i < M; i++) {
  if (C[i] > 1) {
    answer += (C[i] * (C[i] - 1)) / 2;
  }
}
console.log(answer);
