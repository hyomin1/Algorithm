const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const board = input.slice(1).map((l) => l.split(' ').map(Number));

function pull(arr) {
  const filtered = arr.filter((v) => v !== 0);
  const res = [];

  let i = 0;
  while (i < filtered.length) {
    if (i + 1 < filtered.length && filtered[i] === filtered[i + 1]) {
      res.push(filtered[i] * 2);
      i += 2;
    } else {
      res.push(filtered[i]);
      i++;
    }
  }

  while (res.length < arr.length) res.push(0);
  return res;
}

function left(board) {
  const newBoard = board.map((row) => [...row]);
  for (let i = 0; i < newBoard.length; i++) {
    newBoard[i] = pull(newBoard[i]);
  }
  return newBoard;
}
function right(board) {
  const newBoard = board.map((row) => [...row]);

  for (let i = 0; i < newBoard.length; i++) {
    newBoard[i] = pull(newBoard[i].reverse()).reverse();
  }
  return newBoard;
}
function up(board) {
  const newBoard = board.map((row) => [...row]);

  for (let i = 0; i < N; i++) {
    const col = newBoard.map((r) => r[i]);
    const pulled = pull(col);

    for (let j = 0; j < N; j++) {
      newBoard[j][i] = pulled[j];
    }
  }
  return newBoard;
}
function down(board) {
  const newBoard = board.map((row) => [...row]);

  for (let i = 0; i < N; i++) {
    const col = newBoard.map((r) => r[i]);
    const pulled = pull(col.reverse()).reverse();
    for (let j = 0; j < N; j++) {
      newBoard[j][i] = pulled[j];
    }
  }
  return newBoard;
}

let answer = -Infinity;

function dfs(board, move) {
  if (move === 5) {
    const max = Math.max(...board.flat());
    answer = Math.max(max, answer);
    return;
  }
  dfs(left(board), move + 1);
  dfs(right(board), move + 1);
  dfs(down(board), move + 1);
  dfs(up(board), move + 1);
}

dfs(board, 0);
console.log(answer);
