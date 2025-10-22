const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const res = [];
function dfs(start, path) {
  if (path.length === M) {
    res.push(path.join(' '));
    return;
  }

  for (let i = start; i <= N; i++) {
    dfs(i, [...path, i]);
  }
}
dfs(1, []);

console.log(res.join('\n'));
