const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const parent = input[1].split(' ').map(Number);
const del = Number(input[2]);
const child = Array.from({ length: N }, () => []);
let root = -1;
for (let i = 0; i < N; i++) {
  if (parent[i] === -1) {
    root = i;
    continue;
  }

  child[parent[i]].push(i);
}

function dfs(node) {
  if (node === del) return 0;

  let count = 0;

  for (const element of child[node]) {
    if (element !== del) count += dfs(element);
  }
  return count === 0 ? 1 : count;
}

const answer = dfs(root);

console.log(answer);
