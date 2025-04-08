const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);

const visited = Array(N)
  .fill()
  .map(() => Array(N).fill(false));
const board = Array(N)
  .fill()
  .map(() => Array(N).fill(0));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    board[i][j] = parseInt(input[i + 1][j]);
  }
}

function isValidMove(y, x) {
  return (
    x >= 0 && y >= 0 && x < N && y < N && board[y][x] === 1 && !visited[y][x]
  );
}
const queue = [];
const answer = [];
const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];
let total = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 1 && !visited[i][j]) {
      queue.push([i, j]);
      visited[i][j] = true;
      total++;
      let count = 1;
      while (queue.length > 0) {
        const [y, x] = queue.shift();
        for (let k = 0; k < 4; k++) {
          const ny = dy[k] + y;
          const nx = dx[k] + x;
          if (isValidMove(ny, nx)) {
            count++;
            visited[ny][nx] = true;
            queue.push([ny, nx]);
          }
        }
      }
      answer.push(count);
    }
  }
}
console.log(total);
answer.sort((a, b) => a - b);
answer.forEach((v) => console.log(v));
