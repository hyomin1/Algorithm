const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const info = input.slice(1).map((l) => l.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

for (const [a, b, c] of info) {
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

const visited = Array.from({ length: N + 1 }).fill(-1);
function dfs(node, cost, visited) {
  visited[node] = cost;

  for (const [next, nextCost] of graph[node]) {
    if (visited[next] === -1) {
      visited[next] = cost + nextCost;
      dfs(next, cost + nextCost, visited);
    }
  }
}

dfs(1, 0, visited);
let max = visited[1];
let maxNode = 1;
for (let i = 2; i <= N; i++) {
  if (max < visited[i]) {
    max = visited[i];
    maxNode = i;
  }
}

const visited2 = Array.from({ length: N + 1 }).fill(-1);
dfs(maxNode, 0, visited2);

console.log(Math.max(...visited2));
