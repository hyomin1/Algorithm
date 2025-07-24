const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const board = input.slice(1).map((line) => line.split(' ').map(Number));

let minusCount = 0;
let zeroCount = 0;
let oneCount = 0;

function isSame(y, x, size) {
  const value = board[y][x];
  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (value !== board[i][j]) return false;
    }
  }
  return true;
}

function paper(y, x, size) {
  if (isSame(y, x, size)) {
    if (board[y][x] === -1) minusCount++;
    else if (board[y][x] === 0) zeroCount++;
    else oneCount++;
    return;
  }
  const div = size / 3;
  paper(y, x, div);
  paper(y, x + div, div);
  paper(y, x + 2 * div, div);
  paper(y + div, x, div);
  paper(y + div, x + div, div);
  paper(y + div, x + 2 * div, div);
  paper(y + 2 * div, x, div);
  paper(y + 2 * div, x + div, div);
  paper(y + 2 * div, x + 2 * div, div);
}

paper(0, 0, N);
console.log(minusCount);
console.log(zeroCount);
console.log(oneCount);
