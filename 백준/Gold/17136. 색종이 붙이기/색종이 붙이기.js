const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const board = input.slice(0).map((v) => v.split(' ').map(Number));

const paper = Array.from({ length: 6 }).fill(5);
const N = 10;

function canAttach(board, y, x, size) {
  if (y + size > N || x + size > N) return false;

  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (board[i][j] === 0) return false;
    }
  }
  return true;
}

function attach(board, y, x, size, value) {
  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      board[i][j] = value;
    }
  }
}

let answer = Infinity;
function dfs(y, x, count) {
  if (count >= answer) return;

  if (y === N) {
    answer = Math.min(answer, count);
    return;
  }

  if (x === N) {
    dfs(y + 1, 0, count);
    return;
  }

  if (board[y][x] === 0) {
    dfs(y, x + 1, count);
    return;
  }

  for (let i = 5; i >= 1; i--) {
    if (paper[i] > 0 && canAttach(board, y, x, i)) {
      attach(board, y, x, i, 0);
      paper[i]--; // 색종이 사용
      dfs(y, x + 1, count + 1); // 재귀
      paper[i]++; // 복구
      attach(board, y, x, i, 1); // 백트래킹
    }
  }
}

dfs(0, 0, 0);
console.log(answer === Infinity ? -1 : answer);
