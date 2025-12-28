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

const [N, M, K] = input[0].split(' ').map(Number);

const info = input.slice(1, M + 1).map((v) => v.split(' ').map(Number));

const cities = input[M + 1].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (const [u, v, c] of info) {
  graph[v].push([u, c]);
}

const heap = new MinHeap();
const dist = Array(N + 1).fill(Infinity);

for (const city of cities) {
  dist[city] = 0;
  heap.push([city, 0]);
}

while (heap.size()) {
  const [cur, cost] = heap.pop();
  if (dist[cur] < cost) continue;

  for (const [next, nextCost] of graph[cur]) {
    const newCost = cost + nextCost;
    if (newCost < dist[next]) {
      dist[next] = newCost;
      heap.push([next, newCost]);
    }
  }
}
const max = Math.max(...dist.slice(1));
let num = -1;
for (let i = 1; i <= N; i++) {
  if (dist[i] === max) {
    num = i;
    break;
  }
}
console.log(num);
console.log(max);
