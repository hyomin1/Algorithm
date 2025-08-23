const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

let board = input.slice(1).map((line) => line.split(' ').map(Number));

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const queue = [];

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (board[y][x] !== 0) {
      queue.push([y, x]);
    }
  }
}

let answer = 0;

function bfs(y, x, visited) {
  const queue = [[y, x]];
  visited[y][x] = true;

  while (queue.length) {
    const [y, x] = queue.shift();

    for (const [dx, dy] of dir) {
      const ny = dy + y;
      const nx = dx + x;
      if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
      if (!visited[ny][nx] && board[ny][nx] > 0) {
        visited[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }
  }
}
let year = 0;
while (queue.length) {
  year++;
  let count = 0;
  const len = queue.length;
  const newBoard = board.map((row) => [...row]);

  for (let i = 0; i < len; i++) {
    const [y, x] = queue.shift();

    for (const [dx, dy] of dir) {
      const nx = dx + x;
      const ny = dy + y;

      if (nx < 0 || nx >= M || ny < 0 || ny >= N || board[ny][nx] !== 0)
        continue;
      if (newBoard[y][x] > 0) newBoard[y][x]--;
    }

    if (newBoard[y][x] > 0) queue.push([y, x]);
  }
  board = newBoard;

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }).fill(false)
  );

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] !== 0 && !visited[i][j]) {
        bfs(i, j, visited);
        count++;
      }
    }
  }
  if (count >= 2) {
    answer = year;
    break;
  }
}

console.log(answer);
