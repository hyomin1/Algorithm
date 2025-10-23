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
function dfs(path, start) {
  if (path.length === M) {
    res.push([...path]);
    return;
  }

  for (let i = start; i < N; i++) {
    dfs([...path, arr[i]], i);
  }
}

dfs([], 0);

res.forEach((re) => console.log(re.join(' ')));
