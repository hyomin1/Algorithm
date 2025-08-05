const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

let [startY, startX, endY, endX] = input[1].split(' ').map(Number);
startY--;
startX--;
endY--;
endX--;

const board = input.slice(2).map((line) => line.split(''));

const queue = [[startY, startX, 0]];

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const visited = Array(N)
  .fill()
  .map(() => Array(M).fill(false));
visited[startY][startX] = true;
while (queue.length) {
  const [y, x, count] = queue.shift();

  if (y === endY && x === endX) {
    console.log(count);
    break;
  }

  for (let i = 0; i < 4; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;
    if (nx >= 0 && nx < M && ny >= 0 && ny < N && !visited[ny][nx]) {
      visited[ny][nx] = true;
      if (board[ny][nx] === '0') {
        queue.unshift([ny, nx, count]);
      } else queue.push([ny, nx, count + 1]);
    }
  }
}
