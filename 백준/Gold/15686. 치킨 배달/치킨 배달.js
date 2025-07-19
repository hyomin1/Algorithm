const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const board = input.slice(1).map((line) => line.split(' ').map(Number));

const chicken = [];
const home = [];
let answer = Infinity;

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (board[i][j] === 1) home.push([i, j]);
    if (board[i][j] === 2) chicken.push([i, j]);
  }
}

function minDist(path) {
  let dist = 0;
  for (const [homeY, homeX] of home) {
    let min = Infinity;
    for (const [chickenY, chickenX] of path) {
      const d = Math.abs(homeY - chickenY) + Math.abs(homeX - chickenX);
      min = Math.min(min, d);
    }
    dist += min;
  }
  return dist;
}

function dfs(start, path) {
  if (path.length === M) {
    // 최소 거리 구하는 로직
    const dist = minDist(path);
    answer = Math.min(answer, dist);

    return;
  }
  for (let i = start; i < chicken.length; i++) {
    dfs(i + 1, [...path, chicken[i]]);
  }
}

dfs(0, []);
console.log(answer);
