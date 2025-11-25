const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const visited = Array.from({ length: 100001 }).fill(-1);
const queue = [[N, 0]];
visited[N] = 0;

let front = 0;

let answer = Infinity;
let count = 0;

while (front < queue.length) {
  const [pos, time] = queue[front++];
  if (time > answer) continue;
  if (pos === K) {
    if (time < answer) {
      answer = time;
      count = 1;
    } else if (time === answer) {
      count++;
    }
    continue;
  }
  const next = [pos - 1, pos + 1, pos * 2];

  for (const n of next) {
    if (n < 0 || n > 100000) continue;

    if (visited[n] === -1 || visited[n] === time + 1) {
      visited[n] = time + 1;
      queue.push([n, time + 1]);
    }
  }
}

console.log(answer);
console.log(count);
