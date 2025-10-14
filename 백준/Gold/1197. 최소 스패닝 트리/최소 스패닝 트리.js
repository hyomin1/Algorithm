const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [V, E] = input[0].split(' ').map(Number);

const graph = [];

const info = input.slice(1).map((line) => line.split(' ').map(Number));

for (const [a, b, c] of info) {
  graph.push([a, b, c]);
}

graph.sort((a, b) => a[2] - b[2]);
const parent = Array.from({ length: V + 1 }, (_, i) => i);

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
for (const [a, b, c] of graph) {
  if (union(a, b)) {
    answer += c;
    edgeCount++;

    if (edgeCount === V - 1) break;
  }
}
console.log(answer);
