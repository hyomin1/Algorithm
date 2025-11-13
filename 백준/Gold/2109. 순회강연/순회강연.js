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
      const b = r < this.size() && this.items[l] < this.items[r] ? r : l;
      if (this.items[i] >= this.items[b]) break;
      this.swap(i, b);
      i = b;
    }
  }
}

const N = parseInt(input[0]);
if (N === 0) {
  console.log(0);
  process.exit(0);
}
const info = input.slice(1).map((v) => v.split(' ').map(Number));

info.sort((a, b) => b[1] - a[1]);

const maxD = info[0][1];
const heap = new MaxHeap();
let i = 0;
let answer = 0;
for (let day = maxD; day >= 1; day--) {
  while (i < info.length && info[i][1] >= day) {
    heap.push(info[i][0]);
    i++;
  }
  if (heap.size()) {
    answer += heap.pop();
  }
}
console.log(answer);
