const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map((l) => l.split(' ').map(Number));
// 1. 바이러스 위치 찾아서 M개의 조합 찾기

const virus = [];

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (board[y][x] === 2) {
      virus.push([y, x]);
    }
  }
}
const comb = [];
function dfs(start, path) {
  if (path.length === M) {
    comb.push([...path]);
    return;
  }
  for (let i = start; i < virus.length; i++) {
    dfs(i + 1, [...path, i]);
  }
}

dfs(0, []);

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let answer = Infinity;

let count = 0;
for (const pos of comb) {
  const queue = [];
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const time = Array.from({ length: N }, () => Array(N).fill(-1));

  for (const index of pos) {
    const [y, x] = virus[index];
    time[y][x] = 0;
    visited[y][x] = true;
    queue.push([y, x]);
  }

  while (queue.length) {
    const [y, x] = queue.shift();

    for (const [dy, dx] of dirs) {
      const ny = dy + y;
      const nx = dx + x;

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if (visited[ny][nx] || board[ny][nx] === 1) continue;

      visited[ny][nx] = true;
      time[ny][nx] = time[y][x] + 1;
      queue.push([ny, nx]);
    }
  }

  let max = 0;
  let found = false;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (board[y][x] === 0) {
        if (time[y][x] === -1) found = true;
        else max = Math.max(max, time[y][x]);
      }
    }
  }
  if (!found) answer = Math.min(answer, max);
}

console.log(answer === Infinity ? -1 : answer);
