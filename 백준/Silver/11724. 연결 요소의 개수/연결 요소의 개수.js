const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const visited = Array(N + 1).fill(false);
const graph = {};
for (let i = 1; i <= N; i++) {
  graph[i] = [];
}

for (let i = 1; i <= M; i++) {
  const [n1, n2] = input[i].split(" ").map(Number);
  graph[n1].push(n2);
  graph[n2].push(n1);
}

function dfs(node) {
  visited[node] = true;
  for (const next of graph[node]) {
    if (!visited[next]) {
      visited[next] = true;
      dfs(next);
    }
  }
}
let answer = 0;
for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    answer++;
  }
}
console.log(answer);
