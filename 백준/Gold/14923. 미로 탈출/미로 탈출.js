const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const [Hx, Hy] = input[1].split(' ').map(Number);
const [Ex, Ey] = input[2].split(' ').map(Number);

const board = input.slice(3).map((v) => v.split(' ').map(Number));

const queue = [[Hx - 1, Hy - 1, 0, 0]];
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(2).fill(false))
);
visited[Hx - 1][Hy - 1][0] = true;

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

while (queue.length) {
  const [x, y, count, answer] = queue.shift();

  if (x === Ex - 1 && y === Ey - 1) {
    console.log(answer);
    process.exit(0);
  }

  for (const [dx, dy] of dirs) {
    const nx = dx + x;
    const ny = dy + y;
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

    if (board[nx][ny] === 1) {
      if (count === 0 && !visited[nx][ny][1]) {
        visited[nx][ny][1] = true;
        queue.push([nx, ny, 1, answer + 1]);
      }
    } else {
      if (!visited[nx][ny][count]) {
        visited[nx][ny][count] = true;
        queue.push([nx, ny, count, answer + 1]);
      }
    }
  }
}
console.log(-1);
