const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const K = parseInt(input[0]);
const [W, H] = input[1].split(' ').map(Number);
const board = input.slice(2).map((line) => line.split(' ').map(Number));

const queue = [[0, 0, 0, 0]]; // y, x, count, k체크

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const horse = [
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
  [2, 1],
  [1, 2],
];

const visited = Array.from({ length: H }, () =>
  Array.from({ length: W }, () => Array.from(K + 1))
);
visited[0][0][0] = true;

function isValid(y, x) {
  return y >= 0 && y < H && x >= 0 && x < W && board[y][x] !== 1;
}
while (queue.length) {
  const [y, x, count, k] = queue.shift();

  if (y === H - 1 && x === W - 1) {
    console.log(count);
    process.exit(0);
  }

  if (k < K) {
    for (const [dy, dx] of horse) {
      const nx = dx + x;
      const ny = dy + y;
      if (!isValid(ny, nx)) continue;
      if (!visited[ny][nx][k + 1]) {
        queue.push([ny, nx, count + 1, k + 1]);
        visited[ny][nx][k + 1] = true;
      }
    }
  }
  for (const [dy, dx] of dir) {
    const nx = dx + x;
    const ny = dy + y;
    if (!isValid(ny, nx)) continue;
    if (!visited[ny][nx][k]) {
      queue.push([ny, nx, count + 1, k]);
      visited[ny][nx][k] = true;
    }
  }
}
console.log(-1);
