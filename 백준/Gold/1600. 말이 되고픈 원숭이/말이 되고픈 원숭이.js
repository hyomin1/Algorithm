const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const K = parseInt(input[0]);

const [W, H] = input[1].split(' ').map(Number);
const board = input.slice(2).map((v) => v.split(' ').map(Number));

const queue = [[0, 0, 0, 0]];

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const horse = [
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
];

let front = 0;

const visited = Array.from({ length: H }, () =>
  Array.from({ length: W }, () => Array(K + 1).fill(false))
);

while (front < queue.length) {
  const [y, x, count, k] = queue[front++];

  if (y === H - 1 && x === W - 1) {
    console.log(count);
    process.exit(0);
  }

  for (const [dy, dx] of dirs) {
    const ny = dy + y;
    const nx = dx + x;

    if (ny < 0 || ny >= H || nx < 0 || nx >= W) continue;
    if (board[ny][nx] === 1 || visited[ny][nx][k]) continue;

    queue.push([ny, nx, count + 1, k]);
    visited[ny][nx][k] = true;
  }

  if (k < K) {
    for (const [dy, dx] of horse) {
      const ny = dy + y;
      const nx = dx + x;
      if (ny < 0 || ny >= H || nx < 0 || nx >= W) continue;
      if (board[ny][nx] === 1 || visited[ny][nx][k + 1]) continue;

      queue.push([ny, nx, count + 1, k + 1]);
      visited[ny][nx][k + 1] = true;
    }
  }
}

console.log(-1);
