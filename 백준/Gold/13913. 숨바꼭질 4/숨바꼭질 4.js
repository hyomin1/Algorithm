const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const visited = Array.from({ length: 100001 }).fill(false);

const parent = Array.from({ length: 100001 }).fill(-1);
const queue = [[N, 0]];
let front = 0;
visited[N] = true;
let answer = Infinity;
while (front < queue.length) {
  const [cur, time] = queue[front++];

  if (cur === K) {
    answer = time;
    break;
  }

  const next = [cur + 1, cur - 1, cur * 2];

  for (const n of next) {
    if (n < 0 || n > 100000) continue;
    if (visited[n]) continue;

    queue.push([n, time + 1]);
    visited[n] = true;
    parent[n] = cur;
  }
}

let cur = K;
const res = [];
while (cur !== -1) {
  res.push(cur);
  cur = parent[cur];
}
res.reverse();
console.log(answer);
console.log(res.join(' '));
