const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const T = parseInt(input[0]);
const answer = [];
for (let i = 1; i <= T; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  const d = y - x;

  const k = Math.floor(Math.sqrt(d));

  if (d === k * k) answer.push(2 * k - 1);
  else if (d <= k * k + k) answer.push(2 * k);
  else answer.push(2 * k + 1);
}
console.log(answer.join('\n'));
