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
      if (this.items[index][1] <= this.items[parentIndex][1]) break;
      this.swap(index, parentIndex);
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
let idx = 0;
const [N, E] = input[idx++].split(' ').map(Number);
const graph = Array(N + 1)
  .fill()
  .map(() => []);
for (let i = idx; i < idx + E; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}
const [v1, v2] = input[idx + E].split(' ').map(Number);

function dijkstra(start) {
  const dist = Array(N + 1).fill(Infinity);
  dist[start] = 0;
  const minHeap = new MinHeap();
  minHeap.push([start, 0]);

  while (minHeap.size() > 0) {
    const [current, currentCost] = minHeap.pop();
    if (currentCost > dist[current]) continue;

    for (const [next, cost] of graph[current]) {
      const newDist = currentCost + cost;
      if (newDist < dist[next]) {
        dist[next] = newDist;
        minHeap.push([next, newDist]);
      }
    }
  }
  return dist;
}

const distFrom1 = dijkstra(1);
const distFromV1 = dijkstra(v1);
const distFromV2 = dijkstra(v2);

const path1 = distFrom1[v1] + distFromV1[v2] + distFromV2[N];
const path2 = distFrom1[v2] + distFromV2[v1] + distFromV1[N];
const answer = Math.min(path1, path2);
console.log(answer === Infinity ? -1 : answer);
