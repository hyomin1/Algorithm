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
      const s = r < this.size() && this.items[r] > this.items[l] ? r : l;
      if (this.items[i] >= this.items[s]) break;
      this.swap(i, s);
      i = s;
    }
  }
}

const [N, K] = input[0].split(' ').map(Number);

const jewels = input.slice(1, N + 1).map((l) => l.split(' ').map(Number));

const bags = input.slice(N + 1).map(Number);
jewels.sort((a, b) => a[0] - b[0]);
bags.sort((a, b) => a - b);

let index = 0;
let answer = 0;
const heap = new MaxHeap();
for (const bag of bags) {
  while (index < jewels.length && jewels[index][0] <= bag) {
    heap.push(jewels[index][1]);
    index++;
  }

  answer += heap.pop();
}

console.log(answer);
