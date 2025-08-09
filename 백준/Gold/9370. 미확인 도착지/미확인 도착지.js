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
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex][1] <= this.items[index][1]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }
  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      const leftChild = index * 2 + 1;
      const rightChild = index * 2 + 2;
      const smallerChild =
        rightChild < this.size() &&
        this.items[rightChild][1] < this.items[leftChild][1]
          ? rightChild
          : leftChild;
      if (this.items[index][1] <= this.items[smallerChild][1]) break;
      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

const T = parseInt(input[0]);

let idx = 1;
for (let i = 0; i < T; i++) {
  const [n, m, t] = input[idx++].split(' ').map(Number);
  const [s, g, h] = input[idx++].split(' ').map(Number);
  const graph = {};
  for (let i = 0; i <= n; i++) {
    graph[i] = [];
  }
  let wGH = Infinity;
  for (let i = 0; i < m; i++) {
    const [a, b, d] = input[idx++].split(' ').map(Number);
    graph[a].push([b, d]);
    graph[b].push([a, d]);
    if ((a === g && b === h) || (a === h && b === g)) wGH = d;
  }
  const x = []; // 목적지 후보
  for (let i = 0; i < t; i++) {
    x[i] = Number(input[idx++]);
  }
  function dijkstra(start) {
    const heap = new MinHeap();

    const dist = Array.from({ length: n + 1 }).fill(Infinity);
    dist[start] = 0;
    heap.push([start, 0]);

    while (heap.size()) {
      const [current, currentCost] = heap.pop();
      if (currentCost > dist[current]) {
        continue;
      }
      for (const [next, cost] of graph[current]) {
        const newCost = currentCost + cost;
        if (newCost < dist[next]) {
          dist[next] = newCost;
          heap.push([next, newCost]);
        }
      }
    }
    return dist;
  }

  const answer = [];
  const fromStart = dijkstra(s);
  const fromG = dijkstra(g);
  const fromH = dijkstra(h);

  for (const dest of x) {
    const value1 = fromStart[g] + wGH + fromH[dest];
    const value2 = fromStart[h] + wGH + fromG[dest];

    const min = Math.min(value1, value2);
    if (fromStart[dest] !== Infinity && min === fromStart[dest]) {
      answer.push(dest);
    }
  }
  console.log(answer.sort((a, b) => a - b).join(' '));
}
