const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const board = input.slice(1).map((line) => line.split('').map(Number));

function isSame(y, x, size) {
  const value = board[y][x];
  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (value != board[i][j]) return false;
    }
  }
  return true;
}

function quadTree(y, x, size) {
  if (isSame(y, x, size)) {
    return board[y][x].toString();
  }
  const half = size / 2;

  return (
    '(' +
    quadTree(y, x, half) +
    quadTree(y, x + half, half) +
    quadTree(y + half, x, half) +
    quadTree(y + half, x + half, half) +
    ')'
  );
}

const answer = quadTree(0, 0, N);
console.log(answer);
