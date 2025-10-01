const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split('\n');

const [N, d, k, c] = input[0].split(' ').map(Number);

const count = Array(d + 1).fill(0);

const sushi = input.slice(1).map(Number);
let kind = 0;
let answer = 0;

for (let i = 0; i < k; i++) {
  count[sushi[i]]++;
  if (count[sushi[i]] === 1) kind++;
}

answer = kind + (count[c] === 0 ? 1 : 0);

for (let i = 1; i < N; i++) {
  const left = sushi[i - 1];
  count[left]--;
  if (count[left] === 0) kind--;

  const right = sushi[(i + k - 1) % N];
  count[right]++;
  if (count[right] === 1) kind++;

  answer = Math.max(answer, kind + (count[c] === 0 ? 1 : 0));
}

console.log(answer);
