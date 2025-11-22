const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

class MinHeap {
  constructor() {
    this.arr = [];
  }
  size() {
    return this.arr.length;
  }
  push(item) {
    this.arr.push(item);
    this.bubbleUp();
  }
  pop() {
    if (this.size() === 0) return null;

    const min = this.arr[0];
    this.arr[0] = this.arr[this.size() - 1];
    this.arr.pop();
    this.bubbleDown();

    return min;
  }

  swap(a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
  }
  bubbleUp() {
    let i = this.size() - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.arr[p][0] <= this.arr[i][0]) break;
      this.swap(i, p);
      i = p;
    }
  }
  bubbleDown() {
    let i = 0;
    while (i * 2 + 1 < this.size()) {
      const l = i * 2 + 1;
      const r = i * 2 + 2;
      const s = r < this.size() && this.arr[r][0] < this.arr[l][0] ? r : l;
      if (this.arr[i][0] <= this.arr[s][0]) break;
      this.swap(i, s);
      i = s;
    }
  }
}

const [N, M] = input[0].split(' ').map(Number);

const board = input.slice(1).map((v) => v.split('').map(Number));

// 영역 구하기

const visited = Array.from({ length: N }, () => Array(M).fill(false));
const heap = new MinHeap();

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (i === 0 || i === N - 1 || j === 0 || j === M - 1) {
      heap.push([board[i][j], i, j]);
      visited[i][j] = true;
    }
  }
}

let answer = 0;
let max = -Infinity;

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
while (heap.size()) {
  const [h, y, x] = heap.pop();
  max = Math.max(max, h);
  for (const [dy, dx] of dirs) {
    const ny = dy + y;
    const nx = dx + x;

    if (ny < 0 || ny >= N || nx < 0 || nx >= M || visited[ny][nx]) continue;

    visited[ny][nx] = true;
    answer += Math.max(0, max - board[ny][nx]);
    heap.push([board[ny][nx], ny, nx]);
  }
}
console.log(answer);
