const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const info = input.slice(1).map((v) => v.split(' ').map(Number));

const dirs = {
  0: [1, 0],
  1: [0, -1],
  2: [-1, 0],
  3: [0, 1],
};

const board = Array.from({ length: 101 }, () => Array(101).fill(false));
let answer = 0;
for (const [x, y, d, g] of info) {
  const dir = [d];
  for (let i = 0; i < g; i++) {
    for (let j = dir.length - 1; j >= 0; j--) {
      const d = dir[j];
      dir.push((d + 1) % 4);
    }
  }
  board[y][x] = true;
  let ny = y;
  let nx = x;
  for (const element of dir) {
    const [dx, dy] = dirs[element];
    nx += dx;
    ny += dy;
    board[ny][nx] = true;
  }
}

for (let y = 0; y < 100; y++) {
  for (let x = 0; x < 100; x++) {
    if (
      board[y][x] &&
      board[y + 1][x] &&
      board[y][x + 1] &&
      board[y + 1][x + 1]
    )
      answer++;
  }
}
console.log(answer);
