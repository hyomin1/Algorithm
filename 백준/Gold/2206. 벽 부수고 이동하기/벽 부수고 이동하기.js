const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const board = input.slice(1).map((line) => line.split('').map(Number));

// 1. 0,0 -> N-1, M-1

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(2).fill(-1))
);

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const queue = [[0, 0, 0]]; // y, x, broken
visited[0][0][0] = 1; // 시작 위치도 포함

let front = 0;

while (front < queue.length) {
  const [y, x, broken] = queue[front++];

  if (y === N - 1 && x === M - 1) break;

  for (let i = 0; i < 4; i++) {
    const ny = dy[i] + y;
    const nx = dx[i] + x;
    if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;

    if (board[ny][nx] === 1 && broken === 0 && visited[ny][nx][1] === -1) {
      visited[ny][nx][1] = visited[y][x][broken] + 1;
      queue.push([ny, nx, 1]);
    }
    if (board[ny][nx] === 0 && visited[ny][nx][broken] === -1) {
      visited[ny][nx][broken] = visited[y][x][broken] + 1;
      queue.push([ny, nx, broken]);
    }
  }
}

const res1 = visited[N - 1][M - 1][0];
const res2 = visited[N - 1][M - 1][1];
if (res1 === -1 && res2 === -1) console.log(-1);
else if (res1 === -1) console.log(res2);
else if (res2 === -1) console.log(res1);
else console.log(Math.min(res1, res2));
