const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const arr = [];

for (let i = 0; i < N; i++) {}

function dfs(path) {
  if (path.length === M) {
    arr.push(path.join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    dfs([...path, i]);
  }
}
dfs([]);

console.log(arr.join('\n'));
