const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const M = parseInt(input[1]);

const info = input.slice(2).map((line) => line.split(' ').map(Number));

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
