const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N] = input[0].split(" ").map(Number);
const board = Array(M)
  .fill()
  .map(() => Array(N).fill(0));
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    board[i][j] = Number(input[i + 1][j]);
  }
}

function isValidMove(x, y) {
  return x >= 0 && y >= 0 && x < N && y < M && board[y][x] === 0;
}
const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];
const queue = [];
for (let x = 0; x < N; x++) {
  if (board[0][x] === 0) {
    queue.push([0, x]);
  }
}

const visited = Array(M)
  .fill()
  .map(() => Array(N).fill(false));

let arrived = false;
while (queue.length > 0) {
  const [y, x] = queue.shift();
  if (y === M - 1) {
    arrived = true;
    break;
  }
  if (!visited[y][x]) {
    visited[y][x] = true;
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      if (!isValidMove(nx, ny)) continue;
      queue.push([ny, nx]);
    }
  }
}
const answer = arrived ? "YES" : "NO";
console.log(answer);
