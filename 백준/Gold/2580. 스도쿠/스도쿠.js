const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const board = input.slice(0).map((l) => l.split(' ').map(Number));

const pos = [];
for (let y = 0; y < board.length; y++) {
  for (let x = 0; x < board[y].length; x++) {
    if (board[y][x] === 0) pos.push([y, x]);
  }
}

function isValid(row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) return false;
  }
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) return false;
  }

  const sR = 3 * Math.floor(row / 3);
  const eR = sR + 3;
  const sC = 3 * Math.floor(col / 3);
  const eC = sC + 3;

  for (let i = sR; i < eR; i++) {
    for (let j = sC; j < eC; j++) {
      if (board[i][j] === num) return false;
    }
  }
  return true;
}

function dfs(depth) {
  if (depth === pos.length) return true;

  const [row, col] = pos[depth];

  for (let num = 1; num <= 9; num++) {
    if (isValid(row, col, num)) {
      board[row][col] = num;

      if (dfs(depth + 1)) return true;

      board[row][col] = 0;
    }
  }
}

dfs(0);

for (let i = 0; i < board.length; i++) {
  console.log(board[i].join(' '));
}
