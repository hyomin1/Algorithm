const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const board = input.slice(0).map((v) => v.split('').map(Number));

function isValid(y, x, num) {
  // 가로줄 확인
  for (let i = 0; i < board[y].length; i++) {
    if (board[y][i] === num) return false;
  }
  // 세로줄 확인
  for (let i = 0; i < board.length; i++) {
    if (board[i][x] === num) return false;
  }

  const startY = Math.floor(y / 3) * 3;
  const startX = Math.floor(x / 3) * 3;
  const endY = startY + 3;
  const endX = startX + 3;
  for (let i = startY; i < endY; i++) {
    for (let j = startX; j < endX; j++) {
      if (board[i][j] === num) return false;
    }
  }

  return true;
}

function dfs(y, x) {
  if (y === board.length) {
    board.forEach((v) => console.log(v.join('')));
    process.exit(0);
  }

  if (x === board[0].length) {
    dfs(y + 1, 0);
    return;
  }

  if (board[y][x] !== 0) {
    dfs(y, x + 1);
    return;
  }

  for (let num = 1; num <= 9; num++) {
    if (isValid(y, x, num)) {
      board[y][x] = num;
      dfs(y, x + 1);
      board[y][x] = 0;
    }
  }
}

dfs(0, 0);
