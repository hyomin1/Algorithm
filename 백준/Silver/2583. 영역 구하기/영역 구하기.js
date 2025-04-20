const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [M, N, K] = input[0].split(' ').map(Number);

const board = Array(M)
  .fill()
  .map(() => Array(N).fill(0));
for (let i = 1; i <= K; i++) {
  const [startX, startY, endX, endY] = input[i].split(' ').map(Number);
  for (let j = startY; j < endY; j++) {
    for (let k = startX; k < endX; k++) {
      board[j][k] = 1;
    }
  }
}
const answer = [];

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function isValidMove(x, y) {
  return x >= 0 && y >= 0 && x < N && y < M && board[y][x] === 0;
}

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (board[i][j] === 0) {
      const queue = [[i, j]];
      let count = 0;
      while (queue.length > 0) {
        const [y, x] = queue.shift();
        count++;

        board[y][x] = 1;
        for (let k = 0; k < 4; k++) {
          const nx = dx[k] + x;
          const ny = dy[k] + y;
          if (!isValidMove(nx, ny)) continue;
          board[ny][nx] = 1;
          queue.push([ny, nx]);
        }
      }
      answer.push(count);
    }
  }
}
answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join(' '));
