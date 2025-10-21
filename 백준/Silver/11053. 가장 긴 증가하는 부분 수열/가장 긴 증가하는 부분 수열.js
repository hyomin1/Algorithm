const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const A = input[1].split(' ').map(Number);
const dp = Array.from({ length: N }).fill(1);

dp[0] = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
console.log(Math.max(...dp));
