const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [W, H] = input[0].split(' ').map(Number);

const board = input.slice(1).map((line) => line.split(''));

const dy = [0, 0, 1, -1];
const dx = [1, -1, 0, 0];
const C = [];
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (board[i][j] === 'C') C.push([i, j]);
  }
}

const [[sy, sx], [ey, ex]] = C;

const queue = [];

const visited = Array.from({ length: H }, () =>
  Array.from({ length: W }, () => Array(4).fill(Infinity))
);

for (let i = 0; i < 4; i++) {
  queue.push([sy, sx, i, 0]);
  visited[sy][sx][i] = 0;
}
while (queue.length) {
  const [y, x, d, mirror] = queue.shift();

  // 현재 상태가 이미 더 나쁜 경우 스킵
  if (mirror > visited[y][x][d]) continue;

  if (y === ey && x === ex && !(y === sy && x === sx)) {
    console.log(mirror);
    process.exit(0);
  }

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (ny >= 0 && ny < H && nx >= 0 && nx < W && board[ny][nx] !== '*') {
      let newMirror = mirror;
      if (i !== d) {
        newMirror = mirror + 1;
      }

      // 더 적은 거울로 도달할 수 있는 경우만 진행
      if (newMirror < visited[ny][nx][i]) {
        visited[ny][nx][i] = newMirror;

        if (i === d) {
          // 같은 방향 - 우선 처리
          queue.unshift([ny, nx, i, newMirror]);
        } else {
          // 다른 방향 - 나중 처리
          queue.push([ny, nx, i, newMirror]);
        }
      }
    }
  }
}
