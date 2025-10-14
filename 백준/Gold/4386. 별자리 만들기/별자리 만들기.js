const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const info = [];

for (let i = 1; i <= N; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  info.push([a, b]);
}
const edges = [];
for (let i = 0; i < info.length - 1; i++) {
  const [x1, y1] = info[i];
  for (let j = i + 1; j < info.length; j++) {
    const [x2, y2] = info[j];
    const distance = Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2);
    edges.push([i, j, distance]);
  }
}

edges.sort((a, b) => a[2] - b[2]);

const parent = Array.from({ length: N }, (_, i) => i);

function find(x) {
  if (parent[x] !== x) {
    parent[x] = find(parent[x]);
  }
  return parent[x];
}

function union(x, y) {
  const rootX = find(x);
  const rootY = find(y);

  if (rootX !== rootY) {
    parent[rootY] = rootX;
    return true;
  }
  return false;
}

let answer = 0;
let edgeCount = 0;

for (const [a, b, c] of edges) {
  if (union(a, b)) {
    answer += c;
    edgeCount++;

    if (edgeCount === N - 1) break;
  }
}
console.log(answer);
