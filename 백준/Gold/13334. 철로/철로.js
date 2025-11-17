const { Hmac } = require('crypto');
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
  top() {
    return this.items[0];
  }
}

const N = parseInt(input[0]);

const info = input.slice(1, 1 + N).map((v) => v.split(' ').map(Number));

const d = Number(input[1 + N]);
const intervals = [];
for (let [h, o] of info) {
  if (h > o) [h, o] = [o, h];
  intervals.push([h, o]);
}
let answer = 0;

intervals.sort((a, b) => a[1] - b[1]);
const heap = new MinHeap();

for (const [left, right] of intervals) {
  const start = right - d;

  heap.push(left);

  while (heap.size() && heap.top() < start) {
    heap.pop();
  }
  answer = Math.max(answer, heap.size());
}
console.log(answer);
