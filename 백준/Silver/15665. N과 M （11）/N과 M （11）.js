const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const set2 = new Set();
const set = new Set();
arr.sort((a, b) => a - b);
const res = [];
function dfs(path) {
  if (path.length === M) {
    if (!set.has(path.join(','))) {
      set.add(path.join(','));
      res.push(path.join(' '));
    }

    return;
  }

  for (let i = 0; i < N; i++) {
    dfs([...path, arr[i]]);
  }
}
dfs([]);

console.log(res.join('\n'));
