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
      this.swap(i, p);
      i = p;
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

const [N, M] = input[0].split(' ').map(Number);

const info = input.slice(1).map((line) => line.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

for (const [u, v, w] of info) {
  graph[u].push([v, w]);
  graph[v].push([u, w]);
}

const start = 1;

const distWolf = Array.from({ length: N + 1 }, () => [Infinity, Infinity]);
const distFox = Array.from({ length: N + 1 }).fill(Infinity);

distWolf[start][0] = 0;
distFox[start] = 0;

const heapWolf = new MinHeap();
const heapFox = new MinHeap();

heapFox.push([start, 0]);
while (heapFox.size()) {
  const [node, cost] = heapFox.pop();
  if (cost > distFox[node]) continue;

  for (const [next, nextCost] of graph[node]) {
    const newCost = cost + nextCost;
    if (newCost < distFox[next]) {
      distFox[next] = newCost;
      heapFox.push([next, newCost]);
    }
  }
}
heapWolf.push([start, 0, 0]);
while (heapWolf.size()) {
  const [node, cost, state] = heapWolf.pop();
  if (cost > distWolf[node][state]) continue;

  for (const [next, nextCost] of graph[node]) {
    const newCost = cost + (state === 0 ? nextCost / 2 : nextCost * 2);
    const nextState = 1 - state;
    if (newCost < distWolf[next][nextState]) {
      distWolf[next][nextState] = newCost;
      heapWolf.push([next, newCost, nextState]);
    }
  }
}
let answer = 0;
for (let i = 2; i <= N; i++) {
  const fox = distFox[i];
  const wolf = Math.min(distWolf[i][0], distWolf[i][1]);
  if (fox < wolf) answer++;
}
console.log(answer);
