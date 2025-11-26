const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const V = parseInt(input[0]);

const graph = Array.from({ length: V + 1 }, () => []);

for (let i = 1; i <= V; i++) {
  const arr = input[i].split(' ').map(Number).slice(0, -1);

  const node = arr[0];

  for (let j = 1; j < arr.length; j += 2) {
    graph[node].push([arr[j], arr[j + 1]]);
  }
}

// 지름 : 임의의 노드에서 가정 먼점에서 먼점
const visited = Array.from({ length: V + 1 }).fill(-1);
function dfs(node, cost, visited) {
  visited[node] = cost;

  for (const [next, nextCost] of graph[node]) {
    if (visited[next] === -1) {
      const newCost = cost + nextCost;
      visited[next] = newCost;
      dfs(next, newCost, visited);
    }
  }
}
dfs(1, 0, visited);

const max = Math.max(...visited);

let start = 0;
for (let i = 1; i < visited.length; i++) {
  if (max === visited[i]) {
    start = i;
    break;
  }
}
const visited2 = Array.from({ length: V + 1 }).fill(-1);

dfs(start, 0, visited2);
const answer = Math.max(...visited2);

console.log(answer);
