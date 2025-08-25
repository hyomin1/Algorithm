const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const T = parseInt(input[0]);

let idx = 1;

for (let i = 0; i < T; i++) {
  const n = Number(input[idx++]);
  const graph = [0, ...input[idx++].split(' ').map(Number)];
  const visited = Array(n + 1).fill(false);
  const finished = Array(n + 1).fill(false);
  let cnt = 0;

  function dfs(node) {
    visited[node] = true;
    const next = graph[node];

    if (!visited[next]) {
      dfs(next);
    } else if (!finished[next]) {
      for (let i = next; i !== node; i = graph[i]) {
        cnt++;
      }
      cnt++;
    }
    finished[node] = true;
  }
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) dfs(i);
  }
  console.log(n - cnt);
}
