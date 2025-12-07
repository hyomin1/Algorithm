const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const board = input.slice(1).map((v) => v.split(''));

let red = null;
let blue = null;

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (board[y][x] === 'R') red = [y, x];
    if (board[y][x] === 'B') blue = [y, x];
  }
}

const queue = [[...red, ...blue, 0]];

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () =>
    Array.from({ length: N }, () => Array(M).fill(false))
  )
);

visited[red[0]][red[1]][blue[0]][blue[1]] = true;

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function move(y, x, dy, dx) {
  let count = 0;
  while (board[y + dy][x + dx] !== '#') {
    y += dy;
    x += dx;
    count++;
    if (board[y][x] === 'O') break;
  }
  return [y, x, count];
}

let front = 0;
// . 빈칸, #: 장애물, o : 구멍, R:빨간 ,B: 파란
while (front < queue.length) {
  const [ry, rx, by, bx, count] = queue[front++];

  if (count >= 10) {
    console.log(0);
    return;
  }

  for (const [dy, dx] of dirs) {
    let [nry, nrx, cnt1] = move(ry, rx, dy, dx);
    let [nby, nbx, cnt2] = move(by, bx, dy, dx);

    if (board[nby][nbx] === 'O') continue;

    if (board[nry][nrx] === 'O') {
      console.log(1);
      return;
    }

    if (nry === nby && nrx === nbx) {
      // 구슬 위치 겹치는 경우 처리
      if (cnt1 > cnt2) {
        nry -= dy;
        nrx -= dx;
      } else {
        nby -= dy;
        nbx -= dx;
      }
    }

    if (!visited[nry][nrx][nby][nbx]) {
      visited[nry][nrx][nby][nbx] = true;
      queue.push([nry, nrx, nby, nbx, count + 1]);
    }
  }
}

console.log(0);
