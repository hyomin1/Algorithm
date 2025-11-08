const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
// N: 사람의 수 M: 파티의 수

const truth = input[1].split(' ').map(Number).slice(1);
const graph = Array.from({ length: N + 1 }, () => []);
const parties = [];

for (let i = 2; i < 2 + M; i++) {
  const people = input[i].split(' ').map(Number).slice(1);
  parties.push(people);

  for (let j = 0; j < people.length; j++) {
    for (let k = j + 1; k < people.length; k++) {
      graph[people[j]].push(people[k]);
      graph[people[k]].push(people[j]);
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

for (const t of truth) {
  dfs(t);
}
let answer = 0;
for (const people of parties) {
  let found = false;
  for (const p of people) {
    if (visited[p]) {
      found = true;
      break;
    }
  }
  if (!found) answer++;
}
console.log(answer);
