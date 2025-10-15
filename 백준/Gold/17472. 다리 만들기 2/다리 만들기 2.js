const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const board = input.slice(1).map((l) => l.split(' ').map(Number));

const visited = Array.from({ length: N }, () => Array(M).fill(false));
const island = Array.from({ length: N }, () => Array(M).fill(0));
const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let num = 1;
function bfs(y, x) {
  const queue = [[y, x]];
  visited[y][x] = true;
  island[y][x] = num;
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
        board[ny][nx] !== 1 ||
        visited[ny][nx]
      )
        continue;
      island[ny][nx] = num;
      visited[ny][nx] = true;
      queue.push([ny, nx]);
    }
  }
}
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (!visited[y][x] && board[y][x] === 1) {
      bfs(y, x);
      num++;
    }
  }
}

function findBridge(y, x) {
  const curNum = island[y][x];

  for (const [dy, dx] of dirs) {
    let nx = dx + x;
    let ny = dy + y;
    let len = 0;

    while (nx >= 0 && nx < M && ny >= 0 && ny < N) {
      const num = island[ny][nx];
      if (num === curNum) break;

      if (num !== 0) {
        if (len >= 2) edges.push([curNum, num, len]);
        break;
      }
      ny += dy;
      nx += dx;
      len++;
    }
  }
}
const edges = [];
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (island[y][x] !== 0) {
      findBridge(y, x);
    }
  }
}
let answer = 0;
edges.sort((a, b) => a[2] - b[2]);

const parent = Array.from({ length: num + 1 }, (_, i) => i);
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

let edgeCount = 0;

for (const [a, b, c] of edges) {
  if (union(a, b)) {
    answer += c;
    edgeCount++;

    if (edgeCount === num - 2) break;
  }
}
console.log(edgeCount === num - 2 ? answer : -1);
