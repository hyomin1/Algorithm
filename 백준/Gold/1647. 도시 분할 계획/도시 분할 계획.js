const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const info = input.slice(1).map((line) => line.split(' ').map(Number));

const edges = [];
for (const [a, b, c] of info) {
  edges.push([a, b, c]);
}

edges.sort((a, b) => a[2] - b[2]);

const parent = Array.from({ length: N + 1 }, (_, i) => i);

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

const path = [];
let count = 0;

for (const [a, b, c] of edges) {
  if (union(a, b)) {
    path.push(c);
    count++;

    if (count === N - 1) break;
  }
}

const sum = path.reduce((a, b) => a + b, 0);
console.log(sum - path[path.length - 1]);
