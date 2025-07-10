const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);

const queue = [[N, 0]];
const visited = Array(100001).fill(false);
visited[N] = true;

while (queue.length) {
  const [position, time] = queue.shift();
  if (position === K) {
    console.log(time);
    break;
  }

  const nextMoves = [position - 1, position + 1, position * 2];
  for (const next of nextMoves) {
    if (next >= 0 && next <= 100000 && !visited[next]) {
      visited[next] = true;
      queue.push([next, time + 1]);
    }
  }
}
