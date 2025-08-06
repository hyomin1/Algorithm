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
      this.swap(index, parentIndex);
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

const [N, M, X] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v, t] = input[i].split(' ').map(Number);

  graph[u].push([v, t]);
}

function dijkstra(start) {
  const dist = Array.from({ length: N + 1 }).fill(Infinity);
  dist[start] = 0;
  const heap = new MinHeap();
  heap.push([start, 0]);
  while (heap.size()) {
    const [current, currentCost] = heap.pop();
    if (dist[current] < currentCost) continue;

    for (const [next, cost] of graph[current]) {
      const newDist = currentCost + cost;
      if (newDist < dist[next]) {
        dist[next] = newDist;
        heap.push([next, newDist]);
      }
    }
  }
  return dist;
}
const goHome = dijkstra(X);

let answer = -Infinity;
for (let i = 1; i <= N; i++) {
  const goE = dijkstra(i)[X];
  const distance = goE + goHome[i];
  answer = Math.max(answer, distance);
}
console.log(answer);
