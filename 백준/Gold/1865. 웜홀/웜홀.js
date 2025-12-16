const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');
let idx = 0;

const TC = Number(input[idx++]);
for (let tc = 0; tc < TC; tc++) {
  const [N, M, W] = input[idx++].split(' ').map(Number);

  const edges = [];

  for (let i = 0; i < M; i++) {
    const [S, E, T] = input[idx++].split(' ').map(Number);

    edges.push([S, E, T]);
    edges.push([E, S, T]);
  }

  for (let i = 0; i < W; i++) {
    const [S, E, T] = input[idx++].split(' ').map(Number);

    edges.push([S, E, -T]);
  }

  const dist = Array.from({ length: N + 1 }).fill(0);

  let found = false;

  for (let i = 1; i <= N; i++) {
    for (const [u, v, w] of edges) {
      if (dist[v] > dist[u] + w) {
        dist[v] = dist[u] + w;

        if (i === N) found = true;
      }
    }
  }
  console.log(found ? 'YES' : 'NO');
}
