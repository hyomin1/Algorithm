const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

let [N, M, x, y, K] = input[0].split(' ').map(Number);

const board = input.slice(1, N + 1).map((l) => l.split(' ').map(Number));
const cmd = input[N + 1].split(' ').map(Number);

const dice = [0, 0, 0, 0, 0, 0]; // 위 아래 앞 뒤 왼 오

function rollEast() {
  const tmp = dice[1];
  dice[1] = dice[5];
  dice[5] = dice[0];
  dice[0] = dice[4];
  dice[4] = tmp;
}

function rollWest() {
  const tmp = dice[1];
  dice[1] = dice[4];
  dice[4] = dice[0];
  dice[0] = dice[5];
  dice[5] = tmp;
}

function rollNorth() {
  const tmp = dice[1];
  dice[1] = dice[2];
  dice[2] = dice[0];
  dice[0] = dice[3];
  dice[3] = tmp;
}

function rollSouth() {
  const tmp = dice[1];
  dice[1] = dice[3];
  dice[3] = dice[0];
  dice[0] = dice[2];
  dice[2] = tmp;
}

const roll = {
  1: rollEast,
  2: rollWest,
  3: rollNorth,
  4: rollSouth,
};

const dirs = {
  1: [0, 1],
  2: [0, -1],
  3: [-1, 0],
  4: [1, 0],
};

function isValidMove(x, y) {
  return x >= 0 && x < N && y >= 0 && y < M;
}

for (const c of cmd) {
  const [dx, dy] = dirs[c];
  const nx = x + dx;
  const ny = y + dy;
  if (!isValidMove(nx, ny)) continue;

  roll[c]();
  if (board[nx][ny] === 0) {
    board[nx][ny] = dice[1];
  } else {
    dice[1] = board[nx][ny];
    board[nx][ny] = 0;
  }
  x = nx;
  y = ny;
  console.log(dice[0]);
}
