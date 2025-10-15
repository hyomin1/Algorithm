const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const board = input.slice(1).map((l) => l.split(''));

const points = [];

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (board[y][x] === 'S' || board[y][x] === 'K') points.push([y, x]);
  }
}

const dirs = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function bfs(y1, x1, y2, x2) {
  const queue = [[y1, x1, 0]];
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  visited[y1][x1] = true;

  while (queue.length) {
    const [y, x, count] = queue.shift();

    if (y === y2 && x === x2) return count;

    for (const [dy, dx] of dirs) {
      const ny = dy + y;
      const nx = dx + x;
      if (
        ny < 0 ||
        ny >= N ||
        nx < 0 ||
        nx >= N ||
        board[ny][nx] === '1' ||
        visited[ny][nx]
      )
        continue;
      queue.push([ny, nx, count + 1]);
      visited[ny][nx] = true;
    }
  }
  return -1;
}

const edges = [];
for (let i = 0; i < points.length - 1; i++) {
  const [sY, sX] = points[i];
  for (let j = i + 1; j < points.length; j++) {
    const [eY, eX] = points[j];
    const dist = bfs(sY, sX, eY, eX);
    if (dist !== -1) edges.push([i, j, dist]);
  }
}
const V = points.length;
edges.sort((a, b) => a[2] - b[2]);

const parent = Array.from({ length: V }, (_, i) => i);
function find(x) {
  if (parent[x] !== x) {
    parent[x] = find(parent[x]);
  }
  return parent[x];
}
function union(x, y) {
  const r1 = find(x);
  const r2 = find(y);

  if (r1 !== r2) {
    parent[r2] = r1;
    return true;
  }
  return false;
}

let answer = 0;
let edgeCount = 0;
for (const [a, b, c] of edges) {
  if (union(a, b)) {
    answer += c;
    edgeCount++;

    if (edgeCount === V - 1) break;
  }
}
console.log(edgeCount === V - 1 ? answer : -1);
