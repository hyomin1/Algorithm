const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const degree = Array(N + 1).fill(0);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const arr = input[i].split(' ').map(Number);

  const order = arr.slice(1);
  for (let j = 0; j < order.length - 1; j++) {
    const a = order[j];
    const b = order[j + 1];
    graph[a].push(b);
    degree[b]++;
  }
}

const queue = [];

// 차수 0인거 넣기
for (let i = 1; i <= N; i++) {
  if (degree[i] === 0) queue.push(i);
}

const answer = [];

while (queue.length) {
  const cur = queue.shift();
  answer.push(cur);
  for (const next of graph[cur]) {
    degree[next]--;
    if (degree[next] === 0) queue.push(next);
  }
}

if (answer.length < N) console.log(0);
else console.log(answer.join('\n'));
