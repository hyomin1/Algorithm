const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const T = Number(input[0]);

let idx = 1;

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
for (let i = 0; i < T; i++) {
  const [w, h] = input[idx++].split(' ').map(Number);
  const board = input.slice(idx, idx + h).map((v) => v.split(''));
  idx += h;

  const queue = [];
  const person = [];
  const visited = Array.from({ length: h }, () => Array(w).fill(Infinity));
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (board[y][x] === '*') {
        queue.push([y, x, 0]);
        visited[y][x] = 0;
      } else if (board[y][x] === '@') person.push([y, x, 0]);
    }
  }
  let head = 0;
  while (head < queue.length) {
    const [y, x, time] = queue[head++];

    for (const [dy, dx] of dirs) {
      const ny = dy + y;
      const nx = dx + x;
      if (ny < 0 || ny >= h || nx < 0 || nx >= w) continue;
      if (board[ny][nx] === '#') continue;
      if (visited[ny][nx] <= time + 1) continue;

      visited[ny][nx] = time + 1;
      queue.push([ny, nx, time + 1]);
    }
  }
  const visited2 = Array.from({ length: h }, () => Array(w).fill(false));
  const [y, x] = person[0];
  visited2[y][x] = true;
  let answer = 'IMPOSSIBLE';
  head = 0;
  while (head < person.length) {
    const [y, x, time] = person[head++];

    if (y === 0 || y === h - 1 || x === 0 || x === w - 1) {
      answer = time + 1;
      break;
    }

    for (const [dy, dx] of dirs) {
      const ny = dy + y;
      const nx = dx + x;
      if (ny < 0 || ny >= h || nx < 0 || nx >= w) continue;
      if (board[ny][nx] === '#' || visited2[ny][nx]) continue;
      if (visited[ny][nx] <= time + 1) continue;

      visited2[ny][nx] = true;
      person.push([ny, nx, time + 1]);
    }
  }
  console.log(answer);
}
