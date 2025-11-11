const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M, H] = input[0].split(' ').map(Number);

const board = Array.from({ length: H + 1 }, () => Array(N + 1).fill(0));

const info = input.slice(1).map((v) => v.split(' ').map(Number));

for (const [y, x] of info) {
  board[y][x] = 1;
}

function canAttach(y, x) {
  if (x < 1 || x > N - 1) return false;
  if (board[y][x] === 1) return false;
  if (x > 1 && board[y][x - 1] === 1) return false;
  if (x < N - 1 && board[y][x + 1] === 1) return false;
  return true;
}

function simulate() {
  for (let i = 1; i <= N; i++) {
    let cur = i;
    for (let j = 1; j <= H; j++) {
      if (board[j][cur] === 1) cur++;
      else if (cur > 1 && board[j][cur - 1] === 1) cur--;
    }
    if (cur !== i) return false;
  }
  return true;
}

let answer = Infinity;
function dfs(y, x, count) {
  if (answer <= count) return;
  if (simulate()) {
    answer = Math.min(answer, count);
    return;
  }

  if (count >= 3) return;

  for (let i = y; i <= H; i++) {
    for (let j = i === y ? x : 1; j < N; j++) {
      if (canAttach(i, j)) {
        board[i][j] = 1;
        dfs(i, j + 1, count + 1);
        board[i][j] = 0;
      }
    }
  }
}

dfs(1, 1, 0);

console.log(answer === Infinity ? -1 : answer);
