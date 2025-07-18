const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [M, N, H] = input[0].split(' ').map(Number);

const tomato = [];

let idx = 1;
for (let z = 0; z < H; z++) {
  const layer = [];
  for (let y = 0; y < N; y++) {
    const row = input[idx++].split(' ').map(Number);
    layer.push(row);
  }
  tomato.push(layer);
}

let front = 0;
let answer = 0;

const dx = [0, 0, 1, -1, 0, 0];
const dy = [1, -1, 0, 0, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];

const queue = [];

for (let z = 0; z < H; z++) {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (tomato[z][y][x] === 1) queue.push([z, y, x, 0]);
    }
  }
}

while (front < queue.length) {
  const [z, y, x, day] = queue[front++];
  answer = Math.max(answer, day);
  for (let l = 0; l < 6; l++) {
    const nx = dx[l] + x;
    const ny = dy[l] + y;
    const nz = dz[l] + z;
    if (
      nx >= 0 &&
      nx < M &&
      ny >= 0 &&
      ny < N &&
      nz >= 0 &&
      nz < H &&
      tomato[nz][ny][nx] === 0
    ) {
      tomato[nz][ny][nx] = 1;
      queue.push([nz, ny, nx, day + 1]);
    }
  }
}

function checkTomato() {
  for (let z = 0; z < H; z++) {
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        if (tomato[z][y][x] === 0) return false;
      }
    }
  }
  return true;
}

if (checkTomato()) console.log(answer);
else console.log(-1);
