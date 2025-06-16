const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number);
const answer = [];

const visited = Array(N).fill(false);
arr.sort((a, b) => a - b);

function dfs(path) {
  if (path.length === M) {
    answer.push(path.join(' '));
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs([...path, arr[i]]);
      visited[i] = false;
    }
  }
}

dfs([]);

console.log(answer.join('\n'));
