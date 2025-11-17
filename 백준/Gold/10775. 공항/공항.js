const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const G = parseInt(input[0]);
const P = Number(input[0]);

const g = input.slice(2).map(Number);

const parent = Array(G + 1).fill(0);

for (let i = 1; i <= G; i++) parent[i] = i;

function find(x) {
  if (parent[x] === x) return x;

  return (parent[x] = find(parent[x]));
}

let answer = 0;

for (let i = 0; i < P; i++) {
  const root = find(g[i]);

  if (root === 0) break;

  answer++;

  parent[root] = find(root - 1);
}

console.log(answer);
