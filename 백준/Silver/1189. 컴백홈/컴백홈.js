const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [R, C, K] = input[0].split(' ').map(Number);

const board = [];
let answer = 0;
for (let i = 1; i <= R; i++) {
  board.push(input[i].trim().split(''));
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const visited = Array(R)
  .fill()
  .map(() => Array(C).fill(false));

function isValidMove(x, y) {
  return (
    x >= 0 && y >= 0 && x < C && y < R && !visited[y][x] && board[y][x] === '.'
  );
}

function dfs(y, x, count) {
  if (y === 0 && x === C - 1 && count === K) {
    answer++;
    return;
  }

  for (let k = 0; k < 4; k++) {
    const nx = dx[k] + x;
    const ny = dy[k] + y;

    if (!isValidMove(nx, ny)) continue;
    visited[ny][nx] = true;
    dfs(ny, nx, count + 1);
    visited[ny][nx] = false;
  }
}

visited[R - 1][0] = true;
dfs(R - 1, 0, 1);
console.log(answer);
