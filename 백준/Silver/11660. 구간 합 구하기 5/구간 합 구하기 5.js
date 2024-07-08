const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const A = input.slice(1, N + 1).map((num) => num.split(" ").map(Number));

let S = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

//구간 합 구하기
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    S[i][j] = A[i - 1][j - 1] + S[i][j - 1] + S[i - 1][j] - S[i - 1][j - 1];
  }
}
let answer = [];
for (let i = N + 1; i < N + M + 1; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  answer.push(S[x2][y2] - S[x1 - 1][y2] - S[x2][y1 - 1] + S[x1 - 1][y1 - 1]);
}
console.log(answer.join("\n"));
