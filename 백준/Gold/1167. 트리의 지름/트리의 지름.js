const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const V = parseInt(input[0]);

const info = input.slice(1).map((l) => l.split(' ').map(Number));

const graph = Array.from({ length: V + 1 }, () => []);

for (const element of info) {
  const v = element[0];
  for (let j = 1; j < element.length - 1; j += 2) {
    graph[v].push([element[j], element[j + 1]]);
  }
}

const visited = Array.from({ length: V + 1 }).fill(-1);

function dfs(node, cost, visited) {
  visited[node] = cost;
  for (const [next, nextCost] of graph[node]) {
    if (visited[next] === -1) {
      visited[next] = cost + nextCost;
      dfs(next, cost + nextCost, visited);
    }
  }
}
let start = 1;
dfs(start, 0, visited);

const max = Math.max(...visited);

for (let i = 2; i < visited.length; i++) {
  if (visited[i] === max) {
    start = i;
    break;
  }
}
const visited2 = Array.from({ length: V + 1 }).fill(-1);
dfs(start, 0, visited2);

console.log(Math.max(...visited2));
