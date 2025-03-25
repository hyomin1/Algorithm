const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const T = Number(input[0]);

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let index = 1;

for (let i = 0; i < T; i++) {
  const [M, N, K] = input[index].split(" ").map(Number);
  index++;
  const arr = Array(N)
    .fill()
    .map(() => Array(M).fill(0));
  const visited = Array(N)
    .fill()
    .map(() => Array(M).fill(false));
  let answer = 0;
  for (let j = 0; j < K; j++) {
    const [x, y] = input[index++].split(" ").map(Number);
    arr[y][x] = 1;
  }

  // bfs
  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr[j].length; k++) {
      if (!visited[j][k] && arr[j][k] === 1) {
        answer++; // BFS 시작 시 증가
        const queue = [[j, k]];
        visited[j][k] = true;

        while (queue.length > 0) {
          const [y, x] = queue.shift();
          for (let l = 0; l < 4; l++) {
            const nx = dx[l] + x;
            const ny = dy[l] + y;
            if (
              nx >= 0 &&
              ny >= 0 &&
              nx < M &&
              ny < N &&
              !visited[ny][nx] &&
              arr[ny][nx] === 1
            ) {
              visited[ny][nx] = true;
              queue.push([ny, nx]);
            }
          }
        }
      }
    }
  }
  console.log(answer);
}
