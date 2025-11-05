const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);
const M = parseInt(input[1]);

const info = input.slice(2, N + 2).map((l) => l.split(' ').map(Number));

const plan = input[N + 2].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < info.length; i++) {
  for (let j = 0; j < info[i].length; j++) {
    if (info[i][j] === 1) {
      graph[i + 1].push(j + 1);
    }
  }
}
const visited = Array.from({ length: N + 1 }).fill(false);

function dfs(node) {
  visited[node] = true;

  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}
dfs(plan[0], visited);
for (let i = 1; i < plan.length; i++) {
  if (!visited[plan[i]]) {
    console.log('NO');
    process.exit(0);
  }
}
console.log('YES');
