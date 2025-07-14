const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

let answer = 0;
const colUsed = Array(N).fill(false);
const diag1 = Array(2 * N).fill(false); // 좌상단 -> 우하단
const diag2 = Array(2 * N).fill(false); // 우상단 -> 좌하단

const board = Array(N)
  .fill()
  .map(() => Array(N).fill('.'));

function dfs(row) {
  if (row === N) {
    answer++;
    return;
  }
  for (let col = 0; col < N; col++) {
    if (colUsed[col] || diag1[row - col + N] || diag2[row + col]) continue;

    colUsed[col] = true;
    diag1[row - col + N] = true; // 좌상단 -> 우하단은 row - col이 같다 (음수 나올 수 있음)
    diag2[row + col] = true; // 우상단 -> 좌하단은 row + col 값이 같다.
    board[row][col] = 'Q';

    dfs(row + 1);

    colUsed[col] = false;
    diag1[row - col + N] = false;
    diag2[row + col] = false;
    board[row][col] = '.';
  }
}
dfs(0);

console.log(answer);
