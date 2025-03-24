const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const [n, m, v] = input[0].split(" ").map(Number);
let visited = Array(n + 1).fill(false);
const graph = {};
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let i = 1; i <= m; i++) {
  const [n1, n2] = input[i].split(" ").map(Number);
  graph[n1].push(n2);
  graph[n2].push(n1);
}

for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}
let dfsAnswer = [];
function dfs(node) {
  visited[node] = true;
  dfsAnswer.push(node);
  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}

dfs(v);

console.log(dfsAnswer.join(" "));

visited = Array(n + 1).fill(false);
let bfsAnswer = [];
const queue = [v];
visited[v] = true;

while (queue.length > 0) {
  const node = queue.shift();
  bfsAnswer.push(node);

  for (const next of graph[node]) {
    if (!visited[next]) {
      visited[next] = true;
      queue.push(next);
    }
  }
}

console.log(bfsAnswer.join(" "));
