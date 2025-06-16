const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const visited = new Set();

for (let i = 0; i < N; i++) {}
const arr = [];
function dfs(path) {
  if (path.length === M) {
    console.log(path.join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited.has(i)) {
      visited.add(i);
      dfs([...path, i]);
      visited.delete(i);
    }
  }
}
dfs([]);
