const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [R, C] = input[0].split(' ').map(Number);
const board = input.slice(1).map((line) => line.split(''));
const visited = Array(R)
  .fill()
  .map(() => Array(C).fill(-1));
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const S = [];
const W = [];
const end = [];

for (let y = 0; y < R; y++) {
  for (let x = 0; x < C; x++) {
    if (board[y][x] === 'S') {
      S.push([y, x]);
      visited[y][x] = 0;
    }
    if (board[y][x] === '*') W.push([y, x]);
    if (board[y][x] === 'D') end.push([y, x]);
  }
}

const [y, x] = S[0];

while (S.length) {
  // 1. 물을 먼저 채운다.
  const wLen = W.length;
  for (let i = 0; i < wLen; i++) {
    const [y, x] = W.shift();
    for (let d = 0; d < 4; d++) {
      const nx = dx[d] + x;
      const ny = dy[d] + y;
      if (nx >= 0 && nx < C && ny >= 0 && ny < R && board[ny][nx] === '.') {
        board[ny][nx] = '*';
        W.push([ny, nx]);
      }
    }
  } // 2. 고슴도치 이동한다.

  const sLen = S.length;
  for (let i = 0; i < sLen; i++) {
    const [y, x] = S.shift();
    for (let d = 0; d < 4; d++) {
      const nx = dx[d] + x;
      const ny = dy[d] + y;
      if (
        nx >= 0 &&
        nx < C &&
        ny >= 0 &&
        ny < R &&
        visited[ny][nx] === -1 &&
        (board[ny][nx] === '.' || board[ny][nx] === 'D')
      ) {
        visited[ny][nx] = visited[y][x] + 1;
        S.push([ny, nx]);
      }
    }
  }
}
const [endY, endX] = end[0];
const answer = visited[endY][endX] === -1 ? 'KAKTUS' : visited[endY][endX];
console.log(answer);
