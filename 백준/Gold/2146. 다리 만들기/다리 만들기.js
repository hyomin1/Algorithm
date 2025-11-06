const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const board = input.slice(1).map((l) => l.split(' ').map(Number));

let num = 1;
const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const visited = Array.from({ length: N }, () => Array(N).fill(0));

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (board[y][x] === 1 && visited[y][x] === 0) {
      const queue = [[y, x]];
      visited[y][x] = num;
      while (queue.length) {
        const [cy, cx] = queue.shift();

        for (const [dy, dx] of dirs) {
          const ny = dy + cy;
          const nx = dx + cx;
          if (
            ny < 0 ||
            ny >= N ||
            nx < 0 ||
            nx >= N ||
            visited[ny][nx] !== 0 ||
            board[ny][nx] === 0
          )
            continue;
          visited[ny][nx] = num;
          queue.push([ny, nx]);
        }
      }
      num++;
    }
  }
}

const edges = {};

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (visited[y][x] !== 0) {
      for (const [dy, dx] of dirs) {
        const ny = dy + y;
        const nx = dx + x;
        if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;
        if (visited[ny][nx] === 0) {
          const island = visited[y][x];
          if (!edges[island]) edges[island] = [];
          edges[island].push([y, x]);
          break;
        }
      }
    }
  }
}
let answer = Infinity;
for (let i = 1; i < num; i++) {
  const visited2 = Array.from({ length: N }, () => Array(N).fill(false));
  const queue = [];
  for (const [y, x] of edges[i]) {
    queue.push([y, x, 0]);
    visited2[y][x] = true;
  }
  while (queue.length) {
    const [y, x, dist] = queue.shift();

    for (const [dy, dx] of dirs) {
      const nx = dx + x;
      const ny = dy + y;
      if (nx < 0 || nx >= N || ny < 0 || ny >= N || visited2[ny][nx]) continue;
      if (visited[ny][nx] !== 0 && visited[ny][nx] !== i) {
        answer = Math.min(answer, dist);
        break;
      }

      if (board[ny][nx] === 0) {
        visited2[ny][nx] = true;
        queue.push([ny, nx, dist + 1]);
      }
    }
  }
}
console.log(answer);
