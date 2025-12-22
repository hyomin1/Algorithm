const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const info = input.slice(1).map(v => v.split(' ').map(Number));

const parent = Array.from({ length: n + 1 }, (_, i) => i);
const rank = Array(n + 1).fill(0);

function find(x) {
  if (x !== parent[x]) parent[x] = find(parent[x]);
  return parent[x];
}

function union(a, b) {
  a = find(a);
  b = find(b);
  if (a === b) return;

  if (rank[a] < rank[b]) parent[a] = b;
  else if (rank[a] > rank[b]) parent[b] = a;
  else {
    parent[b] = a;
    rank[a]++;
  }
}

let result = [];
for (const [cmd, a, b] of info) {
  if (cmd === 0) union(a, b);
  else result.push(find(a) === find(b) ? 'YES' : 'NO');
}

console.log(result.join('\n'));
