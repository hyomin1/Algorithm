const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const T = parseInt(input[0]);
let idx = 1;

function find(parent, x) {
  if (parent[x] === x) return x;
  parent[x] = find(parent, parent[x]);
  return parent[x];
}

function union(parent, rank, size, a, b) {
  const r1 = find(parent, a);
  const r2 = find(parent, b);

  if (r1 === r2) return size[r1];

  let root;
  if (rank[r1] < rank[r2]) {
    parent[r1] = r2;
    size[r2] += size[r1];
    root = r2;
  } else if (rank[r1] > rank[r2]) {
    parent[r2] = r1;
    size[r1] += size[r2];
    root = r1;
  } else {
    parent[r2] = r1;
    rank[r1]++;
    size[r1] += size[r2];
    root = r1;
  }
  return size[root];
}
for (let i = 0; i < T; i++) {
  const F = Number(input[idx++]);

  const parent = {};
  const rank = {};
  const size = {};

  for (let j = 0; j < F; j++) {
    const [a, b] = input[idx++].split(' ');

    if (!parent[a]) {
      parent[a] = a;
      rank[a] = 0;
      size[a] = 1;
    }
    if (!parent[b]) {
      parent[b] = b;
      rank[b] = 0;
      size[b] = 1;
    }
    const num = union(parent, rank, size, a, b);
    console.log(num);
  }
}
