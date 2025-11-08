const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

class MinHeap {
  constructor() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
  push(item) {
    this.items.push(item);
    this.bubbleUp();
  }
  pop() {
    if (this.size() === 0) return null;
    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();

    return min;
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
  bubbleUp() {
    let i = this.size() - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.items[p][2] <= this.items[i][2]) break;
      this.swap(i, p);
      i = p;
    }
  }
  bubbleDown() {
    let i = 0;
    while (i * 2 + 1 < this.size()) {
      const l = i * 2 + 1;
      const r = i * 2 + 2;
      const s = r < this.size() && this.items[r][2] < this.items[l][2] ? r : l;

      if (this.items[i][2] <= this.items[s][2]) break;
      this.swap(i, s);
      i = s;
    }
  }
}

let idx = 0;
let num = 1;
const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
while (true) {
  const N = parseInt(input[idx++]);
  if (N === 0) break;
  const visited = Array.from({ length: N }, () => Array(N).fill(Infinity));

  const board = [];
  for (let i = 0; i < N; i++) {
    board.push(input[idx++].split(' ').map(Number));
  }
  const heap = new MinHeap();
  heap.push([0, 0, board[0][0]]);

  while (heap.size()) {
    const [y, x, cost] = heap.pop();

    if (cost > visited[y][x]) continue;

    for (const [dy, dx] of dirs) {
      const ny = dy + y;
      const nx = dx + x;
      if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;

      const nextCost = cost + board[ny][nx];
      if (nextCost < visited[ny][nx]) {
        visited[ny][nx] = nextCost;
        heap.push([ny, nx, nextCost]);
      }
    }
  }
  console.log(`Problem ${num++}: ${visited[N - 1][N - 1]}`);
}
