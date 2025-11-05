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
      if (this.items[p] <= this.items[i]) break;
      this.swap(i, p);
      i = p;
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
    let i = this.size() - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.items[p] >= this.items[i]) break;
      this.swap(i, p);
      i = p;
    }
  }

  bubbleDown() {
    let i = 0;
    while (i * 2 + 1 < this.size()) {
      const l = i * 2 + 1;
      const r = i * 2 + 2;
      const s = r < this.size() && this.items[r] > this.items[l] ? r : l;
      if (this.items[i] >= this.items[s]) break;
      this.swap(i, s);
      i = s;
    }
  }
  top() {
    return this.items[0];
  }
}

const N = parseInt(input[0]);
const minHeap = new MinHeap();
const maxHeap = new MaxHeap();
const result = [];

for (let i = 1; i <= N; i++) {
  const value = Number(input[i]);
  if (maxHeap.size() === 0 || value <= maxHeap.top()) {
    maxHeap.push(value);
  } else minHeap.push(value);

  if (minHeap.size() > maxHeap.size()) {
    maxHeap.push(minHeap.pop());
  }
  if (maxHeap.size() > minHeap.size() + 1) {
    minHeap.push(maxHeap.pop());
  }
  result.push(maxHeap.top());
}

console.log(result.join('\n'));

