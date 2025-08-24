const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [R, C] = input[0].split(' ').map(Number);

const board = input.slice(1).map((line) => line.split(''));

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const fireQueue = [];
const fireDist = Array.from({ length: R }, () =>
  Array.from({ length: C }).fill(-1)
);
const personQueue = [];
const visited = Array.from({ length: R }, () =>
  Array.from({ length: C }).fill(false)
);

for (let y = 0; y < R; y++) {
  for (let x = 0; x < C; x++) {
    if (board[y][x] === 'J') {
      personQueue.push([y, x, 0]);
      visited[y][x] = true;
    } else if (board[y][x] === 'F') {
      fireQueue.push([y, x]);
      fireDist[y][x] = 0;
    }
  }
}

while (fireQueue.length) {
  const [y, x] = fireQueue.shift();
  for (const [dy, dx] of dir) {
    const nx = dx + x;
    const ny = dy + y;
    if (
      nx < 0 ||
      nx >= C ||
      ny < 0 ||
      ny >= R ||
      board[ny][nx] === '#' ||
      fireDist[ny][nx] !== -1
    )
      continue;
    fireDist[ny][nx] = fireDist[y][x] + 1;
    fireQueue.push([ny, nx]);
  }
}

while (personQueue.length) {
  const [y, x, time] = personQueue.shift();

  // 가장자리일때 탈출
  if (y === 0 || y === R - 1 || x === 0 || x === C - 1) {
    console.log(time + 1);
    process.exit(0);
  }
  for (const [dy, dx] of dir) {
    const nx = dx + x;
    const ny = dy + y;
    if (
      nx < 0 ||
      nx >= C ||
      ny < 0 ||
      ny >= R ||
      visited[ny][nx] ||
      board[ny][nx] === '#'
    )
      continue;
    if (time + 1 < fireDist[ny][nx] || fireDist[ny][nx] === -1) {
      visited[ny][nx] = true;
      personQueue.push([ny, nx, time + 1]);
    }
  }
}

console.log('IMPOSSIBLE');
