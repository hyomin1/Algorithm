const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);

const board = [];

for (let i = 1; i <= n; i++) {
  board.push(input[i].split(' ').map(Number));
}

const visited = Array(n)
  .fill()
  .map(() => Array(m).fill(false));
let count = 0;
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function isValidMove(x, y) {
  return (
    x >= 0 && y >= 0 && x < m && y < n && board[y][x] === 1 && !visited[y][x]
  );
}

let max = 0;

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (board[i][j] === 1 && !visited[i][j]) {
      count++;
      let picCount = 0;
      const queue = [[i, j]];
      while (queue.length > 0) {
        const [y, x] = queue.shift();
        picCount++;
        visited[y][x] = true;
        for (let k = 0; k < 4; k++) {
          const nx = dx[k] + x;
          const ny = dy[k] + y;
          if (!isValidMove(nx, ny)) continue;
          visited[ny][nx] = true;
          queue.push([ny, nx]);
        }
      }
      max = Math.max(max, picCount);
    }
  }
}
console.log(count);
console.log(max);
