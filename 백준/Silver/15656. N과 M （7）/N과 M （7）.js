const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

const res = [];
function dfs(path) {
  if (path.length === M) {
    res.push(path.join(' '));
    return;
  }

  for (let i = 0; i < N; i++) {
    dfs([...path, arr[i]]);
  }
}

dfs([]);

console.log(res.join('\n'));
