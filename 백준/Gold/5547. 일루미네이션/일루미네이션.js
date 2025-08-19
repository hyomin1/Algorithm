const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [W, H] = input[0].split(' ').map(Number);
const board = input.slice(1).map((line) => line.split(' ').map(Number));
const padding = Array.from({ length: H + 2 }, () =>
  Array.from({ length: W + 2 }).fill(0)
);
const visited = Array.from({ length: H + 2 }, () =>
  Array.from({ length: W + 2 }).fill(false)
);
for (let i = 1; i < 1 + H; i++) {
  for (let j = 1; j < 1 + W; j++) {
    padding[i][j] = board[i - 1][j - 1];
  }
}

function direction(row) {
  if (row % 2 === 0) {
    return [
      [0, -1],
      [0, 1],
      [-1, -1],
      [-1, 0],
      [1, -1],
      [1, 0],
    ];
  }
  return [
    [0, -1],
    [0, 1],
    [-1, 0],
    [-1, 1],
    [1, 0],
    [1, 1],
  ];
}

const queue = [[0, 0]];
let answer = 0;

while (queue.length) {
  const [y, x] = queue.shift();

  for (const [dy, dx] of direction(y)) {
    const ny = y + dy;
    const nx = x + dx;
    if (nx < 0 || nx >= W + 2 || ny < 0 || ny >= H + 2) continue;

    if (padding[ny][nx] === 1) {
      answer++;
    } else if (padding[ny][nx] === 0 && !visited[ny][nx]) {
      visited[ny][nx] = true;
      queue.push([ny, nx]);
    }
  }
}
console.log(answer);
