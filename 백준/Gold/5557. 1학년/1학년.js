const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const arr = input[1].split(' ').map(Number);

const res = arr[arr.length - 1];

const dp = Array.from({ length: N }, () => Array(21).fill(0n));


  dp[0][arr[0]] = 1n;


for (let i = 1; i <= N - 2; i++) {
  const val = arr[i];
  for (let j = 0; j <= 20; j++) {
    if (dp[i - 1][j] > 0n) {
      if (j - val >= 0) dp[i][j - val] += dp[i - 1][j];
      if (j + val <= 20) dp[i][j + val] += dp[i - 1][j];
    }
  }
}

console.log(dp[N - 2][res].toString());
