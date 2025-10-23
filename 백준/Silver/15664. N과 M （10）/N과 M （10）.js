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
function dfs(path, start) {
  if (path.length === M) {
    if (!set.has(path.join(','))) {
      set.add(path.join(','));
      res.push([...path]);
    }

    return;
  }

  for (let i = start; i < N; i++) {
    if (!set2.has(i)) {
      set2.add(i);
      dfs([...path, arr[i]], i);
      set2.delete(i);
    }
  }
}
dfs([], 0);

res.forEach((re) => console.log(re.join(' ')));
