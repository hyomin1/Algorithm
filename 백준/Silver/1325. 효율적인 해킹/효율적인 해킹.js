const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  graph[v].push(u);
}

function bfs(i) {
  const visited = Array(N + 1).fill(false);
  let count = 1;
  visited[i] = true;
  const queue = [i];

  while (queue.length > 0) {
    const node = queue.shift();
    count++;
    for (let i = 0; i < graph[node].length; i++) {
      let value = graph[node][i];
      if (!visited[value]) {
        visited[value] = true;
        queue.push(value);
      }
    }
  }
  return count;
}
let max = 0;
const result = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  result[i] = bfs(i);
  max = Math.max(max, result[i]);
}
const answer = [];
for (let i = 1; i <= N; i++) {
  if (max === result[i]) {
    answer.push(i);
  }
}
console.log(answer.join(' '));
