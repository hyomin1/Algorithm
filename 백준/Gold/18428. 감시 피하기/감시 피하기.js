const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const board = input.slice(1).map((line) => line.split(' '));

const visited = Array(N)
  .fill()
  .map(() => Array(N).fill(false));

function isValidMove(x, y) {
  return x >= 0 && x < N && y >= 0 && y < N;
}

function isSafe() {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 'T') {
        for (let k = 0; k < 4; k++) {
          let nx = j;
          let ny = i;
          while (true) {
            nx += dx[k];
            ny += dy[k];
            if (!isValidMove(nx, ny)) break;
            if (board[ny][nx] === 'O') break; // 장애물
            if (board[ny][nx] === 'S') return false; // 학생
          }
        }
      }
    }
  }
  return true;
}

let isRight = false;
function dfs(count) {
  if (count === 3) {
    if (isSafe()) {
      isRight = true;
    }
    // 감시에 걸리는지 체크 로직

    return;
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 'X') {
        visited[i][j] = true;
        board[i][j] = 'O';
        dfs(count + 1);
        visited[i][j] = false;
        board[i][j] = 'X';
      }
    }
  }
}

dfs(0);
let answer = isRight ? 'YES' : 'NO';
console.log(answer);
