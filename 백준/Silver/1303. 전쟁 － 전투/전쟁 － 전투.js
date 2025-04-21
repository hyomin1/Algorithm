const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const board = [];

const visited1 = Array(M)
  .fill()
  .map(() => Array(N).fill(false));

const visited2 = Array(M)
  .fill()
  .map(() => Array(N).fill(false));

for (let i = 1; i <= M; i++) {
  board.push(input[i].trim().split(''));
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let team = 0;
let enemy = 0;

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (board[i][j] === 'W' && !visited1[i][j]) {
      const queue = [[i, j]];
      let count = 0;
      while (queue.length > 0) {
        count++;
        const [y, x] = queue.shift();
        visited1[y][x] = true;
        for (let k = 0; k < 4; k++) {
          const nx = dx[k] + x;
          const ny = dy[k] + y;
          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < N &&
            ny < M &&
            board[ny][nx] === 'W' &&
            !visited1[ny][nx]
          ) {
            visited1[ny][nx] = true;
            queue.push([ny, nx]);
          }
        }
      }
      team += count * count;
    }
  }
}

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (board[i][j] === 'B' && !visited2[i][j]) {
      const queue = [[i, j]];
      let count = 0;
      while (queue.length > 0) {
        count++;
        const [y, x] = queue.shift();
        visited2[y][x] = true;
        for (let k = 0; k < 4; k++) {
          const nx = dx[k] + x;
          const ny = dy[k] + y;
          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < N &&
            ny < M &&
            board[ny][nx] === 'B' &&
            !visited2[ny][nx]
          ) {
            visited2[ny][nx] = true;
            queue.push([ny, nx]);
          }
        }
      }
      enemy += count * count;
    }
  }
}
console.log(team, enemy);
