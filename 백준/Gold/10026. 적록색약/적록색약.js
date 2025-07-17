const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const board = input.slice(1).map((line) => line.split(''));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const visited = Array(N)
  .fill()
  .map(() => Array(N).fill(false));

function bfs(board, target, y, x, visited) {
  const queue = [[y, x]];
  visited[y][x] = true;

  while (queue.length) {
    const [y, x] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        board[ny][nx] === target &&
        !visited[ny][nx]
      ) {
        queue.push([ny, nx]);
        visited[ny][nx] = true;
      }
    }
  }
}

let count1 = 0;
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (!visited[i][j]) {
      bfs(board, board[i][j], i, j, visited);
      count1++;
    }
  }
}

const board2 = board.map((row) =>
  row.map((color) => (color === 'G' ? 'R' : color))
);
const visited2 = Array(N)
  .fill()
  .map(() => Array(N).fill(false));

let count2 = 0;

for (let i = 0; i < board2.length; i++) {
  for (let j = 0; j < board2[i].length; j++) {
    if (!visited2[i][j]) {
      bfs(board2, board2[i][j], i, j, visited2);
      count2++;
    }
  }
}

console.log(count1, count2);
