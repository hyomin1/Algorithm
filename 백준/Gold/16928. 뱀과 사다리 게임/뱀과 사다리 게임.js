const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const obj = {};

for (let i = 1; i <= N + M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  obj[u] = v;
}

const visited = Array.from({ length: 101 }).fill(false);
visited[1] = true;

const queue = [[1, 0]];

while (queue.length) {
  const [cur, count] = queue.shift();
  if (cur === 100) {
    console.log(count);
    break;
  }

  for (let i = 1; i <= 6; i++) {
    let next = i + cur;
    if (next > 100) continue;
    if (obj[next]) {
      next = obj[next];
    }
    if (!visited[next]) {
      visited[next] = true;
      queue.push([next, count + 1]);
    }
  }
}
