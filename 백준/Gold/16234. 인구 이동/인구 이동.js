const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, L, R] = input[0].split(' ').map(Number);

const board = input.slice(1).map((line) => line.split(' ').map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function bfs(y, x, visited) {
  const queue = [[y, x]];
  visited[y][x] = true;
  const pos = [];
  pos.push([y, x]);
  while (queue.length) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      if (nx < 0 || nx >= N || ny < 0 || ny >= N || visited[ny][nx]) continue;
      const diff = Math.abs(board[y][x] - board[ny][nx]);
      if (L <= diff && diff <= R) {
        queue.push([ny, nx]);
        visited[ny][nx] = true;
        pos.push([ny, nx]);
      }
    }
  }
  if (pos.length === 1) return false;
  const avg = Math.floor(
    pos.reduce((acc, cur) => acc + board[cur[0]][cur[1]], 0) / pos.length
  );

  for (const [posY, posX] of pos) {
    board[posY][posX] = avg;
  }
  return true;
}
let answer = 0;
while (true) {
  const res = [];

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: N }).fill(false)
  );

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        res.push(bfs(i, j, visited));
      }
    }
  }
  const result = res.every((v) => v === false);
  if (result) {
    console.log(answer);
    return;
  }
  answer++;
}
