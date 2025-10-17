const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const res = [];
function dfs(start, path) {
  if (path.length > 0) {
    const num = Number([...path].sort((a, b) => b - a).join(''));
    res.push(num);
  }

  for (let i = start; i < 10; i++) {
    dfs(i + 1, [...path, i]);
  }
}

dfs(0, []);
res.sort((a, b) => a - b);
console.log(res[N - 1] ?? -1);
