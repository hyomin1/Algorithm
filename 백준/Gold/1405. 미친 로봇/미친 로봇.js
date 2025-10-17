const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, e, w, s, n] = input[0].split(' ').map(Number);

const probs = [e / 100, w / 100, s / 100, n / 100];
const dirs = [
  [0, 1], // 동
  [0, -1], // 서
  [1, 0], // 남
  [-1, 0], // 북
];
const set = new Set();
let answer = 0;

function dfs(y, x, depth, prob) {
  if (depth === N) {
    answer += prob;
    return;
  }

  for (let i = 0; i < 4; i++) {
    const [dy, dx] = dirs[i];
    const ny = dy + y;
    const nx = dx + x;
    const key = `${ny},${nx}`;
    if (set.has(key) || probs[i] === 0) continue;
    set.add(key);
    dfs(ny, nx, depth + 1, prob * probs[i]);
    set.delete(key);
  }
}
set.add('0,0');
dfs(0, 0, 0, 1);
console.log(answer);
