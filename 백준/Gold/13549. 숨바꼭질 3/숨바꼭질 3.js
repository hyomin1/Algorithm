const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);

const visited = Array(100001).fill(Infinity);
visited[N] = 0;

const queue = [];
queue.push(N);

while (queue.length) {
  const cur = queue.shift();

  for (const [next, cost] of [
    [cur - 1, 1],
    [cur + 1, 1],
    [cur * 2, 0],
  ]) {
    if (next >= 0 && next < 100001 && visited[next] > visited[cur] + cost) {
      visited[next] = visited[cur] + cost;
      if (cost === 0) queue.unshift(next);
      else queue.push(next);
    }
  }
}

console.log(visited[K]);
