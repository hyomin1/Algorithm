const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const A = [];
A[0] = 0;

for (let i = 1; i <= N; i++) {
  A[i] = Number(input[i]);
}
const dp = [];
dp[0] = 0;
dp[1] = A[1];

if (N > 1) {
  dp[2] = dp[1] + A[2];
}

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(dp[i - 1], dp[i - 2] + A[i], dp[i - 3] + A[i - 1] + A[i]);
}

console.log(dp[N]);
