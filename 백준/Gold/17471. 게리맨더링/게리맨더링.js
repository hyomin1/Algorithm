const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const person = input[1].split(' ').map(Number);

let idx = 2;

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= N; i++) {
  const info = input[idx++].split(' ').slice(1).map(Number);
  for (const node of info) graph[i].push(node);
}

// N <= 10 이하

const selected = Array(N + 1).fill(false);

let answer = Infinity;

function isConnected(group) {
  const visited = Array(N + 1).fill(false);

  const queue = [];

  let start = -1;
  for (let i = 1; i <= N; i++) {
    if (selected[i] === group) {
      start = i;
      break;
    }
  }

  //if (start === -1) return false;
  let count = 1;
  queue.push(start);
  visited[start] = true;

  while (queue.length) {
    const node = queue.shift();

    for (const next of graph[node]) {
      if (visited[next] || selected[next] !== group) continue;

      visited[next] = true;
      queue.push(next);
      count++;
    }
  }
  const total = selected.slice(1).filter((v) => v === group).length;

  return total === count;
}

function dfs(idx) {
  if (idx === N + 1) {
    const hasA = selected.slice(1).some((v) => v === true);
    const hasB = selected.slice(1).some((v) => v === false);
    if (!hasA || !hasB) return;

    if (!isConnected(true)) return;
    if (!isConnected(false)) return;

    let groupA = 0;
    let groupB = 0;

    for (let i = 1; i <= N; i++) {
      if (selected[i]) groupA += person[i - 1];
      else groupB += person[i - 1];
    }
    answer = Math.min(answer, Math.abs(groupA - groupB));

    return;
  }

  selected[idx] = true;
  dfs(idx + 1);

  selected[idx] = false;
  dfs(idx + 1);
}

for (let i = 1; i <= N; i++) {
  dfs(i);
}
console.log(answer === Infinity ? -1 : answer);
