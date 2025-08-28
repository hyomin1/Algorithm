const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const K = Number(input[0]);

let idx = 1;
for (let i = 0; i < K; i++) {
  const [V, E] = input[idx++].split(" ").map(Number);

  const graph = Array.from({ length: V + 1 }, () => []);
  const color = Array(V + 1).fill(0);
  for (let j = 0; j < E; j++) {
    const [u, v] = input[idx++].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  function bfs() {
    for (let start = 1; start <= V; start++) {
      if (color[start] !== 0) continue;

      const queue = [start];
      color[start] = 1;

      while (queue.length) {
        const node = queue.shift();

        for (const next of graph[node]) {
          if (color[next] === 0) {
            color[next] = -color[node];
            queue.push(next);
          } else if (color[next] === color[node]) {
            return false;
          }
        }
      }
    }
    return true;
  }
  if (bfs()) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
