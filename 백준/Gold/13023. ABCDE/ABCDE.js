const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N }, () => []);
const visited = Array.from({ length: N }).fill(false);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

function dfs(node, depth) {
  visited[node] = true;
  if (depth === 4) {
    console.log(1);
    process.exit(0);
  }

  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next, depth + 1);
    }
  }

  visited[node] = false;
}
for (let i = 0; i < N; i++) {
  dfs(i, 0);
}
console.log(0);
