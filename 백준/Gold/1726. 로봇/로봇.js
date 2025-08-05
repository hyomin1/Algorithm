const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1, N + 1).map((line) => line.split(' ').map(Number));

const visited = Array(N)
  .fill()
  .map(() =>
    Array(M)
      .fill()
      .map(() => Array(4).fill(false))
  );

let [startY, startX, startDir] = input[1 + N]
  .split(' ')
  .map((n) => Number(n) - 1);
const [endY, endX, endDir] = input[2 + N].split(' ').map((n) => Number(n) - 1);

const queue = [[startY, startX, startDir, 0]];
visited[startY][startX][startDir] = true;
// 동 : 0, 서 : 1 남 : 2 북: 3
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function turnRight(d) {
  switch (d) {
    case 0:
      return 2;
    case 1:
      return 3;
    case 2:
      return 1;
    case 3:
      return 0;
  }
}

function turnLeft(d) {
  switch (d) {
    case 0:
      return 3;
    case 1:
      return 2;
    case 2:
      return 0;
    case 3:
      return 1;
  }
}
while (queue.length) {
  const [y, x, dir, count] = queue.shift();

  if (y === endY && x === endX && dir === endDir) {
    console.log(count);
    return;
  }

  for (let k = 1; k <= 3; k++) {
    const ny = dy[dir] * k + y;
    const nx = dx[dir] * k + x;
    if (nx < 0 || nx >= M || ny < 0 || ny >= N || board[ny][nx] === 1) break;
    if (!visited[ny][nx][dir]) {
      visited[ny][nx][dir] = true;
      queue.push([ny, nx, dir, count + 1]);
    }
  }
  const left = turnLeft(dir);
  const right = turnRight(dir);

  if (!visited[y][x][left]) {
    visited[y][x][left] = true;
    queue.push([y, x, left, count + 1]);
  }
  if (!visited[y][x][right]) {
    visited[y][x][right] = true;
    queue.push([y, x, right, count + 1]);
  }
}
