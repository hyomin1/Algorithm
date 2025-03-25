const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const n = parseInt(input[0]);
const m = parseInt(input[1]);
const arr = input.slice(2, m+2).map((v) => v.split(" ").map((d) => Number(d)));

const visited = Array(n + 1).fill(false);
const graph = {};
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let i = 0; i < arr.length; i++) {
  const [n1, n2] = arr[i];
  graph[n1].push(n2);
  graph[n2].push(n1);
}
let answer = 0;

function dfs(node) {
  if(visited[node]) return;
  visited[node] = true;
  for (const next of graph[node]) {
    if (!visited[next]) {
      answer++;
      dfs(next);
    }
  }
}
dfs(1);
console.log(answer);
