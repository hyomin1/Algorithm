const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [M, N] = input[0].split(' ').map(Number);

const board = [];

for (let i = 1; i <= M; i++) {
  board.push(input[i].split(' ').map(Number));
}

const visited = Array(M)
  .fill()
  .map(() => Array(N).fill(false));

const dx = [1, -1, 0, 0, 1, -1, 1, -1];
const dy = [0, 0, 1, -1, -1, -1, 1, 1];

function isValidMove(x, y) {
  return (
    x >= 0 && y >= 0 && x < N && y < M && board[y][x] === 1 && !visited[y][x]
  );
}
let answer = 0;
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (board[i][j] === 1 && !visited[i][j]) {
      answer++;
      visited[i][j] = true;
      const queue = [[i, j]];
      while (queue.length > 0) {
        const [y, x] = queue.shift();
        visited[y][x] = true;
        for (let k = 0; k < 8; k++) {
          const nx = dx[k] + x;
          const ny = dy[k] + y;
          if (!isValidMove(nx, ny)) continue;
          visited[ny][nx] = true;
          queue.push([ny, nx]);
        }
      }
    }
  }
}

console.log(answer);
