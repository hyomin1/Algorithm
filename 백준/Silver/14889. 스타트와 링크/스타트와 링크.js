const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const S = input.slice(1).map((line) => line.split(' ').map(Number));

const visited = Array(N).fill(false);

let minDiff = Infinity;

function calcDiff() {
  let start = 0;
  let link = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i] && visited[j]) start += S[i][j];
      if (!visited[i] && !visited[j]) link += S[i][j];
    }
  }
  minDiff = Math.min(minDiff, Math.abs(start - link));
}

function dfs(depth, index) {
  if (depth === N / 2) {
    calcDiff();
    return;
  }

  for (let i = index; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(depth + 1, i + 1);
      visited[i] = false;
    }
  }
}
dfs(0, 0);
console.log(minDiff);
