const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let index = 0;
const dx = [0, 0, -1, 1, 1, -1, 1, -1];
const dy = [1, -1, 0, 0, 1, 1, -1, -1];

function dfs(y, x, w, h, visited, map) {
  visited[y][x] = true;
  for (let i = 0; i < 8; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;

    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < w &&
      ny < h &&
      !visited[ny][nx] &&
      map[ny][nx] === 1
    ) {
      dfs(ny, nx, w, h, visited, map);
    }
  }
}

while (true) {
  const [w, h] = input[index].split(" ").map(Number);
  if (w === 0 && h === 0) break;
  index++;

  const map = [];
  const visited = Array(h)
    .fill()
    .map(() => Array(w).fill(false));
  for (let i = 0; i < h; i++) {
    const row = input[index++].split(" ").map(Number);
    map.push(row);
  }
  let answer = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!visited[i][j] && map[i][j] === 1) {
        dfs(i, j, w, h, visited, map);
        answer++;
      }
    }
  }
  console.log(answer);
}
