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
      this.swap(p, i);
      i = p;
    }
  }
  bubbleDown() {
    let i = 0;
    while (i * 2 + 1 < 0) {
      const l = i * 2 + 1;
      const r = i * 2 + 2;
      const s = r < this.size() && this.items[r][1] < this.items[l][1] ? r : l;
      if (this.items[i][1] <= this.items[s][1]) break;
      this.swap(i, s);
      i = s;
    }
  }
}

const [N, M] = input[0].split(' ').map(Number);

const info = input.slice(1).map((line) => line.split(' ').map(Number));

const graph = {};

for (let i = 1; i <= N; i++) {
  graph[i] = [];
}

for (const [u, v, w] of info) {
  graph[u].push([v, w]);
  graph[v].push([u, w]);
}

// 1번 컴퓨터 슈퍼 컴퓨터
const start = 1;
const heap = new MinHeap();
const dist = Array.from({ length: N + 1 }).fill(Infinity);
const parent = Array.from({ length: N + 1 }).fill(-1);
heap.push([start, 0]);
dist[start] = 0;

while (heap.size()) {
  const [node, cost] = heap.pop();
  if (cost > dist[node]) continue;

  for (const [next, nextCost] of graph[node]) {
    const newCost = cost + nextCost;
    if (newCost < dist[next]) {
      dist[next] = newCost;
      heap.push([next, newCost]);
      parent[next] = node;
    }
  }
}

const path = new Set();

for (let i = 2; i <= N; i++) {
  let cur = i;
  if (parent[cur] === start) {
    path.add(`${cur},${parent[cur]},${parent[cur]},${cur}`);
    continue;
  }
  while (parent[cur] !== start) {
    path.add(`${cur},${parent[cur]},${parent[cur]},${cur}`);
    cur = parent[cur];
  }
}
console.log(path.size);
const answer = Array.from(path).map((v) => v.split(','));
answer.forEach((v) => console.log(v[0], v[1]));
