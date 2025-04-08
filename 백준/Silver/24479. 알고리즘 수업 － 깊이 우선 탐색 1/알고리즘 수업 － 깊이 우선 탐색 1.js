const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 정점, 간선, 시작점
const [n, m, r] = input[0].split(" ").map(Number);

const graph = {};
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let i = 1; i <= m; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}
for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}
const visited = new Set();
const answer = Array(n + 1).fill(0);
let count = 1;
function dfs(node) {
  visited.add(node);
  answer[node] = count++;
  for (const next of graph[node] || []) {
    if (!visited.has(next)) {
      dfs(next);
    }
  }
}
dfs(r, 0);
for (let i = 1; i <= n; i++) {
  console.log(answer[i]);
}
