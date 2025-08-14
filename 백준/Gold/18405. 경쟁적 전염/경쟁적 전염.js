const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const board = input.slice(1, N + 1).map((line) => line.split(' ').map(Number));
const [S, X, Y] = input[N + 1].split(' ').map(Number);

const queue = [];

for (let y = 0; y < board.length; y++) {
  for (let x = 0; x < board[y].length; x++) {
    if (board[y][x] !== 0) {
      queue.push([board[y][x], y, x, 0]);
    }
  }
}

queue.sort((a, b) => a[0] - b[0]);

let time = 0;
while (queue.length && time < S) {
  const length = queue.length;

  for (let i = 0; i < length; i++) {
    const [virus, y, x, t] = queue.shift();

    for (let d = 0; d < 4; d++) {
      const ny = dy[d] + y;
      const nx = dx[d] + x;
      if (ny >= 0 && ny < N && nx >= 0 && nx < N && board[ny][nx] === 0) {
        board[ny][nx] = virus;
        queue.push([virus, ny, nx, t + 1]);
      }
    }
  }
  time++;
}
console.log(board[X - 1][Y - 1]);
