const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

let idx = 0;

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

while (true) {
  const [w, h] = input[idx++].split(' ').map(Number);
  if (w === 0 && h === 0) break;
  const board = [];
  let startY = 0;
  let startX = 0;
  const dirtySpots = [];

  for (let y = 0; y < h; y++) {
    const row = input[idx++].split('');
    for (let x = 0; x < w; x++) {
      if (row[x] === 'o') {
        startY = y;
        startX = x;
      } else if (row[x] === '*') {
        dirtySpots.push([y, x]);
      }
    }
    board.push(row);
  }
  const dirtyCount = dirtySpots.length;

  const visited = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => Array(1 << dirtyCount).fill(false))
  );
  visited[startY][startX][0] = true;

  const queue = [[startY, startX, 0, 0]];
  let answer = -1;

  while (queue.length) {
    const [y, x, mask, count] = queue.shift();

    if (mask === (1 << dirtyCount) - 1) {
      answer = count;
      break;
    }

    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      if (ny < 0 || ny >= h || nx < 0 || nx >= w || board[ny][nx] === 'x')
        continue;

      let newMask = mask;

      for (let j = 0; j < dirtyCount; j++) {
        if (ny === dirtySpots[j][0] && nx === dirtySpots[j][1]) {
          newMask = mask | (1 << j);
          break;
        }
      }
      if (!visited[ny][nx][newMask]) {
        visited[ny][nx][newMask] = true;
        queue.push([ny, nx, newMask, count + 1]);
      }
    }
  }
  console.log(answer);
}
