const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

class Heap {
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
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallerChild =
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

const N = parseInt(input[0]);
const M = parseInt(input[1]);

const graph = Array(N + 1)
  .fill()
  .map(() => []);

for (let i = 2; i <= 1 + M; i++) {
  const [u, v, cost] = input[i].split(' ').map(Number);
  graph[u].push([v, cost]);
}
const [start, end] = input[2 + M].split(' ').map(Number);

const dist = Array(N + 1).fill(Infinity);
dist[start] = 0;
const heap = new Heap();

heap.push([start, 0]);

while (heap.size() > 0) {
  const [current, currentCost] = heap.pop();
  if (currentCost > dist[current]) continue;

  for (const [next, cost] of graph[current]) {
    const newDist = currentCost + cost;
    if (newDist < dist[next]) {
      dist[next] = newDist;
      heap.push([next, newDist]);
    }
  }
}
console.log(dist[end]);
