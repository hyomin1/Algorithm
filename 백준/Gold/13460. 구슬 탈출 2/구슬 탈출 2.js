const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const board = input.slice(1).map((l) => l.split(''));

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () =>
    Array.from({ length: N }, () => Array(M).fill(false))
  )
);

let red = null;
let blue = null;

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (board[y][x] === 'R') red = [y, x];
    if (board[y][x] === 'B') blue = [y, x];
  }
}

const queue = [[...red, ...blue, 0]];
visited[red[0]][red[1]][blue[0]][blue[1]] = true;
while (queue.length) {
  const [ry, rx, by, bx, count] = queue.shift();
  if (count >= 10) continue;
  for (const [dy, dx] of dirs) {
    let ny1 = ry;
    let nx1 = rx;
    while (board[ny1 + dy][nx1 + dx] !== '#' && board[ny1][nx1] !== 'O') {
      ny1 += dy;
      nx1 += dx;
    }
    let ny2 = by;
    let nx2 = bx;
    while (board[ny2 + dy][nx2 + dx] !== '#' && board[ny2][nx2] !== 'O') {
      ny2 += dy;
      nx2 += dx;
    }
    if (board[ny2][nx2] === 'O') continue;

    if (board[ny1][nx1] === 'O') {
      console.log(count + 1);
      return;
    }

    if (ny1 === ny2 && nx1 === nx2) {
      const dist1 = Math.abs(ny1 - ry) + Math.abs(nx1 - rx);
      const dist2 = Math.abs(ny2 - by) + Math.abs(nx2 - bx);

      if (dist1 > dist2) {
        ny1 -= dy;
        nx1 -= dx;
      } else {
        ny2 -= dy;
        nx2 -= dx;
      }
    }

    if (!visited[ny1][nx1][ny2][nx2]) {
      visited[ny1][nx1][ny2][nx2] = true;
      queue.push([ny1, nx1, ny2, nx2, count + 1]);
    }
  }
}
console.log(-1);
