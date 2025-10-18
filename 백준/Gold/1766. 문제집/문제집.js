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
      if (this.items[p] <= this.items[index]) break;
      this.swap(p, index);
      index = p;
    }
  }
  bubbleDown() {
    let i = 0;
    while (i * 2 + 1 < this.size()) {
      const l = i * 2 + 1;
      const r = i * 2 + 2;
      const s = r < this.size() && this.items[r] < this.items[l] ? r : l;
      if (this.items[i] <= this.items[s]) break;
      this.swap(i, s);
      i = s;
    }
  }
}

const [N, M] = input[0].split(' ').map(Number);

const degree = Array(N + 1).fill(0);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [A, B] = input[i].split(' ').map(Number);
  graph[A].push(B);
  degree[B]++;
}

const heap = new MinHeap();

const answer = [];

for (let i = 1; i <= N; i++) {
  if (degree[i] === 0) {
    heap.push(i);
  }
}

while (heap.size()) {
  const cur = heap.pop();
  answer.push(cur);

  for (const next of graph[cur]) {
    degree[next]--;
    if (degree[next] === 0) {
      heap.push(next);
    }
  }
}

console.log(answer.join(' '));
