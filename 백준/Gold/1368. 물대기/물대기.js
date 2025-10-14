const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const edges = [];

for (let i = 1; i <= N; i++) {
  edges.push([0, i, Number(input[i])]);
}

const info = input.slice(N + 1).map((line) => line.split(' ').map(Number));

for (let i = 0; i < info.length; i++) {
  for (let j = 0; j < info[i].length; j++) {
    if (info[i][j] === 0) continue;
    edges.push([i + 1, j + 1, info[i][j]]);
  }
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
  const root1 = find(x);
  const root2 = find(y);

  if (root1 !== root2) {
    parent[root2] = root1;
    return true;
  }
  return false;
}
let answer = 0;
let count = 0;
for (const [a, b, c] of edges) {
  if (union(a, b)) {
    answer += c;
    count++;

    if (count === N) break;
  }
}
console.log(answer);
