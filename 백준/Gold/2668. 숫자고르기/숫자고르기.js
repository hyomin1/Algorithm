const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const graph = {};

for (let i = 1; i <= N; i++) {
  graph[i] = Number(input[i]);
}
const visited = Array.from({ length: N + 1 }).fill(false);
const answer = [];

function dfs(node, path, set) {
  if (set.has(node)) {
    const index = path.indexOf(node);
    const cycle = path.slice(index);
    answer.push(...cycle);

    cycle.forEach((c) => (visited[c] = true));
    return;
  }
  path.push(node);
  set.add(node);

  dfs(graph[node], path, set);
  visited[node] = true;
}
for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i, [], new Set());
  }
}

const answerSet = new Set(answer);
console.log(answerSet.size);
const res = [...answerSet].sort((a, b) => a - b);
res.forEach((re) => console.log(re));
