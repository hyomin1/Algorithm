const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const n = parseInt(input[0]);
const [start, end] = input[1].split(" ").map(Number);
const m = parseInt(input[2]);

const graph = {};
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}
const visited = new Set();

let found = false;
function dfs(node, depth) {
  if (node === end) {
    found = true;
    console.log(depth);
    return;
  }
  visited.add(node);
  for (const neighbor of graph[node] || []) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      dfs(neighbor, depth + 1);
    }
  }
}

for (let i = 3; i < 3 + m; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}
dfs(start, 0);
if (!found) console.log(-1);
