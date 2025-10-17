const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M, K] = input[0].split(' ').map(Number);
const board = input.slice(1, N + 1).map((l) => l.split(' ').map(Number));
const op = input.slice(N + 1).map((l) => l.split(' ').map(Number));

const visited = Array.from({ length: K }).fill(false);
let answer = Infinity;

function rotateOne(board, r1, c1, r2, c2) {
  const border = [];

  for (let i = c1; i < c2; i++) {
    border.push(board[r1][i]);
  }
  for (let i = r1; i < r2; i++) {
    border.push(board[i][c2]);
  }
  for (let i = c2; i > c1; i--) {
    border.push(board[r2][i]);
  }
  for (let i = r2; i > r1; i--) {
    border.push(board[i][c1]);
  }
  border.unshift(border.pop());

  let idx = 0;
  for (let i = c1; i < c2; i++) {
    board[r1][i] = border[idx++];
  }
  for (let i = r1; i < r2; i++) {
    board[i][c2] = border[idx++];
  }
  for (let i = c2; i > c1; i--) {
    board[r2][i] = border[idx++];
  }
  for (let i = r2; i > r1; i--) {
    board[i][c1] = border[idx++];
  }
}

function rotate(board, r, c, s) {
  for (let i = 0; i < s; i++) {
    rotateOne(board, r - s + i, c - s + i, r + s - i, c + s - i);
  }
}

function dfs(depth, board) {
  if (depth === K) {
    for (const element of board) {
      const sum = element.reduce((acc, cur) => acc + cur, 0);
      answer = Math.min(answer, sum);
    }

    return;
  }

  for (let i = 0; i < K; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    const newBoard = board.map((row) => [...row]);
    const [r, c, s] = op[i];
    rotate(newBoard, r - 1, c - 1, s);
    dfs(depth + 1, newBoard);
    visited[i] = false;
  }
}

dfs(0, board);
console.log(answer);
