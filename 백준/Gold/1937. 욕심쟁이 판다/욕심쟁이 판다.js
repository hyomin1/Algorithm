const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const board = input.slice(1).map((v) => v.split(' ').map(Number));
const dp = Array.from({ length: N }, () => Array(N).fill(0));

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let answer = -Infinity;
function dfs(y, x) {
  if (dp[y][x] !== 0) return dp[y][x];

  dp[y][x] = 1;

  for (const [dy, dx] of dirs) {
    const nx = dx + x;
    const ny = dy + y;
    if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

    if (board[ny][nx] > board[y][x]) {
      dp[y][x] = Math.max(dfs(ny, nx) + 1, dp[y][x]);
    }
  }
  return dp[y][x];
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    answer = Math.max(answer, dfs(i, j));
  }
}
console.log(answer);
