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
      if (this.items[p][1] <= this.items[i][1]) break;
      this.swap(i, p);
      i = p;
    }
  }
  bubbleDown() {
    let i = 0;
    while (i * 2 + 1 < this.size()) {
      const l = i * 2 + 1;
      const r = i * 2 + 2;
      const s = r < this.size() && this.items[r][1] < this.items[l][1] ? r : l;
      if (this.items[i][1] <= this.items[s][1]) break;
      this.swap(i, s);
      i = s;
    }
  }
}

const N = parseInt(input[0]);

const A = input[1].split(' ').map(Number);
const M = parseInt(input[2]);

const info = [];

for (let i = 3; i < M + 3; i++) {
  const [l, r, c] = input[i].split(' ').map(Number);
  info.push([l - 1, r - 1, c]);
}

const start = A.join(' ');
const target = [...A].sort((a, b) => a - b).join(' ');

const dist = {};
dist[start] = 0;

const heap = new MinHeap();
heap.push([start, 0]);

while (heap.size()) {
  const [cur, cost] = heap.pop();

  if (cost > dist[cur]) continue;

  if (cur === target) {
    console.log(cost);
    process.exit(0);
  }
  const curArr = cur.split(' ').map(Number);

  for (const [l, r, c] of info) {
    const nextArr = [...curArr];
    [nextArr[l], nextArr[r]] = [nextArr[r], nextArr[l]];
    const nextState = nextArr.join(' ');
    const nextCost = cost + c;
    if (!dist[nextState] || nextCost < dist[nextState]) {
      dist[nextState] = nextCost;
      heap.push([nextState, nextCost]);
    }
  }
}
console.log(-1);
