const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const dp1 = Array.from({ length: N + 1 }, () => Array(3).fill(Infinity));
const dp2 = Array.from({ length: N + 1 }, () => Array(3).fill(Infinity));
const dp3 = Array.from({ length: N + 1 }, () => Array(3).fill(Infinity));

const cost = input.slice(1).map((v) => v.split(' ').map(Number));

dp1[1][0] = cost[0][0]; // 1번집 R
dp2[1][1] = cost[0][1]; // 1번집 G
dp3[1][2] = cost[0][2]; // 1번집 B

function cal(dp) {
  for (let i = 2; i <= N; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + cost[i - 1][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + cost[i - 1][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + cost[i - 1][2];
  }
}

cal(dp1);
cal(dp2);
cal(dp3);

const answer = Math.min(
  dp1[N][1],
  dp1[N][2],
  dp2[N][0],
  dp2[N][2],
  dp3[N][0],
  dp3[N][1]
);
console.log(answer);
