const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const board = input.slice(1).map((line) => line.split(' ').map(Number));

const answer = Array(N)
  .fill()
  .map(() => Array(N).fill(0));

function dfs(start, visited) {
  for (let i = 0; i < N; i++) {
    if (board[start][i] === 1 && !visited[i]) {
      visited[i] = true;
      dfs(i, visited);
    }
  }
}

for (let i = 0; i < N; i++) {
  const visited = Array(N).fill(false);
  dfs(i, visited);
  for (let j = 0; j < N; j++) {
    if (visited[j]) answer[i][j] = 1;
  }
}

answer.forEach((row) => console.log(row.join(' ')));
