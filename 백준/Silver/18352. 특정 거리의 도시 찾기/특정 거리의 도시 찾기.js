const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M, K, X] = input[0].split(' ').map(Number);

const graph = {};
const answer = [];
for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  if (!graph[u]) graph[u] = [];
  graph[u].push(v);
}

const visited = Array.from({ length: N + 1 }).fill(false);
const queue = [[X, 0]];
visited[X] = true;
let front = 0;
while (front < queue.length) {
  const [node, depth] = queue[front++];
  if (depth === K) {
    answer.push(node);
  }

  for (const next of graph[node] || []) {
    if (!visited[next]) {
      visited[next] = true;
      queue.push([next, depth + 1]);
    }
  }
}
answer.sort((a, b) => a - b);
if (answer.length === 0) {
  console.log(-1);
} else {
  answer.forEach((v) => console.log(v));
}
