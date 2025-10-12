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
    let index = this.size() - 1;
    while (index > 0) {
      const p = Math.floor((index - 1) / 2);
      if (this.items[p][1] <= this.items[index][1]) break;
      this.swap(p, index);
      index = p;
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
const M = parseInt(input[1]);

const graph = {};

for (let i = 1; i <= N; i++) {
  graph[i] = [];
}

for (let i = 2; i < M + 2; i++) {
  const [u, v, w] = input[i].split(' ').map(Number);
  graph[u].push([v, w]);
}

const [start, end] = input[M + 2].split(' ').map(Number);

const heap = new MinHeap();
const distance = Array.from({ length: N + 1 }).fill(Infinity);
distance[start] = 0;
heap.push([start, 0, [start]]);

while (heap.size()) {
  const [node, cost, path] = heap.pop();
  if (cost > distance[node]) continue;
  if (node === end) {
    console.log(distance[node]);
    console.log(path.length);
    console.log(path.join(' '));
    break;
  }
  for (const [next, nextCost] of graph[node]) {
    const newCost = cost + nextCost;
    if (newCost < distance[next]) {
      distance[next] = newCost;
      heap.push([next, newCost, [...path, next]]);
    }
  }
}
