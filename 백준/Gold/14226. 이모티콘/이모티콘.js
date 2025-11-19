const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const S = Number(input[0]);

const queue = [[1, 0, 0]];
const visited = Array.from({ length: 10001 }, () => Array(10001).fill(false));
visited[1][0] = true;
while (queue.length) {
  const [screen, clipboard, time] = queue.shift();

  if (screen === S) {
    console.log(time);
    break;
  }

  if (!visited[screen][screen]) {
    visited[screen][screen] = true;
    queue.push([screen, screen, time + 1]);
  }
  if (!visited[screen + clipboard][clipboard]) {
    visited[screen + clipboard][clipboard] = true;
    queue.push([screen + clipboard, clipboard, time + 1]);
  }
  if (screen > 0 && !visited[screen - 1][clipboard]) {
    visited[screen - 1][clipboard] = true;
    queue.push([screen - 1, clipboard, time + 1]);
  }
}
