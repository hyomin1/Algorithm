const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [R, C] = input[0].split(' ').map(Number);

const board = input.slice(1);

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function isValidMove(x, y) {
  return x >= 0 && x < C && y >= 0 && y < R;
}
const visited = Array(26).fill(false);

let max = -Infinity;
function dfs(x, y, depth) {
  max = Math.max(max, depth);

  for (let i = 0; i < 4; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;
    if (!isValidMove(nx, ny)) continue;
    const code = board[ny][nx].charCodeAt(0) - 65;
    if (!visited[code]) {
      visited[code] = true;
      dfs(nx, ny, depth + 1);
      visited[code] = false;
    }
  }
}
visited[board[0][0].charCodeAt(0) - 65] = true;
dfs(0, 0, 1);
console.log(max);
