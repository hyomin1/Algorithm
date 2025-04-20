const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const graph = input.slice(1).map(line => line.split(' ').map(Number));
let maxHeight = 0;

for (let row of graph) {
  maxHeight = Math.max(maxHeight, ...row);
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let answer = 0;

for (let rain = 0; rain <= maxHeight; rain++) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && graph[i][j] > rain) {
        // BFS 시작
        const queue = new Array(N * N);
        let front = 0, rear = 0;
        queue[rear++] = [i, j];
        visited[i][j] = true;
        count++;

        while (front < rear) {
          const [y, x] = queue[front++];
          for (let d = 0; d < 4; d++) {
            const ny = y + dy[d];
            const nx = x + dx[d];
            if (
              ny >= 0 && nx >= 0 && ny < N && nx < N &&
              !visited[ny][nx] && graph[ny][nx] > rain
            ) {
              visited[ny][nx] = true;
              queue[rear++] = [ny, nx];
            }
          }
        }
      }
    }
  }

  answer = Math.max(answer, count);
}

console.log(answer);
