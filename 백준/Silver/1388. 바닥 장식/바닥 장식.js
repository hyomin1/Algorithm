const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");
const n = parseInt(input[0]);
const [rows, cols] = input[0].split(" ").map(Number);

const arr = input.slice(1);
const visited = Array(rows)
  .fill()
  .map(() => Array(cols).fill(false));

function dfs(y, x, point) {
  visited[y][x] = true;

  const dir = point === "-" ? [0, 1] : [1, 0];
  const [dy, dx] = dir;
  const [ny, nx] = [y + dy, x + dx];

  if (
    ny >= 0 &&
    nx >= 0 &&
    nx < cols &&
    ny < rows &&
    !visited[ny][nx] &&
    arr[ny][nx] === point
  ) {
    dfs(ny, nx, arr[ny][nx]);
  }
}

let answer = 0;
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    if (!visited[i][j]) {
      dfs(i, j, arr[i][j]);
      answer++;
    }
  }
}
console.log(answer);
