const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = input.length;
const M = input[0].length;
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let answer = 0;
function isValidMove(x, y, visited) {
  return x >= 0 && x < M && y >= 0 && y < N && !visited[y][x];
}
const visited = Array(N)
  .fill()
  .map(() => Array(M).fill(false));
const counted = new Set();
function getSCount(arr) {
  return arr === 'S' ? 1 : 0;
}
function dfs(path, sCount) {
  if (path.length === 7) {
    if (sCount >= 4) {
      // 중복 경로 체크
      const key = [...path]
        .map(([y, x]) => y * 5 + x)
        .sort((a, b) => a - b)
        .join(',');

      if (!counted.has(key)) {
        counted.add(key);
        answer++;
      }
    }
    return;
  }
  for (const [y, x] of path) {
    for (let i = 0; i < 4; i++) {
      const ny = dy[i] + y;
      const nx = dx[i] + x;
      if (!isValidMove(nx, ny, visited)) continue;
      visited[ny][nx] = true;
      path.push([ny, nx]);
      dfs(path, sCount + getSCount(input[ny][nx]));
      path.pop();
      visited[ny][nx] = false;
    }
  }
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    visited[y][x] = true;
    dfs([[y, x]], getSCount(input[y][x]));
    visited[y][x] = false;
  }
}
console.log(answer);
