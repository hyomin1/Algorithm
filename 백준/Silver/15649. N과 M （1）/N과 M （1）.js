const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const set = new Set();
const res = [];
function dfs(path) {
  if (path.length === M) {
    res.push([...path]);
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!set.has(i)) {
      set.add(i);
      dfs([...path, i]);
      set.delete(i);
    }
  }
}

dfs([]);

res.forEach((v) => console.log(v.join(' ')));
