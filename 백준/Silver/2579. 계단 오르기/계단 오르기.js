const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const arr = [];
arr[0] = 0;
for (let i = 1; i <= N; i++) {
  arr[i] = Number(input[i]);
}

const dp = [];
dp[0] = 0;
dp[1] = arr[1];
dp[2] = arr[1] + arr[2];
for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(dp[i - 3] + arr[i - 1], dp[i - 2]) + arr[i];
}
console.log(dp[N]);
