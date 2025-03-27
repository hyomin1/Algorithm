const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const visited = Array(N + 1).fill(false);

const graph = {};
for (let i = 1; i <= N; i++) {
  graph[i] = [];
}

for (let i = 1; i <= N - 1; i++) {
  const [n1, n2] = input[i].split(" ").map(Number);
  graph[n1].push(n2);
  graph[n2].push(n1);
}
const answer = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
  }
}

function dfs(node) {
  if (visited[node]) return;
  visited[node] = true;

  for (const next of graph[node]) {
    if (!visited[next]) {
      answer[next] = node;
      dfs(next);
    }
  }
}

for (let i = 2; i <= N; i++) {
  console.log(answer[i]);
}
