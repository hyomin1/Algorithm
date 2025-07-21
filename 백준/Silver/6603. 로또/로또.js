const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

let idx = 0;

function dfs(start, arr, path) {
  if (path.length === 6) {
    console.log(path.join(' '));
    return;
  }
  for (let i = start; i < arr.length; i++) {
    dfs(i + 1, arr, [...path, arr[i]]);
  }
}

while (true) {
  const [k, ...arr] = input[idx++].split(' ').map(Number);

  if (k === 0) break;
  dfs(0, arr, []);
  console.log();
}
