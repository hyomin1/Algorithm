const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push([b, i]);
  graph[b].push([a, i]);
}

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
      if (this.items[p][0] <= this.items[i][0]) break;
      this.swap(i, p);
      i = p;
    }
  }
  bubbleDown() {
    let i = 0;
    while (i * 2 + 1 < this.size()) {
      const l = i * 2 + 1;
      const r = i * 2 + 2;
      const s = r < this.size() && this.items[r][0] < this.items[l][0] ? r : l;
      if (this.items[i][0] <= this.items[s][0]) break;
      this.swap(i, s);
      i = s;
    }
  }
}

const heap = new MinHeap();
heap.push([0, 1]);

const INF = 1e18;
const dist = Array(N + 1).fill(INF);
dist[1] = 0;

while (heap.size()) {
  const [time, now] = heap.pop();
  if (time > dist[now]) continue;

  for (const [nextNode, idx] of graph[now]) {
    let nextTime;
    if (time <= idx) {
      nextTime = idx;
    } else {
      const k = Math.ceil((time - idx) / M);
      nextTime = idx + k * M;
    }

    nextTime += 1;

    if (dist[nextNode] > nextTime) {
      dist[nextNode] = nextTime;
      heap.push([nextTime, nextNode]);
    }
  }
}

console.log((dist[N] - 1).toString());
