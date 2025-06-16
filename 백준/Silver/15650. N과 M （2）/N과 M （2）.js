const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

function dfs(start, path) {
  if (path.length === M) {
    console.log(path.join(' '));
    return;
  }
  for (let i = start; i <= N; i++) {
    dfs(i + 1, [...path, i]);
  }
}

dfs(1, []);
