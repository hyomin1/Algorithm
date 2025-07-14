const { ifError } = require('assert');
const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const set = new Set();
function dfs(depth, start, path) {
  if (depth === M) {
    console.log(path.join(' '));
    return;
  }
  for (let i = start; i <= N; i++) {
    dfs(depth + 1, i, [...path, i]);
  }
}

dfs(0, 1, []);
