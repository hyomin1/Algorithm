const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const board = input.slice(1).map((l) => l.split(' ').map(Number));

let s = null;
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (board[y][x] === 9) {
      s = [y, x];
      break;
    }
  }
}

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function bfs(y, x, size) {
  const queue = [[y, x, 0]];
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  visited[y][x] = true;
  const pos = [];
  while (queue.length) {
    const [y, x, dist] = queue.shift();

    if (board[y][x] !== 0 && board[y][x] < size) {
      pos.push([y, x, dist]);
    }

    for (const [dy, dx] of dirs) {
      const ny = dy + y;
      const nx = dx + x;
      if (
        ny < 0 ||
        ny >= N ||
        nx < 0 ||
        nx >= N ||
        visited[ny][nx] ||
        board[ny][nx] > size
      )
        continue;
      queue.push([ny, nx, dist + 1]);
      visited[ny][nx] = true;
    }
  }
  return pos;
}

let answer = 0;
let size = 2;
let [y, x] = s;
let eat = 0;

while (true) {
  const fishes = bfs(y, x, size);

  if (fishes.length === 0) break;

  fishes.sort((a, b) => {
    if (a[2] !== b[2]) return a[2] - b[2];
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
  const [fy, fx, dist] = fishes[0];

  answer += dist;
  board[y][x] = 0;
  y = fy;
  x = fx;
  board[y][x] = 0;
  eat++;
  if (eat === size) {
    size++;
    eat = 0;
  }
}

console.log(answer);
