const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [V, E] = input[0].split(' ').map(Number);
const start = +input[1];
const graph = Array.from({ length: V + 1 }, () => []);
for (let i = 2; i < 2 + E; i++) {
  const [u, v, w] = input[i].split(' ').map(Number);
  graph[u].push([v, w]);
}

const distances = Array(V + 1).fill(Infinity);
distances[start] = 0;

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push([node, dist]) {
    this.heap.push([node, dist]);
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent][1] <= dist) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  pop() {
    const root = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length === 0) return root;
    this.heap[0] = last;
    let i = 0;
    const len = this.heap.length;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;
      if (left < len && this.heap[left][1] < this.heap[smallest][1])
        smallest = left;
      if (right < len && this.heap[right][1] < this.heap[smallest][1])
        smallest = right;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const heap = new MinHeap();
heap.push([start, 0]);

while (!heap.isEmpty()) {
  const [current, currentDist] = heap.pop();
  if (currentDist > distances[current]) continue;

  for (const [next, cost] of graph[current]) {
    const newDist = currentDist + cost;
    if (newDist < distances[next]) {
      distances[next] = newDist;
      heap.push([next, newDist]);
    }
  }
}

let output = '';
for (let i = 1; i <= V; i++) {
  output += distances[i] === Infinity ? 'INF\n' : distances[i] + '\n';
}
console.log(output.trim());
