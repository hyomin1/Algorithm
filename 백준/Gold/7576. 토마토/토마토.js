const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const tomatoes = input.slice(1).map((line) => line.split(' ').map(Number));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const queue = [];

for (let i = 0; i < tomatoes.length; i++) {
  for (let j = 0; j < tomatoes[i].length; j++) {
    if (tomatoes[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}

function isValidMove(y, x) {
  return (
    x >= 0 &&
    y >= 0 &&
    y < tomatoes.length &&
    x < tomatoes[0].length &&
    tomatoes[y][x] === 0
  );
}

let index = 0;

while (index < queue.length) {
  const [y, x] = queue[index++];

  for (let i = 0; i < 4; i++) {
    const ny = dy[i] + y;
    const nx = dx[i] + x;
    if (!isValidMove(ny, nx)) continue;
    tomatoes[ny][nx] = tomatoes[y][x] + 1;
    queue.push([ny, nx]);
  }
}

for (let i = 0; i < tomatoes.length; i++) {
  for (let j = 0; j < tomatoes[i].length; j++) {
    if (tomatoes[i][j] === 0) {
      console.log(-1);
      return;
    }
  }
}

console.log(Math.max(...tomatoes.flat()) - 1);
