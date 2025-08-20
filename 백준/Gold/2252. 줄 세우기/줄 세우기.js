const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
// 위상 정렬 문제

const graph = Array.from({ length: N + 1 }, () => []);
const indegree = Array.from({ length: N + 1 }).fill(0); // 진입 차수

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  graph[u].push(v);
  indegree[v]++;
}

const answer = [];
const queue = [];

for (let i = 1; i <= N; i++) {
  if (indegree[i] === 0) queue.push(i);
}

while (queue.length) {
  const cur = queue.shift();
  answer.push(cur);

  for (const next of graph[cur]) {
    indegree[next]--;

    if (indegree[next] === 0) queue.push(next);
  }
}
console.log(answer.join(' '));
