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
  const [N, K] = input[idx++].split(' ').map(Number);
  const time = input[idx++].split(' ').map(Number);
  const degree = Array(N).fill(0);
  const result = Array(N).fill(0);
  const graph = Array.from({ length: N }, () => []);
  for (let i = 0; i < K; i++) {
    const [X, Y] = input[idx++].split(' ').map(Number);
    graph[X - 1].push(Y - 1);
    degree[Y - 1]++;
  }
  const W = Number(input[idx++]);

  const queue = [];

  for (let i = 0; i < degree.length; i++) {
    if (degree[i] === 0) {
      queue.push(i);
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
  console.log(result[W - 1]);
}
