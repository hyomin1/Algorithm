const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const board = input.slice(0).map((line) => line.split(''));
const N = board.length;
const M = board[0].length;

const dx = [0, 1, -1, 0, 0, 1, 1, -1, -1];
const dy = [0, 0, 0, 1, -1, 1, -1, -1, 1];

let queue = [[N - 1, 0, 0]];

function pullDown() {
  for (let i = N - 1; i >= 0; i--) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === '#') {
        if (i === N - 1) board[i][j] = '.';
        else {
          board[i + 1][j] = '#';
          board[i][j] = '.';
        }
      }
    }
  }
}
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(9).fill(false))
);
visited[N - 1][0][0] = true;
while (queue.length) {
  const subQueue = [];
  for (const element of queue) {
    const [y, x, t] = element;

    if (y === 0 && x === M - 1) {
      console.log(1);
      return;
    }

    for (let d = 0; d < 9; d++) {
      const ny = dy[d] + y;
      const nx = dx[d] + x;
      if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
      if (board[ny][nx] === '#') continue;
      if (ny > 0 && board[ny - 1][nx] === '#') continue;
      if (!visited[ny][nx][t + 1]) {
        subQueue.push([ny, nx, t + 1]);
        visited[ny][nx][t + 1] = true;
      }
    }
  }
  pullDown(); // 벽내리기
  queue = subQueue;
}
console.log(0);
