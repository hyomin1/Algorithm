const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const board = input.slice(1).map((l) => l.split(' ').map(Number));

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let time = 0;

while (true) {
  const queue = [[0, 0]];
  const air = Array.from({ length: N }, () => Array(M).fill(0));

  while (queue.length) {
    const [y, x] = queue.shift();

    for (const [dy, dx] of dirs) {
      const ny = dy + y;
      const nx = dx + x;
      if (
        ny < 0 ||
        ny >= N ||
        nx < 0 ||
        nx >= M ||
        board[ny][nx] !== 0 ||
        air[ny][nx] === -1
      )
        continue;

      queue.push([ny, nx]);
      air[ny][nx] = -1;
    }
  }
  const cheese = [];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (board[y][x] === 1) {
        cheese.push([y, x]);
      }
    }
  }
  if (cheese.length === 0) break;

  for (const [cy, cx] of cheese) {
    let count = 0;
    for (const [dy, dx] of dirs) {
      const ny = dy + cy;
      const nx = dx + cx;
      if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
      if (air[ny][nx] === -1) count++;
    }
    if (count >= 2) board[cy][cx] = 0;
  }
  time++;
}
console.log(time);
