const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [M, N] = input[0].split(' ').map(Number);

const board = input.slice(1).map((l) => l.split('').map(Number));

let answer = Infinity;

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const queue = [[0, 0, 0]];
const visited = Array.from({ length: N }, () => Array(M).fill(false));
visited[0][0] = true;
while (queue.length) {
  const [y, x, count] = queue.shift();

  if (y === N - 1 && x === M - 1) {
    answer = Math.min(answer, count);
  }

  for (const [dy, dx] of dirs) {
    const ny = dy + y;
    const nx = dx + x;
    if (ny < 0 || ny >= N || nx < 0 || nx >= M || visited[ny][nx]) continue;

    visited[ny][nx] = true;
    if (board[ny][nx] === 1) {
      queue.push([ny, nx, count + 1]);
    } else {
      queue.unshift([ny, nx, count]);
    }
  }
}
console.log(answer);
