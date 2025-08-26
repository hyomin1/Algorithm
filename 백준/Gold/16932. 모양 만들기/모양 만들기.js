const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const board = input.slice(1).map((line) => line.split(' ').map(Number));

let answer = 0;

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const visited = Array.from({ length: N }, () => Array(M).fill(false));
const queue = [];

const obj = {};
let id = 2;
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (board[y][x] === 1 && !visited[y][x]) {
      visited[y][x] = true;
      board[y][x] = id;
      let size = 0;
      queue.push([y, x]);
      while (queue.length) {
        size++;
        const [y, x] = queue.shift();

        for (const [dy, dx] of dir) {
          const nx = dx + x;
          const ny = dy + y;
          if (
            nx < 0 ||
            nx >= M ||
            ny < 0 ||
            ny >= N ||
            visited[ny][nx] ||
            board[ny][nx] !== 1
          )
            continue;
          board[ny][nx] = id;
          visited[ny][nx] = true;
          queue.push([ny, nx]);
        }
      }

      obj[id++] = size;
    }
  }
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    let size = 0;
    const set = new Set();
    if (board[y][x] === 0) {
      for (const [dy, dx] of dir) {
        const nx = dx + x;
        const ny = dy + y;
        if (nx < 0 || nx >= M || ny < 0 || ny >= N || board[ny][nx] < 2)
          continue;
        const id = board[ny][nx];
        set.add(id);
      }
      for (const id of set) {
        size += obj[id];
      }
      size++;
      answer = Math.max(answer, size);
    }
  }
}

console.log(answer);
