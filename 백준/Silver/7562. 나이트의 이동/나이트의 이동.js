const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const T = parseInt(input[0]);
let idx = 1;

const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];
for (let t = 1; t <= T; t++) {
  const N = Number(input[idx++]);

  const [startY, startX] = input[idx++].split(' ').map(Number);
  const [endY, endX] = input[idx++].split(' ').map(Number);

  if (startX === endX && startY === endY) {
    console.log(0);
    continue;
  }
  const visited = Array(N)
    .fill()
    .map(() => Array(N).fill(false));
  const queue = [[startY, startX, 0]];
  visited[startY][startX] = true;

  let found = false;
  while (queue.length && !found) {
    const [y, x, count] = queue.shift();

    for (let i = 0; i < dx.length; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[ny][nx]) {
        if (ny === endY && nx === endX) {
          console.log(count + 1);
          found = true;
          break;
        }
        visited[ny][nx] = true;
        queue.push([ny, nx, count + 1]);
      }
    }
  }
}
