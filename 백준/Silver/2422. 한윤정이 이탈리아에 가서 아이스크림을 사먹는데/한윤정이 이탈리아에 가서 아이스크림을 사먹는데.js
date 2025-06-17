const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const set = new Set();

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  set.add(`${a},${b}`);
  set.add(`${b},${a}`);
}
let answer = 0;

for (let i = 1; i <= N - 2; i++) {
  for (let j = i + 1; j <= N - 1; j++) {
    if (set.has(`${i},${j}`)) continue;
    for (let k = j + 1; k <= N; k++) {
      if (set.has(`${i},${k}`) || set.has(`${j},${k}`)) continue;
      answer++;
    }
  }
}
console.log(answer);
