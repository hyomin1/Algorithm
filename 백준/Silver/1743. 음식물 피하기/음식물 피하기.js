const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M, K] = input[0].split(' ').map(Number);

const board = Array(N)
  .fill()
  .map(() => Array(M).fill(0));
const visited = Array(N)
  .fill()
  .map(() => Array(M).fill(false));

for (let i = 1; i <= K; i++) {
  const [r, c] = input[i].split(' ').map(Number);
  board[r - 1][c - 1] = 1;
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
function isValidMove(x, y) {
  return (
    x >= 0 && y >= 0 && x < M && y < N && board[y][x] === 1 && !visited[y][x]
  );
}
let max = 0;
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (board[i][j] === 1 && !visited[i][j]) {
      let count = 0;
      const queue = [[i, j]];

      while (queue.length > 0) {
        count++;
        const [y, x] = queue.shift();
        visited[y][x] = true;
        for (let k = 0; k < 4; k++) {
          const nx = dx[k] + x;
          const ny = dy[k] + y;
          if (!isValidMove(nx, ny)) continue;
          queue.push([ny, nx]);
          visited[ny][nx] = true;
        }
      }
      max = Math.max(max, count);
    }
  }
}
console.log(max);
