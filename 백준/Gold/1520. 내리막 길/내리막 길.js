const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const board = input.slice(1).map((l) => l.split(' ').map(Number));

const dp = Array.from({ length: N }, () => Array(M).fill(-1));

const dirs = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

function dfs(y, x) {
  if (y === N - 1 && x === M - 1) {
    return 1;
  }

  if (dp[y][x] !== -1) return dp[y][x];

  dp[y][x] = 0;
  for (const [dy, dx] of dirs) {
    const ny = dy + y;
    const nx = dx + x;
    if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
    if (board[ny][nx] < board[y][x]) {
      dp[y][x] += dfs(ny, nx);
    }
  }
  return dp[y][x];
}

console.log(dfs(0, 0));
