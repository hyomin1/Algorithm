const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

class MaxHeap {
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
    const max = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();

    return max;
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex][1] >= this.items[index][1]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      const leftChild = index * 2 + 1;
      const rightChild = index * 2 + 2;
      const biggerChild =
        rightChild < this.size() &&
        this.items[rightChild][1] >= this.items[leftChild][1]
          ? rightChild
          : leftChild;
      if (this.items[index][1] >= this.items[biggerChild][1]) break;
      this.swap(index, biggerChild);
      index = biggerChild;
    }
  }
}

const [N, M] = input[0].split(' ').map(Number);

const graph = {};

for (let i = 1; i <= N; i++) {
  graph[i] = [];
}

for (let i = 1; i <= M; i++) {
  const [u, v, w] = input[i].split(' ').map(Number);
  graph[u].push([v, w]);
  graph[v].push([u, w]);
}

const distance = Array.from({ length: N + 1 }).fill(-Infinity);

const [start, end] = input[M + 1].split(' ').map(Number);
distance[start] = Infinity;

const heap = new MaxHeap();

heap.push([start, Infinity]);

while (heap.size()) {
  const [currentNode, cost] = heap.pop();
  if (cost < distance[currentNode]) continue;

  for (const [nextNode, nextCost] of graph[currentNode]) {
    const newCost = Math.min(distance[currentNode], nextCost);
    if (distance[nextNode] < newCost) {
      distance[nextNode] = newCost;
      heap.push([nextNode, newCost]);
    }
  }
}
console.log(distance[end]);
