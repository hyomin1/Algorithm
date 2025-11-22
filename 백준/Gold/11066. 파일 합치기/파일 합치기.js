const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const T = parseInt(input[0]);
let idx = 1;
for (let i = 0; i < T; i++) {
  const K = Number(input[idx++]);
  const arr = input[idx++].split(' ').map(Number);
  const dp = Array.from({ length: K }, () => Array(K).fill(Infinity));

  for (let j = 0; j < K; j++) {
    dp[j][j] = 0;
  }
  const sums = [0];
  for (let j = 0; j < K; j++) {
    sums[j + 1] = sums[j] + arr[j];
  }

  for (let len = 2; len <= K; len++) {
    for (let j = 0; j <= K - len; j++) {
      const end = j + len - 1;

      for (let k = j; k < end; k++) {
        const cost = dp[j][k] + dp[k + 1][end] + (sums[end + 1] - sums[j]);
        dp[j][end] = Math.min(dp[j][end], cost);
      }
    }
  }
  console.log(dp[0][K - 1]);
}
