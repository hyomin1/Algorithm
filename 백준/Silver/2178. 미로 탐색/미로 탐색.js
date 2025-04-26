const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const map = [];

for (let i = 1; i <= N; i++) {
  map.push(input[i].split("").map(Number));
}

const visited = Array(N)
  .fill()
  .map(() => Array(M).fill(-1));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function isValidMove(x, y) {
  return (
    x >= 0 &&
    y >= 0 &&
    x < M &&
    y < N &&
    map[y][x] === 1 &&
    visited[y][x] === -1
  );
}

visited[0][0] = 1;
const queue = [[0, 0]];
while (queue.length > 0) {
  const [y, x] = queue.shift();
  for (let i = 0; i < 4; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;
    if (!isValidMove(nx, ny)) continue;
    visited[ny][nx] = visited[y][x] + 1;
    queue.push([ny, nx]);
  }
}
console.log(visited[N - 1][M - 1]);
