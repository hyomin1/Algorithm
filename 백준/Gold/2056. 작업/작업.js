const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const N = parseInt(input[0]);

const graph = Array.from({ length: N + 1 }, () => []);
const degree = Array(N + 1).fill(0);
const time = Array(N + 1).fill(0);
const result = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  const arr = input[i].split(' ').map(Number);
  time[i] = arr[0];
  const count = arr[1];
  for (let j = 0; j < count; j++) {
    const prev = arr[2 + j]; // 선행 작업
    graph[prev].push(i);
    degree[i]++;
  }
}

const queue = [];

for (let i = 1; i <= N; i++) {
  if (degree[i] === 0) {
    queue.push([i]);
    result[i] = time[i];
  }
}

while (queue.length) {
  const cur = queue.shift();

  for (const next of graph[cur]) {
    result[next] = Math.max(result[next], result[cur] + time[next]);
    degree[next]--;
    if (degree[next] === 0) queue.push(next);
  }
}
console.log(Math.max(...result));
