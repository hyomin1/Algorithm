const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const set = new Set();
arr.sort((a, b) => a - b);
const res = [];
function dfs(path, start) {
  if (path.length === M) {
    if (!set.has(path.join(','))) {
      set.add(path.join(','));
      res.push(path.join(' '));
    }

    return;
  }

  for (let i = start; i < N; i++) {
    dfs([...path, arr[i]], i);
  }
}
dfs([], 0);

console.log(res.join('\n'));
