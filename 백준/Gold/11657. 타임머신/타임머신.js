const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const edges = input.slice(1).map((v) => v.split(' ').map(Number));

const dist = Array.from({ length: N + 1 }).fill(Infinity);
dist[1] = 0;

let found = false;
for (let i = 1; i <= N; i++) {
  for (const [a, b, c] of edges) {
    if (dist[a] !== Infinity && dist[b] > dist[a] + c) {
      dist[b] = dist[a] + c;

      if (i === N) {
        found = true;
      }
    }
  }
}

if (found) {
  console.log(-1);
} else {
  const result = [];
  for (let i = 2; i <= N; i++) {
    result.push(dist[i] === Infinity ? -1 : dist[i]);
  }
  console.log(result.join('\n'));
}
