const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const board = input.slice(1).map((line) => line.split(' ').map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let time = 0;
let cheese = 0;

function bfs() {
  const queue = [[0, 0]];
  const air = Array.from({ length: N }, () =>
    Array.from({ length: M }).fill(false)
  );
  while (queue.length) {
    const [y, x] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const ny = dy[i] + y;
      const nx = dx[i] + x;
      if (
        ny >= 0 &&
        ny < N &&
        nx >= 0 &&
        nx < M &&
        board[ny][nx] === 0 &&
        !air[ny][nx]
      ) {
        air[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }
  }
  return air;
}
while (true) {
  const air = bfs();
  if (board.flat().reduce((acc, cur) => acc + cur, 0) === 0) break;
  cheese = board.flat().reduce((acc, cur) => acc + cur, 0);

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      for (let k = 0; k < 4; k++) {
        const ny = dy[k] + y;
        const nx = dx[k] + x;
        if (nx >= 0 && nx < M && ny >= 0 && ny < N && air[ny][nx]) {
          board[y][x] = 0;
          break;
        }
      }
    }
  }
  time++;
}
console.log(time);
console.log(cheese);
