const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const [start, end] = input[M + 1].split(' ').map(Number);

const answer = [];

bfs(start, end, Array.from({ length: N + 1 }).fill(false));

function bfs(s, e, block) {
  const queue = [[s, [s]]];
  const visited = Array.from({ length: N + 1 }).fill(false);

  visited[s] = true;
  while (queue.length) {
    const [cur, path] = queue.shift();

    if (cur === e) {
      answer.push(...path);
      break;
    }
    for (const next of graph[cur]) {
      if (!visited[next] && !block[next]) {
        visited[next] = true;
        queue.push([next, [...path, next]]);
      }
    }
  }
}
const block = Array.from({ length: N + 1 }).fill(false);
for (const node of answer) {
  block[node] = true;
}
block[start] = false;
block[end] = false;
bfs(end, start, block);

console.log(answer.length - 2);
